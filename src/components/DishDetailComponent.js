import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardTitle, CardBody } from 'reactstrap';

    function RenderDish({ dish }){
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

    function RenderComments({ dish }){
        if(dish !== undefined){
            const comments = dish.comments.map((comment) => {
                return(
                    <ul className="list-unstyled">
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

    const DishDetail = (props) => {
        if(props.dish != null){
            return(
            <div className="container">
                <div className="row">
                    <RenderDish 
                        dish={props.dish} 
                    />
                    <RenderComments
                        dish={props.dish} 
                    />
                </div>
            </div>
            );
        }else{
            return null;
        }
    }

export default DishDetail;