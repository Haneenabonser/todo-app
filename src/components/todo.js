import React, { useState,useEffect,useContext } from 'react';
import TodoForm from '../hooks/form';
import TodoList from './list.js';
import { ListContext } from '../context/ListContext';
import './todo.scss';
import Header from './Header';

function ToDo(props) {

  const listContext = useContext(ListContext);
  const [state, setState] = useState([])

  useEffect(()=>{
    let list = [
      { _id: 1, complete: false, text: 'Do Homeworks', difficulty: 4, assignee: 'Haneen' },
      { _id: 2, complete: false, text: 'study for mock intreview', difficulty: 5, assignee: 'Haneen' },
      { _id: 3, complete: false, text: 'clean rooms', difficulty: 3, assignee: 'Areej' },
      { _id: 4, complete: false, text: 'workout', difficulty: 3, assignee: 'Areej' },
      { _id: 5, complete: true, text: 'clean the kitchen', difficulty: 3, assignee: 'Aya' },
      { _id: 6, complete: true, text: 'fix the light', difficulty: 2, assignee: 'Nasser' },

    ];
    
    setState(list);
  },[])
  

  return (
    <>
        <Header/>
        <h2 className="title">
          To Do List Manager ({listContext.list.filter(item => !item.complete).length})
        </h2>
    

      <section className="todo">
    

        <div>
          <TodoForm

            />
        </div>

        <div>
          <TodoList
            list={state}

          />
        </div>
      </section>
    </>
  );
}


export default ToDo;