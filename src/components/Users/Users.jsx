import React from 'react';
import './Users.css';

class Users extends React.Component {

    // constructor(props) {
    //     super(props);
    //     debugger
    //     // this.getUsers = this.getUsers.bind(this);
    //     this.getUsers();
    // }
    
    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        alert('Get users');

        fetch('https://social-network.samuraijs.com/api/1.0/users') //https://social-network.samuraijs.com/api/1.0/users?page=2&count=2
            .then(response => response.json())
            .then(data => {
                this.props.setUsers(data.items);
            });
    }

    render() {
        return(
            <div>
                {/* <button onClick={this.getUsers}>Get users</button> */}
                <div className="users">
                    <div className="users-list">
                        {this.props.users.map(user => (
                            <div key={user.id} className="user-card">
                                <div className="user-avatar">
                                    <div className="avatar">•ᴗ•</div>
                                    <button 
                                        className={user.followed ? 'unfollow-btn' : 'follow-btn'}
                                        onClick={() => user.followed ? this.props.unfollow(user.id) : this.props.follow(user.id)}
                                    >
                                        {user.followed ? 'Unfollow' : 'Follow'}
                                    </button>
                                </div>
                                <div className="user-info">
                                    <div className="user-name">{user.name}</div>
                                    <div className="user-status">{user.status}</div>
                                    {/* <div className="user-location">{user.location.country}, {user.location.city}</div> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
};

export default Users;