import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import User from '../../../model/userModel';
import connectDb from '../../../config/dbconnect';

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        connectDb();

        const { email, password } = credentials;
        if (!email || !password) {
          throw new Error('Please provide both email and password');
        }

        const user = await User.findOne({ email });
        if (!user) {
          throw new Error('Invalid email or password');
        }
        const checkPassword = await user.checkPassword(password, user.password);
        if (!checkPassword) {
          throw new Error('Invalid email or password');
        }
        return Promise.resolve(user);
      },
    }),
  ],
  callbacks: {
    jwt: async (token, user) => {
      user && (token.user = user);
      return Promise.resolve(token);
    },
    session: async (session, user) => {
      session.user = user.user;
      return Promise.resolve(session);
    },
  },
});
