import React from "react";
import styled from "styled-components";
import CommonStyle from "components/style";
import { useNavigate } from "react-router-dom";
import { nowPageNameState } from "recoil/mainAtom";
import { useRecoilValue } from "recoil";

//component
import Div from "layout/Div";
import Icon from "layout/Icon";
import Img from "layout/Img";
import Button from "layout/Button";

//icon,img
import selected_home_icon from "../../assets/selected_home_icon.svg";
import selected_message_icon from "../../assets/selected_message_icon.svg";
import selected_board_icon from "../../assets/selected_board_icon.svg";
import selected_heart_icon from "../../assets/selected_heart_icon.svg";
import selected_profile_icon from "../../assets/black_user_icon.svg";
import not_selected_home_icon from "../../assets/not_selected_home_icon.svg";
import not_selected_message_icon from "../../assets/not_selected_message_icon.svg";
import not_selected_board_icon from "../../assets/not_selected_board_icon.svg";
import not_selected_heart_icon from "../../assets/not_selected_heart_icon.svg";
import now_selected_profile_icon from "../../assets/grey_user_icon.svg";

//styled
const MobileBarContainer = styled.nav`
  ${CommonStyle.setFlex("row_between")};
  width: 100%;
  height: 61px;
  box-shadow: 0px -1px 0px 0px #0000000d;
  padding: 0px 30px;
  padding-bottom: 11px;
  box-sizing: border-box;
  background-color: white;

  position: fixed;
  bottom: 0px;
  left: 0px;
`;
const MobileBarIconContainer = styled(Div)`
  ${CommonStyle.setFlex("row_center")};
  width: 75px;
  height: 50px;
  button {
    ${CommonStyle.setFlex("row_center")};
  }
`;

const MobileBar = () => {
  //navigate
  const navigate = useNavigate();

  //recoil
  const nowPage = useRecoilValue(nowPageNameState);

  //event
  const onClickEvent = (e: React.MouseEvent<HTMLElement>) => {
    const id = (e.target as HTMLElement).id;

    switch (id) {
      case "home":
        navigate("/");
        return;
      case "message":
        return;
      case "board":
        return;
      case "heart":
        return;
      case "profile":
        return;
      default:
        return;
    }
  };

  return (
    <MobileBarContainer onClick={onClickEvent}>
      {/* 홈 */}
      <MobileBarIconContainer>
        <Icon width="24px">
          <Button>
            <Img
              id="home"
              src={
                nowPage === "home" ? selected_home_icon : not_selected_home_icon
              }
            />
          </Button>
        </Icon>
      </MobileBarIconContainer>
      {/* 매세지 */}
      <MobileBarIconContainer>
        <Icon width="24px">
          <Button>
            <Img
              id="message"
              src={
                nowPage === "message"
                  ? selected_message_icon
                  : not_selected_message_icon
              }
            />
          </Button>
        </Icon>
      </MobileBarIconContainer>
      {/* 게시글 작성 */}
      <MobileBarIconContainer>
        <Icon width="24px">
          <Button>
            <Img
              id="board"
              src={
                nowPage === "board"
                  ? selected_board_icon
                  : not_selected_board_icon
              }
            />
          </Button>
        </Icon>
      </MobileBarIconContainer>
      {/* 좋아요 */}
      <MobileBarIconContainer>
        <Icon width="24px">
          <Button>
            <Img
              id="heart"
              src={
                nowPage === "heart"
                  ? selected_heart_icon
                  : not_selected_heart_icon
              }
            />
          </Button>
        </Icon>
      </MobileBarIconContainer>
      {/* 프로필 */}
      <MobileBarIconContainer>
        <Icon width="24px">
          <Button>
            <Img
              id="profile"
              src={
                nowPage === "profile"
                  ? selected_profile_icon
                  : now_selected_profile_icon
              }
            />
          </Button>
        </Icon>
      </MobileBarIconContainer>
    </MobileBarContainer>
  );
};

export default MobileBar;
