import { createGlobalStyle } from 'styled-components';
import SpoqaHanSansNeo from '../fonts/spoqa/SpoqaHanSansNeo-Regular.woff2';
import SpoqaHanSansNeoThin from '../fonts/spoqa/SpoqaHanSansNeo-Thin.woff2';
const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Spoqa Han Sans Neo";
        src: url(${SpoqaHanSansNeo});
    }

    @font-face {
      font-family: "Spoca Han Sans Neo";
      font-weight: 200;
      src: url(${SpoqaHanSansNeoThin});
    }

    * {
        box-sizing: border-box;
    }

    p {
        font-size: 15px;
        color: white;
    }

    html {
        width: 100%;
        height: 100%;
    }

    body {
        font-family: 'Spoqa Han Sans Neo', '궁서';
        width: 100%;
        height: 100%;
        margin: 0px;
    }

    #root {
        width:100%;
        height: 100%;
    }

	.swiper-pagination-bullet-custom {
		background-color: #616060;
		width: 40px;
		height: 2.5px;
		opacity: 1;
		border-radius:0px;
	}
	.swiper-pagination-bullet {
		background-color: #616060;
	}
	.swiper-pagination-bullet-active {
		background-color: white;
	}
`;

export default GlobalStyle;
