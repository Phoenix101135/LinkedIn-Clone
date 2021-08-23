import React,{useState,useEffect} from 'react';
import CreateIcon from '@material-ui/icons/Create';
import PhotoIcon from '@material-ui/icons/Photo';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EvenetNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import './Feed.css';
import InputOptions from './InputOptions';
import firebase from 'firebase';
import {db } from './firebase'
import Post from './Post' 
import {selectUser} from './features/userSlice';
import FlipMove from 'react-flip-move';
import {useSelector} from 'react-redux'
function Feed() {
    const user = useSelector(selectUser);
    const [posts,setPosts]=useState([]);
    const [input,setInput]=useState('');
    useEffect(()=>{
      db.collection('posts').orderBy("timeStamp","desc").onSnapshot(snapshot=>(
 setPosts(snapshot.docs.map(doc=>({
     id: doc.id,
     data:doc.data()
 })))
      ))
        
       
       
     } ,[]);
    
   
    const sendPost = e=>{
        e.preventDefault();
        db.collection('posts').add({
            name:user?.displayName,
            description:user?.email,
            message:input,
            photoURL:user?.photoUrl,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput('');
    }
    return (
        <div className="feed">
            <div className="feed__inputcontainer">
            <div className="feed__input">
               <CreateIcon/> 
               <form>
                   <input value={input} onChange={e=>{setInput(e.target.value)}} type="text"/>
                    <button onClick={sendPost}hidden type="submit">Send</button>
                   </form>
            </div>
            <div className="feed__inputOptions">
                <InputOptions title="Photo" Icon={PhotoIcon} color="#70B5F9"/>
                <InputOptions title="Video" Icon={SubscriptionsIcon} color="#E7A33E"/>
                <InputOptions title="Event" Icon={EvenetNoteIcon} color="#C0CBCD"/>
                <InputOptions title="Write Article" Icon={CalendarViewDayIcon} color="#7FC15E"/>
            </div>
            </div>
            <FlipMove>
            { 
                posts.map(({id,data

            })=>{
                return <Post key={id} name={data.name} description={data.description} message={data.message} photoURL={data.photoURL}/>
            })}
            </FlipMove>
           
            
        </div>
    )
}

export default Feed
