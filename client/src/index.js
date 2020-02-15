import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { createFirestoreInstance, getFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase} from 'react-redux-firebase'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import fbConfig from './config/fbConfig'

// const config = {
//     apiKey: "AIzaSyATQhfQXGO3dx1-9GZ91R0OQtn8E9apYxU",
//     authDomain: "reactjswfbase.firebaseapp.com",
//     databaseURL: "https://reactjswfbase.firebaseio.com",
//     projectId: "reactjswfbase",
//     storageBucket: "reactjswfbase.appspot.com",
//     messagingSenderId: "454825300718",
//     appId: "1:454825300718:web:c257b47b233ed4fbae59ff",
//     measurementId: "G-ZHNV31EH7Q"
//   };
  const config = fbConfig;
  firebase.initializeApp(config);
  
const store = createStore(rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
));

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  }
 const rrfProps = {
      firebase,
      config: rrfConfig,
      dispatch: store.dispatch,
      createFirestoreInstance // <- needed if using firestore
    }
ReactDOM.render(<Provider store={store}><ReactReduxFirebaseProvider {...rrfProps}><App /></ReactReduxFirebaseProvider></Provider>, document.getElementById('root'));
serviceWorker.unregister()