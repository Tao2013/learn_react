import React from 'react'

export default class CreateUserForm extends React.Component{
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit = e =>{
        let user = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value};
        this.props.addUser(user);
    }

    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <label>First Name</label> 
                <input type="text" name="firstName"/>

                <label>Last Name</label>  
                <input type="text" name="lastName"/>  

                <input type="submit" value="Submit"/>
            </form>
        )
    }
}