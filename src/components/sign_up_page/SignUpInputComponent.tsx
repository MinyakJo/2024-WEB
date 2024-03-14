import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  idCheckState,
  nameCheckState,
  pwCheckState,
  signHiddenAlertState,
  signInputsState,
  signPwIsHideState,
  telOrEmailCheckState,
} from "recoil/signAtom";
import { debounce } from "lodash";

//component
import Div from "layout/Div";
import InputComponent from "../InputComponent";

//icon, img
import mail_icon from "../../assets/mail_icon.svg";
import check_icon from "../../assets/sign_check_icon.svg";
import user_icon from "../../assets/grey_user_icon.svg";
import gear_icon from "../../assets/grey_gear_icon.svg";
import lock_icon from "../../assets/lock_icon.svg";
import x_icon from "../../assets/sign_x_icon.svg";

const SignUpInputComponent = () => {
  //recoil
  //회원가입 입력
  const [inputs, setInputs] = useRecoilState(signInputsState);
  //비밀번호 숨기기, 표시
  const signPwHide = useRecoilValue(signPwIsHideState);
  //전화번호 조건 체크
  const [telOrEmailCheck, setTelOrEmailCheckState] =
    useRecoilState(telOrEmailCheckState);
  //이름 체크
  const [nameChack, setNameCheck] = useRecoilState(nameCheckState);
  //닉네임, 아이디의 조건 체크
  const [idCheck, setIdCheck] = useRecoilState(idCheckState);
  //비밀번호 체크
  const [pwCheck, setPwCheck] = useRecoilState(pwCheckState);
  //히든 텍스트
  const setHiddenAlert = useSetRecoilState(signHiddenAlertState);

  //event
  const onChangeEvent = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    //삽입된 인덱스 분리
    const index = Number(e.target.id.split("_")[1]);
    const value = e.target.value;

    if (isNaN(index)) return;

    //inputs 복사
    const copyInputs = [...inputs];
    //inputs[ index ] value 수정
    copyInputs.splice(index, 1, value);
    //적용
    setInputs(copyInputs);
    //히든 알림 제거
    setHiddenAlert(false);

    //inputCheck 복사

    switch (index) {
      case 0: //전화번호, 메일, 이메일
        const telReg = /^01(0|1|[6-9])[0-9]{3,4}[0-9]{4}$/;
        const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        //전화번호, 메일, 이메일 체크 복사
        let copyTelOrEmailCheck = { ...telOrEmailCheck };

        //정규식 통과하면 true 아니면 false
        //이메일
        if (emailReg.test(value)) copyTelOrEmailCheck.email = true;
        else copyTelOrEmailCheck.email = false;

        //전화번호
        if (telReg.test(value)) copyTelOrEmailCheck.tel = true;
        else copyTelOrEmailCheck.tel = false;

        //적용
        setTelOrEmailCheckState(copyTelOrEmailCheck);

        break;
      case 1: //성명
        if (value.length > 0) setNameCheck(true);
        else setNameCheck(false);
        break;
      case 2: //사용자 이름
        const nickNameReg = /^[a-z0-9\_\.]+$/;

        //사용자 이름 체크 복사
        let copyIdCheck = { ...idCheck };

        //정규식 통과하면 true 아니면 false
        if (nickNameReg.test(value)) copyIdCheck.reg = true;
        else copyIdCheck.reg = false;

        //적용
        setIdCheck(copyIdCheck);

        break;
      case 3: //비밀번호
        // const pwReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,20}$/;

        //비밀번호 복사
        let copyPwCheck = { ...pwCheck };

        //크기 검사
        if (value.length > 6) copyPwCheck.length = true;
        else copyPwCheck.length = false;
        //정규식 검사
        // if (pwReg.test(value)) copyPwCheck.reg = true;
        // else copyPwCheck.reg = false;

        //적용
        setPwCheck(copyPwCheck);

        break;
      default:
        break;
    }
  }, 200);
  return (
    <Div flex="column_center" marginTop="10px">
      {inputs &&
        inputs.map((e, i) => (
          <Div key={`sign_input_${i}`} marginBottom="10px">
            <InputComponent
              sign
              id={`sign_${i}`} //구분을 위해 id에 index 삽입
              type={i === 3 && signPwHide ? "password" : undefined}
              password={i === 3 ? true : false}
              value={e}
              onChange={onChangeEvent}
              placeholder={
                i === 0
                  ? "전화번호, 사용자 이름 또는 이메일"
                  : i === 1
                  ? "성명"
                  : i === 2
                  ? "아이디(영문 + 숫자)"
                  : i === 3
                  ? "비밀번호"
                  : ""
              }
              maxSize={20}
              //style
              icon={
                i === 0
                  ? mail_icon
                  : i === 1
                  ? user_icon
                  : i === 2
                  ? gear_icon
                  : i === 3
                  ? lock_icon
                  : ""
              }
              signIcon={
                (i === 0 && (telOrEmailCheck.email || telOrEmailCheck.tel)) ||
                (i === 1 && nameChack) ||
                (i === 2 &&
                  (idCheck.dup === undefined || idCheck.dup === true) &&
                  idCheck.reg) ||
                (i === 3 && pwCheck.length)
                  ? check_icon
                  : x_icon
              }
              height="50px"
            />
          </Div>
        ))}
    </Div>
  );
};

export default SignUpInputComponent;
