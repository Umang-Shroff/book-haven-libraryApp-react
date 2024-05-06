import React from 'react'
import './Maindiv.css';
import { Link } from 'react-router-dom';

const Maindiv = () => {
  return (
    <div>
        <div className="wrappercard">
        <article className="mainpagecards">
		      <span className="tagx">Overview</span>
		      <h2 className="titlex">Endless Possibilities, Infinite Imagination</h2>
		      <p className="infox">Step into our virtual shelves and discover a treasure trove of literary gems waiting to be explored. From classic novels to contemporary bestsellers, from academic journals to captivating audiobooks, our diverse collection caters to all tastes and preferences.</p>
		      <Link to='/books'>
          		<button className="buttonx">
		      	<span>Explore</span>
		      	<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="none">
		      		<path d="M0 0h24v24H0V0z" fill="none" />
		      		<path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" fill="currentColor" />
		      	</svg>
		      </button>
          </Link>
	      </article>
        </div>
    </div>
  )
}

export default Maindiv;
