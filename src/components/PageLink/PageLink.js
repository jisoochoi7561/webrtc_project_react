import React from 'react';
import './PageLink.css';
import { Link } from 'react-router-dom';

function PageLink(props) {
    return (
<div className="col-md-4 text-right" >
  <div className = "pageLink rounded-circle">
    <div className = "contents">
    <img src ={props.img} className="img img-responsive"/>
    <Link to={props.to} style={{ textDecoration: 'none' }} ><h1>{props.name}</h1></Link>
    </div>
  </div>
</div>     
    );
  }
  
  export default PageLink;
