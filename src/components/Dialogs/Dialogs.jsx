import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Form, Button } from 'antd';
import { Field, reduxForm } from 'redux-form';

const Dialogs = (props) => {
    const { handleSubmit } = props;
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message key={m.id} message={m.message} />);
    let newMessageBody = state.newMessageBody;

    const onFinish = (values) => {
        props.updateNewMessageBody(values.message);
        props.sendMessage();
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <Form
                    onFinish={handleSubmit(onFinish)}
                    layout="vertical"
                >
                    <Form.Item>
                    <Field
                        name="message"
                        component="input"
                        type="text"
                        placeholder='Enter your message'
                        value={newMessageBody}
                    />
                    </Form.Item>
                    <Form.Item>
                        <Button 
                            type="primary" 
                            htmlType="submit">
                            Send
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default reduxForm({ form: 'dialog' })(Dialogs);