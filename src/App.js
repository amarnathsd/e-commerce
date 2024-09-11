import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import './App.css';

// Import images
import rotatingLoungeChair from './assets/images/rotating_lounge_chair.jpg';
import peadReadingChair from './assets/images/pead_reading_chair.jpg';
import luxurySofaChair from './assets/images/luxury_sofa_chair.jpg';
import woodenOfficeChair from './assets/images/wooden_office_chair.jpg';
import modernDiningChair from './assets/images/modern_dining_chair.jpg';

const products = [
  { id: 1, name: 'Rotating Lounge Chair', price: 39.00, category: 'Living Room', image: rotatingLoungeChair },
  { id: 2, name: 'Pead Reading Chair', price: 35.00, category: 'Reading Room', image: peadReadingChair },
  { id: 3, name: 'Luxury Sofa Chair', price: 99.00, category: 'Living Room', image: luxurySofaChair },
  { id: 4, name: 'Wooden Office Chair', price: 59.00, category: 'Office Table', image: woodenOfficeChair },
  { id: 5, name: 'Modern Dining Chair', price: 75.00, category: 'Dining Room', image: modernDiningChair },
  { id: 6, name: 'Rotating Lounge Chair 2', price: 49.00, category: 'Living Room', image: rotatingLoungeChair },
  { id: 7, name: 'Pead Reading Chair 2', price: 45.00, category: 'Reading Room', image: peadReadingChair },
  { id: 8, name: 'Luxury Sofa Chair 2', price: 199.00, category: 'Living Room', image: luxurySofaChair },
  { id: 9, name: 'Wooden Office Chair 2', price: 159.00, category: 'Office Table', image: woodenOfficeChair },
  { id: 10, name: 'Modern Dining Chair 2', price: 175.00, category: 'Dining Room', image: modernDiningChair },
];

const App = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
    if (category === '') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.category === category));
    }
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      return order === 'asc' ? a.price - b.price : b.price - a.price;
    });
    setFilteredProducts(sortedProducts);
  };

  return (
    <Container>
      <Row className="mt-4">
        <Col md={3}>
          <h4>Filters</h4>
          <Form>
            <Form.Group controlId="categoryFilter">
              <Form.Label>Category</Form.Label>
              <Form.Control as="select" onChange={(e) => handleFilterChange(e.target.value)}>
                <option value="">All</option>
                <option value="Living Room">Living Room</option>
                <option value="Reading Room">Reading Room</option>
                <option value="Dining Room">Dining Room</option>
                <option value="Office Table">Office Table</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="sortFilter" className="mt-3">
              <Form.Label>Sort by Price</Form.Label>
              <Form.Control as="select" onChange={(e) => handleSortChange(e.target.value)}>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
        <Col md={9}>
          <h4>Products</h4>
          <Row>
            {filteredProducts.map((product) => (
              <Col md={4} key={product.id}>
                <Card className="mb-4">
                  <Card.Img variant="top" src={product.image} alt={product.name} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>Price: ${product.price.toFixed(2)}</Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
