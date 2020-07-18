(function () {
  var reset = function (e) {
    e.target.className = '';
    setTimeout(function () {
      e.target.className = 'meteor';
    }, 0);
  };
  var meteors = document.querySelectorAll('.meteor');
  for (var i = 0; i < meteors.length; i++) {if (window.CP.shouldStopExecution(0)) break;
    meteors[i].addEventListener('animationend', reset);
  }window.CP.exitedLoop(0);
})();