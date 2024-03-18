import React, { useEffect, useState } from "react";
import styled from "styled-components";

//component
import Div from "layout/Div";
import Icon from "layout/Icon";
import Button from "layout/Button";
import Img from "layout/Img";

//img, icon
import img_01 from "../../assets/dummy/05.png";
import img_02 from "../../assets/dummy/06.png";
import img_03 from "../../assets/dummy/07.png";
import img_04 from "../../assets/dummy/08.png";

const ShortFeedContainer = styled(Icon)`
  background: linear-gradient(209.83deg, #1570ef 7.74%, #9eeff4 94.51%);
  button {
    overflow: hidden;
    background-color: white;
    padding: 2px;
  }
`;

const ShortFeedListContainer = () => {
  //data
  const [dummyList, setDummyList] = useState<any[]>([]);

  //useEffect
  useEffect(() => {
    setDummyList([
      {
        img: img_01,
      },
      {
        img: img_02,
      },
      {
        img: img_03,
      },
      {
        img: img_04,
      },
    ]);
  }, []);

  return (
    <Div
      flex="row"
      radius="10px"
      borderColor="200"
      padding="20px"
      marginBottom="15px"
      backgroundColor="white"
    >
      {dummyList &&
        dummyList.map((e, i) => (
          <ShortFeedContainer
            key={`short_feed_list_${i}`}
            width="90px"
            radius="50%"
            marginRight="8px"
            padding="3px"
          >
            <Button flex="row_center" radius="50%">
              <Img src={e?.img} />
            </Button>
          </ShortFeedContainer>
        ))}
    </Div>
  );
};

export default ShortFeedListContainer;
