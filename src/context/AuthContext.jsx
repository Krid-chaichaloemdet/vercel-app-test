import axios from "axios";
import { Children, createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [initialLoading, setInitialLoading] = useState(true);
  const [productInfo, setProductInfo] = useState([]);
  const [subProductInfo, setSubProductInfo] =useState({})
  const [ targetInfo, setTargetInfo] =useState({})
  const [dataInfoToHome, setDataInfoToHome] =useState(null)

  console.log(productInfo);
  const handleInfo = (data) => {
    console.log("data", data);
    setTargetInfo({ ...targetInfo, id: data.id });
    setSubProductInfo(data)
  };
  useEffect(() => {
    axios
      .post("http://localhost:5566/product/info", targetInfo)
      .then((res) => setProductInfo(res.data))
      .finally(() => setInitialLoading(false));
  }, [targetInfo]);

  const handleInfoBackToHome = (data) => {
    setDataInfoToHome(data)
  }

  return (
    <AuthContext.Provider value={{ handleInfo, productInfo ,initialLoading, targetInfo,subProductInfo,handleInfoBackToHome,dataInfoToHome}}>
      {children}
    </AuthContext.Provider>
  );
}
