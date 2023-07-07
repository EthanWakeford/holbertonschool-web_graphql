const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

const TaskType = new GraphQLObjectType({
  name: 'Task',
  fields: {
    id: { type: GraphQLString },
    weight: { type: GraphQLInt },
    title: { type: GraphQLString },
    desription: { type: GraphQLString },
  },
});
