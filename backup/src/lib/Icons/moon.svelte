<style>
    .gg-moon,
    .gg-moon::after {
        display: block;
        box-sizing: border-box;
        border-radius: 50%
    }
    .gg-moon {
        overflow: hidden;
        position: relative;
        transform: rotate(-135deg) scale(var(--ggs,1));
        width: 20px;
        height: 20px;
        border: 2px solid;
        border-bottom-color: transparent
    }
    .gg-moon::after {
        content: "";
        position: absolute;
        width: 12px;
        height: 18px;
        border: 2px solid transparent;
        box-shadow: 0 0 0 2px;
        top: 8px;
        left: 2px
    }
</style>

<i class="gg-moon"></i>

