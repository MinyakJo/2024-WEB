import React, { useEffect } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { profileDataState } from "recoil/mainAtom";
import { useCookies } from "react-cookie";
import useFetch from "utils/useFetch";
import CommonStyle from "components/style";

//component
import Div from "layout/Div";
import Icon from "layout/Icon";
import Img from "layout/Img";
import Loader from "layout/Loader";
import H1 from "layout/H1";
import H2 from "layout/H2";
import Button from "layout/Button";
import P from "layout/P";

//img
import test_profile from "../../assets/test_profile.png";

const CountContainer = styled(Div)`
  H2 {
    color: ${CommonStyle.setColor("900")};
    font-weight: 400;
    font-size: ${CommonStyle.setFontSize("medium")};
    line-height: 24px;
    font-family: "regular";
  }
  span {
    font-weight: 700;
    font-family: "bold";
    margin-left: 3px;
  }
`;
const ButtonContainer = styled(Div)`
  border: 0.5px solid ${CommonStyle.setColor("300")};
`;
const IntroContainer = styled(Div)`
  p {
    font-weight: 400;
    font-size: ${CommonStyle.setFontSize("medium")};
    line-height: 24px;
  }
`;

const ProfileContainer = () => {
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
    <Div flex="row" padding="0px 97px">
      {!isLoading ? (
        <>
          {/* 프로필 */}
          <Icon width="150px" radius="50%" marginRight="121px">
            <Img src={test_profile} />
          </Icon>
          {/* 유저 정보 */}
          <Div>
            {/* id */}
            <Div flex="row_top">
              <Div width="fit-content" marginRight="15px">
                <H1
                  color="900"
                  fontWeight="500"
                  fontSize="xx_large"
                  lineHeight="38px"
                >
                  {profileData.loginId !== undefined ? profileData.loginId : ""}
                </H1>
              </Div>
              <ButtonContainer
                width="fit-content"
                padding="2px 5px"
                marginTop="10px"
              >
                <Button
                  flex="row_center"
                  fontWeight="500"
                  fontSize="extra_small"
                  lineHeight="18px"
                >
                  프로필편집
                </Button>
              </ButtonContainer>
            </Div>
            {/* 게시물, 팔로워, 팔로워 */}
            <Div flex="row" marginTop="20px">
              <CountContainer width="fit-content" flex="row" marginRight="29px">
                <Div width="fit-content">
                  <H2
                    color="900"
                    fontWeight="500"
                    fontSize="xx_large"
                    lineHeight="38px"
                  >
                    게시글
                    <span>
                      {profileData.feedCount !== undefined
                        ? profileData.feedCount
                        : 0}
                    </span>
                  </H2>
                </Div>
              </CountContainer>
              <CountContainer width="fit-content" flex="row" marginRight="29px">
                <Div width="fit-content">
                  <H2
                    color="900"
                    fontWeight="500"
                    fontSize="xx_large"
                    lineHeight="38px"
                  >
                    팔로워
                    <span>
                      {profileData.followerCount !== undefined
                        ? profileData.followerCount
                        : 0}
                    </span>
                  </H2>
                </Div>
              </CountContainer>
              <CountContainer width="fit-content" flex="row" marginRight="29px">
                <Div width="fit-content">
                  <H2
                    color="900"
                    fontWeight="500"
                    fontSize="xx_large"
                    lineHeight="38px"
                  >
                    팔로잉
                    <span>
                      {profileData.followingCount !== undefined
                        ? profileData.followingCount
                        : 0}
                    </span>
                  </H2>
                </Div>
              </CountContainer>
            </Div>
            {/* 이름, 자기소개 */}
            <IntroContainer marginTop="15px">
              {/* 이름 */}
              <Div>
                <P color="900">
                  {profileData.realName !== undefined
                    ? profileData.realName
                    : ""}
                </P>
              </Div>
              {/* 태그? */}
              <Div>
                <P color="500" fontFamily="regular">
                  여행
                </P>
              </Div>
              {/* 소개글 */}
              <Div>
                <P color="900">테스트 소개글 입니다.</P>
              </Div>
            </IntroContainer>
          </Div>
        </>
      ) : (
        <Div height="190px">
          <Loader width="10px" />
        </Div>
      )}
    </Div>
  );
};

export default ProfileContainer;
