import React, { useState, useContext, useEffect } from 'react'
import { settingContext } from '../context/Context';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, Card, Button } from 'react-bootstrap';
import './todo.scss'


function List(props) {
    const settingsContext = useContext(settingContext);
    const [numberOfPages, setnumberOfPages] = useState(Math.ceil(props.list.length / settingsContext.numberOfItems));
    const [activePage, setActivePage] = useState(1);
    const [activeList, setActiveList] = useState([]);

    useEffect(() => {
        let startPage = (activePage - 1) * settingsContext.numberOfItems;
        let endPage = startPage + settingsContext.numberOfItems;
        setnumberOfPages(Math.ceil(props.list.length / settingsContext.numberOfItems));
        setActiveList(props.list.slice(startPage, endPage));
    }, [props.list.length]);

    useEffect(() => {
        if (settingsContext.showCompleteList) {
            let startPage = (activePage - 1) * settingsContext.numberOfItems;
            let endPage = startPage + settingsContext.numberOfItems;
            setActiveList(props.list.slice(startPage, endPage));
            setnumberOfPages(Math.ceil(props.list.length / settingsContext.numberOfItems));
        } else {
            let temp = props.list.filter((item) => {
                return item.complete === false
            })
            let startPage = (activePage - 1) * settingsContext.numberOfItems;
            let endPage = startPage + settingsContext.numberOfItems;
            setActiveList(temp.slice(startPage, endPage));
            setnumberOfPages(Math.ceil(temp.length / settingsContext.numberOfItems))
        }
    }, [activePage, settingsContext.showCompleteList]);

    function handleCompletedList() {
        settingsContext.setShowCompleteList(!settingsContext.showCompleteList);
    }

    function handlePage(num) {
        setActivePage(num);
    }

    const handlePages = () => {
        let page = [];
        for (let i = 1; i <= numberOfPages; i++) {
            page.push(<Button variant="outline-primary" onClick={() => { handlePage(i) }} key={i}>{i}</Button>)
        }
        return page;
    }

    return (
        <div>
            <Button onClick={handleCompletedList} variant="outline-success">View Completed: {settingsContext.showCompleteList.toString()}</Button>
            <ListGroup className="list">
                {activeList.map(item => {
                    return (
                        <ListGroup.Item action variant="primary" key={item.id}>
                            <Card className='card'>
                                <Card.Header>
                                    {item.assignee}
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>
                                        {item.text}
                                    </Card.Title>
                                    <Card.Text>
                                        Difficulty: {item.difficulty}
                                    </Card.Text>
                                </Card.Body>
                                <div onClick={() => props.toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
                            </Card>
                        </ListGroup.Item>
                    )
                })}
                <div className='buttons'>
                    {activePage > 1 &&
                        <Button variant="outline-primary" onClick={() => { setActivePage(activePage - 1) }}>
                            Previous
                        </Button>}
                    {handlePages()}
                    {activePage < numberOfPages &&
                        <Button variant="outline-primary" onClick={() => { setActivePage(activePage + 1) }} >
                            Next
                        </Button>}
                </div>
            </ListGroup>
        </div>
    )
}


export default List;