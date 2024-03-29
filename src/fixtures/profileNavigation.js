import {
  CREATE_POST,
  DASHBOARD,
  SAVED_POSTS,
  SETTINGS,
} from "src/constants/routes";

export default [
  {
    id: 0,
    name: "dashboard",
    path: DASHBOARD,
  },
  {
    id: 1,
    name: "create post",
    path: CREATE_POST,
  },
  {
    id: 2,
    name: "saved posts",
    path: SAVED_POSTS,
  },
  {
    id: 3,
    name: "settings",
    path: SETTINGS,
  },
];
