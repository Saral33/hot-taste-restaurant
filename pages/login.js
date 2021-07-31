import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/dist/client/link';
import LayOut from '../components/Layout/Layout';
const Login = () => {
  return (
    <LayOut title="Login" content="Login to hot taste and start ordering food">
      <form className="form">
        <h1 className="primary-heading">
          <FontAwesomeIcon icon={faLock} /> Login
        </h1>

        <input required type="email" placeholder="Email Address" />

        <input type="password" placeholder="Enter Password" />
        <button type="submit">Login</button>

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
