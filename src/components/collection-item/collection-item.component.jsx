import React from 'react';
import { connect } from 'react-redux';
import './collection-item.styles.scss';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className="col-md-3 menu-item">
            <div className="card" style={{ width: "18rem" }}>
                <img src={imageUrl} alt="" className="card-img-top" />
                <div className="card-footer">
                    <h4 className="card-title">{name}</h4>
                    <p>With cheese crust, with wholemeal dough, with pineapple, with artichokes, with baby mozzarella</p>
                    <div className="flex-items">
                    <h5>${price}</h5>
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
