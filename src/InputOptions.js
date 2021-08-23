import React from 'react'
import './InputOptions.css'
export default function InputOptions({title,Icon,color}) {
    return (
        <div className="inputOptions">
            {Icon && <Icon style={{color:color}} />}
            {<h4>{title}</h4>}
        </div>
    )
}
