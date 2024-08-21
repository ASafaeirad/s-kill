import { Content } from '@/components/Content';
import { Social } from '@/components/Social';
import { SocialList } from '@/components/SocialList';

import Skillpod from '../deers/skillpod.png';

export default function Page() {
  return (
    <Content
      ImageProps={Skillpod}
      title="Skillpod"
      description="Skillpod is my software podcast."
    >
      <SocialList>
        <Social href="https://t.me/skillpod">Telegram</Social>
        <Social href="https://instagram.com/skillpod">Youtube</Social>
      </SocialList>
    </Content>
  );
}
