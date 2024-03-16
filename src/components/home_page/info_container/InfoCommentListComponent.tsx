import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { commentLayoutIsOpenState, selectedFeedIdState } from "recoil/mainAtom";
import { useCookies } from "react-cookie";
import CommonStyle from "components/style";
import { debounce } from "lodash";

//component
import Div from "layout/Div";
import Loader from "layout/Loader";
import Icon from "layout/Icon";
import Img from "layout/Img";
import Button from "layout/Button";
import P from "layout/P";
import Input from "layout/Input";

//img, icon
import test_profile from "../../../assets/test_profile.png";
import { fetch } from "apis/fetch";

//type
type MainContainerType = {
  opacity?: string;
};

//styled
const MainContainer = styled(Div)<MainContainerType>`
  max-height: 192px;
  opacity: ${(props) => {
    return props.opacity ? props.opacity : null;
  }};
  overflow: hidden;
  transition: opacity 1s;
`;
const Comment = styled(Div)`
  cursor: pointer;

  button,
  p {
    color: ${CommonStyle.setColor("900")};
    font-size: ${CommonStyle.setFontSize("small")};

    display: -webkit-box;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: pre-line;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;
const InputContainer = styled(Div)`
  border-top: 0.5px solid ${CommonStyle.setColor("300")};

  button {
    white-space: nowrap;
  }
`;

const InfoCommentListComponent = () => {
  //cookie
  const [cookies] = useCookies(["token"]);
  const headers = { Authorization: cookies.token };

  //state
  const [input, setInput] = useState("");
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);

  //recoil
  const isOpen = useRecoilValue(commentLayoutIsOpenState);
  const selectedFeedId = useRecoilValue(selectedFeedIdState);

  //fetch
  const fetchData = async () => {
    setIsLoading(true);
    const fetchData = await fetch({
      method: "GET",
      url: `/feeds/${selectedFeedId}/comments?size=3&page=1`,
      headers: headers,
    });

    if (fetchData.data?.result) {
      setData(fetchData.data.result);
      setIsLoading(false);
    }
  };

  //useEffect
  useEffect(() => {
    if (selectedFeedId !== undefined) fetchData();
  }, [selectedFeedId]);

  //event
  const onChageEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const onClickEvent = async (e: React.MouseEvent<HTMLElement>) => {
    const id = (e.target as HTMLElement).id;

    switch (id) {
      case "upload":
        await postAfterFetch();
        setInput("");
        return;
      default:
        return;
    }
  };
  const onKeyUpEvent = debounce(
    async (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.code === "Enter") {
        await postAfterFetch();
        setInput("");
      }
    },
    100
  );
  //fuction
  const postAfterFetch = async () => {
    await fetch({
      method: "POST",
      url: `/feeds/${selectedFeedId}/comment`,
      data: {
        commentText: input,
      },
      headers: headers,
    });
    const afterFetch = await fetch({
      method: "GET",
      url: `/feeds/${selectedFeedId}/comments?size=3&page=1`,
      headers: headers,
    });
    if (afterFetch.data?.result) {
      setData(afterFetch.data.result);
    }
  };

  return (
    <MainContainer
      opacity={isOpen ? "1" : "0"}
      paddingTop={isOpen ? "20px" : "0px"}
      height={isOpen ? "fit-content" : "0px"}
      radius="10px"
      backgroundColor="white"
      marginTop="20px"
      onClick={onClickEvent}
    >
      {isLoading ? (
        <Div flex="row_center" height="30px">
          <Loader width="10px" />
        </Div>
      ) : (
        <Div padding="0px 15px" paddingBottom="5px">
          {data?.commentList &&
            (data.commentList as Array<any>).map((e, i) => (
              <Comment
                flex="row"
                key={`comment_${selectedFeedId}_${i}`}
                marginBottom="15px"
              >
                {/* 프로필 사진 */}
                <Icon width="35px" marginRight="15px" radius="50%">
                  <Img src={test_profile} />
                </Icon>
                {/* 댓글 */}
                <Div>
                  <Div flex="row">
                    {/* 닉네임 */}
                    <Div width="fit-content" marginRight="3px">
                      <Button
                        fontWeight="500"
                        fontFamily="semiBold"
                        lineHeight="20px"
                      >
                        {`${e?.writeUserLoginId} `}
                      </Button>
                    </Div>
                    {/* 댓글내용 */}
                    <Div width="fit-content">
                      <P fontWeight="500" lineHeight="20px">
                        {`${e?.commentText}`}
                      </P>
                    </Div>
                  </Div>
                  <Div marginTop="3px" height="18px">
                    <P fontWeight="400" fontFamily="regular" lineHeight="18px">
                      {" "}
                    </P>
                  </Div>
                </Div>
              </Comment>
            ))}
        </Div>
      )}
      {/* 댓글 쓰는 창 */}
      <InputContainer flex="row" padding="10px 15px">
        <Icon width="35px" marginRight="10px" radius="50%">
          <Img src={test_profile} />
        </Icon>
        <Input
          value={input}
          onKeyUp={onKeyUpEvent}
          onChange={onChageEvent}
          placeholder="댓글 달기..."
          placeholderColor="300"
          fontWeight="500"
          fontSize="small"
        />
        <Div width="fit-content" paddingBottom="2px">
          <Button
            id="upload"
            color={input.length > 0 ? "blue" : "sky_blue"}
            fontFamily="bold"
            fontSize="small"
            fontWeight="700"
            lineHeight="20px"
          >
            게시
          </Button>
        </Div>
      </InputContainer>
    </MainContainer>
  );
};

export default InfoCommentListComponent;
