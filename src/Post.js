import React ,{forwardRef}from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined' 
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'
import  InputOptions from './InputOptions'
const Post = forwardRef(({name,description,message,photoURL},ref) => {
    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar src={photoURL}>{description[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__options">
                <InputOptions title="Like" Icon={ThumbUpAltOutlinedIcon} color="gray" />
               <InputOptions title="Comment" Icon={ChatOutlinedIcon} color="gray" />
               <InputOptions title="Share" Icon={ShareOutlinedIcon} color="gray" />
               <InputOptions title="Send" Icon={SendOutlinedIcon} color="gray" />
            </div>
        </div>
   )
})

export default Post
