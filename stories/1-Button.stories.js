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
          <div :style="codeBoxSt">
            <pre :style="codeSt" v-html="part.code">
            </pre>
            <i class="fa fa-paperclip" :style="copyBtn" v-clipboard="part.code" @click="copyDone(part.h1)"></i>
          </div>
        </div>
        <div :style="copyDoneSt" v-if="isDone">
          {{doneTxt}}
        </div>
      </div>
  `,
  data(){
    return{
      parts:[
        {
          h1:'Alert',
          span:'사용자에게 알릴 정보가 있을 시 사용합니다. 확인 버튼을 클릭하면 알림창이 사라집니다.',
          code:`newMsg.alert("사용자에게 보여줄 문구");`
        },
        {
          h1:'Confirm',
          span:'사용자가 실행 또는 취소를 선택해야 할 경우 사용합니다. callback 함수를 이용해 결과에 따른 동작을 추가할 수 있습니다.',
          code:`newMsg.confirm("사용자에게 보여줄 문구",function(result){ //삭제에 사용하는 confirm일 경우 newMsg.del로 사용합니다
  if(result){
    사용자가 확인을 누를 경우 실행할 동작
  }else{ //없으면 false
    사용자가 취소를 누를 경우 실행할 동작
  };
});`
        },
        {
          h1:'Prompt',
          span:'사용자에게 전달받을 문자 값이 있을 경우 사용합니다.',
          code:`newMsg.prompt("사용자에게 보여줄 문구",function(result){
  if(result){
    사용자가 문구 입력 후 확인을 누를 경우 실행할 동작
  };
});`
        },
        {
          h1:'Popup',
          span:'팝업 모드에서 동작 완료 후 팝업창을 자동종료 해야 할 경우 사용합니다. 지정해준 문구 뒤에 "팝업이 종료됩니다." 라는 문구가 추가되며 3초 뒤 팝업창이 종료됩니다.',
          code:`newMsg.pop("사용자에게 보여줄 문구");`
        },
      ],
      // 해당 기능 이름 
      partSt:{
        color:'#4b81d1',
        borderBottom:'1px solid #ddd',
        paddingBottom:'10px',
        marginBottom:'10px',
        paddingLeft:'10px',
        fontWeight:'700'
      },
      // 해당 기능 설명
      infoSt:{
        fontSize:'13px',
        paddingLeft:'15px',
        display:'inline-block',
        marginTop:'5px'
      },
      codeBoxSt:{
        position:'relative'
      },
      // 코드가 들어가는 곳 
      codeSt:{
        fontFamily:'Menlo, Monaco, Consolas, "Courier New", monospace',
        color:'#333',
        border:'1px solid #eee',
        padding:'20px',
        margin:'15px 10px 50px',
        borderRadius:'3px',
        backgroundColor:'#f3f3f3',
        fontSize:'13px',
        lineHeight:'23px'  
      },
      // 복사하기 버튼 
      copyBtn:{
        position:'absolute',
        top:'8px',
        right:'18px',
        fontSize: '18px',
        border: '1px solid #ddd',
        padding: '6px 9px 5px 8px',
        borderRadius: '3px',
        backgroundColor: '#fff',
        cursor:'pointer'
      },
      copyDoneSt:{
        position:'fixed',
        top:'20px',
        left:'50%',
        backgroundColor:'#ddd',
        padding:'20px',
        fontSize:'14px'
      },
      isDone:false,
      doneTxt:''
    }
  },
  computed: {
  },
  methods: {
    copyDone(title){
      this.isDone = true;
      this.doneTxt = `${title} code가 복사되었습니다.`;

    }
  },
});
