import React, { useState } from 'react';
// import Calendar from 'moedim';


const CalendarTimes = () => {
    const [value, setValue] = useState(new Date())

    return (
        <div>

            {/* <Calendar value={value} onChange={(d:any) => setValue(d)} /> */}

            {/* <DynamicHeader
           onChange={onChange} value={value} 
            /> */}
            {/* <Calendar
            onChange={handleDateChange}
            value={date}
        /> */}
        </div>

    );
}

export default CalendarTimes;

