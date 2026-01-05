import './TaskCard.css'
import Card from 'react-bootstrap/Card';
export default function TaskCard({ status, priority }) {
  return (

    <Card className="TaskCard">
      <Card.Body >
        
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {status !== "todo" && (
          <Card.Link href="#" className='btn btn'>Back</Card.Link>
          )}
        {status !== "completed" && (
        <Card.Link href="#" className='btn btn-primary'>Forward</Card.Link>
        )}
      </Card.Body>
      <span className={`priority ${priority}`}></span>
      
    </Card>

  )
};