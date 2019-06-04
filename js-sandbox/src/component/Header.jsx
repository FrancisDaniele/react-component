import React, {Component} from "react";
import PropTypes from 'prop-types';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';


export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {

        const { links } = this.props;

        return (
            <>
                <Navbar style={{backgroundColor: "#44daff", height: "90px"}} light expand="md">
                    <NavbarBrand href="/">
                        <h4 style={{color: "white", fontWeight: "600", padding: "20px"}}>
                            Deportes de Aventura
                        </h4>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>

                            {
                                links.map((link) => {
                                    return(
                                        <NavItem style={{marginLeft: "20px"}}>
                                            <NavLink href={link.link} style={{color: "white"}}>{link.label}</NavLink>
                                        </NavItem>
                                    )

                                })
                            }
                        </Nav>
                    </Collapse>
                </Navbar>
            </>
        )

    }
}


Header.propTypes = {
    links: PropTypes.array.isRequired
};

Header.defaultProps = {
    links: []
};