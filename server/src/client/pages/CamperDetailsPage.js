import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCamperDetails } from '../actions';
import List from '../components/List';
import Image from '../components/Image';

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
    const mainImg = camperData.CamperMedia.Pictures[0].Url;
    if (camperData) {
      return (
        <div>
          <Image mainImg={mainImg} />
          <List camperData={camperData} />
        </div>
      );
    }
    return null;
  }

  render() {
    return <div>{this.renderCamperDetails()}</div>;
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
