import React from 'react'

function BgOverlay() {
  return (
    <div className=" myBgOverlay absolute top-0 w-full h-full bg-center bg-cover">
        <span className="w-full h-full absolute opacity-75 bg-black"></span>
      </div>
  )
}

export {BgOverlay}