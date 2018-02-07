import React, { Component } from 'react';
import firebase from 'firebase';
import { Router, Scene } from 'react-native-router-flux';
import LoginForm from './src/components/LoginForm';
import Chat from './src/components/Chat';


class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyD-DEfQ56wW4LBA5brsBn8pq-zh8SYegUk",
            authDomain: "auth-44c5b.firebaseapp.com",
            databaseURL: "https://auth-44c5b.firebaseio.com",
            projectId: "auth-44c5b",
            storageBucket: "auth-44c5b.appspot.com",
            messagingSenderId: "16386201723"
          });
    }

    render() {
        return (
            <Router>
                <Scene key='root' hideNavBar>
                    <Scene key='auth' initial>
                        <Scene key='login' component={LoginForm} title="Login"/>
                    </Scene>
                    <Scene key='main'>
                        <Scene key='chat' component={Chat} title="Chat"/>
                    </Scene>
                </Scene>
            </Router>
        );
    }
}

export default App;