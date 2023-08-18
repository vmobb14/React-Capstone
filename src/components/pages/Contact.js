export default function Contact() {
  return (
    <div className="contact-body">
      <form className="contact-form">
        <h1>Contact us!</h1>
        <input type="text" id="first-name" placeholder="First Name" />
        <input type="text" id="last-name" placeholder="Last Name" />
        <input type="text" id="email" placeholder="Email" />
        <textarea
          name="message"
          id="message"
          placeholder="Write your message here..."
        ></textarea>
        <input type="submit" id="submit" />
      </form>
    </div>
  );
}
