import React from 'react'

function UserTable(props){
    return(
        <div>
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr> 
                {
                    props.users.map(user => (
                        <tr>
                        <td>{user.firstName}</td>
                        
                        <td>{user.lastName}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )  
}
export default UserTable;