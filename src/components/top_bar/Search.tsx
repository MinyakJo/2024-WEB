import React, { useState } from "react";
import { debounce } from "lodash";

//component
import Div from "layout/Div";
import Input from "layout/Input";
import Icon from "layout/Icon";
import Img from "layout/Img";

//icon, img
import search_icon from "../../assets/search_icon.svg";

const Search = () => {
  //state
  const [input, setInput] = useState("");

  //event
  const onChangeEvent = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }, 100);
  const onKeyUpEvent = debounce((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
    }
  }, 100);
  const onClickEvent = (e: React.MouseEvent<HTMLImageElement>) => {
    console.log(e.target);
  };

  return (
    <Div
      flex="row_center"
      width="312px"
      height="44px"
      padding="14px 12px"
      radius="8px"
      borderColor="300"
    >
      <Icon width="20px" marginRight="8px">
        <Img src={search_icon} onClick={onClickEvent} />
      </Icon>
      <Input
        defaultValue={input}
        onChange={onChangeEvent}
        onKeyUp={onKeyUpEvent}
        fontWeight="400"
        fontSize="medium"
      />
    </Div>
  );
};

export default Search;
