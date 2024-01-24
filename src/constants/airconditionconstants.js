import React from "react";
import { Drop, Signpost, Sun, Thermometer, Wind } from "phosphor-react";
import { useWeather } from "../context/weathercontext";
export const AIRCONDITIONITEMS = [
    {
        index: 1,
        icon : <Thermometer/>,
        text: 'Real Feel',
        measure: '',
    },
    {
        index: 2,
        icon : <Wind />,
        text: 'Wind',
        measure: '',
    },
    {
        index: 3,
        icon : <Signpost />,
        text: 'Wind Speed',
        measure: '',
    },
    {
        index: 4,
        icon : <Sun />,
        text: 'UV Index',
        measure: '',
    },
];