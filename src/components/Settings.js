import React, { useContext, useEffect, useState } from 'react';
import { settingContext } from '../context/Context';
import { Form, Button } from 'react-bootstrap';


function SettingsForm() {
    const settings = useContext(settingContext)
    const [show, setShow] = useState(true);
    const [numOfitems, setNumOfitems] = useState(1);

    function handleItems(e) {
        setNumOfitems(Number(e.target.value));
    }
    function handleShow(e) {
        if (e.target.checked) {
            setShow(e.target.checked);
        } else {
            setShow(e.target.checked);
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        settings.setnumberOfItems(Number(numOfitems));
        settings.setShowCompleteList(show);
    }

    useEffect(() => {
        let payload = {
            numberOfItems: settings.numberOfItems,
            showCompleteList: settings.showCompleteList,
        }
        if (settings.numberOfItems) {
            localStorage.setItem('change settings', JSON.stringify(payload));
        }
    }, [settings])

    return (
        <>
            <Form onSubmit={(e) => { handleSubmit(e) }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Number Of Items For Each Page</Form.Label>
                    <Form.Control name='items' type='number' placeholder={1} value={numOfitems} min={1} onChange={handleItems} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Show Cpmleted Items List" onChange={handleShow} />
                </Form.Group>
            
                <Button variant="primary" type="submit">
                    Save Changes
                </Button>
            </Form>
        </>
    )
}

export default SettingsForm;