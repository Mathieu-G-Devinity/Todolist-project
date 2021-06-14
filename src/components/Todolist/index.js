// == Import npm
import render from 'dom-serializer';
import React from 'react';

import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import TasksList from 'src/components/TasksList';

import tasksData from 'src/data/tasks';
// == Import

import './styles.css';

// == Composant
class Todolist extends React.Component {
  // on définit la propriété state (on pourra y accéder avec this.state)
  state = {
    // nombre de tasks effectuées
    doneTasks: "",
    // On charge toutes les tâches
    allTasks: {tasksData},
  }

  getAllDoneTasks = () => {
    const numberDoneTask = tasksData.find(taskData => taskData.done === true);
  }



render() {
  const {
    doneTasks, allTasks,
  } = this.state;
  const numberDoneTask = tasksData.find(taskData => taskData.done === true);
  const result = numberDoneTask.length;

  console.log(result);

  return (
    
    <div className="todolist">

    <Form/>

    <Counter doneTasks = {doneTasks}/>

    <TasksList tasksList={allTasks.tasksData}/>

    </div>
  )
}

}

// == Export
export default Todolist;
