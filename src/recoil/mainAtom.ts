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
export type profileDataType = {
  id?: number;
  loginId?: string;
  realName?: string;
  followerCount?: number;
  followingCount?: number;
  feedCount?: number;
};

//atom
//현재 페이지 위치
export const nowPageNameState = atom({
  key: "nowPageName",
  default: "home",
});
//게시물 리스트
export const feedDataListState = atom<feedDataListType>({
  key: "feedDataList",
  default: undefined,
});
//유저 본인 프로필
export const profileDataState = atom<profileDataType>({
  key: "profileData",
  default: {
    id: undefined,
    loginId: "",
    realName: "",
    followerCount: 0,
    followingCount: 0,
    feedCount: 0,
  },
});
