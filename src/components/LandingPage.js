import React from 'react';
import { Link } from 'react-router-dom';
import '../css/LandingPage.css';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <main>
        <br></br>
        <br></br>
        <br></br>
        <h1>Welcome to QuillSync</h1>
        <p>This tool allows multiple users to edit and share documents seamlessly in real-time.</p>
        <div className="landing-buttons">
          <Link to="/login"><button>Login</button></Link>
          <Link to="/signup"><button>Signup</button></Link>
        </div>
        
        <section className="features">
          <h2>Features</h2>
          <div className="feature-list">
            <div className="feature-item">
              <h3>Real-Time Collaboration</h3>
              <p>Edit documents with your team in real-time, no more waiting for updates.</p>
            </div>
            <div className="feature-item">
              <h3>Version Control</h3>
              <p>Track changes and revert to previous versions with ease.</p>
            </div>
            <div className="feature-item">
              <h3>Secure Sharing</h3>
              <p>Share documents securely with colleagues and clients.</p>
            </div>
          </div>
        </section>
        
        <section className="testimonials">
          <h2>What Our Users Say</h2>
          <div className="testimonial-list">
            <div className="testimonial-item">
              <p>"QuillSync has revolutionized the way our team collaborates. We can't imagine working without it!"</p>
              <p>- Alex, Project Manager</p>
            </div>
            <div className="testimonial-item">
              <p>"The real-time editing feature is a game-changer. It's like we're all in the same room."</p>
              <p>- Jamie, Developer</p>
            </div>
            <div className="testimonial-item">
              <p>"Secure sharing and version control gives us peace of mind. Highly recommend QuillSync!"</p>
              <p>- Taylor, Designer</p>
            </div>
          </div>
        </section>

        <section className="call-to-action">
          <h2>Get Started with QuillSync Today!</h2>
          <p>Join thousands of teams who trust QuillSync for their document collaboration needs.</p>
          <Link to="/signup"><button>Sign Up Now</button></Link>
        </section>
        
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;