import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserAdd extends Component {
  state = {
    firstName: '',
    lastName: '',
    userName: '',
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
    this.props.users.forEach((element) => {
      if (element.userName === this.state.userName) {
        notUnique = true
      }
    })
    return notUnique
  }

  addUser = (event) => {
    event.preventDefault()
    this.props.handleAddUser(
      this.state.firstName,
      this.state.lastName,
      this.state.userName
    )
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

        <button class="smallButton" disabled={this.addButtonIsDisabled()}>
          add
        </button>
        {this.usernameIsNotUnique() ? (
          <p className="error">You cannot add a user that already exists.</p>
        ) : (
          ''
        )}
      </form>
    )
  }
}

UserAdd.propTypes = {
  users: PropTypes.array.isRequired,
  handleAddUser: PropTypes.func.isRequired,
}

export default UserAdd
