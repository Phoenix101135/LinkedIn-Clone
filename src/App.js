import React,{useEffect} from 'react';
import './App.css'
import Header from './Header';
import SideBar from './SideBar';
import {useSelector ,useDispatch} from 'react-redux';
import Feed from './Feed';
import {selectUser,login,logout} from './features/userSlice'
import Login from './Login'
import { auth } from './firebase';
import Widgets from './Widgets'
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  useEffect(()=>{
   auth.onAuthStateChanged((userAuth)=>{
     if(userAuth)
     {
      dispatch(login({
        email:userAuth.email,
        userid:userAuth.uid,
      displayName: userAuth.displayName,
        photoUrl:userAuth.photoURL,
    }))
     }
     else
     {
       dispatch(logout())
     }
   })
  },[])
  return (
    <div className="app">
     
      {/* Header */}
      <Header></Header>
      {user!=null ?
     <div className="app_body" >
       <SideBar />
       <Feed/>
       <Widgets/>
     </div>
     : <Login/>}
      
       
    </div>
  );
}

export default App;
