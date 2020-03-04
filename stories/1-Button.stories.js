import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import newMsg from './newMsg';

export default {
  title: 'newMsg 알림창'
};

export const newmsg = () => ({
  template: `
      <div>
        <div v-for="part in parts">
          <h1 :style="partSt">
            {{part.h1}}
          </h1>
          <span :style="infoSt">
            {{part.span}}
          </span>
          <div :style="codeSt">
            {{part.code}}
          </div>
        </div>
      </div>
  `,
  data(){
    return{
      parts:[
        {
          h1:'# Alert',
          span:'사용자에게 알릴 정보가 있을 시 사용합니다. 확인 버튼을 클릭하면 알림창이 사라집니다.',
          code:''
        },
        {
          h1:'# Confirm',
          span:'사용자가 실행 또는 취소를 선택해야 할 경우 사용합니다. callback 함수를 이용해 결과에 따른 동작을 추가할 수 있습니다.',
          code:''
        },
        {
          h1:'# Prompt',
          span:'사용자에게 전달받을 문자 값이 있을 경우 사용합니다.',
          code:''
        },
        {
          h1:'# Popup',
          span:'팝업 모드에서 동작 완료 후 팝업창을 자동종료 해야 할 경우 사용합니다.',
          code:''
        },
      ],
      partSt:{
        color:'#4b81d1',
        borderBottom:'1px solid #ddd',
        paddingBottom:'10px',
        marginBottom:'10px',
        paddingLeft:'10px'
      },
      infoSt:{
        fontSize:'13px',
        paddingLeft:'10px'
      },
      codeSt:{
        border:'1px solid #eee',
        padding:'20px',
        margin:'20px 10px 50px',
        borderRadius:'3px',
        backgroundColor:'#f3f3f3',
        fontSize:'14px'  
      },
    }
  },
  computed: {
  },
  methods: {
  },
});
