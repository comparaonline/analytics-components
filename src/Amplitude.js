import { Component, PropTypes } from 'react';
import amplitude from './scripts/amplitude';

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
