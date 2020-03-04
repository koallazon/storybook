import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import '../css/index.css';
import '../css/style.css';
import '../css/fontawesome.css';

import HubBox from './HubBox';
import TitleArea from '../components/TitleArea';

export default {
  title: 'ibox',
  component: {
    HubBox
  } 
};

export const Default = () => ({
  components: {
    HubBox,
    TitleArea
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

