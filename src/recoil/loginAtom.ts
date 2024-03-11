import { atom } from "recoil"

//atom

// 로그인 버튼 활성화 여부 state
export const loginCheckState = atom({
    key: "loginCheck",
    default: false
})

// 로그인 버튼 비밀번호 숨기기 여부 state
export const pwIsHideState = atom({
    key: "pwIsHide",
    default: true
})