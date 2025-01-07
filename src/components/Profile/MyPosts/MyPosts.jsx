import s from './MyPosts.module.scss';
import Post from './Post/Post';
import { Button, Form } from 'antd';
import { Field, reduxForm } from 'redux-form';

const MyPosts = (props) => {
    const { handleSubmit, reset } = props;

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);

    let onAddPost = (values) => {
        props.addPost(values.message);
        reset();
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <Form
                onFinish={handleSubmit(onAddPost)}
                layout="vertical"
            >
                <Form.Item>
                    <Field
                        name="message"
                        component="input"
                        type="text"
                        placeholder='Введите текст поста'
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

export default reduxForm({ form: 'posts' })(MyPosts);