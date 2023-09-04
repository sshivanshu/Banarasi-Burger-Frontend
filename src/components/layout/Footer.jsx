import React from "react";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Banarasi Burger</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @Banarasi Burger</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/shivasingh2842/">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/sshivanshu">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
