import React from "react";

const Contact = () => {
  const handleEmail = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    console.table(name, email, message);
  };
  return (
    <section id="contact" className="p-10 my-10 space-y-5">
      <h2 className="text-6xl">Contact</h2>
      <form className="md:w-1/2 mx-auto " onSubmit={handleEmail}>
        <div className="py-2">
          <div className="w-full">
            <p>Name</p>
            <input
              name="name"
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
              name="email"
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
    </section>
  );
};

export default Contact;
