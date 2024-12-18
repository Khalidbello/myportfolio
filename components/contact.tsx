import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Topper from "./topper";
import TopperText from "./topper-text";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import { useState } from "react";

const Contact: React.FC = () => {
  const [error, showError] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // function to handle form field change
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name) return showError("Please fill enter name..");
    if (!formData.email) return showError("Please fill enter email..");
    if (!formData.message) return showError("Please fill enter message..");

    const mailtoLink = `mailto:bellokhalid74@gmail.com?subject=Message from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div id="contact" className="relative bg-bg2 w-full">
      <div className="py-20">
        <Topper />
        <TopperText
          head={"Contact"}
          note={`Hit me up let's talk about the next big thing`}
        />
        <div className="mt-16 px-8">
          <h2 className="text-center mb-10">
            <span className="px-4 py-2 border-[2px] border-prmry2 text-prmry1 font-mono rounded-tl-[1rem] rounded-br-[1rem]">
              Send Me A Message
            </span>
          </h2>
          <form onSubmit={handleSubmit} className="block max-w-xl mx-auto">
            <div className="flex items-center justify-between flex-grow gap-x-10 mb-8">
              <div className="flex flex-col items-start justify-start gap-y-2 w-[46%]">
                <label htmlFor="name" className="text-sm text-prmry1">
                  Your name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={onChange}
                  placeholder="Enter your name"
                  className="w-full px-4 bg-transparent border-b-[2px] border-b-prmry2 text-sm"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-y-2 w-[46%]">
                <label htmlFor="email" className="text-sm text-prmry1">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  onChange={onChange}
                  placeholder="Enter your email"
                  className="w-full px-4 bg-transparent border-b-[2px] border-b-prmry2 text-sm"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-y-2 mb-4">
              <label htmlFor="message" className="text-sm text-prmry1">
                Your message *
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your needs"
                onChange={onChange}
                className="h-[3.5rem] w-full px-4 py-1 bg-transparent border-b-[2px] border-b-prmry2 text-sm"
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button className="px-4 py-2 rounded-full bg-prmry1 text-gray-800 flex items-center justify-center gap-3">
                Send{" "}
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="w-5 h-5 text-gray-800"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
