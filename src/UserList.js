import React, { Component } from 'react'
import UserListItem from './UserListItem'
import PropTypes from 'prop-types'

class UserList extends Component {
  state = {
    showGamesPlayed: true,
  }

  toggleButton = () => {
    this.setState((oldState) => ({
      showGamesPlayed: !oldState.showGamesPlayed,
    }))
  }

  render() {
    const users = this.props.users
    const gamesPlayedButton = (
      <div>
        <p>Players</p>
        <button class="smallButton" onClick={this.toggleButton}>
          {this.state.showGamesPlayed ? 'Hide ' : 'Show '}
          Number of Games Played
        </button>
      </div>
    )
    return (
      <div>
        {users.length > 0 ? gamesPlayedButton : ''}
        <ol>
          {users.map((user, index) => (
            <UserListItem
              key={index}
              userName={user.userName}
              numberGames={user.numberGames}
              showGamesPlayed={this.state.showGamesPlayed}
            />
          ))}
        </ol>
      </div>
    )
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
}

export default UserList
