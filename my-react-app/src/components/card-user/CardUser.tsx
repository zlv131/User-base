import React, {FC, useState} from 'react';
import './CardUser.css';
import {User} from "../../types/User.ts";
import {listUsers} from "../../listUsers.ts";

export interface CardUserProps {
    id: number;
    FIO: string;
    city: string;
    company: string;
    swapModal: () => void;
    getCurrentUser: (event: any) => User;
}
const CardUser: FC<CardUserProps> = ({ id, FIO, city, company, swapModal, getCurrentUser }) => {

    return (
        <div>
            <div className="wrapper__cardUser">
                <p className="cardUser__title"> ФИО: {FIO}  </p>
                <p className="cardUser__title"> Город: {city} </p>
                <p className="cardUser__title"> Компания: {company} </p>
                <a href="#" className="cardUser__linkMoreInfo" id={String(id)} onClick={() => {
                    swapModal();
                    getCurrentUser(event);
                }}> Подробнее </a>
            </div>
        </div>
    );
};

export default CardUser;