import axios from 'axios';

export const FETCH_CAMPERS = 'fetch_campers';
export const fetchCampers = () => async (dispatch) => {
  const res = await axios.get(
    'https://stage.paulcamper.com/api/inventory/search?center_lat=52.504043&center_lng=13.393236&page_size=24'
  );
  console.log('fetch_campers', FETCH_CAMPERS);
  dispatch({
    type: FETCH_CAMPERS,
    payload: res,
  });
};
