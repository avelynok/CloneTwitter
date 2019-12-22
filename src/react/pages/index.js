import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import MessageFeed from "./MessageFeed";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";

export default {
  Home: { path: "/", component: Home },
  Profile: { path: "/profile/:username", component: Profile },
  MessageFeed: { path: "/messagefeed", component: MessageFeed },
  CreateUser: { path: "/createuser", component: CreateUser },
  UpdateUser: { path: "/updateuser", component: UpdateUser },
  NotFound: { path: "*", component: NotFound }
};
