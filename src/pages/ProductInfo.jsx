import { useState } from "react";
import { useAuth } from "../hooks/use-auth";
import { BsArrowLeftCircle } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { LiaToggleOffSolid, LiaToggleOnSolid } from "react-icons/lia";

import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ProductInfo() {
  const { productInfo, subProductInfo, handleInfoBackToHome } = useAuth();
  const [changePic, setChangePic] = useState({ target: 0 });
  const [isOn, setIsOn] = useState(subProductInfo.status);
  const [status, setStatus] = useState({ status: "true" });

  const [isShowAll, setIsShowAll] = useState(true);

  console.log("productInfo", productInfo);
  console.log("subProductInfo", subProductInfo);
  console.log("handleInfoBackToHome", handleInfoBackToHome);

  
  const navigate = useNavigate();

  const updateInfo = (data) => {
    axios.post("http://localhost:5566/product/updateProduct", {
      data,
      subProductInfo,
    });
  };
  const prevSlide = () => {
    if (changePic.target === 0) {
      return console.log("out");
    } else setChangePic({ target: (changePic.target -= 1) });
  };
  const nextSlide = () => {
    if (changePic.target === 3) {
      return console.log("out");
    } else setChangePic({ target: (changePic.target += 1) });
  };
  return (
    <div className="flex justify-center">
      <div className="bg-gray-200  rounded-xl w-full flex  gap-2 justify-between p-5  h-[86vh] ">
        <div className=" h-50 w-1/2 bg-gray-300 rounded-lg flex flex-col  items-center  gap-2 justify-center">
          <div className="w-full h-72 flex gap-2 justify-center items-center -translate-y-8">
            <div className=" w-14 h-14 rounded-full flex items-center justify-center  hover:bg-gray-400 ">
              <IoIosArrowBack
                onClick={prevSlide}
                className="text-6xl cursor-pointer"
              />
            </div>
            <div>
              <div
                style={{
                  backgroundImage: `url(${
                    productInfo[changePic.target]?.productPic
                  })`,
                }}
                className="w-96 h-56 rounded-md bg-cover bg-center duration-500"
              ></div>
            </div>
            <div className=" w-14 h-14 rounded-full flex items-center justify-center  hover:bg-gray-400 ">
              <IoIosArrowForward
                onClick={nextSlide}
                className="text-6xl cursor-pointer"
              />
            </div>
          </div>

          <div className="flex -translate-y-0 rounded-md gap-2">
            {productInfo?.map((el, i) => {
              return (
                <div key={i}>
                  <div>
                    <img
                      src={el.productPic}
                      className=" h-20 rounded-md w-[10rem] m-1"
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-3/4 relative   text-lg translate-y-5 -translate-x-0 text-ellipsis ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illo
            soluta, atque exercitationem ab itaque inventore consequatur illum,
            voluptates dolorum vitae ut aliquid ex quod fugiat? Quaerat itaque
            ratione natus.
          </div>
        </div>
        <div className=" h-50 w-1/2 bg-gray-300">
          <div className="flex justify-between m-2">
            <div className="text-4xl">{subProductInfo.productName}</div>
            <div className="flex gap-5 cursor-pointer  ">
              <BsArrowLeftCircle
                onClick={() => {
                  handleInfoBackToHome(subProductInfo.pageId);
                  return navigate("/");
                }}
                className="text-4xl"
              />
              <FiEdit className=" text-4xl" />
            </div>
          </div>
       
          <div className="flex text-2xl m-2">
            <div>ประเภทผลงาน</div>
            <div>: {subProductInfo.productCat}</div>
          </div>
          <div className="flex text-2xl m-2">
            <div>วันที่เริ่มต้น</div>
            <div>: {subProductInfo.displayDate}</div>
          </div>
          <div className="flex text-2xl m-2">
            <div>วันที่สินสุดการเเสดง</div>
            <div>: {subProductInfo.expireDate}</div>
          </div>
          <div>
            <div className="flex text-2xl m-2">เจ้าของลิขสิทธิ์</div>
            <div className="w-2/3 h-auto p-1 m-5 border-2 border-solid border-gray-500 rounded-md">
              <div className="text-2xl m-">
                Name : {subProductInfo.productOwner}
              </div>
              <div className="text-2xl">Number : {subProductInfo.number}</div>
              <div className="text-2xl">E-mail : {subProductInfo.email}</div>
            </div>
          </div>
          <div className="text-2xl flex gap-2 items-center m-2">
            {subProductInfo.status == "เเสดง"  ? (
              <div>{subProductInfo.status}</div>
            ) : (
              <div>{subProductInfo.status}</div>
            )}

            {isOn === "เเสดง" ? (
              <LiaToggleOnSolid
              className="cursor-pointer text-2xl"
                onClick={() => {
                    setIsOn("ไม่เเสดง")
                  updateInfo({ status: "false" });
                }}
              />
            ) : (
              <LiaToggleOffSolid
              className="cursor-pointer text-2xl"
                onClick={() => {
                    
                    setIsOn("เเสดง")
                  updateInfo({ status: "true" });
                }}
              />
            )}
          
          </div>
          <div className="text-2xl m-2">
            <div>รายละเอียด</div>
            <div
              className={`w-1/2 h-20   text-lg ${
                isShowAll ? "overflow-hidden " : ""
              }`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              consectetur deserunt aperiam maxime deleniti, ratione esse quia
              officia laboriosam rem exercitationem non facilis animi
              voluptatem?
            </div>
            {isShowAll ? (
              <div
                className="absolute w-40 text-lg mx-80 translate-x-5 -my-6 cursor-pointer"
                onClick={() => setIsShowAll(!isShowAll)}
              >
                ...อ่านเพิ่มเติม
              </div>
            ) : (
              <div
                className="absolute my-8 mx-48 translate-x-2 text-lg cursor-pointer"
                onClick={() => setIsShowAll(!isShowAll)}
              >
                ...ย่อเล็กลง
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
