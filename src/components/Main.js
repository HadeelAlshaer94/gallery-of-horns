import React from 'react';
import Data from './data.json';
import HornedBeast from './HornedBeast.js';


class Main extends React.Component {
  render() {
    return (
      <main>{
        Data.map((horn) => {
          return (<HornedBeast title={horn.title}
            imgSrc={horn.image_url}
            description={horn.description}
          />);
        })
      }
      </main>
    )
  }
}

export default Main;