import React from 'react';
// on importe PropTypes depuis la bibliothèque prop-types
// pour pouvoir valider le types des props de notre composant
import PropTypes from 'prop-types';

import './counter.scss';

const Counter = ({doneTasks}) => (
  <p className="counter">{doneTasks} tâches en cours</p>
);

export default Counter;
