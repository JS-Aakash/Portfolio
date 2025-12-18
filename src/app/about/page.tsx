"use client";
import React, { useEffect, useState } from "react";
import { DiMongodb, DiNginx, DiNpm, DiPostgresql, DiVim } from "react-icons/di";
import {
  FaAws,
  FaCss3,
  FaDocker,
  FaEnvelope,
  FaGit,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaLinux,
  FaNodeJs,
  FaPhone,
  FaReact,
  FaVuejs,
  FaYarn,
  FaJava,
  FaPython,
} from "react-icons/fa6";
import {
  RiFirebaseFill,
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiExpress,
  SiJavascript,
  SiKubuntu,
  SiPm2,
  SiPrettier,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
  SiFlutter,
  SiFigma,
  SiGraphql,
  SiSocketdotio,
  SiMysql,
  SiRedis,
  SiSupabase,
  SiPostman,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { TbTerminal2 } from "react-icons/tb";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "jsaakash22@gmail.com",
    href: "mailto:jsaakash22@gmail.com",
    icon: <FaEnvelope height={"50px"} />,
  },
  {
    name: "Phone",
    content: "+91 86678 32633",
    href: "tel:+918667832633",
    icon: <FaPhone height={"50px"} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/aakashjs/",
    content: "/aakashjs",
    icon: <FaLinkedin height={"50px"} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/JS-Aakash",
    content: "/JS-Aakash",
    icon: <FaGithub height={"50px"} />,
  },
];

const TOOLS = [
  {
    name: "Java",
    content: "Java is a high-level, class-based, object-oriented programming language.",
    icon: <FaJava size={"50px"} color={"#5382a1"} />,
    color: "#5382a1",
  },
  {
    name: "Python",
    content: "Python is an interpreted, high-level and general-purpose programming language.",
    icon: <FaPython size={"50px"} color={"#3776ab"} />,
    color: "#3776ab",
  },
  {
    name: "JavaScript",
    content: "JavaScript is a high-level, interpreted programming language",
    icon: <SiJavascript size={"50px"} color={"#f0db4f"} />,
    color: "#f0db4f",
  },
  {
    name: "TypeScript",
    content: "TypeScript is a superset of JavaScript that compiles to plain JS",
    icon: <SiTypescript size={"50px"} color={"#007acc"} />,
    color: "#007acc",
  },
  {
    name: "Html5",
    content: "HTML5 is a markup language used for structuring and presenting content on the World Wide Web.",
    icon: <FaHtml5 size={"50px"} color="#e34c26" />,
    color: "#e34c26",
  },
  {
    name: "CSS3",
    content: "CSS3 is the latest evolution of the Cascading Style Sheets language.",
    icon: <FaCss3 size={"50px"} color="#563d7c" />,
    color: "#563d7c",
  },
  {
    name: "Tailwind CSS",
    content: "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.",
    icon: <RiTailwindCssFill size={"50px"} color="#06b6d4" />,
    color: "#06b6d4",
  },
  {
    name: "React.js",
    content: "React is a free and open-source front-end JavaScript library for building user interfaces.",
    icon: <FaReact size={"50px"} color="#61dafb" />,
    color: "#61dafb",
  },
  {
    name: "Next.js",
    content: "Next.js is a React framework for production.",
    icon: <RiNextjsFill size={"50px"} color="#000000" />,
    color: "#000000",
  },
  {
    name: "Node.js",
    content: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment.",
    icon: <FaNodeJs size={"50px"} color="#6cc24a" />,
    color: "#6cc24a",
  },
  {
    name: "Express.js",
    content: "Express.js is a back-end web application framework for Node.js.",
    icon: <SiExpress size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Flutter",
    content: "Flutter is an open-source UI software development kit created by Google.",
    icon: <SiFlutter size={"50px"} color="#02569B" />,
    color: "#02569B",
  },
  {
    name: "Figma",
    content: "Figma is a vector graphics editor and prototyping tool which is primarily web-based.",
    icon: <SiFigma size={"50px"} color="#F24E1E" />,
    color: "#F24E1E",
  },
  {
    name: "GraphQL",
    content: "GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.",
    icon: <SiGraphql size={"50px"} color="#E10098" />,
    color: "#E10098",
  },
  {
    name: "Socket.IO",
    content: "Socket.IO is a JavaScript library for realtime web applications.",
    icon: <SiSocketdotio size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "MongoDB",
    content: "MongoDB is a source-available cross-platform document-oriented database program.",
    icon: <DiMongodb size={"50px"} color="#4db33d" />,
    color: "#4db33d",
  },
  {
    name: "PostgreSQL",
    content: "PostgreSQL is a free and open-source relational database management system.",
    icon: <DiPostgresql size={"50px"} color="#336791" />,
    color: "#336791",
  },
  {
    name: "MySQL",
    content: "MySQL is an open-source relational database management system.",
    icon: <SiMysql size={"50px"} color="#4479A1" />,
    color: "#4479A1",
  },
  {
    name: "Redis",
    content: "Redis is an in-memory data structure store, used as a distributed, in-memory key–value database.",
    icon: <SiRedis size={"50px"} color="#DC382D" />,
    color: "#DC382D",
  },
  {
    name: "Firebase",
    content: "Firebase is a platform developed by Google for creating mobile and web applications.",
    icon: <RiFirebaseFill size={"50px"} color="#FFCA28" />,
    color: "#FFCA28",
  },
  {
    name: "Supabase",
    content: "Supabase is an open source Firebase alternative.",
    icon: <SiSupabase size={"50px"} color="#3ECF8E" />,
    color: "#3ECF8E",
  },
  {
    name: "Git",
    content: "Git is a free and open source distributed version control system.",
    icon: <FaGit size={"50px"} color="#f05032" />,
    color: "#f05032",
  },
  {
    name: "GitHub",
    content: "GitHub is a provider of Internet hosting for software development and version control using Git.",
    icon: <FaGithub size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Docker",
    content: "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.",
    icon: <FaDocker size={"50px"} color="#2496ed" />,
    color: "#2496ed",
  },
  {
    name: "Postman",
    content: "Postman is an API platform for building and using APIs.",
    icon: <SiPostman size={"50px"} color="#FF6C37" />,
    color: "#FF6C37",
  },
  {
    name: "VS Code",
    content: "Visual Studio Code is a source-code editor made by Microsoft.",
    icon: <SiVisualstudiocode size={"50px"} color="#007acc" />,
    color: "#007acc",
  },
];

function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);
  useEffect(() => {
    setToolsLoaded(true);
  }, []);
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">
        <aside className="w-full md:basis-1/4">
          <div
            className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600"
            style={{
              backdropFilter: "blur(2px)",
            }}
          >
            <div className="flex flex-row lg:flex-col items-center">
              <div className="flex justify-center items-center lg:w-full lg:aspect-square bg-zinc-800 rounded-xl lg:mb-5">
                <img
                  className="rounded-full p-4 lg:p-10 w-[100px] md:w-[150px] lg:w-[200px] aspect-square  bg-zinc-800"
                  alt="me"
                  src="/assets/me.jpg"
                />
              </div>
              <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                <p className="text-center text-xl">Aakash JS</p>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                  Full Stack Developer
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-600" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-3 gap-3 w-full h-12 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border-[.5px] rounded-md "
                      href={link.href}
                    >
                      <div className="w-8">{link.icon}</div>
                      <div className="flex flex-col">
                        <div className="text-sm">{link.name}</div>
                        <div className="text-xs text-zinc-500">
                          {link.content}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <main className="basis-3/4 w-[500px]">
          <div
            className="p-10 border-[.5px] rounded-md border-zinc-600"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <h1 className="text-3xl mb-10 lg:md-20">About me</h1>
            <p className="mb-10 text-roboto">
              Aspiring Software Developer passionate about full-stack development, system design, and AI/ML innovation. Strong
              proficiency in Java, Python, and JavaScript, with hands-on experience building scalable Web and Android applications. Skilled
              in Data Structures, Algorithms, and Back-end technologies. Demonstrated ability to architect scalable, high-performance
              solutions that integrate blockchain, with a strong emphasis on security and user engagement. Having experience in problem
              solving, agile development, and delivering high-quality software solutions with a focus on performance and user experience.
            </p>
            <p className="mb-10">
              When I&apos;m not coding, you can find me
              exploring new technologies, or sipping coffee
              while brainstorming my next project.
            </p>
            <h1 className="text-3xl mb-10 lg:md-20">Stuff I use</h1>
            <div className="mb-5">
              {!toolsLoaded ? (
                <p className="h-[100px]"></p>
              ) : (
                <Splide
                  options={{
                    type: "loop",
                    interval: 2000,
                    autoplay: true,
                    pagination: false,
                    speed: 2000,
                    perPage: 5,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {TOOLS.reverse().map((tool) => (
                    <SplideSlide key={tool.name}>
                      <div
                        key={tool.name}
                        className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md"
                      >
                        {tool.icon}
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </div>

            <h1 className="text-3xl mb-10 lg:md-20 mt-10">Awards & Achievements</h1>
            <ul className="list-disc list-inside space-y-3 mb-10 text-zinc-300">
              <li>
                <span className="font-bold">Winner, Coding Contests:</span> Ranked 1st among all 1st-year students in DSA competition (2024) and repeated the achievement by securing 1st again in the 2nd-year category (2025).
              </li>
              <li>
                Won the Title <span className="font-bold">Mr.Coder</span> in a national level technical symposium (2025).
              </li>
              <li>
                <span className="font-bold">Frontend Design Excellence:</span> Awarded 1st prize for developing an exceptional frontend interface using Tailwind CSS.
              </li>
              <li>
                <span className="font-bold">Competitive Programmer:</span> Solved over 350 problems on LeetCode; proficient in Trees, Linked Lists, DP, Arrays.
              </li>
              <li>
                <span className="font-bold">Technical Presenter:</span> Presented research papers at 4 inter-college symposiums (Winning paper on Software Development, Mathematics, Secure Communication).
              </li>
            </ul>

            <h1 className="text-3xl mb-10 lg:md-20 mt-10">Certifications</h1>
            <ul className="list-disc list-inside space-y-2 mb-10 text-zinc-300">
              <li>NPTEL Programming in Modern C++ (Elite + Silver)</li>
              <li>Server-Side Rendering with Next.js (Coursera)</li>
              <li>Learn Next.js (Scrimba)</li>
              <li>Python (Sololearn)</li>
              <li>Flutter & Firebase (College)</li>
              <li>Dart (Cursa)</li>
            </ul>
            {/* <div className="">
              <Splide
                options={{
                  type: "loop",
                  interval: 2000,
                  autoplay: true,
                  pagination: false,
                  speed: 3000,
                  perPage: 5,
                  perMove: 1,
                  rewind: true,
                  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                  arrows: false,
                }}
                aria-label="My Favorite Images"
              >
                {TOOLS.map((tool) => (
                  <SplideSlide key={tool.name}>
                    <div
                      key={tool.name}
                      className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md"
                    >
                      {tool.icon}
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div> */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
