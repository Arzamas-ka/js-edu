/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {

      let hoursWithBaseJs = 800;
      let hoursWithoutBaseJs = 800 + 500;
      let weeks = 0;
      
      if(knowsProgramming) {
        return weeks += Math.ceil(hoursWithBaseJs / config[focus]);
      } else {
        return weeks += Math.ceil((hoursWithoutBaseJs) / config[focus]);
      }
  };
  