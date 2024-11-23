import React from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import Button from "./Button";

const ContactForm = () => {
  return (
    <FadeIn>
      <form>
        <Button type="button" className="mt-10">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScn4M2czzDlK0ltM6lkYtydGxLSjUSnUc0_-0PU9ecK45AJPQ/viewform?pli=1"
            target="_blank"  // This will open the form in a new tab
            rel="noopener noreferrer"  // This is for security, especially when opening external links in a new tab
            className="text-white"  // Ensure that text styling matches your button styling
          >
            Let’s work together
          </a>
        </Button>

      </form>
    </FadeIn>
  );
};

export default ContactForm;
