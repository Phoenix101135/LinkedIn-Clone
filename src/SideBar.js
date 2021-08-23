import React from 'react'
import './SideBar.css' 
import {useSelector} from 'react-redux';
import {selectUser} from './features/userSlice'
import {Avatar} from '@material-ui/core'
export default function SideBar() {
    const user = useSelector(selectUser);
    const recent=(topic)=>(
        <div className="sidebar__recentitems">
            <span className="sidebar__hash">#</span>
            <p >{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar__top">
             <img alt= "banner" src="https://images.unsplash.com/photo-1597733336794-12d05021d510?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV0d29ya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"></img>
             <Avatar className= "sidebar__avatar"src={user.photoUrl}>{user.email[0]}</Avatar>
             <h2>{user.displayName}</h2>
             <h4>{user.email}</h4>
            </div>
<div className="sidebar__stats">
    <div className="sidebar__stat">
        <p>Who viewed you</p>
        <p className="sidebar__statnumber">2,345</p>
    </div>
    <div className="sidebar__stat">
        <p>Views on your post</p>
        <p className="sidebar__statnumber">4,578</p>
    </div>
</div>
<div className="sidebar__bottom">
    <p>Recent</p>
   {recent("React")}
   {recent("JavaScript")}
   {recent("Intern2021")}
   {recent("Amazon")}
   {recent("Flutter")}
</div>
        </div>
    )
}
