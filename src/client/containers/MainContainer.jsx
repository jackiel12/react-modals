import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../actions/securityActions"

import SecuritiesDisplay from "../components/SecuritiesDisplay.jsx"


const mapStateToProps = state => ({
    //add pertinent state here
    securitiesDisplayProps: state.securities// get the correct data
});
  
const mapDispatchToProps = dispatch => ({
    securitiesDispatch: {
        openAddModal: () => dispatch(actions.openAddModal()),
        closeAddModal: () => dispatch(actions.closeAddModal()),
        addSecurity: (payload) => dispatch(actions.addSecurity(payload)),
        openEditModal: (id) => dispatch(actions.openEditModal(id)),
        closeEditModal: (id) => dispatch(actions.closeEditModal(id)),
        editSecurity: (payload) => dispatch(actions.editSecurity(payload)),
        deleteSecurity: (id) => dispatch(actions.deleteSecurity(id)),
        openPricesModal: (id) => dispatch(actions.openPricesModal(id)),
        closePricesModal: (id) => dispatch(actions.closePricesModal(id)),
        editPrice: (payload) => dispatch(actions.editPrice(payload)),
        deletePrice: (date, id) => dispatch(actions.deletePrice(date,id)),
        addPrice: (payload) => dispatch(actions.addPrice(payload))
    }
  
  });
  
  class MainContainer extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
        const {
            securitiesDisplayProps,
            securitiesDispatch
        } = this.props;
      return(
        <div className="mainContainer">
          <div className="outerBox">
            { /* Start adding components here... */ }
            <SecuritiesDisplay {...securitiesDisplayProps} securitiesDispatch={securitiesDispatch}/>
          </div>
        </div>
      )
    }
  
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);