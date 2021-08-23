import React,{useState} from 'react'
import './Login.css';
import {useDispatch} from 'react-redux';
import {auth } from './firebase';
import {login} from './features/userSlice'
function Login() {
    const [email,setEmail]=useState('');
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const [photoUrl,setPhotoUrl]=useState('');
    const dispatch = useDispatch();
    const loginToApp=(e)=>{
      e.preventDefault();
      auth.signInWithEmailAndPassword(email,password).then((userAuth)=>{
          dispatch(login({
            email:userAuth.user.email,
            userid:userAuth.user.uid,
          displayName: userAuth.user.displayName,
            photoUrl:userAuth.user.photoURL,
          }))
      }).catch(error=>{
          alert(error);
      })
    }
    const register=()=>{
        if(name==='')
       return  alert('Please provide a name');
        else
        {
     auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
         userAuth.user.updateProfile({
             displayName: name,
             photoURL:photoUrl,
         }).then(()=>{
      dispatch(login({
          email:userAuth.user.email,
          userid:userAuth.user.uid,
        displayName: name,
          photoUrl:photoUrl,
      }))
         })
     }).catch(error=>{
          alert(error)
     })
    }
}
    return (
        <div className="login">
            <img alt = "" src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png"/>
            <form>
                <input value={name} onChange={(e)=>{
                    setName(e.target.value);
                }} placeholder="Full name (required only if registering)" type="text"></input>
                <input value={photoUrl} onChange={(e)=>setPhotoUrl(e.target.value)}placeholder="Photo Url(Optional)" type="text"></input>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" type="email"></input>
                <input value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password" type="password"></input>
                <button onClick={loginToApp} type="submit">Sign In</button>
            </form>
            <p>Not a member?{" "}
            <span onClick={register} className="login__register">Register now</span>
            </p>
        </div>
    )
}

export default Login
