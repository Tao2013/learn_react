import React from 'react'

function UserList(props){
    return(
        <div>
            <select id="userList" name="userList">
            {props.users.map(user => (
                <option>{user.firstName} {user.lastName}</option>
            ))};
            </select>
        </div>
    )
}

export default UserList;