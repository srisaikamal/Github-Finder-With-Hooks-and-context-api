import React, { Component} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar.js'
import Users from './components/users/Users'
import User from './components/users/User'
import axios from 'axios'
import Search from './components/users/Search'
import Alert from './components/layout/Alert.js'
import About from './components/Pages/About.js'

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"


class App extends Component {

  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null
  }


  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    this.setState({users: res.data, loading: false})
  }

// Search Github user
  searchUsers = async text => {

    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    this.setState({users: res.data.items, loading: false})
  }


  // Get single users
  getuser = async username => {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    this.setState({user: res.data, loading: false})
  }

  // Get user repos


  getuserRepos = async username => {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    this.setState({repos: res.data, loading: false})
  }

  clearUsers = () => this.setState({users: [], loading: false})

  setAlert = (msg, type) => {
    this.setState({alert: {msg, type}})

    setTimeout(() => this.setState({alert: null}), 5000)
  } 



  
  render() {
    const {users, user, loading, repos} = this.state
    return (
      <Router>
      <div className="App">
       <Navbar/>
       
       <div className="container">
         <Alert alert={this.state.alert} />
         <Switch>
           <Route exact path="/" render={props => (
             <React.Fragment>
               <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={users.length > 0 ? true: false}
       setAlert={this.setAlert}
       />
         <Users loading={loading} users={this.state.users}/>
             </React.Fragment>
           )} />

           <Route exact path="/about" component={About} />

           <Route exact path="/user/:login" render={
             props => (
               <User {...props} getuser={this.getuser} getuserRepos={this.getuserRepos} user={user}
               loading={loading} repos={repos}
                />
             )
           }/>
         </Switch>
       
       </div>
       
      </div>
      </Router>
    );
  }
}

export default App;