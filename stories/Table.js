export default {
    name: 'Table',
  
    data() {
      return {
      };
    },
  
    template: `
            <div class="ibox-content">
                <div class="table-responsive">
                    <table class="table table-bordered text-center">
                        <colgroup>
                            <col span=2 width=150>
                            <col width=10>
                            <col width="*">
                            <col span=4 width=105>
                        </colgroup>
                        <thead>
                            <tr class="mobile-none">
                                <td>시작일</td>
                                <td>마감일</td>
                                <td colspan="2">제목</td>
                                <td>작성자</td>
                                <td>참여인원</td>
                                <td>참여여부</td>
                                <td>상태</td>
                            </tr>
                        </thead>
                        <tbody>
                                <tr>
                                    <td class="mobile-none">2020-02-02</td>
                                    <td class="mobile-none">2020-02-02</td>
                                    <td class="mobile-none no-borders-r">
                                        <a>
                                            <i class="fa fa-clone" style="transform:rotate(90deg); color:#a2a2a2; font-size:13px; cursor:pointer" title="팝업으로 열기"></i>
                                        </a>
                                    </td>
                                    <td class="text-left ellipsis">제목이 여기에 위치합니다.</td>
                                    <td class="table-left small-font">강민지</td>
                                    <td>1/2</td>
                                    <td class="table-left">참여</td>
                                    <td class="mobile-none">종료</td>
                                </tr>
                                <tr>
                                    <td colspan=8>
                                        데이터가 없습니다.
                                    </td>
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    `,
  };