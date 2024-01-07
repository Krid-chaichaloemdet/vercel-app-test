import Route from './router/Route'
import { useAuth } from "./hooks/use-auth";
import Loading from "../src/component/Loading";

function App() {
  const { initialLoading } = useAuth();

  if(initialLoading ){
    return <Loading />
  }
  return (
   <>
  <Route />
   </>
  )
}

export default App
