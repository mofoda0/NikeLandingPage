// import './Hero.css'

const Hero = () => {
  return (
    <section className="relative inline-block top-[30px] px-[50px] m-0">
        <p className="relative text-[rgb(234,88,12)] text-[1.5rem]">Our Summer Collections</p>

        <h1 className="inline-block text-[7rem] font-extrabold">
        <span className="line-block inline-block bg-white pr-[35px]">The New Arrival</span> <br/>
        <span className="text-[rgb(234,88,12)]">Nike</span> Shoes
        </h1>

        <h5 className="sub-line relative text-[rgb(109,116,128)] text-[1.3rem]">
        Discover stylish Nike arrivals, quality<br/>comfort, and innovation for your active life.
        </h5>

        <button className="relative border-none bg-[#ff6452] text-white text-[2rem] px-[40px] py-[15px] rounded-[50px] transition-all duration-300 top-[30px] hover:bg-[hsl(6,100%,76%)] active:bg-[hsl(6,100%,86%)] cursor-pointer">
        Shop Now <b className="bg-white text-[#ff6452] rounded-full text-[1.9rem] px-[9px] py-[3px]">→</b>
        </button>
    </section>
  )
}

export default Hero