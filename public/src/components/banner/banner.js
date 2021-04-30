import React from 'react';
import { TextContext } from '../../utils/contexts.js';

export default class Banner extends React.Component {
	
	//static contextType = TextContext;
	
    constructor (props) {
        super(props);
    }
	componentDidMount () {

	}
    render () {
		return (
			<div className="banner">
			{/*<div className="w3-green w3-xlarge w3-padding" >{this.context}</div>*/}
				
				<TextContext.Consumer>
					{({text1, toggleText}) => (
						<div>consumer {text1}</div>
					)}
				</TextContext.Consumer>
				
			</div>
		);
	}
}

{/*Banner.contextType = TextContext;*/}