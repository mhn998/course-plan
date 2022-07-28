import NodeJs from "assets/NodeJs.svg";
import NodeJsSmall from "assets/NodeJsSmall.svg";
import JavaScript from "assets/JavaScript.svg";
import GraphQL from "assets/GraphQl.svg";
import Jira from "assets/Jira.svg";
import Agile from "assets/Agile.svg";
import SQL from "assets/SQL.svg";
import Git from "assets/Git.svg";

const courses = [
  {
    name: "NodeJS",
    daysDuration: 24,
    hoursDuration: 163,
    image: NodeJs,
    subCourses: [
      {
        name: "JavaScript",
        id: "JS 101",
        image: JavaScript,
        hours: 50,
        days: 8,
        fullName: "The Modern JavaScript Bootcamp",
      },
      {
        name: "SQL",
        id: "SQL 301",
        image: SQL,
        hours: 8,
        days: 1,
        fullName: "Learning SQL",
      },
      {
        name: "NodeJS",
        id: "JS 201",
        image: NodeJsSmall,
        hours: 64,
        days: 10,
        fullName: "The complete Node.js Developer Course (3rd Edition)",
      },
      {
        name: "mahmoud",
        id: "JS 201",
        image: NodeJsSmall,
        hours: 64,
        days: 10,
        fullName: "The complete Node.js Developer Course (3rd Edition)",
      },
      {
        name: "GraphQL",
        id: "JS 102",
        image: GraphQL,
        hours: 40,
        days: 6,
        fullName: "Practical GraphQL: Become a GraphQL Ninja",
      },
      {
        name: "Hmmm",
        id: "JS 202",
        image: GraphQL,
        hours: 40,
        days: 6,
        fullName: "Practical GraphQL: Become a GraphQL Ninja",
      },
      {
        name: "Yess!!!",
        id: "JS 502",
        image: GraphQL,
        hours: 40,
        days: 6,
        fullName: "Practical GraphQL: Become a GraphQL Ninja",
      },
      {
        name: "Hey",
        id: "JS 502",
        image: GraphQL,
        hours: 40,
        days: 6,
        fullName: "Practical GraphQL: Become a GraphQL Ninja",
      },
      {
        name: "GraphQL",
        id: "JS 402",
        image: GraphQL,
        hours: 40,
        days: 6,
        fullName: "Practical GraphQL: Become a GraphQL Ninja",
      },
    ],
  },
  {
    name: "Python",
    daysDuration: 24,
    hoursDuration: 163,
    image: NodeJs,
    subCourses: [
      {
        name: "Python",
        id: "Py 101",
        image: JavaScript,
        hours: 50,
        days: 8,
        fullName: "The Modern JavaScript Bootcamp",
      },
      {
        name: "SQL",
        id: "SQL 301",
        image: SQL,
        hours: 8,
        days: 1,
        fullName: "Learning SQL",
      },
      {
        name: "NodeJS",
        id: "JS 201",
        image: NodeJsSmall,
        hours: 64,
        days: 10,
        fullName: "The complete Node.js Developer Course (3rd Edition)",
      },
      {
        name: "mahmoud",
        id: "JS 201",
        image: NodeJsSmall,
        hours: 64,
        days: 10,
        fullName: "The complete Node.js Developer Course (3rd Edition)",
      },
      {
        name: "GraphQL",
        id: "JS 102",
        image: GraphQL,
        hours: 40,
        days: 6,
        fullName: "Practical GraphQL: Become a GraphQL Ninja",
      },
      {
        name: "Hmmm",
        id: "JS 202",
        image: GraphQL,
        hours: 40,
        days: 6,
        fullName: "Practical GraphQL: Become a GraphQL Ninja",
      },
      {
        name: "Yess!!!",
        id: "JS 502",
        image: GraphQL,
        hours: 40,
        days: 6,
        fullName: "Practical GraphQL: Become a GraphQL Ninja",
      },
      {
        name: "Hey",
        id: "JS 502",
        image: GraphQL,
        hours: 40,
        days: 6,
        fullName: "Practical GraphQL: Become a GraphQL Ninja",
      },
      {
        name: "GraphQL",
        id: "JS 402",
        image: GraphQL,
        hours: 40,
        days: 6,
        fullName: "Practical GraphQL: Become a GraphQL Ninja",
      },
    ],
  },
];

const additionalCourses = [
  {
    name: "JIRA",
    type: "Online Session",
    image: Jira,
    hoursDuration: 4,
  },
  {
    name: "git",
    type: "Online Session",
    image: Git,
    hoursDuration: 4,
  },
  {
    name: "Agile",
    type: "Online Session",
    image: Agile,
    hoursDuration: 4,
  },
];

const courseTypes = ["Mandatory", "Optional", "Additional Courses"];

export const getAllCourses = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(courses);
    }, 1000);
  });
};

export const getAdditionalCourses = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(additionalCourses);
    }, 1000);
  });
};

export const getCourseTypes = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(courseTypes);
    }, 1000);
  });
};
