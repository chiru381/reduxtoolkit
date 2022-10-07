import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, addUserData, deleteUser, deleteUserData, getUser, getUserData, updateUser, updateUserData } from '../redux/userSlice';

export default function Users() {
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const { data } = useSelector((store) => store.users);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Users Data:</h1>
      {data.length > 0 && data.map((user, index) => (
        <p key={index}>{user.name}
          <button onClick={() => {
            setUserId(user.id);
            setName(user.name);
          }}>Edit</button>
          <button onClick={() => dispatch(deleteUserData(user.id))}>Delete</button></p>
      ))}
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <button onClick={() => {
        if (userId) {
          dispatch(updateUserData({ id: userId, name }));
          setName("");
          setUserId("")
        } else {
          dispatch(addUserData({ name }));
          setName("")
        }
      }
      }>{userId ? "Update" : "Save"}</button>

      <button onClick={() => dispatch(getUserData())}>Get Users</button>
    </div>
  )
}
