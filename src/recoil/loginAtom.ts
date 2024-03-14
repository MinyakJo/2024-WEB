import { atom } from "recoil";

//atom
//id, pw
export const loginInputState = atom({
  key: "loginInput",
  default: {
    id: "",
    pw: "",
  },
});

// 로그인 버튼 활성화 여부 state
export const loginCheckState = atom({
  key: "loginCheck",
  default: false,
});

// 로그인 버튼 비밀번호 숨기기 여부 state
export const pwIsHideState = atom({
  key: "pwIsHide",
  default: true,
});

//히든 텍스트 보일지 안보일지 여부
export const loginHiddenAlertState = atom({
  key: "loginHiddenAlert",
  default: {
    text: "",
    isHidden: true,
  },
});
