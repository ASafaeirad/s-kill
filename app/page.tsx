import { Content } from '@/components/Content';
import { Social } from '@/components/Social';
import { SocialList } from '@/components/SocialList';

import ASafaeirad from './deers/asafaeirad.png';

export default function Home() {
  return (
    <Content
      ImageProps={ASafaeirad}
      title="ASafaeirad"
      description="I'm Alireza Safaeirad. A curious software engineer."
    >
      <SocialList>
        <Social href="https://t.me/S_Kill">Telegram</Social>
        <Social href="https://github.com/ASafaeirad">Github</Social>
        <Social href="https://linkedin.com/in/ASafaeirad/">LinkedIn</Social>
        <Social href="https://x.com/ASafaeirad/">Twitter</Social>
      </SocialList>
    </Content>
  );
}
