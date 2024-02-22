import React, { useState } from "react";
import styles from "./Shopping.module.css";
import Card from 'react-bootstrap/Card';
import clothes from './Data';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { filterActions } from "../features/filterSlice"; 
function Shopping() {
  const brands = ['American Eagle', 'Hollister', 'Pull & Bear', 'Zara'];
  const categories = ['Shirts', 'Hoodies', 'Polos', 'Jeans'];
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const filter = useSelector(state => state.filter);
  const navigate = useNavigate();
  const dispatch = useDispatch(); 

  const handleCardClick = (itemId) => {
    navigate(`/card/${String(itemId)}`);
  };

  const handleCheckboxChange = (item, type) => {
    if (type === 'category') {
      setSelectedCategories(prevState => {
        if (prevState.includes(item)) {
          return prevState.filter(category => category !== item);
        } else {
          return [...prevState, item];
        }
      });
    } else if (type === 'brand') {
      setSelectedBrands(prevState => {
        if (prevState.includes(item)) {
          return prevState.filter(brand => brand !== item);
        } else {
          return [...prevState, item];
        }
      });
    }
  };

  const handleSortingChange = (e) => {
    dispatch(filterActions.chooseSort(e.target.value)); 
  };

  const sortedData = () => {
    let sorted = [...clothes];
    if (filter.sort === 'location-1') {
      sorted.sort((a, b) => parseFloat(a.amount.replace(',', '')) - parseFloat(b.amount.replace(',', '')));
    } else if (filter.sort === 'location-2') {
      sorted.sort((a, b) => parseFloat(b.amount.replace(',', '')) - parseFloat(a.amount.replace(',', '')));
    }
    return sorted.filter(item =>
      (selectedCategories.length === 0 || selectedCategories.includes(item.category)) &&
      (selectedBrands.length === 0 || selectedBrands.includes(item.brand))
    );
  };

  const generateCheckboxes = (items, type) => {
    return (
      <div>
        {items.map((value) => (
          <div key={value} className={`${styles.checkboxItem}`}>
            <label>
              <input
                type="checkbox"
                id={value}
                checked={type === 'category' ? selectedCategories.includes(value) : selectedBrands.includes(value)}
                onChange={() => handleCheckboxChange(value, type)}
              />
              <span className={`${styles.checkboxLabel}`}>{value}</span>
            </label>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.main}>
      <div className={styles.filters}>
        <p className={styles.fil}>Filters</p>
        <p className={styles.coll}>Collections</p>
        <select className={styles.dropdown1} onChange={handleSortingChange}>
          <option className={styles.option} value="">Default</option>
          <option className={styles.option}  value="location-1">Price: Low to High</option>
          <option className={styles.option}  value="location-2">Price: High to Low</option>
        </select>
      </div>
      <div className={styles.inner}>
        <div className={styles.checkbox}>
          <p className={styles.Brand}>Brand</p>
          {generateCheckboxes(brands, 'brand')}
          <p className={styles.Category}>Category</p>
          {generateCheckboxes(categories, 'category')}
        </div>
        <div className={styles.dresses}>
          {sortedData().map((value) => {
            const { id, imageURL, brand, name, amount, category } = value;
            return (
              <div
                key={id}
                className={styles.inner}
                onClick={() => handleCardClick(id)}
              >
                <Card style={{ width: '14rem', cursor: 'pointer' }}>
                  <Card.Img variant="top" src={imageURL} height="250" alt="image" />
                  <Card.Body>
                    <Card.Title className={styles.brand} >{brand}</Card.Title>
                    <Card.Text className={styles.name}>{name}</Card.Text>
                    <Card.Text className={styles.price}> Rs. {amount}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Shopping;