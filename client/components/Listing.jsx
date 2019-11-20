import React from 'react'
import User from './User'

class ListItem extends React.Component {
  render () {
    return (

      <ul>
        {this.props.users.map((user, i) => (
          <User key={i} user={user} />)
        )}
      </ul>

    )
  }
}
export default ListItem
