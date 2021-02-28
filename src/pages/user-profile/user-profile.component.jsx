import React from 'react';

import './user-profile.styles.scss';

const UserProfile = ({user}) => {
    const {displayName, email} = user;
    return (
        <div className="container text-center user-profile">
            <div className="img-circle">
                <h1>{displayName.charAt(0, displayName.length)}</h1>
            </div>
            <h3 className="display-name">{displayName}</h3>
            <p>{email}</p>
        </div>
    );
}

export default UserProfile;