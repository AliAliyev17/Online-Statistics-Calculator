document.addEventListener('DOMContentLoaded', () => {
	let set = document.getElementById('set')
	let btn = document.getElementById('calc');
	btn.addEventListener('click', () => {
		var elts = set.value.split(',');
		// Calculating mean
		var sum = 0;
		for (let i=0; i<elts.length; i++) {
			sum += parseInt(elts[i]);
		}
		mean = sum / elts.length;
		document.getElementById('mean').value = mean;
		// Calculating standard deviation
		var variance = 0;
		for (let i=0; i<elts.length; i++) {
			variance += Math.pow(mean-parseInt(elts[i]), 2);
		}
		sd = Math.pow(variance, 0.5);
		document.getElementById('sd').value = sd;
		console.log(mean, variance, sd);
	});
});
