import React from "react";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class SelectedBeast extends React.Component {
    render() {
        return ( 
            <div>
                <Modal show={this.props.show} onHide={this.props.close}>
                    <Modal.Header>
                        <Modal.Title>{this.props.title}</Modal.Title>
                        <span nameOfClass ="close" onClick={this.props.close}>&times;
                        </span>
                    </Modal.Header>

                    <Modal.Body>
                        <Card style={{ width: "100%" }} bg="dark blue" text="white">
                            <Card.Img
                                variant="top"
                                src={this.props.selectedBeast.image_url}
                                nameOfClass="imgCard"
                            />
                            <Card.Body>
                                <Card.Title>{this.props.selectedBeast.title}</Card.Title>
                                <Card.Text>{this.props.selectedBeast.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.close}>
                            Close Details
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
} 

export default SelectedBeast;