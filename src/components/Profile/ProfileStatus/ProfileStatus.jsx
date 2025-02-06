import React from 'react';
import styles from './_ProfileStatus.module.scss';
import { useState, useRef } from 'react';

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    const inputRef = useRef(null);

    const activateEditMode = () => {
        setEditMode(true);
        setStatus(props.status);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
        props.updateStatus(e.currentTarget.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        if (inputRef.current) {
            props.updateStatus(inputRef.current.value);
        }
        deactivateEditMode();
    }

    return (
        <div className={styles['profileStatus']}>
            {!editMode ?
                <span onClick={activateEditMode} className={`${styles['profileStatus__badge']} badge bg-secondary`}>{props.status || "-----"}</span>
                :
                <div className={styles['profileStatus__input']}>
                    <form>
                        <input
                            ref={inputRef}
                            onChange={onStatusChange}
                            autoFocus={true}
                            onBlur={deactivateEditMode}
                            value={status}
                            className="form-control"
                            type="text"
                            placeholder="Default input"
                            aria-label="default input example" />
                        <button onClick={handleClick} type='submit'>Change status</button>
                    </form>
                </div>
            }
        </div>
    );
}

export default ProfileStatus;