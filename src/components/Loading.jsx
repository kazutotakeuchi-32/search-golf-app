import React from 'react'

const Loading = (props)=>{

  if (!props.loading) {
    return <div className=""></div>
  }
  return (
    <div className="loading">
      <div className="loading-image">
        <img
          src="https://media.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif"
          alt="golf-gif"
        />
      </div>
    </div>
  )
}

export default Loading
