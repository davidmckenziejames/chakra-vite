import ProfileHeader from "../Profile/ProfileHeader";
import LayoutOffline from "./LayoutOffline";
import ProfileMenuOffline from "./ProfileMenuOffline";
import StickyFooter from "./StickyFooter";
export default function ProfileOffline() {
  return (
    <LayoutOffline>
      <ProfileHeader />
      <ProfileMenuOffline />
      <StickyFooter />
    </LayoutOffline>
  );
}
