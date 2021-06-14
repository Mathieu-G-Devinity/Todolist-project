import React from 'react';
// on importe PropTypes depuis la bibliothèque prop-types
// pour pouvoir valider le types des props de notre composant
import PropTypes from 'prop-types';

import './taskslist.scss';

const Task = ({tasksLabel}) => (
  <li className="currencies__list">
    <label className="list-item">
      <input type="checkbox" />
      {tasksLabel}
    </label>
  </li>
);

export default Task;
