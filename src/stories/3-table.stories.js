import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import '../css/index.css';
import '../css/style.css';
import '../css/fontawesome.css';

import Table from './Table';
import TitleArea from '../components/TitleArea';

export default {
  title: 'Table',
  component: {
    Table
  } 
};

export const 기본구조 = () => ({
  components: {
    Table,
    TitleArea,

  },
  data () {
    return {
      name: '기본 테이블'
    }
  },
  template: `
  <Table />
    <title-area :title="name"</title-area>
    `
});

