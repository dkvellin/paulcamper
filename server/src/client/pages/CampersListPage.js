import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchCampers } from '../actions';
import DetailsCard from '../components/DetailsCard';

class CampersList extends Component {
  componentDidMount() {
    const {
      fetchCampers: fetchCampersList,
      match: {
        params: { id },
      },
    } = this.props;
    fetchCampersList(id);
  }

  // eslint-disable-next-line class-methods-use-this
  head() {
    return (
      <Helmet>
        <title>List of Campers from Paul Camper</title>
        <meta property="og:title" content="List of Campers from Paul Camper" />
      </Helmet>
    );
  }

  renderCampers() {
    const {
      campers: { Data },
    } = this.props;
    if (Data) {
      return Data.map((camper) => (
        <DetailsCard key={camper.Profile.ID} camper={camper} />
      ));
    }
    return null;
  }

  render() {
    return (
      <div className="row">
        {this.head()}
        {this.renderCampers()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { campers: state.campers };
}

function loadData(store) {
  return store.dispatch(fetchCampers());
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchCampers })(CampersList),
};

CampersList.propTypes = {
  fetchCampers: PropTypes.func.isRequired,
  campers: PropTypes.oneOfType([PropTypes.object]).isRequired,
  match: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
