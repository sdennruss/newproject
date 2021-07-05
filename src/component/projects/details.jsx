import vvc from "./assets/vvc.png";
import mainVvc from "./assets/mobile-vvc.png";
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
    service: "Design, Developement",
    summary:
      "A simple and easy-to-use 30 day vegan calendar for those looking to transition into the vegan lifestyle. This was my very first live project where I've built it from scratch, and on my own, with the use of HTML, CSS and React.js. This web application is statically-generated and hosted on Netflify.",
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
    title: "GLH Renovations",
    service: "Design, Developement",
    summary:
      " A very straightforward web application for a renovations company based in Bali Indonesia made from scratch. Statically-generated website hosted on Netlify with the use of HTML, CSS and React.js. I've always wanted to experiment with toggling before and after shots so this seemed like the perfect opportunity. ",
    description:
      "It was a lot of fun working with assets that were ready to use provided by the client to toggle between before and after shots. Giving his potential clients the visual appearance of an abandoned property paired with after shots to showcase the potential each lot offers with his renovations services.",
    subDescription:
      "The property image and the copy are dynamically rendered making it easy to make minor changes in the appropriate component. Since the website doesn't need frequent changes, this web application is statically-generated hosted on Netflify using HTML, pure CSS, React.js and React-Router to route the nav bar items accordingly.  You can view the live website and see the before and after feature by clicking the button below.",
    path: "glh",
    link: "https://glhrenovations.com",
    preview: glh,
    mainImg: mainGlh,
  },
  {
    id: 2,
    title: "Model Behaviour",
    service: "Design, Developement",
    summary:
      "A collection of shots from those who stopped me on the road/cafes asking to book me for photoshoots. Of course, I found a reason to turn this into an opportunity to have fun with the translateX and translateY properties in CSS. Static web application that is also mobile responsive! ",
    description:
      "Full disclosure: This is a parody website to capture all of the shots taken of me by random interactions with people on the street asking to shoot me. This was an excuse to play around with CSS properties specifically on the navigation bar and getting funky with translateX: and translateY.",
    subDescription:
      "Using CSS pseudo-element selector to credit the photographer and brand in a subtle way to avoid interfering with the layout of the images. The aos package was added to assist with animating the images on scroll of the worst and best behaviour pages. ",
    path: "modelbehaviour",
    link: "https://www.onewayshan.com/",
    preview: model,
    mainImg: mainM,
  },
  {
    id: 3,
    title: "Parachute",
    service: "Design, Developement",
    summary:
      "A premium infused cannabis chocolate bar brand - Parachute, from Toronto, Canada. This web application is hosted on WordPress and created to be mobile responsive as the majority of purchases are made via mobile devices. My responsibilities were CSS focused, mobile responsiveness and regular maintenance on the site as per request. ",
    description:
      "This project was interesting as I'm used to Shopify's platform and how the back end is more UI friendly. Regardless of the challenges, the task for Parachute was to make it more mobile responsive and make design changes as per their request. You can view the mobile responsiveness on the live website by clicking the link below. ",
    path: "parachute",
    link: "https://eatparachute.com/",
    preview: parachute,
    mainImg: mainP,
  },
];
