const element = document.querySelector("#canvas")
const ctx =  element.getContext('2d')

const w = document.body.clientWidth
const h = document.body.clientHeight
element.width = w
element.height = h

const position = Array(300).join(0).split('')

// console.log(position);


const initMatrix = () => {
    ctx.fillStyle = 'rgba(0, 15, 2, 0.15)';
    ctx.fillRect(0, 0, w, h)

    // ctx.fillStyle = '#4caf50';
    ctx.fillStyle = '#00ff00';
    ctx.font = '11pt';

    position.map(
        (y, index) => {
            const text = String.fromCharCode(1e3 + Math.random() * 30);
            const x = (index * 15) + 15;

            canvas.getContext('2d').fillText(text, x, y)

            y > 100 + Math.random() * 1e5 ? position[index] = 0 : position[index] = y + 15
            // console.log(text);
        } 
    )

}

setInterval(initMatrix, 70);
 
// ejecutar este codigo en el navegador
// data:text/html,<body%20style=margin:0><canvas%20id=q%20/><script>var%20q=document.getElementById('q'),s=window.screen,w=q.width=s.width,h=q.height=s.height,p=Array(256).join(1).split(''),c=q.getContext('2d'),m=Math;setInterval(function(){c.fillStyle='rgba(0,0,0,0.05)';c.fillRect(0,0,w,h);c.fillStyle='rgba(0,255,0,1)';p=p.map(function(v,i){r=m.random();c.fillText(String.fromCharCode(m.floor(2720+r*33)),i*10,v);v+=10;%20return%20v>768+r*1e4?0:v})},33)</script>