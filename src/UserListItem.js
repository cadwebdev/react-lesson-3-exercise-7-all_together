import React from 'react'
import PropTypes from 'prop-types'

const UserListItem = (props) => {
  return (
    <li>
      {props.userName} played {props.showGamesPlayed ? props.numberGames : '*'}{' '}
      games
    </li>
  )
}

UserListItem.propTypes = {
  userName: PropTypes.string.isRequired,
  numberGames: PropTypes.number.isRequired,
  showGamesPlayed: PropTypes.bool.isRequired,
}

export default UserListItem
