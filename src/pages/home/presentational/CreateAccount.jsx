import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function CreateAccount(props) {
  return(
    <MyAccountStyle>
      <IntroColumn>
        <TempImg/>
        <IntroMsg>환영합니다 {props.name}님!<br/>하단의 버튼을 눌러 계좌를 생성해주세요!</IntroMsg>
      </IntroColumn>
      <CreateBtn to="/createAccount">계좌 생성하기</CreateBtn>
   </MyAccountStyle>
  )
}

const MyAccountStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #b8a88e;
  border-radius: 10px;
  padding: 1vh 1vh 2vh 1vh;
  background-color: #000000;
`;

const IntroColumn = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
`
const IntroMsg = styled.div`
  text-align: center;
  font-weight: 100;
  font-family: Spoqa Han Sans Neo Thin;
  font-size: 20px;
`

const TempImg = styled.div`
  width: 150px;
  height: 150px;
  margin: 30px;
  background-color: #ffffff;
`

const CreateBtn = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 63px;
  border-radius: 15px;
  margin-bottom: 1vh;
  color: black;
  font-family: Spoqa Han Sans Neo Bold;
  font-weight: 600;
  font-size: 25px;
  text-decoration: none;
  background-color: #b8a88e;
`