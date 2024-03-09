import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Table = () => {
    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [editId, setEditId] = useState(-1);
    const [updateName, setUpdateName] = useState('');
    const [updateEmail, setUpdateEmail] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3000/user')
            .then((response) =>
            //    console.log('response', response)
               setData(response.data))
               
            .catch((error) => console.log(error));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = data[data.length - 1].id +1;
        axios.post('http://localhost:3000/user', {
            id: id,
            name: name,
            email: email
        })
            .then((response) => location.reload())
            .catch((error) => console.log(error));
    }

    const handleUpdate = () => {
        axios.put('http://localhost:3000/user/' + editId, {
            id: editId,
            name: updateName,
            email: updateEmail
        }).then((response) => {
            location.reload();
            setEditId(-1);
        }).catch(error => console.log(error));

    }

    const handleEdit = (id) => {
        console.log(id)
        axios.get('http://localhost:3000/user/' + id)
            .then((response) => {
                console.log(response);
                setUpdateName(response.data.name);
                setUpdateEmail(response.data.email);
            })
            .catch((error) => console.error(error));
        setEditId(id);
    }

    const handleDelete = (deleteId) => {
        axios.delete('http://localhost:3000/user/' + deleteId)
            .then((response) => location.reload())
            .catch((error) => console.log(error));
    }
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='enter your name' onChange={(e) => {
                        setName(e.target.value);
                    }}></input>
                    <input type='text' placeholder='Enter your email address' onChange={(e) => {
                        setEmail(e.target.value);
                    }}></input>
                    <button type='submit'> ADD</button>
                </form>
            </div>
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
                       data.length!==0 && data.map((user, index) => (
                            
                            user.id === editId ?
                                <tr>
                                    <td>{user.id}</td>
                                    <td><input type='text' value={updateName} onChange={(e) => setUpdateName(e.target.value)}></input></td>
                                    <td><input type='text' value={updateEmail} onChange={(e) => setUpdateEmail(e.target.value)}></input></td>
                                    <td><button onClick={handleUpdate}>Update</button></td>

                                </tr> :
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                       
                                        <button onClick={() => handleEdit(user.id)}>Edit</button>
                                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                                    </td>
                                </tr>

                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table
