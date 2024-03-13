import React from "react";

//component
import Div from "layout/Div";
import Button from "layout/Button";

//type
type propsType = {
  id?: string;
  flex?: string;
  backgroundColor?: string;
  fontSize?: string;
  fontFamily?: string;
  fontWeight?: string;
  lineHeight?: string;
  letter?: string;
  color?: string;
  cursor?: string;
  children?: React.ReactNode;
};

const ButtonComponent = ({
  id,
  backgroundColor,
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  letter,
  children,
  color,
  cursor,
  flex,
}: propsType) => {
  return (
    <Div
      height="100%"
      radius="30px"
      backgroundColor={backgroundColor ? backgroundColor : "300"}
    >
      <Button
        id={id}
        flex={flex}
        fontSize={fontSize ? fontSize : "medium_small"}
        fontFamily={fontFamily}
        fontWeight={fontWeight ? fontWeight : "600"}
        lineHeight={lineHeight ? lineHeight : "18px"}
        letter={letter}
        color={color ? color : "black"}
        cursor={cursor}
      >
        {children}
      </Button>
    </Div>
  );
};

export default ButtonComponent;