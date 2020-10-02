import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCampers } from '../actions';

class CampersList extends Component {
  componentDidMount() {
    const { fetchCampers: fetchCampersList } = this.props;
    fetchCampersList();
  }

  renderCampers() {
    const {
      campers: { Data },
    } = this.props;
    if (Data) {
      return Data.map((camper) => (
        <li key={camper.Profile.ID}>{camper.Profile.Name}</li>
      ));
    }
    return null;
  }

  render() {
    return (
      <div>
        List of Campers
        <ul>{this.renderCampers()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { campers: state.campers };
}

export default connect(mapStateToProps, { fetchCampers })(CampersList);

CampersList.propTypes = {
  fetchCampers: PropTypes.func.isRequired,
  campers: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
