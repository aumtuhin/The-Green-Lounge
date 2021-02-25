import React from 'react';
import './directory.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';


const Directory = ({ sections }) => {
    return (
        <div className="items">
            { sections.map(({ id, ...otherMenuItemsProps }) => (
                <MenuItem key={id} {...otherMenuItemsProps} />
            ))}
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);

