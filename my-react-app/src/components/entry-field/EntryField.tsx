import React, {FC} from 'react';
import './EntryField.css';
import {User} from "../../types/User.ts";
import {read} from "fs";
interface EntryField {
    getCurrentUser: (event: any) => User;
    isEdit: boolean;
}
const EntryField: FC<EntryField> = ({ getCurrentUser, isEdit }) => {
    return (
        <div>
            <div className="wrapper__entryField">
                <p  className="entryField__title"> Name:  </p>
                <input onChange={getCurrentUser} type="text" placeholder={"Name"} value={getCurrentUser(event).name} className="entryField__input"/>

                <p className="entryField__title"> User name: </p>
                <input  onChange={getCurrentUser} type="text" placeholder={"User name"} value={getCurrentUser(event).username}  className="entryField__input"/>

                <p className="entryField__title"> E-mail: </p>
                <input  onChange={getCurrentUser} type="text" placeholder={"E-mail"} value={getCurrentUser(event).email}  className="entryField__input"/>

                <p className="entryField__title"> Street: </p>
                <input  onChange={getCurrentUser} type="text" placeholder={"Street"} value={getCurrentUser(event).address.street}  className="entryField__input"/>

                <p className="entryField__title"> City: </p>
                <input  onChange={getCurrentUser} type="text" placeholder={"City"} value={getCurrentUser(event).address.city}  className="entryField__input"/>

                <p className="entryField__title"> Zip code: </p>
                <input onChange={getCurrentUser} type="text" placeholder={"Zip-code"} value={getCurrentUser(event).address.zipcode}  className="entryField__input"/>

                <p className="entryField__title"> Phone: </p>
                <input onChange={getCurrentUser} type="text" placeholder={"Phone"} value={getCurrentUser(event).phone}  className="entryField__input"/>

                <p className="entryField__title"> Website: </p>
                <input onChange={getCurrentUser} type="text" placeholder={"Website"} value={getCurrentUser(event).website}  className="entryField__input"/>
            </div>
        </div>
    );
};

export default EntryField;