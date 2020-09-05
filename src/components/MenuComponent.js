import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardTitle, CardBody } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        };
        console.log("menu constructor invoked")
    }

    componentDidMount(){
      console.log("menu didmoiunt invoked")
    }

    onDishSelect(dish) {
      this.setState({ selectedDish: dish})
    }

    renderDish(dish){
      if(dish != null){
        return(
          <Card>
            <CardImg object src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle heading>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        );
      }else{
        return(
          <div></div>
        );
      }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => this.onDishSelect(dish)}>
                  <CardImg object src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                    <CardTitle heading>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        console.log("menu render invoked")

        return (
          <div className="container">
            <div className="row">
                  {menu}
            </div>
            <div className="row">
              {this.renderDish(this.state.selectedDish)}
            </div>
          </div>
        );
    }
}

export default Menu;