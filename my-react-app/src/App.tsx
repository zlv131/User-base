import './App.css'
import LeftMenu from "./components/left-menu/LeftMenu.tsx";
import MainScreen from "./components/main-screen/MainScreen.tsx";
import {listUsers} from "./listUsers.ts";
import {User} from "./types/User.ts";
import {TYPE_SORT} from "./const.ts";
import {useState} from "react";

function App() {
    const [sort, setSort] = useState<boolean>(false);
    const [modal, setModal] = useState<boolean>(false);

    function swapModal(): void {
        setModal(!modal);
    }

    const sortList = (listUsers: User[], event: any): User[] => {
        const currentKeySort: string = event.target.value;
        if (currentKeySort === TYPE_SORT.TO_CITY) {
            setSort(!sort);
            return listUsers.sort((user1: any, user2: any): number => user1.address.city > user2.address.city ? 1 : -1);
        } else if (currentKeySort === TYPE_SORT.TO_COMPANY) {
            setSort(!sort);
            return listUsers.sort((user1: any, user2: any): number => user1.company.name > user2.company.name ? 1 : -1);
        } else return [];
    }

  return (
    <div className="container">
        <LeftMenu sortList={() => sortList(listUsers, event)}/>
        <MainScreen modal={modal} swapModal={swapModal}/>
    </div>
  )
}

export default App
