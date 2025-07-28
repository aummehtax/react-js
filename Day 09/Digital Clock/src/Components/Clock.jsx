import { useState , useEffect } from "react"

function Clock() {

  let now = new Date()  

  let [hour , setHour] = useState(now.getHours())  
  let [min , setMin] = useState(now.getMinutes())  
  let [Sec , setSec] = useState(now.getSeconds())  
  let [dayNight , setDayNight] = useState("")  

  useEffect(() => {
    let timer = setInterval(() => {
        setHour(new Date().getHours())
        setMin(new Date().getMinutes())
        setSec(new Date().getSeconds())
        setDayNight(new Date().getHours() >= 12 ? "PM" : "AM")
    }, 1000);

    return () => {
        clearInterval(timer)
        
    }
  } , []) //run only once
  
  return (
    <div className="main w-[100%] h-[100vh] flex justify-center items-center">
        <div className="subDiv text-white font-bold text-[100px]">
            <span>{hour} : {min} : {Sec}  <sub className="text-[30px]">{dayNight}</sub></span>
        </div>
    </div>
  )
}

export default Clock
