import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import heroImg from '../assets/images/hero.png';
import '../styles/hero-section.css';
import { Link } from "react-router-dom";
import Category from "../components/UI/category/Category";
import '../styles/home.css'
import { useState, useEffect } from "react";

import ProductCard from "../components/UI/product-card/ProductCard";

import whyImg from '../assets/images/location.png' 
import products from '../assets/fake-data/products.js'

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";
import produce from "immer";

const featureData = [
    {
        title: "Quick Delivery",
        imgUrl: featureImg01,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
    },

    {
        title: "Super Dine In",
        imgUrl: featureImg02,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
    },
    {
        title: "Easy Pick Up",
        imgUrl: featureImg03,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
    },
];


const Home = () => {

    const [category, setCategory] = useState('ALL');
    const [allProducts, setAllProducts] = useState(products);

    // this is basically re-rendering stuffs, everytime the category changes. 
    useEffect(() =>{
            if(category === 'ALL'){
                setAllProducts(products);
            }
            else if(category=== "BURGER"){
                const filteredProducts = products.filter( item => item.category === 'Burger');
                setAllProducts(filteredProducts);
            }
            else if(category=== "PIZZA"){
                const filteredProducts = products.filter( item => item.category === 'Pizza');
                setAllProducts(filteredProducts);
            }
            else if(category=== "BREAD"){
                const filteredProducts = products.filter( item => item.category === 'Bread');
                setAllProducts(filteredProducts);
            }
        }
    , [category]);

    return (
        <Helmet>
            <section>
                <Container>
                    <Row>

                        <Col lg='6' md='6'>
                            <div className="hero__content">
                                <h5 className="mb-3">Easy way to make an order</h5>
                                <h1 className="mb-4 hero__title">
                                    <span>HUNGRY?</span> Just wait <br /> food at
                                    <span> your door</span>
                                </h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aut voluptatibus amet quis numquam distinctio eligendi, neque adipisci blanditiis enim. </p>

                                <div className="hero__btns d-flex align-items-center gap-5 mt-4  ">
                                    <button className="order__btn d-flex align-items-center justify-content-between">
                                        Order Now
                                        <i class="ri-arrow-right-s-line"></i>
                                    </button>

                                    <button className="all__foods-btn">
                                        <Link to='/foods'>
                                            See all foods
                                        </Link>
                                    </button>



                                </div>

                                <div className="hero__service d-flex align-items-center gap-2 mt-5 ">
                                    <p className="d-flex align-items-center gap-2">
                                        <span className="shipping__icon">
                                            <i class="ri-car-line"></i>
                                        </span>
                                        No shipping charges
                                    </p>
                                    <p className="d-flex align-items-center gap-2">
                                        <span className="shipping__icon">
                                            <i class="ri-shield-check-line"></i>
                                        </span>
                                        100% Secure Checkout
                                    </p>
                                </div>

                            </div>
                        </Col>

                        <Col lg='6' md='6'>
                            <div className="hero__img">
                                <img src={heroImg} alt='hero-img' className="w-100" />
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>

            <section className="pt-0">
                <Category />
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg='12' className="text-center">
                            <h5 className="feature__subtitle mb-4">What we serve</h5>
                            <h2 className="feature__title">Just sit back at home</h2>
                            <h2 className="feature__title">
                                we will
                                <span> take care</span>
                            </h2>

                            <p className="mb-1 mt-4 feature__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptatum.</p>

                            <p className="feature__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptatum.</p>

                        </Col>

                        {
                            featureData.map((item, index) => (

                                <Col lg='4' d='4' key={index} className='mt-5'>

                                    <div className="feature__item text-center px-5 py-3">
                                        <img src={item.imgUrl} alt="feature-img" className="w-25 mb-3" />

                                        <h5 className="fw-bold mb-3">{item.title}</h5>
                                        <p>{item.desc}</p>

                                    </div>

                                </Col>
                            ))
                        }


                    </Row>
                </Container>

            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg='12' className="text-center">
                            <h2>Popular Foods</h2>
                        </Col>

                        <Col lg='12' >
                            <div className="food__category d-flex align-items-center justify-content-center gap-4">
                                
                                <button className={`all__btn ${category === 'ALL'? 'foodBtnActive': ""}`} onClick={() => setCategory("ALL")}>All</button>
                                <button className={`d-flex align-items-center gap-2 ${category === 'BURGER'? 'foodBtnActive': ""}`} onClick={() => setCategory("BURGER")}><img src={foodCategoryImg01} alt='' />Burger</button>
                                <button className={`d-flex align-items-center gap-2 ${category === 'PIZZA'? 'foodBtnActive': ""}`} onClick={() => setCategory("PIZZA")}><img src={foodCategoryImg02} alt='' />Pizza</button>
                                <button className={`d-flex align-items-center gap-2 ${category === 'BREAD'? 'foodBtnActive': ""}`} onClick={() => setCategory("BREAD")}><img src={foodCategoryImg03} alt='' />Bread</button>

                            </div>
                        </Col>

                        {
                            // allProducts is from the useEffect hook.
                            allProducts.map((item, index) => (
                                <Col lg='3' md='4' key={item.id} className='mt-5'>
                                    <ProductCard item={item} />
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </section>
            
            <section>
                <Container>
                    <Row>
                        <Col lg = '6' md = '6' >
                            <img src = {whyImg} alt = "why-tasty-treat"></img>

                        </Col>

                        <Col lg = '6' md = '6' >
                            <div className="why__tasty-treat">
                                <h2 className="tasty__treat-little">Why tasty treat?</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis veniam natus, nihil beatae quam fuga reiciendis. Quaerat distinctio, officiis soluta non fuga quasi! Error veritatis quaerat reprehenderit inventore illo ullam?</p>
                            </div>

                        </Col>
                        
                        <ListGroup>
                            <ListGroupItem>
                                
                            </ListGroupItem>
                        </ListGroup>

                    </Row>
                    
                </Container>

            </section>
                        
        </Helmet>
    );
};

export default Home;