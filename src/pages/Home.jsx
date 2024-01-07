import { CiHome, CiSearch } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlineCheckSquare, AiOutlineCloseSquare } from "react-icons/ai";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FcPlus } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import { useAuth } from "../hooks/use-auth";

export default function Home() {
  const navigate = useNavigate();
  const { handleInfo, dataInfoToHome } = useAuth();
  const [deleteAll, setDeleteAll] = useState(false);

  const [isOpenCreateProduct, setIsOpenCreateProduct] = useState(false);
  const [displayProduct, setDisplayProduct] = useState(null);

  const [selectPage, setSelectPage] = useState({
    page: 1,
  });
  let classes = "text-white bg-gray-400 ";
  console.log(dataInfoToHome)
  // if(dataInfoToHome == 1){
  //   setSelectPage({ ...selectPage, page: 1 })
  // }
  // if(dataInfoToHome == 2){
  //   setSelectPage({ ...selectPage, page: 2 })
  // }
  // if(dataInfoToHome == 3){
  //   setSelectPage({ ...selectPage, page: 3 })
  // }
  useEffect(() => {
    // if(dataInfoToHome == 2){
    //   return setSelectPage({ ...selectPage, page: 2 })
    // }
    axios
      .post("http://localhost:5566/product/readProduct", selectPage)
      .then((res) => {
        console.log(res.data);
        setDisplayProduct(res.data);
      });
  }, [selectPage]);

  return (
    <>
      <div className="text-2xl bg-white h-5/6 rounded-xl">
        <div className="flex gap-2 p-5 items-center">
          <div>
            <CiHome />
          </div>
          <div>หน้าหลัก</div>
        </div>
        <div className="p-5 text-lg">รายการผลงาน </div>

        <div className="bg-gray-100 h-3/5 rounded-md shadow-2xl m-5">
          <div className="flex  justify-between">
            <div className="flex text-lg gap-2 m-5 items-center">
              <div
                onClick={() => navigate("createProduct")}
                className="bg-white border-2 h-10 w-10 text-white text-xl items-center flex justify-center rounded-md cursor-pointer hover:bg-gray-200"
              >
                <FcPlus />
              </div>

              <div>ค้นหา</div>
              <div className="cursor-pointer border-2 rounded-md h-10 items-center justify-center flex">
                <input placeholder="ชื่อผลงาน" type="text" />
              </div>
              <div className="bg-blue-500 h-10 w-10 text-white text-xl items-center flex justify-center rounded-md cursor-pointer hover:bg-blue-600">
                <CiSearch />
              </div>
              <div
                onClick={() => setSelectPage({ ...selectPage, page: 1 })}
                className="bg-gray-100 flex items-center justify-center border-2 h-10 w-10 text-gray-400 rounded-md cursor-pointer hover:bg-gray-200"
              >
                <GrPowerReset />
              </div>
              <div className="text-2xl font-extrabold"> PAGE : {selectPage.page}</div>
            </div>
            <div className=" flex text-lg gap-2 m-5">
              <div className="h-10 w-10 border-2 flex items-center justify-center  rounded-md shadow-lg cursor-pointer hover:bg-gray-200">
                <RiDeleteBinLine />
              </div>
              <div
                onClick={() => setDeleteAll(!deleteAll)}
                className="h-10 flex gap-2 border-2 rounded-md shadow-lg items-center p-2 cursor-pointer hover:bg-gray-200"
              >
                <div>
                  <RiDeleteBinLine />
                </div>
                <div>Delete All</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 ">
            <table className="w-full text-lg ">
              <thead className="">
                <tr>
                  <th className=" p-5 border-y-2 ">
                    <div className=""></div>
                  </th>
                  <th className=" p-5 border-y-2">ชื่อผลงาน</th>
                  <th className=" p-5 border-y-2">ประเภทผลงาน</th>
                  <th className=" p-5 border-y-2">วันที่เเสดงผลงาน</th>
                  <th className=" p-5 border-y-2">วันที่สิ้นสุดเเสดงผลงาน</th>
                  <th className=" p-5 border-y-2">สถานะ</th>
                  <th className=" p-5 border-y-2 text-gray-100">sdfasdsd</th>
                </tr>
                {displayProduct?.map((el, i) => {
                  return (
                    <tr
                
                      className="cursor-pointer text-sm  hover:bg-gray-200"
                      key={i}
                    >
                      <th>
                        {deleteAll === true ? (
                          <input className="w-5 h-5" type="checkbox" checked />
                        ) : (
                          <input className="w-5 h-5" type="checkbox" />
                        )}
                      </th>
                      <th>{el.productName}</th>
                      <th>{el.productCat}</th>
                      <th>{el.displayDate}</th>
                      <th>{el.expireDate}</th>
                      <th>
                          <div className="flex gap-2  items-center ">
                            <div>    <AiOutlineCheckSquare className={`${el.status == "เเสดง" ? "text-green-700" : "text-red-700"} text-xl` } /></div>
                            <div>{el.status}</div>
                          </div>
                      </th>
                      <th
                            onClick={() => {
                              handleInfo({...el, displayProduct,pageId : selectPage.page});
                              return navigate("info");
                            }}
                      className=" p-5">
                        <div className="flex items-center gap-2">
                          <MdOutlineRemoveRedEye className="hover:text-xl"/>
                          <div>รายละเอียด</div>
                        </div>
                      </th>
                    </tr>
                  );
                })}
                {/* <tr>
                <th className=" p-5">
                  {deleteAll === true ? (
                    <input className="w-5 h-5" type="checkbox" checked />
                  ) : (
                    <input className="w-5 h-5" type="checkbox" />
                  )}
                </th>
                <th className=" p-5">อาจารย์เเดง</th>
                <th className=" p-5">ธรรมะสอนใจ</th>
                <th className=" p-5">12/5/2023</th>
                <th className=" p-5">12/9/2023</th>
                <th className=" p-5">
                  <div className="flex items-center gap-2">
                    <AiOutlineCheckSquare className="text-green-600" />
                    <div>เเสดง</div>
                  </div>
                </th>
                <th className=" p-5">
                  <div className="flex items-center gap-2">
                    <MdOutlineRemoveRedEye />
                    <div>รายละเอียด</div>
                  </div>
                </th>
              </tr> */}
              </thead>
            </table>
          </div>
          <div className="flex text-xl justify-between p-5">
            <div className="flex">
              <div>Page Size</div>
              <div> 3 </div>
            </div>
            <div className="flex gap-5 ">
              <div
                className={`${
                  selectPage.page == 1 ? classes : ""
                } cursor-pointer`}
                onClick={() => setSelectPage({ ...selectPage, page: 1 })}
              >
                1
              </div>
              <div
                className={`${
                  selectPage.page == 2 ? classes : ""
                } cursor-pointer`}
                onClick={() => setSelectPage({ ...selectPage, page: 2 })}
              >
                2
              </div>
              <div
                className={`${
                  selectPage.page == 3 ? classes : ""
                } cursor-pointer`}
                onClick={() => setSelectPage({ ...selectPage, page: 3 })}
              >
                3
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
