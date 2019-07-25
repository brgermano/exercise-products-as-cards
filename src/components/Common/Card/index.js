import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { uniqueId, map } from 'lodash';
import { Link } from 'react-router-dom';

const Card = props => {
  const {
    cardInfo: { id, title, created, description, params, city_label, img }, // eslint-disable-line
    type
  } = props;
  const city = city_label; // eslint-disable-line
  const paramsList = map(params, param => (
    <li key={uniqueId('afnpro- test-params')}>
      <span>{param[0]}:</span> <span>{param[1]}</span>
    </li>
  ));
  return (
    <div className="afnpro-card col s12 m6 l4">
      <div className="card">
        <div className="card-image">
          <img className={img || 'afnpro-card-opacity'} src={img || 'images/placeholder-images.png'} alt="product featured" />
          {type === 'list' && (
            <Link to={`/list/${id}`}>
              <button type="button" className="btn-floating halfway-fab waves-effect waves-light red">
                <i className="material-icons">add</i>
              </button>
            </Link>
          )}
        </div>
        <div className="card-content">
          {type === 'list' ? <span className="card-title truncate">{title}</span> : <h1 className="card-title">{title}</h1>}
          <p>
            {created} - {city}
          </p>
          <br />
          {type === 'detail' && (
            <Fragment>
              <p>{description}</p>
              <div>
                <ul className="afnpro- list-detail">{paramsList}</ul>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  type: PropTypes.string,
  params: PropTypes.arrayOf(PropTypes.shape)
};
Card.defaultProps = {
  type: 'list',
  params: []
};
