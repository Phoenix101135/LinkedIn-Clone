import React from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import InfoIcon from '@material-ui/icons/Info'
import './Widgets.css'
function Widgets() {
    const newsArticle =(heading,subheading)=>(
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subheading}</p>
            </div>
        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                 <InfoIcon/>
            </div>
            {newsArticle("Utkarsh bags a new offer","Top-news - 8080 readers")}
            {newsArticle("Coronvirus India updates","Top-news -7890 readers")}
            {newsArticle("Jeff Bezoz flies to space","Amazon -17892 readers")}
            {newsArticle("Elon-Musk buys DogeCoin","CryptoCurrrency -1368 readers")}
            {newsArticle("Flutter vs React-Native","Trending -12451 readers")}
        </div>
    )
}

export default Widgets
