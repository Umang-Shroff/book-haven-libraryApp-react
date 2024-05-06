import React from 'react'
import Spline from'@splinetool/react-spline';
import Maindiv from '../Landing/Maindiv';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div>
      <div>
      <div className="frontcard">
      <Spline scene="https://prod.spline.design/ETDC8R8zhjonTcz6/scene.splinecode" />
      </div>
      </div>
      <Maindiv/>
      <Maindiv/>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <Footer/>
    </div>
  )
}

export default Home
