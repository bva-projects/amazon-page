new Vue({
	el: '#imageToggle',
	data: {
		src: './images/one.png'
	},
	methods: {
		toggle: function() {
			if (!event.target.src) {
				return;
			} else {
				this.src = event.target.src;
			}
		}
	}
});

new Vue({
	el: '#count',
	data: {
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
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
		}
	},
	mounted() {
		this.interval = setInterval(() => this.countDown());
	}
});
