import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
    <div>
	    <section className="about">
	    	<h1>About Us</h1>
	    	<p style={{fontWeight: "bold",fontSize:'larger'}}>
	    	Company
	    	</p>
	    	<div className="about-info">

	    		<div>
	    		<p style={{textAlign:'center', fontSize:'x-large'}}> 
          your digital gateway to an expansive world of knowledge and imagination.
            <p style={{position:'relative',marginTop:'20px',textAlign:'center'}}>
              we believe that access to information is a fundamental right, and we're passionate about making it convenient and enjoyable for everyone.
            </p>
          </p>
	    		</div>
	    	</div>
	    </section>

	    <footer className="footerabout">
	    	<p>© 2024. All Rights Reserved.</p>
	    </footer>
    </div>
    </>
  )
}

export default About
