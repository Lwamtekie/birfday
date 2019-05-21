import firebase from 'firebase/app';
import Auth from './components/Auth/Auth';
import birfday from './components/birfday/birfday';
import apiKeys from './helpers/apiKeys.json';
import '../styles/main.scss';
import 'bootstrap';


const init = () => {
  firebase.initializeApp(apiKeys.firebasekeys);
  Auth.authStringBuilder();
  birfday.birfdayStringBuilder();
};


init();
