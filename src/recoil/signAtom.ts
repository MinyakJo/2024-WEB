import { atom, selector } from "recoil";

//type
type telOrEmailCheckType = {
  tel: boolean; //전화번호
  email: boolean; //이메일
};
type idCheckType = {
  reg: boolean; //정규식
  dup?: boolean; //중복
};
type pwCheckType = {
  length: boolean; //크기
  reg: boolean; //정규식
};

//atom
//비밀번호 숨기기
export const signPwIsHideState = atom({
  key: "signPwIsHide",
  default: true,
});
//전화번호 체크
export const telOrEmailCheckState = atom<telOrEmailCheckType>({
  key: "telOrEmailCheck",
  default: {
    tel: false,
    email: false,
  },
});
//이름 체크
export const nameCheckState = atom({
  key: "nameCheck",
  default: false,
});
//닉네임, id 체크
export const idCheckState = atom<idCheckType>({
  key: "idCheck",
  default: {
    reg: false,
    dup: undefined,
  },
});
//비밀번호 체크
export const pwCheckState = atom<pwCheckType>({
  key: "pwCheck",
  default: {
    length: false,
    reg: false,
  },
});
//회원가입 알림을 보이게할지 안보이게 할지
export const signHiddenAlertState = atom({
  key: "signHiddenAlert",
  default: false,
});

//selector
//가입하기 버튼 활성화
export const signCheckState = selector({
  key: "signCheck",
  get: ({ get }) => {
    const telOrEmailCheck = get(telOrEmailCheckState);
    const nameCheck = get(nameCheckState);
    const idCheck = get(idCheckState);
    const pwCheck = get(pwCheckState);

    return (telOrEmailCheck.tel || telOrEmailCheck.email) &&
      nameCheck &&
      idCheck.reg &&
      pwCheck.reg
      ? true
      : false;
  },
});
