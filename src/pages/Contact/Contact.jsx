import "./Contact.css";

//FontAwesome Import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

//Components Import
import HeadingText from "../../components/HeadingText/HeadingText";

export default function Contact() {
  return (
    <>
      <main>
        <section>
          <HeadingText title={"Contact"} titlePrimary={"Me"} />
          <div className="container contact-container">
            <form action="#">
              <input type="text" required placeholder="Your Name" />
              <input type="email" required placeholder="Email" />
              <input type="number" required placeholder="Phone number" />
              <textarea
                name="message"
                id="message"
                rows="6"
                placeholder="Your Message"
              ></textarea>
              <button type="submit" className="btn">
                Send <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </form>
          </div>
        </section>
        <footer>
          By Neo Nguyen || imneoneonguyen@gmail.com
        </footer>
      </main>
    </>
  );
}