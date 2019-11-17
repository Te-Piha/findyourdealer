import React from 'react'
// // import { Button } from 'react-bulma-components/dist'
// import { Navbar } from 'react-bulma-components/dist'

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
                  <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo"/>
                </a>
                <span className="navbar-burger burger" data-target="navbarMenuHeroB">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroB" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item is-active">
              Home
                  </a>
                  <a className="navbar-item">
              Examples
                  </a>
                  <a className="navbar-item">
              Documentation
                  </a>
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
