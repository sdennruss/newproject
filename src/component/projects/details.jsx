import vvc from "./assets/vvc.png";
import vvc1 from "./assets/vvc-1.png";
import vvc2 from "./assets/vvc-2.png";
import vvc3 from "./assets/vvc-3.png";
import mkc from "./assets/mkc.png";
import mkc1 from "./assets/mkc1.png";
import mkc2 from "./assets/mkc2.png";
import mkc3 from "./assets/mkc3.png";
import omp from "./assets/omp.png";
import omp1 from "./assets/omp1.png";
import omp2 from "./assets/omp2.png";
import omp3 from "./assets/omp3.png";
import glh from "./assets/glh.png";
import glh1 from "./assets/glh1.png";
import glh2 from "./assets/glh2.png";
import glh3 from "./assets/glh3.png";
import mb from "./assets/mb.png";
import mb1 from "./assets/mb1.png";
import mb2 from "./assets/mb2.png";
import mb3 from "./assets/mb3.png";
import epc from "./assets/epc.png";
import epc1 from "./assets/epc1.png";
import epc2 from "./assets/epc2.png";
import epc3 from "./assets/epc3.png";
import shopify from "./assets/shopify.png";
import shopify1 from "./assets/shopify1.png";
import shopify2 from "./assets/shopify2.png";
import shopify3 from "./assets/shopify3.png";
import mainVVC from "./assets/mainVVC.png";
import glhPreview from "./assets/glh-preview.png";
import shopifyPreview from "./assets/shopify-preview.png";
import omnipresent from "./assets/omnipresent.png";
import model from "./assets/model.png";
import parachute from "./assets/parachute.png";
import majik from "./assets/majik.png";

export const details = [
	{
		id: 0,
		title: "Vegan Virgin Challenge",
		subtitle: "30 Day Vegan Calendar",
		service: "Design, Development & Logo Design",
		summary:
			"A simple and easy-to-use 30 day vegan calendar for those looking to transition into the vegan lifestyle. This was my very first live project where I've built it from scratch, and on my own, with the use of HTML, CSS and React.js. This web application is statically-generated and hosted on Netflify as frequent changes are not a regular occurrence.",
		description:
			"React Router was used to create a url path with params (breakfast, lunch, and dinner) to pass through the menu items component and match with the day that was clicked to render recipes. In this case, onClick of day 2 would render 3 menu item options for breakfast, lunch and dinner from that specific day only. React Router was used for routing url endpoints onClick of navigation items that matched the path for each Route on App.js. ",
		subDescription:
			"I used pure CSS, and React.js for animations and scroll effects that can be seem on the navigation menu, transition slides, and scroll-effect on mobile devices onClick of one of the calendar days. You can view the live website and see the scrolling animations on your mobile devices by clicking the button below.",
		path: "veganvirginchallenge",
		link: "https://veganvirginchallenge.com/",
		preview: mainVVC,
		mainImg: vvc,
		mobile1: vvc1,
		mobile2: vvc2,
		mobile3: vvc3,
	},
	{
		id: 1,
		title: "Majik Kids",
		subtitle: "Majik Kids Club Stories",
		service:
			"WordPress, Development, Third Party Plugin Intergration, HTTP request ",
		summary:
			"A WordPress website built with Elementor for Majik Media's brand called Majik Kids, that creates, develops and publishes children books. The objective of this landing page is to create a fomo (fear of missing out) affect for parents to register their kids to Majik Stories listening party by making an HTTP GET request to fetch the subscriber count from ConvertKit to showcase on the front-end. ",
		description:
			"This web application was built using Elementor, a Word Press builder paired with a plugin (WP Shopify) to intergrate products from Shopify on WordPress. PHP code was used to render each product on Shopify's store data along with setting up private apps to allow authorization of the third party plugin on WordPress.",
		subDescription:
			" A mock-up was provided to follow in detail to implement and develop each UI component on Word Press. Click the link below to view Majik Kids web application!",
		path: "majikkids",
		link: "https://majikkids.com/",
		preview: majik,
		mainImg: mkc,
		mobile1: mkc1,
		mobile2: mkc3,
		mobile3: mkc2,
	},
	{
		id: 2,
		title: "Omnipresent Replica",
		subtitle: "Omnipresent Coding Challenge",
		service: "Development",
		summary:
			"This web application was part of a coding challenge during an interview process to replicate Omnipresent’s Global Reach page using HTML, CSS and React.js. This was built from scratch and on my own within a given timeframe to complete. Since this was a coding challenge, I’ve hosted this on Netlify and pushed on my GitHub repository.",
		description:
			" In order to showcase possible remote work country location, I used Airtables API in a function and called it using useEffect and stored the data in a variable. In this case, the useState hook has a default value of an empty array to hold the fetched data and reuse to map and display the countries in a component. The useContext hook was applied to avoid prop-drilling via each component.",
		subDescription:
			"A search function on keywords about a specific country was included on the sub navigation bar based on language, currency, country and region by using the spread operator on the variable holding the country data and using filter() to return a match from the input value. You may view the filter functions by clicking the link below and trying it out for yourself!",
		path: "omnipresent",
		link: "https://upbeat-shaw-906a84.netlify.app/",
		preview: omnipresent,
		mainImg: omp,
		mobile1: omp1,
		mobile2: omp2,
		mobile3: omp3,
	},
	{
		id: 3,
		title: "GLH Renovations",
		subtitle: "Renovations & Design Portfolio",
		service: "Design & Development",
		summary:
			" A very straightforward web application for a renovations company based in Bali, Indonesia made from scratch and on my own. This web application is statically-generated and hosted on Netlify with the use of HTML, CSS and React.js. To meet the clients objective of showcasing before and after shots to his potential customers, I utilized a toggle function that would reflect the transformation. ",
		description:
			"React Router was installed to navigate through the main navigation and nested routes were created under Villa Projects to switch through each property. Under the before and after section, onClick of the arrows would update the state and the variable would be used as a value for the src attribute inside of a square bracket notation to index the next object.",
		subDescription:
			"The property image and  copy are dynamically rendered making it easy to make amends in the appropriate component with the use of map(). The use of useState was implemented frequently to update the state and display different imagery onClick of the buttons under the before and after section of the homepage. ",
		path: "glh",
		link: "https://glhrenovations.com",
		preview: glhPreview,
		mainImg: glh,
		mobile1: glh1,
		mobile2: glh2,
		mobile3: glh3,
	},
	{
		id: 4,
		title: "Model Behaviour",
		subtitle: "Modeling Portfolio",
		service: "Design & Development",
		summary:
			"A collection of shots from those who stopped me on the road/cafes asking to book me for photoshoots. Of course, I found a reason to turn this into an opportunity to have a little fun with the translateX and translateY properties in CSS. Static web application that is also mobile responsive as I do not make updates on this site frequently. ",
		description:
			"Full disclosure: This is a parody website to capture all of the shots taken of me by random interactions with people on the street asking to shoot me. This was an excuse to play around with CSS properties specifically on the navigation bar and getting funky with translateX and translateY.",
		subDescription:
			"The use of CSS pseudo-element selector, :hover, was heavily used on images to credit photographers and brands in a subtle way to avoid interfering with the layout of the images. An aos package was added to assist with animating the images on scroll for the worst and best behaviour pages. ",
		path: "modelbehaviour",
		link: "https://www.onewayshan.com/",
		preview: model,
		mainImg: mb,
		mobile1: mb1,
		mobile2: mb2,
		mobile3: mb3,
	},
	{
		id: 5,
		title: "Parachute",
		service: "Design Maintenance & Mobile Responsiveness",
		subtitle: "Parachute Website Updates",
		summary:
			"A premium infused cannabis chocolate bar brand - Parachute, from Toronto, Canada. This web application is hosted on WordPress and developed to be mobile responsive as the majority of purchases are made via mobile devices. My responsibilities were CSS focused by making their website mobile friendly and regular maintenance on the site to adapt to user flow based on website heatmap analysis.",
		description:
			"The task for Parachute was to make it more mobile responsive and make design changes to modernize their design to fit their demographic. You can view the mobile responsiveness of their live website by clicking the link below. ",
		path: "parachute",
		link: "https://eatparachute.com/",
		preview: parachute,
		mainImg: epc,
		mobile1: epc1,
		mobile2: epc2,
		mobile3: epc3,
	},
	{
		id: 6,
		title: "Shopify Merchants",
		service: "Development, and Third Party App Intergration",
		subtitle: "Shopify Merchant Website Development and Admin Set-Up ",
		summary:
			"Worked as a Web Developer at a boutique agency called Storee Studio alongside a Web Designer and her Shopify Merchants for 1 year and 4 months. The main focus of my role was third party app integrations, CSS design amendments and layout implementions.",
		description:
			"During my time at Storee Studio, a lot of communication between the client and myself was a frequent occurrence. We used Trello Boards to keep track of tasks to stay on top of projects in progress, in the revision stages or completed. I was provided mock-ups by the Web Designer and would implement and develop new layouts and designs in Shopify’s CMS by referencing Figma and Adobe XD mock-ups.",
		subDescription:
			"To avoid reinventing the wheel, I would install and set up plugins to help assist with certain functions such as a language and/or currency selector, and store locator apps. Communication was key component between myself and Shopify Merchants to walk them through new features and how to update their pages by creating simple loom videos.",
		path: "shopify",
		link: "https://dashel.co.uk/",
		preview: shopifyPreview,
		mainImg: shopify,
		mobile1: shopify1,
		mobile2: shopify2,
		mobile3: shopify3,
	},
];
