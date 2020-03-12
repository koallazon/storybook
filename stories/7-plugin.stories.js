
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
        },
        {
          title:'window popup',
          info:'아 귀찮아',
          code:``
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
            title:'modal popup',
            info:'bootstrap에서 제공하는 modal popup의 기본 형태입니다. modal을 실행시킬 button에는 data-toggle="modal"과 data-target="modal의 id"를 추가해줍니다.',
            code:``
          },
          {
          title:'window popup',
          info:'아 귀찮아',
          code:``
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
            title:'modal popup',
            info:'bootstrap에서 제공하는 modal popup의 기본 형태입니다. modal을 실행시킬 button에는 data-toggle="modal"과 data-target="modal의 id"를 추가해줍니다.',
            code:``
          },
          {
          title:'window popup',
          info:'아 귀찮아',
          code:``
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
            title:'modal popup',
            info:'bootstrap에서 제공하는 modal popup의 기본 형태입니다. modal을 실행시킬 button에는 data-toggle="modal"과 data-target="modal의 id"를 추가해줍니다.',
            code:``
          },
          {
          title:'window popup',
          info:'아 귀찮아',
          code:``
        }
      ],
      codeView:false
    }
  }
});