import React, { useState, useEffect } from "react";
import './fetch.css';
import Footer from "../Footer";
import UserNavbar from "./UserNavbar";

const Fetch = () => {

    const [menu, setMenu] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch("http://localhost:3030/post")
            .then((res) => res.json())
            .then((json) => setMenu(json))
    }, [])

    return (
        <>
        <UserNavbar />
            <div className="main" data-aos="fade-up" data-aos-duration="3000">
                <div className="main-container">
                    <input type="search" onChange={e => setSearch(e.target.value)} className="input-search" placeholder="Search Here..." />
                    <div className="menu-content">
                        {menu.filter((post) => post.name.toLowerCase().includes(search)).map((post) => (
                            <div className="container">
                                <div className="box" key={post.id}>
                                    <img className="img2" src={post.img} />
                                    <h1 className="box-content" >{post.name}</h1>
                                    <h3 className="box-content">{post.type}</h3>
                                    <h3 className="box-price">Rp.{post.price}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Fetch
