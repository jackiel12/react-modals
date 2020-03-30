import React from "react"
import "../../../styles/styles.css"

class PriceForm extends React.Component {
    constructor(props) {
        super(props)

        this.state={
            newDate: "",
            newPrice:""
        }
        this.updateFieldValue = this.updateFieldValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.resetFormState = this.resetFormState.bind(this);
    }

    updateFieldValue(value, field) {
        let newState = {
            ...this.state
        }
        newState[field] = value;

        this.setState(newState)
    }

    resetFormState() {
        let originalState = {
            newDate: "",
            newPrice:""
        }

        this.setState(originalState);

    }

    onSubmit(e) {
        e.preventDefault()
        let {newDate, newPrice} = this.state;

        let payload = {
            date: newDate,
            price: newPrice,
            id: this.props.ISIN
        }

        this.props.addPrice(payload)
        this.props.openClose();

    }

    render() {
        if(this.props.formHidden === true) {
            return null;
        }

        return(
            <div className="priceChangeForm">
                <form  onSubmit={(e) => this.onSubmit(e)}>
                    <label>Date: 
                    <input className="dateChangeInput" value={this.state.newDate} onChange={(e) => this.updateFieldValue(e.target.value,"newDate")}></input>
                    </label>
                    <label>Price:
                    <input className="priceChangeInput" value={this.state.newPrice} onChange={(e) => this.updateFieldValue(e.target.value,"newPrice")}></input>
                    </label>
                    <button className="priceChangeButton" type="submit">Save</button>
                </form>
            </div>
        )
    }
}

export default PriceForm