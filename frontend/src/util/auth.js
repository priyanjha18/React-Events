import {redirect} from "react-router-dom";
export function getAuthToken(){
    const token=localStorage.getItem('token')
    return token
}
export function tokenLoader(){
    const token=getAuthToken()|| null;
    return token;
}
export function checkAuthLoader() {
    const token = getAuthToken();
    
    if (!token) {
      return redirect('/auth');
    }
   
    return null;
  }