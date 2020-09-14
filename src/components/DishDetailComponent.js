import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardTitle, CardBody } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish){
        if(dish !== null){
            return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg object src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle heading>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
            );
        }else{
            return(
                <div></div>
            );
        }
    }

    renderComments(dish){
        if(dish !== null){
            const comments = dish.comments.map((comment) => {
                return(
                    <ul class="list-unstyled">
                        <li>{comment.comment}</li>
                        <li>{`-- ${comment.author}, ${comment.date}`}</li>
                    </ul>
            )});
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments}
                </div>
            );
        }else{
            return(
                <div></div>
            );
        }
    }

    render() {

        return(
            <div className="row">
                {this.renderDish(this.props.dish)}
                {this.renderComments(this.props.dish)}
            </div>
        );
    }

}

export default DishDetail;