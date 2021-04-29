import React from 'react';
import Banner from '../components/banner/banner.js';

export default class Header extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {     
        return (
			<div>
				<header className="header">
					<div className="header__text-1">fe-components</div>
					<div className="header__text-2"></div>
					{/*
					<div className="header__image">
						<div className="image_block">
							<img
								src="https://firebasestorage.googleapis.com/v0/b/fir-test-fd267.appspot.com/o/fribakuva1.jpg?alt=media&token=f71e7c18-3409-4a91-8274-847957af7fbe"
								alt=""
								className="image_block__image"
							/>
						</div>
					</div>
					*/}
				</header>
				<Banner bannerText="This is a banner"/>
			</div>			
        );
    }
}
