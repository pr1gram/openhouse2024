import React, { FC } from "react";

const Star: FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg
      width="122"
      height="122"
      className={`${className}`}
      viewBox="0 0 122 122"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1629_4127)">
        <path
          d="M47.2244 16.5446C47.3117 15.6296 48.4833 15.3071 49.0266 16.0485L64.3063 36.9023C64.6203 37.3308 65.2145 37.439 65.6594 37.1487L87.3107 23.0219C88.0805 22.5196 89.0631 23.2345 88.8222 24.1215L82.0448 49.0698C81.9056 49.5824 82.1914 50.1145 82.6958 50.2813L107.24 58.4011C108.113 58.6898 108.166 59.9038 107.323 60.2684L83.5917 70.5247C83.104 70.7354 82.8663 71.2906 83.0503 71.789L92.0051 96.041C92.3235 96.9032 91.4078 97.7022 90.5967 97.2699L67.782 85.1109C67.3132 84.8611 66.7309 85.0214 66.456 85.476L53.0782 107.598C52.6026 108.384 51.4071 108.167 51.2393 107.263L46.5209 81.8448C46.4239 81.3225 45.9355 80.9672 45.4087 81.0357L19.7721 84.3694C18.8607 84.4879 18.2855 83.4174 18.8874 82.7228L35.8183 63.1858C36.1662 62.7844 36.1395 62.181 35.7575 61.8118L17.1669 43.8468C16.506 43.2081 16.9843 42.091 17.9027 42.1286L43.7335 43.1845C44.2643 43.2062 44.7194 42.8091 44.7699 42.2803L47.2244 16.5446Z"
          fill="#FFDD74"
        />
      </g>
      <g filter="url(#filter1_d_1629_4127)">
        <mask
          id="path-2-outside-1_1629_4127"
          maskUnits="userSpaceOnUse"
          x="39"
          y="28.998"
          width="44"
          height="50"
          fill="black"
        >
          <rect fill="white" x="39" y="28.998" width="44" height="50" />
          <path d="M79.9786 50.198C79.9786 52.118 79.7226 53.878 79.2106 55.478C78.7306 57.078 78.0586 58.534 77.1946 59.846C76.3306 61.126 75.3066 62.262 74.1226 63.254C72.9706 64.214 71.7226 65.03 70.3786 65.702C71.0506 67.046 71.7866 68.15 72.5866 69.014C73.3866 69.91 74.3946 70.358 75.6106 70.358C76.1226 70.358 76.6666 70.262 77.2426 70.07C77.8186 69.91 78.4586 69.622 79.1626 69.206V74.39C77.3066 75.222 75.6746 75.638 74.2666 75.638C73.1146 75.638 72.1066 75.398 71.2426 74.918C70.4106 74.438 69.6746 73.814 69.0346 73.046C68.4266 72.278 67.8826 71.382 67.4026 70.358C66.9546 69.366 66.5226 68.342 66.1066 67.286C65.2426 67.51 64.3786 67.67 63.5146 67.766C62.6826 67.862 61.8506 67.91 61.0186 67.91C59.5466 67.91 58.0586 67.75 56.5546 67.43C55.0506 67.11 53.5946 66.63 52.1866 65.99C50.7786 65.318 49.4506 64.502 48.2026 63.542C46.9866 62.55 45.9146 61.398 44.9866 60.086C44.0586 58.774 43.3226 57.302 42.7786 55.67C42.2666 54.006 42.0106 52.182 42.0106 50.198C42.0106 48.214 42.2666 46.406 42.7786 44.774C43.3226 43.11 44.0586 41.622 44.9866 40.31C45.9146 38.998 46.9866 37.862 48.2026 36.902C49.4506 35.91 50.7786 35.094 52.1866 34.454C53.5946 33.782 55.0506 33.286 56.5546 32.966C58.0586 32.646 59.5466 32.486 61.0186 32.486C63.1946 32.486 65.4026 32.854 67.6426 33.59C69.9146 34.326 71.9626 35.43 73.7866 36.902C75.6106 38.342 77.0986 40.182 78.2506 42.422C79.4026 44.63 79.9786 47.222 79.9786 50.198ZM73.9786 50.198C73.9786 48.15 73.5786 46.358 72.7786 44.822C72.0106 43.286 71.0026 42.022 69.7546 41.03C68.5066 40.006 67.1146 39.254 65.5786 38.774C64.0426 38.262 62.5226 38.006 61.0186 38.006C59.5146 38.006 57.9946 38.262 56.4586 38.774C54.9226 39.254 53.5306 40.006 52.2826 41.03C51.0346 42.022 50.0106 43.286 49.2106 44.822C48.4106 46.358 48.0106 48.15 48.0106 50.198C48.0106 52.246 48.4106 54.038 49.2106 55.574C50.0106 57.078 51.0346 58.342 52.2826 59.366C53.5306 60.358 54.9226 61.11 56.4586 61.622C57.9946 62.134 59.5146 62.39 61.0186 62.39C62.5226 62.39 64.0426 62.134 65.5786 61.622C67.1146 61.11 68.5066 60.358 69.7546 59.366C71.0026 58.342 72.0106 57.078 72.7786 55.574C73.5786 54.038 73.9786 52.246 73.9786 50.198ZM57.5146 50.438C57.5146 49.446 57.8186 48.646 58.4266 48.038C59.0346 47.43 59.8346 47.126 60.8266 47.126C61.8186 47.126 62.6026 47.43 63.1786 48.038C63.7866 48.646 64.0906 49.446 64.0906 50.438C64.0906 51.43 63.7866 52.23 63.1786 52.838C62.6026 53.446 61.8186 53.75 60.8266 53.75C59.8346 53.75 59.0346 53.446 58.4266 52.838C57.8186 52.23 57.5146 51.43 57.5146 50.438Z" />
        </mask>
        <path
          d="M79.9786 50.198C79.9786 52.118 79.7226 53.878 79.2106 55.478C78.7306 57.078 78.0586 58.534 77.1946 59.846C76.3306 61.126 75.3066 62.262 74.1226 63.254C72.9706 64.214 71.7226 65.03 70.3786 65.702C71.0506 67.046 71.7866 68.15 72.5866 69.014C73.3866 69.91 74.3946 70.358 75.6106 70.358C76.1226 70.358 76.6666 70.262 77.2426 70.07C77.8186 69.91 78.4586 69.622 79.1626 69.206V74.39C77.3066 75.222 75.6746 75.638 74.2666 75.638C73.1146 75.638 72.1066 75.398 71.2426 74.918C70.4106 74.438 69.6746 73.814 69.0346 73.046C68.4266 72.278 67.8826 71.382 67.4026 70.358C66.9546 69.366 66.5226 68.342 66.1066 67.286C65.2426 67.51 64.3786 67.67 63.5146 67.766C62.6826 67.862 61.8506 67.91 61.0186 67.91C59.5466 67.91 58.0586 67.75 56.5546 67.43C55.0506 67.11 53.5946 66.63 52.1866 65.99C50.7786 65.318 49.4506 64.502 48.2026 63.542C46.9866 62.55 45.9146 61.398 44.9866 60.086C44.0586 58.774 43.3226 57.302 42.7786 55.67C42.2666 54.006 42.0106 52.182 42.0106 50.198C42.0106 48.214 42.2666 46.406 42.7786 44.774C43.3226 43.11 44.0586 41.622 44.9866 40.31C45.9146 38.998 46.9866 37.862 48.2026 36.902C49.4506 35.91 50.7786 35.094 52.1866 34.454C53.5946 33.782 55.0506 33.286 56.5546 32.966C58.0586 32.646 59.5466 32.486 61.0186 32.486C63.1946 32.486 65.4026 32.854 67.6426 33.59C69.9146 34.326 71.9626 35.43 73.7866 36.902C75.6106 38.342 77.0986 40.182 78.2506 42.422C79.4026 44.63 79.9786 47.222 79.9786 50.198ZM73.9786 50.198C73.9786 48.15 73.5786 46.358 72.7786 44.822C72.0106 43.286 71.0026 42.022 69.7546 41.03C68.5066 40.006 67.1146 39.254 65.5786 38.774C64.0426 38.262 62.5226 38.006 61.0186 38.006C59.5146 38.006 57.9946 38.262 56.4586 38.774C54.9226 39.254 53.5306 40.006 52.2826 41.03C51.0346 42.022 50.0106 43.286 49.2106 44.822C48.4106 46.358 48.0106 48.15 48.0106 50.198C48.0106 52.246 48.4106 54.038 49.2106 55.574C50.0106 57.078 51.0346 58.342 52.2826 59.366C53.5306 60.358 54.9226 61.11 56.4586 61.622C57.9946 62.134 59.5146 62.39 61.0186 62.39C62.5226 62.39 64.0426 62.134 65.5786 61.622C67.1146 61.11 68.5066 60.358 69.7546 59.366C71.0026 58.342 72.0106 57.078 72.7786 55.574C73.5786 54.038 73.9786 52.246 73.9786 50.198ZM57.5146 50.438C57.5146 49.446 57.8186 48.646 58.4266 48.038C59.0346 47.43 59.8346 47.126 60.8266 47.126C61.8186 47.126 62.6026 47.43 63.1786 48.038C63.7866 48.646 64.0906 49.446 64.0906 50.438C64.0906 51.43 63.7866 52.23 63.1786 52.838C62.6026 53.446 61.8186 53.75 60.8266 53.75C59.8346 53.75 59.0346 53.446 58.4266 52.838C57.8186 52.23 57.5146 51.43 57.5146 50.438Z"
          fill="url(#paint0_linear_1629_4127)"
        />
        <path
          d="M79.2106 55.478L76.3533 54.5637C76.3477 54.5811 76.3423 54.5985 76.3371 54.616L79.2106 55.478ZM77.1946 59.846L79.6811 61.5245C79.6875 61.515 79.6938 61.5055 79.7001 61.496L77.1946 59.846ZM74.1226 63.254L76.0431 65.5587L76.0492 65.5536L74.1226 63.254ZM70.3786 65.702L69.0369 63.0188C67.555 63.7597 66.9543 65.5618 67.6953 67.0437L70.3786 65.702ZM72.5866 69.014L74.8244 67.016C74.8123 67.0025 74.8001 66.9891 74.7878 66.9758L72.5866 69.014ZM77.2426 70.07L76.4396 67.1795C76.3907 67.1931 76.3421 67.2079 76.2939 67.224L77.2426 70.07ZM79.1626 69.206H82.1626C82.1626 68.1288 81.585 67.1343 80.6494 66.6004C79.7138 66.0665 78.5638 66.0753 77.6364 66.6233L79.1626 69.206ZM79.1626 74.39L80.3897 77.1276C81.4684 76.644 82.1626 75.5721 82.1626 74.39H79.1626ZM71.2426 74.918L69.7434 77.5166C69.7574 77.5247 69.7715 77.5327 69.7856 77.5405L71.2426 74.918ZM69.0346 73.046L66.6824 74.9082C66.698 74.9278 66.7138 74.9473 66.7299 74.9666L69.0346 73.046ZM67.4026 70.358L64.6685 71.5928C64.6743 71.6057 64.6802 71.6185 64.6862 71.6314L67.4026 70.358ZM66.1066 67.286L68.8978 66.1865C68.3421 64.7759 66.8213 64.0016 65.3537 64.3821L66.1066 67.286ZM63.5146 67.766L63.1833 64.7844L63.1707 64.7858L63.5146 67.766ZM56.5546 67.43L57.1789 64.4957L56.5546 67.43ZM52.1866 65.99L50.8944 68.6975C50.9112 68.7055 50.9282 68.7134 50.9452 68.7211L52.1866 65.99ZM48.2026 63.542L46.3062 65.8666C46.3283 65.8847 46.3508 65.9025 46.3734 65.9199L48.2026 63.542ZM44.9866 60.086L47.4358 58.3537H47.4358L44.9866 60.086ZM42.7786 55.67L39.9112 56.5523C39.9181 56.5745 39.9252 56.5967 39.9325 56.6187L42.7786 55.67ZM42.7786 44.774L39.9271 43.8418C39.9234 43.8532 39.9197 43.8646 39.9161 43.876L42.7786 44.774ZM44.9866 40.31L42.5373 38.5776L42.5373 38.5777L44.9866 40.31ZM48.2026 36.902L50.0615 39.2567L50.0693 39.2505L48.2026 36.902ZM52.1866 34.454L53.428 37.1851C53.445 37.1774 53.4619 37.1695 53.4788 37.1615L52.1866 34.454ZM56.5546 32.966L57.1789 35.9004L56.5546 32.966ZM67.6426 33.59L66.7061 36.4402L66.718 36.444L67.6426 33.59ZM73.7866 36.902L71.9025 39.2366C71.9108 39.2434 71.9192 39.2501 71.9276 39.2567L73.7866 36.902ZM78.2506 42.422L75.5827 43.7941C75.5854 43.7993 75.5881 43.8045 75.5908 43.8097L78.2506 42.422ZM72.7786 44.822L70.0953 46.1637C70.1027 46.1785 70.1102 46.1932 70.1178 46.2078L72.7786 44.822ZM69.7546 41.03L67.8516 43.3493C67.8636 43.3591 67.8757 43.3689 67.8878 43.3785L69.7546 41.03ZM65.5786 38.774L64.6299 41.6201C64.6478 41.6261 64.6657 41.6319 64.6837 41.6375L65.5786 38.774ZM56.4586 38.774L57.3534 41.6375C57.3714 41.6319 57.3894 41.6261 57.4072 41.6201L56.4586 38.774ZM52.2826 41.03L54.1493 43.3785C54.1614 43.3689 54.1735 43.3591 54.1855 43.3493L52.2826 41.03ZM49.2106 44.822L51.8713 46.2078H51.8713L49.2106 44.822ZM49.2106 55.574L46.5498 56.9598C46.5538 56.9675 46.5579 56.9752 46.5619 56.9829L49.2106 55.574ZM52.2826 59.366L50.3796 61.6853C50.3916 61.6951 50.4037 61.7049 50.4158 61.7145L52.2826 59.366ZM56.4586 61.622L57.4072 58.776L56.4586 61.622ZM69.7546 59.366L71.6213 61.7145C71.6334 61.7049 71.6455 61.6951 71.6575 61.6853L69.7546 59.366ZM72.7786 55.574L70.1178 54.1882C70.1141 54.1954 70.1104 54.2025 70.1068 54.2097L72.7786 55.574ZM63.1786 48.038L61.0007 50.1013C61.0193 50.1209 61.0381 50.1403 61.0572 50.1594L63.1786 48.038ZM63.1786 52.838L61.0572 50.7167C61.0381 50.7358 61.0193 50.7552 61.0007 50.7748L63.1786 52.838ZM58.4266 52.838L56.3052 54.9594L56.3052 54.9594L58.4266 52.838ZM76.9786 50.198C76.9786 51.8513 76.7583 53.2981 76.3533 54.5637L82.0678 56.3924C82.6868 54.458 82.9786 52.3848 82.9786 50.198H76.9786ZM76.3371 54.616C75.9355 55.9546 75.3829 57.1424 74.689 58.1961L79.7001 61.496C80.7342 59.9257 81.5256 58.2015 82.084 56.3401L76.3371 54.616ZM74.708 58.1676C74.0008 59.2154 73.1652 60.1423 72.1959 60.9545L76.0492 65.5536C77.4479 64.3818 78.6604 63.0367 79.6811 61.5245L74.708 58.1676ZM72.202 60.9494C71.2281 61.761 70.1744 62.45 69.0369 63.0188L71.7202 68.3853C73.2707 67.6101 74.713 66.6671 76.0431 65.5587L72.202 60.9494ZM67.6953 67.0437C68.461 68.5752 69.3479 69.9319 70.3853 71.0523L74.7878 66.9758C74.2253 66.3682 73.6401 65.5169 73.0618 64.3604L67.6953 67.0437ZM70.3488 71.0121C71.7259 72.5545 73.552 73.358 75.6106 73.358V67.358C75.2371 67.358 75.0472 67.2656 74.8244 67.016L70.3488 71.0121ZM75.6106 73.358C76.4985 73.358 77.3646 73.1916 78.1912 72.9161L76.2939 67.224C75.9685 67.3325 75.7466 67.358 75.6106 67.358V73.358ZM78.0455 72.9606C78.9486 72.7097 79.835 72.2933 80.6888 71.7888L77.6364 66.6233C77.0821 66.9508 76.6885 67.1104 76.4396 67.1795L78.0455 72.9606ZM76.1626 69.206V74.39H82.1626V69.206H76.1626ZM77.9354 71.6525C76.3071 72.3824 75.107 72.638 74.2666 72.638V78.638C76.2421 78.638 78.306 78.0617 80.3897 77.1276L77.9354 71.6525ZM74.2666 72.638C73.5394 72.638 73.049 72.4898 72.6995 72.2956L69.7856 77.5405C71.1641 78.3063 72.6897 78.638 74.2666 78.638V72.638ZM72.7417 72.3195C72.2285 72.0234 71.7622 71.633 71.3392 71.1255L66.7299 74.9666C67.587 75.9951 68.5926 76.8527 69.7434 77.5166L72.7417 72.3195ZM71.3867 71.1839C70.9425 70.6229 70.5154 69.9305 70.1189 69.0847L64.6862 71.6314C65.2497 72.8335 65.9106 73.9332 66.6824 74.9082L71.3867 71.1839ZM70.1367 69.1233C69.7096 68.1777 69.2966 67.1989 68.8978 66.1865L63.3153 68.3856C63.7485 69.4852 64.1995 70.5544 64.6685 71.5928L70.1367 69.1233ZM65.3537 64.3821C64.6245 64.5711 63.9013 64.7046 63.1833 64.7844L63.8459 70.7477C64.8558 70.6355 65.8606 70.449 66.8595 70.19L65.3537 64.3821ZM63.1707 64.7858C62.4521 64.8687 61.7349 64.91 61.0186 64.91V70.91C61.9662 70.91 62.913 70.8554 63.8584 70.7463L63.1707 64.7858ZM61.0186 64.91C59.7655 64.91 58.4868 64.774 57.1789 64.4957L55.9302 70.3644C57.6304 70.7261 59.3276 70.91 61.0186 70.91V64.91ZM57.1789 64.4957C55.8886 64.2212 54.6394 63.8096 53.428 63.2589L50.9452 68.7211C52.5497 69.4505 54.2126 69.9989 55.9302 70.3644L57.1789 64.4957ZM53.4788 63.2826C52.2626 62.7021 51.1143 61.997 50.0317 61.1642L46.3734 65.9199C47.7868 67.0071 49.2946 67.9339 50.8944 68.6975L53.4788 63.2826ZM50.0989 61.2175C49.0982 60.4011 48.2109 59.4495 47.4358 58.3537L42.5373 61.8184C43.6182 63.3466 44.8749 64.699 46.3062 65.8666L50.0989 61.2175ZM47.4358 58.3537C46.6894 57.2984 46.0821 56.0937 45.6246 54.7214L39.9325 56.6187C40.5631 58.5104 41.4277 60.2497 42.5373 61.8184L47.4358 58.3537ZM45.6459 54.7878C45.2331 53.4463 45.0106 51.924 45.0106 50.198H39.0106C39.0106 52.4401 39.3 54.5658 39.9112 56.5523L45.6459 54.7878ZM45.0106 50.198C45.0106 48.471 45.2334 46.9713 45.641 45.6721L39.9161 43.876C39.2997 45.8408 39.0106 47.9571 39.0106 50.198H45.0106ZM45.63 45.7063C46.0891 44.3022 46.6959 43.0885 47.4358 42.0424L42.5373 38.5777C41.4212 40.1556 40.5561 41.9178 39.9271 43.8418L45.63 45.7063ZM47.4358 42.0424C48.2041 40.9563 49.0794 40.0321 50.0615 39.2567L46.3436 34.5474C44.8938 35.692 43.625 37.0398 42.5373 38.5776L47.4358 42.0424ZM50.0693 39.2505C51.1312 38.4064 52.2501 37.7206 53.428 37.1851L50.9452 31.7229C49.3071 32.4675 47.7699 33.4137 46.3358 34.5536L50.0693 39.2505ZM53.4788 37.1615C54.677 36.5896 55.909 36.1705 57.1789 35.9004L55.9302 30.0317C54.1921 30.4015 52.5122 30.9745 50.8944 31.7466L53.4788 37.1615ZM57.1789 35.9004C58.4868 35.6221 59.7655 35.486 61.0186 35.486V29.486C59.3276 29.486 57.6304 29.67 55.9302 30.0317L57.1789 35.9004ZM61.0186 35.486C62.851 35.486 64.7431 35.7952 66.7061 36.4401L68.579 30.7399C66.062 29.9129 63.5382 29.486 61.0186 29.486V35.486ZM66.718 36.444C68.6479 37.0692 70.3694 37.9994 71.9025 39.2366L75.6706 34.5675C73.5558 32.8607 71.1813 31.5829 68.5671 30.7361L66.718 36.444ZM71.9276 39.2567C73.3873 40.4091 74.6103 41.9033 75.5827 43.7941L80.9184 41.05C79.5868 38.4608 77.8338 36.275 75.6455 34.5474L71.9276 39.2567ZM75.5908 43.8097C76.4797 45.5134 76.9786 47.6116 76.9786 50.198H82.9786C82.9786 46.8325 82.3255 43.7467 80.9103 41.0343L75.5908 43.8097ZM76.9786 50.198C76.9786 47.7554 76.4995 45.4718 75.4393 43.4362L70.1178 46.2078C70.6576 47.2443 70.9786 48.5447 70.9786 50.198H76.9786ZM75.4618 43.4804C74.5136 41.584 73.2375 39.9662 71.6213 38.6816L67.8878 43.3785C68.7676 44.0779 69.5075 44.9881 70.0953 46.1637L75.4618 43.4804ZM71.6575 38.7108C70.1125 37.4431 68.3785 36.5059 66.4734 35.9106L64.6837 41.6375C65.8507 42.0022 66.9006 42.569 67.8516 43.3493L71.6575 38.7108ZM66.5272 35.928C64.7088 35.3218 62.8688 35.006 61.0186 35.006V41.006C62.1763 41.006 63.3764 41.2023 64.6299 41.6201L66.5272 35.928ZM61.0186 35.006C59.1683 35.006 57.3284 35.3218 55.5099 35.928L57.4072 41.6201C58.6608 41.2023 59.8608 41.006 61.0186 41.006V35.006ZM55.5637 35.9106C53.6587 36.5059 51.9246 37.4431 50.3796 38.7108L54.1855 43.3493C55.1365 42.569 56.1865 42.0022 57.3534 41.6375L55.5637 35.9106ZM50.4158 38.6816C48.811 39.9572 47.5271 41.5598 46.5498 43.4362L51.8713 46.2078C52.494 45.0123 53.2581 44.0869 54.1493 43.3785L50.4158 38.6816ZM46.5498 43.4362C45.4896 45.4718 45.0106 47.7554 45.0106 50.198H51.0106C51.0106 48.5447 51.3315 47.2443 51.8713 46.2078L46.5498 43.4362ZM45.0106 50.198C45.0106 52.6407 45.4896 54.9243 46.5498 56.9598L51.8713 54.1882C51.3315 53.1518 51.0106 51.8514 51.0106 50.198H45.0106ZM46.5619 56.9829C47.5375 58.817 48.8087 60.3963 50.3796 61.6853L54.1855 57.0468C53.2605 56.2878 52.4836 55.3391 51.8592 54.1652L46.5619 56.9829ZM50.4158 61.7145C51.9427 62.9282 53.6464 63.8469 55.5099 64.4681L57.4072 58.776C56.1987 58.3732 55.1184 57.7879 54.1493 57.0176L50.4158 61.7145ZM55.5099 64.4681C57.3284 65.0743 59.1683 65.39 61.0186 65.39V59.39C59.8608 59.39 58.6608 59.1938 57.4072 58.776L55.5099 64.4681ZM61.0186 65.39C62.8688 65.39 64.7088 65.0743 66.5272 64.4681L64.6299 58.776C63.3764 59.1938 62.1763 59.39 61.0186 59.39V65.39ZM66.5272 64.4681C68.3907 63.8469 70.0944 62.9282 71.6213 61.7145L67.8878 57.0176C66.9187 57.7879 65.8384 58.3732 64.6299 58.776L66.5272 64.4681ZM71.6575 61.6853C73.2395 60.3872 74.5034 58.7929 75.4504 56.9384L70.1068 54.2097C69.5177 55.3632 68.7656 56.2969 67.8516 57.0468L71.6575 61.6853ZM75.4393 56.9598C76.4995 54.9243 76.9786 52.6407 76.9786 50.198H70.9786C70.9786 51.8514 70.6576 53.1518 70.1178 54.1882L75.4393 56.9598ZM60.5146 50.438C60.5146 50.2491 60.5431 50.1698 60.5469 50.1597C60.5492 50.1537 60.549 50.1556 60.5455 50.161C60.542 50.1663 60.5412 50.166 60.5479 50.1594L56.3052 45.9167C55.0474 47.1746 54.5146 48.7829 54.5146 50.438H60.5146ZM60.5479 50.1594C60.5546 50.1527 60.5548 50.1535 60.5495 50.157C60.5441 50.1605 60.5422 50.1607 60.5482 50.1584C60.5583 50.1546 60.6377 50.126 60.8266 50.126V44.126C59.1714 44.126 57.5631 44.6589 56.3052 45.9167L60.5479 50.1594ZM60.8266 50.126C61.017 50.126 61.084 50.155 61.074 50.1511C61.0695 50.1494 61.0552 50.1431 61.0367 50.1307C61.0182 50.1183 61.0058 50.1067 61.0007 50.1013L65.3564 45.9748C64.1098 44.6589 62.4776 44.126 60.8266 44.126V50.126ZM61.0572 50.1594C61.0639 50.166 61.0631 50.1663 61.0596 50.161C61.0561 50.1556 61.0559 50.1537 61.0582 50.1597C61.062 50.1698 61.0906 50.2491 61.0906 50.438H67.0906C67.0906 48.7829 66.5577 47.1746 65.2999 45.9167L61.0572 50.1594ZM61.0906 50.438C61.0906 50.627 61.062 50.7063 61.0582 50.7164C61.0559 50.7224 61.0561 50.7205 61.0596 50.7151C61.0631 50.7098 61.0639 50.71 61.0572 50.7167L65.2999 54.9594C66.5577 53.7015 67.0906 52.0932 67.0906 50.438H61.0906ZM61.0007 50.7748C61.0058 50.7694 61.0182 50.7578 61.0367 50.7454C61.0552 50.733 61.0695 50.7267 61.074 50.725C61.084 50.7211 61.017 50.75 60.8266 50.75V56.75C62.4776 56.75 64.1098 56.2172 65.3564 54.9013L61.0007 50.7748ZM60.8266 50.75C60.6377 50.75 60.5583 50.7215 60.5482 50.7177C60.5422 50.7154 60.5441 50.7156 60.5495 50.7191C60.5548 50.7226 60.5546 50.7234 60.5479 50.7167L56.3052 54.9594C57.5631 56.2172 59.1714 56.75 60.8266 56.75V50.75ZM60.5479 50.7167C60.5412 50.71 60.542 50.7098 60.5455 50.7151C60.549 50.7205 60.5492 50.7224 60.5469 50.7164C60.5431 50.7063 60.5146 50.627 60.5146 50.438H54.5146C54.5146 52.0932 55.0474 53.7015 56.3052 54.9594L60.5479 50.7167Z"
          fill="white"
          mask="url(#path-2-outside-1_1629_4127)"
        />
      </g>
      <ellipse cx="60.5" cy="49.498" rx="11.5" ry="10.5" fill="white" />
      <defs>
        <filter
          id="filter0_d_1629_4127"
          x="12.8594"
          y="15.6387"
          width="99.0664"
          height="100.443"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1629_4127"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1629_4127"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_1629_4127"
          x="38.0098"
          y="32.4863"
          width="45.9688"
          height="51.1523"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1629_4127"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1629_4127"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1629_4127"
          x1="61"
          y1="27.998"
          x2="61"
          y2="80.998"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#4B69E9" />
          <stop offset="1" stop-color="#21007A" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export default Star;