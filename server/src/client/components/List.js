import React from 'react';
import PropTypes from 'prop-types';

const List = ({ camperData }) => (
  <div className="col-md-4">
    <h3 className="my-3">Camper Details</h3>
    <ul>
      <li>{`Type: ${camperData.CamperBasics.BuildType}`}</li>
      <li>{`Length: ${camperData.CamperBasics.Length}`}</li>
      <li>{`Width: ${camperData.CamperBasics.Width}`}</li>
      <li>{`Height: ${camperData.CamperBasics.Height}`}</li>
    </ul>
  </div>
);

List.propTypes = {
  camperData: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default List;
