import React from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { boardPreviewListState, boardTextState } from "recoil/dialogAtom";
import { useCookies } from "react-cookie";
import CommonStyle from "components/style";

//component
import Div from "layout/Div";
import Icon from "layout/Icon";
import Img from "layout/Img";
import Slider from "layout/Slider";
import P from "layout/P";
import Textarea from "layout/Textarea";
import Button from "layout/Button";

//img icon
import test_profile from "../../../assets/test_profile.png";
import marker_icon from "../../../assets/grey_marker_icon.svg";
import down_icon from "../../../assets/down_vector_icon.svg";

//type
type OptionContainerType = {
  borderTop?: string;
};

//styled
const PreviewContainer = styled(Icon)`
  position: relative;
`;
const InputContainer = styled(Div)`
  min-width: 352px;
  max-width: 352px;
`;
const OptionContainer = styled(Div)<OptionContainerType>`
  ${CommonStyle.setFlex("row_between")};
  border-top: ${(props) => {
    return props.borderTop ? props.borderTop : null;
  }};
  border-bottom: 1px solid ${CommonStyle.setColor("300")};
  padding: 13px 20px;

  button {
    font-size: ${CommonStyle.setFontSize("medium")};
    font-weight: 500;
    line-height: 24px;
  }
  div {
    width: 24px;
    height: 24px;
  }
`;

const InputText = () => {
  //cookie
  const [cookies] = useCookies(["loginId"]);

  //state
  const [text, setText] = useRecoilState(boardTextState);

  //recoil
  const preview = useRecoilValue(boardPreviewListState);

  //event
  const onChangeEvent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <Div flex="row_top">
      {/* preview */}
      <PreviewContainer flex="coulumn_top" width="656px">
        <Slider dots="in">{preview}</Slider>
      </PreviewContainer>
      {/* 텍스트 입력 */}
      <InputContainer>
        {/* 게시글 입력 */}
        <Div padding="20px">
          {/* 프로필 */}
          <Div flex="row">
            <Icon width="35px" radius="50%" marginRight="11px">
              <Img src={test_profile} />
            </Icon>
            <Div>
              <P
                color="900"
                fontWeight="600"
                fontSize="medium_large"
                lineHeight="28px"
                fontFamily="semiBold"
              >
                {cookies.loginId}
              </P>
            </Div>
          </Div>
          {/* 입력창 */}
          <Div height="200px" marginTop="15px">
            <Textarea
              color="500"
              fontSize="medium_large"
              fontWeight="500"
              maxLength={2200}
              value={text}
              onChange={onChangeEvent}
              scrollWidth="0px"
            />
          </Div>
          {/* 글자수 */}
          <Div flex="row_end" marginLeft="5px">
            <P
              color="300"
              fontWeight="500"
              lineHeight="20px"
              fontSize="small"
            >{`${text.length.toLocaleString()}/2,200`}</P>
          </Div>
        </Div>
        <OptionContainer borderTop={`1px solid ${CommonStyle.setColor("300")}`}>
          <Button color="300">위치 추가</Button>
          <Icon>
            <Img src={marker_icon} />
          </Icon>
        </OptionContainer>
        <OptionContainer>
          <Button color="900">접근성</Button>
          <Icon>
            <Img src={down_icon} />
          </Icon>
        </OptionContainer>
        <OptionContainer>
          <Button color="900">고급 설정</Button>
          <Icon>
            <Img src={down_icon} />
          </Icon>
        </OptionContainer>
      </InputContainer>
    </Div>
  );
};

export default InputText;
