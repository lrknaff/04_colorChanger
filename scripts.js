function getRandomColor(randomColor) {
  var letter = '0123456789ABCDEF';
  var randomColor = '#';
  for (var i = 0; i < 6; i++) {
    randomColor += letter[Math.floor(Math.random() * 16)];
  }
  return randomColor;
};

function changeBackgroundColor() {
  $('body').css('background-color', );
};

// $('#reset-button').on('submit', function() )
