function badlyCheckLines(color) {
  t1 = document.getElementById('t1').style.backgroundColor;
  t2 = document.getElementById('t2').style.backgroundColor;
  t3 = document.getElementById('t3').style.backgroundColor;
  t4 = document.getElementById('t4').style.backgroundColor;
  t5 = document.getElementById('t5').style.backgroundColor;
  t6 = document.getElementById('t6').style.backgroundColor;
  t7 = document.getElementById('t7').style.backgroundColor;
  t8 = document.getElementById('t8').style.backgroundColor;
  t9 = document.getElementById('t9').style.backgroundColor;
  
  returns = 0;
  if (t1 == color && t2 == color && t3 == color) {returns = returns + 1;}
  if (t4 == color && t5 == color && t6 == color) {returns = returns + 1;}
  if (t7 == color && t8 == color && t9 == color) {returns = returns + 1;}
  
  if (t1 == color && t4 == color && t7 == color) {returns = returns + 1;}
  if (t2 == color && t5 == color && t8 == color) {returns = returns + 1;}
  if (t3 == color && t6 == color && t9 == color) {returns = returns + 1;}
  
  if (t1 == color && t5 == color && t9 == color) {returns = returns + 1;}
  if (t7 == color && t5 == color && t3 == color) {returns = returns + 1;}
  
  return returns;
}

function noTrick(color) {
  document.getElementById(color+'Score').value = 17;
}

function noPenalty(color) {
  buff = Math.floor((17 - document.getElementById(color+'Score').value) / 2)
  document.getElementById(color+'Score').value = eval(document.getElementById(color+'Score').value) + eval(buff);
}

function clearBoard() {
  document.getElementById('blueScore').value = eval(document.getElementById('blueScore').value) - eval(badlyCheckLines("lightblue"))
  document.getElementById('redScore').value = eval(document.getElementById('redScore').value) - eval(badlyCheckLines("pink"))
  document.getElementById('greenScore').value = eval(document.getElementById('greenScore').value) - eval(badlyCheckLines("lightgreen"))
  document.getElementById('purpleScore').value = eval(document.getElementById('purpleScore').value) - eval(badlyCheckLines("plum"))
  for (var i = 1; i < 10; i++) {
    id = 't' + i;
    color = document.getElementById(id).style.backgroundColor
    if (color != '') {
	  if (color == 'lightblue') {color = 'blue';}
	  if (color == 'pink') {color = 'red';}
	  if (color == 'lightgreen') {color = 'green';}
	  if (color == 'plum') {color = 'purple';}
      document.getElementById(color+'Score').value = document.getElementById(color+'Score').value - 1
    }
    document.getElementById(id).style.backgroundColor = '';
  }
}

function tdclick(id) {
  if (document.getElementById(id).style.backgroundColor == '') {
    document.getElementById(id).style.backgroundColor = 'lightblue';
  }
  else if (document.getElementById(id).style.backgroundColor == 'lightblue') {
    document.getElementById(id).style.backgroundColor = 'pink';
  }
  else if (document.getElementById(id).style.backgroundColor == 'pink') {
    document.getElementById(id).style.backgroundColor = 'lightgreen';
  }
  else if (document.getElementById(id).style.backgroundColor == 'lightgreen') {
    document.getElementById(id).style.backgroundColor = 'plum';
  }
  else if (document.getElementById(id).style.backgroundColor == 'plum') {
    document.getElementById(id).style.backgroundColor = '';
  }
}

function makeDump() {
	suit = ''
	rank = ''
	suitn = Math.floor(Math.random() * 4)
	rankn = Math.floor(Math.random() * 13) + 1
	switch(suitn) {
		case 0:
			suit = '♠️';
			break;
		case 1:
			suit = '<font color="red">♥️</font>';
			break;
		case 2:
			suit = '<font color="red">♦️</font>';
			break;
		case 3:
			suit = '♣️';
			break;
		default:
			suit = '';
			break;
	}
	switch(rankn) {
		case 1:
			rank = 'A';
			break;
		case 10:
			rank = 'T';
			break;
		case 11:
			rank = 'J';
			break;
		case 12:
			rank = 'Q';
			break;
		case 13:
			rank = 'K';
			break;
		default:
			rank = rankn + '';
			break;
	}
	
	suitrank = rankn+suit;
	document.getElementById('dumpth').textContent = '#' + rankn;
	document.getElementById('uncle').innerHTML = rank + suit;
	document.getElementById('aunt').innerHTML = 'Q' + suit;	
	document.getElementById('uncle').className = 'emojiSmall';
	document.getElementById('aunt').className = 'emojiSmall';
	document.getElementById('dumpth').className = 'icons';
}