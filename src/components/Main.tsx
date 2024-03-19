import styled from "styled-components";

//type
type MainType = {
  height?: string;
};

const Main = styled.main<MainType>`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  top: 80px;
  padding: 30px 0px;
  overflow: hidden;
  overflow-y: auto;
  box-sizing: border-box;

  ::-webkit-scrollbar {
    width: 0px;
  }

  height: ${(props) => {
    return props.height ? props.height : null;
  }};
`;

export default Main;
