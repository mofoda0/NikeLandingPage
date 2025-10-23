import './Navbar.css'

const Navbar = () => {
  return (
    <header className="header">
      
      <div className="nike-logo">
      <a href ="#"><img src="nike-64.png" alt="Nike Logo" className="logo-icon" ></img></a> 
      <a href ="#" className="logo">Nike</a>
      </div>

      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Products</a>
        <a href="#">Contact Us</a>
      </nav>
    </header>
  )
}

export default Navbar