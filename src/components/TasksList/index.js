import React from 'react';
// on importe PropTypes depuis la bibliothèque prop-types
// pour pouvoir valider le types des props de notre composant
import PropTypes from 'prop-types';
import Task from './Task';

import './taskslist.scss';

const Taskslist = ({tasksList}) => (
  <ul className="list">
        {tasksList.map(
      (task) => <Task key={task.label} {...task} tasksLabel={task.label}/>,
    )}
  </ul>
);

export default Taskslist;
