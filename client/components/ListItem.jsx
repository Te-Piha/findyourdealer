import React from 'react'

class ListItem extends React.Component {
  render () {
    return (
<>
{console.log(this.props.users)}
<div >
  <h1>map through array</h1>
  {this.props.users.map((user, i) => {
<User />
  })}
  {/*
  <p > {this.props.users.user.firstName}</p>
  <p > {this.props.item.strainType}</p>
  <p > {this.props.item.cost}</p>
  <p > {this.props.item.description}</p> */}
</div>
</>
    )
  }
}
export default ListItem
