import React, {FC} from 'react';
import CardUser, {CardUserProps} from "../card-user/CardUser.tsx";
import {listUsers} from "../../listUsers.ts";
import {User} from "../../types/User.ts";

interface ListUsersProps {
    swapModal: () => void;
    getCurrentUser: (event: any) => User;
}
const ListUsers: FC<ListUsersProps> = ({ swapModal, getCurrentUser }) => {
    const printedListUsers: JSX.Element[] = listUsers.map(user =>
        <div key={user.id}>
            <CardUser getCurrentUser={getCurrentUser} swapModal={swapModal} id={user.id} city={user.address.city} company={user.company.name} FIO={user.name}/>
        </div>)

    return (
        <div className="wrapper__listusers">
            <p className="mainScreen__title"> Список пользователей </p>
            <ul>
                {printedListUsers}
            </ul>
        </div>
    );
};

export default ListUsers;