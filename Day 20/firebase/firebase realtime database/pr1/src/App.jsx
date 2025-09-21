import { useEffect, useState } from "react"
import { db } from "./firebase/FirebaseConfig"
import { ref, set , onValue , remove , update } from "firebase/database";

const App = () => {
  const [email , setEmail] = useState("")
  const [pass , setPass] = useState("")
  const [data , setData] = useState({})


  const [editingUserId, setEditingUserId] = useState(null)
  const [editEmail, setEditEmail] = useState("")
  const [editPass, setEditPass] = useState("")


  let getData = () => {
    const countRef = ref(db , "users/" )
    onValue(countRef , (snapshot) => {
      console.log(snapshot);
      const data = snapshot.val()

      setData(data)
      console.log(data);
      
    })
  }

  useEffect(() => {
   getData()
  }, [])

  let handleClick = () => {
      let userId = Date.now().toString()
      set(ref(db, "users/" + userId),{
        email: email,
        password: pass,
      })

    setEmail("")
    setPass("")
  }
  
  let deleteData = (userId) => {
     remove(ref(db,"users/" + userId))  
  }

  let startEdit = (userId , updEmail , updPass) => {
     setEditingUserId(userId)
    setEditEmail(updEmail)
    setEditPass(updPass)
  }

  let saveEdit = (userId) => {
   update(ref(db , "users/" + userId), {
      email: editEmail,
      password: editPass,
   })
   .then(() => {
    setEditingUserId(null)
    setEditEmail("")
    setEditPass("")
   })
    .catch((error) => {
      console.error("Error updating user:", error)
    })
  }

  let cancelEdit = () => {
    setEditingUserId(null)
    setEditEmail("")
    setEditPass("")
  }


 

  return (
    <div>
      <input type="text" placeholder="email" className="border" value={email} onChange={(e) => setEmail(e.target.value)}  />
      <input type="text" placeholder="pass" className="border"  value={pass} onChange={(e) => setPass(e.target.value)}/>
      <button onClick={handleClick} className="border px-3">Click</button>

      <div >
        {data && Object.keys(data).length > 0 ? (
          Object.keys(data).map((key) => {
            const user = data[key]
            const isEditing = editingUserId === key

            return (
              <div key={key} className="flex gap-6 mb-3 p-4 border rounded bg-gray-50">
                {isEditing ? (
                  // EDIT MODE
                  <>
                    <div className="flex-1">
                      <input
                        type="text"
                        value={editEmail}
                        onChange={(e) => setEditEmail(e.target.value)}
                        className="border px-2 py-1 rounded w-full mb-2"
                        placeholder="Email"
                      />
                      <input
                        type="text"
                        value={editPass}
                        onChange={(e) => setEditPass(e.target.value)}
                        className="border px-2 py-1 rounded w-full"
                        placeholder="Password"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => saveEdit(key)}
                        className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
                      >
                        Save
                      </button>
                      <button
                        onClick={cancelEdit}
                        className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm"
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  // VIEW MODE
                  <>
                    <div className="flex-1">
                      <div className="mb-1">
                        <strong>Email:</strong> {user.email}
                      </div>
                      <div>
                        <strong>Password:</strong> {user.password}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        ID: {key}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => startEdit(key, user.email, user.password)}
                        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteData(key)}
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            )
          })
        ): (
          <p>No users found</p>
        )}
      </div>
    </div>
  )

}


export default App
