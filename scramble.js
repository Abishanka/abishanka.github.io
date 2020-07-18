// scramble.js
//
// 2011, Jeff Donahue (http://jeffdonahue.com/).
// license: you can use this if you want to i guess

function scrambledString(tag, objName, initScrambledString, initScrambledStringIndices) {
  this.tag = tag;
  this.objName = objName;
  this.string = initScrambledString;
  this.indices = initScrambledStringIndices;
  this.rescramble = rescramble;
  this.initAnimatedBubbleSort = initAnimatedBubbleSort;
  this.bubbleSortStep = bubbleSortStep;
  this.bubbleSortBookmark = this.indices.length - 2;

  this.rescramble();
  this.tag.innerHTML = ' <a href="#" style="color: rgb(0,0,0)" onClick="' + this.objName + '.initAnimatedBubbleSort();return false;">' + this.string + '</a>';
}

function rescramble() {
  for (i = 0; i < this.indices.length; i++) {
    indexToMove = Math.floor(Math.random() * (this.indices.length - i));
    charIndexRemoved = this.indices.splice(indexToMove, 1);
    this.indices = this.indices.concat(charIndexRemoved);
    scrambledStringTemp = this.string.substring(0, indexToMove) +
      this.string.substring(indexToMove + 1) +
      this.string.substring(indexToMove, indexToMove + 1);
    this.string = scrambledStringTemp;
  }
}

function initAnimatedBubbleSort() {
  this.interval = setInterval(this.objName + '.bubbleSortStep()', 20);
}

function bubbleSortStep() {   
  if (this.bubbleSortBookmark < 0) {
    this.bubbleSortBookmark = this.indices.length - 2;
  }
  for (i = this.bubbleSortBookmark; i >= 0; i--) {
    if (i == this.indices.length - 2) {
      this.changed = 0;
    }
    if (this.indices[i] > this.indices[i + 1]) {
      this.changed = 1;
      tempIndex = this.indices[i];
      this.indices[i] = this.indices[i + 1];
      this.indices[i + 1] = tempIndex;
      tempArrange = this.string.substring(0, i) +
        this.string.substring(i + 1, i + 2) + 
        this.string.substring(i, i + 1) +
        this.string.substring(i + 2);
      this.string = tempArrange;
      this.tag.innerHTML = this.string;
      this.bubbleSortBookmark = i;
      break;
    }
  }
  this.bubbleSortBookmark = i;
  if (!this.changed) {
    clearInterval(this.interval);
  }
}