<style>
    .gg-display-grid {
      box-sizing: border-box;
      position: relative;
      display: block;
      height: 14px;
      width: 14px;
      border: 2px solid transparent;
      box-shadow: 0 0 0 2px;
    }
  .gg-display-grid::after,
  .gg-display-grid::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 10px;
    height: 4px;
    border-right: 4px solid;
    border-left: 4px solid;
    top: 0;
    left: 0;
  }
  .gg-display-grid::before {
    top: 6px;
  }
</style>

<i class="gg-display-grid"></i>