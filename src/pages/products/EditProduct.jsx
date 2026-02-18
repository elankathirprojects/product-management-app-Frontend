import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/productsSlice';
import ProductForm from '../../components/ui/ProductForm';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch product details
    const foundProduct = products.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      dispatch(fetchProducts(id));
    }
    setLoading(false);
  }, [id, dispatch, products]);

  const handleSubmit = async (formData) => {
    try {
      // Update product API call
      console.log('Updating product:', formData);
      navigate('/products');
    } catch (error) {
      console.error('Update failed:', error);
    }
  };

  const handleCancel = () => {
    navigate('/products');
  };

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <ProductForm
      initialData={product}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      title="Edit Product"
    />
  );
};

export default EditProduct;
