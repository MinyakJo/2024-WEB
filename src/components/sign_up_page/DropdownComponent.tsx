import React from "react";
import CommonStyle from "components/style";
import styled from "styled-components";

//component
import Div from "layout/Div";
import Button from "layout/Button";
import Img from "layout/Img";
import Icon from "layout/Icon";

//icon
import blue_check from "../../assets/drop_down_blue_check_icon.svg";
import drop_down from "../../assets/drop_down_open_icon.svg";

//styled
const DropdownBox = styled(Div)`
  ${CommonStyle.setFlex("row_between")};
  position: relative;
  padding: 10px 14px;
  border-radius: 8px;
  button {
    width: fit-content;
  }
`;
const ListContainer = styled(Div)`
  position: absolute;
  max-height: 533px;
  padding: 4px 0px;
  border-radius: 8px;
  background-color: ${CommonStyle.setColor("white")};
  border: 1px solid ${CommonStyle.setColor("100")};
  box-shadow: 0px 4px 6px -2px #10182808;
  box-shadow: 0px 12px 16px -4px #10182814;
  overflow-y: auto;
  z-index: 2;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;
const DropdownBoxOpenButtonComponent = styled(Button)`
  color: ${CommonStyle.setColor("500")};
  font-family: regular;
  font-weight: 400;
  font-size: ${CommonStyle.setFontSize("medium")};
  line-height: 24px;
`;

//type
type propsType = {
  width?: string;
  children: React.ReactNode;
  type: string;
  dataList: number[] | string[];
  isOpen: boolean;
};

const DropdownComponent = ({
  width,
  type,
  children,
  dataList,
  isOpen,
}: propsType) => {
  return (
    <DropdownBox
      width={width ? width : "101px"}
      borderColor="300"
      id={`${type}_open`}
    >
      {/* 선택된 element */}
      <DropdownBoxOpenButtonComponent
        id={`${type}_open`}
        color="500"
        fontFamily="regular"
        fontWeight="400"
        fontSize="medium"
        lineHeight="24px"
      >
        {children}
      </DropdownBoxOpenButtonComponent>
      {/* 드랍다운 버튼 */}
      <Icon width="20px">
        <Img src={drop_down} id={`${type}_open`} />
      </Icon>
      {/* 열렸을때만 보이게 */}
      {isOpen && (
        <ListContainer>
          {dataList &&
            dataList.map((e, i) => (
              <DropdownBox key={`sign_date_${type}_${i}`} id={`${type}_${e}`}>
                {/* 선택 목록 */}
                <Button
                  id={`${type}_${e}`}
                  color="#101828"
                  fontWeight="500"
                  fontSize="medium"
                  lineHeight="24px"
                >
                  {e}
                </Button>
                {/* 선택 체크 표시 */}
                <Icon width="20px" id={`${type}_${e}`}>
                  {e === children && <Img src={blue_check} />}
                </Icon>
              </DropdownBox>
            ))}
        </ListContainer>
      )}
    </DropdownBox>
  );
};

export default DropdownComponent;
