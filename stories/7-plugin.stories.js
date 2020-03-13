
import '../src/components/uiComp.js';

// 해당 ui 분류
export default {
  title: 'plugins'
};

//jstree
export const jstree = () => ({
  template: `
    <ui-comp :part="parts" :codeView=codeView>
    </ui-comp>`,
  data(){
    return{
        parts:[
          {
            title:'jstree',
            info:'계층형 구조를 표현합니다. 오피스허브에서는 jstree가 제공하는 proton theme를 사용하고 있으므로 themes name에 proton을 추가해줍니다.',
            code:`
// jstree 링크 추가
<script src="plugin/js/jstree.js"></script>
$('jstree_name').jstree({
  'core': {
    'themes': {
      'name': 'proton',
      'responsive': false
    }
  }
});`
          }
      ],
      codeView:false
    }
  }
});

// 체크박스랑 라디오
export const checkboxRadio = () => ({
  template: `
    <ui-comp :part="parts" :codeView=codeView>
    </ui-comp>`,
  data(){
    return{
        parts:[
          {
            title:'checkbox',
            info:'다중선택이 가능하게 하는 경우에 사용합니다.',
            code:`
<link href="/css/build.css" rel="stylesheet">
<div class="checkbox">
  <input type="checkbox" id="check1">
  <label for="check1">선택1</label>
</div>
<div class="checkbox">
  <input type="checkbox" id="check2">
  <label for="check2">선택2</label>
</div>
<div class="checkbox">
  <input type="checkbox" id="check3">
  <label for="check3">선택3</label>
</div>`
          },
          {
          title:'radio button',
          info:'사용 / 미사용 등 한 가지 값만 선택하게 해야 하는 경우에는 radio button을 사용합니다.',
          code:`
<link href="/css/build.css" rel="stylesheet">
<div class="radio">
  <input type="radio" id="check1">
  <label for="check1">사용</label>
</div>
<div class="radio">
  <input type="radio" id="check2">
  <label for="check2">미사용</label>
</div>`
        }
      ],
      codeView:false
    }
  }
});

// 데이트타임피커
export const datetimePicker = () => ({
  template: `
  <ui-comp :part="parts" :codeView=codeView>
  </ui-comp>`,
  data(){
    return{
      parts:[
        {
          title:'datetimepicker',
          info:'datetimepicker는 화면에 달력을 표현해주어 사용자가 날짜 또는 시간을 선택할 수 있게 하는 plugin입니다.',
          code:`
$('datetimepicker_name').datetimepicker({
  datepicker:true, // 날짜 선택이 가능하게 함
  format:'H:i', // 표현될 format. YYYY-MM-DD 식으로 사용 가능함
  formatTime:'H:i',
  onShow: function () {
    // datetimepicker가 실행되었을 때 
  },
  onSelectTime: function(){
    // 시간을 선택했을 때
  },
  closeOnTimeSelect: true // 시간을 선택하면 datetimepicker를 종료합니다.
});
          `
        }
      ],
      codeView:false
    }
  }
});

// 스마트에디터
export const smarteditor = () => ({
  template: `
    <ui-comp :part="parts" :codeView=codeView>
    </ui-comp>`,
  data(){
    return{
      parts:[
        {
          title:'smart editor의 구조',
          info:'',
          code:`
// html
<textarea id="id" name=""></textarea>

// script
nhn.husky.EZCreator.createInIFrame({
  oAppRef: oEditors,
  elPlaceHolder: "id",
  sSkinURI: "<?=SmartEditorLang()?>",
  htParams : {
    bUseToolbar : true,
    bUseVerticalResizer : true,
    bUseModeChanger : true,
    fOnBeforeUnload : function(){}
  },
  fOnAppLoad : function(){
    // smart editor가 load 된 뒤 실행
  },
  fCreator: "createSEditor2"
});`
        },
        {
          title:'smart editor 응용',
          info:'smart editor의 높이, 너비를 변형하거나 내용을 추가할 때에는 아래와 같은 방법을 사용해야 합니다.',
          code:`
// editor 내용 가져오기
oEditors.getById["id"].getIR();

// editor 내용 초기화 
oEditors.getById["id"].exec("SET_IR",[""]);

// editor에 내용 추가
oEditors.getById["id"].exec("PASTE_HTML",["이 내용을 editor에 자동으로 넣고 싶다."]);

// editor 너비 또는 높이에 일정 값을 추가하고 싶은 경우
oEditors.getById["id"].exec("MSG_EDITING_AREA_RESIZE_STARTED", []); 
oEditors.getById["id"].exec("RESIZE_EDITING_AREA_BY", [추가하고 싶은 너비의 px, 추가하고 싶은 높이의 px]); // 숫자만 입력합니다.
oEditors.getById["id"].exec("MSG_EDITING_AREA_RESIZE_ENDED", []); []); 
          
// editor 너비 또는 높이를 특정 값으로 적용하고 싶은 경우
oEditors.getById["id"].exec("MSG_EDITING_AREA_RESIZE_STARTED", []); 
oEditors.getById["id"].exec("RESIZE_EDITING_AREA", [적용할 너비의 px, 적용할 높이의 px]); // 숫자만 입력합니다.
oEditors.getById["id"].exec("MSG_EDITING_AREA_RESIZE_ENDED", []); 
oEditors.getById["id"].exec("SE_FIT_IFRAME", []); // 에디터를 둘러싼 iframe 사이즈 변경 
`
        }
      ],
      codeView:false
    }
  }
});

// 컬러픽
export const colorPick = () => ({
  template: `
    <ui-comp :part="parts" :codeView=codeView>
    </ui-comp>`,
  data(){
    return{
        parts:[
          {
            title:'colorpicker',
            info:'사용자가 팔레트에서 색을 선택할 수 있게 합니다.',
            code:`
<link href="/css/plugins/colorpicker/bootstrap-colorpicker.min.css" rel="stylesheet" />
<link href="/css/plugins/colorpicker/bootstrap-colorpicker-plus.css" rel="stylesheet" />
<script type='text/javascript' src="/js/plugins/colorpicker/bootstrap-colorpicker.min.js"></script>
<script type='text/javascript' src="/js/plugins/colorpicker/bootstrap-colorpicker-plus.js"></script>

$('button').colorpickerplus();
$('button').on('changeColor', function(e,color){
  if(color==null) {
    // 색 없음 선택
    $('.color-fill-icon', $(this)).addClass('colorpicker-color');
  } else {
    $('.color-fill-icon', $(this)).removeClass('colorpicker-color');
    $('.color-fill-icon', $(this)).css('background-color', color);
  }
});`
        }
      ],
      codeView:false
    }
  }
});

// 토스터
export const toastr = () => ({
  template: `
    <ui-comp :part="parts" :codeView=codeView>
    </ui-comp>`,
  data(){
    return{
      parts:[
        {
          title:'toaster',
          info:'toaster는 기존의 alert 대신 일정 시간 후 자동으로 사라지게 하는 알림창을 띄울 떄 사용합니다.',
          code:`
// 옵션 설정
toastr.options = {
  "debug": true,
  "positionClass": "toast-top-center", // 나타날 위치
  "preventDuplicates": false,
  "onclick": null,
  "timeOut": "5000" // 표현되는 시간
}

// 사용 예
toastr.success("띄울 문구");
`
        }
      ],
      codeView:false
    }
  }
});