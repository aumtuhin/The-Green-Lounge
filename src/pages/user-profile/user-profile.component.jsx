import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';


import './user-profile.styles.scss';

const UserProfile = ({currentUser}) => {
    const {displayName, email} = currentUser;
    return (
        <div className="container text-center user-profile">
            <div className="img-circle">
                <h1>{displayName.charAt(0)}</h1>
            </div>
            <h3 className="display-name">{displayName}</h3>
            <p>{email}</p>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(UserProfile);