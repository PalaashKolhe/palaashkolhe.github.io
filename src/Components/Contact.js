import React, { Component } from 'react';

class Contact extends Component {
  render() {

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">Feel free to contact me at <a href="mailto:pkolhe@uwaterloo.ca">pkolhe@uwaterloo.ca</a> if you have any questions!</p>

            </div>
      </div>
   </section>
    );
  }
}

export default Contact;
