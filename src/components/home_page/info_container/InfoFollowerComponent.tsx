import React, { useEffect, useState } from "react";

//component
import Div from "layout/Div";
import P from "layout/P";
import Button from "layout/Button";
import Icon from "layout/Icon";
import Img from "layout/Img";

//img
import dummy1 from "../../../assets/dummy/01.png";
import dummy2 from "../../../assets/dummy/02.png";
import dummy3 from "../../../assets/dummy/03.png";
import dummy4 from "../../../assets/dummy/04.png";

//type
type recommendListType = {
  img: string;
  loginId: string;
  isFollow: boolean;
};

const InfoFollowerComponent = () => {
  //추천 리스트
  const [recommendList, setRecommendList] = useState<recommendListType[]>([]);

  //useEffect
  useEffect(() => {
    const list: recommendListType[] = [];

    list.push({
      img: dummy1,
      loginId: "kendalljenner",
      isFollow: false,
    });
    list.push({
      img: dummy2,
      loginId: "dewisandra",
      isFollow: false,
    });
    list.push({
      img: dummy3,
      loginId: "tiit_smail",
      isFollow: false,
    });
    list.push({
      img: dummy4,
      loginId: "window123",
      isFollow: false,
    });
    setRecommendList(list);
  }, []);

  return (
    <Div marginTop="30px">
      <Div flex="row_between">
        <Div width="fit-content">
          <P
            color="500"
            fontWeight="600"
            fontSize="small"
            lineHeight="20px"
            fontFamily="semibold"
          >
            회원님을 위한 추천
          </P>
        </Div>
        <Div width="fit-content">
          <Button
            color="900"
            fontFamily="bold"
            fontWeight="700"
            fontSize="small"
            lineHeight="20px"
          >
            모두보기
          </Button>
        </Div>
      </Div>
      {/* 추천 리스트 */}
      <Div marginTop="10px">
        {recommendList &&
          recommendList.map((e, i) => (
            <Div
              key={`recommed_list_${i}`}
              flex="row_between"
              marginBottom="10px"
            >
              {/* 프로필 정보 */}
              <Div flex="row" width="fit-content">
                <Icon width="30px" marginRight="6px">
                  {e?.img && <Img src={e.img} />}
                </Icon>
                <Div>
                  <Button
                    color="800"
                    fontWeight="500"
                    fontSize="small"
                    lineHeight="20px"
                  >
                    {e?.loginId ? e.loginId : ""}
                  </Button>
                </Div>
              </Div>
              {/* 팔로우 버튼 */}
              <Div width="fit-content">
                <Button
                  color="blue"
                  fontFamily="bold"
                  fontWeight="700"
                  fontSize="small"
                  lineHeight="20px"
                >
                  팔로우
                </Button>
              </Div>
            </Div>
          ))}
      </Div>
    </Div>
  );
};

export default InfoFollowerComponent;
