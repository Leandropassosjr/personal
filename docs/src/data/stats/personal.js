import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1986-10-07T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 33,
    link:
      'https:////timeline.google.com/maps/timeline?hl=pt-BR&authuser=0&pli=1&rapt=AEjHL4Mqg2PAa3OBxLxSA1KfwTIvBBat9ouG12SnrF2uv-MlPf1OL1rcKb66EOdo95jikn48GLDybJDRMpLTvHTxMUIv4Y3X_g0eQZNIY2pMa5x8rbchjGE&pb',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Jaú, SP, Brazil',
  },
];

export default data;
