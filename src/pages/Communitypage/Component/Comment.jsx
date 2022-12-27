import styled from 'styled-components';
import { useEffect, useState } from 'react';

export default function Comment(cData) {
  const [Heart, SetHeart] = useState('');

  const data = Object.values(cData);
  console.log(data[0].commentWriter);

  const Clicked = () => {
    if (Heart === '' || Heart === 'unclicked') {
      SetHeart('clicked');
      console.log(Heart);
    } else SetHeart('unclicked');
    console.log(Heart);
  };

  return (
    <BoardTab>
      <DisplayFlex>
        <GoldText>😀</GoldText>&nbsp;<WhiteText>{data[0].commentWriter}</WhiteText>
      </DisplayFlex>
      <WhiteText>{data[0].commentContent}</WhiteText>
      <CommentBottomTab>
        <BoardDate>{data[0].commentDate}</BoardDate>{' '}
        {Heart === 'clicked' ? (
          <Like onClick={Clicked}>♥{data[0].commentHeartNum}</Like>
        ) : (
          <Like onClick={Clicked}>♡{data[0].commentHeartNum}</Like>
        )}
      </CommentBottomTab>
    </BoardTab>
  );
}

//우측정렬, 좌측정렬 위한 스타일 태그
const DisplayFlex = styled.div`
  display: flex;
`;

//댓글 작성날짜,좋아요 레이아웃
const CommentBottomTab = styled.div`
  margin-top: 7px;
  display: flex;
  width: 100%;
  font-size: 12px;
`;

//금색글자 스타일
const GoldText = styled.div`
  font-size: 14px;
  color: rgb(152, 128, 101);
`;

//하얀글자 스타일
const WhiteText = styled.div`
  color: white;
  font-size: 14px;
`;

//날짜
const BoardDate = styled.div`
  color: rgb(119, 119, 119);
`;

//게시글, 댓글 레이아웃
const BoardTab = styled.div`
  width: 96%;
  margin-left: 2%;
  padding: 10px;
  border-bottom: 1px solid rgb(152, 128, 101);
  border-top: 1px solid rgb(32, 32, 32, 1);
  margin-top: 10px;
`;

//좋아요
const Like = styled.div`
  color: #ed6a60;
  margin-left: auto;
`; //margin-left:auto; 로 우측정렬
