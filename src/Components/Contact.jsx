import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_nzv6nbj", "template_jjo8prw", form.current, {
        publicKey: "1pqNKoURfT_ITtvkD",
      })
      .then(
        () => {
          document.getElementById("form").reset();
          toast.success('Message send successfully');
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  //   const handleEmail = (event) => {
  //     event.preventDefault();
  //     const form = event.target;
  //     const name = form.name.value;
  //     const email = form.email.value;
  //     const message = form.message.value;
  //     console.table(name, email, message);
  //   };
  return (
    <section id="contact" className="p-10 my-10 space-y-5">
      <h2 className="text-6xl">Contact</h2>
      <form
        id="form"
        className="md:w-1/2 mx-auto "
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="py-2">
          <div className="w-full">
            <p>Name</p>
            <input
              name="from_name"
              type="text"
              placeholder="Name"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="py-2">
          <div className="w-full">
            <p>Email</p>
            <input
              name="user_email"
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="py-2">
          <div className="w-full">
            <p>Message</p>
            <textarea
              name="message"
              type="text"
              placeholder="Message"
              className="textarea textarea-bordered textarea-lg w-full px-3 py-1"
            ></textarea>
          </div>
        </div>
        <div className="py-4">
          <input
            type="submit"
            value="Send Email"
            className="btn w-full bg-slate-800 text-white"
          />
        </div>
      </form>
      <Toaster />
    </section>
  );
};

export default Contact;
