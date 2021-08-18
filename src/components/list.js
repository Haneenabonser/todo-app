import React, { useContext, useEffect, useState } from 'react';
import { ListContext } from '../context/ListContext';
import { SettingContext } from '../context/Context';
import { ListGroup, Card, Button } from 'react-bootstrap';

function TodoList(props) {
    const listContext = useContext(ListContext);
    const settingsContext = useContext(SettingContext);
    const [page, setpage] = useState(0);
    const [list, setList] = useState([]);
    useEffect(() => {
        if (settingsContext.view) {
            setList(listContext.list)
        } else {
            let temp = [];
            temp = listContext.list.filter((item) => {
                if (!item.complete) {
                    return (item);
                }
            })
            setList(temp);
        }
    }, [])
    useEffect(() => {
        if (settingsContext.view) {
            setList(listContext.list)
        } else {
            let temp = [];
            temp = listContext.list.filter((item) => {
                if (!item.complete) {
                    return (item);
                }
            })
            setList(temp);
        }
    }, [settingsContext.view])
    function nextPage() {
        settingsContext.nextpage();
        setpage(page + 1);
    }
    function prePage() {
        settingsContext.previouspage();
        setpage(page - 1);
    }
    function modifyList(id) {
        listContext.toggleComplete(id);
        if (settingsContext.view) {
            setList(listContext.list)
        } else {
            let temp = [];
            temp = listContext.list.filter((item) => {
                if (!item.complete) {
                    return (item);
                }
            })
            setList(temp);
        }
    }
    return (
        <ListGroup className="list">
            {list.map((item, idx) => {
                if (idx >= settingsContext.start && idx <= settingsContext.end) {
                    return (

                        <ListGroup.Item action variant="primary" className={`complete-${item.complete.toString()}`}
                            key={item._id}>
                            <Card onClick={() => modifyList(item._id)} className='card'>
                                <Card.Header>
                                    {item.assignee}
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>{item.text}</Card.Title>
                                    <Card.Text>
                                        Difficulty: {item.difficulty}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </ListGroup.Item>
                    )
                }
            })}
            <div className='buttons'>
                {page > 0 && <Button onClick={prePage} variant="outline-primary">Previous</Button>}
                {!(page == (Math.ceil(listContext.list.length / settingsContext.numberOfItems) - 1)) && <Button variant="outline-primary" onClick={nextPage}>Next</Button>}
                <Button variant="outline-success" onClick={() => { settingsContext.setSettings(null, !settingsContext.view) }}>Completed Items</Button>

            </div>

        </ListGroup>
    );
}


export default TodoList;