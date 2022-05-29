import React, { useEffect } from 'react';
import { Table } from 'antd';
import { useAppSelector, useAppDispatch } from '../../state-manager/hooks';
import { getUsersAsync, selectUsers } from '../../state-manager/users/usersSlice';

interface IUserList {
    datasource: any[];

}
const UsersList: React.FC <IUserList>= ({datasource}) => {



    const columns = [
        {
            title: 'User ID',
            dataIndex: 'userId',
            key: 'userId',
        },
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
    ];
    return (
        <div>
            <Table dataSource={datasource} columns={columns} />
        </div>
    )
}

export default UsersList