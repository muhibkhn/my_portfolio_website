import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    UC,
    iti,
    carrent,
    jobit,
    tripguide,
    threejs,
    python,
    cpp,
    verilog,
    labview,
    matlab,
    tap,
    buffer,
    } from "../assets";
    export const navLinks = [
    {
    id: "about",
    title: "About",
    },
    {
    id: "work",
    title: "Work",
    },
    {
    id: "contact",
    title: "Contact",
    },
    ];
    const services = [
    {
    title: "Software Engineer",
    icon: web,
    },
    {
    title: "Hardware / Embedded Engineer",
    icon: mobile,
    },
    {
    title: "Researcher",
    icon: backend,
    },
    {
    title: "Cloud Engineer",
    icon: creator,
    },
    ];
    const technologies = [
    {
    name: "HTML 5",
    icon: html,
    },
    {
    name: "Python",
    icon: python,
    },
    {
    name: "JavaScript",
    icon: javascript,
    },
    {
    name: "TypeScript",
    icon: typescript,
    },
    {
    name: "React JS",
    icon: reactjs,
    },
    {
    name: "CPP",
    icon: cpp,
    },
    {
    name: "Tailwind CSS",
    icon: tailwind,
    },
    {
    name: "Node JS",
    icon: nodejs,
    },
    {
    name: "LabView",
    icon: labview,
    },
    {
    name: "Matlab",
    icon: matlab,
    },
    {
    name: "git",
    icon: git,
    },
    {
    name: "Verilog",
    icon: verilog,
    },
    {
    name: "docker",
    icon: docker,
    },
    ];
    const experiences = [
    {
    title: "Software QA Engineer",
    company_name: "ITI Global",
    icon: iti,
    iconBg: "#383E56",
    date: "January 2022 - May 2022",
    points: [
    "Provided timely feedback on any issues discovered during testing to ensure prompt resolution",
    "Ensured the application met required quality standards before release through thorough testing and evaluation",
    "Improved performance and reliability of CADIQ application by fixing and troubleshooting identified bugs",
    "Automated and streamlined file management process, improving efficiency and accuracy of data handling process",
    ],
    },
    {
    title: "Software Engineer",
    company_name: "ITI Global",
    icon: iti,
    iconBg: "#E6DEDD",
    date: "August 2022 - December 2022",
    points: [
    "Worked on OEM software development and deployment in CADIQ, a proprietary Model Based Software",
    "Responsible for debugging, testing and quality assurance of pre-deployed patches",
    "Conducted extensive functional testing and quality assurance for CADIQ to ensure its reliability and performance",
    "Successfully collaborated with the development team to identify and prioritize software issues",
    ],
    },
    {
    title: "Research Engineer Assistant",
    company_name: "CSSRI LAB, University of Cincinnati",
    icon: UC,
    iconBg: "#383E56",
    date: "May 2023 - Present",
    points: [
    "Trained and deployed deep learning models to perform guidance tasks for automated vehicles",
    "mplemented computer vision-based object detection and tracking algorithms using Python in CAVe (Donkey Car)",
    "Customized and fine-tuned Donkey Car platform components for autonomous remote vehicles",
    "Developed and integrated sensors for data acquisition of relevant vehicle data collection for model training",
    "Deployed models on low power raspberry pi’s and utilized hardware accelerator Coral-AI",
    "Led the Summer Camp and assisted more than 100 students in implementing self-driving remote-control vehicles"
    ],
    },
    {
    title: "Research Assistant",
    company_name: "Data Security and Privacy Lab, UC",
    icon: UC,
    iconBg: "#E6DEDD",
    date: "January 2024 - Present",
    points: [
    "Led research on deep learning analysis of side-channel attacks using simulated power traces for software implementations on FPGAs, RISC-V, and other microcontrollers",
    "Created and analyzed power traces from three AES implementations to assess cryptographic algorithm vulnerabilities",
    "Designed and simulated pre-silicon hardware components at the RTL level using Verilog, focusing on enhancing side channel analysis and model deployment",
    "Evaluated the effectiveness of different deep learning architectures in identifying security vulnerabilities",
    "Engineered and validated hardware components at the RTL level using Verilog for advanced pre-silicon simulation",
    "Generated simulated traces using RISC-V architecture and performed side-channel analysis leveraging deep learning models, including convolutional neural networks (CNNs)",
    "Developed and implemented a novel deep learning model to detect side-channel attacks on cryptographic implementations",
    "Supervised a team of two undergraduate students to run tests and conduct analysis on simulated power traces for SCA"
    ],
    },
    ];
    const testimonials = [
    {
    testimonial:
    "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
    testimonial:
    "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
    testimonial:
    "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    ];
    const projects = [
    {
    name: "Eco Tech Water System",
    description:
    "Designed and implemented an Arduino-based water flow automation project with ID scanning/RFID recognition. Saved 1000 liters/month in a school, earning recognition in an environmental invention competition with a $4000 prize.",
    tags: [
    {
    name: "RFID",
    color: "blue-text-gradient",
    },
    {
    name: "ARDUINO",
    color: "green-text-gradient",
    },
    {
    name: "DESIGN",
    color: "pink-text-gradient",
    },
    ],
    image: tap,
    source_code_link: "https://github.com/muhibkhn",
    },
    {
    name: "Automated Marine Buffer System",
    description:
    "Implemented innovative water cooling and waste removal solution for marine life utilizing Arduino module. Secured 1st Place in Best Environmental Invention competition, against 10 schools, earning a $7000 cash prize",
    tags: [
    {
    name: "BUFFER",
    color: "blue-text-gradient",
    },
    {
    name: "AUTOMATION",
    color: "green-text-gradient",
    },
    {
    name: "ARDUINO",
    color: "pink-text-gradient",
    },
    ],
    image: buffer,
    source_code_link: "https://github.com/muhibkhn",
    },
    {
    name: "Coming Soon",
    description:
    "Coming Soon",
    tags: [
    {
    name: "nextjs",
    color: "blue-text-gradient",
    },
    {
    name: "supabase",
    color: "green-text-gradient",
    },
    {
    name: "css",
    color: "pink-text-gradient",
    },
    ],
    image: python,
    source_code_link: "https://github.com/muhibkhn",
    },
    ];
    export { services, technologies, experiences, testimonials, projects };