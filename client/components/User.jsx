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
        <article className="tile is-child notification is-warning">
          <div className="columns">
            <div className="column">
              <p className="title">{this.props.user.firstName}</p>
              <p className="subtitle">{this.props.user.strainType}</p>
              <p className="subtitle">{this.props.user.cost}</p>
              <p className="subtitle">{this.props.user.description}</p>
            </div>
            <div className="column">
              <figure className="media-right">
                <p className="image is-120x120">
                  <img src="images/Aacinda-Jrdern.jpeg"/>
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
