import React from 'react';
import { connect } from 'react-redux';
import './collection-item.styles.scss';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className="col-md-3">
            <div className="card" style={{ width: "18rem" }}>
                <img src={imageUrl} alt="" className="card-img-top" />
                <div className="card-footer">
                    <h5 className="card-title">{name}</h5>
                    <div className="flex-items">
                    <p>${price}</p>
                    <div className="add-cart" onClick={() => addItem(item)}>
                        <i className="fa fa-cart-plus"></i>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
