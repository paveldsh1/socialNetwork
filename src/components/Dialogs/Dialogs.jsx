import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Form, Button, Input } from 'antd';

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message key={m.id} message={m.message} />);
    let newMessageBody = state.newMessageBody;

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    const onFinish = (values) => {
        debugger
        props.sendMessage();
        props.updateNewMessageBody('');
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <Form
                    onFinish={onFinish}
                    layout="vertical"
                >
                    <Form.Item>
                        <Input.TextArea
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                            placeholder='Enter your message'
                            rows={1}
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

export default Dialogs;