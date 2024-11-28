import React from "react";
import ContentApi from "../../../Api/ContentApis";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../../../config";
import { Link } from "react-router-dom";

export default function MyCoursesPage() {
  const {
    data: content,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["myCourses"],
    queryFn: () => ContentApi.getStartedCoursUser(),
    onError: (error) => {
      console.log("Error loading content detail.", error);
    },
  });

  if (isLoading) return <div>Loading...</div>;

  console.log(content);

  return (
    <div className="container">
      {content.map((content) => (
        <Link
          key={`finishedContent-${content.id}`}
          to={`/content/show/${content.cryptId}`}
          className="flex flex-col  mt-4 m-auto items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-7xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover h-full w-full rounded-t-lg md:h-full md:w-48 md:rounded-none md:rounded-s-lg"
            src={`${BASE_URL}/storage/${content.image}`}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <div>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                {content.categoryName}
              </span>
            </div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {content.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {content.smallDescription}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
