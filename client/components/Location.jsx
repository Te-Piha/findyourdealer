import React from 'react'

class Location extends React.Component {
  render () {
    return (
      <React.Fragment>

        <div className="hero-body">

          <div className="column">  </div>
          <div className="column is-two-thirds">
            <div className="container has-text-centered">
              <div className="box is-fluid is-square">

                <div className="field has-addons">
                  <div className="control is-expanded">
                    <input className="input" type="text" placeholder="Location"/>
                  </div>
                  <div className="control">
                    <a className="button is-success" href='/#/map'>Search</a>
                  </div>
                </div>
                <p className="help">Search the area you are looking</p>

              </div>
            </div>
          </div>
          <div className="column"></div>
        </div>
      </React.Fragment>
    )
  }
}
export default Location
