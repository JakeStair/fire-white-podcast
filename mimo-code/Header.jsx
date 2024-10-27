import React from 'react';

function Header() {
  return (
    <div>
      <div className="topdiv">Fire & White Podcast</div>
      <nav>
        <a href="index.html">
          <img
            src="https://www.dropbox.com/scl/fi/5to2b9bjxhqlupe15qp4n/Fire-White-logo-with-Dimension.png?rlkey=qg64tenakor1x96oqn3v8r0zt&st=tohsun0t&raw=1"
            alt="logo"
          />
        </a>
        <ul>
          <li><a href="#">Episodes</a></li>
          <li><a href="#">Store</a></li>
          <li><a href="#">Our Story</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;