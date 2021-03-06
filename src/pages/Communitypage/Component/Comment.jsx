import styled from 'styled-components';
import { useState } from 'react';

export default function Comment(){

  const [Heart,SetHeart]=useState('');

  const Clicked = () => {
    if(Heart==='' || Heart==='unclicked'){
      SetHeart('clicked')
      console.log(Heart)
    }
    else
      SetHeart('unclicked')
      console.log(Heart)
  }

    return(
        <BoardTab>
        <DisplayFlex>
          <GoldText>π</GoldText>&nbsp;<WhiteText>μ΄λ¦</WhiteText>
        </DisplayFlex>
          <WhiteText>λ΄μ©</WhiteText>
        <CommentBottomTab>
          <BoardDate>μμ± λ μ§</BoardDate> {Heart==='clicked' ? <Like onClick={Clicked}>β₯</Like> : <Like onClick={Clicked}>β‘</Like>}
        </CommentBottomTab>
      </BoardTab> 
    );
}

//μ°μΈ‘μ λ ¬, μ’μΈ‘μ λ ¬ μν μ€νμΌ νκ·Έ
const DisplayFlex = styled.div`
    display:flex;
`;

//λκΈ μμ±λ μ§,μ’μμ λ μ΄μμ
const CommentBottomTab = styled.div`
margin-top:7px;
display:flex;
width:100%;
font-size:12px;
`;

//κΈμκΈμ μ€νμΌ
const GoldText =styled.div`
font-size: 14px;
color: rgb(152, 128, 101);
`;

//νμκΈμ μ€νμΌ
const WhiteText = styled.div`
  color:white;
  font-size:14px;
`;

//λ μ§
const BoardDate =styled.div`
  color: rgb(119, 119, 119);
`;

//κ²μκΈ, λκΈ λ μ΄μμ
const BoardTab = styled.div`
  width:96%;
  margin-left:2%;
  padding:10px;
  border-bottom: 1px solid rgb(152, 128, 101);
  border-top: 1px solid rgb(32, 32,32,1);
  margin-top:10px;
`;

//μ’μμ
const Like =styled.div`
  color:#ED6A60;
  margin-left:auto;  
`; //margin-left:auto; λ‘ μ°μΈ‘μ λ ¬