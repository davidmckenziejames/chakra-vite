import ProfileHeader from "../Profile/ProfileHeader";
import Layout from "../../layout/Layout";
import ProfileMenuOffline from "./ProfileMenuOffline";

export default function ProfileOffline() {
  return (
    <Layout>
      <ProfileHeader />
      <ProfileMenuOffline />
    </Layout>
  );
}
