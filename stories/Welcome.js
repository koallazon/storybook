// eslint-disable-next-line no-console
const log = () => console.log('Welcome to storybook!');

export default {
  name: 'welcome',

  props: {
    showApp: {
      type: Function,
      default: log,
    },
  },

  data() {
    return {
      main: {
        padding: '40px',
        lineHeight: 1.4,
        fontFamily: '"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif',
        backgroundColor: '#ffffff',
      },

      logo: {
        width: 200,
      },

      link: {
        color: '#1474f3',
        textDecoration: 'none',
        borderBottom: '1px solid #1474f3',
        paddingBottom: 2,
      },

      code: {
        fontSize: 15,
        fontWeight: 600,
        padding: '2px 5px',
        border: '1px solid #eae9e9',
        borderRadius: 4,
        backgroundColor: '#f3f2f2',
        color: '#3a3a3a',
      },

      note: {
        opacity: 0.5,
      },
    };
  },

  template: `
    <div :style="main">
      이건 .. 하다하다 만든 ui 가이드북! ㅇ.<
      <br>
      모두들 이정도는 스스로 해내는 멋진 칭구들이 되자
      <br>
      그렇지 않으면 이 험한 세상 살아갈 수 없어요 ~~ 
    </div>
  `,

  methods: {
    onClick(event) {
      event.preventDefault();
      this.showApp();
    },
  },
};
