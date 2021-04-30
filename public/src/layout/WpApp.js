import React from 'react';
import Header from '../components/header.js';
import HtmlRadioButtons from '../components/radio-buttons/htmlRadioButtons.js';
import ReactRadioButtons from '../components/radio-buttons/reactRadioButtons.js';
import TextFields from '../components/text-fields/textFields.js';
import HtmlCheckbox from '../components/checkboxes/htmlCheckbox.js';
import ReactCheckbox from '../components/checkboxes/reactCheckbox.js';
import TestFunction from '../components/test-function/testFunction.js';
import Banner from '../components/banner/banner.js';
import { TextContext } from '../utils/contexts.js';

export default class WpApp extends React.Component {
	
    constructor (props) {
        super(props);
		this.toggleText = () => {
			this.setState (
				(prevState) => (
					{ text1: prevState.text1 == 'this is default' ? 'this is new' : 'this is default'	}
				)
			);
		};
		this.state = { 
			text1:  'this is default',
			toggleText: this.toggleText
		};
		this.tText = this.tText.bind(this);
    }
	componentDidMount () {
	}
	tText () {
		//console.log(this.state.text);
		this.setState (
			(prevState) => (
				{ text1: prevState.text1 == 'this is default' ? 'this is new' : 'this is default'	}
			)
		);
	}

    render () {
		const headerBanner = (
			<Banner bannerText="this is context text"/>
		);		
        return (
            <div className="template">
				<TextContext.Provider value={this.state}>
					<Header />
					<TextFields />
				</TextContext.Provider>
				<HtmlRadioButtons />
				<ReactRadioButtons />
				<HtmlCheckbox />
				<TestFunction name="Welcome"/>
				{headerBanner}
            </div>
        );
    }
}
