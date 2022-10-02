const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
   Query: {
      user: async (parent, { username, _id }, context) => {
         try {
            return await User.findOne({
               $or: [{ _id: _id }, { username: username }],
            });
         } catch (error) {
            console.error(error);
         };
      },
      me: async (parent, args, context) => {
         try {
            if (!context.user) {
               return {};
            };
            const user = User.findById(context.user._id);
            return user;
         } catch (error) {
            console.error(error);
         }
      }
   },
   Mutation: {
      addUser: async (parent, { userInput }, context) => {
         try {
            const user = await User.create({ ...userInput });
            const token = signToken(user);
            return { token, user };
         } catch (error) {
            console.error(error);
         }
      },
      login: async (parent, { userInput }, context) => {
         try {
            const user = await User.findOne({ $or: [{ username: userInput.username }, { email: userInput.email }] });
            if (!user) {
               throw new AuthenticationError('Error logging in!');
            }
            const passwordCheck = await user.isCorrectPassword(password);
            if (!passwordCheck) {
               throw new AuthenticationError('Error logging in!');
            }
            const token = signToken(user);
            return { token, user };
         } catch (error) {
            console.error(error);
         }
      },
      saveBook: async (parent, { bookInput }, context) => {
         try {
            return await User.findByIdAndUpdate(
               context.user._id,
               {
                  $addToSet: {
                     savedBooks: {
                        ...bookInput
                     }
                  }
               },
               {
                  new: true,
                  runValidators: true,
               }
            );
         } catch (error) {
            console.error(error);
         };
      },
      removeBook: async (parent, { bookId }, context) => {
         try {
            return await User.findByIdAndUpdate(
               context.user._id,
               {
                  $pull: {
                     savedBooks: {
                        bookId
                     }
                  }
               },
               { new: true }
            );
         } catch (error) {
            console.error(error);
         }
      },
   },
}

module.exports = resolvers;