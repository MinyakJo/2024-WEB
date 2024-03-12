import React from "react";

//component
import Div from "components/common/Div";
import P from "components/common/P";
import Button from "components/common/Button";
import Img from "components/common/Img";

//img, icon
import google_button from "../../svg/google_app_store_button.svg";
import apple_button from "../../svg/apple_app_store_button.svg";

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
