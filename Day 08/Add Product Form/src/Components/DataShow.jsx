import { useState } from "react"
import { useRef } from "react"

function DataShow({setProductData}) { //Destructuring instead of props word

    //hook
        let [imgUrl , setUrl] = useState("")
        let [colorData , setColor] = useState("")
        let [input1Data , set1Data] = useState("")
        let [priceData , setPriceData] = useState("")
        let [checkBoxData , setCheckData] = useState("")
        let [selectData ,  setSelect] = useState("")
        let [textareaData ,  setAreaData] = useState("")

    //hook 
    
    // useRef
    let inputRef = useRef(null)
    let divRef = useRef(null)
    // useRef


    let handleDrop = (e) => {
        
        e.target.style.backgroundColor = "rgba(0, 0, 0, 0.1)" 
        e.target.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)"
        e.target.style.transition = "all 0.2s ease in out" 
         setTimeout(() => {
            e.target.style.border = "0px solid " // to remove dashed border
        }, 500); 
        // console.log(e.target.style);
        
        e.preventDefault() 
        const files = e.dataTransfer.files[0] // to set the data in the div 

        if(files && files.type.startsWith("image/")){
            setUrl(URL.createObjectURL(files))
        }
        // console.log(files); 
    }
    let handleDrag = (e) => {
          e.preventDefault()           
       
        e.target.style.backgroundColor = "rgba(0, 0, 0, 0.1)" 
        e.target.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)"
        e.target.style.transition = "all 0.2s ease in out" 
        setTimeout(() => {
            e.target.style.border = "0px solid " // to remove dashed border
        }, 500); 
    }

    let handleBrowse = (e) => {
        e.preventDefault() 
        // console.log(inputRef);
        inputRef.current.click()

         setTimeout(() => {
            divRef.current.style.border = "0px solid" // to remove dashed border
        }, 500); 
        
    }

    let handleInputChanges = () => {
        const files = inputRef.current.files[0]
        if(files && files.type.startsWith("image/")){
            setUrl(URL.createObjectURL(files))
        }
    }

    let handleColor = (e) => {
        setColor(e.target.value)
    }

    let handleInput1Data = (e) => {
        set1Data(e.target.value)
    }
    
    let handlePriceData = (e) => {
        setPriceData(e.target.value)
    }
    
    let handleCheck = (e) => {
        if(e.target.checked){
            
            setCheckData("Cotton")
        }
        else{
            setCheckData("")
        }
    }

    let handleSelect = (e) => {
        setSelect(e.target.value)
    }




    let handleSubmit = (e) => {

        e.preventDefault()

        let data = {
            img : imgUrl,
            title : input1Data,
            price : priceData,
            color : colorData,
            material : checkBoxData,
            clothTypes : selectData,
            description : textareaData,
        }

        setProductData(prev => {
            let updData = [...prev , data]
            localStorage.setItem("Data", JSON.stringify(updData))
            return updData
        })
        
    }


    return(
        
        <div className="w-[100%] min-h-screen bg-[#ffd84d] flex justify-center items-center">

            <form action="" className="box w-[45%] rounded-[10px] p-4 flex flex-col gap-2">

                <div className="subImg group border-dashed  border-[2px]  border-indigo-500  w-full min-h-[400px]  rounded-2xl relative  flex flex-col justify-center items-center gap-3"  onDrop={handleDrop} onDragOver={handleDrag} ref={divRef}>
                    <input type="file" multiple ref={inputRef} className="w-[100%] h-[100%] cursor-pointer absolute hidden" accept="image/*" onChange={handleInputChanges}/>

                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" className="w-[100px] h-[100px]  group-hover:scale-[93%] duration-[0.2s] cursor-pointer will-change-transform ">
                    <path fill="#6366F1" d="M11 20H6.5q-2.275 0-3.887-1.575T1 14.575q0-1.95 1.175-3.475T5.25 9.15q.625-2.3 2.5-3.725T12 4q2.925 0 4.963 2.038T19 11q1.725.2 2.863 1.488T23 15.5q0 1.875-1.312 3.188T18.5 20H13v-7.15l1.6 1.55L16 13l-4-4l-4 4l1.4 1.4l1.6-1.55z" />
                    </svg>

                    <p className="text-gray-600 text-sm">Drag and Drop Files</p>

                    <button className="bg-[#6366F1] text-white px-4 rounded-3xl shadow cursor-pointer hover:scale-[97%] duration-[0.2s] will-change-transform"  onClick={handleBrowse}>Browse</button>

                                    
                                    { imgUrl && (
                                            <img src={imgUrl} alt="" className="w-[100%] h-[100%] object-cover absolute rounded-[10px]"/>
                                            
                                       )
                                    }
                </div>

                <div className="title-div w-[100%] h-auto rounded-2xl border-2 p-4 flex gap-2 items-center bg-white">
                    <span className="text-[18px] font-semibold">Title</span>
                    <input type="text" placeholder="Add Title.." value={input1Data} onChange={handleInput1Data} className="w-[50%] h-[40px] bg-[#ffd84d] text-black rounded-[5px] outline-0 border-0 px-2"/>
                </div>

                <div className="price-div w-[100%] h-auto rounded-2xl border-2 p-4 flex gap-2 items-center bg-white">
                    <span className="text-[18px] font-semibold">Price</span>
                    <input type="number"  placeholder="Add Price.." value={priceData} onChange={handlePriceData}  className="w-[50%] h-[40px] bg-[#ffd84d] text-black rounded-[5px] outline-0 border-0 px-2"/>
                </div>

                <div className="color-div w-[100%] h-auto rounded-2xl border-2 p-4 flex gap-2 items-center bg-white">
                    <span className="text-[18px] font-semibold"  name="radioName">Choose Color</span>
                    <span>Black</span>
                    <input type="radio" name="radioName"  placeholder="Add Price.." value={"Black"} onChange={handleColor} className="w-[20px] h-[20px] bg-[#ffd84d] text-black rounded-[5px] outline-0 border-0 px-2"/> 
                    ,
                     <span>White</span>
                    <input type="radio" name="radioName"  placeholder="Add Price.." value={"White"} onChange={handleColor}  className="w-[20px] h-[20px] bg-[#ffd84d] text-black rounded-[5px] outline-0 border-0 px-2"/>
                    ,
                    <span>Red</span>
                    <input type="radio" name="radioName"  placeholder="Add Price.." value={"Red"} onChange={handleColor}  className="w-[20px] h-[20px] bg-[#ffd84d] text-black rounded-[5px] outline-0 border-0 px-2"/>
                    , 
                     <span>Green</span>
                    <input type="radio" name="radioName"  placeholder="Add Price.." value={"Green"} onChange={handleColor}  className="w-[20px] h-[20px] bg-[#ffd84d] text-black rounded-[5px] outline-0 border-0 px-2"/>
                    
                </div>

                <div className="material-div w-[100%] h-auto rounded-2xl border-2 p-4 flex gap-2 items-center bg-white">
                    <span className="text-[18px] font-semibold" name="radioMaterial">Choose Material</span>
                    <span >Cotton</span>
                    <input type="checkbox" name="radioMaterial" value={checkBoxData} onChange={handleCheck}  placeholder="Add Price.."  className="w-[20px] h-[20px] bg-[#ffd84d] text-black rounded-[5px] outline-0 border-0 px-2"/> 
                </div>

                <div className="types-div w-[100%] h-auto rounded-2xl border-2 p-4 flex gap-2 items-center bg-white">
                    <span className="text-[18px] font-semibold" name="radioMaterial">Cloth Types</span>
                        <select name="clothing"  className="bg-amber-50 outline-0" value={selectData} onChange={handleSelect}>
                        <optgroup label="Topwear">
                            <option value="jacket">Jacket</option>
                            <option value="hoodie">Hoodie</option>
                            <option value="sweatshirt">Sweatshirt</option>
                            <option value="tshirt">T-Shirt</option>
                            <option value="shirt">Shirt</option>
                        </optgroup>

                        <optgroup label="Bottomwear">
                            <option value="jeans">Jeans</option>
                            <option value="joggers">Joggers</option>
                            <option value="shorts">Shorts</option>
                        </optgroup>

                        <optgroup label="Special">
                            <option value="blazer">Blazer</option>
                            <option value="kurta">Kurta</option>
                        </optgroup>
                        </select>
                </div>

                <div className="description-div w-[100%] h-auto rounded-2xl border-2 p-4 flex gap-2  bg-white">
                    <span className="text-[18px] font-semibold" >Write Description</span>
                    <textarea name="" placeholder="Description..." value={textareaData}  className="w-[70%] min-h-[60px] resize-y bg-[#ffd84d] text-black rounded-[5px] outline-0 border-0 px-2" onInput={
                        (e) => {
                            e.target.style.height = "auto"
                            e.target.style.height = `${e.target.scrollHeight}px`
                            setAreaData(e.target.value)
                            
                        }
                    }></textarea>
                </div>

                <div className="subBtn flex gap-4">
                     <button type="submit" onClick={handleSubmit} className="bg-black text-white w-[25%] h-[40px] rounded-2xl active:scale-[90%] duration-[0.2s] will-change-transform cursor-pointer">Submit</button>
                     <button type="reset" className="bg-black text-white w-[25%] h-[40px] rounded-2xl active:scale-[90%] duration-[0.2s] will-change-transform cursor-pointer" onClick={
                        () => {
                            window.location.reload()
                        }
                     }>Reset</button>
                </div>


            </form>
          
        </div>
    )
    
}

export default DataShow