import { createContext } from "react";


const UserContext = createContext({

});
const UserContextProvider = ({ children }) => {
    const contextValue = {}
    return
    <UserContextProvider value={contextValue}>
        {children}
    </UserContextProvider>
}