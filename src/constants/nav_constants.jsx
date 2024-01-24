import { CloudFog , List , MapPin , SlidersHorizontal} from 'phosphor-react';

export const NAV_BAR_ITEMS =  [
    {
        id: "weather",
        label: "Weather",
        icon: <CloudFog></CloudFog>,
        url: "/"
    },
    {
        id: "cities",
        label: "Cities",
        icon: <List></List>,
        url: "/cities"
    }, 
    {
        id: "maps",
        label: "Maps",
        icon: <MapPin></MapPin>,
        url: "/"
    }, 
    {
        id: "settings",
        label: "Settings",
        icon: <SlidersHorizontal></SlidersHorizontal>,
        url: "/"
    },
]
