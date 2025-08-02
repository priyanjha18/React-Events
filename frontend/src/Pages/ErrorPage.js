import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";
import {useRouteError} from "react-router-dom"
export default function ErrorPage() {
    const error=useRouteError();
    let title="an error occured ";
    let message="Something went wrong";
    if(error.status===500){
        message=JSON.parse(error.data).message;
    }
    if(error.status){
        title="Not found"
        message="could not found resource or page"
    }
  return (
   <><MainNavigation></MainNavigation>
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent></> 
  );
}
