import React from "react";

export default function EventInquiry() {
  return (
    <div className="container mx-auto py-8">
      <h2 className="font-belvina text-darkblue text-3xl sm:text-4xl text-center mb-8">Event Inquiry</h2>
      <div className="bg-white shadow-md p-8 rounded-lg">
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block font-candara text-darkblue mb-2">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-darkblue rounded-md focus:outline-none focus:border-darkorange"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block font-candara text-darkblue mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-darkblue rounded-md focus:outline-none focus:border-darkorange"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="eventDate" className="block font-candara text-darkblue mb-2">Event Date:</label>
            <input
              type="text"
              id="eventDate"
              name="eventDate"
              className="w-full p-2 border border-darkblue rounded-md focus:outline-none focus:border-darkorange"
              placeholder="Enter the date of the event"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="theme" className="block font-candara text-darkblue mb-2">Event Theme:</label>
            <input
              type="text"
              id="theme"
              name="theme"
              className="w-full p-2 border border-darkblue rounded-md focus:outline-none focus:border-darkorange"
              placeholder="Event Theme"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="interest" className="block font-candara text-darkblue mb-2">Interested In:</label>
            <textarea
              id="interest"
              name="interest"
              rows="4"
              className="w-full p-2 border border-darkblue rounded-md focus:outline-none focus:border-darkorange"
              placeholder="Please provide more details about what you are interested in"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-darkorange to-orange text-beige py-2 px-4 rounded-full font-candara transition-all duration-200 hover:opacity-90"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
