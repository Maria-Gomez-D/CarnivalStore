import React from "react";

export default function Contact() {
  return (
    <div className="container mx-auto py-8">
      <h2 className="font-belvina text-darkblue text-3xl sm:text-4xl text-center mb-8">Contact Us</h2>
      <form className="max-w-lg mx-auto bg-white shadow-md p-8 rounded-lg">
        <div className="mb-6">
          <label htmlFor="name" className="block text-darkblue font-candara mb-2">Name</label>
          <input
            type="text"
            id="name"
            className="w-full border border-darkblue/40 px-3 py-2 rounded focus:outline-none focus:border-darkorange"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-darkblue font-candara mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="w-full border border-darkblue/40 px-3 py-2 rounded focus:outline-none focus:border-darkorange"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="comments" className="block text-darkblue font-candara mb-2">Comments</label>
          <textarea
            id="comments"
            className="w-full border border-darkblue/40 px-3 py-2 rounded focus:outline-none focus:border-darkorange"
            placeholder="Your Comments"
            rows="4"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="font-candara bg-gradient-to-r from-darkorange to-orange transition-all duration-200 text-beige py-2 px-4 rounded-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
