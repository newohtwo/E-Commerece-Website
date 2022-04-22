import React from 'react';
import Homepage from './pages/homepage/hompeage.component';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    //onAuthStateChanged returns "close communication with firebase function"
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //if a user is logged in set current user with firebase
      console.log(userAuth);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
          console.log(this.state);
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); //closing communication with firebase
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path={'/'} component={Homepage} />
          <Route path={'/shop'} component={ShopPage} />
          <Route path={'/signin'} component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
