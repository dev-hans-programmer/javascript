// Write a function which can convert the time input given in 12 hours format to 24 hours format
function convertTo24Hours(timeText = '') {
   const timeTextLower = timeText.toLowerCase();

   let [hours, mins] = timeTextLower.split(':');

   let result;

   if (timeTextLower.endsWith('am')) {
      hours = hours === '12' ? '00' : hours;
      result = `${hours}:${mins.replace('am', '')}`;
   } else {
      if (+hours < 12) hours = +hours + 12 + '';
      result = `${hours}:${mins.replace('pm', '')}`;
   }
   console.log(result);
}

// convertTo24Hours('12:10AM');
// convertTo24Hours('5:00AM');
// convertTo24Hours('12:33PM');
// convertTo24Hours('01:59PM');
// convertTo24Hours('11:8PM');
// convertTo24Hours('10:02PM');

function convertTo24HoursOptimized(timeText = '') {
   const [rawHours, mins, period] = timeText
      .toLowerCase()
      .match(/(\d{1,2}):(\d{2})([ap]m)/i)
      .slice(1);

   let hours = parseInt(rawHours, 10);

   if (period.toLowerCase() === 'pm' && hours !== 12) {
      hours += 12;
   } else if (period.toLowerCase() === 'am' && hours === 12) {
      hours = 0;
   }

   const result = `${hours.toString().padStart(2, '0')}:${mins}`;
   console.log(result);
}

convertTo24HoursOptimized('12:10AM');
convertTo24HoursOptimized('5:00AM');
convertTo24HoursOptimized('12:33PM');
convertTo24HoursOptimized('01:59PM');
convertTo24HoursOptimized('11:08PM');
convertTo24HoursOptimized('10:02PM');
