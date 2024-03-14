import React from "react";
import styled from "styled-components";
import CommonStyle from "components/style";
import { useNavigate } from "react-router-dom";

//component
import Div from "layout/Div";
import Img from "layout/Img";

//icon, img
import logo from "../../assets/logo.svg";
import Search from "./Search";
import TopBarIconContainer from "./TopBarIconContainer";

const MainContainer = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 80px;
  z-index: 3;
  background-color: white;
  border-bottom: 1px solid ${CommonStyle.setColor("200")};
`;

const TopBar = () => {
  //navigate
  const navigate = useNavigate();

  //event
  const onClickEvent = () => {
    navigate("/");
  };

  return (
    <MainContainer>
      {/* 로고 */}
      <Div width="140px" height="50px">
        <Img src={logo} onClick={onClickEvent} />
      </Div>
      {/* 검색창 */}
      <Search />
      {/* 아이콘 */}
      <TopBarIconContainer />
    </MainContainer>
  );
};
export default TopBar;
