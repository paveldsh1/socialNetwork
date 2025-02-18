import React from 'react';
import style from './_Dialogs.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Form, Button } from 'antd';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../components/common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators';

const maxLengthCreator50 = maxLengthCreator(50);

const Dialogs = (props) => {
    const { handleSubmit, reset } = props;
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message key={m.id} message={m.message} />);
    let newMessageBody = state.newMessageBody;

    const onFinish = (values) => {
        props.sendMessage(values.message);
        reset();
    };

    return (
        <div className={style['dialogs']}>
            <div className={style['dialogs__items']}>
                {dialogsElements}
            </div>
            <div className={style['dialogs__messages']}>
                {messagesElements}
                <Form
                    onFinish={handleSubmit(onFinish)}
                    layout="vertical"
                >
                    <Form.Item>
                    <Field
                        name="message"
                        validate={[required, maxLengthCreator50]}
                        component={Input}
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