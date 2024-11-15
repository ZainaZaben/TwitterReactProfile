import react from "../assets/react-profile.png";
import josh from "../assets/josh.jpeg";
export const posts = [
  {
    pinned: true,
    reposted: false,
    publisher: "React",
    publisherHandle: "@reactjs",
    date: "Mar 16",
    content: `Today, we’re thrilled to launch react.dev, the new home for React and its documentation. 
    It teaches modern React with function components and Hooks, and we’ve included diagrams, illustrations, challenges, and over 600 interactive examples. Check it out! 🔥`,
    profilePic: react,
    details: {
      commentCount: "784",
      retweetCount: "8,843",
      likeCount: "1050",
      viewCount: "15.1K",
    },
  },
  {
    pinned: false,
    reposted: true,
    publisher: "Josh W. Comeau",
    publisherHandle: "@JoshWComeau",
    date: "Sep 26",
    content: `In order to support the new React 18 features, I've updated my React Lifecycle Diagrams to include Suspense,
     Concurrent Mode, and the new Hooks APIs. I hope you find them useful!`,
    profilePic: josh,
    details: {
      commentCount: "573",
      retweetCount: "3287",
      likeCount: "19,241",
      viewCount: "35.6K",
    },
  },
];
