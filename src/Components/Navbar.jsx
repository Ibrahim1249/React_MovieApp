import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <nav>
         <h3>Movie</h3>
         <ul>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/shows">Tv Shows</Link></li>
         </ul>
      </nav>
    </>
  )
}

export default Navbar