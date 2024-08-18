import { Content } from '@/components/Content';

import Skillart from '../deers/skillart.png';

export default function Page() {
  return (
    <Content
      ImageProps={Skillart}
      title="Skillart"
      description="I have a love for creating, but my drawing skills could use a little help. Luckily, I'm a wizard with computers, so I let AI be my magic wand!"
    />
  );
}
