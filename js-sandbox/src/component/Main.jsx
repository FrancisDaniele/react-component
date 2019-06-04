import React, {Component} from 'react';
import Header from './Header';
import SideBar from "./SideBar";
import Article from "./Article";
import { Container, Row } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';
library.add(faCaretRight, faCaretDown )

const myMenu = [
    {label:"Contacto",link: ""},
    {label:"Actividades",link: ""},
    {label:"Opiniones", link: ""}
];

const avent = "El deporte de aventura es una nueva forma deportiva que, en equipo, pone al hombre en contacto con la naturaleza, en el que la motivación de llegar a la meta está por encima de cualquier resultado. El objetivo es llegar, superarse a uno mismo, y, para ello, es necesario el desarrollo de cualidades físicas, habilidades motoras, gran resistencia general y, sobre todo, una gran preparación psicológica y de vínculos sociales entre los participantes.";

const myArticles = [
    {id: 0, title: "Canyoning" ,content: avent, image: "http://www.mallorcaadventuresports.com/canyoning-mallorca-004.jpg"},
    {id: 1,title: "Escalada" ,content: avent, image: "http://www.mallorcaadventuresports.com/mallorca-climbing-001.jpg"},
    {id: 2,title: "Kite Surf" ,content: avent, image: "http://www.mallorcaadventuresports.com/kitesurf-lessons-mallorca-001.jpg"}
];

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articleshow: 0
        };

        this.changeArticle = this.changeArticle.bind(this);
    }

    changeArticle(number){
        this.setState({articleshow: number})
    }

    render() {
        return(
            <>
                <Header
                    links={myMenu}
                />
                <Container>
                    <Row>
                        <Article
                            articles={myArticles}
                            articleshow={this.state.articleshow}
                        />
                        <SideBar
                            buttons={myArticles}
                            changeArticle={this.changeArticle}
                        />
                    </Row>
                </Container>
            </>
        )
    }
};