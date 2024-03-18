import { atom } from "recoil";

export type commentDataListType = {
  id: number;
  writeUserLoginId: string;
  commentText: string;
}[];

//atom
export const boardIdState = atom<number | undefined>({
  key: "boardId",
  default: undefined,
});
export const boardCommentListState = atom<commentDataListType>({
  key: "boardCommentList",
  default: undefined,
});
export const commentPageState = atom({
  key: "commentPage",
  default: 1,
});
