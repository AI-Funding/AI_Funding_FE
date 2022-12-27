import axios from "axios";

/* Action Types */
const INSERT_BOARD='board/INSERT_BOARD';
const GET_BOARD='board/GET_BOARD';
const READ_BOARD='board/READ_BOARD';
const INSERT_COMMENT='board/INSERT_COMMENT';
const INIT = 'board/INIT';

/* Initial state */
const initBoard = [];
const initHot = {};

/* Action Creators */

//카테고리에 따른 게시판 값 가져옴
export const getBoard = (category,customer_info_id,login_type) => ({
  type:GET_BOARD,
  category,
  customer_info_id,
  login_type
});

//게시판 글 읽기
export const readBoard = (idx) => ({
  type:READ_BOARD,
  idx
});

//게시판 글 추가
export const insertBoard = (newBoard) => ({
  type:INSERT_BOARD,
  newBoard
  });

//댓글 추가
export const insertComment = (userId) => ({
    type:INSERT_COMMENT,
    userId
      
  });

//게시판 초기화
export const init = () => ({
  type:INIT
    
});

/*
insertData:{
          id: insertData.id,
          title: insertData.title,
          date: insertData.date,
          heartNum: insertData.heartNum,
          commentNum:insertData.commentNum,
          writer:insertData.writer,
          comments: {
            commentWriter:insertData.commentWriter,
            commentContent:insertData.commentContent,
            commentDate:insertData.commentDate,
            commentHeartNum:insertData.commentHeartNum
          }
        }
*/

/* axios.post('api/community-'+action.category,{
        customer_info_id:action.customer_info_id,
        login_type:action.login_type
      })
      .then((res)=>{
        board.splice(0,state.length); //초기화
        board=res.data.board; //게시글 설정
        hotBoard={ //인기 게시글 내용 설정
          isMember : res.data.hotComments,
	        hotId : res.data.hotComments,
	        hotTitle : res.data.hotComments,
	        hotDate : res.data.hotComments,
	        hotHeartNum : res.data.hotComments,
	        hotCommentNum : res.data.hotComments,
	        hotContent : res.data.hotComments,
	        hotWriter : res.data.hotComments,
	        hotComments : res.data.hotComments
        };

      })
      .catch((err)=>{
        console.log(err);
      });*/

/* Reducer */
export default function board(list=initBoard,hotList=initHot,result,action){
  switch(action.type){
    case GET_BOARD: //글 리스트 조회
      return {list,hotList};

    case INSERT_BOARD: //글 작성
      list.push({id:0,title:'Title',date:'2022-1-1',heartNum:0,commentNum:0,content:'Content',Writer:'gus',comments:[]});
      return;

    case READ_BOARD: //글 조회
      
      result={};

    for(let i=0;i<list.length;i++){

        if(list[i].id === action.idx){
          result = {
            /*title:list[i].title,
            writer:list[i].writer,
            content:list[i].content,
            heartNum: list[i].heartNum,
           commentNum:list[i].commentNum,
           comments:list[i].comments*/
           title:'list[i].title',
            writer:'list[i].writer',
            content:'list[i].content',
            heartNum: 0,
           commentNum:0,
           comments:[]
          }

        }
      }
    return result;
    
    case INIT:
      hotList={};
      board.splice(0,board.length);
      
      return;
      
  }
}