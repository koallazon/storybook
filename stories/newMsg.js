export default {
  name: 'new-msg',
  template: `
    <div>
    <p :style="h1">
      <slot name="h1"></slot>
    </p>
      <slot name="info"></slot>
    </div>
  `,
  data() {
    return {
      h1:{
        borderBottom:'1px solid #eee',
        color:'#6b9dd3',
        paddingBottom:'10px',
        marginBottom:'10px'
      },
      info:{
        color:'#575757',
        fontSize:'14px',
        paddingLeft:'10px'
      }
    }
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
