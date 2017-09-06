import { Component } from 'react';
import PropTypes from 'prop-types';
import amplitude from './scripts/amplitude';

/* eslint-disable class-methods-use-this */
class Amplitude extends Component {
  componentDidMount() {
    if (!window.amplitude) {
      amplitude(window, document);
      window.amplitude.getInstance().init(this.props.apiKey);
    }
  }

  render() {
    return null;
  }
}

Amplitude.propTypes = {
  apiKey: PropTypes.string.isRequired
};

export default Amplitude;
