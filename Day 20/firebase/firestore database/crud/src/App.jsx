import { useState, useEffect } from "react";
import { collection, doc, setDoc , query , getDocs , deleteDoc } from "firebase/firestore";
import { db } from "./firebase/FirebaseConfig";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [users, setUsers] = useState([]);
  const [editId , setEditId] = useState(null)

  let customId = `${name}_${phone}`
  

  let read = async() => {
    const q = query(collection(db,"users"))

    const querySnapshot = await getDocs(q)
    const queryData = querySnapshot.docs.map((doc) => {
      console.log(doc.id,doc.data());
      return {id: doc.id , ...doc.data()}
      
    })
    setUsers(queryData)
  } 


  useEffect(() => {
    read()
  }, [])

  let handleDelete = async(id) => {
    await deleteDoc(doc(db,"users",id))
    read()
  }

  let handleEdit = (user) => {
    setEditId(user.id)
    setName(user.name)
    setEmail(user.email)
    setPhone(user.phone)
  }
  


  let handleBtn = async () => {
   
    try {
        if(editId){
            await setDoc(doc(db, "users", editId), {
              id: editId,
              name: name,
              email: email,
              phone: phone,
            });

            setEditId(null);
            setName("");
            setEmail("");
            setPhone("");
            read()
        }
        else{

            const docRef = await setDoc(doc(db, "users", customId), {
              id: customId,
              name: name,
              email: email,
              phone: phone,
            });
            
            console.log(docRef);

            setName("");
            setEmail("");
            setPhone("");
            read()
        }

    } catch (error) {
      console.log(error);
    }
  
  };

  return (
    <div className="w-[100%] max-h-auto  min-h-screen bg-black text-white flex flex-col justify-center items-center">
      {/* Input Form */}
       
 
        <h1 class="stunning-heading">Contact Manager</h1>
        {/* <p class="subtitle">Organize your connections with style</p> */}
     

      <div className="w-300 h-[10vh] gap-5 flex justify-center items-center">
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="Name" className="w-[25%] p-2 border rounded-md outline-0 bg-white text-black" />

        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Email" className="w-[25%] p-2 border rounded-md outline-0 bg-white text-black" />

        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" name="phone" placeholder="Phone No." className="w-[25%] p-2 border rounded-md outline-0 bg-white text-black" />

        <button onClick={handleBtn} className="w-30 bg-white text-black py-2 rounded-md active:scale-[0.95] duration-[0.2s]" >
          {editId ? "Update Contact" : "Add Contact"}
        </button>
      </div>

      {/* Users Table */}
      <div className="w-[80%] flex justify-center items-center mb-11">

        <div className="panel w-[95%] h-auto rounded-2xl">

          {/* Table Header */}
          <div className="flex  border-b border-gray-500 sticky top-0 z-10">
            <div className="flex-1 px-4 py-2 font-semibold">Name</div>
            <div className="flex-1 px-4 py-2 font-semibold">Phone No.</div>
            <div className="flex-1 px-4 py-2 font-semibold">Email</div>
          </div>

          {/* Table Rows */}
          <div className="flex flex-col">
            {users.map((user) => (
              <div key={user.id} className="flex  hover:bg-[#ffffff31] justify-center items-center relative"  >
                <div className="flex-1 px-4 py-2">{user.name}</div>
                <div className="flex-1 px-4 py-2">{user.phone}</div>
                <div className="flex-1 px-4 py-2">{user.email}</div>

                <div className="absolute flex right-0">
                  <div onClick={() => handleEdit(user)} className="mx-3 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil-icon lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                  </div>

                  <div className="cursor-pointer me-2" onClick={() => handleDelete(user.id)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-icon lucide-trash"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
