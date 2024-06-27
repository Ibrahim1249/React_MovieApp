

import Hero from "./Hero"
import Popular from "./Popular"
import TopRated from "./TopRated"
import Trending from "./Trending"

function Home() {
  return (
    <>
     <Hero />
     <Trending />
     <Popular />
     <TopRated />
    </>
  )
}

export default Home