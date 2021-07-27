<script>
	import { Events, Annoucements } from '../stores/events';

	function getEventDetails(event) {
		//Thinking of putting some animations so vacant right now.
	}
</script>

<div class="theme-background bg-fixed container-fluid">
	<hr />
	<div class="flex flex-row  justify-center space-x-5 ">
		<div class="card my-6 events-card border-rounded p-8">
			<h5 class="text-white">Event Schedule for Fall 2021</h5>
			{#each $Events as Event}
				<div
					class="card event-meeting my-3 border-rounded p-3 {Event.type}"
					on:click={() => getEventDetails(Event)}
				>
					<div class="card-header event-header flex justify-between">
						<h6 class="event-name">
							{Event.name.includes('-') ? Event.name.split('-')[0] : Event.name}
						</h6>
						<h6 class="event-name">{Event.date}</h6>
					</div>
					<hr />
					<div class="card-body">
						<p class="card-body-text">{Event.type} by <b>Presenter: {Event.presenters} </b></p>
						<p class="card-body-text">Organized By: {Event.organized_by}</p>
						<p class="card-body-text"><b>Event Location: {Event.venue} at {Event.time} </b></p>
					</div>
				</div>
			{/each}
		</div>
		<div class="card announcement-card my-6 border-rounded p-8">
			<h5 class="text-white">Important Annoucements</h5>
			<hr />
			<div class="card flex justify-center card-logo mt-3">
				<img src="/static/acm.png" alt="ACM-Logo" class="mx-3 " style=" width:75px;" />
			</div>
			<p class="card-body-text text-center">
				You can join our discord <a
					href="https://discord.com/Xha2tGYeSP"
					target="_blank"
					class="text-link"
				>
					here</a
				>
			</p>
			{#each $Annoucements as Annoucement}
				<div class="card announcement-card-item my-4">
					<div class="card-text-body">
						<h5>{Annoucement.title}</h5>
						<p class="card-body-text">{Annoucement.description}</p>
					</div>
					<hr class="my-1" />
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
	.theme-background {
		overflow: hidden !important;
		height: 100%;
		background-color: #071108;
		color: white;
		padding: 20px;
	}
	.ACM-Meeting {
		background-color: #3a9b64 !important;
		color: white;
	}
	.Company-Recruitment {
		background-color: #337e99 !important;
		color: white;
	}
	.Community-Event {
		background-color: #f5ae3c !important;
		color: white;
	}
	.event-name {
		font-size: 15px;
		font-weight: 500;
		font-family: 'Roboto', sans-serif;
	}
	.ACM-Fun-Event {
		background-color: #fe6847 !important;
		color: white;
	}

	.card-logo {
		background-color: transparent !important;
	}

	.card {
		background-color: white;
	}
	.card-body-text {
		font-weight: 300;
		font-size: 12px;
	}
	.card-footer-text {
		font-weight: 300;
		font-size: 10px;
	}
	.text-link {
		color: #337e99;
	}
	.events-card {
		width: 45%;
		height: 80vh;
		background-color: #1f2820;
		overflow-x: hidden;
		overflow-y: scroll;
		scroll-behavior: auto;
	}
	.event-header {
		opacity: 0.9;
	}
	.event-header:hover {
		opacity: 1;
	}
	.announcement-card {
		width: 30%;
		height: 80vh;
		background-color: #364652;
		overflow-y: scroll;
		color: white;
	}
	.announcement-card-item {
		background-color: transparent;
		color: white;
	}
	.border-rounded {
		border-radius: 2%;
	}
	.event-meeting {
		cursor: pointer;
		min-height: 100px;
		transition: all 0.2s ease-in-out;
	}
	.event-meeting:hover {
		transform: scale(1.05);
	}
	/* width */
	::-webkit-scrollbar {
		width: 3px;
		border-radius: 3%;
		margin-top: 3px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: transparent;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: white;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
</style>
