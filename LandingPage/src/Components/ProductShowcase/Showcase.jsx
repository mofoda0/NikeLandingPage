import './Showcase.css'
import image1 from "../../assets/Images/big-shoe1.png"
import image2 from "../../assets/Images/big-shoe2.png"
import image3 from "../../assets/Images/big-shoe3.png"

const Showcase = () => {

  function chooseImage(){
    const imageDisplay = document.getElementById("imageDisplay");
    const imageView = document.querySelectorAll(".imageView");

    imageView.forEach((view) =>{
      view.onclick = () => {
        imageDisplay.src = view.src;
      };
   });
  }

  setTimeout(chooseImage, 0);

  return (
    <section className="case-container">
      <div className="display-image">
          <img id="imageDisplay"
               src={image1}
               alt="shoes displayer"></img>
      </div>

      <div className="view-image">
        <img src={image1} className="imageView" alt="shoe1" tabIndex="0"/>
        <img src={image2} className="imageView" alt="shoe2" tabIndex="0"/>
        <img src={image3} className="imageView" alt="shoe3" tabIndex="0"/>
      </div>

    </section>
  )
}

export default Showcase