import React, { Component } from 'react';
import TodoPublicList from './TodoPublicList';
import TodoInput from './TodoInput';
import TodoPublicFilters from './TodoPublicFilters';
import '../App.css';

class TodoPublicWrapper extends Component {
  render() {
    const userId = localStorage.getItem('auth0:id_token:sub');
    return (
      <div className="todoWrapper">
        <TodoInput userId={userId} type="public" />
        <TodoPublicList userId={userId} type="public" />
        <TodoPublicFilters />
      </div>
    );
  }
}

export default TodoPublicWrapper;
