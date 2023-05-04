import React, {FC, MouseEventHandler} from 'react';
import SortingButton from "../sorting-button/SortingButton.tsx";
import './LeftMenu.css';
import {listUsers} from "../../listUsers.ts";
import {User} from "../../types/User.ts";
interface LeftMenuProps {
    sortList: (listUsers: User[], event: any) => User[];
}
const LeftMenu: FC<LeftMenuProps> = ({ sortList }) => {
    return (
        <div>
            <div className="wrapper__leftMenu">
                <p className="leftMenu__title"> Сортировка </p>
                <SortingButton sortList={() => sortList(listUsers, event)} nameButton={'по городу'}/>
                <SortingButton sortList={() => sortList(listUsers, event)} nameButton={'по компании'}/>
            </div>
        </div>
    );
};

export default LeftMenu;