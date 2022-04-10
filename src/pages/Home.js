import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
function Home() {
  return (
      <>
    
    <div>
    <Row>
   
    <Col xs={6}> <Card style={{width: '45%',height:'5rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
    <Card.Text>
      
    </Card.Text>
    {/* <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link> */}
  </Card.Body>
</Card>
    </Col>

    <Col xs={6}> <Card style={{width: '45%',height:'5rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
    <Card.Text>
      
    </Card.Text>
    {/* <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link> */}
  </Card.Body>
</Card>
</Col>
 
  </Row>

  

  
    </div>
    
   

    </>
  )
}

export default Home