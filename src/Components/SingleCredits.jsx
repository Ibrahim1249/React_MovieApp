import React from 'react'

function SingleCredits({cast}) {
    const url = "https://image.tmdb.org/t/p/original";
  return (
   <>
    <div className="single-credits">
        <div className="image">
            <img src={url + cast?.profile_path} alt="" />
        </div>
    </div>
   </>
  )
}

export default SingleCredits