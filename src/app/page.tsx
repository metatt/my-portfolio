import type { Metadata } from "next";
import Projects from "./components/projects";
import ParticlesBackground from "./ParticlesBackground";
import Skills from "./components/skills";
const Page = () => {
  return (
    <div className="flex flex-col gap-8 mx-4 my-16 md:mx-0">
      <ParticlesBackground />
      <div className="flex flex-col-reverse gap-8 md:flex-row">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">
            Привет! &#128102;
          </h1>
          <div>
     
          </div>
          <hr className="border-t border-gray-300 my-2" />
          <p className="text-left">
   Меня зовут Тимофей
          </p> 
        </div>
      </div>
      <hr className="border-t border-gray-300 my-2" />
      <Skills />
      <Projects />
      <hr className="border-t border-gray-300 my-2" />
      <div className="flex flex-col gap-4">
        <h2 className="font-sfmono text-2xl">Контакты</h2>
        <ul className="list-inside">
          <li>
            <a
              href="#"
              className="flex items-center gap-2 font-bold underline text-primary/70 hover:text-primary/100"
              style={{ zIndex: 99, position: "relative" }}
            >
              email
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="t.me/keter_0"
              className="flex items-center gap-2 font-bold underline text-primary/70 hover:text-primary/100"
              style={{ zIndex: 99, position: "relative" }}
            >
              t.me/keter_0
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <hr className="border-t border-gray-300 my-2" />
      <h2 className="font-sfmono text-l">
        {"@metatt " + new Date().getFullYear()}
      </h2>
    </div>
  );
};

export default Page;
