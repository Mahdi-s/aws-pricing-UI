import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Goddard Space Flight Center Mission Cloud Program Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;


