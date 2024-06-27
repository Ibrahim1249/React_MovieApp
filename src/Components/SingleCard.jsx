import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function SingleCard({movie}) {
   const url = "https://image.tmdb.org/t/p/original"
  
   const date = new Date(movie.release_date);
   const options = { year: 'numeric', month: 'long', day: 'numeric' };
   let newDate = new Intl.DateTimeFormat('en-US', options).format(date);
 
  return (
     <>
       <div className="card-container">
           <div className="image">
              <img src={url + movie.poster_path || url + movie.backdrop_path } alt="movie image" />
              <div className="overlay">
                 <div className="rating">
                    <CircularProgressbar value={movie.vote_average * 10 } text={(movie.vote_average).toFixed(1)} strokeWidth={10}
                    styles={buildStyles({
                        pathColor: `${movie.vote_average > 6.9 ? 'rgb(0, 128, 0)' : 'rgb(255, 165, 0)'}`,
                        textColor: 'rgb(0, 128, 0)',
                        // trailColor: '#d6d6d6',
                        // backgroundColor: '#000000',
                        textSize: '35px',
                        // pathTransitionDuration: 2,
                    
                    })}/>
                 </div>

                 <div className="genre">
                     <p>Action</p>
                     <p>Adventure</p>
                 </div>
              </div>
           </div>

           <div className="movie-info">
             <p>{movie.title}</p>
             <p>{newDate}</p>
           </div>
       </div>
     </>
  )
}

export default SingleCard