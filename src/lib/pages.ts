import basePath from './basePath'

export { basePath }

export const internal = [
  {
    title: 'Home',
    path: '/',
    showInNav: false,
  },
  {
    title: 'About',
    path: '/about/',
    showInNav: true,
  },
  {
    title: 'Subteams',
    path: '/subteams/',
    showInNav: true,
    subPages: [
      {
        title: 'Software',
        path: `${basePath}/subteams/software/`,
      },
      {
        title: 'Structures',
        path: `${basePath}/subteams/structures/`,
      },
      {
        title: 'Embedded Systems',
        path: `${basePath}/subteams/embedded/`,
      },
    ],
  },
  {
    title: 'Sponsors',
    path: '/sponsors/',
    showInNav: true,
  },
  {
    title: 'Join',
    path: 'https://forms.gle/C9xCty7A2RkK2x7YA',
    showInNav: false,
  },
].map(page => ({ ...page, path: `${basePath}${page.path}` }));

export const external = [
  {
    title: 'IARC',
    path: 'http://www.aerialroboticscompetition.org/',
  },
  {
    title: 'Maize Pages',
    path: 'https://maizepages.umich.edu/organization/maav/',
  },
  {
    title: 'Internal Wiki',
    path: 'https://sites.google.com/umich.edu/maav/',
  },
  {
    title: 'Github',
    path: 'https://github.com/MAAV-Software/',
  },
  {
    title: 'Instagram',
    path: 'https://www.instagram.com/umichmaav/',
  },
]