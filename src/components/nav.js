import React from 'react';
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    padding-bottom:3rem;
    @media (min-width: 768px){
        padding-bottom:0;
    }
`;

const NavLink = styled(Link)`
    color: white;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1;
    font-family: 'Open Sans', sans-serif;
    text-decoration: none;
    padding: 1rem;
    margin-right: 1rem;

/*para que no aplique margen al último*/
    &:last-of-type{
        margin:0;
    }
    &.current-page{
        border-bottom: 2px solid white;
    }
`;

const Navigation = () => {
    return (
        <Nav>
            <NavLink
                to={'/'}
                activeClassName='current-page'
            >Inicio</NavLink>
            <NavLink
                to={'/nosotros'}
                activeClassName='current-page'
            >Nosotros</NavLink>

        </Nav>
    );
}

export default Navigation;