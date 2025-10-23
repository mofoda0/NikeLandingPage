import './Hero.css'

const Hero = () => {
  return (
    <section className="hero-container">
        <p className="intro">Our Summer Collections</p>
        <h1 className="head-line"><span className="line-block">The New Arrival</span> <br></br> <span className="span-color">Nike</span> Shoes</h1>
        <h5 className="sub-line">Discover stylish Nike arrivals, quality<br></br> comfort, and innovation for your active life.</h5>
        <button className="shop-now">Shop Now <b><img src="right-arrow.png"></img></b></button>
    </section>
  )
}

export default Hero