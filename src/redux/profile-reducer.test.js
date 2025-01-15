import profileReducer, {addPost} from './profile-reducer';

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ]
};

it('length of posts should be incremented', () => {
    const action = addPost('123123');
    const newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5);
});
