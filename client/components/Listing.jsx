import React from 'react'
import { getUsers } from '../api/index'
import ListItem from './ListItem'

class Listing extends React.Component {
  state = {
    users: []
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
            <ListItem users={this.state.users}/>
          </ul>
        </section>
      </React.Fragment>
    )
  }
}
export default Listing
