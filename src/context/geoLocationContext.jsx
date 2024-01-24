import React, { createContext, useEffect, useState } from 'react'
export const GeolocationContext = createContext({
    latitude: null,
    longitude: null,
    error: null,
}
)

export const GeoLocationContextProvider = ({ children }) => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLatitude(position.coords.latitude)
                setLongitude(position.coords.longitude)
            },
                (err) => {
                    setError(err.message);
                }
            )
        } else {
            setError('Geolocation is not supported by your browser')
        }
    }, [])
    const contextValue = {latitude , longitude , error}
    return (
    <GeolocationContext.Provider value={contextValue}>{children}</GeolocationContext.Provider>
  )
}
