/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import './Footer.css';
import Logo from '../../assets/img/Logo.svg';
import { FaFacebookF } from 'react-icons/fa';

export default (props) => {
    return(
        <footer>
            <div className="row first">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="row last">
                <span className="eCopy">Scriplex Project &copy; 2021</span>
            </div>
            <div className="row last">
                <div className="Social-Block">
                    <div className="Social-Block Inner"><FaFacebookF /></div>
                </div>
            </div>
        </footer>
    );
}