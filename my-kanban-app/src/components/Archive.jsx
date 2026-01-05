import Header from "./Header";
import KanbanCol from "./KanbanCol";
import { Container, Row, Col } from "react-bootstrap";    
export default function Archive(){
    return(
        <>
            <Header pageName="Dashboard"/>

            <Container className='col-container'>
                <Row>
                    <Col className="complete-col">
                        <KanbanCol title="Completed" status="completed" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}