const graphql = require('graphql')

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = graphql

const users = [
    { id: '23', firstName: 'John', age: 32 },
    { id: '26', firstName: 'Mary', age: 34 },
]

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt }
    }
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            resolve(_parentValue, args) {
                return users.find(({ id }) => args.id === id)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})