import { Container, Row, Col } from 'react-bootstrap';
import './Board.css'
import KanbanCol from './KanbanCol';
import Header from './Header';
export default function Board() {
    return (
        <>
            <Header pageName="Home" className="header" />

            <Container className='col-container'>
                <Row>
                    <Col className="todo-col">
                        <KanbanCol title="ToDo" />
                    </Col>
                    <Col className="inProg-col">
                        <KanbanCol title="In Progress" />
                    </Col>
                    <Col className="complete-col">
                        <KanbanCol title="Completed" />
                    </Col>
                </Row>
            </Container>
        </>


    );
}