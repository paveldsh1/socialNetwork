import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';
import { Input, Button, Form } from 'antd';

const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);

    let onAddPost = (values) => {
        props.addPost();
        props.updateNewPostText('');
    };

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <Form
                onFinish={onAddPost}
                layout="vertical"
            >
                <Form.Item>
                    <Input.TextArea 
                        onChange={onPostChange} 
                        value={props.newPostText} 
                        rows={1} 
                        placeholder="Введите текст поста" 
                    />
                </Form.Item>
                <Form.Item>
                    <Button 
                        type="primary" 
                        htmlType="submit">
                        Добавить пост
                    </Button>
                </Form.Item>
            </Form>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;