import axios from 'axios';

export const FETCH_CAMPERS = 'fetch_campers';
export const fetchCampers = () => async (dispatch) => {
  const res = await axios.get(
    'https://stage.paulcamper.com/api/inventory/search?center_lat=52.504043&center_lng=13.393236&page_size=24'
  );
  dispatch({
    type: FETCH_CAMPERS,
    payload: res,
  });
};

export const FETCH_CAMPER_DETAILS = 'fetch_camper_details';
export const fetchCamperDetails = (id) => async (dispatch) => {
  const camperDetailsApiUrl = `https://stage.paulcamper.com/api/inventory/public/campers/${id}/profile`;
  const res = await axios.get(camperDetailsApiUrl);
  dispatch({
    type: FETCH_CAMPER_DETAILS,
    payload: res,
  });
};
