import React, { Component } from 'react'
import Spinner from '../layout/Spinner.js'
import { Link} from 'react-router-dom'
import Repos from "../Repos/Repos"
class User extends Component {
    componentDidMount() {
        this.props.getuser(this.props.match.params.login)
        this.props.getuserRepos(this.props.match.params.login)
    }

    render() {
        const {name, avatar_url, location, bio, company, blog, login, html_url, followers, following, public_repos, public_gists, hireable} = this.props.user

        const {loading, repos} = this.props
        
        if(loading) {
            console.log(repos)
            return <Spinner />
        }

        return (
            <React.Fragment>
                <Link to="/" className="btn btn-light">Back to Search</Link>

                Hireable: {''} 
                {hireable ? <i className="fas fa-check text-success"/> : <i className="fas fa-times-circle text-danger"/>}

                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} alt={name} className="round-img" style={{width: '150px'}}/>

                        <h1>{name}</h1>
                        <p>Location: {location}</p>
                    </div>
                    <div>
                    {bio && <React.Fragment>
                        
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </React.Fragment>}
                        <a href={html_url} className="btn btn-dark my-1">Visit Github profile</a>
                        <ul>
                            <li>
                                {login && <React.Fragment>
                                    <strong>Username: </strong> {login}
                                    </React.Fragment>}
                            </li>
                            <li>
                                {company && <React.Fragment>
                                    <strong>Company: </strong> {company}
                                    </React.Fragment>}
                            </li>
                            <li>
                                {blog && <React.Fragment>
                                    <strong>Blog: </strong> {blog}
                                    </React.Fragment>}
                            </li>
                        </ul>
                        </div>
                        
                </div>
                <div className="card text-center">
                            <div className="badge badge-primary">Followers: {followers}</div>
                            <div className="badge badge-success">Following: {following}</div>
                            <div className="badge badge-light">Public repos: {public_repos}</div>
                            <div className="badge badge-dark">Public Gits: {public_gists}</div>
                </div>

                <Repos repos={repos} />
            </React.Fragment>
        )
       
    }
}

export default User
