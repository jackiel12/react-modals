import React from "react"
import "../../styles/styles.css"

import EditModal from "./modals/EditModal.jsx"
import PricesModal from "./modals/PricesModal.jsx"

class SecurityTile extends React.Component {
    constructor(props) {
        super(props)

        // this.renderPricesModal = this.renderPricesModal.bind(this);
    }



    render() {
        return(
            <div className="securityTile" id="secTile">
                <div className="securityName">
                <label  htmlFor="security">{this.props.name}</label>
                </div>
                <div className="sec">
                    <div className="secDetails" id="security">
                        <span>{this.props.ISIN}</span>
                        <span>{this.props.country}</span>
                        <a id={`price-${this.props.ISIN}`} 
                            href={`#price-${this.props.ISIN}`}
                            onClick={() => this.props.openPricesModal(this.props.ISIN)}
                            >prices</a>
                    </div>
                    <a id="edit" href="#edit" onClick={(e) => this.props.openEditModal(this.props.ISIN)}>Edit</a>
                </div>
                <EditModal {...this.props}/>
                <PricesModal {...this.props}/>
            </div>
        )
    }
}

export default SecurityTile