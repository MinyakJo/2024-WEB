import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { profileDataState } from "recoil/mainAtom";
import { RequestPayParams, RequestPayResponse } from "portone";
import { dialogState } from "recoil/dialogAtom";

//component
import Div from "layout/Div";
import ButtonComponent from "components/ButtonComponent";

const PayButton = () => {
  //recoil
  const profileData = useRecoilValue(profileDataState);
  const [dialog, setDialog] = useRecoilState(dialogState);
  const [data, setData] = useState<RequestPayParams>();

  //useEffect
  useEffect(() => {
    if (window.IMP) {
      const { IMP } = window;
      IMP.init("imp81805325");

      setData({
        pg: "kcp.AO09C", //결제사
        pay_method: "card", //결제 수단
        merchant_uid: `mid_${new Date().getTime()}`, //주문번호
        name: "구독", //주문명
        amount: 9900, // 가격
        buyer_email: "test@naver.com", //구매자 이메일
        buyer_name: profileData.realName, //구매자 이름
        buyer_tel: "010-1234-5678", //구매자 전화번호
        buyer_addr: "서울특별시", //구매자 지역
        buyer_postcode: "123-456", //구매자 우편번호
        m_redirect_url: "/payment/done",
      });
    }
  }, []);

  const onClickEvent = async () => {
    if (!window.IMP || !data) return;
    const { IMP } = window;

    IMP.request_pay(data, callback);
  };

  const callback = (res: RequestPayResponse) => {
    const { success /* paid_amount, imp_uid */ } = res;
    //성공
    if (success) {
      // 백엔드에서 검증 하는 api가 없음
      //   try {
      //     const { data } = await axios.post(
      //       `${process.env.REACT_APP_URL}/verifyIamport/${imp_uid}`
      //     );
      //     if (paid_amount === data.response.amount) {
      //       alert("결제 성공");
      //     } else {
      //       failDialog();
      //     }
      //   } catch (error) {
      //     console.error("Error while verifying payment:", error);
      //     failDialog();
      //   }
      const copyDialog = [...dialog];
      copyDialog.push({
        type: "alert",
        data: {
          title: "결제 성공",
          message: "결제 성공",
        },
      });
      setDialog(copyDialog);
    }
    //실패
    else {
      failDialog();
    }
  };

  const failDialog = () => {
    const copyDialog = [...dialog];
    copyDialog.push({
      type: "alert",
      data: {
        title: "결제 처리가 진행되지 않았습니다.",
        message: "결제를 다시 시도해주세요.",
      },
    });
    setDialog(copyDialog);
  };

  return (
    <Div height="44px" marginTop="71px" onClick={onClickEvent}>
      <ButtonComponent
        fontWeight="700"
        fontSize="medium"
        lineHeight="24px"
        color="white"
        backgroundColor="blue"
      >
        바로 구독 신청하기
      </ButtonComponent>
    </Div>
  );
};

export default PayButton;
