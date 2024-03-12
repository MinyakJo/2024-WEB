import React from "react";

//component
import Div from "layout/Div";
import P from "layout/P";
import Button from "layout/Button";
import Img from "layout/Img";

//img, icon
import google_button from "../assets/google_app_store_button.svg";
import apple_button from "../assets/apple_app_store_button.svg";

const AppDownloadButtonComponent = () => {
  return (
    <Div marginTop="20px">
      {/* 앱을 다운로드 하세요 */}
      <Div flex="row_center">
        <P color="500" fontWeight="500" fontSize="medium" lineHeight="24px">
          앱을 다운로드 하세요.
        </P>
      </Div>
      {/* 앱 다운로드 버튼 */}
      <Div flex="row_center" marginTop="10px">
        <Div width="135px" height="40px" marginRight="5px" marginLeft="5px">
          <Button>
            <Img src={google_button} />
          </Button>
        </Div>
        <Div width="135px" height="40px" marginRight="5px" marginLeft="5px">
          <Button>
            <Img src={apple_button} />
          </Button>
        </Div>
      </Div>
    </Div>
  );
};

export default AppDownloadButtonComponent;
