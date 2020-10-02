import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCamperDetails } from '../actions';

class CamperDetails extends Component {
  componentDidMount() {
    const {
      match: {
        params: { id: camperId },
      },
    } = this.props;
    const { fetchCamperDetails: fetchCamperInfo } = this.props;
    fetchCamperInfo(camperId);
  }

  renderCamperDetails() {
    const { camperData } = this.props;
    if (camperData) {
      return <div>{camperData.ID}</div>;
    }
    return null;
  }

  render() {
    return (
      <div>
        List of Campers
        <ul>{this.renderCamperDetails()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { camperData: state.camperData };
}

function loadData(store, path) {
  const camperId = path.split('/').pop();
  return store.dispatch(fetchCamperDetails(camperId));
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchCamperDetails })(CamperDetails),
};

CamperDetails.propTypes = {
  fetchCamperDetails: PropTypes.func.isRequired,
  match: PropTypes.oneOfType([PropTypes.object]).isRequired,
  camperData: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
