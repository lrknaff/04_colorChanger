function getRandomColor() {
  var letter = '0123456789ABCDEF';
  var randomColor = '#';
  for (var i = 0; i < 6; i++) {
    randomColor += letter[Math.floor(Math.random() * 16)];
  }
  changeBackgroundColor(randomColor);
};

function changeBackgroundColor(randomColor) {
  $('body').css('background-color', randomColor);
  console.log('randomColor');
};

// function resetBackgroundColor() {
//   $('body').css('bakcground-color', #fff);
// };

$('#random-button').on('click', function(randomColor) {
  getRandomColor();
  changeBackgroundColor(randomColor);
});

// $('#reset-button').on('click', funtction() {
//   resetBackgroundColor();
// });
