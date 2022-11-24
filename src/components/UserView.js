import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/reduxSlice';

const UserView = () => {
const users = useSelector(state => state.user);
console.log(usersList)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    return (
        <div>
          {
            usersList.map(user=>
            <div key={user.id}>
                <h3>{user.name}</h3>
            </div>)
          }
        </div>
    )
};

export default UserView;