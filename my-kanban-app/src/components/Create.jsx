import axios from 'axios';
import { Container, Form, Card, Button } from "react-bootstrap";
import Header from './Header';
import { useState } from 'react';
import './Create.css';

export default function Create() {
    const [task, setTask] = useState({
        title: '',
        description: ''
    });
    const handleChange = (e) => {
        setTask({
            ...task,[e.target.name]:e.target.value
        });
    }
    const handleSubmit = (e) =>{
        e.preventDefault();

        axios.post('http://localhost:4000/api/tasks', task)
        .then((res)=>{
            console.log(res.data);
            alert('Task Added');

        }).catch((err) => {
            console.error(err);
        });
    }

    return (
        <>
            <Header pageName="New Task"></Header>
            <Container className='col-container'>
                <Card className='createTask' style={{ width: '30rem' }}>
                    <Form  onSubmit={handleSubmit} >
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Task Name" name='title' value={task.title} onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" name='description' rows={8} value={task.description} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Button type='submit'className='btn btn-primary'>Submit</Button>
                        </Form.Group>
                    </Form>
                </Card>
            </Container>
        </>
    )
}