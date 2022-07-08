import React from "react";
import UserItem from "./UserItem";
import './UsersList.css';

const UsersList = (props) => {
    if(!props.items.length) {
        return (
            <div className="center">
                <h1>No User Found!</h1>
            </div>
        )
    }
    return (
        <ul className="users-list">
            {props.items.map(user => (
                <UserItem user={user} />
            ))}
        </ul>
    )
}

export default UsersList;