import React from 'react';
import { ThemeContext } from '../../utils/contexts.js';

export default class Banner extends React.Component {
	
	static contextType = ThemeContext;
	
    constructor (props) {
        super(props);
		this.state = {
			animationDisplay: 'none'
		}
    }
	componentDidMount () {
		//this.setState({ animationDisplay: 'flex' })
		// setTimeout (
			// () => this.setState({ animationDisplay: 'flex' }),
			// 3000
		// );
	}
    render () {
		return (
			<div className="banner">
				<div className="w3-green w3-xlarge w3-padding" >{this.context}</div>
			</div>
		);
	}
}