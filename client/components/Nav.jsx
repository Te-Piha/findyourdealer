import React from 'react'

class Nav extends React.Component {
  render () {
    return (
      <>
      <section className="hero is-success">
        <div className="hero-head ">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item">
                  <img src="/images/weed.png" alt="Logo"/>
                </a>
                <span className="navbar-burger burger" data-target="navbarMenuHeroB">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroB" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item" href='/#/'>
              Home
                  </a>
                  <a className="navbar-item" href='/#/map'>
              Map
                  </a>
                  {/* <a className="navbar-item">
              Documentation
                  </a> */}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
      </>
    )
  }
}
export default Nav
