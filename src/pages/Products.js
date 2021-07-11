import axios from "axios";
import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Row,
  Col,
  Container
} from "reactstrap";
import { Bars } from "react-loading-icons";
import { CartContext } from "../contexts/Cart";
import products from '../db.json';

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      products: products.products
    };
  }

  componentDidMount() {
    // axios.get("https://n6f6u.sse.codesandbox.io/products").then((res) => {
    //   this.setState({ products: res.data });
    // });
    this.setState({ isLoading: false });
  }
  render() {
    const { products, isLoading } = this.state;
    return isLoading ? (
      <Bars />
    ) : (
      <div className="products">
        <Container>
          <Row>
            {products.map((product) => (
              <Col sm="3">
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={product.ImageUrl}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">{product.name}</CardTitle>
                    <CardText>{product.description}</CardText>
                    <CartContext.Consumer>
                      {({ addToCart }) => (
                        <Button onClick={() => addToCart(product)}>
                          Add to cart
                        </Button>
                      )}
                    </CartContext.Consumer>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
export default Products;
