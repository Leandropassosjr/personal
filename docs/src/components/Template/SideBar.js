import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Leandro Passos</h2>
        <p><a href="mailto:leandropassosjr@gmail.com">leandropassosjr@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Leandro. I am a machine learning researcher at the <a href="https://www2.unesp.br/">São Paulo State University - UNESP</a> and guitar player in a rock band called <a href="https://vulgarhardrock.wixsite.com/gangbang?lang=en">Gang Bang</a>. Previously, I was a post-doctoral researcher at the <a href="https://www.wlv.ac.uk/">University of Wolverhampton</a>, Uk, and worked at projects financed by <a href="https://fapesp.br/">FAPESP</a>, <a href="https://www.ukri.org/councils/epsrc/EPSRC">EPSRC</a> and <a href="https://petrobras.com.br/">Petrobras</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Leandro Passos <Link to="/">https://leandropassosjr.github.io/personal</Link>.</p>
    </section>
  </section>
);

export default SideBar;
