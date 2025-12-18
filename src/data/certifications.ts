export type Certification = {
    id: string;
    title: string;
    issuer: string;
    issuerLogo?: string;
    issueDate: string;
    credentialUrl?: string;
    certificateImage: string;
};

const certifications: Certification[] = [
    {
        id: "docker-cicd",
        title: "Build a CI/CD Pipeline with Docker: From Code to Deployment",
        issuer: "Coursera",
        issuerLogo: "/assets/certifications/Coursera.jpg",
        issueDate: "Dec 2025",
        credentialUrl: "https://coursera.org/verify/UKSFZLZB2MVD",
        certificateImage: "/assets/certifications/Coursera.jpg",
    },
    {
        id: "dsa-infosys",
        title: "Data Structures and Algorithms",
        issuer: "Infosys Springboard",
        issuerLogo: "/assets/certifications/DSA-Infosys.jpg",
        issueDate: "Nov 2025",
        credentialUrl: "https://verify.onwingspan.com/",
        certificateImage: "/assets/certifications/DSA-Infosys.jpg",
    },
    {
        id: "nextjs-scrimba",
        title: "Learn Next.js",
        issuer: "Scrimba",
        issuerLogo: "/assets/certifications/Learn_Next.jpg",
        issueDate: "Nov 2025",
        credentialUrl: "https://www.coursera.org/account/accomplishments/verify/ZLZXVZ9AGHRX",
        certificateImage: "/assets/certifications/Learn_Next.jpg",
    },
    {
        id: "cpp-iit",
        title: "Programming in Modern C++",
        issuer: "Indian Institute of Technology, Kharagpur",
        issuerLogo: "/assets/certifications/Programming C++.jpg",
        issueDate: "Nov 2025",
        credentialUrl: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs144/Course/NPTEL25CS144S125430621910320256.pdf",
        certificateImage: "/assets/certifications/Programming C++.jpg",
    },
    {
        id: "ssr-nextjs",
        title: "Server Side Rendering with Next.js",
        issuer: "Coursera",
        issuerLogo: "/assets/certifications/Coursera NextJS.jpg",
        issueDate: "Nov 2025",
        credentialUrl: "https://www.coursera.org/account/accomplishments/verify/BAYOP9OA1DW9?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=project",
        certificateImage: "/assets/certifications/Coursera NextJS.jpg",
    },
    {
        id: "flutter-kongu",
        title: "Mobile App Development with Flutter",
        issuer: "Kongu Engineering College",
        issuerLogo: "/assets/certifications/Mobile App Development with Flutter.jpg",
        issueDate: "Sep 2025",
        credentialUrl: "https://www.linkedin.com/in/aakashjs",
        certificateImage: "/assets/certifications/Mobile App Development with Flutter.jpg",
    },
    {
        id: "python-sololearn",
        title: "Python Core",
        issuer: "Sololearn",
        issuerLogo: "/assets/certifications/Python.jpg",
        issueDate: "Apr 2021",
        credentialUrl: "https://api2.sololearn.com/v2/certificates/CT-2GPRMVEM/image/png?t=638920763934836010",
        certificateImage: "/assets/certifications/Python.jpg",
    },
];

export default certifications;
