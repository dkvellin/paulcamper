import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import OwnerInfo from './OwnerInfo';
import Review from './Review';
import Pricing from './Pricing';

const DetailsCard = ({ camper }) => (
  <div className="col-sm" style={{ marginBottom: 40 }}>
    <Link to={`/camper/${camper.Profile.ID}`}>
      <div className="card" style={{ width: '350px' }}>
        <img
          src={`https://stage.paulcamper.com/images/w_768,c_limit,q_auto${camper.Profile.Pictures[0].CloudinaryID}.jpg`}
          className="card-img-top"
          alt="..."
          style={{ width: 'auto', height: '250px', objectFit: 'cover' }}
        />
        <div
          className="card-body"
          style={{ minHeight: '220px', color: '#000' }}
        >
          <h5 className="card-title" style={{ marginBottom: '5px' }}>
            {`${camper.Profile.CamperType} - ${camper.Profile.Name}`}
          </h5>
          <h6
            className="card-title"
            style={{
              fontWeight: 'normal',
              borderBottom: '1px solid',
              paddingBottom: 16,
            }}
          >
            <i>{camper.Profile.City}</i>
          </h6>
          <div className="d-flex flex-row">
            <div style={{ width: '50%', marginBottom: 12 }}>
              {`Rank: ${camper.Rank}`}
            </div>
            <div style={{ width: '50%', textAlign: 'right' }}>
              <Pricing price={camper.PricePerDayFrom} />
            </div>
          </div>
          <div className="d-flex flex-row">
            <div style={{ width: '50%' }}>
              <OwnerInfo
                name={camper.Profile.OwnerName}
                pic={camper.Profile.OwnerPicture}
              />
            </div>
            <div style={{ width: '50%', textAlign: 'right' }}>
              <Review />
            </div>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

DetailsCard.propTypes = {
  camper: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default DetailsCard;
