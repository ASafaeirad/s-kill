import { Content } from '@/components/Content';
import { Social } from '@/components/Social';
import { SocialList } from '@/components/SocialList';

import Skillart from '../deers/skillart.png';

export default function Page() {
  return (
    <Content
      ImageProps={Skillart}
      title="Skillart"
      description="I have a love for creating, but my drawing skills could use a little help. Luckily, I'm a wizard with computers, so I let AI be my magic wand!"
    >
      <SocialList>
        <Social href="https://x.com/s_killart">X.com</Social>
        <Social href="https://t.me/s_killart">Telegram</Social>
        <Social href="https://instagram.com/s_killart_">Instagram</Social>
      </SocialList>
    </Content>
  );
}
