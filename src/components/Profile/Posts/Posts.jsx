import React from 'react';
import s from './_Posts.module.scss';
import Post from './Post/Post';
import { Button, Form } from 'antd';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators';
import { Input } from '../../common/FormsControls/FormsControls'

const maxLengthCreator10 = maxLengthCreator(10);

const Posts = React.memo((props) => {
    const { handleSubmit, reset } = props;

    let postsElements = [...props.posts].reverse().map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);

    let onAddPost = (values) => {
        props.addPost(values.message);
        reset();
    };

    return (
        <div className={s.postsBlock}>
            <Form
                onFinish={handleSubmit(onAddPost)}
                layout="vertical"
            >
                <Form.Item>
                    <Field
                        validate={[required, maxLengthCreator10]}
                        name="message"
                        component={Input}
                        type="text"
                        placeholder='Enter the text of the post'
                    />
                </Form.Item>
                <Form.Item>
                    <Button 
                        type="primary" 
                        htmlType="submit">
                        Add a post
                    </Button>
                </Form.Item>
            </Form>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
});

export default reduxForm({ form: 'posts' })(Posts);