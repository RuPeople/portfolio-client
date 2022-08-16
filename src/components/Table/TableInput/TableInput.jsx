import React, {useContext, useState} from 'react';
import {Button, Form, InputGroup} from "react-bootstrap";
import {observer} from "mobx-react-lite";

import './TableInput.css'
import {Context} from "../../../index";
import {createRow} from "../../../http/tableAPI";

const TableInput = observer(() => {
    const {rows} = useContext(Context)

    const [date, setDate] = useState('0000-00-00')
    const [name, setName] = useState('')
    const [count, setCount] = useState(0)
    const [distance, setDistance] = useState(0)

    const addRow = () => {
        const formData = new FormData()
        formData.append('date', date)
        formData.append('name', name)
        formData.append('count', count)
        formData.append('distance', distance)

        createRow(formData).then()
    }

    return (
        <div className="table-input">
            <h1>Input</h1>
            <form>
                <InputGroup className="table-input__group mb-2">
                    <Form.Control
                        className="table-input__group_input"
                        style={{width: "23%"}}
                        placeholder="date"
                        aria-label="date"
                        aria-describedby="date"
                        type="date"
                        value={date}
                        onChange={e =>  setDate(e.target.value)}
                    />
                    <Form.Control
                        className="table-input__group_input"
                        style={{width: "23%"}}
                        placeholder="name"
                        aria-label="name"
                        aria-describedby="name"
                        type="text"
                        value={name}
                        onChange={e =>  setName(e.target.value)}
                    />
                    <Form.Control
                        className="table-input__group_input col"
                        style={{width: "23%"}}
                        placeholder="count"
                        aria-label="count"
                        aria-describedby="count"
                        type="number"
                        value={count}
                        onChange={e =>  setCount(e.target.value)}
                    />
                    <Form.Control
                        className="table-input__group_input col"
                        style={{width: "23%"}}
                        placeholder="distance"
                        aria-label="distance"
                        aria-describedby="distance"
                        type="number"
                        value={distance}
                        onChange={e =>  setDistance(e.target.value)}
                    />
                    <Button
                        onClick={addRow}
                        className="table-input__group_button d-flex flex-row justify-content-center align-items-center p-2"
                        style={{width: "8%"}}
                        variant="outline-secondary"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path
                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                    </Button>
                </InputGroup>
            </form>

        </div>
    );
});

export default TableInput;