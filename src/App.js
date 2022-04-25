import React from 'react';
import Homepage from './pages/homepage/hompeage.component';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { connect } from 'react-redux';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    //onAuthStateChanged returns "close communication with firebase function"
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //if a user is logged in set current user with firebase
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); //closing communication with firebase
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path={'/'} component={Homepage} />
          <Route path={'/shop'} component={ShopPage} />
          <Route path={'/signin'} component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
