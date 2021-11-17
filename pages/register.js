import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/dist/client/link';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import LayOut from '../components/Layout/Layout';
import LoadingButton from '../components/Utils/LoadingButton';
import { registerUser } from '../redux/actions/userAction';
import { RESET } from '../redux/constants/userConstants';

const Register = () => {
  const dispatch = useDispatch();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const { loading, error, success } = useSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    dispatch({ type: RESET });
    if (success) {
      toast.success('Regsiter Successful. Login Now');
      return router.push('/login');
    }
    if (error) {
      return toast.error(error);
    }
  }, [success, router, error, dispatch]);

  const registerHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return toast.error('Password do not match');
    }
    dispatch(registerUser({ email, username, password }));
  };
  return (
    <LayOut
      title="Register To Hot Taste"
      content="Register to hot taste and start ordering food"
    >
      <form onSubmit={registerHandler} className="form">
        <h1 className="primary-heading">
          <FontAwesomeIcon icon={faUserFriends} /> Register
        </h1>

        <input
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          required
          type="text"
          placeholder="Username"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email Address"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          type="password"
          placeholder="Enter Password"
        />
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          type="password"
          placeholder="Confirm Password"
        />
        {loading ? (
          <LoadingButton text="Registering" />
        ) : (
          <button disabled={loading} type="submit">
            Register
          </button>
        )}

        <Link href="/login">
          <a className="normal-text normal-link">
            Already have an account? Login here
          </a>
        </Link>
      </form>
    </LayOut>
  );
};

export default Register;
