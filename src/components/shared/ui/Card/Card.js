import React from 'react';
import PropTypes from 'prop-types';

import CardStyle from './Card.style';
import Spinner from '../Spinner/Spinner';

/**
 * Styled card view
 * @param {object} Object of card styling properties
 */
const Card = ({ children, loading }) => (
  <CardStyle loading={loading}>
    {loading && <Spinner className="card-spinner" size="large" centered />}
    {children}
  </CardStyle>
);

Card.propTypes = {
  /** Card children */
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
};

Card.defaultProps = {
  loading: false,
};

export default Card;
