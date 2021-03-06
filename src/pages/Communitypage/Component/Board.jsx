import styled from 'styled-components';
import {useState} from 'react';
import List from './List';
import HotList from './HotList';
import {Link} from "react-router-dom";

/*

커뮤니티 글목록 리스트

글 종류 구별짓는 네비게이션 바
인기 게시글 (컴포넌트)
게시글 목록 (컴포넌트)

*/



export default function Board(){
    const [SelectedTab, SelectTab] = useState(0);
    const [SelectedClass,SelectClass]=useState("공지");

    const TabZero = () =>{
      SelectTab(0)
      SelectClass("공지");
     
    }
    const TabOne = () =>{
      SelectTab(1)
      SelectClass("주식");
      
    }
    const TabTwo = () =>{
      SelectTab(2)
      SelectClass("잡담");
      
    }
    const TabThree = () =>{
      SelectTab(3)
      SelectClass("내가 쓴 글");
      
    }
    const TabFour = () =>{
      SelectTab(4)
      SelectClass("스크랩");
     
    }

    //게시물 목록 출력 함수
    const PrintBoardList = () =>{
      const result = [];
      for (let i=0; i< 10;i++){
        result.push(
        <Link to="Read/1" style={{ textDecoration: 'none' }}>
        <List SelectedClass={SelectedClass} /></Link>
        );
      }

      return result;
    }

    return(
      <StyledCommunityPage className="Board_page">
        <StyledTabs>
     <StyledTab>
      <StyledTitle>
        커뮤니티
      </StyledTitle>
      </StyledTab>
      </StyledTabs>
      <DisplayFlex>
          <StyledTabButton
        className={SelectedTab === 0 ? 'selected' : 'notselected'}
        onClick={TabZero}
      >
        공지
      </StyledTabButton>
      <DivisionTab>
        |
      </DivisionTab>
          <StyledTabButton
        className={SelectedTab === 1 ? 'selected' : 'notselected'}
        onClick={TabOne}
      >
        주식
      </StyledTabButton>
      <DivisionTab>
        |
      </DivisionTab>
      <StyledTabButton
        className={SelectedTab === 2 ? 'selected' : 'notselected'}
        onClick={TabTwo}
      >
        잡담
      </StyledTabButton>
      <DivisionTab>
        |
      </DivisionTab>
      <StyledTabButton
        className={SelectedTab === 3 ? 'selected' : 'notselected'}
        onClick={TabThree}
      >
        내가 쓴 글
      </StyledTabButton>
      <DivisionTab>
        |
      </DivisionTab>
      <StyledTabButton
        className={SelectedTab === 4 ? 'selected' : 'notselected'}
        onClick={TabFour}
      >
        스크랩
      </StyledTabButton>
      </DisplayFlex>
      <Link to="Read/1" style={{ textDecoration: 'none' }}>
      <HotList SelectedClass={SelectedClass} /></Link>
       <ScrCon>
       <ScrTab>{PrintBoardList()}</ScrTab>
        </ScrCon>
        <Link to="Write" style={{ textDecoration: 'none', color:'white', marginLeft:'80%'}}>글작성</Link>
</StyledCommunityPage>
    );
}

const ScrCon = styled.div`
   height:600px;
`;

const StyledCommunityPage = styled.div`

`;

const DivisionTab = styled.div`
line-height: 45px;
color: rgb(119, 119, 119);
font-size: 14px;
`;

//우측정렬, 좌측정렬 위한 스타일 태그
const DisplayFlex = styled.div`
    display:flex;
`;

const StyledTabButton = styled.div`
  line-height: 45px;
  font-size: 14px;
  margin-left:14px;
  margin-right:14px;
  ${(props) => {
    if (props.className === 'selected') {
      return `color: rgb(152, 128, 101);
      `;
    } else if (props.className === 'notselected') {
      return `color: rgb(119, 119, 119);
      
      `;
    }  else {
      return `color: rgb(119, 119, 119);
      `;
    }
  }};
`;

const StyledTabs = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background: rgb(32, 32, 32);
`;

const StyledTab = styled.div`
  margin-top: 10px;
  width: 100%;
`;

const StyledTitle = styled.div`
  width: 100%;
  text-align: center;
  height: 100%;
  line-height: 45px;
  font-size: 18px;
  color: rgb(152, 128, 101);
  border-bottom: 2px solid rgb(152, 128, 101);
`;

const ScrTab = styled.div`
overflow:auto;
height:100%;
width: 100%;
`;