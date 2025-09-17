import { useContext } from "react"
import { contextData } from "./App"
import { useNavigate } from "react-router-dom"
import { auth } from "./firebase/FirebaseConfig"
import { signInWithEmailAndPassword } from "firebase/auth"

const Login = () => {
  let { data, setData } = useContext(contextData)
  let navigate = useNavigate()

  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, data.email, data.pass)
      .then(res => {
        console.log("Logged in:", res.user)
        alert("Login success ✅")
      })
      .catch(err => alert("Login failed: " + err.message))
  }

  return (
    <div className="flex justify-center items-center h-screen">
     <div className="flex  flex-col gap-5">
      <input type="email" placeholder="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} className="border rounded-2xl w-80 p-3"/>
      <input type="text" placeholder="password" value={data.pass} onChange={(e) => setData({ ...data, pass: e.target.value })} className="border rounded-2xl w-80 p-3"/>
      <div className="flex gap-3">
        <button onClick={handleSubmit} className="p-2 px-4 border rounded-2xl cursor-pointer">login</button>
        <button onClick={() => navigate("/signup")} className="p-2 px-4 border rounded-2xl cursor-pointer">signup</button>
      </div>
     </div>
    </div>
  )
}

export default Login
