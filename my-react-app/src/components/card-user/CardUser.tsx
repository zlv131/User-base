import React, {FC} from 'react';
import './CardUser.css';

export interface CardUserProps {
    FIO: string;
    city: string;
    company: string;
}
const CardUser: FC<CardUserProps> = ({ FIO, city, company }) => {
    return (
        <div>
            <div className="wrapper__cardUser">
                <p className="cardUser__title"> ФИО: {FIO}  </p>
                <p className="cardUser__title"> Город: {city} </p>
                <p className="cardUser__title"> Компания: {company} </p>
                <a href="" className="cardUser__linkMoreInfo"> Подробнее </a>
            </div>
        </div>
    );
};

export default CardUser;