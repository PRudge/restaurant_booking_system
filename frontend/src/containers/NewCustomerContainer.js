import React from 'react';
import NewCustomer from '../components/NewCustomerComponent';
import NavBar from './NavBar';

class NewCustomerContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      customers: [],
      currentCustomer: null,
    };
    this.handleCustomerSelected = this.handleCustomerSelected.bind(this);
  }


  handleCustomerSelected(index){
    const selectedCustomer = this.state.customers[index];
    this.setState({currentCustomer:selectedCustomer});
  }

  render(){
    return (
      <div>
      <NavBar/>
      <h2>Register New Customer</h2>
      <NewCustomer customers={this.state.customers}
      currentCustomer={this.handleCustomerSelected}
      customer={this.state.currentCustomer}/>
      </div>
    );
  }
}

export default NewCustomerContainer;
