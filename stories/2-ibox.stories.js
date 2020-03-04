import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import '../src/index.css';
import '../src/style.css';
import '../src/fontawesome.css';

import HubBox from './HubBox';
import TitleArea from '../src/components/TitleArea';

export default {
  title: 'ibox',
  component: {
    HubBox
  } 
};

export const Default = () => ({
  components: {
    HubBox,
    TitleArea,

  },
  data () {
    return {
      name: '기본 박스'
    }
  },
  template: `
  <hub-box />
    <title-area :title="name"</title-area>
    `
});

