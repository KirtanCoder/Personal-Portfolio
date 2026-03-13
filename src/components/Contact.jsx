import { useState } from "react";
import { Forminit } from "forminit";

const forminit = new Forminit();
const FORM_ID = "soz7su207uz";

const Contact = () => {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("loading");
    setError(null);

    const formData = new FormData(e.target);

    const { error } = await forminit.submit(FORM_ID, formData);

    if (error) {
      setStatus("error");
      setError(error.message);
      return;
    }

    setStatus("success");
    e.target.reset();
  };

  return (
    <div name="contact" className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">

      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">

        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">
            Submit the form below to get in touch with me
          </p>
        </div>

        <div className="flex justify-center items-center">

          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full md:w-1/2"
          >

            <input
              type="text"
              name="fi-sender-firstName"
              placeholder="Enter your name"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />

            <input
              type="email"
              name="fi-sender-email"
              placeholder="Enter your email"
              required
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />

            <textarea
              name="fi-text-message"
              rows="8"
              placeholder="Enter your message"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            {status === "error" && (
              <p className="text-red-500 mt-2">{error}</p>
            )}

            {status === "success" && (
              <p className="text-green-500 mt-2">
                Message sent successfully!
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="text-white bg-gradient-to-b mt-3 from-cyan-500 to-blue-500 px-6 py-3 mx-auto rounded-md hover:scale-110 duration-300"
            >
              {status === "loading" ? "Sending..." : "Let's Talk"}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;