import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreateProduct() {
  const navigate = useNavigate();
  const [display, setDisplay] = useState(false);
  const [displayOrnot, setDisplayOrNot] = useState("เเสดง");
  const [input, setInput] = useState({
    // productName: "",
    // productCat: "",
    // productOwner: "",
    // number:"",
    // email: "",
    // displayDate: "",
    // expireDate: ""
  });
  const [pic, setPic] =useState(null)

  console.log(pic)
  const createProduct = async () => {
    console.log("ddd");
    const formData = new FormData();
    if(pic)
   { formData.append("productPic", pic)}
    await axios
      .post("http://localhost:5566/product/createProduct", formData)
      .then((res) => {
        console.log("test");
      });
  };
  return (
    <div className="flex justify-center ">
      <img src={""} alt="" />
      <div
        onClick={() => navigate("/")}
        className="absolute translate-x-80 my-2 cursor-pointer bg-red-500 w-10 h-10 rounded-full flex items-center justify-center "
      >
        <div className="text-3xl  text-white">X</div>
      </div>
      <div className="text-lg bg-gray-200  rounded-xl w-2/4 flex flex-col p-5  h-[86vh]">
        <h1 className="font-extrabold">ADD PRODUCT</h1>
        <div>ชื่อผลงาน</div>
        <input
          name="productName"
          className="w-1/2 rounded-md"
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
          type="text"
        />
        <div>ประเภทผลงาน</div>
        <input
          name="productCat"
          className="w-1/2 rounded-md"
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
          type="text"
        />
        <div>เจ้าของลิขสิทธิ์</div>
        <input
            name="productOwner"
          className="w-1/2 rounded-md"
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
          type="text"
        />
        <div>เบอร์โทร</div>
        <input 
        name="number"
        className="w-1/2 rounded-md" 
        onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
        type="text" />
        <div>อีเมล</div>
        <input 
        name="email"
        className="w-1/2 rounded-md"
        onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
        type="text" />
        <div>วันที่เเสดงผลงาน</div>
        <input 
        name="displayDate"
        className="w-1/2 rounded-md" 
        onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
        type="date" />
        <div>วันที่สิ้นสุดเเสดงผลงาน</div>
        <input 
        name="expireDate"
        className="w-1/2 rounded-md" 
        onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
        type="date" />
        <div>สถานะ</div>
        {/* {!display && (
          // <div
          //   className="cursor-pointer hover:bg-gray-300 w-40 bg-gray-400 rounded-md"
          //   onClick={() => setDisplay(!display)}
          // >
          //   {displayOrnot ? displayOrnot : "เเสดง"}
          // </div>
        )} */}
        <div className={`cursor-pointer hover:bg-gray-300 w-40 ${displayOrnot == "เเสดง"? "bg-green-500" : "bg-red-500"} rounded-md`} onClick={()=>setDisplay(!display)}>{displayOrnot}</div>

        {display && (
          <div className="bg-gray-100 w-40 rounded-lg">
            <div
                
              className="cursor-pointer hover:bg-gray-300 w-40"
              onClick={() => {
                setDisplay(false);
                setDisplayOrNot("เเสดง")
                setInput({...input, status: "เเสดง" });
              }}
            >
              เเสดง
            </div>
            <div
              className="cursor-pointer hover:bg-gray-300 w-40"
              onClick={() => {
                setDisplay(false);
                setDisplayOrNot("ไม่เเสดง")
                setInput({...input, status: "ไม่เเสดง" });
              }}
            >
              ไม่เเสดง
            </div>
          </div>
        )}
        <div>รูปประกอบ</div>
        <input 
        onChange={(e)=>{
          setPic(e.target.files[0])
        }}
        type="file" />
        <div className="flex justify-center gap-5 ">
          <div
            onClick={createProduct}
            className="bg-green-400 text-white pr-1 pl-1 rounded-md cursor-pointer"
          >
            SUBMIT
          </div>
          <div
            onClick={() => navigate("/")}
            className="bg-gray-400 text-white pr-1 pl-1 rounded-md cursor-pointer"
          >
            CANCEL
          </div>
        </div>
      </div>
    </div>
  );
}
