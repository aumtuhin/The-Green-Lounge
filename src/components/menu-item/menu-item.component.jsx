import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => {
    return (
        <div className="col-md-2 content" onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <img className="menu-image" src={imageUrl} alt="Menu"/>
            <h3>{title}</h3>
        </div>
    );
}

export default withRouter(MenuItem);
