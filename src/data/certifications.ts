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
        id: "mongodb-associate-developer",
        title: "MongoDB Associate Developer",
        issuer: "MongoDB",
        issuerLogo: "/assets/certifications/mongodb.png",
        issueDate: "Aug 2026",
        credentialUrl: "https://www.credly.com/badges/9572fea6-f216-40f3-84bf-3885ccce6c6d/linked_in_profile",
        certificateImage: "/assets/certifications/mongodb.png",
    },
    {
        id: "nlp-nptel",
        title: "Natural Language Processing",
        issuer: "NPTEL",
        issuerLogo: "/assets/certifications/nlp.jpg",
        issueDate: "Apr 2026",
        credentialUrl: "https://nptel.ac.in/noc/E_Certificate/NOC26CS45S135050350004322610",
        certificateImage: "/assets/certifications/nlp.jpg",
    },
    {
        id: "mldl-python-kongu",
        title: "Machine Learning and Deep Learning using Python",
        issuer: "Kongu Engineering College",
        issuerLogo: "/assets/certifications/mldl.jpg",
        issueDate: "Feb 2026",
        credentialUrl: "https://www.linkedin.com/in/aakashjs/details/certifications/",
        certificateImage: "/assets/certifications/mldl.jpg",
    },
    {
        id: "ml-specialization-deeplearning-ai",
        title: "Machine Learning Specialization",
        issuer: "DeepLearning.AI",
        issuerLogo: "/assets/certifications/MLCourse.jpg",
        issueDate: "Jan 2026",
        credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/40ANGLT5PU0V",
        certificateImage: "/assets/certifications/MLCourse.jpg",
    },
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
];

export default certifications;
