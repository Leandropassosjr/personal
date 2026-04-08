// TODO Add a couple lines about each project
const data = [
  {
    title: 'BioNeRF',
    subtitle: 'Biologically Plausible Neural Radiance Fields for View Synthesis',
    link: 'https://leandropassosjr.github.io/BioNeRF/',
    image: '/images/projects/BioNeRF.png',
    date: '2024-10',
    desc:
      'BioNeRF is a biologically plausible architecture that models scenes in a 3D representation and synthesizes new views through radiance fields. Since NeRF relies on the network weights to store the scene\'s 3-dimensional representation, BioNeRF implements a cognitive-inspired mechanism that fuses inputs from multiple sources into a memory-like structure, improving the storing capacity and extracting more intrinsic and correlated information. BioNeRF also mimics a behavior observed in pyramidal cells concerning contextual information, in which the memory is provided as the context and combined with the inputs of two subsequent neural models, one responsible for producing the volumetric densities and the other the colors used to render the scene. Experimental results show that BioNeRF outperforms state-of-the-art results concerning a quality measure that encodes human perception in two datasets: real-world images and synthetic data.',
  },
  {
    title: 'Graph Neural Networks with canonical correlation analysis',
    subtitle: 'Multimodal audio-visual information fusion using canonical-correlated graph neural network for energy-efficient speech enhancement',
    link: 'https://www.sciencedirect.com/science/article/pii/S1566253522001385',
    image: '/images/projects/gnncca.png',
    date: '2023-02-01',
    desc:
      'GNN-CCA is a multimodal self-supervised architecture for energy-efficient audio-visual (AV) speech enhancement that integrates Graph Neural Networks with canonical correlation analysis.',
  },
  {
    title: 'Canonical cortical graph neural networks',
    subtitle: 'Canonical cortical graph neural networks and its application for speech enhancement in audio-visual hearing aids',
    link: 'https://www.sciencedirect.com/science/article/pii/S0925231222014758',
    image: '/images/projects/cortical_layer.png',
    date: '2023-03-28',
    desc:
      'Despite the recent success of machine learning algorithms, most models face drawbacks when considering more complex tasks requiring interaction between different sources, such as multimodal input data and logical time sequences. On the other hand, the biological brain is highly sharpened in this sense, empowered to automatically manage and integrate such streams of information. In this context, this work draws inspiration from recent discoveries in brain cortical circuits to propose a more biologically plausible self-supervised machine learning approach. This combines multimodal information using intra-layer modulations together with Canonical Correlation Analysis, and a memory mechanism to keep track of temporal data, the overall approach termed Canonical Cortical Graph Neural networks. This is shown to outperform recent state-of-the-art models in terms of clean audio reconstruction and energy efficiency for a benchmark audio-visual speech dataset. The enhanced performance is demonstrated through a reduced and smother neuron firing rate distribution. suggesting that the proposed model is amenable for speech enhancement in future audio-visual hearing aid devices.',
  },
];

export default data;
