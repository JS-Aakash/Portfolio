import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, Bot, Cpu, ExternalLink, Link2, MoveUpRight, Terminal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import { FaGithub, FaChrome } from "react-icons/fa";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
  SiEthereum,
  SiSolidity,
  SiScikitlearn,
  SiIpfs,
  SiFlask,
  SiNumpy,
  SiPandas,
  SiVercel,
  SiOpenai,
  SiNextdotjs,
  SiFastapi,
  SiStreamlit,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {/* 🌐 Visit Website Button — Green + External Arrow */}
      <Link rel="noopener" target="_blank" href={live} className="flex gap-2">
        <Button
          size="sm"
          className="group bg-green-600 hover:bg-green-700 text-white flex items-center">
          Live Demo
          <ArrowUpRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Button>
      </Link>

      {/* 🐙 GitHub Button — Dark + Icon + Arrow */}
      {repo && (
        <Link rel="noopener" target="_blank" href={repo} className="flex gap-2">
          <Button
            size="sm"
            className="group bg-gray-800 hover:bg-gray-900 text-white flex items-center">
            <FaGithub className="mr-2 w-5 h-5" />
            Source Code
            <ArrowUpRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </Link>
      )}
    </div>
  );
};


export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },

  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify />,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap />,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java" />,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus />,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino />,
  },
  ethereum: {
    title: "Ethereum",
    bg: "black",
    fg: "white",
    icon: <SiEthereum />,
  },
  solidity: {
    title: "Solidity",
    bg: "black",
    fg: "white",
    icon: <SiSolidity />,
  },
  scikitLearn: {
    title: "Scikit-learn",
    bg: "black",
    fg: "white",
    icon: <SiScikitlearn />,
  },
  chrome: {
    title: "Chrome Extension",
    bg: "black",
    fg: "white",
    icon: <FaChrome />,
  },
  ipfs: {
    title: "IPFS",
    bg: "black",
    fg: "white",
    icon: <SiIpfs />,
  },
  flask: {
    title: "Flask",
    bg: "black",
    fg: "white",
    icon: <SiFlask />,
  },
  numpy: {
    title: "NumPy",
    bg: "black",
    fg: "white",
    icon: <SiNumpy />,
  },
  pandas: {
    title: "Pandas",
    bg: "black",
    fg: "white",
    icon: <SiPandas />,
  },
  vercel: {
    title: "Vercel",
    bg: "black",
    fg: "white",
    icon: <SiVercel />,
  },
  ar: {
    title: "Augmented Reality",
    bg: "black",
    fg: "white",
    icon: <Cpu />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <SiOpenai />,
  },
  kestra: {
    title: "Kestra",
    bg: "black",
    fg: "white",
    icon: <Terminal />,
  },
  coderabbit: {
    title: "CodeRabbit",
    bg: "black",
    fg: "white",
    icon: <Bot />,
  },
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <SiFastapi />,
  },
  streamlit: {
    title: "Streamlit",
    bg: "black",
    fg: "white",
    icon: <SiStreamlit />,
  },
  nlp: {
    title: "NLP & Transformers",
    bg: "black",
    fg: "white",
    icon: <Bot />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "farm2pharma",
    category: "Blockchain",
    title: "Farm2Pharma",
    src: "/assets/projects-screenshots/Farm2Pharma/App.jpg",
    screenshots: [
      "/assets/projects-screenshots/Farm2Pharma/App.jpg",
      "/assets/projects-screenshots/Farm2Pharma/process.jpg",
      "/assets/projects-screenshots/Farm2Pharma/verify.jpg"
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.ethereum,
        PROJECT_SKILLS.solidity,
        PROJECT_SKILLS.ipfs,
      ],
    },
    live: "https://farmtopharma.netlify.app/",
    github: "https://github.com/JS-Aakash/Farm2Pharma",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono mb-4 text-sm">
            Farm2Pharma is a decentralized application (dApp) that creates an immutable, transparent record of every Ayurvedic herb batch&apos;s journey through the supply chain.
          </TypographyP>

          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc list-inside space-y-2 font-mono text-sm">
            <li><span className="text-white font-bold">Complete Traceability:</span> Track herbs from collection to packaging using GPS integration.</li>
            <li><span className="text-white font-bold">Blockchain Verification:</span> Immutable records on Ethereum Sepolia testnet ensures authenticity.</li>
            <li><span className="text-white font-bold">Secure Document Storage:</span> SHA-256 hashing + IPFS storage for compliance certificates.</li>
            <li><span className="text-white font-bold">Consumer-Centric:</span> Instant verification via smartphone QR code scanning.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Technical Impact</TypographyH3>
          <p className="font-mono mb-2 text-sm text-neutral-400">
            Eliminated data manipulation risks and improved authenticity validation by ensuring multi-stakeholder trust through on-chain provenance data.
          </p>
        </div>
      );
    },
  },
  {
    id: "neurocare",
    category: "HealthTech",
    title: "NeuroCare",
    src: "/assets/projects-screenshots/NeuroCare/home.jpg",
    screenshots: ["/assets/projects-screenshots/NeuroCare/home.jpg"],
    skills: {
      frontend: [
        PROJECT_SKILLS.streamlit,
        PROJECT_SKILLS.python,
      ],
      backend: [
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.openai,
        PROJECT_SKILLS.nlp,
      ],
    },
    live: "https://neurocare-715n.onrender.com/",
    github: "https://github.com/JS-Aakash/NeuroCare",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono mb-4 text-sm">
            NeuroCare is an advanced AI-powered medical prescription verification system that identifies potential drug interactions and ensures medication safety.
          </TypographyP>

          <TypographyH3 className="my-4 mt-8">AI Safety Analysis</TypographyH3>
          <ul className="list-disc list-inside space-y-2 font-mono text-sm">
            <li><span className="text-white font-bold">Drug Interaction Detection:</span> Uses GPT-3.5-turbo via OpenRouter for intelligent analysis.</li>
            <li><span className="text-white font-bold">FDA Integration:</span> Real-time data retrieval from official FDA drug databases.</li>
            <li><span className="text-white font-bold">Multi-Demographic Support:</span> Tailored safety warnings for pediatric and geriatric patients.</li>
            <li><span className="text-white font-bold">Text Extraction:</span> AI-powered extraction of drug names directly from prescriptions.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8 text-neutral-400">Healthcare Impact</TypographyH3>
          <p className="font-mono mb-2 text-sm text-neutral-400">
            Helps healthcare professionals identify potential interactions and suggest safer alternatives with severity ratings from Mild to Severe.
          </p>
        </div>
      );
    },
  },
  {
    id: "baitblocker",
    category: "Security",
    title: "BaitBlocker",
    src: "/assets/projects-screenshots/BaitBlocker/home.jpg",
    screenshots: ["/assets/projects-screenshots/BaitBlocker/home.jpg"],
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.flask,
        PROJECT_SKILLS.scikitLearn,
        PROJECT_SKILLS.pandas,
        PROJECT_SKILLS.numpy,
      ],
    },
    live: "https://github.com/JS-Aakash/BaitBlocker",
    github: "https://github.com/JS-Aakash/BaitBlocker",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono mb-4 text-sm text-neutral-400">
            BaitBlocker is a security-focused web application designed to detect and prevent phishing attacks by analyzing suspicious URLs and web content using machine learning.
          </TypographyP>

          <TypographyH3 className="my-4 mt-8">Key Capabilities</TypographyH3>
          <ul className="list-disc list-inside space-y-2 font-mono text-sm shadow-sm">
            <li><span className="text-white font-bold">Phishing Detection:</span> Analyze URLs to determine whether they are Safe or Phishing.</li>
            <li><span className="text-white font-bold">ML Model:</span> Uses Random Forest classifier with 95% accuracy by extracting 47+ behavioral features.</li>
            <li><span className="text-white font-bold">Fast Analysis:</span> Instant results with automated SSL verification and reputation scoring.</li>
            <li><span className="text-white font-bold">User-Safe:</span> URLs are analyzed in an isolated pipeline without executing malicious scripts.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8 text-neutral-400">Security Focus</TypographyH3>
          <p className="font-mono mb-2 text-sm text-neutral-400">
            Focuses on combining machine learning–based detection, rule-based checks, and a clean interface to improve everyday web safety against credential theft and fraud.
          </p>
        </div>
      );
    },
  },
  {
    id: "spinshop360",
    category: "E-Commerce",
    title: "SpinShop 360",
    src: "/assets/projects-screenshots/SpinShop/home.jpg",
    screenshots: ["/assets/projects-screenshots/SpinShop/home.jpg"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.spline,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.supabase,
        PROJECT_SKILLS.reactQuery,
        PROJECT_SKILLS.ar,
        PROJECT_SKILLS.vercel,
      ],
    },
    live: "https://spinshop360.vercel.app/",
    github: "https://github.com/JS-Aakash/SpinShop-360",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono mb-4 text-sm">
            SpinShop 360 is an immersive 3D E-Commerce platform that bridges the gap between digital shopping and physical reality through AR and interactive visualization.
          </TypographyP>

          <TypographyH3 className="my-4 mt-8">Immersive Experience</TypographyH3>
          <ul className="list-disc list-inside space-y-2 font-mono text-sm">
            <li><span className="text-white font-bold">3D Product Visualization:</span> High-fidelity 3D models with 360° rotation and real-time color customization.</li>
            <li><span className="text-white font-bold">Augmented Reality (AR):</span> Mobile-first AR view to visualize products directly in your physical space.</li>
            <li><span className="text-white font-bold">Interactive UI:</span> Modern glass-morphism design with smooth animations and responsive layouts.</li>
            <li><span className="text-white font-bold">Custom Model Upload:</span> Empowers merchants to upload and preview their own .glb 3D models.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8 text-neutral-400">Robust Infrastructure</TypographyH3>
          <p className="font-mono mb-2 text-sm text-neutral-400">
            Powered by Supabase for secure Auth and real-time Database, with React Query ensuring high-performance state management across the shopping journey.
          </p>
        </div>
      );
    },
  },
  {
    id: "git-it-done",
    category: "AI",
    title: "Git-it-done",
    src: "/assets/projects-screenshots/Git-it-done/home.jpg",
    screenshots: ["/assets/projects-screenshots/Git-it-done/home.jpg"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [
        PROJECT_SKILLS.openai,
        PROJECT_SKILLS.kestra,
        PROJECT_SKILLS.coderabbit,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "https://www.youtube.com/watch?v=khv42VC4j8g",
    github: "https://github.com/JS-Aakash/Git-it-done",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono mb-4 text-sm">
            Git-it-done is an autonomous AI software engineering agent that completes the full issue-resolution workflow—from analysis to automated Pull Requests.
          </TypographyP>

          <TypographyH3 className="my-4 mt-8">Autonomous Workflow</TypographyH3>
          <ul className="list-disc list-inside space-y-2 font-mono text-sm">
            <li><span className="text-white font-bold">End-to-End Resolution:</span> Not just code completion; it executes full task completion including debugging and patching.</li>
            <li><span className="text-white font-bold">Kestra Orchestration:</span> Scalable, resilient workflow management ensuring high reliability for complex tasks.</li>
            <li><span className="text-white font-bold">Real-time Live Logs:</span> Terminal-style interface to monitor the AI&apos;s thought process and execution progress.</li>
            <li><span className="text-white font-bold">Automated PRs:</span> Seamlessly creates ready-to-merge PRs with integrated CodeRabbit reviews.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8 text-neutral-400">Secure & Robust</TypographyH3>
          <p className="font-mono mb-2 text-sm text-neutral-400">
            Features secure GitHub OAuth integration and is built on a high-performance stack using Next.js 15, OpenAI SDK, and containerized deployment with Docker.
          </p>
        </div>
      );
    },
  },
  {
    id: "nearbynow",
    category: "Social",
    title: "NearbyNow",
    src: "/assets/projects-screenshots/NearbyNow/home.png",
    screenshots: ["/assets/projects-screenshots/NearbyNow/home.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.firebase,
      ],
    },
    live: "https://nearbynow.netlify.app/",
    github: "https://github.com/JS-Aakash/NearbyNow",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono mb-4 text-sm">
            NearbyNow is a mobile-first, Firebase-powered hyperlocal messaging platform that enables users to share posts visible only within a 10 km radius.
          </TypographyP>

          <TypographyH3 className="my-4 mt-8">Core Features</TypographyH3>
          <ul className="list-disc list-inside space-y-2 font-mono text-sm">
            <li><span className="text-white font-bold">Hyperlocal Feed:</span> Geolocation-based post discovery using Haversine distance calculations.</li>
            <li><span className="text-white font-bold">Auto-Expiring Content:</span> Messages automatically vanish after 1–24 hours to keep the feed fresh.</li>
            <li><span className="text-white font-bold">Community Categories:</span> Dedicated tabs for Emergency, Food Sharing, and local Services.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8 text-neutral-400">Locality First</TypographyH3>
          <p className="font-mono mb-2 text-sm italic text-neutral-400">
            &quot;Strengthening local connections by ensuring users see only what truly matters around them, right now.&quot;
          </p>
        </div>
      );
    },
  },
];
export default projects;
