const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async () => {

        },
        user: async () => {

        }
    },

    Mutation: {
        addUser: async () => {

        },
        login: async () => {

        },
        saveBook: async () => {

        },
        removeBook: async () => {
            
        }
    }
};

module.exports = resolvers;