import React from 'react';
import s from './_Users.module.scss';
import Preloader from '../common/Preloader/Preloader';
import Pagination from '../common/Pagination/Pagination';
import { NavLink } from 'react-router-dom';
import { Avatar } from 'antd';

class Users extends React.Component {

    componentDidMount() {
        this.requestUsers();
    }

    requestUsers = async (currentPage = 1) => {
        this.props.requestUsers(currentPage, this.props.pageSize)
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
                return (
                    <li key={p} className="page-item active" aria-current="page"><a className="page-link" href="#">{p}</a></li>
                );
            }
            return (
                <li key={p} className="page-item"><a className="page-link" href="#">{p}</a></li>
            );
        });
    }

    getUsersList = () => {
        if (this.props.users.length !== 0)
            return (
                this.props.users.map(user => {
                    return (
                        <div key={user.id} className={s['users__list-card']}>
                            <div className={s['users__list-card__user-avatar']}>
                                <NavLink to={'/profile/' + user.id} className={s['users__list-card__user-avatar__avatar-link']}>
                                    {user.photos.small ? (
                                        <Avatar src={user.photos.small} size={62}/>
                                    ) : (
                                        <div className={s['users__list-card__user-avatar-avatar']}>•ᴗ•</div>
                                    )}
                                </NavLink>
                                <button
                                    disabled={this.props.followingInProgress.some(id => id === user.id)}
                                    className={user.followed ? s['users__list-card__user-avatar_unfollow-btn'] : s['users__list-card__user-avatar_follow-btn']}
                                    onClick={async () => {
                                        if (user.followed) this.props.followUser(user.id);
                                        else this.props.unfollowUser(user.id);
                                    }}
                                >
                                    {user.followed ? 'Unfollow' : 'Follow'}
                                </button>
                            </div>
                            <div className={s['users__list-card__user-info']}>
                                <div className={s['users__list-card__user-info__user-name']}>{user.name}</div>
                                <div className={s['users__list-card__user-info__user-status']}>{user.status}</div>
                                {/* <div className="user-location">{user.location.country}, {user.location.city}</div> */}
                            </div>
                        </div>
                    )
                })
            )
    }

    render() {
        return (
            <div>
                <div className={s.users}>
                    <div className={s['users__list']}>
                        {this.props.isFetching ? <Preloader /> : null}
                        {this.getUsersList()}
                    </div>
                    <div className={s['users__pagination']}>
                        {!this.props.isFetching ?
                            <Pagination
                                pagesCount={this.props.pagesCount}
                                pageSize={this.props.pageSize}
                                setCurrentPage={this.props.setCurrentPage}
                                setPagesCount={this.props.setPagesCount}
                                requestUsers={this.requestUsers}
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