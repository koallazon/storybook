export default {
    name: 'title-area',
    props: ['title'],  
    data() {
      return {
        titleStyle: {
          backgroundColor: '#1ab394',
          fontSize: '25px',
          padding: '20px 30px',
          margin: 0,
          width: '100%',
          color: '#fff',
          fontWeight: '500',
          fontFamily: 'Malgun Gothic'
        },
        style1: {
          fontSize: '50px'
        }
      }
    }, 

    template: `
    <div :style="titleStyle">
        <slot name="tot">{{ title }}</slot>
    </div>
    `,
  };
  