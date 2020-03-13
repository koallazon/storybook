
import '../src/components/uiComp.js';

// 해당 ui 분류
export default {
  title: 'form & input'
};

//temp.js에 있는 컴포넌트를 추가하고 data를 배열로(h1: 타이틀, span: 설명, code: 복사될 코드) 넘겨줍니다
export const input = () => ({
  template: `
    <ui-comp :part="parts" :codeView=codeView>
    </ui-comp>`,
  data(){
    return{
      parts:[
        {
          title:'단일 input',
          info:'검색 또는 저장의 용도로 하나의 input과 하나의 button을 나타낼 때 사용합니다.',
          code:`
<form name="" class="form-inline">
  <div class="input-group">
    <input type="search" name="" class="form-control input-sm" placeholder="입력해주세요" value="">
    <span class="input-group-btn">
      <button type="submit" class="btn btn-sm btn-primary">저장</button>
    </span>
  </div>
</form>`
        },
        {
          title:'기간 입력을 위한 input',
          info:'기간 검색 또는 입력이 필요할 때 사용하는 input입니다. 직접 입력이 아닌 경우에는 input을 datetimepick와 연결하여 사용합니다.',
          code:`
<div class="form-inline">
  <div class="input-group">
    <label class="input-group-addon hidden-xs"><i class="fa fa-calendar"></i></label>
    <input type="text" id="" name="" class="form-control input-sm text-center" placeholder="시작" readonly="" value="">
  </div>
  <div class="input-group">
    <label class="input-group-addon hidden-xs"><i class="fa fa-calendar"></i></label>
    <input type="text" id="" name="" class="form-control input-sm text-center" placeholder="종료" readonly="" value="">
  </div>
  <div class="input-group searchBtn">
    <button id="" type="button" class="btn btn-primary btn-sm">
      <i class="fa fa-search"></i>
    </button>
  </div>
</div>`
        }
      ],
      codeView:true
    }
  }
});