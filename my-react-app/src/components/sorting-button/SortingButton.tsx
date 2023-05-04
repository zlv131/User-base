import React, {FC, MouseEventHandler} from 'react';
import './SortingButton.css';
import {User} from "../../types/User.ts";
import {listUsers} from "../../listUsers.ts";
interface SortingButtonProps {
    nameButton: string,
    sortList: (listUsers: User[], event: any) => User[];
}

const SortingButton: FC<SortingButtonProps> = ({ nameButton, sortList }) => {
    return (
        <div className="wrapper__sortingButton">
            <button onClick={() => sortList(listUsers, event)} value={nameButton} className="sortingButton"> {nameButton} </button>
        </div>
    );
};

export default SortingButton;