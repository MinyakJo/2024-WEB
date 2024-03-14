import React from "react";
import styled from "styled-components";
import CommonStyle from "components/style";

//component
import Div from "layout/Div";
import Icon from "layout/Icon";
import Img from "layout/Img";
import Button from "layout/Button";

//img, icon
import user_icon from "../../assets/black_user_icon.svg";
import bookmark_icon from "../../assets/bookmark_icon.svg";
import gear_icon from "../../assets/black_gear_icon.svg";
import report_icon from "../../assets/report_icon.svg";

const ModalContainer = styled(Div)`
  position: absolute;
  width: 280px;
  z-index: 2;
  padding: 20px;
  padding-bottom: 12px;
  border-radius: 8px;
  border: 1px solid #eaecf0;
  background-color: white;
  box-shadow: 0px 4px 6px -2px #10182808;
  box-shadow: 0px 12px 16px -4px #10182814;
  top: calc(100% + 15px);
  right: 0;
`;
const ModalButtonComponent = styled(Div)`
  ${CommonStyle.setFlex("row")};
  padding: 12px;
  height: 48px;
  cursor: pointer;
  background-color: white;

  button {
    ${CommonStyle.setFlex("row")};
    font-size: ${CommonStyle.setColor("medium")};
    font-weight: 600;
    color: #101828;
  }
`;
const ModalIcon = styled(Icon)`
  width: 24px;
  min-width: 24px;
  margin-right: 16px;
`;

const Modal = () => {
  //event
  const onClickEvent = (e: React.MouseEvent<HTMLElement>) => {
    const id = (e.target as HTMLElement).id;

    switch (id) {
      case "modalProfile":
        return;
      case "modalSave":
        return;
      case "modalConfig":
        return;
      case "modalReport":
        return;
    }
  };

  return (
    <ModalContainer onClick={onClickEvent}>
      {/* 프로필 */}
      <ModalButtonComponent id="modalProfile">
        <ModalIcon id="modalProfile">
          <Img src={user_icon} id="modalProfile" />
        </ModalIcon>
        <ModalButtonComponent id="modalProfile">
          <Button id="modalProfile">프로필</Button>
        </ModalButtonComponent>
      </ModalButtonComponent>
      {/* 저장됨 */}
      <ModalButtonComponent id="modalSave">
        <ModalIcon id="modalSave">
          <Img src={bookmark_icon} id="modalSave" />
        </ModalIcon>
        <ModalButtonComponent id="modalSave">
          <Button id="modalSave">저장됨</Button>
        </ModalButtonComponent>
      </ModalButtonComponent>
      {/* 설정 */}
      <ModalButtonComponent id="modalConfig">
        <ModalIcon id="modalConfig">
          <Img src={gear_icon} id="modalConfig" />
        </ModalIcon>
        <ModalButtonComponent id="modalConfig">
          <Button id="modalConfig">설정</Button>
        </ModalButtonComponent>
      </ModalButtonComponent>
      {/* 문제신고 */}
      <ModalButtonComponent id="modalReport">
        <ModalIcon id="modalReport">
          <Img src={report_icon} id="modalReport" />
        </ModalIcon>
        <ModalButtonComponent id="modalReport">
          <Button id="modalReport">문제신고</Button>
        </ModalButtonComponent>
      </ModalButtonComponent>
      {/* 로그아웃 */}
      <ModalButtonComponent id="logout">
        <ModalIcon id="logout">
          <Img src={gear_icon} id="logout" />
        </ModalIcon>
        <ModalButtonComponent id="logout">
          <Button id="logout">로그아웃</Button>
        </ModalButtonComponent>
      </ModalButtonComponent>
    </ModalContainer>
  );
};

export default Modal;
