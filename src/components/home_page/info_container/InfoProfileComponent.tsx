import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import useFetch from "utils/useFetch";
import { useRecoilState } from "recoil";
import { profileDataState } from "recoil/mainAtom";

//component
import Div from "layout/Div";
import Icon from "layout/Icon";
import Img from "layout/Img";
import H1 from "layout/H1";
import H2 from "layout/H2";
import Loader from "layout/Loader";

//img
import test_profile from "../../../assets/test_profile.png";

const InfoProfileComponent = () => {
  //cookie
  const [cookies] = useCookies(["loginId", "token"]);

  //recoil
  const [profileData, setProfileData] = useRecoilState(profileDataState);

  //fetch
  const { data, isLoading } = useFetch({
    method: "GET",
    url: `/users/${cookies.loginId}/profile`,
    headers: { Authorization: cookies.token },
  });

  //useEffect
  useEffect(() => {
    if (data?.result) {
      setProfileData(data.result);
    }
  }, [data]);
  return (
    <>
      {isLoading ? (
        <Div height="100%">
          <Loader width="10px" />
        </Div>
      ) : (
        // 프로필 정보
        <Div flex="row">
          {/* 프로필 사진 */}
          <Icon width="80px" radius="50%" marginRight="22px">
            <Img src={test_profile} />
          </Icon>
          {/* 닉네임, 이름 */}
          <Div>
            <Div>
              <H1
                color="900"
                fontFamily="bold"
                fontSize="medium_large"
                lineHeight="28px"
                fontWeight="700"
              >
                {profileData?.loginId}
              </H1>
            </Div>
            <Div marginTop="2px">
              <H2
                color="500"
                fontSize="medium"
                lineHeight="24px"
                fontWeight="500"
              >
                {profileData?.realName}
              </H2>
            </Div>
          </Div>
        </Div>
      )}
    </>
  );
};

export default InfoProfileComponent;
