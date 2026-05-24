import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Container, Title, Caption, PrimaryButton } from "../../router";
import { commonClassNameOfInput } from "../../components/common/Design";

export const Contact = () => {
  return (
    <section className="contact-page py-16">
      <Container>
        <div className="text-center mb-12">
          <Title level={2} className="text-green">
            Contact Us
          </Title>
          <Caption className="text-gray-600">
            Have questions or need help? Reach out to us anytime.
          </Caption>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="contact-info bg-[#F9F9F9] shadow-lg rounded-lg p-8">
            <Title level={4} className="mb-4">
              Get in Touch
            </Title>
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-green text-xl" />
                <span className="text-gray-700 text-lg">+91-9879152484</span>
              </li>
              <li className="flex items-center gap-4">
                <FaEnvelope className="text-green text-xl" />
                <span className="text-gray-700 text-lg">skybid07@gmail.com</span>
              </li>
              <li className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-green text-xl" />
                <span className="text-gray-700 text-lg">Ahmedabad, India</span>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <form className="contact-form bg-white shadow-lg rounded-lg p-8">
            <Title level={4} className="mb-6">
              Send Us a Message
            </Title>
            <div className="space-y-6">
              <div>
                <Caption className="mb-2">Your Name *</Caption>
                <input
                  type="text"
                  className={commonClassNameOfInput}
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div>
                <Caption className="mb-2">Your Email *</Caption>
                <input
                  type="email"
                  className={commonClassNameOfInput}
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div>
                <Caption className="mb-2">Subject *</Caption>
                <input
                  type="text"
                  className={commonClassNameOfInput}
                  placeholder="Enter Subject"
                  required
                />
              </div>
              <div>
                <Caption className="mb-2">Message *</Caption>
                <textarea
                  rows="5"
                  className={commonClassNameOfInput}
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>
              <PrimaryButton className="w-full mt-4">Submit</PrimaryButton>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};
