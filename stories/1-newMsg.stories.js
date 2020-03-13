
import '../src/components/uiComp.js';

// 해당 ui 분류
export default {
  title: 'newMsg 알림창'
};

//temp.js에 있는 컴포넌트를 추가하고 data를 배열로(h1: 타이틀, span: 설명, code: 복사될 코드) 넘겨줍니다
export const newmsg = () => ({
  template: `
    <ui-comp :part="parts" :codeView=codeView>
    </ui-comp>`,
  data(){
    return{
        parts:[
          {
            title:'Alert',
            info:'사용자에게 알릴 정보가 있을 시 사용합니다. 확인 버튼을 클릭하면 알림창이 사라집니다.',
            code:`
newMsg.alert("사용자에게 보여줄 문구");`
          },
          {
          title:'Confirm',
          info:'사용자가 실행 또는 취소를 선택해야 할 경우 사용합니다. callback 함수를 이용해 결과에 따른 동작을 추가할 수 있습니다.',
          code:`
newMsg.confirm("사용자에게 보여줄 문구",function(result){ //삭제에 사용하는 confirm일 경우 newMsg.del로 사용합니다
  if(result){
    사용자가 확인을 누를 경우 실행할 동작
  }else{ //없으면 false
    사용자가 취소를 누를 경우 실행할 동작
  };
});`
        },
        {
          title:'Prompt',
          info:'사용자에게 전달받을 문자 값이 있을 경우 사용합니다.',
          code:`
newMsg.prompt("사용자에게 보여줄 문구",function(result){
  if(result){
    사용자가 문구 입력 후 확인을 누를 경우 실행할 동작
  };
});`
        },
        {
          title:'Popup',
          info:'팝업 모드에서 동작 완료 후 팝업창을 자동종료 해야 할 경우 사용합니다. 지정해준 문구 뒤에 "팝업이 종료됩니다." 라는 문구가 추가되며 3초 뒤 팝업창이 종료됩니다.',
          code:`
newMsg.pop("사용자에게 보여줄 문구");`
        },
      ],
      codeView:false
    }
  }
});