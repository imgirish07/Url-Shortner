import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (
            <div style={{
                background: 'linear-gradient(to right, rgb(252, 92, 125), rgb(106, 130, 251))', padding: '10px 20px', color: 'rgb(0, 0, 0)', overflow: 'hidden',
                position: 'sticky',
                top: '0',
                zIndex: '1000',
                padding: '10px 20px'
            }}>
                <nav>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight: 'bold', color: 'rgb(0, 0, 0)' }}>
                        <Link to="/" style={{ fontSize: '1.5rem', textDecoration: 'none', color: 'rgb(0, 0, 0)' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >

                                <div>SnipURL</div>

                            </div>
                        </Link>

                        <div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex' }}>
                                <li style={{ marginRight: '10px' }}>
                                    <Link to="/" style={{ color: 'rgb(0, 0, 0)', textDecoration: 'none' }}>Home</Link>
                                </li>
                                <li style={{ marginRight: '10px' }}>
                                    <Link to="/user/signup" style={{ color: 'rgb(0, 0, 0)', textDecoration: 'none' }}>Sign Up</Link>
                                </li>
                                <li>
                                    <Link to="/user/login" style={{ color: 'rgb(0, 0, 0)', textDecoration: 'none' }}>Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
