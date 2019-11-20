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
              <p className="title">{this.props.user.firstName} {this.props.user.lastName}</p>
              <p className="subtitle">Strain: {this.props.user.strainType}</p>
              <p className="subtitle">Monies: {this.props.user.cost}</p>
              <p className="subtitle">Description: {this.props.user.description}</p>
            </div>
            <div className="column is-narrow has-text-centered">
              <figure className="media-right">
                <p >
                  <img src={this.props.user.photo} />
                </p>
              </figure>
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
