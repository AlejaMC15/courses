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
      'https://cdn.pixabay.com/photo/2016/12/19/10/16/hand-1917895__340.png',
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
      'https://cdn.pixabay.com/photo/2016/12/19/10/16/hand-1917895__340.png',
    title: 'Trabajo en equipo',
    description: '',
    steps: [<ContentOne />, <ContentTwo />, <ContentThree />, <ContentFour />],
  },
];
