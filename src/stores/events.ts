import { writable } from 'svelte/store';

export const Events = writable([]);
export const Annoucements = writable([]);

//Stored locally at the point of development for static development.
const eventsData = [
	{
		name: 'Student and Members Introduction',
		type: 'ACM-Meeting',
		date: 'Thursday, September 2, 2021',
		organized_by: 'Association for Computing and Machinery',
		presenters: 'ACM Organization',
		time: '5 p.m.-6 p.m.',
		venue: 'A&S 107'
	},
	{
		name: 'Company Speaker',
		type: 'Company-Recruitment',
		date: 'Thursday, September 16, 2021',
		organized_by: 'Association for Computing and Machinery',
		presenters: 'Unknown',
		time: '5 p.m.-6 p.m.',
		venue: 'A&S 107'
	},
	{
		name: 'Company Speaker',
		type: 'Company-Recruitment',
		date: 'Thursday, September 30, 2021',
		organized_by: 'Association for Computing and Machinery',
		presenters: 'Omnitech, Sioux Falls',
		time: '5 p.m.-6 p.m.',
		venue: 'A&S 107'
	},
	{
		name: 'Community Outreach Programme-Vermillion Middle School',
		type: 'Community-Event',
		date: 'Thursday, October 14, 2021',
		organized_by: 'Association for Computing and Machinery',
		presenters: 'ACM',
		time: '5 p.m.-6 p.m.',
		venue: 'A&S 107'
	},
	{
		name: 'Company Speaker',
		type: 'Company-Recruitment',
		date: 'Thursday, October 28, 2021',
		organized_by: 'Association for Computing and Machinery',
		presenters: 'Unknown',
		time: '5 p.m.-6 p.m.',
		venue: 'A&S 107'
	},
	{
		name: 'Company Speaker',
		type: 'Company-Recruitment',
		date: 'Thursday, November 11, 2021',
		organized_by: 'Association for Computing and Machinery',
		presenters: 'Unknown',
		time: '5 p.m.-6 p.m.',
		venue: 'A&S 107'
	},
	{
		name: 'Community Outreach Programme',
		type: 'Community-Event',
		date: 'Thursday, November 25, 2021',
		organized_by: 'Association for Computing and Machinery',
		presenters: 'ACM',
		time: '5 p.m.-6 p.m.',
		venue: 'A&S 107'
	},
	{
		name: 'Semeter Conclusion Party',
		type: 'ACM-Fun-Event',
		date: 'Thursday, December 9, 2021',
		organized_by: 'Association for Computing and Machinery',
		presenters: 'ACM -Board Members',
		time: '5 p.m.-6 p.m.',
		venue: 'A&S 107'
	}
];
const annoucementsData = [
	{
		title: 'ACM newly appointed board',
		description:
			'ACM remained stagnant due to the COVID-19 pandemic has taken an initiative under its new board members to start organizing student activities for the 2021 Fall Semester.The newly appointed board has created a Discord Channel for the members to keep the students engaged in various ACM activities and allowing students to communicate their interest in ACM Activites and Events.',
		date: 'July 18 2021',
		images: './images/acm.png'
	},
	{
		title: 'ACM Student Organization Recruitment',
		description:
			'ACM is all set to take initiative this semester and is planning to start student recruitment by tabling during the Student Organizations Fair on August 22. Come on By the Old Ice Rink and catch your fellow ACM members for the term ,and be sure to register for the semester! We have a lot of fun activities for all the members! ',
		date: 'July 18 2021',
		image: '/src/static/acm.png'
	},
	{
		title: 'ACM First All Member Meetings',
		description:
			"ACM is all set to start this semester welcoming the new members for the team! We can't wait to meet you guys and let you know all about the new exciting things we have planned! Join us for the ACM Meeting on September 2 2021, at 5 p.m. at Arts and Science. We'll have some pizza for you guys.Don't forget to bring a friend!",
		date: 'July 18 2021',
		image: '../images/acm.png'
	}
];
Events.set(eventsData);
Annoucements.set(annoucementsData);
