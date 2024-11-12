export default function TitleHead({ title }) {
  return (
    <div className="grid grid-cols-2 p-2">
      <div className="title_head">{title}</div>
      <div className="text-right">
        <a
          href="#"
          className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline title_link"
        >
          Voir 
          <svg
            className="w-4 h-4 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
