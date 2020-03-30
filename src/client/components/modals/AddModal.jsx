import React from "react"
import "../../../styles/styles.css"
import countryData from "countries-list"
import ModalWrapper from "../ModalWrapper.jsx"

const countries = Object.keys(countryData.countries).map((el) => {
    let name = countryData.countries[el].name;
    return name;
})

class AddModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            country: "",
            ISIN: "",
            prices: {}
        }

        this.getCountries = this.getCountries.bind(this);
        this.updateFieldValue = this.updateFieldValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
        this.clearLocalState = this.clearLocalState.bind(this)
        this._renderForm = this._renderForm.bind(this);
        this._renderButtons = this._renderButtons.bind(this);
    }


    getCountries() {
        let countryList = countries.map((el) => {
            return (
                <option key={el} value={el}>{el}</option>
            )
        })
        return countryList;
    }

    updateFieldValue(value, field) {
        let newState = {
            ...this.state
        }
        newState[field] = value;

        this.setState(newState)
    }

    onSubmit(e) {
        e.preventDefault()
        
        //fire off an action to save the security
        let payload = {
            ...this.state
        }

        this.props.securitiesDispatch.addSecurity(payload);
        // this.setState(clearedState)
        this.clearLocalState()
    }

    clearLocalState() {
        let clearedState = {
            name: "",
            country: "",
            ISIN: "",
            prices: {}
        }
        this.setState(clearedState)

    }

	_renderForm() {
        return (
            <div>
                <h3 className="addEditTitle">Add Security</h3>
                <br/>
                <div className="addEditForm">
                    <form >
                            <div className="addEditFormFirst">
                                <div className="marginRight20">
                                    <div><label>Name</label></div>
                                    <div>
                                    <input className="addEditInput"
                                        type="text" 
                                        field="name" 
                                        value={this.state.name} 
                                        onChange={(e)=> this.updateFieldValue(e.target.value,"name")}
                                    >
                                    </input>
                                    </div>
                                </div>
                                <div >
                                    <div><label>ISIN</label></div>
                                    <div>
                                    <input className="addEditInput"
                                        type="text" 
                                        field="ISIN"
                                        value={this.state.ISIN}
                                        onChange={(e) => this.updateFieldValue(e.target.value, "ISIN")}
                                    ></input>
                                    </div>
                                </div>
                            </div>
                            <div className="addEditInput">
                                <div><label>Country</label></div>
                                <div className="selectWrapper">
                                    <select className="countryDropdown"
                                        value={this.state.country}
                                        onChange={e=> this.setState({country: e.target.value})}
                                    >
                                        <option></option>
                                        {this.getCountries()}
                                    </select>
                                    <i className="fas fa-caret-down fa-lg position-caret"></i>
                                </div>
                            </div>
                        </form>
                </div>
            </div>
        )
	}
	_renderButtons() {
        return (
            <div className="addButtonContainer">
                        <button className="wordButton marginRight10" onClick={() => {
                            this.props.securitiesDispatch.closeAddModal();
                            this.clearLocalState()
                        }}>Cancel</button>
                        <button className="wordButton" onClick={(e)=> this.onSubmit(e)}>Save</button>
            </div>
        )
    }
	render() {
        if(this.props.addIsOpen === false) {
            return null;
        }

        return (
			<ModalWrapper
				formNode={this._renderForm()}
				buttonsNode={this._renderButtons()}
                styleClass="addModal"/>
        )
		
	}
}


export default AddModal