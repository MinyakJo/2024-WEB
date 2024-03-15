export const createdAtFormat = (date: Date): string => {
  const milsec = new Date().getTime() - date.getTime();
  const sec = milsec / 1000;
  if (sec < 60) return "1분 전";
  const min = sec / 60;
  if (min < 60) return `${Math.floor(min)}분 전`;
  const hour = min / 60;
  if (hour < 24) return `${Math.floor(hour)}시간 전`;
  const day = hour / 24;
  if (day < 7) return `${Math.floor(day)}일 전`;
  const week = day / 7;
  if (week < 5) return `${Math.floor(week)}주 전`;

  return `${
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  }월${date.getDate()}일`;
};
