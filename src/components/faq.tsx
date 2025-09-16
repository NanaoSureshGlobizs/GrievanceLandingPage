
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is GovConnect Manipur?",
    answer:
      "GovConnect Manipur is an Integrated Public Grievance Redressal System by the Government of Manipur. It's a single platform for citizens to lodge grievances and for the government to track, monitor, and resolve them efficiently.",
  },
  {
    question: "How can I register a grievance?",
    answer:
      "You can register by clicking 'Login as Citizen' and entering your mobile number. You'll receive an OTP for verification. If you're a new user, you'll be prompted to create a profile. Once logged in, you can submit and track your grievances.",
  },
  {
    question: "How can I track the status of my grievance?",
    answer:
      "Once you've registered a complaint, you will receive a unique tracking ID. You can use this ID on the 'Track Grievance' section of the portal to get real-time updates on the status of your grievance.",
  },
  {
    question: "Which departments are covered under this portal?",
    answer:
      "The portal covers a wide range of government departments in Manipur. You can select the relevant department while lodging your grievance to ensure it is routed to the correct officials for prompt action.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Yes, we take data security very seriously. All personal information and grievance details are encrypted and stored securely. We adhere to strict privacy protocols to protect your data.",
  },
];

export function Faq() {
  return (
    <div className="max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger className="text-lg font-semibold text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
