import { Container, Row, Col } from 'react-bootstrap';
import './Board.css'
import KanbanCol from './KanbanCol';
import Header from './Header';
export default function Board() {
    return (
        <>
            <Header pageName="Home"/>

            <Container className='col-container'>
                <Row>
                    <Col className="todo-col">
                        <KanbanCol title="ToDo" status="todo" />
                    </Col>
                    <Col className="inProg-col">
                        <KanbanCol title="In Progress" status="inProg" />
                    </Col>
                    <Col className="complete-col">
                        <KanbanCol title="Completed" status="completed" />
                    </Col>
                </Row>
            </Container>
        </>


    );
}