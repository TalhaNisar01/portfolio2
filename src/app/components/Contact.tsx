import React from "react";

const Contact = () => {
  return (
    <main id="Contact" className="flex min-h-screen flex-col justify-between p-4 w-[100vw] max-w-[1440px] items-center">
      <form className="w-full max-w-2xl">
        <h1 className="text-3xl font-semibold mb-6 text-center">Contact Me</h1>
        <section className="w-full">
          <div className="flex flex-col md:flex-row gap-4">
            {/* First Name */}
            <div className="flex-1">
              <label htmlFor="fname" className="block font-medium">
                First Name: <span className="text-[#0c7d69]">*</span>
              </label>
              <input
                type="text"
                id="fname"
                name="fname"
                required
                className="border rounded-lg w-full p-2"
                placeholder="Your First Name"
              />
            </div>
            {/* Last Name */}
            <div className="flex-1">
              <label htmlFor="lname" className="block font-medium">
                Last Name: <span className="text-[#0c7d69]">*</span>
              </label>
              <input
                type="text"
                id="lname"
                name="lname"
                required
                className="border rounded-lg w-full p-2"
                placeholder="Your Last Name"
              />
            </div>
          </div>
          <br />
          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-medium">
              Email Address: <span className="text-[#0c7d69]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="border rounded-lg w-full p-2"
              placeholder="Your Email"
            />
          </div>
        </section>
        <br />
        {/* Query Type */}
        <section>
          <label className="block font-medium">
            Query Type: <span className="text-[#0c7d69]">*</span>
          </label>
          <div className="flex flex-col md:flex-row justify-between gap-4 mt-2">
            <div className="flex gap-2 border p-4 rounded-lg w-full">
              <input type="radio" id="Application" name="query" value="Application" required />
              <label htmlFor="Application">Job Application Inquiry</label>
            </div>
            <div className="flex gap-2 border p-4 rounded-lg w-full">
              <input type="radio" id="Career" name="query" value="Career" required />
              <label htmlFor="Career">General Career Inquiry</label>
            </div>
          </div>
        </section>
        <br />
        {/* Message */}
        <section>
          <label htmlFor="message" className="block font-medium">
            Message: <span className="text-[#0c7d69]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            cols={30}
            rows={5}
            placeholder="Your Message"
            className="border w-full p-2 rounded-lg"
            required
          ></textarea>
        </section>
        <br />
        {/* Consent */}
        <section>
          <div className="flex gap-2 items-start">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              required
              className="mt-1"
            />
            <label htmlFor="consent">
              I consent to being contacted by the team
              <span className="text-[#0c7d69]">*</span>
            </label>
          </div>
        </section>
        <br />
        {/* Submit Button */}
        <input
          className="bg-[#0c7d69] w-full p-2 rounded-lg text-white font-semibold hover:bg-[#095e53] transition"
          type="submit"
          value="Submit"
        />
      </form>
    </main>
  );
};

export default Contact;
