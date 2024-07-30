import React from 'react'

// Layout HOC
import DefaultLayoutHOC from '../layout/Default.Layout'

// Components
import EntertainmentCardSlider from '../components/Enterainment/EntertainmentCard.Component'
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Component'
import PosterSlider from '../components/PosterSlider/PosterSlider.Component'


const HomePage = () => {
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [premiumMovies, setPremiumMovies] = useState([]);
    const [OnlineStreamEvents, setOnlineStreamEvents] = useState([]);
   return (
  <>
  
  <HeroCarousel/>
  <div>
    
  </div>
  
  </>
   ) 
}

export default DefaultLayoutHOC(HomePage)