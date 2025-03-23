import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import HeadingText from "../../components/HeadingText/HeadingText";

export default function Contact() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    // Get environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Validate environment variables
    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing environment variables in .env!");
      alert("Error: EmailJS configuration is incorrect! Please check your .env file.");
      return;
    }

    setIsLoading(true);

    try {
      const result = await emailjs.sendForm(serviceId, templateId, form.current, publicKey);

      console.log("Success:", result.text);
      setIsSent(true);
      form.current.reset();
    } catch (error) {
      console.error("Failed:", error);
      alert(`Email sending failed: ${error?.text || "Unknown error"}`);
    }

    setIsLoading(false);
  };

  return (
    <main>
      <section>
        <HeadingText title="Contact" titlePrimary="Me" />
        <div className="container contact-container">
          {isSent && <p className="success-message">✅ Message sent successfully!</p>}
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" required placeholder="Your Name" />
            <input type="email" name="user_email" required placeholder="Email" />
            <input type="tel" name="user_phone" required placeholder="Phone Number" />
            <textarea name="message" rows="6" required placeholder="Your Message"></textarea>
            <button type="submit" className="btn" disabled={isLoading || isSent}>
              {isLoading ? "Sending..." : isSent ? "Sent" : "Send"}{" "}
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </form>
        </div>
      </section>
      <footer>By Neo Nguyen || imneoneonguyen@gmail.com</footer>
    </main>
  );
}
