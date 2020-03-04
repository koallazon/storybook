import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import newMsg from './newMsg';
import Vue       from 'vue'
import Clipboard from 'v-clipboard'
 
Vue.use(Clipboard)
export default {
  title: 'newMsg 알림창'
};



export const newmsg = () => ({
  template: `
      <div>
        <div v-for="part in parts">
          <h1 :style="partSt">
            # {{part.h1}}
          </h1>
          <span :style="infoSt">
            {{part.span}}
          </span>
          <div :style="codeSt" v-html="part.code" v-clipboard="part.code" @mouseover="copyCode=true" @mouseout="copyCode=false">
          </div>
        </div>
      </div>
  `,
  data(){
    return{
      parts:[
        {
          h1:'Alert',
          span:'사용자에게 알릴 정보가 있을 시 사용합니다. 확인 버튼을 클릭하면 알림창이 사라집니다.',
          code:'newMsg.alert("사용자에게 보여줄 문구");'
        },
        {
          h1:'Confirm',
          span:'사용자가 실행 또는 취소를 선택해야 할 경우 사용합니다. callback 함수를 이용해 결과에 따른 동작을 추가할 수 있습니다.',
          code:`
          newMsg.confirm("사용자에게 보여줄 문구",result(function){
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(result){
              <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;사용자가 확인을 누를 경우 실행할 동작<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}else{&nbsp;&nbsp;//else 없으면 false
              <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;사용자가 취소를 누를 경우 실행할 동작 <br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
          });
          `
        },
        {
          h1:'Prompt',
          span:'사용자에게 전달받을 문자 값이 있을 경우 사용합니다.',
          code:''
        },
        {
          h1:'Popup',
          span:'팝업 모드에서 동작 완료 후 팝업창을 자동종료 해야 할 경우 사용합니다.',
          code:''
        },
      ],
      partSt:{
        color:'#4b81d1',
        borderBottom:'1px solid #ddd',
        paddingBottom:'10px',
        marginBottom:'10px',
        paddingLeft:'10px',
        fontWeight:'700'
      },
      infoSt:{
        fontSize:'13px',
        paddingLeft:'15px',
        display:'inline-block',
        marginTop:'5px'
      },
      codeSt:{
        border:'1px solid #eee',
        padding:'20px',
        margin:'15px 10px 50px',
        borderRadius:'3px',
        backgroundColor:'#f3f3f3',
        fontSize:'14px'  
      },
      copyCode:{
        backgroundColor:'#000'
      }
    }
  },
  computed: {
  },
  methods: {
  },
});
