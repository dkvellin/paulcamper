import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCampers } from '../actions';

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

  renderCampers() {
    const {
      campers: { Data },
    } = this.props;
    if (Data) {
      return Data.map((camper) => (
        <Link key={camper.Profile.ID} to={`/camper/${camper.Profile.ID}`}>
          <li>{camper.Profile.Name}</li>
        </Link>
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
