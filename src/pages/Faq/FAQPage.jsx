import React, { useState } from "react";
import ContentApi from "../../../Api/ContentApis";
import { useQuery } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

export default function FAQPage() {
  const {
    data: faqs,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["faq"],
    queryFn: () => ContentApi.getFaQ(),
    onError: (error) => {
      console.log("Error loading faq .", error);
    },
  });

  const theme = useSelector((state) => state.theme.theme);

  if (isLoading) return <div>Loading...</div>;

  return (
    <section className="dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2
          className={`mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          Frequently asked questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 text-left border-t border-gray-200 dark:border-gray-700">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-10">
              <h3
                className={`flex items-center mb-4 text-lg font-medium  text-gray-900 dark:text-white ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                <FontAwesomeIcon icon={faCircleQuestion} className="mr-2" />
                {faq.question}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
