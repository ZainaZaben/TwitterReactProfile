import ProfileHeader from "../ProfileHeader/ProfileHeader";
import ProfileImages from "../ProfileImages/ProfileImages";
import ProfileActions from "../ProfileActions/ProfileActions";
import ProfileDetails from "../ProfileDetails/ProfileDetails";
import ProfileShowOptions from "../ProfileShowOptions/ProfileShowOptions";
import { posts } from "../../data/posts";
import Post from "../Post/Post";
import Search from "../Search/Search";
import { recProfiles } from "../../data/recommended-profiles";
import RecommendedProfilesBoard from "../RecommendedProfilesBoard/RecommendedProfilesBoard";
import MiniProfile from "../MiniProfile/MiniProfile";
import TrendsSection from "../TrendsSection/TrendsSection";
import ShowMore from "../ShowMore/ShowMore";
import TermsAndConditions from "../TermsAndConditions/TermsAndConditions";
import classes from "./mainContent.module.css";
import react from "../../assets/react-profile.png";
import reactBackground from "../../assets/react-background6.jpg";
export const MainContent = () => {
  return (
    <div className={classes.main}>
      <div className={classes.leftPart}>
        <ProfileHeader title="React" postsCount="2,611" />
        <ProfileImages
          bgImg={reactBackground}
          profileImg={react}
        />
        <ProfileActions />
        <ProfileDetails />
        <ProfileShowOptions />
        {posts.map((post, index) => (
          <Post
            key={`post-${index}`}
            date={post.date}
            handel={post.publisherHandle}
            pinned={post.pinned}
            reposted={post.reposted}
            content={post.content}
            publisher={post.publisher}
            profilePic={post.profilePic}
            details={post.details}
          />
        ))}
      </div>
      <div className={classes.rightPart}>
        <Search />
        <RecommendedProfilesBoard>
          <h3 style={{ fontSize: 19, margin: 10 }}>You might like</h3>
          {recProfiles.map((profile, index) => (
            <MiniProfile
              key={`mini-recommended-profile-${index}`}
              img={profile.img}
              handel={profile.handel}
              title={profile.title}
              verified={profile.verified}
            />
          ))}
          <ShowMore />
        </RecommendedProfilesBoard>
        <TrendsSection />
        <TermsAndConditions />
      </div>
    </div>
  );
};
