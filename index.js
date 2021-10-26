/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
// import Navigation from './Navigation';
import Context from './Context';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Context);
