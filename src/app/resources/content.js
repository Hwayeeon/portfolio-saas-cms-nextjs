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

export { person };