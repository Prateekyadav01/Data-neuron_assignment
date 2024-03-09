import React, { useEffect ,useState} from 'react'
import axios from 'axios'
const Table = () => {
    const [data, setData] =useState([])
    const handleEdit =()=>{
        console.log('edit')
    }
    useEffect(()=>{
        axios.get('http://localhost:3000/user')
        .then((response) => 
        setData(response.data))
        .catch((error) =>console.log(error));
    })
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
            {
                data.map((user, index)=>{
                    return(
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={handleEdit}>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default Table
