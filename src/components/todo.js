import React, { useEffect, useState } from 'react';
import Form from './Form';
import List from './List';
import { v4 as uuid } from 'uuid';
import './todo.scss';

const ToDo = () => {
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);

  function addItem(item) {
    let data = {
      id: uuid(),
      text: item.text,
      assignee: item.assignee,
      complete: false,
      difficulty: item.difficulty
    }
    setList([...list, data]);
  }


  function toggleComplete(id) {

    const items = list.map(item => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {
    let incompleteList = list.filter(item => !item.complete).length;
    setIncomplete(incompleteList);
    document.title = `${incomplete}`;
  }, [list]);

  return (
    <>
      <h2 className="title">
        To Do List Manager ({incomplete})
      </h2>
      <section className="todo">
        <div>
          <Form addItem={addItem} />
        </div>
        <div>
          <List list={list} toggleComplete={toggleComplete} />
        </div>
      </section>
    </>
  );
};

export default ToDo;