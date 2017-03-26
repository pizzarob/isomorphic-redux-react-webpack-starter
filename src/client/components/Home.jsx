import React from 'react';
import TodoList from 'Containers/TodoList';

function Home() {
  return (
    <div>
      <h1 style={{ margin: '20px 0 0 0' }}>Redux Server Rendering Starter</h1>
      <h2 style={{ margin: 0, fontWeight: 'lighter' }}>Now With Hot Module Reloading, Redux Sagas, and React Router 4</h2>
      <TodoList />
    </div>
  );
}

export default Home;
