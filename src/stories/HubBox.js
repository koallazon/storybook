export default {
    name: 'hub-box',
  
    data() {
      return {
      };
    },
  
    template: `
    <div class="ibox" style="max-width:500px;margin:30px;">
      <div class="ibox-title">
        <h5>제목영역</h5>
        <div class="ibox-tools">
          <a href="#" title="버튼">
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div class="ibox-content">
        내용영역
      </div>
    </div>
    `,
  };
  