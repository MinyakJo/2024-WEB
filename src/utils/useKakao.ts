import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useLocation, useNavigate } from "react-router-dom";
import QueryString from "qs";
import { fetch } from "apis/fetch";
// import { useSetRecoilState } from "recoil";
// import { loginHiddenAlertState } from "recoil/loginAtom";

const useKakao = () => {
  //useLocation
  const { search } = useLocation();

  //navigate
  const navigate = useNavigate();

  //cookie
  const [, setCookie] = useCookies(["kakao_code", "loginId", "id", "token"]);

  //recoil
  //   const setHiddenAlert = useSetRecoilState(loginHiddenAlertState);

  //function
  const setTokenAndGetInfo = async (code: string) => {
    const fetchData = await fetch({
      method: "GET",
      url: `/auth/kakao/sign-in-by-code?code=${code}`,
    });
    if (fetchData.data?.statusCode === 201) {
      setCookie("id", fetchData.data.result.id);
      setCookie("token", `Bearer ${fetchData.data.result.jwt}`);
      navigate("/", { replace: true });
    } else {
      navigate("/sign-up", { replace: true });
    }
  };

  //useEffect
  useEffect(() => {
    if (search !== undefined || search !== "") {
      //쿼리 스트링을 읽어와서 recoil 등록
      const id = QueryString.parse(search, { ignoreQueryPrefix: true });
      if (typeof id?.code === "string") {
        setCookie("kakao_code", id.code);
        setTokenAndGetInfo(id.code);
      }
    }
  }, []);
};

export default useKakao;
