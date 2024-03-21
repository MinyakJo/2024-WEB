import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useLocation, useNavigate } from "react-router-dom";
import QueryString from "qs";
import { fetch } from "apis/fetch";
import { getAccessTokenByKakao } from "apis/kakao";
import { useSetRecoilState } from "recoil";
import { loginHiddenAlertState } from "recoil/loginAtom";

const useKakao = () => {
  //useLocation
  const { search } = useLocation();

  //navigate
  const navigate = useNavigate();

  //cookie
  const [, setCookie] = useCookies(["kakao_token", "loginId", "id", "token"]);

  //recoil
  const setHiddenAlert = useSetRecoilState(loginHiddenAlertState);

  //function
  const setTokenAndGetInfo = async (code: string) => {
    const getToken = await getAccessTokenByKakao(code);

    if (getToken !== undefined) {
      setCookie("kakao_token", getToken);

      const fetchData = await fetch({
        method: "POST",
        url: `/auth/kakao/sign-in-by-token`,
        data: {
          accessToken: getToken,
        },
      });

      if (
        fetchData.data?.statusCode === 201 ||
        fetchData.data?.statusCode === 200
      ) {
        setCookie("loginId", fetchData.data.result?.loginId);
        setCookie("id", fetchData.data.result.id);
        setCookie("token", `Bearer ${fetchData.data.result.jwt}`);
        navigate("/", { replace: true });
      } else {
        alert("카카오 계정이 없어 회원가입 페이지로 이동");
        navigate("/sign-up", { replace: true });
      }
    } else {
      setHiddenAlert({
        text: "코드 받아오기 실패",
        isHidden: false,
      });
    }
  };

  //useEffect
  useEffect(() => {
    if (search !== undefined || search !== "") {
      //쿼리 스트링을 읽어와서 recoil 등록
      const id = QueryString.parse(search, { ignoreQueryPrefix: true });
      if (typeof id?.code === "string") {
        setTokenAndGetInfo(id.code);
      }
    }
  }, []);
};

export default useKakao;
