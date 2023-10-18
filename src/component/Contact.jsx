import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BsLinkedin, BsGithub, BsCheckCircle } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

const initialFormState = {
  user_name: "",
  user_email: "",
  message: "",
};

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState({});
  const [alert, setAlert] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const clearForm = () => {
    setFormData(initialFormState);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Perform form validation before sending the email
    const errors = {};
    if (!formData.user_name.trim()) {
      errors.user_name = "Name is required.";
    }
    if (!formData.user_email || !formData.user_email.includes("@")) {
      errors.user_email = "Valid email is required.";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required.";
    }

    if (Object.keys(errors).length === 0) {
      emailjs
        .sendForm(
          "service_0nv1sjh",
          "template_bgysg7e",
          form.current,
          "Aj77cXQSkz9oOeiom"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
            clearForm();
            setFormErrors(!errors);

            setAlert(true);
            setTimeout(() => {
              setAlert(false);
            }, 2000)
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div id="contact" className="pt-52 px-7 pb-10 md:px-10">
      <div className="flex flex-col items-center">
        <h2
          className="font-bold text-4xl mb-10 dark:text-yellow-200"
          data-aos="flip-up"
        >
          - Contact -
        </h2>

        <div
          className="p-8 w-[100%] md:w-[70%] bg-white bg-opacity-30 dark:bg-opacity-10 border-[1px] border-white dark:border-yellow-200 dark:text-white rounded-3xl"
          data-aos="fade-up"
        >
          <div className="flex flex-col pb-7 border-b-2 border-white dark:border-yellow-200">
            <div className="flex items-center mb-2">
              <HiMail className="-ml-1 mr-2 text-4xl text-red-500 dark:text-red-400" />
              <p className="sm:hidden">
                napatsawan.az
                <br /> @gmail.com
              </p>
              <p className="hidden sm:block">napatsawan.az@gmail.com</p>
            </div>
            <div className="flex items-center mb-2">
              <BsLinkedin className="mr-3 text-3xl text-blue-500 dark:text-blue-400" />
              <p>napatsawan armin</p>
            </div>
            <div className="flex items-center mb-2">
              <BsGithub className="mr-3 text-3xl text-purple-500 dark:text-purple-400" />
              <p>napatsawan.az</p>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col mt-10">
            <label className="font-medium">Your Name</label>
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleInputChange}
              className="mt-1 py-1 px-2 rounded-md focus:outline-none dark:bg-neutral-600"
            />
            {formErrors.user_name && (
              <p className="text-red-500">{formErrors.user_name}</p>
            )}
            <label className="mt-5 font-medium">Your Email</label>
            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleInputChange}
              className="mt-1 py-1 px-2 rounded-md focus:outline-none dark:bg-neutral-600"
            />
            {formErrors.user_email && (
              <p className="text-red-500">{formErrors.user_email}</p>
            )}
            <label className="mt-5 font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="mt-1 py-1 px-2 rounded-md focus:outline-none dark:bg-neutral-600"
            />
            {formErrors.message && (
              <p className="text-red-500">{formErrors.message}</p>
            )}
            <input
              type="submit"
              value="Send"
              className="mt-8 py-1 font-semibold rounded-md bg-red-100 hover:bg-red-300 dark:bg-yellow-100 dark:hover:bg-yellow-200 dark:text-black hover:cursor-pointer"
            />
          </form>
          {alert && (
            <div className="mt-4 p-1 flex justify-center items-center bg-green-400 rounded-md dark:text-black">
              <BsCheckCircle />
              <p className="ml-3 text-center ">Your message have been sent</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
