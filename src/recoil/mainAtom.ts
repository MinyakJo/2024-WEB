import { atom } from "recoil";

//type
export type feedDataListType = {
  id?: number;
  feedLoginId?: string;
  feedText?: string;
  contentList: { id: number; contentUrl: string }[];
  createdAt?: string;
  isBookMarked?: boolean;
  isLiked?: boolean;
  updatedAt?: string;
  feedCommentCount?: number;
}[];

//atom
export const nowPageNameState = atom({
  key: "nowPageName",
  default: "home",
});
export const feedDataListState = atom<feedDataListType>({
  key: "feedDataList",
  default: undefined,
});
