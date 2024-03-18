import { atom } from "recoil";

//type
export type dialogType = {
  isOpen?: boolean;
  type?: string;
  data?: any;
};

//atom
export const dialogState = atom<dialogType[] | any[]>({
  key: "dialog",
  default: [],
});
//보드 작성 사진 리스트
export const boardImgListState = atom<File[] | undefined>({
  key: "boardImgList",
  default: undefined,
});
export const boardPreviewListState = atom<string[] | undefined>({
  key: "boardPreviewList",
  default: undefined,
});
export const nowBoardIndexState = atom({
  key: "nowBoardIndex",
  default: 0,
});
export const boardTextState = atom({
  key: "boardText",
  default: "",
});
