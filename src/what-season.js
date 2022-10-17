const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 

function getSeason(date) {
  if (!date) {
    console.log('Unable to determine the time of year!');
    return 'Unable to determine the time of year!';
  }
  if (typeof(date.getTime()) !== 'number') {
    throw new Error("Invalid date!")
  }

 if (isNaN(date.getTime())) {
   throw new Error('Invalid date!');
 }

  let month = date.getMonth();
  let season = '';

  switch(month) {
    case 11:
    case 0:
    case 1:
      season = 'winter';
      break;
    case 2:
    case 3:
    case 4:
      season = 'spring';
      break;
    case 5:
    case 6:
    case 7:
      season = 'summer';
      break;
    case 8:
    case 9:
    case 10:
      season = 'fall';
      break;
  }
 return season;
}
 */
function getSeason(date) {
    throw new NotImplementedError('Not implemented');
// remove line with error and write your code here
}

module.exports = {
  getSeason
};
