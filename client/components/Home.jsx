import React from 'react'
import getRandomFact from '../api/foodFact'
import Location from './Location'

class Home extends React.Component {
  state = {
    fact: ''
  }
  componentDidMount () {
    getRandomFact()
      .then(res => {
        this.setState({
          fact: res.body
        })
      })
  }

  render () {
    return (
      <React.Fragment>
        <section className="hero is-dark is-fullheight-with-navbar">
          <div style={{ textAlign: 'center' }}>

            <img src="/images/weed.png" className="has-text-centered"/>
          </div>
          <h1 className="title is-1 has-text-grey has-text-centered">Kākāriki</h1>
          {this.state.fact && <p className='has-text-centered'> Random Fact of the Day: <br/>{this.state.fact.text}</p>}
          <Location />
          <progress className="progress is-small is-primary" max="100">15%</progress>
        </section>
      </React.Fragment>
    )
  }
}
export default Home
