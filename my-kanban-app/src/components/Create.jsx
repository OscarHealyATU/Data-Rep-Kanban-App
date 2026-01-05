import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Container } from "react-bootstrap";
import Header from './Header';
import './Create.css';
export default function Create() {
    return (
        <>
            <Header pageName="New Task"></Header>
            <Container className='col-container'>
                <Card className='createTask' style={{width:'30rem', height:'30rem'}}>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Task Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={11} />
                        </Form.Group>
                    </Form>
                </Card>
            </Container>
        </>
    )
}