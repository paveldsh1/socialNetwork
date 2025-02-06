import React from 'react';
import styles from './ProfileStatus.module.scss';
import { useState } from 'react';

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

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

    return (
        <div className={styles.container}>
            {!editMode ?
                <span onDoubleClick={activateEditMode} className={`${styles.container__badge} badge bg-secondary`}>{props.status || "-----"}</span>
            :
                <div className={styles.container__input}>
                    <input 
                        onChange={onStatusChange}
                        autoFocus={true} 
                        onBlur={deactivateEditMode} 
                        value={status} 
                        class="form-control" 
                        type="text" 
                        placeholder="Default input" 
                        aria-label="default input example"/>
                </div>
            }
        </div>
    );
}

export default ProfileStatus;