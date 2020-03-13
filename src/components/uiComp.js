import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Vue       from 'vue';

// 코드 복붙을 위해 사용 
import Clipboard from 'v-clipboard'; 
Vue.use(Clipboard)


Vue.component('ui-comp',{
    // 배열(part)이랑 html용 con.code에 사용할 if true/false값 받아옴 
    props:['part','codeView'],
    // 같은 형식이 반복되기 때문에 for문으로 파트 생성
    // 필요한 거: title, info, code 끗 
    // con.code가 왜 두 개: html 코드는 태그로 표현되는 것과 화면 구현되는 거 둘 다 필요해서 화면 구현용은 v-html로 넣고 각 페이지에서 if 값 (위에 codeView) 받아옴
    // 하단의 trasition 영역과 fade라는 네이밍은 복사 완료 알림창의 fadein, out 효과를 위한 것 (style.css 10035줄 참조)
    template: `
        <div>
            <div v-for="(con,i) in part" :key="i">
                <h1 :style="titleSt">
                    # {{con.title}}
                </h1>
                <div :style="infoSt" v-html="con.info">
                </div>
                <div v-html="con.code" v-if="codeView" :style="preview">
                </div>
                <div style="position:relative">
                  <pre :style="codeSt">
                    {{con.code}}
                  </pre>
                  <i class="fa fa-paperclip" :style="copyBtn" v-clipboard="con.code" @click="copyDone(con.title)"></i>
                </div>
            </div>
            <transition name="fade">
                <div :style="copyDoneSt" v-if="isDone">
                    {{doneTxt}}
                </div>
            </transition>
        </div>
  `,
  data(){
    return{
      // title 영역 style
      titleSt:{
        color:'#4b81d1',
        borderBottom:'1px solid #ddd',
        paddingBottom:'10px',
        marginBottom:'10px',
        paddingLeft:'10px',
        fontWeight:'500',
        fontSize:'28px'
      },
      // info 영역 stlye
      infoSt:{
        fontSize:'13px',
        paddingLeft:'15px',
        marginTop:'15px'
      },
      codeSt:{
        maxHeight:'250px',
        overflowY:'auto',
        padding:'0 20px',
        margin:'15px 10px 50px',
        borderRadius:'3px',
        backgroundColor:'#f3f3f3',
        color:'#333',
        border:'1px solid #eee',
        fontFamily:'Menlo, Monaco, Consolas, "Courier New", monospace',
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
      // 복사 완료 알림창
      copyDoneSt:{
        position:'fixed',
        top:'20px',
        left:'50%',
        marginLeft:'-210px',
        backgroundColor:'#73acf3',
        color:'#fff',
        padding:'20px 30px',
        fontSize:'15px',
        borderRadius:'3px'
      },
      // 코드 미리보기 
      preview:{
        minWidth:'400px',
        padding:'0 10px',
        display:'inline-block',
        marginTop:'15px'
      },
      // 복사하기 버튼 누르면 true로 바꿔서 알림창을 보여줄 것임 
      isDone:false,
      doneTxt:''
    }
  },
  methods: {
    // 코드 복사 버튼 클릭했을 경우
    copyDone(title){
      // 안 보이게 숨겨놨던 상자를 보여줌
      this.isDone = true;
      this.doneTxt = `${title} code가 복사되었습니다`;
      var box = this;
      // 2초 뒤 false 처리해서 알림창이 사라짐 
      setTimeout(() => {
        box.isDone = false;
      }, 1800);
    }
  },
});

