import Home from "./Home";
import HomePage from "./HomePage";
import Profile from "./Profile";
import NotFound from "./NotFound";
import MessageFeed from "./MessageFeed";
import CreateUser from "./CreateUser";

export default {
  Home: { path: "/", component: Home },
  HomePage: { path: "/homepage", component: HomePage },
  Profile: { path: "/profile/:username", component: Profile },
  MessageFeed: { path: "/messagefeed", component: MessageFeed },
  CreateUser: { path: "/createuser", component: CreateUser },
  NotFound: { path: "*", component: NotFound }
};
