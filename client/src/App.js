import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import './App.css'
import axios from 'axios';
// import Register from './components/Register';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
    // eslint-disable-next-line no-unused-vars
    const [data, setData] = useState({
        TodoList
    });
    
    // const [view, setView] = useState({
    //     view: 'register'
    // })

    useEffect(() => {
        axios.get('http://localhost:1340/todos')
            .then(result => {
                console.log(result);
                const allTodos = result.data
                setData(allTodos);
                console.log("second", allTodos)
            })
            .catch(err => {
                console.error(err);
            })
    }, []);
    
    

    return (
        <div className='todo-app'>
            <TodoList />
            {/* <Register /> */}
            {/* <BrowserRouter>
                <Switch>
                    <Route  path="/" component={Register} />
                    <Route  path="/todo-list" component={TodoList} />
                </Switch>
            </BrowserRouter> */}
        </div>
    )
}

export default App;
