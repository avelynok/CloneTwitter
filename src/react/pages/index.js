import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import MessageFeed from "./MessageFeedgit "

export default {
  Home: { path: "/", component: Home },
  Profile: { path: "/profile/:username", component: Profile },
  MessageFeed: { path: "/messagefeed", component: MessageFeed },
  NotFound: { path: "*", component: NotFound }
};
