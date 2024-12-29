const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

const getCommonOptions = (method) => ({
    method: method,
    credentials: 'include', // could also try 'same-origin' or 'include'
    headers: {
        'API-KEY': 'bf136b0e-bdc0-4aaf-a458-73a4e3e9e422'
    }
});

const handleResponse = (response) => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

export const usersAPI = {
    getUsers: (currentPage, pageSize) => {
        return fetch(`${baseUrl}users?page=${currentPage}&count=${pageSize}`, {
            credentials: 'include'
        })
        .then(handleResponse);
    },
    followUser: (id) => {
        return fetch(`${baseUrl}follow/${id}`, getCommonOptions('DELETE'))
        .then(handleResponse);
    },
    unfollowUser: (id) => {
        return fetch(`${baseUrl}follow/${id}`, getCommonOptions('POST'))
        .then(handleResponse);
    }
};

export const auth = {
    authMe: () => {
        return fetch(`${baseUrl}auth/me`, getCommonOptions('GET'))
        .then(handleResponse);
    },
    getProfile: (userId) => {
        return fetch(`${baseUrl}profile/${userId}`, getCommonOptions('GET'))
        .then(handleResponse);
    }
};