import * as React from "react";
import { cx } from "utils";

type LogoProps = {
  className?: string;
};

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg
      className={cx(className)}
      viewBox="0 0 137 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M77.1542 11.3492L75.0463 26.0275C75.0463 26.0275 75.0105 26.0275 75.0046 26.0275L73.1586 11.3492H67.9066L66.0547 26.0275C66.0547 26.0275 66.019 26.0275 66.013 26.0275L63.9051 11.3492H60.7015L63.3156 28.3438H68.5557L70.4909 13.6954C70.4909 13.6954 70.5267 13.6954 70.5326 13.6954L72.4441 28.3498H77.6901L80.3638 11.3611H77.1661C77.1661 11.3611 77.1542 11.3135 77.1542 11.3492Z"
        fill="currentColor"
      />
      <path
        d="M135.963 12.1413C135.576 11.7121 135.097 11.3749 134.562 11.1545C134.027 10.934 133.45 10.8358 132.873 10.867C132.096 10.8339 131.326 11.0274 130.657 11.4238C129.987 11.8202 129.448 12.4026 129.103 13.1V13.1C128.887 12.4868 128.503 11.9463 127.996 11.5399C127.377 11.0721 126.615 10.8343 125.84 10.867C125.092 10.8487 124.355 11.0562 123.726 11.4624C123.202 11.8286 122.789 12.3338 122.535 12.9213V11.3493H119.415V28.338H122.535V16.7264C122.502 15.9854 122.711 15.2536 123.131 14.6422C123.316 14.3949 123.56 14.1975 123.841 14.0676C124.122 13.9377 124.43 13.8794 124.739 13.8979C124.997 13.8861 125.255 13.9337 125.493 14.0369C125.73 14.1401 125.941 14.2962 126.108 14.4934C126.476 14.9531 126.664 15.5308 126.638 16.119V28.3261H129.764V16.9229C129.695 16.1056 129.905 15.2889 130.36 14.6065C130.547 14.3763 130.784 14.1925 131.054 14.0696C131.323 13.9466 131.618 13.8879 131.914 13.8979C132.187 13.8675 132.463 13.9061 132.717 14.0101C132.97 14.1142 133.194 14.2803 133.367 14.4934C133.707 15.0074 133.876 15.6161 133.849 16.2321V28.3082H136.993V15.3985C137.055 14.224 136.689 13.067 135.963 12.1413V12.1413Z"
        fill="currentColor"
      />
      <path
        d="M99.3239 26.5089L97.3469 28.718H97.3171L93.8277 25.699L89.6594 28.1345C88.9781 28.5307 88.2027 28.7364 87.4145 28.7299C86.233 28.721 85.0981 28.2682 84.2347 27.4616C83.792 27.0466 83.4414 26.5434 83.2055 25.9843C82.9695 25.4253 82.8536 24.823 82.8652 24.2163C82.8629 23.4202 83.0723 22.6378 83.4721 21.9493C83.8718 21.2608 84.4474 20.6909 85.1398 20.2981L93.5419 15.4808V14.409H83.6988V11.4316H96.543V24.1508L99.2941 26.5327L99.3239 26.5089ZM88.1291 25.5204L93.5419 22.3763V18.9822H93.5061L86.6106 22.942C86.3751 23.0693 86.179 23.2587 86.0436 23.4897C85.9081 23.7207 85.8386 23.9843 85.8425 24.252C85.8516 24.6487 86.0132 25.0267 86.2938 25.3073C86.5744 25.5878 86.9523 25.7495 87.349 25.7586C87.6261 25.753 87.8962 25.6706 88.1291 25.5204V25.5204Z"
        fill="currentColor"
      />
      <path
        d="M114.377 12.5051C113.863 11.9726 113.245 11.551 112.562 11.2662C111.879 10.9815 111.145 10.8398 110.405 10.8497C109.543 10.826 108.688 11.0106 107.913 11.388C107.137 11.7653 106.464 12.3242 105.951 13.0172L103.962 11.1951H103.932L101.973 13.3804L104.796 15.9409V25.2897H101.991V28.2254H112.114V25.2897H107.833V16.6317C107.819 15.9573 108.055 15.3017 108.494 14.7899C108.934 14.2781 109.546 13.9459 110.215 13.8568C110.581 13.822 110.952 13.8641 111.301 13.9805C111.651 14.0969 111.973 14.2849 112.245 14.5326C112.518 14.7803 112.737 15.0822 112.886 15.419C113.036 15.7559 113.114 16.1202 113.114 16.4888V17.4653H116.05V16.4888C116.059 15.7455 115.916 15.0083 115.628 14.3229C115.34 13.6376 114.914 13.0188 114.377 12.5051V12.5051Z"
        fill="currentColor"
      />
      <path
        d="M57.5519 21.2809C57.3513 20.8196 57.0454 20.4117 56.6587 20.0899C56.2563 19.7078 55.7773 19.4155 55.2534 19.2325C54.7336 18.9832 54.1913 18.7838 53.6338 18.637C53.074 18.4881 52.4428 18.3274 51.7997 18.2023C50.7832 18.0418 49.8009 17.7117 48.8938 17.2257C48.6263 17.0832 48.4017 16.8717 48.2436 16.613C48.0855 16.3543 47.9995 16.0581 47.9947 15.7549C47.9745 15.4489 48.0387 15.1432 48.1805 14.8712C48.3223 14.5992 48.5361 14.3714 48.7986 14.2127C49.5791 13.725 50.5197 13.5626 51.4186 13.7601C52.28 13.9746 53.0716 14.4073 53.7171 15.0166C53.8541 15.1297 55.2117 16.3861 55.1879 16.4159L57.147 14.1948C57.147 14.1948 56.2062 13.2421 55.7596 12.8491C54.7102 11.8701 53.4093 11.2021 52.0022 10.9197C50.5339 10.6919 49.0311 10.9206 47.697 11.5748C47.3438 11.7559 47.0105 11.9735 46.7025 12.2238C46.1553 12.6555 45.7157 13.2082 45.4181 13.8384C45.1205 14.4687 44.9732 15.1593 44.9876 15.8562C44.9876 17.4044 45.4759 18.506 46.4762 19.2265C47.6823 20.0454 49.0481 20.5994 50.4837 20.8521C51.6151 21.0535 52.7199 21.3832 53.7767 21.8346C54.0565 21.9244 54.2998 22.1022 54.4705 22.3415C54.6411 22.5807 54.7298 22.8687 54.7235 23.1625C54.7367 23.5193 54.6542 23.8731 54.4845 24.1872C54.3149 24.5013 54.0643 24.7643 53.7588 24.9489C53.0108 25.3733 52.1655 25.5963 51.3055 25.5963C50.4455 25.5963 49.6002 25.3733 48.8522 24.9489C48.2452 24.5528 47.6769 24.1003 47.1551 23.5972C46.7323 23.24 46.3333 22.8529 45.9225 22.4718L44.017 24.7643C44.017 24.7643 44.9459 25.6337 45.0293 25.7052C46.24 26.9327 47.7674 27.8004 49.4417 28.2121C50.0606 28.3409 50.6912 28.4048 51.3233 28.4026C53.0017 28.4598 54.6498 27.9455 55.9978 26.9438C56.6264 26.4733 57.1319 25.8577 57.471 25.1494C57.8101 24.4412 57.9727 23.6614 57.9449 22.8767C57.9367 22.3218 57.8023 21.7761 57.5519 21.2809V21.2809Z"
        fill="currentColor"
      />
      <path
        d="M0 30.4698L8.02094 34.9716L16.0419 30.4698V21.4842L8.02094 16.9766L0 21.4842V30.4698Z"
        fill="currentColor"
      />
      <path
        d="M26.5161 0.0292969L22.2763 2.41116L22.2704 2.44689V7.20467L26.5161 9.58653L26.5518 9.6044L30.7915 7.22849V2.42903L26.5161 0.0292969Z"
        fill="currentColor"
      />
      <path
        d="M34.4001 21.4842L26.3792 16.9766L18.3582 21.4842V30.4698L26.3792 34.9716L34.4001 30.4698V21.4842Z"
        fill="currentColor"
      />
      <path
        d="M17.137 1.28516L9.12793 5.78688V14.7725L17.1489 19.2742L25.1698 14.7725V11.1937L21.2635 9.0024L20.2096 8.41289V7.20409V3.11919L17.137 1.28516Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Logo;
