// alert(5)

// document.getElementById('btn').addEventListener('mouseover', function() {
// 	alert('Its panda');
// })
const divs = document.getElementsByTagName('div');
const len = divs.length;
for (let i = 0; i < len; i++) {
	divs[i].addEventListener('mouseover', function(e) {
		e.target.classList.add('change-bg');
		e.target.style.backgroundColor = getRandomColor();
	});
	divs[i].addEventListener('mouseleave', function(e) {
		// console.log(e.target)
		e.target.classList.remove('change-bg');
		e.target.style.backgroundColor = '';
	});
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}