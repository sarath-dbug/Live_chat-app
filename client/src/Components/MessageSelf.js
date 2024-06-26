import React from 'react'
import { useSelector } from 'react-redux'

function MessageSelf({ props }) {
  const lightTheme = useSelector((state) => state.themeKey);
  const timeStamp = props.updatedAt ? new Date(props.updatedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : "200";

  return (
    <div className='self-message-container'>
      <div className="message-box">
        <p style={{ color: "black" }}>{props.content}</p>
        <p className="self-timeStamp">{timeStamp}</p>
      </div>

    </div>
  )
}

export default MessageSelf

