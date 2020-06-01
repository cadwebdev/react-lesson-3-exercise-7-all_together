import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import UserAdd from './UserAdd'
import UserList from './UserList'

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
    users: [],
  }

  createUser = (firstName, lastName, userName) => {
    const user = {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      numberGames: 0,
    }

    return user
  }

  handleAddUser = (firstName, lastName, userName) => {
    const user = this.createUser(firstName, lastName, userName)
    this.setState((currState) => ({
      users: [...currState.users, user],
    }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <UserAdd users={this.state.users} handleAddUser={this.handleAddUser} />
        <UserList users={this.state.users} />
      </div>
    )
  }
}

export default App
