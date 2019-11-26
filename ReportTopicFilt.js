import React from 'react'

export default function ReportTopicFilt(info) {
    if (!info.topics) {
        return (
                <select name="Class" form="Class" id='topic'>
                    <option>no topics available</option>
                </select>
        )
    } else if (info.topics) {
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
