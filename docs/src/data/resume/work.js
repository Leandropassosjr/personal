/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'São Paulo state University (UNESP)',
    position: 'Postdoctorate Research in Machine Learning',
    url: 'https://www.bauru.unesp.br/',
    startDate: '2023-07-01',
    summary: 'Main researcher of a FAPESP project entitled "On the Study and Development of Biological Plausible Computational Intelligent Models" through a Continuous Funding Stream Fellowship project.',
    highlights: [
      'Development of more biologically plausible Machine Learning algorithms.',
      'Study of recent discoveries on neurosciency.',
      'Supervision and co-supervision of undergraduate, master\'s and Ph.D. Students.',
    ],
  },
  {
    name: 'University of Wolverhamptom',
    position: 'Postdoctorate Research in Machine Learning',
    url: 'https://www.wlv.ac.uk/',
    startDate: '2021-10-10',
    endDate: '2022-12-07',
    summary: 'Researcher of an EPSRC project entitled "COG-MHEAR. Towards cognitively-inspired 5G-IoT enabled, multi-modal Hearing Aids."',
    highlights: [
      'Development of multimodal audio-visual speech enhancement (AVSE) algorithms.',
      'Development of more biologically plausible Machine Learning algorithms for AVSE.',
    ],
  },
  {
    name: 'São Paulo state University (UNESP)',
    position: 'Lecturer and Postdoctorate Research in Machine Learning',
    url: 'https://www.bauru.unesp.br/',
    startDate: '2018-12',
    endDate: '2020-01',
    summary: 'Researcher of a Petrobras P&D project entitled "Workplace safety aided by AI: Entrance control of high-risk environments using biometrics and Personal Protective Equipment (PPE) recognition on an embedded system."',
    highlights: [
      'Teaching the following courses: Algorithms\' complexity,  Intelligent Systems, Database Sysmtems I, and Database Sysmtems II',
      'Development of computer vision systems for risk environment monitoring.',
      'Supervision and co-supervision of undergraduate, master\'s and Ph.D. Students.',
    ],
  },
  {
    name: 'STi3 Soluções  de Ti',
    position: 'Computer programmer',
    url: 'https://www.sti3.com.br/',
    startDate: '2010-04',
    endDate: '2013-02',
    summary: 'Developer of computer systems for sales and retail in general.',
    highlights: [
      'Design and development of computer systems using VB6, C#, and JAVA.',
      'MySQL database modelling, management, and administration',
    ],
  },
];

export default work;
