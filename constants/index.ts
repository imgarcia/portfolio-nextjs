export const skills = [
  'React',
  'TypeScript',
  'Next.js',
  'JavaScript',
  'State Management',
  'Redux',
  'Jotai',
  'RTK Query',
  'React Query',
  'Jest',
  'React Testing Library',
  'Cypress',
  'HTML',
  'CSS',
  'Sass',
  'Tailwind',
  'Git',
  'Framer-Motion',
  'React Native',
  'Firebase',
  'Storybook',
  'Styled-Components',
  'Restful APIs',
  'Postman',
  'Scrum',
  'Agile',
  'Figma',
]

export type Experience = {
  companyUrl?: string
  startDate: string
  endDate: string
  companyName: string
  jobTitle: string
  description: string
  techStack: string[]
  projects?: Project[]
}

export type Project = {
  name: string
  url: string
}

export const experiences: Experience[] = [
  {
    companyUrl: 'https://www.extend.com/',
    startDate: 'Aug 2021',
    endDate: 'Dec 2023',
    companyName: 'Extend, Inc',
    jobTitle: 'Senior Software Engineer',
    description:
      'Collaborated closely with product and design teams to develop new features for our consumer-facing merchant portal, responding to customer feedback. Using React, and TypeScript, I implemented features and utilized React Query and RTK Query to manage data fetching, setting, and updating. Additionally, I contributed to refactoring and creating new components for our internal admin portal based on business stakeholders\' requirements. Integration of front-end components with RESTful APIs was a key aspect of my role. Contributed in refactoring hundreds of tests from Enzyme to Jest and React Testing Library. I successfully replaced the legacy login process with OKTA\'s authentication and authorization service. Furthermore, I collaborated with the marketing and design teams to create post-purchase email templates aimed at increasing sales and revenue. I also provided support to colleagues by sharing HTML best practices, assisting with unit testing, and debugging code.',
    techStack: [
      'React',
      'TypeScript',
      'Redux',
      'React Query',
      'Unit Testing',
      'Jest',
      'React Testing Library',
      'Cypress',
      'Restful API',
      'Postman',
      'Git',
      'Styled Components',
      'CSS Modules',
      'Figma',
      'AWS',
      'Email Templates',
    ],
  },
  {
    companyUrl: 'https://www.suitesuccessvalue.com/',
    startDate: 'Oct 2017',
    endDate: 'Aug 2021',
    companyName: 'Oracle + NetSuite',
    jobTitle: 'Senior Web Developer',
    description:
      'Collaborated closely with internal business stakeholders to streamline sales processes by designing and developing internal tools utilizing NetSuite API, ReactJS + Redux, D3.js, and other libraries. Additionally, I led the development of new, contemporary SuiteCommerce themes geared towards consumer interaction, ensuring they were responsive and easily implementable by Professional Services and partners. I played a key role in reviewing and refining multiple iterations of SuiteCommerce components and customizations. A significant aspect of my role involved researching, documenting, and implementing UI/UX best practices, effectively educating team members and Professional Services to ensure alignment with evolving standards.',
    techStack: [
      'React',
      'JavaScript',
      'D3.js',
      'SuiteScript',
      'NetSuite API',
      'Cypress',
      'Sass',
      'Git',
      'SuiteCommerce Advanced',
    ]
  },
  {
    companyUrl:
      'https://www.netsuite.com/portal/products/ecommerce/products/ecommerce.shtml',
    startDate: 'Feb 2015',
    endDate: 'Oct 2017',
    companyName: 'NetSuite, Inc',
    jobTitle: 'Web Developer & Consultant',
    description:
      'Lead front-end developer responsible for developing custom SuiteCommerce websites following customers designs and feedback, while also providing technical guidance to other team members. I guided teams in resolving escalations for prominent projects experiencing delays caused by technical obstacles.',
    techStack: [
      'SuiteCommerce Advanced',
      'Backbone.js',
      'JavaScript',
      'Less',
      'Git',
    ],
    projects: [
      { name: 'Natura Brasil', url: 'https://www.naturabrasil.com/' },
      { name: 'SoccerX', url: 'https://www.soccerx.com/' },
      { name: 'Splash Super Center', url: 'https://www.splashsupercenter.com/' },
    ]
  },
  {
    companyUrl: '',
    startDate: 'Sept 2013',
    endDate: 'Feb 2015',
    companyName: 'The New Office, Inc',
    jobTitle: 'Web Developer',
    description:
      'Responsible for developing custom dynamic eCommerce responsive websites for customers using NetSuite SuiteCommerce Advanced platform following best practices and WCAG & ADA standards, while assisting in Q&A and troubleshooting issues.',
    techStack: [
      'SuiteCommerce Advanced',
      'Backbone.js',
      'JavaScript',
      'Less',
      'Git',
      'WordPress',
    ],
    projects: [
      { name: 'TxSmartBuy', url: 'https://www.txsmartbuy.com/' },
      { name: 'Insperity', url: 'https://www.insperity.com/' },
      { name: 'Origin Acoustics', url: 'https://www.originacoustics.com/' }
    ]
  },
]

export const projects = []
