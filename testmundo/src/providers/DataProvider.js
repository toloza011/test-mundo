import {createContext,useState} from 'react';

export const DataContext = createContext();


const calles = [];

export const DataProvider = ({children}) => {
     
    const [data, setdata] = useState(calles)

    return (
        <DataContext.Provider value={{data,setdata}}>
            {children}
        </DataContext.Provider>
     );
}