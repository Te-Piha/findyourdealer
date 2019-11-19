import React from 'react'
import { getUsers } from '../api/index'
import ListItem from './ListItem'

class Listing extends React.Component {
  state = {
    users: ''
  }

  componentDidMount () {
    this.fetchPosts()
  }

  fetchPosts () {
    return getUsers()
      .then(users => {
        this.setState({ users: users })
      })
      .catch(err => {
        this.setState({ errorMessage: err.message })
      })
  }

  render () {
    return (
      <React.Fragment>
        <section>
          <ul>
            {this.state.users.map((user, i) => {
              <ListItem key={i} item={user}/>
            })}
          </ul>
          <p> please map through the list for a clickable list that wil then go to a new page</p>

        </section>
      </React.Fragment>
    )
  }
}
export default Listing
