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
export type commentDataListType = {
  id: number;
  writeUserLoginId: string;
  commentText: string;
}[];

//atom
//너비가 모바일인가
export const isMobileState = atom<boolean | undefined>({
  key: "isMobile",
  default: false,
});
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
//댓글 레이아웃
export const commentLayoutIsOpenState = atom({
  key: "commentLayoutIsOpen",
  default: false,
});
export const feedLayoutIsOpenState = atom({
  key: "feedLayoutIsOpen",
  default: false,
});
//선택된 피드 아이디
export const selectedFeedIdState = atom<number | undefined>({
  key: "selectedFeedId",
  default: undefined,
});
//선택된 피드 인덱스
export const selectedFeedIndexState = atom<number | undefined>({
  key: "selectedFeedIndex",
  default: undefined,
});
// 특정 피드 댓글리스트
export const commentDataListState = atom<commentDataListType>({
  key: "commentDataList",
  default: undefined,
});
