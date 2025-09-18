import { useEffect, useState } from "react"
import { collection, addDoc, getDocs, deleteDoc , doc ,  updateDoc, deleteField } from "firebase/firestore"
import { db } from "./firebase/FirebaseConfig"

const App = () => {

  const [email,setEmail] = useState("")  
  const [pass,setPass] = useState("")  
  const [data,setData] = useState([])  

  let readData = async() => {
     const querySnapshot = await getDocs(collection(db , "users"))
     let docs = querySnapshot.docs.map((doc) => {
        console.log(doc);
        return { id:doc.id , ...doc.data() }
     })
     setData(docs)
     console.log(docs);
     
  }

  let deleteData = async () => {
    await deleteDoc(doc(db,"users", "I4N0YG46XSLImP5lzcJu"))
    readData()
  }

  let deleteFields = async () => {
    const deleteRef = doc(db,"users","eIfoifuWJeGnybuwYYjT")
    await updateDoc(deleteRef , {
      email:  "oops@gmail.com",
      pass:  deleteField(),
    })
    readData()
  }

  let deleteDataSpecific = async (id) => {
    try {
      await deleteDoc(doc(db,"users",id))
      readData()
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    readData()
  }, [])


  let handleBtn = async() => {
    const docRef = await addDoc(collection(db , "users"),{
        "email" : email,
        "pass" : pass,
    })  
    console.log(docRef);
    readData()

  }

  return (
    <div className="flex flex-col gap-5 mt-3 ms-3">
      <div className="flex gap-5">
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" className="border"/>
        <input type="text" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="pass" className="border"/>
        <button onClick={handleBtn} className="border px-3">add</button>
        <button onClick={deleteData} className="border px-3">delete</button>
        <button onClick={deleteFields} className="border px-3">delete fields</button>
      </div>

    
        {
        data.map((e,i) => {
           return(
              <div key={i} className="flex flex-col gap-3">
                <div className="flex gap-5" >
                  <div>{e.email}</div>
                  <div>{e.pass}</div>
                  <div>{e.id}</div>
                  <button onClick={() => deleteDataSpecific(e.id)}  className="border px-3">delete data</button>
                </div>
                 
            </div>
           )
        })
      }
    
      
    </div>
  )
}

export default App
