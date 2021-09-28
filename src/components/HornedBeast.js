import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfVotes: 0
    }
  }


  incnumOfVotes = () => {
    this.setState({
      numOfVotes: this.state.numOfVotes + 1
    })
  }

  dispModal = () => {
    this.props.dispModal(this.props.title)
  }


  render() {
    return (
      <div>
        <Card style={{ width: '15em' }}>  onClick={this.dispModal}&gt;
          <Card.Img variant="top" src={this.props.imgSrc} onClick={this.incnumOfVotes} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              🦄 : {this.state.numOfVotes}
            </Card.Text>
            <Card.Text>{this.props.description}</Card.Text>
            <Button variant="primary" size="sm">Submit</Button>
          </Card.Body>
        </Card>
      </div>
    )
  }
}


export default HornedBeast;










