const ceoData = {
  ceoDepartments: [
    {
      departmentCode: "SD",
      departmentName: "Head of Staff",
    },
    {
      departmentCode: "ED",
      departmentName: "Head of Engineering",
    },
    {
      departmentCode: "DD",
      departmentName: "Head of Design",
    },
  ],
};

const departments = {
  SD: {
    name: "Jagdish bhagat",
    teams: ["SD1234", "SD123"],
  },
  ED: {
    name: "bhagat singh",
    teams: ["ED1234", "ED123"],
  },
  DD: {
    name: "maya bhagat",
    teams: ["DD1234", "DD123"],
  },
};

const teams = {
  SD1: {
    teamName: "Staff sparrow",
    teamLead:"saurav ganguly",
    teamMembers: ["674","675"],
  },
  ED1: {
    teamName: "engneeringOne",
    teamLead:"raman sharma",
    teamMembers: ["676","677"],
  },
  DD1: {
    teamName: "Design sparrow",
    teamLead: "kapil sharma",
    teamMembers: ["678","679"],
  },
};

const teamMembers = [
  {
    ID: "674",
    Name: "hitesh talreja",
    Phone: "7778889965",
    EmailID: "talrejah78@gmail.com",
  },
  {
    ID: "675",
    Name: "Ishan jirety",
    Phone: "8754151635",
    EmailID: "jirety78@gmail.com",
  },
  {
    ID: "676",
    Name: "piyush solakhiya",
    Phone: "1661616165",
    EmailID: "solakhiya76@gmail.com",
  },
  {
    ID: "677",
    Name: "rohit sharma",
    Phone: "7778889961",
    EmailID: "sharma@gmail.com",
  },
  {
    ID: "678",
    Name: " pankaj wadhwani",
    Phone: "7778889962",
    EmailID: "wadwani56@gmail.com",
  },
  {
    ID: "679",
    Name: "yash jain",
    Phone: "7778889963",
    EmailID: "jain767@gmail.com",
  },
];

export {ceoData,departments,teamMembers,teams}