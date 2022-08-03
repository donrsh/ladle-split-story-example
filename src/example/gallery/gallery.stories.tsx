import StoryA from "./storyA.story";
import StoryASrc from "./storyA.story.tsx?raw";
import StoryB from "./storyB.story";
import StoryBSrc from "./storyB.story.tsx?raw";

export const itmeA = () => <StoryA />;
export const itemASrc = () => <pre>{StoryASrc}</pre>;

export const itemB = () => <StoryB />;
export const itemBSrc = () => <pre>{StoryBSrc}</pre>;
