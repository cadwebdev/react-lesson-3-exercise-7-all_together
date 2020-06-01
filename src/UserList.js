import React from 'react'
import UserListItem from './UserListItem'

const UserList = (props) => {
  const users = props.users
  return (
    <div>
      <p>Players</p>
      <ol>
        {users.map((user, index) => (
          <UserListItem
            key={index}
            userName={user.userName}
            numberGames={user.numberGames}
          />
        ))}
      </ol>
    </div>
  )
}

export default UserList
