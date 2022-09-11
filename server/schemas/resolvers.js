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
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
        saveBook: async (parent, { bookId }, context) => {
            if (context.user) {
                const savedBook = await Book.findOneAndUpdate(
                    { _id: bookId },
                    { $addToSet: { books: bookId }},
                    { new: true, runValidators: true }
                );
            
                return savedBook;
            }
            throw new AuthenticationError('You need to be logged in');
        },
        removeBook: async (parent, args, context) => {
            if (context.user) {
                const removeBook = await Book.findOneAndUpdate(
                    {_id: bookId },
                    { $pull: { books: bookId }}
                );

                return removeBook;
            }
            throw new AuthenticationError('You need to be logged in');
        }
    }
};

module.exports = resolvers;