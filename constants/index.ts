export const skills = [
  'React',
  'React Native',
  'Next.js',
  'JavaScript',
  'State Management',
  'Redux',
  'Jotai',
  'RTK Query',
  'React Query',
  'TypeScript',
  'HTML',
  'CSS',
  'Sass',
  'Tailwind',
  'Git',
  'Framer-Motion',
  'Firebase',
  'Jest',
  'React Testing Library',
  'Cypress',
  'Storybook',
  'Styled-Components',
  'Restful API',
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
}

export const experiences: Experience[] = [
  {
    companyUrl: 'https://www.extend.com/',
    startDate: 'Aug 2021',
    endDate: 'Dec 2023',
    companyName: 'Extend, Inc',
    jobTitle: 'Senior Software Engineer',
    description:
      'Collaborate with product and design teams to create new features for our consumer facing merchant portal and internal admin portal based on customer feedback and business stakeholder needs.',
    techStack: [
      'React',
      'TypeScript',
      'Redux',
      'React Query',
      'Unit Testing',
      'Cypress',
      'Restful API',
      'Postman',
      'Git',
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
      'Collaborate with internal business stakeholders to design and develop internal tools to centralize sales processes in an application known as the Sales Optimization Platform.',
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
    ],
  },
  {
    companyUrl:
      'https://www.netsuite.com/portal/products/ecommerce/products/ecommerce.shtml',
    startDate: 'Feb 2015',
    endDate: 'Oct 2017',
    companyName: 'NetSuite, Inc',
    jobTitle: 'Web Developer & Consultant',
    description:
      'Lead front-end developer responsible for developing custom SuiteCommerce websites following customers designs and feedback',
    techStack: [
      'SuiteCommerce Advanced',
      'Backbone.js',
      'JavaScript',
      'Less',
      'Git',
    ],
  },
  {
    companyUrl: '',
    startDate: 'Sept 2013',
    endDate: 'Feb 2015',
    companyName: 'The New Office, Inc',
    jobTitle: 'Web Developer',
    description:
      'Responsible for developing and updating dynamic eCommerce websites for clients using NetSuite SuiteCommerce Advanced platform',
    techStack: [
      'SuiteCommerce Advanced',
      'Backbone.js',
      'JavaScript',
      'Less',
      'Git',
      'Wordpress',
    ],
  },
]

export const projects = []
