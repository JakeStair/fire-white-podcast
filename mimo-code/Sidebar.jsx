import React from 'react';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Episodes</h2>
      <ul>
        <li><a href="#">Series Trailer</a></li>
        <li><a href="tamika-catchings.html">Tamika Catchings</a></li>
        <li><a href="#">Lisa Leslie</a></li>
      </ul>
      <h2>Future Episodes</h2>
      <ul className="future-episode-links">
        <li><a href="#">'97 Houston Comets</a></li>
        <li><a href="#">'01 Los Angeles Sparks</a></li>
        <li><a href="#">'03 Detroit Shock</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;