export function dateHandler(datetime) {
    // ფუნქცია რომელიც დღეების გარდაქმნას აკეთებს მაგ კვირა 11 აგვისტო
    const date = new Date(datetime);
  
    // Check if the date is valid
    if (isNaN(date)) {
      throw new Error('Invalid date');
    }
  
    // Define options for weekday and date formatting in Georgian locale
    const weekdayOptions = { weekday: 'long' };
    const dateOptions = { day: '2-digit', month: 'long' };
  
    // Format the date to get the weekday name in Georgian
    const dayOfWeek = new Intl.DateTimeFormat('ka-GE', weekdayOptions).format(
      date
    );
  
    // Format the date to get the day and month in Georgian
    const dayAndMonth = new Intl.DateTimeFormat('ka-GE', dateOptions).format(
      date
    );
  
    // Combine the weekday and day/month into the desired format
    const formattedDate = `${dayOfWeek} ${dayAndMonth}`;
  
    return formattedDate;
  }