import React, {Component} from "react";
import {CartContext} from "../contexts/Cart";
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


export default class CartResult extends Component{

  render(){
    return(
      <div className="CartResult">
        <CartContext.Consumer>
          {({cartItems, deleteItemOfCart}) => (
            <div>
                <Container>
                    <Row>
                    {cartItems.map((cartItem) => (
                        <Col sm="3">
                            <Card>
                            <CardImg
                                top
                                width="100%"
                                src={cartItem.ImageUrl}
                                alt="Card image cap"
                            />
                            <CardBody>
                                <CardTitle tag="h5">{cartItem.name}</CardTitle>
                                <CardText>{cartItem.description}</CardText>
                                  <Button onClick={() => deleteItemOfCart(cartItem)}>
                                    Delete
                                  </Button>
                            </CardBody>
                            </Card>
                        </Col>
                        ))}
                    </Row>
                </Container>

                </div>
          )
        }
        </CartContext.Consumer>
      </div>
    );
  }
}