const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = require('graphql');

const tasks = [
  {
    id: '1',
    title: 'Create your first webpage',
    weight: 1,
    description:
      'Create your first HTML file 0-index.html with: -Add the doctype on the first line (without any comment) -After the doctype, open and close a html tag Open your file in your browser (the page should be blank)',
  },
  {
    id: '2',
    title: 'Structure your webpage',
    weight: 1,
    description:
      'Copy the content of 0-index.html into 1-index.html Create the head and body sections inside the html tag, create the head and body tags (empty) in this order',
  },
];

const projects = [
  {
    id: '1',
    title: 'Advanced HTML',
    weight: 1,
    description:
      'Welcome to the Web Stack specialization. The 3 first projects will give you all basics of the Web development: HTML, CSS and Developer tools. In this project, you will learn how to use HTML tags to structure a web page. No CSS, no styling - don’t worry, the final page will be “ugly” it’s normal, it’s not the purpose of this project. Important note: details are important! lowercase vs uppercase / wrong letter… be careful!',
  },
  {
    id: '2',
    title: 'Bootstrap',
    weight: 1,
    description:
      'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS and JavaScript design templates for typography, forms, buttons, navigation, and other interface components.',
  },
];

const TaskType = new GraphQLObjectType({
  name: 'Task',
  fields: {
    id: { type: GraphQLString },
    weight: { type: GraphQLInt },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
  },
});

const ProjectType = new GraphQLObjectType({
  name: 'Project',
  fields: {
    id: { type: GraphQLString },
    weight: { type: GraphQLInt },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
  }
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    task: {
      type: TaskType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        return tasks.find((task) => task.id === args.id);
      },
    },
    project: {
      type: ProjectType,
      args: {
        id: {type: GraphQLString}
      },
      resolve: (parent, args) => {
        return projects.find((project) => project.id === args.id);
      }
    },
    tasks: {
      type: new GraphQLList(TaskType),
      resolve: () => {
        return tasks.find({});
      }
    },
    projects: {
      type: new GraphQLList(ProjectType),
      resolve: () => {
        return projects.find({});
      }
    }
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
});

module.exports = schema;
