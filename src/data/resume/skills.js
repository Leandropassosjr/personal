const skills = [
  {
    title: 'Javascript',
    competency: 1,
    category: ['Programming Languages'],
  },
  {
    title: 'LaTex',
    competency: 5,
    category: ['Programming Languages', 'Tools'],
  },
  {
    title: 'Bash',
    competency: 4,
    category: ['Tools', 'Programming Languages'],
  },
  {
    title: 'MySQL',
    competency: 5,
    category: ['Programming Languages', 'Databases'],
  },
  {
    title: 'SQL',
    competency: 5,
    category: ['Databases', 'Programming Languages'],
  },
  {
    title: 'Database Administration',
    competency: 4,
    category: ['Databases'],
  },
  {
    title: 'Streamlit',
    competency: 3,
    category: ['Python', 'Tools'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Docker',
    competency: 1,
    category: ['Tools'],
  },
  {
    title: 'Numpy',
    competency: 5,
    category: ['Python', 'Machine Learning'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 3,
    category: ['Machine Learning', 'Python'],
  },
  {
    title: 'PyTorch',
    competency: 5,
    category: ['Machine Learning', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 5,
    category: ['Machine Learning', 'Python'],
  },
  {
    title: 'Typescript',
    competency: 1,
    category: ['Programming Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Programming Languages', 'Python', 'Machine Learning'],
  },
  {
    title: 'C++',
    competency: 3,
    category: ['Programming Languages'],
  },
  {
    title: 'C#',
    competency: 3,
    category: ['Programming Languages'],
  },
  {
    title: 'C',
    competency: 4,
    category: ['Programming Languages'],
  },
  {
    title: 'MATLAB',
    competency: 1,
    category: ['Programming Languages'],
  },
  {
    title: 'Data Visualization',
    competency: 3,
    category: ['Machine Learning', 'Python'],
  },
  {
    title: 'Pandas',
    competency: 4,
    category: ['Machine Learning', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 5,
    category: ['Machine Learning', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 5,
    category: ['Machine Learning', 'Python'],
  },
  {
    title: 'Spark',
    competency: 2,
    category: ['Machine Learning'],
  },
  {
    title: 'Portuguese',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'English',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Spanish',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'German',
    competency: 2,
    category: ['Languages'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
