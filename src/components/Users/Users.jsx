import React from 'react';
import s from './Users.module.scss';

class Users extends React.Component {
    
    componentDidMount() {
        this.getUsers();
    }

    getUsers = (currentPage = 1) => {
        fetch(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`) //https://social-network.samuraijs.com/api/1.0/users?page=2&count=2
            .then(response => response.json())
            .then(data => {
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
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
                            <div className={s.avatar}>•ᴗ•</div>
                            <button 
                                className={user.followed ? s['unfollow-btn'] : s['follow-btn']}
                                onClick={() => user.followed ? this.props.unfollow(user.id) : this.props.follow(user.id)}
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
                {/* <button onClick={this.getUsers}>Get users</button> */}
                <div className={s.users}>
                    <div className={s['users-list']}>
                        {this.getUsersList()}
                    </div>
                    <div style={{ marginTop: '10px' }}>
                        <nav aria-label="...">
                            <ul onClick={(e) => {
                                    const currentPage = Number(e.target.textContent);
                                    this.props.setCurrentPage(currentPage);
                                    this.getUsers(currentPage);
                                }} class="pagination pagination-sm">
                                <nav aria-label="...">
                                    <ul class="pagination">
                                        <li class="page-item">
                                            <a class="page-link" href="#" aria-label="Previous">
                                                <span onClick={() => {
                                                    // console.log(this.props.pagesCount + this.props.pageSize)
                                                    const prevPage = this.props.pagesCount - this.props.pageSize
                                                    if (prevPage > 0) {
                                                        this.props.setPagesCount(prevPage)
                                                    }
                                                }} aria-hidden="true">&laquo;</span>
                                            </a>
                                        </li>
                                        {this.getPageItems()}
                                        <li class="page-item">
                                            <a class="page-link" href="#" aria-label="Next">
                                                <span onClick={(e) => {
                                                    // console.log(this.props.pagesCount + this.props.pageSize)
                                                    this.props.setPagesCount(this.props.pagesCount + this.props.pageSize)
                                                }} aria-hidden="true">&raquo;</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
};

export default Users;