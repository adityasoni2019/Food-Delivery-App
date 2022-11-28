import { Container } from "reactstrap";
import logo from '../../assets/images/res-logo.png';
import { NavLink, Link } from "react-router-dom";

import React, { useRef, useEffect } from "react";
import '../../styles/header.css'
import { useSelector, useDispatch } from "react-redux";


const nav__links = [
    {
        display: 'Home',
        path: '/home'
    },
    {
        display: 'Foods',
        path: '/foods'
    },
    {
        display: 'Cart',
        path: '/cart'
    },
    {
        display: 'Contact',
        path: '/contact'
    }
]

const Header = () => {

    const menuRef = useRef(null);
    // const headerRef = useRef(null);

    // // ⭐⭐⭐
    const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
    // //  ^ this is for the toggle "menu". Like, the toggle bar for smaller sized screen.

    // useEffect(()=>{
    //     window.addEventListener('scroll', ()=>{
    //         if(document.body.scrollTop >80 || document.documentElement.scrollTop> 80){
    //             headerRef.current.classList.add("header__shrink");
    //         }   
    //         else{
    //             headerRef.current.classList.remove("header__shrink");
    //         }
    //     })

    //     return () => window.removeEventListener('scroll');
    // }, [])

    return (
        <header className="header" >

            <Container>
                <div className="nav__wrapper d-flex align-items-center justify-content-between">
                    {/* <div className="nav__wrapper d-flex flex-row bd-highlight mb-3"> */}

                    <div className="logo">
                        <img src={logo} alt="logo" />
                        <h5>Tasty Treat</h5>
                    </div>

                    {/* ============= menu bar ========== */}

                    <div className="navigation " ref={menuRef} onClick={toggleMenu}>
                        <div className="menu d-flex align-items-center gap-5">
                            {
                                nav__links.map((item, index) => (
                                    <NavLink 
                                    onClick = {toggleMenu}
                                    to={item.path} key={index}
                                    className = {navClass => navClass.isActive? 'active__menu' : ''}
                                    >{item.display}</NavLink>
                                    
                                ))
                            }

                        </div>
                    </div>


                    {/* nav right icons */}
                    <div className="nav__right d-flex align-items-center gap-4">

                        <span className="cart__icon">
                            <i className="ri-shopping-basket-line"></i>
                            <span className="cart__badge">2</span>
                        </span>

                        {/* <span className="user" >
                            <span className="cart__badge">2</span>
                            <Link to='/login'><i className="ri-user-line"></i></Link>
                        </span> */}

                        <span className="user">
                            <Link to="/login">
                                <i class="ri-user-line"></i>
                            </Link>
                        </span> 

                        <span className="mobile__menu" onClick={toggleMenu}>
                            <i className="ri-menu-line"></i>
                        </span>


                    </div>

                </div>
            </Container>

        </header>

    );
};

export default Header;