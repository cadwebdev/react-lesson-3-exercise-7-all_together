import React from 'react'

const UserListItem = (props) => {
  return (
    <li>
      {props.userName} played {props.showGamesPlayed ? props.numberGames : '*'}{' '}
      games
    </li>
  )
}

export default UserListItem
