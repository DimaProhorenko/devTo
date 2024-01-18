import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Button } from "src/modules/common/components";
import {
  ProfileDetail,
  ProfileHeader,
  ProfileNameTag,
  ProfilePane,
  ProfilePaneContent,
} from "src/modules/profile/components";

function PostCreatorSkeleton() {
  return (
    <ProfilePane>
      <ProfilePaneContent>
        <ProfileHeader>
          <Skeleton width={48} height={48} circle containerClassName="flex-1" />
          <div>
            <Skeleton />
          </div>
        </ProfileHeader>
        <div>
          <Skeleton />
        </div>
        <h4>
          <Skeleton />
        </h4>
        <small>
          <Skeleton />
        </small>
      </ProfilePaneContent>
    </ProfilePane>
  );
}
export default PostCreatorSkeleton;
