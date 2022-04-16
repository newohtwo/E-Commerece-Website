import react from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils.js';
class SignIn extends react.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.state({ email: '', password: '' });
  };

  handleChange = (event) => {
    console.log(event.target.value);
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span className=""> Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            value={this.state.email}
            required={true}
            handleChange={this.handleChange}
          ></FormInput>

          <FormInput
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            required={true}
            handleChange={this.handleChange}
          ></FormInput>
          <div className="buttons">
            <CustomButton type="submit" value="Submit Form">
              Sign in{' '}
            </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
