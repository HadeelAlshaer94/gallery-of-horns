import React from "react";
import Form from 'react-bootstrap/Form';

class hornBeastForm extends React.Component {
    render() {
        return (
            <div>
                <Form.Select onChange={this.props.selectHorn} aria-label="Select Options">
                    <option value="All">All</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="100">100</option>
                </Form.Select>
            </div>
        )
    }
}
export default hornBeastForm;