import React from 'react';
import Row from 'react-bootstrap/Row';
import HornedBeast from './HornedBeast.js';


class Main extends React.Component {
  render() {
    return (
      <main>{
        <Row xs={1} md={4} nameOfClass="imgCard">
          {
            this.props.HornData.map((selectBeastItem) => {
              return (
                <HornedBeast
                  imgSrc={selectBeastItem.image_url}
                  title={selectBeastItem.title}
                  description={selectBeastItem.description}
                  keyword={selectBeastItem.keyword}
                  horns={selectBeastItem.horns}
                  dispModal={this.props.dispModal}
                />
              )
            })
          }

        </Row>
      }</main>

    )
  }
}

export default Main;

