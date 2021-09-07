import vvc from "./assets/vvc.png";
import mainVvc from "./assets/mobile-vvc.png";
import omnipresent from "./assets/omnipresent.png";
import mainOmni from "./assets/mainOmni.jpg";
import glh from "./assets/glh.png";
import mainGlh from "./assets/mobile-glh.jpg";
import model from "./assets/model.png";
import mainM from "./assets/mobile-model.png";
import parachute from "./assets/parachute.png";
import mainP from "./assets/mobile-parachute.jpg";

export const details = [
	{
		id: 0,
		title: "Vegan Virgin Challenge",
		service: "Design, Developement & Logo Design",
		summary:
			"A simple and easy-to-use 30 day vegan calendar for those looking to transition into the vegan lifestyle. This was my very first live project where I've built it from scratch, and on my own, with the use of HTML, CSS and React.js. This web application is statically-generated and hosted on Netflify as frequent changes are not a regular occurrence.",
		description:
			"The concept behind this web application is to provide those lacking guidance on how to reduce or eliminate their meat and dairy consumption with the use of recipes for breakfast, lunch and dinner, documentaries and the option to reach out to me for help. I noticed the lack of resources in terms of a one stop shop feeling when searching for recipes, documentaries all on one web application so I decided to build and design this calendar for others to use.  ",
		subDescription:
			"React-Router was installed to assist with routing the url endpoints. I Used pure CSS, and React.js for animations and scroll effects that can be shown on the navigation menu, transition slides, and scroll-effect on mobile devices on click of one of the days on the calendar. You can view the live website and see the scrolling animations on your mobile devices by clicking the button below.",
		path: "veganvirginchallenge",
		link: "https://veganvirginchallenge.com/",
		preview: vvc,
		mainImg: mainVvc,
	},
	{
		id: 1,
		title: "Omnipresent Replica",
		service: "Developement",
		summary:
			"A replicated web application designed to showcase possible remote work country locations using Airtable's API to fetch data and filter them depending on the countries region. This website was statically-generated and hosted on Netlify. ",
		description:
			"This web application was built using React.js, HTML, CSS and useContext, to avoid prop-drilling via each component. In order for a user to browse remote work country locations, a keyword search function on all text fields was included on the sub navigation bar based on language, currency, country and region. You may view the filter functions by clicking the link below and trying it out for yourself!",
		subDescription: "",
		path: "omnipresent",
		link: "https://upbeat-shaw-906a84.netlify.app/",
		preview: omnipresent,
		mainImg: mainOmni,
	},
	{
		id: 2,
		title: "GLH Renovations",
		service: "Design & Developement",
		summary:
			" A very straightforward web application for a renovations company based in Bali, Indonesia made from scratch and on my own. This web application is statically-generated and hosted on Netlify with the use of HTML, CSS and React.js. To meet the clients objective of showcasing before and after shots to his potential customers, I utilized a toggle function that would reflect the transformation. ",
		description:
			"Utilizing the abundance of image assets, I created a website that would give the visual appeal of an abandoned property paired with after shots to showcase the potential each lot offers with the the clients renovations services.",
		subDescription:
			"The property image and the copy are dynamically rendered making it easy to make amends in the appropriate component. Since the website doesn't need frequent changes, this web application is statically-generated hosted on Netflify using HTML, pure CSS, React.js and React-Router to route the URL endpoints accordingly.  You can view the live website and see the before and after feature by clicking the button below.",
		path: "glh",
		link: "https://glhrenovations.com",
		preview: glh,
		mainImg: mainGlh,
	},
	{
		id: 3,
		title: "Model Behaviour",
		service: "Design & Developement",
		summary:
			"A collection of shots from those who stopped me on the road/cafes asking to book me for photoshoots. Of course, I found a reason to turn this into an opportunity to have a little fun with the translateX and translateY properties in CSS. Static web application that is also mobile responsive as I do not make updates on this site frequently. ",
		description:
			"Full disclosure: This is a parody website to capture all of the shots taken of me by random interactions with people on the street asking to shoot me. This was an excuse to play around with CSS properties specifically on the navigation bar and getting funky with translateX and translateY.",
		subDescription:
			"The use of CSS pseudo-element selector, :hover, was heavily used on images to credit photographers and brands in a subtle way to avoid interfering with the layout of the images. An aos package was added to assist with animating the images on scroll for the worst and best behaviour pages. You can view the live website and see navigation bar, and image effects by clicking the button below. ",
		path: "modelbehaviour",
		link: "https://www.onewayshan.com/",
		preview: model,
		mainImg: mainM,
	},
	{
		id: 4,
		title: "Parachute",
		service: "Design Maintenance & Mobile Responsiveness",
		summary:
			"A premium infused cannabis chocolate bar brand - Parachute, from Toronto, Canada. This web application is hosted on WordPress and created to be mobile responsive as the majority of purchases are made via mobile devices. My responsibilities were CSS focused by making their website mobile friendly and regular maintenance on the site to adapt to user flow based on website heatmap analysis.",
		description:
			"The task for Parachute was to make it more mobile responsive and make design changes to modernize their design to fit their demographic. You can view the mobile responsiveness of their live website by clicking the link below. ",
		path: "parachute",
		link: "https://eatparachute.com/",
		preview: parachute,
		mainImg: mainP,
	},
];
