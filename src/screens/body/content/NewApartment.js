import React, { useRef } from 'react';

class NewApartment extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			data: [],
			resetFlag: false
		}
	}

	componentDidMount() {
		// console.log("this.props.params", this.props.match.params.id)
	}


	componentWillMount() {
		if (localStorage.getItem('apartment') === null) {
			// console.log("initial")
			this.setState({ data: ["1", "North", "1", "1", "100", "West"] })
		} else {
			// console.log(localStorage.getItem('apartment'))
			this.setState({ data: JSON.parse(localStorage.getItem('apartment')) })
		}
	}

	changeResetStatusEvent = () => {
		let val = document.getElementsByClassName('apart').value;
		if (val != '') {
			this.setState({
				resetFlag: true
			})
		} else {
			this.setState({
				resetFlag: false
			})
		}
	}

	resetValue = () => {
		this.setState({
			apartmentCode: "",
			area: "",
			balcony: "",
			bedroomTotal: "",
			price: "",
			price: "",
			towardTheMainDoor: ""
		})
	}

	updateInformation = (e) => {
		e.preventDefault();
		// console.log();
		// let arr_apartment = new Array;
		// arr_apartment.push(this.refs.apartmentCode.value);
		// arr_apartment.push(this.refs.area.value);
		// arr_apartment.push(this.refs.price.value);
		// arr_apartment.push(this.refs.bedroomTotal.value);
		// arr_apartment.push(this.refs.balcony.value);
		// arr_apartment.push(this.refs.towardTheMainDoor.value);

		//Save to Local Storage
		// localStorage.setItem('apartment', JSON.stringify(arr_apartment));
	}

	render() {
		return (
			<view></view>
		);

	}
}

export default NewApartment;