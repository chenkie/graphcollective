import { Resolver, Query, Args } from '@nestjs/graphql';

const interviews = [
  {
    id: '1',
    title: "How GraphQL Helps You Query the World's Data",
    description: '',
    interviewee: [
      {
        name: 'Sean Grove',
        twitter: 'sgrove',
        bio:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
    ],
  },
  {
    id: '2',
    title: 'Why GraphQL is Delightful for Developers',
    description:
      'Tanmai Gopal, founder of Hasura, explains why developers everywhere love GraphQL and why it was an essential technology for his company.',
    interviewee: [
      {
        name: 'Tanmai Gopal',
        twitter: 'tanmaigo',
        bio:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
    ],
  },
  {
    id: '3',
    title: 'Why It Makes Sense to Build a Product on GraphQL',
    description:
      'Kyle Mathews, the founder and CEO of Gatsby, talks about why he placed a bet on GraphQL in his product.',
    interviewee: [
      {
        name: 'Kyle Mathews',
        twitter: 'kylemathews',
        bio:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
    ],
  },
  {
    id: '4',
    title: 'How GraphQL Makes for a Delightful Developer Experience',
    description:
      'Beyang Liu of SourceGraph talks about how GraphQL has been crucial for a great developer experience at his company.',
    interviewee: [
      {
        name: 'Beyang Liu',
        twitter: 'beyang',
        bio:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
    ],
  },
  {
    id: '5',
    title: 'Why the World is Moving Towards GraphQL',
    description:
      'Paul Dowman, Engineer at Shopify, talks about why developers everywhere are moving to GraphQL.',
    interviewee: [
      {
        name: 'Paul Dowman',
        twitter: 'pauldowman',
        bio:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
    ],
  },
];

@Resolver('Interviews')
export class InterviewsResolver {
  @Query('interviews')
  interviews() {
    return interviews;
  }

  @Query('interview')
  interview(@Args('id') id: string) {
    return interviews.find(interview => interview.id === id);
  }
}
