import styled from 'styled-components';
import { useEffect, useState } from 'react';
import List from './List';
import HotList from './HotList';
import { Link } from 'react-router-dom';
import pencilIcon from './img/pencil-solid.svg';
import data from './data.json';

/*

커뮤니티 글목록 리스트

글 종류 구별짓는 네비게이션 바
인기 게시글 (컴포넌트)
게시글 목록 (컴포넌트)

*/

let boardData = data.data1;
let dataNum = '1';
let selectedTab = 0;
//게시물 목록 출력 함수
const PrintBoardList = () => {
  const result = [];
  if (boardData.length !== 0) {
    for (let i = 0; i < boardData.length; i++) {
      const url = 'Read/' + dataNum + i;

      result.push(
        <Link to={url} key={i} style={{ textDecoration: 'none' }}>
          <List
            title={boardData[i].title}
            date={boardData[i].date}
            heartNum={boardData[i].heartNum}
            commentNum={boardData[i].commentNum}
          />
        </Link>
      );
    }
  }

  return result;
};

export default function Board() {
  const [selectedClass, selectClass] = useState('공지');
  const [loading, setLoading] = useState(true);

  const hotUrl = 'Read/' + dataNum + 0;

  useEffect(() => {
    setLoading(true);
    setLoading(false);
  }, []);

  console.log(selectedClass);

  const TabZero = () => {
    //selectTab(0);
    selectedTab = 0;
    selectClass('공지');
    boardData = data.data1;
    dataNum = '1';
    //setDataNum('1');
  };

  const TabOne = () => {
    // selectTab(1);
    selectedTab = 1;
    selectClass('주식');
    boardData = data.data2;
    dataNum = '2';
    // setDataNum('2');
  };
  const TabTwo = () => {
    // selectTab(2);
    selectedTab = 2;
    selectClass('잡담');
    boardData = data.data0;
    dataNum = '0';
    // setDataNum('0');
  };
  const TabThree = () => {
    // selectTab(3);
    selectedTab = 3;
    selectClass('내가 쓴 글');
    boardData = data.data3;
    dataNum = '3';
    // setDataNum('3');
    console.log(boardData.length);
  };
  const TabFour = () => {
    //selectTab(4);
    selectedTab = 4;
    selectClass('스크랩');
    boardData = data.data4;
    dataNum = '4';
    // setDataNum('4');
  };

  return (
    <StyledCommunityPage className="Board_page">
      <StyledTabs>
        <StyledTab>
          <StyledTitle>커뮤니티</StyledTitle>
        </StyledTab>
      </StyledTabs>
      <DisplayFlex>
        <StyledTabButton
          className={selectedTab === 0 ? 'selected' : 'notselected'}
          onClick={TabZero}
        >
          공지
        </StyledTabButton>
        <DivisionTab>|</DivisionTab>
        <StyledTabButton
          className={selectedTab === 1 ? 'selected' : 'notselected'}
          onClick={TabOne}
        >
          주식
        </StyledTabButton>
        <DivisionTab>|</DivisionTab>
        <StyledTabButton
          className={selectedTab === 2 ? 'selected' : 'notselected'}
          onClick={TabTwo}
        >
          잡담
        </StyledTabButton>
        <DivisionTab>|</DivisionTab>
        <StyledTabButton
          className={selectedTab === 3 ? 'selected' : 'notselected'}
          onClick={TabThree}
        >
          내가 쓴 글
        </StyledTabButton>
        <DivisionTab>|</DivisionTab>
        <StyledTabButton
          className={selectedTab === 4 ? 'selected' : 'notselected'}
          onClick={TabFour}
        >
          스크랩
        </StyledTabButton>
      </DisplayFlex>
      {boardData.length === 0 ? (
        <ScrCon>
          <div style={{ marginTop: '10px', color: 'rgb(119, 119, 119)', marginLeft: '30px' }}>
            글이 없습니다.
          </div>
          <Link to="Write">
            <div
              style={{ marginLeft: '80%', position: 'absolute', right: '50px', bottom: '-150px' }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  background: 'rgb(152, 128, 101)',
                  borderRadius: '50%',
                }}
              >
                <img src={pencilIcon} alt="글작성" style={{ width: '50px' }}></img>
              </div>
            </div>
          </Link>
        </ScrCon>
      ) : (
        <div>
          <Link to={hotUrl} style={{ textDecoration: 'none' }}>
            <HotList
              title={boardData[0].title}
              date={boardData[0].date}
              heartNum={boardData[0].heartNum}
              commentNum={boardData[0].commentNum}
            />
          </Link>
          <ScrCon>
            <ScrTab>{PrintBoardList()}</ScrTab>
            <Link to="Write">
              <div
                style={{ marginLeft: '80%', position: 'absolute', right: '50px', bottom: '-150px' }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '80px',
                    height: '80px',
                    background: 'rgb(152, 128, 101)',
                    borderRadius: '50%',
                  }}
                >
                  <img src={pencilIcon} alt="글작성" style={{ width: '50px' }}></img>
                </div>
              </div>
            </Link>
          </ScrCon>
        </div>
      )}
    </StyledCommunityPage>
  );
}

const ScrCon = styled.div`
  height: calc(100%);
`;

const StyledCommunityPage = styled.div`
  position: fixed;
  width: 100%;
  height: calc(100% - 260px);
`;

const DivisionTab = styled.div`
  line-height: 45px;
  color: rgb(119, 119, 119);
  font-size: 14px;
`;

//우측정렬, 좌측정렬 위한 스타일 태그
const DisplayFlex = styled.div`
  display: flex;
`;

const StyledTabButton = styled.div`
  line-height: 45px;
  font-size: 14px;
  margin-left: 14px;
  margin-right: 14px;
  ${(props) => {
    if (props.className === 'selected') {
      return `color: rgb(152, 128, 101);
      `;
    } else if (props.className === 'notselected') {
      return `color: rgb(119, 119, 119);
      
      `;
    } else {
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
  overflow: auto;
  height: 100%;
  width: 100%;
`;
