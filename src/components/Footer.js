import React from 'react'

const Footer = (props) => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="contact-info">Phone: (505) 862-9302</p>
    <p className="copyright">&copy; ParkLnSouth. Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a></p>
  </footer>
)

Footer.propTypes = {
  timeout: React.PropTypes.bool
}

export default Footer
