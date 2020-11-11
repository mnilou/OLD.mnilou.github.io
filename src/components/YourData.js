// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'mnilou',

  contactEmail: 'nilou@km-direct.com',

  landingPageName: 'Nilou Mostofi',

  landingPagePara:
    'Full Stack Web Developer. My approach to web development is holistic and caters to both the user experience and functionality. I am proficient in both front and back end coding. I design user-friendly websites, develop servers and databases for website functionality and code for mobile platforms.',

  landingPageImage: '/public/assets/Image.jpg',

  projects: [
    {
      id: 1,
      title: 'COVID Karaoke',
      // Image Size Should be (300X300 px)
      imageSrc: '/public/assets/screenshot-covidkaraoke.png',
      url: 'https://covidkaraoke.herokuapp.com/',
    },
    {
      id: 2,
      title: 'The Galactic Game',
      imageSrc: './public/assets/starwars-2.jpg',
      url: 'https://mpabst01.github.io/starWarsTrivia/',
    },
    {
      id: 3,
      title: 'Burger App',
      imageSrc: './public/assets/burger-screenshot.jpg',
      url: 'https://burgers-devoured-app.herokuapp.com/',
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      imageSrc: 'public/assets/weather-dashboard.jpg',
      url: 'https://mnilou.github.io/weather-dashboard/',
    },
    {
      id: 5,
      title: 'Password Generator',
      imageSrc: 'public/assets/password-generator.jpg',
      url: 'https://mnilou.github.io/password-template/',
    },
    {
      id: 6,
      title: 'Employee Team Roster',
      imageSrc: 'public/assets/team-profile-screenshot.jpg',
      url: 'https://mnilou.github.io/employee-team-roster/',
    },
  ],

  // Contact Section//add icons
  contactPara:
    'My passion is creative problem-solving in building beautifully balanced and functional websites. With both front-end and back-end expertise, I am comfortable working in PHP, MySQL, HTML5, CSS3, Javascript, jQuery, REACT, and other front-end technologies. Along with back-end database knowledge of mySQL, Mongoose, webpack and more.',
  social: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nilou-mostofi',
    },
    {
      name: 'Github',
      url: 'https://github.com/mnilou',
    },
    {
      name: 'FaceBook',
      url: 'https://www.facebook.com/nilou.mostofi.5/',
    },
  ],

  // About Page
  aboutTitle:
    'Lets make your project accessible, reliable, functional, and beautiful.',
  aboutPara:
    'As a small-business owner of an event planning company for the past 11 years, organization, self-motivation, and independent decision-making are a must. However, adaptability and thriving in a team environment with a collaborative effort is a forte to deliver quality web projects. My goal is to work directly with clients independently or as a collaborator, to ensure not only quality customer service, but quality products as well.',
};
