import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CommonStyle from "components/style";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  isPolicyPageState,
  signBirthDateState,
  signInputsState,
  signPolicyAllCheckState,
  signPolicyCheckListState,
} from "recoil/signAtom";
import { fetch } from "apis/fetch";
import { dateFormat } from "utils/dataFormat";

//component
import Div from "layout/Div";
import Button from "layout/Button";
import Img from "layout/Img";
import ButtonComponent from "components/ButtonComponent";

//icon, img
import blue_check from "../../assets/blue_check_icon.svg";
import Icon from "layout/Icon";
import { useNavigate } from "react-router-dom";

//styled
const PolicyComponent = styled(Div)`
  ${CommonStyle.setFlex("row_between")};
  padding: 13px 0px;
  cursor: pointer;

  button {
    font-size: ${CommonStyle.setFontSize("medium")};
    line-height: 24px;
    font-weight: 500;
  }
`;
const Line = styled.div`
  width: 100%;
  height: 0px;
  border: 1px solid ${CommonStyle.setColor("200")};
`;
const CheckBox = styled(Icon)`
  width: 20px;
  padding: 2px;
  border-radius: 6px;
  button {
    ${CommonStyle.setFlex("row_center")};
  }
`;

const PolicyCheckListComponent = () => {
  //navigate
  const navigate = useNavigate();

  //state
  const [policyList, setPolicyList] = useState<string[]>([]);

  //recoil
  //동의리스트
  const [policyCheckList, setPolicyCheckList] = useRecoilState(
    signPolicyCheckListState
  );
  //모두 동의
  const [policyAllCheck, setPolicyAllCheck] = useRecoilState(
    signPolicyAllCheckState
  );
  //전 페이지로 이동
  const setIsPolicyPage = useSetRecoilState(isPolicyPageState);
  //가입에 필요한 데이터
  const inputs = useRecoilValue(signInputsState);
  const birthDate = useRecoilValue(signBirthDateState);

  //useEffect
  useEffect(() => {
    const list: string[] = [];
    const boolList: boolean[] = [];

    for (let i = 0; i < 3; i++) {
      list.push(
        i === 0
          ? "이용약관(필수)"
          : i === 1
          ? "데이터 정책(필수)"
          : "위치 기반 기능(필수)"
      );
      boolList.push(false);
    }

    setPolicyList(list);
    setPolicyCheckList(boolList);
  }, []);

  //event
  const onClickEvent = async (e: React.MouseEvent<HTMLDivElement>) => {
    const id = (e.target as HTMLElement).id;
    const type = id.split("_")[0];
    const index = Number(id.split("_")[1]);

    //가입
    switch (type) {
      case "policy":
        if (!isNaN(index)) {
          //복사
          const copyCheckList = [...policyCheckList];
          //수정
          copyCheckList.splice(index, 1, !policyCheckList[index]);
          setPolicyCheckList(copyCheckList);
        } else {
          //모두 동의를 눌렀을 시에
          if (id.split("_")[1] === "all") setPolicyAllCheck(!policyAllCheck);
        }
        return;
      case "sign":
        const fetchData = await fetch({
          method: "POST",
          url: "/auth/sign-up",
          data: {
            loginId: inputs[2],
            password: inputs[3],
            realName: inputs[1],
            phone: inputs[0]
              .replace(/[^0-9]/g, "")
              .replace(/^(\d{3})(\d{4})(\d{4})$/, `$1-$2-$3`),
            birthDate: `${dateFormat(
              birthDate.year,
              birthDate.month,
              birthDate.day,
              "-"
            )}`,
          },
        });

        if (fetchData?.data) {
          if (fetchData.data.statusCode === 201)
            navigate("/login", { replace: true });
          else alert(fetchData.data.message[0]);
        }
        return;
      case "back":
        setIsPolicyPage(false);
        return;
      default:
        return;
    }
  };

  return (
    <Div marginTop="19px" onClick={onClickEvent}>
      <PolicyComponent id="policy_all">
        <Div width="fit-content">
          <Button id="policy_all">이용약관 3개에 모두 동의</Button>
        </Div>
        <CheckBox
          id="policy_all"
          backgroundColor={policyAllCheck ? "#eff8ff" : undefined}
          borderColor={policyAllCheck ? "blue" : "#D0D5DD"}
        >
          <Button id="policy_all">
            {policyAllCheck && <Img src={blue_check} id="policy_all" />}
          </Button>
        </CheckBox>
      </PolicyComponent>
      <Line />
      {policyList &&
        policyList.map((e, i) => (
          <PolicyComponent key={`sign_policy_${i}`} id={`policy_${i}`}>
            <Div width="fit-content">
              <Div width="fit-content">
                <Button color="#101828" id={`policy_${i}`}>
                  {e}
                </Button>
              </Div>
              <Div width="fit-content">
                <Button color="blue" id={`policy_${i}`}>
                  더 알아보기
                </Button>
              </Div>
            </Div>
            <CheckBox
              id={`policy_${i}`}
              backgroundColor={policyCheckList[i] ? "#eff8ff" : undefined}
              borderColor={policyCheckList[i] ? "blue" : "#D0D5DD"}
            >
              <Button id={`policy_${i}`}>
                {policyCheckList[i] && (
                  <Img src={blue_check} id={`policy_${i}`} />
                )}
              </Button>
            </CheckBox>
          </PolicyComponent>
        ))}
      {/* 다음, 돌아가기 */}
      <Div height="44px" marginTop="34px">
        <ButtonComponent
          id="sign"
          color="white"
          fontSize="medium"
          backgroundColor={policyAllCheck ? "blue" : "sky_blue"}
          cursor={policyAllCheck ? "pointer" : "default"}
        >
          다음
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

export default PolicyCheckListComponent;
