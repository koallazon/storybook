import '../src/components/uiComp.js';
import '../src/index.css';
import '../src/style.css';
import '../src/fontawesome.css';

export default {
  title: 'button'
};

export const styleOfButton = () => ({
  template: `
    <ui-comp :part="parts" :codeView=codeView>
    </ui-comp>`,
  data(){
    return{
      parts:[
        {
          title:'button의 기본 스타일',
          info:'가장 기본적으로 사용하는 색의 버튼입니다. btn-white, btn-primary, btn-danger 등의 class를 사용하여 색을 변경합니다. 모든 버튼의 좌측에는 해당 버튼에 맞는 아이콘을 추가합니다.',
          code:`
<button type="button" class="btn btn-sm btn-white"><i class="fa fa-close"></i> 취소</button>
<button type="button" class="btn btn-sm btn-primary"><i class="fa fa-check"></i> 저장</button>
<button type="button" class="btn btn-sm btn-danger"><i class="fa fa-trash"></i> 삭제</button>          
<button type="button" class="btn btn-sm">회색 버튼</button>          
<button type="button" class="btn btn-sm btn-primary btn-outline">초록 선을 가진 버튼</button>          
`
        },
        {
          title:'사용할 수 없는 button',
          info:'상황에 따라 button의 사용을 금하는 경우 button을 숨기는 대신 disabled 처리한 후 tooltip으로 사용자에게 설명합니다. <b>alert로 설명하는 방법은 최대한 지양합니다.</b><br> onmouseenter event 안에 사용자에게 알릴 문구를 입력하면 사용자가 button에 mouse를 올렸을 때 해당문구가 툴팁으로 나타납니다.',
          code:`
<button class="btn btn-addTip btn-sm" onmouseenter="addTipBtn(this,'권한이 없습니다.')"><i class="fa fa-trash"></i> 삭제</button>
          `
        }
      ],
      codeView:true
    }
  }
});

