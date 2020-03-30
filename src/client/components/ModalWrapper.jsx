import React from "react"
import "../../styles/styles.css"

class ModalWrapper extends React.Component {

	render() {

	const {
		formNode,
		buttonsNode,
		styleClass,
	} = this.props
    
		return (
		<div className={`modalWrapper ${styleClass ? styleClass : ""}`}>
			<div className="modalContentContainer">
				{formNode}
			</div>
            <div className="modalButtonsContainer">
			    {buttonsNode ? buttonsNode : null}
            </div>
		</div>
		)
	}
}

export default ModalWrapper