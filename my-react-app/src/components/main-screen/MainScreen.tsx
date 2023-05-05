import React, {FC, useState} from 'react';
import './MainScreen.css';
import ListUsers from "../list-users/ListUsers.tsx";
import Profile from "../profile/Profile.tsx";
import {User} from "../../types/User.ts";
import {listUsers} from "../../listUsers.ts";
import {log} from "util";
interface MainScreenProps {
    modal: boolean;
    swapModal: () => void;
}
const MainScreen: FC<MainScreenProps> = ({ modal, swapModal }) => {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    function getCurrentUser(event: any): User {
        const currentUser: User = listUsers.filter(user => event.target.id === String(user.id))[0];
        return currentUser;
    }

    function changeIsEdit(): void {
        console.log(isEdit);
        setIsEdit(!isEdit);
    }


    return (
        <div>
            <div className="wrapper__mainScreen">
                {modal === false ? <ListUsers getCurrentUser={getCurrentUser} swapModal={swapModal}/> : <Profile isEdit={isEdit} changeIsEdit={changeIsEdit} getCurrentUser={getCurrentUser} swapModal={swapModal}/>}
            </div>
        </div>
    );
};

export default MainScreen;