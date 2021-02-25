import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
    return (
        <div className="content" onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <img className="menu-image" src={imageUrl} alt="Menu"/>
            <h3>{title}</h3>
        </div>
    );
}

export default withRouter(MenuItem);
