import React, { Component } from 'react';
import './directory.styles.scss';
import DATA from './directory.data';

import MenuItem from '../menu-item/menu-item.component';


class Directory extends Component {
    constructor() {
        super();

        this.state = {
            sections: DATA
        }
    }
    render() {
        return(
            <div className="directory-menu">
                { this.state.sections.map(({id, ...otherMenuItemsProps}) => (
                    <MenuItem key={id} {...otherMenuItemsProps} />
                )) }
            </div>
        )
    }
}

export default Directory;

