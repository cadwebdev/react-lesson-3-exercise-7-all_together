import React, { Component } from 'react'
class UserAdd extends Component {
  state = {
    firstName: '',
    lastName: '',
    userName: '',
    addedUser: [],
  }

  handleChangeFirstName = (event) => {
    this.setState({ firstName: event.target.value.trim() })
  }

  handleChangeLastName = (event) => {
    this.setState({ lastName: event.target.value.trim() })
  }

  handleChangeUserName = (event) => {
    this.setState({ userName: event.target.value.trim() })
  }

  addButtonIsDisabled = () => {
    return this.userInputIsEmpty() || this.usernameIsNotUnique()
  }

  userInputIsEmpty = () => {
    return (
      this.state.firstName === '' ||
      this.state.lastName === '' ||
      this.state.userName === ''
    )
  }

  usernameIsNotUnique = () => {
    let notUnique = false
    this.state.addedUser.forEach((element) => {
      if (element.userName === this.state.userName) {
        notUnique = true
      }
    })
    return notUnique
  }

  addUser = (event) => {
    event.preventDefault()
    this.state.addedUser.push({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      userName: this.state.userName,
    })
    this.setState({ firstName: '', lastName: '', userName: '' })
  }

  render() {
    return (
      <form onSubmit={this.addUser}>
        <input
          type="text"
          placeholder="first name"
          value={this.state.firstName}
          onChange={this.handleChangeFirstName}
        />

        <input
          type="text"
          placeholder="last name"
          value={this.state.lastName}
          onChange={this.handleChangeLastName}
        />

        <input
          type="text"
          placeholder="username"
          value={this.state.userName}
          onChange={this.handleChangeUserName}
        />

        <button disabled={this.addButtonIsDisabled()}>add</button>
      </form>
    )
  }
}

export default UserAdd
