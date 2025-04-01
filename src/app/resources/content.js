const person = {
  firstName: "Davidson",
  lastName: "Nugroho",
  
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  
  role: ["Software Engineer", "Web Developer", "Mobile Developer"],
  avatar: "#",
  location: "Asia/Jakarta",
  languages: ["Indonesian", "English"],
};

const social = [
  {
    name: "Github",
    icon: "github",
    link: "https://github.com/Hwayeeon",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/davidson-nugroho-6a8b1b1b9/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/HwaYeonnn"
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:davidsonrafael20@gmail.com"
  },
];

const home = {
  label: "Home",
  title: `${person.firstName} Portfolio`,
  description: `Welcome to ${person.name} Portfolio as a ${person.role[0]}.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
  },
  intro: {
    display: true,
    title: "introduction",
    description: (
      <>
        Hi, I&aposm Davidson Rafael, a Software Engineer specializing in web and mobile development.  
        I help businesses and startups build scalable, high-performance applications using modern technologies.  
        With extensive experience in developing user-friendly and efficient digital solutions,  
        I am always eager to learn, innovate, and deliver impactful software. 
      </>
    ),
  },
  work: {
    // Coming Soon
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Krida Wacana Christian University",
        location: "Jakarta, Indonesia",
        degree: "Bachelor of Computer Science",
        major: "Computer Science",
        description: <>Studying Software Engineering and related fields.</>
      },
    ],
}
};

export { person, social, home };