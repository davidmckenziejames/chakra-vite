import ProfileHeader from "../Profile/ProfileHeader";
import LayoutOffline from "./LayoutOffline";
import ProfileMenuOffline from "./ProfileMenuOffline";
export default function ProfileOffline() {
  return (
    <LayoutOffline>
      <ProfileHeader />
      <ProfileMenuOffline />
    </LayoutOffline>
  );
}
