import styled from 'styled-components';
import { ReactComponent as CommentIcon } from './img/comment-regular.svg';

/* 

인기 게시글 컴포넌트

*/

export default function HotList({ title, date, heartNum, commentNum }) {
  if (title != null) {
    return (
      <HotBoardTab>
        <DisplayFlex>
          <HotTitile>Hot</HotTitile>
          <HotTitleContent>{title}</HotTitleContent>
        </DisplayFlex>
        <BottomTab>
          <BoardDate></BoardDate>
          <Like>♡ {heartNum}</Like>
          <CommentIcon width="20px" height="20px" fill="#61C454" />
          <Comment>{commentNum}</Comment>
        </BottomTab>
      </HotBoardTab>
    );
  } else {
    return <div></div>;
  }
}

//우측정렬, 좌측정렬 위한 스타일 태그
const DisplayFlex = styled.div`
  display: flex;
`;

//인기게시글 레이아웃
const HotBoardTab = styled.div`
  width: 96%;
  height: 80px;
  margin-left: 2%;
  padding: 10px;
  border-right: 1px solid rgb(152, 128, 101);
  border-left: 1px solid rgb(152, 128, 101);
  border-top: 1px solid rgb(152, 128, 101);
  border-radius: 5px 5px 5px 5px;
  border-bottom: 1px solid rgb(152, 128, 101);
`;

//HOT
const HotTitile = styled.div`
  color: #ed6a60;
  margin-right: 5px;
  font-size: 17px;
`;

//인기 게시글 제목
const HotTitleContent = styled.div`
  color: white;
  font-size: 17px;
`;

//인기게시글, 게시글내용 좋아요,댓글 레이아웃
const BottomTab = styled.div`
  margin-top: 20px;
  display: flex;
  width: 100%;
  font-size: 15px;
`;

//날짜
const BoardDate = styled.div`
  color: rgb(119, 119, 119);
`;

//좋아요
const Like = styled.div`
  color: #ed6a60;
  margin-left: auto;
  margin-right: 5px;
`; //margin-left:auto; 로 우측정렬

//말풍선
const Comment = styled.div`
  color: #61c454;
  margin-left: 5px;
`;
