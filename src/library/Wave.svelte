<script>
  import { onMount } from 'svelte';

  let canvas;

  onMount(() => {

    (
      (canvas) => {
        let ctx = canvas.getContext('2d'),
        w = canvas.width = canvas.offsetWidth,
        h = canvas.height = canvas.offsetHeight,
        options = {
          amount: 32,
          distance: 2,
          radius: 2,
          height: 48,
          span: Math.PI*2
        },
        width = options.amount * (options.radius * 2 + options.distance),
        arr = new Array(options.amount).fill().map(
          (el, ind) => {
            return {
              a: options.span / options.amount * ind,
              x: (options.radius * 2 + options.distance) * ind,
              canvas: "hsl(th, 75%, 55%)"
            }
          }
        );

        function loop(){
          ctx.fillStyle = "#000";
          ctx.fillRect(0, 0, w, h);
          arr.forEach((el) => {
            el.a += Math.PI / 180 * 2;
            ctx.beginPath();
            ctx.arc(el.x - width / 2 + w / 2, Math.sin(el.a) * options.height + h/2, options.radius, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fillStyle = el.canvas.replace("th", el.a * 20);
            ctx.fill();
          })
          requestAnimationFrame(loop);
        }
        loop();
      }
    )
    (canvas)

  })
</script>

<div class='container'>
  <canvas bind:this={canvas}></canvas>
</div>

<style>
  .container {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    overflow: hidden;
  }

  canvas {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    border-radius: 16px;
  }
</style>