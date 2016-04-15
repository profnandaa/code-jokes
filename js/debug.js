/*
 * debug (present participle: debugging) could mean
 * 1. identifying and removing errors from (computer hardware or software).
 * 2. detect or remove concealed microphones from (an area).
 *
 * This joke was derived from the former sense of the word.
 */

alert("Click 'OK' to run the debugger!");
var debug = function(){
  var max = 1000;
  var min = 0;
  var findBugs = function(max,min){return Math.floor(Math.random() * (max - min)) + min;};
  var bugs = findBugs(max,min);
  if (bugs === 0) {
    console.log(bugs + " bugs found. Your code is clean!");
  } else {
    console.log(bugs + " have been found!");
    console.log("Debugging...");
    var j = 0;
    for (var i = bugs; i > 0; i--) {
      j++;
      console.log("Bug #" + j + " fixed!");
    }
    console.log("All the bugs have been fixed!");
    console.log("The debugger is done.");
  }
};
debug();

