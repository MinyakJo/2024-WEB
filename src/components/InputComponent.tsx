import React from "react";
import styled from "styled-components";

//component
import Div from "layout/Div";
import Icon from "layout/Icon";
import Img from "layout/Img";
import Input from "layout/Input";
import Button from "layout/Button";

//type
type propsType = {
  id?: string;
  height?: string;
  icon?: string;
  iconWidth?: string;
  placeholder?: string;
  placeholderColor?: string;
  color?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  borderColor?: string;
  maxSize?: number;
  type?: string;
  value: string;
  sign?: boolean;
  password?: boolean;
  signIcon?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
};
type inputContainerType = {
  boxShadow?: string;
};
type PasswordHideButtonContainerType = {
  maxWidth?: string;
};

//styled
const InputContainer = styled(Div)<inputContainerType>`
  box-shadow: ${(props) => {
    return props.boxShadow ? props.boxShadow : null;
  }};
`;
const PasswordHideButtonContainer = styled(
  Div
)<PasswordHideButtonContainerType>`
  max-width: ${(props) => {
    return props.maxWidth ? props.maxWidth : null;
  }};

  button {
    white-space: nowrap;
  }
`;

const InputComponent = ({
  sign,
  signIcon,
  height,
  icon,
  iconWidth,
  onChange,
  placeholder,
  placeholderColor,
  fontFamily,
  fontSize,
  fontWeight,
  color,
  borderColor,
  id,
  password,
  maxSize,
  type,
  onKeyUp,
  value,
}: propsType) => {
  return (
    <InputContainer
      flex="row"
      height={height ? height : "44px"}
      radius="30px"
      padding="13px 14px"
      paddingBottom="14px"
      borderColor={borderColor ? borderColor : "300"}
    >
      {/* 인풋창 아이콘 */}
      <Icon
        width={iconWidth ? iconWidth : "20px"}
        marginTop="2px"
        marginRight="8px"
      >
        <Img src={icon} />
      </Icon>
      {/* 인풋창 */}
      <Input
        id={id}
        type={type ? type : "text"}
        color={color ? color : "900"}
        fontSize={fontSize ? fontSize : "medium"}
        fontFamily={fontFamily}
        fontWeight={fontWeight ? fontWeight : "500"}
        placeholderColor={placeholderColor ? placeholderColor : "500"}
        placeholder={placeholder}
        maxLength={maxSize}
        onChange={onChange}
        onKeyUp={onKeyUp}
        defaultValue={value}
        autoComplete="off"
      />
      {/* 비밀번호 표시, 숨기기 버튼 */}
      {password && value.length >= 1 && (
        <PasswordHideButtonContainer
          maxWidth="100px"
          width="fit-content"
          marginTop="2px"
        >
          <Button
            flex="row_end"
            id={type === "password" ? "hidePw" : "showPw"}
            color="900"
            fontWeight="600"
            fontSize="medium"
            lineHeight="24px"
            fontFamily="semiBold"
          >
            {type === "password" ? "비밀번호 표시" : "숨기기"}
          </Button>
        </PasswordHideButtonContainer>
      )}
      {/* 회원가입 인풋용 아이콘 */}
      {sign && value.length > 0 && (
        <Icon
          marginTop="2px"
          paddingLeft="6px"
          width="30px"
          height="24px"
          ratio="0"
        >
          <Img src={signIcon} />
        </Icon>
      )}
    </InputContainer>
  );
};

export default InputComponent;
