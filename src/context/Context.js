import React, { useState, useEffect } from 'react';
export const settingContext = React.createContext();

function SettingContext(props) {
    const [numberOfItems, setnumberOfItems] = useState(2);
    const [showCompleteList, setShowCompleteList] = useState(true);
    const state = {
        numberOfItems, showCompleteList,
        setnumberOfItems, setShowCompleteList,
    }

    useEffect(() => {
        const localSettings = JSON.parse(localStorage.getItem('change settings'));
        if (localSettings) {
            setnumberOfItems(Number(localSettings.numberOfItems));
            setShowCompleteList(showCompleteList);
        }
    }, [])


    return (
        <settingContext.Provider value={state}>
            {props.children}
        </settingContext.Provider>
    )
}

export default SettingContext;