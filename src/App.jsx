import React from 'react';
import './App.css';
import UserList from './components/UserList'
import CreateUserForm from './components/CreateUserForm'
import UserTable from './components/UserTable'
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
  
  this.state={users:[]}    
  this.addUser = this.addUser.bind(this);
  }

  componentDidMount(){
    //  axios.get('https://my-json-server.typicode.com/Tao2013/fakeJsonAPI')
    axios.get("http://localhost:3001/users")  
    .then(response => this.setState({users: response.data}))
      .catch(() => console.log("Could not get token"))
    };

  addUser(user){
    axios.post('http://localhost:3001/users', {
      "firstName": user.firstName,
      "lastName":user.lastName
    })
      .then(res => this.setState({ users: [...this.state.users, res.data] }));
  }

  render() {
    return(
    <div>
      <header className="App-header">
        <h1>Dynamic List Example</h1>    
      </header>
      <body className="App-body">

      <UserList users={this.state.users}/>
      <UserTable users={this.state.users}/>
      <CreateUserForm addUser={this.addUser}/>
      
      </body>
    </div>
    )
  };
}

export default App;
