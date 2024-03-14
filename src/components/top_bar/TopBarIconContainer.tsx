import React, { useState } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { nowPageNameState } from "recoil/mainAtom";

//component
import Div from "layout/Div";
import Icon from "layout/Icon";
import Button from "layout/Button";
import Img from "layout/Img";

//img, icon
import selected_home_icon from "../../assets/selected_home_icon.svg";
import selected_message_icon from "../../assets/selected_message_icon.svg";
import selected_board_icon from "../../assets/selected_board_icon.svg";
import selected_heart_icon from "../../assets/selected_heart_icon.svg";
import not_selected_home_icon from "../../assets/not_selected_home_icon.svg";
import not_selected_message_icon from "../../assets/not_selected_message_icon.svg";
import not_selected_board_icon from "../../assets/not_selected_board_icon.svg";
import not_selected_heart_icon from "../../assets/not_selected_heart_icon.svg";
import test_profile from "../../assets/test_profile.png";
import Modal from "./Modal";

const TopIcon = styled(Icon)`
  width: 24px;
  margin-right: 20px;
`;
const ProfileIcon = styled(Icon)`
  position: relative;
  border: 0.5px solid white;
  z-index: 2;
`;
const ProfileButton = styled(Button)`
  border-radius: 50%;
  overflow: hidden;
`;

const TopBarIconContainer = () => {
  //state
  const [modalIsOpen, setModalIsOpen] = useState(false);
  //recoil
  const nowPage = useRecoilValue(nowPageNameState);

  //event
  const onClickEvent = (e: React.MouseEvent<HTMLElement>) => {
    const id = (e.target as HTMLElement).id;

    switch (id) {
      case "home":
        return;
      case "message":
        return;
      case "board":
        return;
      case "heart":
        return;
      case "profile":
        setModalIsOpen(!modalIsOpen);
        return;
      default:
        return;
    }
  };

  return (
    <Div width="211px" flex="row" onClick={onClickEvent}>
      {/* 아이콘 */}
      <TopIcon>
        <Button>
          <Img
            id="home"
            src={
              nowPage === "home" ? selected_home_icon : not_selected_home_icon
            }
          />
        </Button>
      </TopIcon>
      <TopIcon>
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
      </TopIcon>
      <TopIcon>
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
      </TopIcon>
      <TopIcon>
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
      </TopIcon>
      <ProfileIcon width="35px" radius="50%" id="profile">
        <ProfileButton>
          <Img src={test_profile} id="profile" />
        </ProfileButton>
        {modalIsOpen && <Modal />}
      </ProfileIcon>
    </Div>
  );
};

export default TopBarIconContainer;
