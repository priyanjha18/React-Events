import { Outlet, useLoaderData, useSubmit} from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import { useEffect } from "react";
export default function RootLayout() {
  const token=useLoaderData();
  const submit=useSubmit();
  useEffect(()=>{
    if(!token){
      return
    }
    else{
      setTimeout(()=>{
        submit(null,{action:"/logout",method:'post'})

      },3600000 )
    }

  },[token,submit]);
  //const navigation = useNavigation();
  return (
    <>
      <MainNavigation></MainNavigation>
      <main>
        <Outlet></Outlet>
       { /*{navigation.state==="loading" && <p>...loading</p>}*/}
      </main>
    </>
  );
}
