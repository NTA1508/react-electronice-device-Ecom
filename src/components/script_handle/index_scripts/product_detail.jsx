import React from 'react';
import  { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const ChangeImage = () => {
  const changeImage = (element) => {
    const smallImages = document.querySelectorAll('.item-img-small');
    smallImages.forEach((img) => {
      img.classList.remove('active');
    });
    element.classList.add('active');
    const imgSrc = element.querySelector('img').src;
    document.getElementById('img-big').src = imgSrc;
  };
  const { id } = useParams();
    const [products, setProduct] = useState(null);
  
    useEffect(() => {
      axios.get(`http://localhost:8081/api/v1/product/${id}`)
        .then(response => setProduct(response.data))
        .catch(error => console.error('Error fetching product details:', error));
    }, [id]);
  
    if (!products) {
      return <div>Loading...</div>;
    }

  return (
    <div className="product-imgs">
      <div className="list-img-small">
        <div
          className="item-img-small active"
          id="img-small1"
          onClick={() => changeImage(document.getElementById('img-small1'))}
        >
          <img src= {`http://localhost:8081/api/v1/product/show/${products.id}`} alt="img" />
        </div>
        <div
          className="item-img-small"
          id="img-small2"
          onClick={() => changeImage(document.getElementById('img-small2'))}
        >
          <img src= {`http://localhost:8081/api/v1/product/show/${products.id}`} alt="img" />
        </div>
        <div
          className="item-img-small"
          id="img-small3"
          onClick={() => changeImage(document.getElementById('img-small3'))}
        >
          <img src= {`http://localhost:8081/api/v1/product/show/${products.id}`} alt="img" />
        </div>
        <div
          className="item-img-small"
          id="img-small4"
          onClick={() => changeImage(document.getElementById('img-small4'))}
        >
          <img src= {`http://localhost:8081/api/v1/product/show/${products.id}`} alt="img" />
        </div>
      </div>
      <div className="img-big">
        <img
          id="img-big"
          src= {`http://localhost:8081/api/v1/product/show/${products.id}`}
          alt="img"
        />
      </div>
    </div>
  );
};

export default ChangeImage;
