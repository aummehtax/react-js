// Axios – a promise-based library to make HTTP requests (like fetch, but easier)

// GET – retrieve data from the server
// POST – send new data to the server
// PUT – completely replace existing data on the server
// DELETE – remove data from the server
// PATCH – partially update existing data on the server


import axios from "axios"
import { useEffect , useState } from "react"

function App() {

  let [allData, setData] = useState([])

//get
  const fetchData = async () => {
      try {
        let response = await axios.get(`http://localhost:3000/users`)
        setData(response.data) 
      } catch (error) {
        console.log("Error fetching data", error)
      }
  }

  useEffect(() => {
    fetchData()
  },[])

//post   
  const doPost = async () => {
      try {
        await axios.post(`http://localhost:3000/users`, {
          name: "hello duniya",
          email: "haha@example.com"
        })
    
        fetchData() //doPost & fetchData or (read data)

      } catch (error) {
        console.log("Error in POST", error)
      }
    }

// put   
const doPut = async () => {
  try {

    if (allData.length === 0) {
      return alert("No users to update");
    }

    const target = allData[allData.length - 1];

    await axios.put(`http://localhost:3000/users/${target.id}`, {
      name: "Updated name",
      email: "updated@email.com"
    });

    fetchData();

  } catch (error) {
    console.log("Error in PUT", error);
  }
};

// delete   
const doDelete = async () => {
  try {

     if (allData.length === 0) {
      return alert("No users to delete");
    }

    const target = allData[allData.length - 1];

    await axios.delete(`http://localhost:3000/users/${target.id}`)

    fetchData();

  } catch (error) {
    console.log("Error in DELETE", error);
  }
};

// patch   
const doPatch = async () => {
  try {

     if (allData.length === 0) {
      return alert("No users to patch");
    }

    const target = allData[allData.length - 1];

    await axios.patch(`http://localhost:3000/users/${target.id}`, {
      name: "Updated name (patch)",
    });


    fetchData();

  } catch (error) {
    console.log("Error in PATCH", error);
  }
};




console.log(allData);

  return (
     <div>
    
      {allData.map((ele, id) => (
        <div key={id}>
          <div>name : {ele.name}</div>
          <div>email : {ele.email}</div>
          <br />
        </div>
      ))}

      <button onClick={doPost}>Add users (post)</button>
      <button onClick={doPut}>update item (put)</button>
      <button onClick={doDelete}>Delete item (delete)</button>
      <button onClick={doPatch}>replace item (patch)</button>

    </div>

    
  )
}

export default App
