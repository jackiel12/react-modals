import React from "react"
import SecurityTile from "./SecurityTile.jsx"
import AddModal from "./modals/AddModal.jsx"

class SecuritiesDisplay extends React.Component {
    constructor(props) {
        super(props)

        this._renderSecurities = this._renderSecurities.bind(this);
    }


    _renderSecurities() {
        let securityTiles = []

        for(let key in this.props.securities) {
            let item = this.props.securities[key];
            securityTiles.push(
                <SecurityTile key={item.ISIN} 
                ISIN={item.ISIN} 
                name={item.name} 
                country={item.country} 
                prices={item.prices} 
                pricesOpen={item.pricesOpen}
                isOpen={item.isOpen}
                openEditModal={this.props.securitiesDispatch.openEditModal}
                closeEditModal={this.props.securitiesDispatch.closeEditModal}
                editSecurity={this.props.securitiesDispatch.editSecurity}
                deleteSecurity={this.props.securitiesDispatch.deleteSecurity}
                openPricesModal={this.props.securitiesDispatch.openPricesModal}
                closePricesModal={this.props.securitiesDispatch.closePricesModal}
                editPrice={this.props.securitiesDispatch.editPrice}
                deletePrice={this.props.securitiesDispatch.deletePrice}
                addPrice={this.props.securitiesDispatch.addPrice}/>
            )
        }

        return securityTiles;
    }


    render() {

        return(
            <div className="securitiesContainer">
                <h2 className="sectionTitle">Securities</h2>
                <div>{this._renderSecurities()}</div>
                <div className="addAnchor">
                    <button className="addModalButton" onClick={() => this.props.securitiesDispatch.openAddModal()}>Add</button>
                    <AddModal {...this.props}/>
                </div>
            </div>
        )
    }
}

export default SecuritiesDisplay