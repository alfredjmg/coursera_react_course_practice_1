import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardTitle, CardBody } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish){
        if(dish !== undefined){
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
        if(dish !== undefined){
            const comments = dish.comments.map((comment) => {
                return(
                    <ul class="list-unstyled">
                        <li>{comment.comment}</li>
                        <li>{`-- ${comment.author}, ${new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}`}</li>
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
        <div className="container">
            <div className="row">
                {this.renderDish(this.props.dish)}
                {this.renderComments(this.props.dish)}
            </div>
        </div>
        );
    }

}

export default DishDetail;