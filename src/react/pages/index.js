import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import MessageFeed from "./MessageFeed";

export default {
  Home: { path: "/", component: Home },
  MessageFeed: { path: "/messagefeed", component: MessageFeed },
  Profile: { path: "/profile/:username", component: Profile },
  NotFound: { path: "*", component: NotFound }
};
