import React from 'react'

function Footer() {
  return (
<section id="footer">
  <div className="footer container">
    <div className="brand">
      <h1>
        <span>S</span>haif <span>A</span>rfan
      </h1>
    </div>
    <h2>Your Complete Web Solution</h2>
    <div className="social-icon">
      <div className="social-item">
        <a href="#">
          <img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" />
        </a>
      </div>
      <div className="social-item">
        <a href="#">
          <img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" />
        </a>
      </div>
      <div className="social-item">
        <a href="#">
          <img src="https://img.icons8.com/bubbles/100/000000/twitter.png" />
        </a>
      </div>
      <div className="social-item">
        <a href="#">
          <img src="https://img.icons8.com/bubbles/100/000000/behance.png" />
        </a>
      </div>
    </div>
    <p>Copyright © 2020 Arfan. All rights reserved</p>
  </div>
</section>
  )
}

export default Footer