new Vue({
	el: '#app',
	data: {
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
		src: './images/one.png',
		show: false
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
			this.show = !this.show
		}
	},
	mounted() {
		this.interval = setInterval(() => this.countDown());
	}
});
