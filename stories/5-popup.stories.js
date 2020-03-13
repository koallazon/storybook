
import '../src/components/uiComp.js';

// 해당 ui 분류
export default {
  title: 'Popup'
};

//temp.js에 있는 컴포넌트를 추가하고 data를 배열로(h1: 타이틀, span: 설명, code: 복사될 코드) 넘겨줍니다
export const popup = () => ({
  template: `
    <ui-comp :part="parts" :codeView=codeView>
    </ui-comp>`,
  data(){
    return{
      parts:[
        {
          title:'modal popup',
          info:'bootstrap에서 제공하는 modal popup의 기본 형태입니다. modal을 실행시킬 button에는 data-toggle="modal"과 data-target="modal의 id"를 추가해줍니다.',
          code:`
<div class="modal inmodal" id="modal-id" style="display:none">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
        <h4 class="modal-title">제목</h4>
      </div>
      <div class="modal-body">
        내용이 들어갑니다.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-white" data-dismiss="modal">
          <?=getLabel("/var/www/board/board_view.php?div2","닫기")?>
        </button>
        <button type="button" class="btn btn-primary">
          저장
        </button>
      </div>
    </div>
  </div>
</div>`
        }
      ],
      codeView:false
    }
  }
});