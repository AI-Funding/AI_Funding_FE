import React from 'react';
import styled from 'styled-components';
import Profit from './Profit';
import aquaBadge from '../../../image/AquaF.svg'

export default function MyAccount(props) {
  return (
      <MyAccountStyle>
        
        <Info>
          <InfoRowStyle>
            <InfoStyle>{props.name || 'default'}</InfoStyle>
            <FixedText>님의&nbsp;</FixedText>
            <InfoStyle>{props.accountName || 'default'}</InfoStyle>
            <FixedText>계좌입니다.</FixedText>
          </InfoRowStyle>

          <StartDay>투자 시작일로부터 + {getStartDay(props.startDay) || '00'}일</StartDay>
        </Info>

        <Badge></Badge>

        <MoneyContent>
          <MoneyRowStyle>
            <MoneyStyle>
              {props.money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') || '000,000'}
            </MoneyStyle>
            <MoneyUnit>원</MoneyUnit>
          </MoneyRowStyle>
        </MoneyContent>

        <ProfitColumnStyle>
          <Profit name="금일 수익률" value={props.todayIncome || '0.00'} border="true"></Profit>
          <Profit name="금일 수익금" value={props.todayProfit || '0'} border="true"></Profit>
        </ProfitColumnStyle>

        <ProfitColumnStyle>
          <Profit name="누적 수익률" value={props.totalIncome || '0.00'}></Profit>
          <Line></Line>
          <Profit name="누적 수익금" value={props.totalProfit || '0'}></Profit>
        </ProfitColumnStyle>
      </MyAccountStyle>
  );
}

const getStartDay = (createAt) => {
  const todayDate = new Date();
  const createDate = new Date(createAt);
  const startDay = Math.ceil((todayDate.getTime() - createDate.getTime()) / (1000 * 60 * 60 * 24));
  return startDay;
};

/*스타일*/
const MyAccountStyle = styled.div`
  border: 1px solid #b8a88e;
  border-radius: 10px;
  padding: 1vh 1vw 1vh 1vw;
  background-color: #000000;
`;

const Info = styled.div`
  height: 10vh;
  padding-top: 2vw;
  padding-left: 4vw;
`

const Badge = styled.div`
  background-image: url(${aquaBadge});
  position: absolute;
  top: 5vw;
  right: 5vw;
  width: 45px;
  height: 45px;
`

const InfoRowStyle = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 16px;
  font-weight: 300;
`;

const InfoStyle = styled.div`
  font-family: Spoqa Han Sans Neo;
  font-size: 21px;
  font-weight: bold;
`;

const FixedText = styled.div`
  font-family: Spoqa Han Sans Neo Light;
  font-size: 16px;
`

const StartDay = styled.div`
  font-family: Spoqa Han Sans Neo Light;
  margin-Top: 20px;
`

const MoneyContent= styled.div`
  display: flex;
  height: 18vh;
`

const MoneyRowStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  font-size: 32px;
  font-weight: regular;
`;

const MoneyStyle = styled.div`
  font-size: 42px;
  font-weight: bold;
`;

const MoneyUnit = styled.div`
  font-family: Spoqa Han Sans Neo Light;
  font-size: 30px;
  font-weight: 200;
`

const ProfitColumnStyle = styled.div`
  height: 15vh;
  width: 78vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 10vw;
  margin-right: 10vw;
`;

const Line = styled.div`
  width: 1px;
  height: 80px;
  background-color: white;
  transform: rotate(45deg);
`;
