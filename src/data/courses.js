import React from 'react';

// Communication content
import ContentOneCommunication from '../components/steps/comunication/contentOne/contentOne';
import ContentTwoCommunication from '../components/steps/comunication/contentTwo/contentTwo';
import ContentThreeCommunication from '../components/steps/comunication/contentThree/contentThree';
import ContentFourCommunication from '../components/steps/comunication/contentFour/contentFour';

// Team content
import ContentOne from '../components/steps/team/contentOne/contentOne';
import ContentTwo from '../components/steps/team/contentTwo/contentTwo';
import ContentThree from '../components/steps/team/contentThree/contentThree';
import ContentFour from '../components/steps/team/contentFour/contentFour';

export const courses = [
  {
    id: 1,
    image:
      'https://cdn.pixabay.com/photo/2017/01/14/10/56/men-1979261__340.jpg',
    title: 'Comunicación asertiva',
    description: '',
    steps: [
      <ContentOneCommunication />,
      <ContentTwoCommunication />,
      <ContentThreeCommunication />,
      <ContentFourCommunication />,
    ],
  },
  {
    id: 2,
    image:
      'https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776__340.jpg',
    title: 'Trabajo en equipo',
    description: '',
    steps: [<ContentOne />, <ContentTwo />, <ContentThree />, <ContentFour />],
  },
];
