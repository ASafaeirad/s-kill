import { Content } from '@/components/Content';
import { Social } from '@/components/Social';
import { SocialList } from '@/components/SocialList';

import FullstacksJS from '../deers/fullstacksjs.png';

export default function Page() {
  return (
    <Content
      ImageProps={FullstacksJS}
      title="FullstacksJS"
      description={
        <>
          22th October 2017 I decided to share what I learn in a telegram
          channel which became a knowledge-sharing community. <br />
          We are a group of software engineers who are passionate about learning
          and sharing knowledge.
        </>
      }
    >
      <SocialList>
        <Social href="https://fullstacksjs.com">Website</Social>
        <Social href="https:/youtube.com/@fullstacksjs">Youtube</Social>
        <Social href="https://x.com/fullstacksjs">X.com</Social>
        <Social href="https://t.me/fullstacksjs">Telegram</Social>
        <Social href="https://t.me/fullstacks_academy">Academy</Social>
      </SocialList>
    </Content>
  );
}
