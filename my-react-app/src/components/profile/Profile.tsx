import React, {FC} from 'react';
import EntryField from "../entry-field/EntryField.tsx";
import './Profile.css';
import {User} from "../../types/User.ts";
interface ProfileProps {
    swapModal: () => void;
    getCurrentUser: (event: any) => User;
    changeIsEdit: () => void;
    isEdit: boolean;
}
const Profile: FC<ProfileProps> = ({ swapModal, getCurrentUser, changeIsEdit, isEdit }) => {
    return (
        <div>
            <div className="wrapper__profile">
                <p className="profile__title"> Профиль пользователя </p>
                <button onClick={changeIsEdit} className="profile__button"> Редактировать </button>
                <EntryField isEdit={isEdit} getCurrentUser={getCurrentUser}/>
                <button onClick={swapModal} className="profile__buttonSave"> Отправить </button>
            </div>
        </div>
    );
};

export default Profile;