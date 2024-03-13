import React, { useEffect, useState } from "react";
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";
import {
  isBirthDatePageState,
  isPolicyPageState,
  signBirthDateState,
  signDateCheckState,
} from "recoil/signAtom";

//component
import Div from "layout/Div";
import DropdownComponent from "./DropdownComponent";
import P from "layout/P";
import ButtonComponent from "components/ButtonComponent";
import Button from "layout/Button";

const SignUpCheckBoxComponent = () => {
  //state
  const [listOpen, setListOpen] = useState({
    year: false,
    month: false,
    day: false,
  });
  const [yearList, setYearList] = useState<number[]>([]);
  const [monthList, setMonthList] = useState<number[]>([]);
  const [dayList, setDayList] = useState<number[]>([]);

  //recoil
  const [birthDate, setBirthDate] = useRecoilState(signBirthDateState);
  const resetBirthDate = useResetRecoilState(signBirthDateState);
  const signDateCheck = useRecoilValue(signDateCheckState);
  const setIsBirthDate = useSetRecoilState(isBirthDatePageState);
  const setIsPolicy = useSetRecoilState(isPolicyPageState);

  //useEffect
  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    const yList: number[] = [];
    const mList: number[] = [];

    //연도 리스트 추가
    for (let i = 0; i < year - 1939; i++) {
      yList.push(year - i);
    }
    //월 리스트 추가
    for (let i = 0; i < 12; i++) {
      mList.push(i + 1);
    }
    setYearList(yList);
    setMonthList(mList);
  }, []);

  useEffect(() => {
    const month = Number(birthDate.month);

    if (!isNaN(month)) {
      const lastDay = new Date(birthDate.year, month, 0).getDate();
      const dList: number[] = [];

      //년도 월에 맞춰 일 리스트 변경
      for (let i = 0; i < lastDay; i++) {
        dList.push(i + 1);
      }

      setDayList(dList);
    }
  }, [birthDate.month, birthDate.year]);

  //event
  const onClickEvent = (e: React.MouseEvent<HTMLDivElement>) => {
    const id = (e.target as HTMLElement).id;
    const type = id.split("_")[0];
    const date = Number(id.split("_")[1]);

    switch (type) {
      case "year":
      case "month":
      case "day":
        if (!isNaN(date)) {
          setBirthDate({
            ...birthDate,
            [type]: date,
          });

          setListOpen({
            ...listOpen,
            [type]: false,
          });
        } else {
          //열어둔 체크박스 초기화 하면서 열기
          if (type === "year") {
            setListOpen({
              ...listOpen,
              year: true,
              month: false,
              day: false,
            });
          } else if (type === "month") {
            setListOpen({
              ...listOpen,
              year: false,
              month: true,
              day: false,
            });
          } else {
            setListOpen({
              ...listOpen,
              year: false,
              month: false,
              day: true,
            });
          }
        }
        return;
      case "sign":
        setIsPolicy(true);
        return;
      case "back":
        //돌아가기를 눌러 돌아갈 경우 데이터 초기화
        resetBirthDate();
        setIsBirthDate(false);
        return;
      default:
        return;
    }
  };

  return (
    <Div marginTop="30px" onClick={onClickEvent}>
      <Div flex="row_between">
        {/* 월 */}
        <DropdownComponent
          width="101px"
          type="month"
          isOpen={listOpen.month}
          dataList={monthList}
        >
          {birthDate.month}
        </DropdownComponent>
        {/* 일 */}
        <DropdownComponent
          width="98px"
          type="day"
          isOpen={listOpen.day}
          dataList={dayList.length > 0 ? dayList : ["빈 값"]}
        >
          {birthDate.day}
        </DropdownComponent>
        {/* 년 */}
        <DropdownComponent
          width="101px"
          type="year"
          isOpen={listOpen.year}
          dataList={yearList}
        >
          {birthDate.year}
        </DropdownComponent>
      </Div>
      <Div flex="row_center" marginTop="10px">
        <P
          fontSize="small"
          fontWeight="400"
          lineHeight="20px"
          fontFamily="regular"
          color="500"
        >
          태어난 날짜를 입력해야합니다
        </P>
      </Div>
      <Div height="44px" marginTop="30px">
        <ButtonComponent
          id="sign"
          color="white"
          fontSize="medium"
          backgroundColor={signDateCheck ? "blue" : "sky_blue"}
          cursor={signDateCheck ? "pointer" : "default"}
        >
          가입
        </ButtonComponent>
      </Div>
      <Div flex="row_center" marginTop="10px">
        <Button
          id="back"
          color="blue"
          fontSize="medium"
          fontWeight="600"
          lineHeight="24px"
          fontFamily="semiBold"
        >
          돌아가기
        </Button>
      </Div>
    </Div>
  );
};

export default SignUpCheckBoxComponent;
