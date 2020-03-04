import { linkTo } from '@storybook/addon-links';
import { withInfo } from 'storybook-addon-vue-info/lib';

import Welcome from './Welcome';

export default {
  title: 'Welcome',
  component: Welcome,
};

export const ToStorybook = () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
});

ToStorybook.story = {
  name: 'to Storybook',
};
 