import React from 'react';
import styled from 'styled-components';
import Profit from './Profit';

export default function Stock(props) {
  return (
    <StockStyle>
      <CardTitle>
        계좌 점유율 #{props.index || '1'} ({props.share || '00'}%)
      </CardTitle>
      <CardRow>
        <TypeColumn>
          <CardName>{props.name || 'default'}</CardName>
          <CardMoney>
            {props.money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') || '000,000'}원
          </CardMoney>
        </TypeColumn>
        <Profit name="금일 수익률" value={props.rate || '00.0'}></Profit>
      </CardRow>
    </StockStyle>
  );
}

const StockStyle = styled.div`
  padding: 2vh 2vh 2vh 2vh;
  height: 28vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
`;

const CardTitle = styled.div`
  font-size: 18px;
`;

const CardRow = styled.div`
  height: 20vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4% 6% 4% 6%;
`;

const CardName = styled.div`
  font-size: 17px;
`;

const CardMoney = styled.div`
  font-size: 33px;
  font-weight: bold;
`;

const TypeColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-evenly;
  height: 15vh;
`;
