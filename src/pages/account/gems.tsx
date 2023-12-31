import { useState, useEffect, useRef, FC } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import axios from "axios";
import { motion } from "framer-motion";
import LeftCircle from "@/vectors/quiz/left";
import RightCircle from "@/vectors/quiz/right";
import Topez from "@/vectors/gems/topez";
import Amethyst from "@/vectors/gems/amethyst";
import Ruby from "@/vectors/gems/ruby";
import Pearl from "@/vectors/gems/pearl";
import Yellow_sapphire from "@/vectors/gems/yellow_sapphire";
import Zircron from "@/vectors/gems/zircon";
import Sapphire from "@/vectors/gems/sapphire";
import Tourmaline from "@/vectors/gems/tourmaline";
import GemStar from "@/vectors/gems/gemStar";
import Link from "next/link";
import { ArrowDownTrayIcon, ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import CardLeft from "@/vectors/gems/cardLeft";
import CardRight from "@/vectors/gems/cardRight";
import { AxiosResponse } from "axios";
import { toPng } from "html-to-image";
import { saveAs } from "file-saver";

export default function GemsPage() {
  interface ComponentMap {
    [key: string]: FC<{ className?: string | undefined }>;
    default: () => null;
  }

  const componentMap: ComponentMap = {
    แอเมทิสต์: Amethyst,
    บุษราคัม: Yellow_sapphire,
    ไข่มุก: Pearl,
    โทแพซ: Topez,
    ทับทิม: Ruby,
    เพทาย: Zircron,
    ไพลิน: Sapphire,
    ทัวร์มาลีน: Tourmaline,
    default: () => null,
  };

  const [gems, setGems] = useState("");
  const [gem_description, setGemDescription] = useState("");
  const [keys,setKeys] = useState(0);
  const router = useRouter();
  const [svgComponent, setSvgComponent] = useState<React.ReactNode | null>(
    null
  );
  const elementRef = useRef(null);
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth"); // The user is not authenticated, handle it here.
    },
  });

  let downloadData = JSON.stringify({
    "Content-Type": "image/png",
    url: "http://localhost:3000/account/gems",
    environmentKeys: process.env.ENVIRONMENT_KEY,
  });

  let downloadConfig = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://openhouse2024-backend.vercel.app/api/user/screenshot`,
    headers: {
      "Content-Type": "application/json",
    },
    data: downloadData,
  };

  const handleDownload = async () => {
    const response = await fetch("http://localhost:3000/account/gems", {
      method: "POST",
      body: JSON.stringify({
        "Content-Type": "image/png",
        url: "http://localhost:3000/account/gems",
        environmentKeys: process.env.ENVIRONMENT_KEY,
      }),
    });
    console.log(response);
    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "screenshot.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  let userData = JSON.stringify({
    email: session?.user?.email,
    environmentKeys: process.env.ENVIRONMENT_KEY,
  });

  let hasAccountConfig = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://openhouse2024-backend.vercel.app/api/user/has-account`,
    headers: {
      "Content-Type": "application/json",
    },
    data: userData,
  };

  async function hasAccountRequest() {
    if (status === "authenticated") {
      try {
        const response = await axios.request(hasAccountConfig);
        if (response.data === false) {
          router.push("/account/form");
        } else {
          userRequest();
        }
      } catch (error) {}
    }
  }

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://openhouse2024-backend.vercel.app/api/user/get",
    headers: {
      "Content-Type": "application/json",
    },
    data: userData,
  };

  async function userRequest() {
    try {
      const response = await axios.request(config);
      setGems(response.data.gems);
      console.log(response.data.gems);
      console.log(response.data.gem_desc);
      setGemDescription(response.data.gem_desc);
    } catch (error) {}
  }

  const downloadImage = () => {
    saveAs(`/assets/gems/${gems}.png`, `${gems}.png`); // Put your image URL here.
  };

  useEffect(() => {
    const Component = componentMap[gems] || componentMap.default;
    setSvgComponent(
      Component ? (
        <Component 
         />
      ) : null
    );
  }, [gems]);


  useEffect(() => {
    hasAccountRequest();
  }, [status]);
  return (
    <div className=" w-screen min-h-screen bg-radial-2  ">
      <div className=" flex items-center md:pl-28 md:pt-28 pl-8 pt-24 gap-2 md:text-xl text-base w-fit ">
        <Link href="/account" className=" flex items-center gap-1">
          <ArrowLeftCircleIcon className=" md:w-8 w-6 text-white" />
          <span className=" text-white">ย้อนกลับ</span>
        </Link>
      </div>
      <div className="relative flex justify-center md:pb-5 max-md:items-center mt-2">
        <div className=" block">
          <div
            className=" block lg:w-[390px] lg:h-[690px] md:w-[336px] md:h-[650px] w-[277px] h-[530px] relative z-[90] bg-gradient-to-b from-[#5018AD] to-[#2D0C62] rounded-xl"
            ref={elementRef}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              className="  flex justify-center h-full "
            >
              <div className=" lg:w-[351px] md:w-[304px] w-[250px]  border broder-white my-4 py-4 flex flex-col">
                <div className=" flex justify-center py-2 my-auto ">
                  <div className=" px-1 py-1 bg-[#E9B5ED] rounded-full w-fit relative z-[99] mt-5 ">
                    <div className="text-center text-white lg:text-4xl md:text-3xl text-2xl font-semibold px-8 py-2 rounded-full bg-[#350E67] w-fit relative z-[99]">
                      {gems}
                    </div>
                  </div>
                </div>
                <div className=" text-white md:text-[13.5px] leading-snug text-[9.5px]  font-normal text-center  my-auto whitespace-pre-line relative z-[99]">
                  {gem_description}
                </div>
                <div className="flex-1 items-end flex justify-center">
                  <div className=" block" key={keys}>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.1,
                      }}
                      className=" relative flex justify-center"
                    >
                      {svgComponent}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                          duration: 0.2,
                          delay: 0.1,
                        }}
                        className=" absolute right-0 top-1/2 -translate-y-1/2 md:translate-x-1/3 z-0 "
                      >
                        <GemStar className=" md:w-[120%] md:h-[120%]" />
                      </motion.div>
                    </motion.div>
                    <div className=" text-center text-white text-xs my-2 align-middle  ">
                      @TriamUdomOpenHouse2024
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className=" absolute left-0 top-2/3 -translate-y-2/3">
              <CardLeft className=" lg:w-auto md:w-[80%] md:h-[80%] sm:w-[60%] sm:h-[60%] " />
            </div>
            <div className=" absolute right-0 top-0 z-0 flex justify-end">
              <CardRight className=" rounded-tr-xl lg:w-auto md:w-[80%] md:h-[80%] sm:w-[60%] sm:h-[60%]" />
            </div>
          </div>
          <div className=" flex justify-around mt-5 text-center md:text-base text-sm relative z-[99] pb-5  ">
            <Link href="/account/quiz">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className=" md:px-6 px-4 py-2 bg-white text-[#DF77D6] rounded-full "
              >
                ทำแบบทดสอบใหม่
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=" flex items-center md:px-6 px-4 py-2 rounded-full bg-[#DF77D6] text-white "
              onClick={downloadImage}
            >
              <ArrowDownTrayIcon className="w-5" /> Download
            </motion.button>
          </div>

          <LeftCircle className=" absolute left-0 bottom-0 z-0 lg:w-auto lg:h-auto md:w-[343px] md:h-[400px] w-[221px] h-[252px] max-md:hidden   " />
          <RightCircle className=" absolute right-0 top-0 z-0  lg:w-auto lg:h-auto md:w-[345px] md:h-[395px] w-[221px] h-[252px] max-md:-mr-14 max-md:hidden" />
        </div>
      </div>
    </div>
  );
}
