import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/founder.webp";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>Banarasi Burger</h4>
          <p>
          "Banaras in a Bun: Flavorful Traditions, Burger-Style!"
          </p>

          <p>
            Explore the various type of food and burgers. Click below to see the
            menu
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Shivanshu Singh</h3>
            </div>

            <p>
              I am Shivanshu Singh, the founder of Banarasi Burger.
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
