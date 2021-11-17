import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/dist/client/link';
import LayOut from '../components/Layout/Layout';
import { signIn } from 'next-auth/client';
import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import { toast } from 'react-toastify';
import LoadingButton from '../components/Utils/LoadingButton';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const loginHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });
    setLoading(false);
    if (result.error) {
      toast.error(result.error);
    } else {
      router.push('/');
    }
  };
  return (
    <LayOut
      title="Login To Hot Taste"
      content="Login to hot taste and start ordering food"
    >
      <form onSubmit={loginHandler} className="form">
        <h1 className="primary-heading">
          <FontAwesomeIcon icon={faLock} /> Login
        </h1>

        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          type="email"
          placeholder="Email Address"
        />

        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Enter Password"
        />
        {loading ? (
          <LoadingButton text="Logging In" />
        ) : (
          <button type="submit">Login</button>
        )}

        <Link href="/forgotpassword">
          <a className="normal-text  normal-link"> Forgot Password?</a>
        </Link>
        <Link href="/register">
          <a className="normal-text normal-link">No account? Register here</a>
        </Link>
      </form>
    </LayOut>
  );
};

export default Login;
