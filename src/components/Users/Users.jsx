import React from 'react';
import s from './Users.module.scss';
import Preloader from '../common/Preloader/Preloader';
import Pagination from '../common/Pagination/Pagination';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../api/api';

class Users extends React.Component {
    
    componentDidMount() {
        this.getUsers();
    }

    getUsers = async (currentPage = 1) => {
        this.props.toggleIsFetching(true);
            const data = await usersAPI.getUsers(currentPage, this.props.pageSize)
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
            this.props.toggleIsFetching(false);
    }

    getPageItems = () => {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = this.props.pagesCount; i <= pagesCount; i++) {
            pages.push(i);
        }
        
        let counter = 0;
        return pages.map(p => {
            ++counter;
            if (counter > this.props.pageSize) return;
            if (this.props.currentPage === p) {
                return(
                    <li class="page-item active" aria-current="page"><a class="page-link" href="#">{p}</a></li>
                );
            }
            return(
                <li class="page-item"><a class="page-link" href="#">{p}</a></li>
            );
        });
    }

    getUsersList = () => {
        if(this.props.users.length !== 0) 
            return(
                this.props.users.map(user => (
                    <div key={user.id} className={s['user-card']}>
                        <div className={s['user-avatar']}>
                            <NavLink to={'/profile/' + user.id} className={s['avatar-link']}>
                                <div className={s.avatar}>•ᴗ•</div>
                            </NavLink>
                            <button 
                                className={user.followed ? s['unfollow-btn'] : s['follow-btn']}
                                onClick={async() => {
                                    if(user.followed) {
                                        const data = await usersAPI.followUser(user.id);
                                        if(data.resultCode === 0) this.props.unfollow(user.id)
                                        
                                    } 
                                    else
                                    { 
                                        const data = await usersAPI.unfollowUser(user.id);
                                        if(data.resultCode === 0) this.props.follow(user.id)
                                    }
                                }}
                            >
                                {user.followed ? 'Unfollow' : 'Follow'}
                            </button>
                        </div>
                        <div className={s['user-info']}>
                            <div className={s['user-name']}>{user.name}</div>
                            <div className={s['user-status']}>{user.status}</div>
                            {/* <div className="user-location">{user.location.country}, {user.location.city}</div> */}
                        </div>
                    </div>
                ))
            )
    }

    render() {
        return(
            <div>
                <div className={s.users}>
                    <div className={s['users-list']}>
                        {this.props.isFetching ? <Preloader/> : null}
                        {this.getUsersList()}
                    </div>
                    <div style={{ marginTop: '10px' }}>
                        {!this.props.isFetching ?
                            <Pagination 
                                pagesCount={this.props.pagesCount}
                                pageSize={this.props.pageSize}
                                setCurrentPage={this.props.setCurrentPage}
                                setPagesCount={this.props.setPagesCount}
                                getUsers={this.getUsers}
                                getPageItems={this.getPageItems}
                            />
                            : null
                        }
                    </div>
                </div>
            </div>
        )
    }
};

export default Users;