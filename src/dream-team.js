const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(members) {
  if (!members) {
    return false;
  }

  let teamName = [];

  for ( let i = 0; i < members.length; i++) {
    if((typeof members[i]) !== 'string' ) {
      continue;
    } else {
      if(members[i].slice(0, 1) === ' ') {
        let newArray = members[i].split('');
        newArray = newArray.filter(function(item){
          if(item !== ' ') {
            return item;
          }
        })
        members[i] = newArray.join('');
      }
      let letter = members[i].slice(0,1).toUpperCase();
      teamName.push(letter);
    }
  }
  teamName = teamName.sort();
  teamName = teamName.join('');
  return teamName;
}
module.exports = {
  createDreamTeam
};
