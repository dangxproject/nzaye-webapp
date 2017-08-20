import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Header from '../components/header';
import Footer from '../components/footer';

const TemplateWrapper = ({ children }) =>
  <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <Helmet
      title="NZ, aye!"
      meta={[
        { name: 'description', content: 'News around New Zealand from various sources' },
        { name: 'keywords', content: 'news, nz, New Zealand, feed, rss' },
        { name: 'theme-color', content: '#000000'},
      ]}
      link={[
          { type: "text/css", rel:"stylesheet", href:"https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en" },
          { type: "text/css", rel:"stylesheet", href:"https://fonts.googleapis.com/icon?family=Material+Icons" },
          { type: "text/css", rel:"stylesheet", href:"https://fonts.googleapis.com/css?family=Special+Elite"},
          { type: "text/css", rel:"stylesheet", href:"https://code.getmdl.io/1.3.0/material.min.css"},
          { type: "text/css", rel:"stylesheet", href:"/style.css"}
      ]}
      style={[
        //   { cssText: `{customStyles}` }
      ]}
    />
    <Header />
    {children()}
    <Footer />
    <script src="https://code.getmdl.io/1.3.0/material.min.js"></script>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
