import React from 'react'

class App extends React.Component {
  state = {
    dog: null
  }

  // componentDidMount () {
  //   // getRandomDog()
  //   //   .then(response => {
  //   //     this.setState({
  //   //       dog: response.body
  //   //     })
  //   //   })

  //   // getRandomFox()
  //   //   .then(response => {
  //   //     this.setState({
  //   //       fox: response.body
  //   //     })
  //   //   })

  //   swapi.getPerson(Math.ceil(Math.random() * 50))
  //     .then(response => {
  //       this.setState({
  //         starWars: response.body
  //       })
  //     })
  // }

  render () {
    return (
      <>
<h1> Lets go! </h1>
      </>
    )
  }
}
export default App
