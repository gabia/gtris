<gt-panel>
  <template #title>Basic</template>
  <template #box>
    <div style="padding:10px;">
      <div class="ui-wrap">
        <gt-input placeholder="Basic usage" />
      </div></br>
      <div class="ui-wrap">
        <gt-input defaultValue="기본 값입니다." placeholder="Basic usage" />
      </div></br>
      <div class="ui-wrap">
        <gt-input size="sm" placeholder="small size" />
        </br>
        <gt-input placeholder="default size" />
        </br>
        <gt-input size="lg" placeholder="large size" />
      </div></br>
      <div class="ui-wrap">
        <gt-input custom-class="hiworks-input-custom-class" placeholder="Custom Class:!important 필요" />        
      </div></br>
      <div class="ui-wrap">
        <gt-input placeholder="width 값 조정" width="500px" />
      </div></br>
      <div class="ui-wrap">
        <gt-input placeholder="height 값 조정" height="100px" />
      </div></br>
      <div class="ui-wrap">
        <gt-input disabled placeholder="disabled" />
      </div>
    </div>
  </template>
</gt-panel>