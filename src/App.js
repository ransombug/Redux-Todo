import React from 'react'
import {Container} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


// Import Components
import Todo from './Components/Todo'
import TodoForm from './Components/TodoForm'

// Import Redux
import {Provider} from 'react-redux';
import Store from './Central Store/Store'

function App() {
  return (
    <Provider store={Store}>
      <Container>
        <Todo></Todo>
        <TodoForm></TodoForm>
      </Container>
    </Provider>
  );
}

export default App;
