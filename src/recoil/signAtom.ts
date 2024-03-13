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
type signBirthDateType = {
  year: number;
  month: number | string;
  day: number | string;
};

//atom
//회원가입 데이터
export const signInputsState = atom<string[]>({
  key: "signInputs",
  default: ["", "", "", ""],
});
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
//회원가입 페이지 전환
export const isBirthDatePageState = atom({
  key: "isBirthDatePage",
  default: false,
});
export const isPolicyPageState = atom({
  key: "isPolicyPage",
  default: false,
});
//생년월일
export const signBirthDateState = atom<signBirthDateType>({
  key: "signBirthDate",
  default: {
    year: new Date().getFullYear(),
    month: "선택",
    day: "선택",
  },
});
//이용약관 체크
export const signPolicyCheckListState = atom<boolean[]>({
  key: "signPolicyCheckList",
  default: [],
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
      pwCheck.length
      ? true
      : false;
  },
});
//날짜입력 창에서의 가입버튼 활성화
export const signDateCheckState = selector({
  key: "signDateCheck",
  get: ({ get }) => {
    const birthDate = get(signBirthDateState);
    const year = !isNaN(Number(birthDate.year));
    const month = !isNaN(Number(birthDate.month));
    const day = !isNaN(Number(birthDate.day));

    return year && month && day ? true : false;
  },
});
//이용약관 모두 동의
export const signPolicyAllCheckState = selector<boolean>({
  key: "signPolicyAllCheck",
  get: ({ get }) => {
    const checkList = get(signPolicyCheckListState);
    let count = 0;

    for (let i of checkList) {
      if (i) count++;
    }

    return count === checkList.length ? true : false;
  },
  set: ({ set, get }) => {
    const checkList = get(signPolicyCheckListState);
    const copyList = [...checkList];

    checkList.forEach((e, i) => {
      copyList.splice(i, 1, !e);
    });

    set(signPolicyCheckListState, copyList);
  },
});
