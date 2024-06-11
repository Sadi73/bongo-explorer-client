import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider';
import axios from 'axios';

export const UserContext = createContext({});

const UserInfoProvider = ({ children }) => {

    const { user } = useContext(AuthContext);
    const [userDetails, setUserDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            axios.get(`https://bongo-traveler.vercel.app/users?email=${user?.email}`)
                .then(res => {
                    if (res?.data) {
                        setUserDetails(res.data[0]);
                        setIsLoading(false);

                    }
                })
                .catch(error => console.log(error))
        }
    }, [user]);

    const loggedInUserDetails = {
        userDetails,
        isLoading
    }
    return (
        <UserContext.Provider value={loggedInUserDetails}>
            {children}
        </UserContext.Provider>
    );
};

export default UserInfoProvider;