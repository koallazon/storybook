
import '../src/components/uiComp.js';

// 해당 ui 분류
export default {
  title: 'tabs'
};

//temp.js에 있는 컴포넌트를 추가하고 data를 배열로(h1: 타이틀, span: 설명, code: 복사될 코드) 넘겨줍니다
export const tabs = () => ({
    template: `
        <ui-comp :part="parts" :codeView=codeView>
        </ui-comp>`,
    data(){
        return{
            parts:[
                {
                    title:'tab',
                    info:'페이지 내에서 분류에 따라 영역을 나누고 싶은 경우 tab을 사용할 수 있습니다. tab이 많아지면 mobile에서 어떻게 처리할 것인지 고민해보고 써라',
                    code:`
<div class="tabs-container">
    <ul class="nav nav-tabs">
        <li class="active"><a class="nav-link" data-toggle="tab" href="#tab-1">동물</a></li>
        <li><a class="nav-link" data-toggle="tab" href="#tab-2">사람</a></li>
    </ul>
    <div class="tab-content">
        <div role="tabpanel" id="tab-1" class="tab-pane active">
            <div class="panel-body">
                귀엽다
            </div>
        </div>
        <div role="tabpanel" id="tab-2" class="tab-pane">
            <div class="panel-body">
                사람은.. 바보야
            </div>
        </div>
    </div>
</div>`
                }
            ],
            codeView:true
        }
    }
});