const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('books');
                
                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .popluate('books');
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