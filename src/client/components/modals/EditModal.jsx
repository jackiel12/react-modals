import React from "react"
import ModalWrapper from "../ModalWrapper.jsx"
import "../../../styles/styles.css"
import countryData from "countries-list"


const countries = Object.keys(countryData.countries).map((el) => {
    let name = countryData.countries[el].name;
    return name;
})

class EditModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: this.props.name,
            country: this.props.country,
            ISIN: this.props.ISIN,
            prices: this.props.prices
        }

        this.getCountries = this.getCountries.bind(this);
        this.updateFieldValue = this.updateFieldValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
        this.resetLocalState = this.resetLocalState.bind(this)
        this._renderButtons = this._renderButtons.bind(this);
        this._renderForm = this._renderForm.bind(this);
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
            details: this.state,
            deleteid: this.props.ISIN,
        }

        this.props.editSecurity(payload);

        this.resetLocalState()
    }

    resetLocalState() {
        let originalState = {
            name: this.props.name,
            country: this.props.country,
            ISIN: this.props.ISIN,
            prices: this.props.prices
        }

        this.setState(originalState)
    }

	_renderForm() {
        return (
            <div>
            <h3 className="addEditTitle">Edit Security: {" "+this.props.name}</h3>
            <br/>
                <div className="addEditForm">
                    <form>
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
                            <div>
                                <div><label>ISIN</label></div>
                                <div>
                                    <input className="addEditInput"
                                        type="text" 
                                        field="ISIN"
                                        value={this.state.ISIN}
                                        onChange={(e) => this.updateFieldValue(e.target.value, "ISIN")}></input>
                                </div>
                            </div>
                        </div>
                        <div className="addEditFormSecond">
                            <div><label>Country</label></div>
                            <div className="selectWrapper">
                                <select className="countryDropdown"
                                    value={this.state.country}
                                    onChange={e=> this.setState({country: e.target.value})}
                                >
                                    <option>{this.state.country}</option>
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
            <div className="editButtonContainer">
                <div>
                    <button className="wordButton" onClick={() => this.props.deleteSecurity(this.props.ISIN)}>Delete</button>
                </div>
                <div>
                    <button className="wordButton marginRight10" onClick={() => {
                        this.props.closeEditModal(this.props.ISIN);
                        this.resetLocalState()
                    }}>Cancel</button>
                    <button className="wordButton" onClick={(e)=> this.onSubmit(e)}>Save</button>
                </div>
            </div>
        )
    }

	render() {
        if(this.props.isOpen === false) {
            return null;
        }
		return (
			<ModalWrapper
				formNode={this._renderForm()}
				buttonsNode={this._renderButtons()}
                styleClass="editModal"/>
		)
	}
}

export default EditModal