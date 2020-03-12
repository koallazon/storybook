import '../src/components/uiComp.js';
import '../src/index.css';
import '../src/style.css';
import '../src/fontawesome.css';

export default {
  title: 'ibox'
};

export const structureOfAIbox = () => ({
  template: `
    <ui-comp :part="parts" :codeView=codeView>
    </ui-comp>`,
  data(){
    return{
      parts:[
        {
          title:'ibox의 기본 구조',
          info:'작성 button과 접고 펴기 toggle button이 포함된 기본 ibox입니다. 필요한 button이 더 있을 시엔 .ibox-tools 내에 추가하여 사용합니다.',
          code:`
<div class="ibox m-b-none">
  <div class="ibox-title">
    <h5>제목영역</h5>
    <div class="ibox-tools">
      <a href="#" title="버튼">
        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
      </a>
      <a href="#" title="버튼">
        <i class="fa fa-chevron-down" aria-hidden="true"></i>
      </a>
    </div>
  </div>
  <div class="ibox-content">
    내용영역
  </div>
</div>`
        },
        {
          title:'drag가 가능한 ibox',
          info:'작성 button과 접고 펴기 toggle button이 포함된 기본 ibox입니다. 필요한 button이 더 있을 시엔 .ibox-tools 내에 추가하여 사용합니다.',
          code:`
<div class="ibox m-b-none">
  <div class="ibox-title">
    <h5>제목영역</h5>
    <div class="ibox-tools">
      <a href="#" title="버튼">
        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
      </a>
      <a href="#" title="버튼">
        <i class="fa fa-chevron-down" aria-hidden="true"></i>
      </a>
    </div>
  </div>
  <div class="ibox-content">
    내용영역
  </div>
</div>`
        }
      ],
      codeView:true
    }
  }
});

