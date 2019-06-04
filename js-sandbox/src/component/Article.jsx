import React, {Component} from "react";
import { Col } from 'reactstrap';
import PropTypes from "prop-types";

export default class Article extends Component {
    render() {
        const { articles, articleshow } =  this.props;
        return (
            <Col md="9" style={{padding: "0px"}}>
                <div style={{background: "#1c85ff", height: "100%", textAlign: "center"}}>
                    {
                        <>
                            <h2 style={{padding: "15px", fontWeight: "bolder"}}>
                                {articles[articleshow].title}
                            </h2>
                            <img src={articles[articleshow].image} alt="imagen actividad" style={{height: "300px", width: "auto"}}/>
                            <p style={{margin: "20px", marginBottom: "40px"}}>{articles[articleshow].content} </p>
                        </>

                    }
                </div>

            </Col>
        )

    }
}

Article.propTypes = {
    articles: PropTypes.array.isRequired,
    articleshow: PropTypes.array.isRequired
};

Article.defaultProps = {
    articles: []
};