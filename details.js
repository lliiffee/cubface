var tips = [];
onmessage = function(message){
	var venues = message.data;
	venues.foreach(function(venue){
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if (this.readyState == 4 && this.status == 200){
				var venueDetails = eval('(' + this.responseText + ')');
				venueDetails.tips.forEach(function(tip){
					tip.venueId = venue.id;
					tips.push(tip);
				});
			}
		};
		xhr.open("GET", "api?operation=getDetails&venueId=" + venueId, true);
		xhr.send(null);
	});
	postMessage(tips);
}

