import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

/*이미지*/
import aquaImage from '../../../image/modelIcon1.png';
import garnetImage from '../../../image/modelIcon2.png';
import amethystImage from '../../../image/modelIcon3.png';

export default function CreateAccountPage(props) {
  // const [menuVisibility, setMenuVisibility] = useState(false)
  // useEffect(()=>{
  //   setMenuVisibility(false)
  //   // props.menuVisibility=menuVisibility;
  // },[])

  return (
    <Main>
      <AppBar>
        <BackBtn to="/">◀ 이전</BackBtn>
        <AppBarTitle>계좌 생성</AppBarTitle>
      </AppBar>
      <Padding>
        <Title>계좌 이름</Title>
        <AccountNameInput placeholder="계좌 이름은 중복 상관 없이 작성 가능" />
        <Title>계좌 모델 선택</Title>
        <Swiper
          watchSlidesProgress
          slidesPerView={1}
          spaceBetween={8}
          centeredSlides="true"
          onSlideChange={(e) => {
            //setAccountNumber(e.activeIndex);
          }}
        >
          <SwiperSlide>
            <ModelContainer>
              <ModelIntro>
                <img src={aquaImage} width={70}/>
                <ModelTitle>
                  <ModelDes>안정지향 투자 모델</ModelDes>
                  <ModelType>아쿠아마린</ModelType>
                </ModelTitle>
              </ModelIntro>
            </ModelContainer>
          </SwiperSlide>
          <SwiperSlide>
            <ModelContainer>
              <ModelIntro>
                <img src={garnetImage} width={70}/>
                <ModelTitle>
                  <ModelDes>적극적인 투자 모델</ModelDes>
                  <ModelType>가넷</ModelType>
                </ModelTitle>
              </ModelIntro>
            </ModelContainer>
          </SwiperSlide>
          <SwiperSlide>
            <ModelContainer>
              <ModelIntro>
                <img src={amethystImage} width={70}/>
                <ModelTitle>
                  <ModelDes>공격적인 투자 모델</ModelDes>
                  <ModelType>자수정</ModelType>
                </ModelTitle>
              </ModelIntro>
            </ModelContainer>
          </SwiperSlide>
        </Swiper>
      </Padding>

      <Padding>
        <CreateBtn>계좌 생성</CreateBtn>
      </Padding>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  color: white;
`;

const AppBar = styled.span`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 19px;
  margin-bottom: 19px;
`;

const AppBarTitle = styled.span`
  text-align: center;
  font-size: 22px;
`;

const BackBtn = styled(Link)`
  position: fixed;
  top: 18px;
  left: 14px;
  color: white;
  font-size: 18px;
  text-decoration: none;
`;

const AccountNameInput = styled.input`
  width: 100%;
  height: 40px;
  font-family: Spoqa Han Sans Neo Light;
  font-size: 15px;
  color: white;
  background: #000000;
  border: 1px solid #707070;
  border-radius: 15px;
  align-self: stretch;
  padding: 11px 9px 11px 9px;
  margin-bottom: 28px;
  outline: none;
`;

const Title = styled.div`
  font-family: Spoqa Han Sans Neo Medium;
  font-size: 20px;
  margin-top: 8px;
  margin-bottom: 21px;
`;

const Padding = styled.div`
  padding-left: 24px;
  padding-right: 24px;
`;

const CreateBtn = styled.button`
  width: 100%;
  height: 63px;
  border-radius: 15px;
  font-family: Spoqa Han Sans Neo Bold;
  font-size: 25px;
  font-weight: bold;
  color: white;
  background: #b8a88e;
  margin-bottom: 20px;
`;

const ModelContainer = styled.div`
  height: 50vh;
  width: 90%;
  padding: 34px 10vw 0 6vw;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #707070;
  border-radius 20px;
  background: black;
  align-self: center;
  color: white;
`

const ModelIntro = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
`

const ModelTitle = styled.span`
  margin-left: 5px;
`

const ModelDes = styled.span`
  font-family: Spoqa Han Sans Neo Bold;
  font-size: 15px;
`

const ModelType = styled.div`
  font-family: Spoqa Han Sans Neo Bold;
  font-size: 36px;
  font-weight: bold;
  margin-top: 3px;
`