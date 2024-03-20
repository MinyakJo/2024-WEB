import axios from "axios";

export const CLIENT_ID = "";
export const REDIRECT_URL = `${process.env.REACT_APP_URL}/login/kakao`;
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=code`;

export const getAccessTokenByKakao = async (code: string) => {
  try {
    const result = await axios({
      method: "post",
      url: "https://kauth.kakao.com/oauth/token",
      params: {
        grant_type: "authorization_code",
        client_id: process.env.REACT_APP_KAKAO_REST_API_KEY,
        redirect_url: REDIRECT_URL,
        code: code,
      },
    });

    return result.data.access_token;
  } catch (err) {
    console.log(err);
  }
  return undefined;
};

export const getUserInfoByKakao = async (getAccessTokenByKakao: string) => {
  const result = await axios({
    method: "get",
    url: "https://kapi.kakao.com/v1/oidc/userinfo",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      Authorization: `Bearer ${getAccessTokenByKakao}`,
    },
  });
  return result.data;
};
