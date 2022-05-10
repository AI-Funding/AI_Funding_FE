import styled from 'styled-components';
import { useState } from 'react';
import AccountLineChart from './AccountLineChart';

export default function CompareProfit() {
  const [selectedTerm, SelectTerm] = useState(0);
  return (
    <StyledCompareProfit className="compareProfit">
      <StyledTop className="term">
        <StyledTermButton
          className={selectedTerm === 0 ? 'selected' : 'notselected'}
          onClick={() => SelectTerm(0)}
        >
          ALL
        </StyledTermButton>
        <StyledBar>|</StyledBar>
        <StyledTermButton
          className={selectedTerm === 1 ? 'selected' : 'notselected'}
          onClick={() => SelectTerm(1)}
        >
          1M
        </StyledTermButton>
        <StyledBar>|</StyledBar>
        <StyledTermButton
          className={selectedTerm === 3 ? 'selected' : 'notselected'}
          onClick={() => SelectTerm(3)}
        >
          3M
        </StyledTermButton>
        <StyledBar>|</StyledBar>
        <StyledTermButton
          className={selectedTerm === 6 ? 'selected' : 'notselected'}
          onClick={() => SelectTerm(6)}
        >
          6M
        </StyledTermButton>
        {/* <AccountLineChart /> */}
      </StyledTop>
      {/* <StyledBottom></StyledBottom> */}
    </StyledCompareProfit>
  );
}

const StyledCompareProfit = styled.div`
  height: 100%;
`;

const StyledTop = styled.div`
  height: 100%;
  border: solid 1px #b8a88e;
  border-radius: 10px;
  margin: 8px;
  background-color: black;
  position: relative;
`;

const StyledTermButton = styled.span`
  font-weight: bold;
  margin: 0 8px;
  font-size: 1.1rem;
  ${(props) => {
    return props.className === 'selected'
      ? `color: rgb(184, 168, 142)`
      : `color: rgb(119, 119, 119)`;
  }};
`;

const StyledBar = styled.span`
  font-weight: bold;
  color: rgb(151, 151, 151);
`;

const StyledBottom = styled.div`
  height: 50vh;
  border: solid 1px #b8a88e;
  border-radius: 10px;
  background-color: #202020;
  position: relative;
  margin: 10px;
`;
