import React from "react"
import PriceItem from "./PriceItem.jsx"
import PriceForm from "./PriceForm.jsx"
import ModalWrapper from "../ModalWrapper.jsx"
import "../../../styles/styles.css"

class PricesModal extends React.Component {
    constructor(props) {
        super(props)

        this.state={
            addHidden: true,
        }

        this._renderPriceItems = this._renderPriceItems.bind(this);
        this.openClosePriceForm = this.openClosePriceForm.bind(this);
        this._renderContent = this._renderContent.bind(this);
        this._renderButtons = this._renderButtons.bind(this);
    }

    _renderPriceItems() {
        let priceItems = Object.keys(this.props.prices).map((el) => {
            let price = this.props.prices[el]
            return(
                <PriceItem
                    key={`priceItem-${el}`}
                    date={el}
                    price={price}
                    ISIN={this.props.ISIN}
                    editPrice={this.props.editPrice}
                    deletePrice={this.props.deletePrice}
                />
            )
        })
        return priceItems;
    }

    openClosePriceForm() {
        let newHidden;

        if(this.state.addHidden === true) {
            newHidden = false
        }else {
            newHidden = true
        }

        this.setState({addHidden: newHidden})
    }

	_renderContent() {

        return (
            <div>
                <h3>Prices</h3>
                <br/>
                <div className="priceList">
                    {this._renderPriceItems()}
                </div>
                <br/>
                <button className="wordButton" onClick={() => this.openClosePriceForm()}>+Add</button>
                <PriceForm formHidden={this.state.addHidden} 
                        addPrice={this.props.addPrice} ISIN={this.props.ISIN} 
                        openClose={this.openClosePriceForm}/>
            </div>
        )
    }
    
	_renderButtons() {
        return(
            <button className="wordButton" 
                    onClick={() => this.props.closePricesModal(this.props.ISIN)}
            >Close</button>
        )
    }

	render() {
        if(this.props.pricesOpen === false) {
            return null;
        }

		return (
			<ModalWrapper
				formNode={this._renderContent()}
				buttonsNode={this._renderButtons()}
                styleClass="priceModal"/>
        )
	}
}


export default PricesModal