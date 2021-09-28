import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import HornData from './components/data.json';
import SelectedBeast from './components/SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedBeast: HornData,
      showModel: false
    }
  }
  dispModal = (title) => {
    const selectBeast2 = HornData.filter((item)  => { 
      return (item.title === title);
    });
    console.log(selectBeast2);
    this.setState({
      showModel: true,
      selectedBeast: selectBeast2[0],
    })
  }
  endModal = () => {
    this.setState({
      showModel: false
    })
  }
  render() {
    return (
      <div>
        <Header />
        <Main  HornData={HornData} dispModal ={this.dispModal}  />
        <SelectedBeast
          selectedBeast={this.state.selectedBeast}
          show={this.state.showModel}
          close={this.endModal}
        />
        <Footer />
      </div>
    )
  }
}
export default App;