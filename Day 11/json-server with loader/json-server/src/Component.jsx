// what is json-server = JSON Server is like a fake online database you can use when building frontend projects.
//                       JSON Server — a tool that turns a simple JSON file into a working REST API.



import { useState , useEffect } from "react"
import axios from "axios"

function Component() {

    let [allData , setData] = useState([])
    let [loader , setLoader] = useState(true) 

    let handleApi = async () => { 
        try {
            let res = await axios.get(`http://localhost:3000/posts`)
            console.log(res);
            setData(res.data)
            setLoader(false)
            
        } catch (error) {
             console.error("Error fetching data:", error);
             setLoader(false)
        }
    }

    useEffect(() => {
        handleApi()
    }, [])


  return (
    <div className="p-7">
      <h1 className="text-[40px] font-bold">Integrate JSON-SERVER API and LOADER</h1>

      <div className="w-[60%] h-auto border rounded-[10px] flex flex-col items-center">
            <div className="w-[100%] flex justify-center gap-[300px] mb-4 pr-22 pt-5">
                <span className="font-bold text-2xl">Name</span>
                <span className="font-bold text-2xl">Age</span>
                <span className="font-bold text-2xl">Email</span>
            </div>

        {
            
            !loader ? 

            
            allData.map((e , ide) => {

               return(
                 <div className="w-[100%] flex justify-center gap-[300px] border my-2" key={ide}>
                    <span>{e.name}</span>
                    <span>{e.age}</span>
                    <span>{e.email}</span>
                </div>
               )

            })

            : <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        }
          
            
      </div>

    </div>
  )
}

export default Component
