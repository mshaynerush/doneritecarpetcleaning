if (document.readyState == 'loading') {
	document.addEventListener('DOMContentLoaded', ready)

} else {
	ready();
}

function ready(){

		var estimateRequest = document.getElementById('getEstimate');
			estimateRequest.addEventListener('click', getMyEstimate);
}

function getMyEstimate(event){

	var rooms = document.getElementById('area').value;
	var guard = document.getElementById('scotch').value;
	var deodor = document.getElementById('deodorizer').value;
	var stair = document.getElementById('stairs').value;
	var hall = document.getElementById('hallways').value;
	var landing = document.getElementById('landings').value;
	var odor = document.getElementById('odor').value

		if ( rooms == "" ){
			rooms = 0;
		}
		
		if ( guard == "" ){
			guard = 0;
		}

		if ( deodor == "" ){
			deodor = 0;
		}

		if ( stair == "" ) {
			stair = 0;
		}

		if ( hall == "" ){
			hall = 0;
		}

		if ( landing == "" ){
			landing = 0;
		}

		if ( odor == "" ){
			odor = 0;
		}

		var roomEstLow = parseInt(rooms) * 40;
		var roomEstHigh = parseInt(rooms) * 90;
		var guardEst = parseInt(guard) * 35
		var deodorEst = parseInt(deodor) * 30;
		var stairEst = parseInt(stair) * 4;
		var hallEstLow = parseInt(hall) * 15;
		var hallEstHigh = parseInt(hall) * 30;
		var landEstLow = parseInt(landing) * 10;
		var landEstHigh = parseInt(landing) * 20;
		var urineEstLow = parseInt(odor) * 75;
		var urineEstHigh = parseInt(odor) * 125;
		console.log(roomEstLow, roomEstHigh, deodorEst, stairEst,hallEstLow,hallEstHigh,landEstLow,landEstHigh, urineEstHigh)

		var lowEst = roomEstLow + guardEst + deodorEst + stairEst + hallEstLow + landEstLow + urineEstLow;
		if ( lowEst < 125 ){
			lowEst = 125;
		}
		var highEst = roomEstHigh + guardEst + deodorEst + stairEst + hallEstHigh + landEstHigh + urineEstHigh;
		if ( highEst < 125 ){
			highEst = 125;
		}

		if (lowEst == highEst){
			document.getElementById('estimateAmt').innerHTML = "Minimum Charge: $125"
		} else {
		document.getElementById('estimateAmt').innerHTML = "$" + lowEst + " - $" + highEst;
	}
		
}

