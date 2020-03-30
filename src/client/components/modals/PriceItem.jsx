import React from "react"
import "../../../styles/styles.css"

class PriceItem extends React.Component {
    constructor(props) {
        super(props)

        this.state={
            static: true,
            newDate: this.props.date,
            newPrice: this.props.price
        }

        this.updateFieldValue = this.updateFieldValue.bind(this);
        this.resetStatic = this.resetStatic.bind(this);
        this.submitChange = this.submitChange.bind(this);
        this.openForm = this.openForm.bind(this);
    }

    updateFieldValue(value, field) {
        let newState = {
            ...this.state
        }
        newState[field] = value;

        this.setState(newState)
    }

    resetStatic(e) {
        e.preventDefault()
        let originalState = {
            static: true,
            newDate: this.props.date,
            newPrice: this.props.price
        }
        this.setState(originalState)
    }

    openForm(e) {
        e.preventDefault()
        this.setState({static: false})
    }

    submitChange(e) {
        e.preventDefault()
        //run edit price action to update the price
        let payload = {
            id: this.props.ISIN,
            newPrice: this.state.newPrice,
            newDate: this.state.newDate,
            originalDate: this.props.date
        }

        this.props.editPrice(payload)
        this.resetStatic(e)

    }

    render() {

        if (this.state.static === false) {
            return (
                <form className="priceChangeForm">
                    <label htmlFor="DateChange">Date:</label>
                    <input id="DateChange" className="dateChangeInput"
                            value={this.state.newDate}
                            onChange={(e) => this.updateFieldValue(e.target.value, "newDate")}
                    ></input>
                    <label htmlFor="PriceChange">Price:</label>
                    <input id="PriceChange" className="priceChangeInput"
                            value={this.state.newPrice}
                            onChange={(e)=> this.updateFieldValue(e.target.value, "newPrice")}
                    ></input>
                    <button className="priceChangeButton" onClick={(e) => this.submitChange(e)}>Save</button>
                    <button className="priceChangeButton" onClick={(e) => this.resetStatic(e)}>Cancel</button>
                </form>
            )
        }
        return(
            <div className="priceItem">
                <span>{this.props.date}</span>
                <span>{this.props.price}</span>
                <a id="" href="" onClick={(e) => this.openForm(e)}>Edit</a>
                <button className="deletePriceBtn"onClick={() => this.props.deletePrice(this.props.date,this.props.ISIN)}>X</button>
            </div>
        )
    }
}

export default PriceItem