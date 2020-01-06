import React, { Component } from "react";
import Reactstrap, { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";

class CampsiteInfo extends Component {
    render() {
        if (this.props.campsite) {
            return this.campsite.renderCampsite;
        }
        return <div />;
    }

    renderCampsite(campsite) {
        this.renderComments;
        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderComments(comments) {
        if (comments) {
            return (
                <div className="md-col-5 m-1">
                    <h4>Comments {comments}</h4>
                    {comments.map(comments => {
                        return (
                            <div key={comments.text}>
                                <div>
                                    {comments.author},{" "}
                                    {new Intl.DateTimeFormat("en-US", {
                                        year: "numeric",
                                        month: "short",
                                        day: "2-digit"
                                    }).format(new Date(Date.parse(comments.date)))}
                                </div>
                                <div>{comments.date}</div>
                            </div>
                        );
                    })}
                </div>
            );
        }
        return <div />;
    }
}

export default CampsiteInfo;