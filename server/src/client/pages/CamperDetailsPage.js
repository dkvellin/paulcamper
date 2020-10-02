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
    const mainImg = camperData.CamperMedia.Pictures[0].Url;
    if (camperData) {
      return (
        <div>
          <div className="row">
            <div className="col-md-8">
              <img
                className="img-fluid"
                src={
                  mainImg
                    ? `https://stage.paulcamper.com/images/w_768,c_limit,q_auto${mainImg}.jpg`
                    : '#'
                }
                alt=""
              />
            </div>
          </div>

          <div className="col-md-4">
            <h3 className="my-3">Camper Details</h3>
            <ul>
              <li>{`Type: ${camperData.CamperBasics.BuildType}`}</li>
              <li>{`Length: ${camperData.CamperBasics.Length}`}</li>
              <li>{`Width: ${camperData.CamperBasics.Width}`}</li>
              <li>{`Height: ${camperData.CamperBasics.Height}`}</li>
            </ul>
          </div>
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
