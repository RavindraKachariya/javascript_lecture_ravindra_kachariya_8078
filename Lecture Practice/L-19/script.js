// JavaScript Date Object Examples

// 1. Current Date and Time
{
    let now = new Date();
    console.log("Current Date & Time : ", now);
}

// 2. Using Date.now() → milliseconds since Jan 1, 1970
{
    let timestamp = Date.now();
    console.log("Timestamp (ms since 1970) : ", timestamp);
}

// 3. Extracting parts of the Date
{
    let current = new Date();

    console.log("Year : ", current.getFullYear());
    console.log("Month (0-11) : ", current.getMonth());
    console.log("Date : ", current.getDate());
    console.log("Day of Week (0=Sun) : ", current.getDay());
    console.log("Hour : ", current.getHours());
    console.log("Minutes : ", current.getMinutes());
    console.log("Seconds : ", current.getSeconds());
    console.log("Milliseconds : ", current.getMilliseconds());
    console.log("UTC Hours : ", current.getUTCHours());
}

// 4. Modifying a Date
{
    let customDate = new Date();

    customDate.setFullYear(2030);
    customDate.setMonth(11);     
    customDate.setDate(25);     
    customDate.setHours(10);
    customDate.setMinutes(30);
    customDate.setSeconds(45);

    console.log("Modified Date : ", customDate);
}
