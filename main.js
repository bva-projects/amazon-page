new Vue({
	el: '#app',
	data: {
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
		src: './images/one.png',
		show: false,
		cuponCode: '45433UFH',
		input: true,
		text: false
	},
	methods: {
		countDown() {
			const eventDate = new Date('July 5, 2019 18:00:00').getTime();
			const current = new Date().getTime();
			const distance = eventDate - current;

			(this.days = Math.floor(distance / (1000 * 60 * 60 * 24))),
				(this.hours = Math.floor(
					(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
				)),
				(this.minutes = Math.floor(
					(distance % (1000 * 60 * 60)) / (1000 * 60)
				)),
				(this.seconds = Math.floor((distance % (1000 * 60)) / 1000));
		},
		toggle: function() {
			if (!event.target.src) {
				return;
			} else {
				this.src = event.target.src;
			}
		},
		openModal: function() {
			this.show = !this.show;
		},
		showCupon() {
			this.input = false;
			this.text = true;
		},
		closeModal() {
			this.show = !this.show;
		},
		visitStore() {
			window.location = 'https://www.amazon.com/project7';
		}
	},
	mounted() {
		this.interval = setInterval(() => this.countDown());
	}
});

const scriptURL =
	'https://script.google.com/macros/s/AKfycbzMPIzOtirqtzp_GJ3tG5IH8AE72X9aMRBysJszK6n38393oOLQ/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
	e.preventDefault();
	fetch(scriptURL, { method: 'POST', body: new FormData(form) })
		.then(response => console.log('Success!', response))
		.catch(error => console.error('Error!', error.message));
});
