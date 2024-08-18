import { Content } from '@/components/Content';

import Skillpod from '../deers/skillpod.png';

export default function Page() {
  return (
    <Content
      ImageProps={Skillpod}
      title="Skillpod"
      description="Skillpod is my software podcast."
    />
  );
}
