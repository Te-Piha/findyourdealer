import React from 'react'

class User extends React.Component {
  render () {
    return (
<>
<br />
<div className="tile is-ancestor">
  <div className="tile is-vertical">
    <div className="tile">
      <div className="tile is-parent is-vertical">
        <article className="tile is-child notification is-success">
          <div className="columns">
            <div className="column">
              <p className="title is-1">{this.props.user.firstName} {this.props.user.lastName}</p>
              <p className="subtitle is-4"> <b>Strain:</b> {this.props.user.strainType}</p>
              <p className="subtitle is-4"><b>Monies:</b> {this.props.user.cost}</p>
              <p className="subtitle is-4"><b>Strain Name:</b> {this.props.user.description}</p>
            </div>
            <div className="column is-narrow is-desktop is-vcentered">
              <img src={this.props.user.photo} />
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</div>

</>
    )
  }
}
export default User
