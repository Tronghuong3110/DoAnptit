import React, { useEffect, useState } from 'react'

const getMyLocation = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: {lat: "", lng: ""}
    })

    const onSuccess = (location) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            }
        })
    }

    const onError = (error) => {
        setLocation({
            loaded: true,
            error
        })
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if(!(("geolocation") in navigator)) {
            onError({
                code:0,
                message: "Geolocation not supported"
            });
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);

    }, [])

    return location;
}

export default getMyLocation