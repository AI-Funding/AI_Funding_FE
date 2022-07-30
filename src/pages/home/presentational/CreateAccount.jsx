import styled from 'styled-components';

export default function CreateAccount(props) {
  return(
    <MyAccountStyle>
      <IntroColumn>
        <TempImg/>
        <IntroMsg>환영합니다 강연구님!<br/>하단의 버튼을 눌러 계좌를 생성해주세요!</IntroMsg>
      </IntroColumn>
      <CreateBtn>계좌 생성하기</CreateBtn>
   </MyAccountStyle>
  )
}

const MyAccountStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 60vh;
  border: 1px solid #b8a88e;
  border-radius: 10px;
  padding: 1vh 1vh 2vh 1vh;
  background-color: #000000;
`;

const IntroColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
`
const IntroMsg = styled.div`
  text-align: center;
  font-family: Spoqa Han Sans Neo Thin;
  font-weight: 200;
  font-size: 20px;
`

const TempImg = styled.div`
  width: 150px;
  height: 150px;
  margin: 30px;
  background-color: #ffffff;
`

const CreateBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 60px;
  border-radius: 10px;
  margin-bottom: 1vh;
  color: black;
  font-size: 25px;
  font-weight: 800;
  background-color: #b8a88e;
`