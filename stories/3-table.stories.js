import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import '../src/index.css';
import '../src/style.css';
import '../src/fontawesome.css';

import Table from './Table';
import TitleArea from '../src/components/TitleArea';

export default {
  title: 'Table',
  component: {
    Table
  } 
};


export const 기본구조 = () => ({
  template: `
      <div>
        <div v-for="part in parts">
          <h1 :style="partSt">
            {{part.h1}}
          </h1>
          <span :style="infoSt">
            {{part.span}}
          </span>
          <div v-html="part.rawHtml">
          </div>
          <div :style="codeSt">
            {{part.code}}
          </div>
        </div>
      </div>
  `,
  data(){
    return{
      parts:[
        {
          h1:'# 기본 구조',
          span:'반응형 테이블 기본 구조',
          code:'',
          rawHtml : '<div class="ibox-content"><div class="table-responsive"><table class="table table-bordered text-center"><colgroup><col span=2 width=150><col width=10><col width="*"><col span=4 width=105></colgroup><thead><tr><td>시작일</td><td>마감일</td><td colspan="2">제목</td><td>작성자</td><td>참여인원</td><td>참여여부</td><td>상태</td></tr></thead><tbody><tr><td>2020-02-02</td><td>2020-02-02</td><td style="border-right:0px;"><a><i class="fa fa-clone" style="transform:rotate(90deg); color:#a2a2a2; font-size:13px; cursor:pointer" title="팝업으로 열기"></i></a></td><td class="text-left ellipsis no-borders-l">제목이 여기에 위치합니다.</td><td class="table-left small-font">강민지</td><td>1/2</td><td class="table-left">참여</td><td>종료</td></tr><tr><td colspan=8>데이터가 없습니다.</td></tr></tbody></table></div></div>'
        },
        {
          h1:'# 내부 정렬',
          span:'테이블 내부 아이콘 / 텍스트 정렬 / 테이블 내부 input',
          code:'',
          rawHtml : ''
        },
      ],
      partSt:{
        color:'#4b81d1',
        borderBottom:'1px solid #ddd',
        paddingBottom:'10px',
        marginBottom:'10px',
        paddingLeft:'10px'
      },
      infoSt:{
        fontSize:'13px',
        paddingLeft:'20px'
      },
      codeSt:{
        border:'1px solid #eee',
        padding:'20px',
        margin:'20px 20px 50px',
        borderRadius:'3px',
        backgroundColor:'#f3f3f3',
        fontSize:'14px'  
      },
    }
  },
  computed: {
  },
  methods: {
  },
});

