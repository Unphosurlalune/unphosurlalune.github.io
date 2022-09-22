<script>
	Date.prototype.addDays = function (days) {
		this.setDate(this.getDate() + parseInt(days));
		return this;
	};
	// Using built-in methods
	let start = new Date();

	// The event to time goes here:
	let end4 = new Date();
	end4.addDays(1);
	end4.setHours(2);
	end4.setMinutes(30);
	end4.setMilliseconds(0);

    let end7 = new Date();
	end7.addDays(1);
	end7.setHours(6);
	end7.setMinutes(0);
	end7.setMilliseconds(0);

	let elapsed4 = end4.getTime() - start.getTime(); // elapsed time in milliseconds
	let result4 = convertMsToTime(elapsed4);
    let elapsed7 = end7.getTime() - start.getTime(); // elapsed time in milliseconds
	let result7 = convertMsToTime(elapsed7);

	function padTo2Digits(num) {
		return num.toString().padStart(2, '0');
	}

	function convertMsToTime(milliseconds) {
		let seconds = Math.floor(milliseconds / 1000);
		let minutes = Math.floor(seconds / 60);
		let hours = Math.floor(minutes / 60);

		seconds = seconds % 60;
		minutes = minutes % 60;

		// 👇️ If you don't want to roll hours over, e.g. 24 to 00
		// 👇️ comment (or remove) the line below
		// commenting next line gets you `24:00:00` instead of `00:00:00`
		// or `36:15:31` instead of `12:15:31`, etc.
		hours = hours % 24;
		return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
	}
</script>

<br>
Il est {start}
<br>
It will be 2:30 in: {result4}
<br>
It will be 6:00 in: {result7}
