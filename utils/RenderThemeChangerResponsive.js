import { useTheme } from "next-themes";
const RenderThemeChangerResponsive = () => {
  const { setTheme } = useTheme();
  return (
    <div className="grid grid-cols-2">
      <button
        className="focus:outline-none rounded-tl-md rounded-bl-md flex space-x-2 py-2 text-gray-800 items-center justify-center dark:text-gray-200 bg-gray-300 dark:bg-gray-700"
        onClick={() => {
          setTheme("light");
        }}
      >
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        <span className="font-semibold">Light</span>
      </button>

      <button
        className="focus:outline-none rounded-tr-md rounded-br-md flex space-x-2 bg-gray-300 py-2 text-gray-800  items-center justify-center dark:text-gray-200 dark:bg-gray-700 bg-gray-400 dark:bg-gray-900"
        onClick={() => {
          setTheme("dark");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
        <span className="font-semibold">Dark</span>
      </button>
    </div>
  );
};

export default RenderThemeChangerResponsive;
