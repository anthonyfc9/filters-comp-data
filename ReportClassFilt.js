import React, {useState} from 'react';
import styleReport from './../public/css/styleReport.css'


export default function ReportClassFilt(info) {
    const [data, setdata] = useState(info);
    if (!info.class) {
        return (

                <select name="Class" form="Class" id='class'>
                    <option>no classes available</option>
                </select>
        )
    } else if (info.class) {
        return (

                <select name="Class" form="Class">
                    {
                        data.map((obj, index) => {
                            return <option key={index} value={obj.name}>{obj.name}</option>
                        })
                    }
                </select>

        )
    }

}
