// import './Showcase.css'
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
    <section className="absolute bg-[rgb(221,221,223)] w-[62%] h-screen z-[-1] right-0 top-0">
      <div className="absolute right-[450px] top-[200px]">
          <img id="imageDisplay"
               src={image1}
               alt="shoes displayer"></img>
      </div>

      <div className="flex relative w-[160px] h-auto top-[90vh] left-[40vh] p-[10px] gap-8">
        <img src={image1}
             className="imageView block relative w-[160px] h-auto cursor-pointer border-[3px] border-[hsla(0,0%,0%,0.373)] shadow-[1px_1px_5px_white] bg-[hsla(0,0%,70%)] p-[10px] rounded-[15px] focus:border-[3px] focus:border-[hsl(30,100%,59%)] focus:bg-[hsla(30,100%,90%,0.8)] focus:shadow-[0_0_10px_hsla(30,100%,50%,0.7)] hover:border-[3px] hover:border-[hsla(30,100%,49%,0.373)] hover:bg-[hsla(0,0%,80%)] hover:rounded-[15px]" 
             alt="shoe1" 
             tabIndex="0"/>
        <img src={image2}
             className="imageView block relative w-[160px] h-auto cursor-pointer border-[3px] border-[hsla(0,0%,0%,0.373)] shadow-[1px_1px_5px_white] bg-[hsla(0,0%,70%)] p-[10px] rounded-[15px] focus:border-[3px] focus:border-[hsl(30,100%,59%)] focus:bg-[hsla(30,100%,90%,0.8)] focus:shadow-[0_0_10px_hsla(30,100%,50%,0.7)] hover:border-[3px] hover:border-[hsla(30,100%,49%,0.373)] hover:bg-[hsla(0,0%,80%)] hover:rounded-[15px]" 
             alt="shoe2" 
             tabIndex="0"/>
        <img src={image3}
             className="imageView block relative w-[160px] h-auto cursor-pointer border-[3px] border-[hsla(0,0%,0%,0.373)] shadow-[1px_1px_5px_white] bg-[hsla(0,0%,70%)] p-[10px] rounded-[15px] focus:border-[3px] focus:border-[hsl(30,100%,59%)] focus:bg-[hsla(30,100%,90%,0.8)] focus:shadow-[0_0_10px_hsla(30,100%,50%,0.7)] hover:border-[3px] hover:border-[hsla(30,100%,49%,0.373)] hover:bg-[hsla(0,0%,80%)] hover:rounded-[15px]" 
             alt="shoe3" 
             tabIndex="0"/>
      </div>

    </section>
  )
}

export default Showcase