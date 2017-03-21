import gtmParts from 'react-google-tag-manager';
import React, { Component, PropTypes } from 'react';

class GoogleTagManager extends Component {
  componentDidMount() {
    if (!window[this.props.dataLayerName]) {
      eval(this.scriptEl.textContent); // eslint-disable-line no-eval
    }
  }

  render() {
    const { id, dataLayerName, additionalEvents } = this.props;
    const gtm = gtmParts({ id, dataLayerName, additionalEvents });

    return (
      <div>
        {gtm.noScriptAsReact()}
        <div ref={c => { this.scriptEl = c; }}>
          {gtm.scriptAsReact()}
        </div>
      </div>
    );
  }
}

GoogleTagManager.defaultProps = {
  additionalEvents: {},
  dataLayerName: 'dataLayer'
};

GoogleTagManager.propTypes = {
  id: PropTypes.string.isRequired,
  dataLayerName: PropTypes.string,
  additionalEvents: PropTypes.shape({})
};

export default GoogleTagManager;
