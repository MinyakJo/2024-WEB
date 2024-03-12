import React from "react";

//component
import Div from "layout/Div";
import P from "layout/P";
import Accent from "layout/Accent";

//type
type propsType = {
  children?: React.ReactNode;
  link?: string;
  accent?: string;
};

const LinkButtonComponent = ({ children, link, accent }: propsType) => {
  return (
    <Div padding="31px 0px" borderColor="200" backgroundColor="white">
      <Div flex="row_center">
        <P
          color="500"
          fontSize="medium"
          fontWeight="600"
          fontFamily="semiBold"
          lineHeight="24px"
        >
          {children}
          <Accent id={link} color="blue" cursor="pointer">
            {accent}
          </Accent>
        </P>
      </Div>
    </Div>
  );
};

export default LinkButtonComponent;
