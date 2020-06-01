import React from 'react'

const UserListItem = (props) => {
  return (
    <li>
      {props.userName} played {props.numberGames} games
    </li>
  )
}

export default UserListItem
