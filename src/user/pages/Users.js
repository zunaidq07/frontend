import React from 'react';
import UsersList from '../components/UsersList'

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Quazi Zunaid',
            image: 'https://media-exp2.licdn.com/dms/image/C5603AQFVNRMCWQ-OsA/profile-displayphoto-shrink_800_800/0/1591766107527?e=1660176000&v=beta&t=hQwiB6hzA87hX338zCsLF8q8R9dlf2LyTVMyhuNmPzo',
            placeCount: 3
        }
    ]
    return (
        <UsersList items={USERS}/>
    );
}

export default Users;