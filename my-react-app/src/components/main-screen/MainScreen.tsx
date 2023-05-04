import React, {FC} from 'react';
import './MainScreen.css';
import ListUsers from "../list-users/ListUsers.tsx";
interface MainScreenProps {

}
const MainScreen: FC<MainScreenProps> = () => {
    return (
        <div>
            <div className="wrapper__mainScreen">
                <p className="mainScreen__title"> Список пользователей </p>
                <ListUsers/>
            </div>
        </div>
    );
};

export default MainScreen;