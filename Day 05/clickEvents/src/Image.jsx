function Image() {
   const img = "./src/assets/image1.webp"

   let handleImg = (e) => {
      e.target.hidden = "true"
      console.log("image disappear");
      
   }

   return(
    <>
    <img src={img} onClick={(e) => handleImg(e)} title="Click here"/> 
    </>
   )
}

export default Image