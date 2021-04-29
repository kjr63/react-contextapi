import React from 'react';
import Header from '../components/header.js';
import HtmlRadioButtons from '../components/radio-buttons/htmlRadioButtons.js';
import ReactRadioButtons from '../components/radio-buttons/reactRadioButtons.js';
import TextFields from '../components/text-fields/textFields.js';
import HtmlCheckbox from '../components/checkboxes/htmlCheckbox.js';
import ReactCheckbox from '../components/checkboxes/reactCheckbox.js';
import { ThemeContext } from '../utils/contexts.js';

export default class WpApp extends React.Component {
    constructor (props) {
        super(props);
    }
	componentDidMount () {
	}

    render () {     
        return (
            <div className="template">
				<ThemeContext.Provider value="this is context text">
					<Header />
				</ThemeContext.Provider>
				<TextFields />
				<HtmlRadioButtons />
				<ReactRadioButtons />
				<HtmlCheckbox />
            </div>
        );
    }
}
