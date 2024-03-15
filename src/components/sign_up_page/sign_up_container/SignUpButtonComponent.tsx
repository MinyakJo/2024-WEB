import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  signCheckState,
  signHiddenAlertState,
  telOrEmailCheckState,
  nameCheckState,
  idCheckState,
  signInputsState,
  isBirthDatePageState,
} from "recoil/signAtom";
import styled from "styled-components";
import { fetch } from "apis/fetch";

//component
import Div from "layout/Div";
import ButtonComponent from "../../ButtonComponent";
import P from "layout/P";

const HiddenText = styled(P)`
  text-align: center;
`;

const SignUpButtonComponent = () => {
  //recoil
  //가입버튼 활성화 여부
  const signCheck = useRecoilValue(signCheckState);
  //알림 매세지 보여줄지 여부
  const signHiddenAlert = useRecoilValue(signHiddenAlertState);
  //전화번호 이메일 체크 여부
  const telOrEmailCheck = useRecoilValue(telOrEmailCheckState);
  //이름 체크여부
  const nameCheck = useRecoilValue(nameCheckState);
  //아이디 체크여부
  const [idCheck, setIdCheck] = useRecoilState(idCheckState);
  //회원가입 입력값
  //0: 전화번호 메일 이메일, 1: 성명, 2: 아이디, 3: 비밀번호
  const inputs = useRecoilValue(signInputsState);
  //회원가입 잘못된점 보여주기
  const setHiddenAlert = useSetRecoilState(signHiddenAlertState);
  //회원가입 페이지 전환 여부
  const setIsBirthDatePage = useSetRecoilState(isBirthDatePageState);

  //click 이벤트
  const onClickEvent = async (e: React.MouseEvent<HTMLElement>) => {
    const id = (e.target as HTMLElement).id;

    switch (id) {
      case "sign":
        if (signCheck) {
          const fetchData = await fetch({
            method: "GET",
            url: `/users?loginId=${inputs[2]}`,
          });
          if (fetchData?.data?.result) {
            if (!fetchData?.data.result.isExist) setIsBirthDatePage(true);
            else {
              const copyIdCheck = { ...idCheck, dup: false };
              setHiddenAlert(true);
              setIdCheck(copyIdCheck);
            }
          }
        }
        return;
      default:
        return;
    }
  };

  return (
    <Div marginTop="10px" onClick={onClickEvent}>
      {/* 로그인 버튼 */}
      <Div height="44px">
        <ButtonComponent
          id="sign"
          color="white"
          fontSize="medium"
          backgroundColor={signCheck ? "blue" : "sky_blue"}
          cursor={signCheck ? "pointer" : "default"}
        >
          가입
        </ButtonComponent>
      </Div>
      {/* 회원가입 조건이 맞지 않았을때의 알림 */}

      {signHiddenAlert && (
        <Div marginTop="15px">
          <HiddenText
            fontSize="medium"
            fontWeight="600"
            color="red"
            lineHeight="19px"
          >
            {!telOrEmailCheck.tel //전화번호
              ? "휴대폰 번호가 정확하지 않습니다. 국가번호를 포함하여 전체 전화번호를 입력해주세요."
              : !nameCheck //이름
              ? ""
              : !idCheck.reg //아이디 정규식
              ? "사용자 이름에는 문자, 숫자, 밑줄 및 마침표만 사용할 수 있습니다."
              : idCheck.dup === false //아이디 중복
              ? "사용할 수 없는 사용자 이름입니다. 다른 이름을 사용하세요."
              : ""}
          </HiddenText>
        </Div>
      )}
    </Div>
  );
};

export default SignUpButtonComponent;
