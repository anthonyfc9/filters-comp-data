import React from 'react';
import ReportClassFilt from './ReportClassFilt';
import ReportTopicFilt from './ReportTopicFilt';
import ReportStudentFilt from './ReportStudentFilt';
import ReportDateFilt from './ReportDateFilt';
import styleReport from './../public/css/styleReport.css';

export default function ReportFilters() {
    return (
        <div className='filt'>
            <form class='form'>
                <ReportClassFilt/>
                <ReportTopicFilt/>
                <ReportStudentFilt/>
                <ReportDateFilt/>
            </form>

        </div>

    )
}
