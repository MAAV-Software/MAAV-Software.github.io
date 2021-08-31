import SubteamsPage from './subteams/SubteamsPage';
import PicturesPage from './pictures/PicturesPage';
import BlogPage from './blog/BlogPage';
import JoiningPage from './joining/JoiningPage';

// Define the pages that will exist on the site
export const pages = {
  'Subteams': {
    path: '/subteams',
    specialNavDisplay: false,
    component: (<SubteamsPage />),
  },
  'Pictures': {
    path: '/pictures',
    specialNavDisplay: false,
    component: (<PicturesPage />),
  },
  'Blog': {
    path: '/blog',
    specialNavDisplay: false,
    component: (<BlogPage />),
  },
  'Joining MAAV': {
    path: '/joining',
    specialNavDisplay: true,
    component: (<JoiningPage />),
  },
};
