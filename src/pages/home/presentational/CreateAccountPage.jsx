import styled from 'styled-components';

export default function CreateAccountPage(props) {
  return (
    <div>
      <Title>계좌 이름</Title>
      <Title>계좌 모델 선택</Title>
    </div> 
  )
}

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`