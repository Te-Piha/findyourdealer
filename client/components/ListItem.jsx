import React from 'react'

class ListItem extends React.Component {
  render () {
    return (
<>
<div >
  <p > {this.props.item.name}</p>
  <p > {this.props.item.country}</p>
  <p > A {this.props.item.style} from {this.props.item.brewery}</p>
  <p > {this.props.item.abv} abv</p>
</div>
</>
    )
  }
}
export default ListItem
