import React from 'react';
import CardUser, {CardUserProps} from "../card-user/CardUser.tsx";
import {listUsers} from "../../listUsers.ts";

interface ListUsersProps {

}
const ListUsers = () => {
    const printedListUsers: JSX.Element[] = listUsers.map(user =>
        <div key={user.id}>
            <CardUser city={user.address.city} company={user.company.name} FIO={user.name}/>
        </div>)

    return (
        <div className="wrapper__listusers">
            <ul>
                {printedListUsers}
            </ul>
        </div>
    );
};

export default ListUsers;