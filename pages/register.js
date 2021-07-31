import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/dist/client/link';
import LayOut from '../components/Layout/Layout';
const Register = () => {
  return (
    <LayOut
      title="Register"
      content="Register to hot taste and start ordering food"
    >
      <form className="form">
        <h1 className="primary-heading">
          <FontAwesomeIcon icon={faUserFriends} /> Register
        </h1>

        <input required type="text" placeholder="Username" />
        <input required placeholder="Email Address" type="email" />
        <input required type="password" placeholder="Enter Password" />
        <input required type="password" placeholder="Confirm Password" />
        <button type="submit">Register</button>

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
