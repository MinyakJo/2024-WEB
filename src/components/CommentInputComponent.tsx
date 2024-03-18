import React from "react";
import styled from "styled-components";
import CommonStyle from "./style";

//component
import Div from "layout/Div";
import Input from "layout/Input";
import Icon from "layout/Icon";
import Img from "layout/Img";
import Button from "layout/Button";

//type
type propsType = {
  value?: string;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  profile?: string;
  padding?: string;
};

//styled
const InputContainer = styled(Div)`
  border-top: 0.5px solid ${CommonStyle.setColor("300")};

  button {
    white-space: nowrap;
  }
`;

const CommentInputComponent = ({
  onChange,
  onKeyUp,
  value,
  profile,
  padding,
}: propsType) => {
  return (
    <InputContainer flex="row" padding={padding ? padding : "10px 15px"}>
      {profile && (
        <Icon width="35px" marginRight="10px" radius="50%">
          <Img src={profile} />
        </Icon>
      )}

      <Input
        value={value}
        onKeyUp={onKeyUp}
        onChange={onChange}
        placeholder="댓글 달기..."
        placeholderColor="300"
        fontWeight="500"
        fontSize="small"
      />
      <Div width="fit-content" paddingBottom="2px">
        <Button
          id="upload"
          color={value !== undefined && value.length > 0 ? "blue" : "sky_blue"}
          fontFamily="bold"
          fontSize="small"
          fontWeight="700"
          lineHeight="20px"
        >
          게시
        </Button>
      </Div>
    </InputContainer>
  );
};

export default CommentInputComponent;
