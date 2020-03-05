import '../src/components/uiComp.js';
import '../src/index.css';
import '../src/style.css';
import '../src/fontawesome.css';

export default {
  title: 'Table'
};

export const structureOfATable = () => ({
  template: `
    <ui-comp :part="parts" :codeView=codeView>
    </ui-comp>`,
  data(){
    return{
      parts:[
          {
            title:'table의 기본 구조 1',
            info:'반응형 table의 기본 구조입니다. 반응형 처리가 필요하지 않은 경우 table-responsive class는 생략 가능하며 각 td의 너비 일괄 지정을 위해 colgroup, col 태그를 사용합니다.',
            code:`
<div class="table-responsive"> 
  <table class="table table-bordered text-center">
    <colgroup>
      <col span=2 width=150>
      <col width=10>
      <col width="300">
      <col width="150">
    </colgroup>
    <thead> 
      <tr>
        <td>시작일</td>
        <td>마감일</td>
        <td colspan="2">제목</td>
        <td>작성자</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2020-02-02</td>
        <td>2020-02-02</td>
        <td style="border-right:0px;">
          <a>
            <i class="fa fa-clone" style="transform:rotate(90deg); color:#a2a2a2; font-size:13px; cursor:pointer" title="팝업으로 열기"></i>
          </a>
        </td>
        <td class="text-left ellipsis no-borders-l">제목이 여기에 위치합니다.</td>
        <td class="table-left small-font">강민지</td>
      </tr>
      <tr>
        <td colspan=8>데이터가 없습니다.</td>
      </tr>
    </tbody>
  </table>
</div>`
          },
          {
            title:'table의 기본 구조 2',
            info:'table의 제목란을 상단이 아닌 좌측에 열로 나열하고 싶은 경우 사용합니다. 값을 지정하고 싶지 않은 col의 경우 하단 code의 첫 번째 col과 같이 값 생략이 가능합니다.',
            code:`
<div class="table-responsive"> 
  <table class="table table-bordered">
    <colgroup>
      <col>
      <col width=600>
    </colgroup>
    <tbody>
      <tr>
        <td class="title-bg">시작일</td>
        <td>2020-02-02</td>
      </tr>
      <tr>
        <td class="title-bg">마감일</td>
        <td>2020-02-02</td>
      </tr>
      <tr>
        <td class="title-bg">제목</td>
        <td class="text-left ellipsis no-borders-l">
          <a>
            <i class="fa fa-clone" style="transform:rotate(90deg); color:#a2a2a2; font-size:13px; cursor:pointer; margin-right:5px" title="팝업으로 열기"></i>
          </a>
          제목을 이렇게 쓰면 된다고 하네요. 왼쪽의 아이콘은 뭘까요? 바로바로 팝업으로 보기 버튼임.
        </td>
      </tr>
      <tr>  
        <td class="title-bg">작성자</td>
        <td class="table-left small-font">강민지</td>
      </tr>
    </tbody>
  </table>
</div>`
        }
      ],
      codeView:true
    }
  }
});

