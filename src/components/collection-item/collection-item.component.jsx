import React from "react";
import { connect } from "react-redux";
import "./collection-item.styles.scss";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItem }) => {
  const { name, desc, price, imageUrl } = item;
  return (
    <div className="card-container">
      <div className="card-details">
        <div className="recipe-img">
          <img src={imageUrl} alt="Recipe" />
        </div>
        <div className="title-details">
          <h2>{name}</h2>
          <p className="price">${price}</p>
          <p className="desc mb-0">{desc}</p>
        </div>
        <div className="add-btn" onClick={() => addItem(item)}>
          Add +
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
