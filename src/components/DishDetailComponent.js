import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

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

    function RenderComments({ comments }){
        console.log(comments)
        if(comments !== undefined){
            const dishComments = comments.map((comment) => {
                return(
                    <ul className="list-unstyled">
                        <li>{comment.comment}</li>
                        <li>{`-- ${comment.author}, ${new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}`}</li>
                    </ul>
            )});
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {dishComments}
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
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <RenderDish 
                        dish={props.dish} 
                    />
                    <RenderComments
                        comments={props.comments} 
                    />
                </div>
            </div>
            );
        }else{
            return null;
        }
    }

export default DishDetail;