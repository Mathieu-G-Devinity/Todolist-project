import React from 'react';
// on importe PropTypes depuis la bibliothèque prop-types
// pour pouvoir valider le types des props de notre composant
import PropTypes from 'prop-types';

import './form.scss';

const Form = () => (
  <form className="form">
    <input type="text" className="form-item" placeholder="Ajouter une tâche"/>
  </form> 
);

export default Form;
