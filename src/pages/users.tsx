import React, { useEffect } from 'react'
import UsersList from '../components/users'
import { useAppSelector, useAppDispatch } from '../state-manager/hooks';
import { getUsersAsync, selectUsers } from '../state-manager/users/usersSlice';

const Users: React.FC = () => {

    const dispatch = useAppDispatch();



    useEffect(() => {
        dispatch(getUsersAsync());
    }, [])

    const users = useAppSelector(selectUsers);

    const datasource = users.map(user => {
        return {
            ...user, key: user.userId
        }
    })
    return (
        <div>
            <h2 >SYSTEM USERS</h2>
            <p >Total Users: {users.length}</p>
            <UsersList datasource = {datasource} />
        </div>
    )
}

export default Users