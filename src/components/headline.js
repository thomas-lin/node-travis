import React, { PropTypes, Component } from 'react'

class Headline extends Component {

  render() {
    return (
      <h1>{ this.props.text }</h1>
    )
  }
}

Headline.propTypes = {
  text: PropTypes.string.isRequired
}

export default Headline
