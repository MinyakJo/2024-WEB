import React from "react";

//component
import Div from "components/common/Div";
import SignUpContainer from "components/component/sign_up_page/SignUpContainer";

const SignUpPage = () => {
  //event
  const onClickEvent = () => {};

  return (
    <Div
      flex="row_center"
      height="100%"
      backgroundColor="50"
      onClick={onClickEvent}
    >
      <SignUpContainer />
    </Div>
  );
};

export default SignUpPage;
