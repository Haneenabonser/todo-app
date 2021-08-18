import React, { useState } from 'react';


export const ListContext = React.createContext();

export default function List(props) {
    const [list, setList] = useState([
        { _id: 1, complete: false, text: 'Do Homeworks', difficulty: 4, assignee: 'Haneen' },
        { _id: 2, complete: false, text: 'study for mock intreview', difficulty: 5, assignee: 'Haneen' },
        { _id: 3, complete: false, text: 'clean rooms', difficulty: 3, assignee: 'Areej' },
        { _id: 4, complete: false, text: 'workout', difficulty: 3, assignee: 'Areej' },
        { _id: 5, complete: true, text: 'clean the kitchen', difficulty: 3, assignee: 'Aya' },
        { _id: 6, complete: true, text: 'fix the light', difficulty: 2, assignee: 'Nasser' },

    ]);

    function add(item) {
        item._id = Math.random();
        item.complete = false;
        setList([...list, item]);
    }
    function toggleComplete(id) {
        let item = list.filter(i => i._id === id)[0] || {};
        if (item._id) {
            item.complete = !item.complete;
            let modified = list.map(listItem => listItem._id === item._id ? item : listItem);
            setList(modified);
        }
    };

    return (
        <ListContext.Provider value={{ list, add,toggleComplete }}>
            {props.children}
        </ListContext.Provider>
    );
}