import { Content } from '@/components/Content';
import { SocialList } from '@/components/SocialList';

import Fem from '../deers/fem.png';

export default function Page() {
  return (
    <Content
      ImageProps={Fem}
      title="Frontendmonster"
      description="Here you can find my old stuff."
    >
      <SocialList />
    </Content>
  );
}
