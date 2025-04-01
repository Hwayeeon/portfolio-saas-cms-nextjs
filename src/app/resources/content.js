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
  title: `{person.name} Portfolio`,
  description: `Welcome to {person.name} Portfolio as a {person.role[0]}.`,
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
        Hello my name is Davidson Rafael is a Software Engineer, Web Developer, and Mobile Developer. I am a person who is passionate about technology and programming. I have a lot of experience in developing web and mobile applications. I am also a person who is always eager to learn new things and always wants to improve my skills. I am also a person who is always eager to learn new things and always wants to improve my skills.
      </>
    ),
  },
  work: {
    // Comming Soon
  },
  studies: {
    display: true,
    title: "Studies",
    instutions: [
      {
        name: "Krida Wacana Christian University",
        location: "Jakarta, Indonesia",
        degree: "Bachelor of Computer Science",
        major: "Computer Science",
        description: <>Studies Sofrware Engineering</>
      },
    ],
  }
}

export { person, social, home };