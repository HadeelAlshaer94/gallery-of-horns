import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import HornData from './components/data.json';
import SelectedBeast from './components/SelectedBeast';
import HornBeastForm from './components/HornBeastForm';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      SelectedBeast: HornData,
      showModel: false
    }
  }
  

  selectHorn = (event) => {
    const selectHornOption = event.target.value;
    const HornsSelect = HornData.filter((item) => {
      if (selectHornOption === 'All') {
        console.log('all chosen');
        return (this.state = {
          SelectedBeast: HornData,
        });
      }
      else {
        return (JSON.stringify(item.horns) === selectHornOption);
      }
    });
    console.log(HornsSelect);
    this.setState({
      SelectedBeast: HornsSelect,
    })
  }


  dispModal = (title) => {
    const selectBeast2 = HornData.filter((item) => {
      return (item.title === title);
    });
    console.log(selectBeast2);
    this.setState({
      showModel: true,
      SelectedBeast: selectBeast2[0],
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
        <HornBeastForm  selectedHorns={this.selectHorn} />
        <Main HornData={this.state.SelectedBeast} dispModal={this.dispModal} />
        <SelectedBeast
          SelectedBeast={this.state.SelectedBeast}
          show={this.state.showModel}
          close={this.endModal}
        />
        <Footer />
      </div>
    )
  }
}
export default App;