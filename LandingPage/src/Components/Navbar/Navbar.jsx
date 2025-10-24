// import './Navbar.css'

const Navbar = () => {
  return (
    <header className="relative top-0 left-0 w-full py-5 flex justify-between items-center">
      
      <div className="relative left-[6%]">
      <a href ="#"><img src="nike-64.png"
                        alt="Nike Logo"
                        className="logo-icon relative inline-block top-[5px] right-[3px]"></img></a> 
      <a href ="#" className="relative inline-block top-2 left-2 text-[#ff6452] text-4xl font-bold">Nike</a>
      </div>

      <nav>
        <a href="#" className="relative inline-block text-[hsl(204,8%,50%)] font-medium text-2xl ml-[90px] right-[105%] transition-all duration-500 hover:text-[hsl(204,8%,60%)] hover:duration-200">Home</a>
        <a href="#" className="relative inline-block text-[hsl(204,8%,50%)] font-medium text-2xl ml-[90px] right-[105%] transition-all duration-500 hover:text-[hsl(204,8%,60%)] hover:duration-200">About Us</a>
        <a href="#" className="relative inline-block text-[hsl(204,8%,50%)] font-medium text-2xl ml-[90px] right-[105%] transition-all duration-500 hover:text-[hsl(204,8%,60%)] hover:duration-200">Products</a>
        <a href="#" className="relative inline-block text-[hsl(204,8%,50%)] font-medium text-2xl ml-[90px] right-[105%] transition-all duration-500 hover:text-[hsl(204,8%,60%)] hover:duration-200">Contact Us</a>
      </nav>
    </header>
  )
}

export default Navbar