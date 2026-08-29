<script setup>
    const mistCanvas = ref(null);
    const neonCanvas = ref(null);

    onMounted(() => {
        const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        /* ---- light: dawn mist (WebGL fbm, high contrast wisps) ---- */
        let drawMist = () => {};
        const mc = mistCanvas.value;
        const gl = mc.getContext('webgl', { antialias: false, depth: false });
        if (gl) {
            const vsrc = `attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}`;
            const fsrc = `precision highp float;
uniform vec2 u_res;uniform float u_t;
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+1.),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*noise(p);p=p*2.02+vec2(13.7,7.3);a*=.5;}return v;}
void main(){
vec2 uv=gl_FragCoord.xy/u_res;
vec2 p=uv*vec2(u_res.x/u_res.y,1.)*1.8;
float t=u_t*.03;
vec2 q=vec2(fbm(p+t),fbm(p+vec2(5.2,1.3)-t*.7));
vec2 r=vec2(fbm(p+2.5*q+vec2(1.7,9.2)+t*.5),fbm(p+2.5*q+vec2(8.3,2.8)-t*.4));
float f=smoothstep(.30,.85,fbm(p+3.*r));
float s1=1.-abs(2.*fbm(p*1.6+2.2*r+t)-1.);
s1=pow(smoothstep(.52,1.,s1),3.);
float s2=1.-abs(2.*fbm(p*1.6+2.2*q-t*.6+vec2(3.1,7.7))-1.);
s2=pow(smoothstep(.58,1.,s2),3.);
vec3 base=vec3(.995,.972,.940);
vec3 mid=vec3(.975,.895,.845);
vec3 rose=vec3(.93,.38,.58);
vec3 crimson=vec3(.72,.22,.42);
vec3 gold=vec3(.92,.64,.28);
vec3 col=mix(base,mid,f);
col=mix(col,rose,s1*.9);
col=mix(col,crimson,s2*.65);
col=mix(col,gold,smoothstep(.7,.99,q.y)*.18);
col*=.94+.08*uv.y;
gl_FragColor=vec4(col,1.);}`;
            const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return s; };
            const prog = gl.createProgram();
            gl.attachShader(prog, sh(gl.VERTEX_SHADER, vsrc));
            gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, fsrc));
            gl.linkProgram(prog);
            if (gl.getProgramParameter(prog, gl.LINK_STATUS)) {
                gl.useProgram(prog);
                const buf = gl.createBuffer();
                gl.bindBuffer(gl.ARRAY_BUFFER, buf);
                gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
                const loc = gl.getAttribLocation(prog, 'a');
                gl.enableVertexAttribArray(loc);
                gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
                const uRes = gl.getUniformLocation(prog, 'u_res');
                const uT = gl.getUniformLocation(prog, 'u_t');
                const sizeMist = () => {
                    mc.width = Math.max(1, Math.floor(mc.clientWidth / 2));
                    mc.height = Math.max(1, Math.floor(mc.clientHeight / 2));
                    gl.viewport(0, 0, mc.width, mc.height);
                };
                sizeMist();
                window.addEventListener('resize', sizeMist);
                drawMist = (ms) => {
                    gl.uniform2f(uRes, mc.width, mc.height);
                    gl.uniform1f(uT, ms / 1000);
                    gl.drawArrays(gl.TRIANGLES, 0, 3);
                };
            }
        }

        /* ---- dark: neon tracer with a decaying trail (2D canvas) ---- */
        const nc = neonCanvas.value;
        const ctx = nc.getContext('2d');
        const trailColors = ['#d3bdf5', '#f5c6c3', '#aee2ea'];
        let px = 0, py = 0, ang = 0;
        let targetAng = 0, speed = 2.2, targetSpeed = 2.2, nextTurn = 0;
        const sizeNeon = () => {
            nc.width = Math.max(1, Math.floor(nc.clientWidth / 2));
            nc.height = Math.max(1, Math.floor(nc.clientHeight / 2));
            ctx.fillStyle = '#16141f';
            ctx.fillRect(0, 0, nc.width, nc.height);
            px = nc.width / 2; py = nc.height / 2; ang = Math.random() * Math.PI * 2;
        };
        sizeNeon();
        window.addEventListener('resize', sizeNeon);

        // leaving one wall re-enters through a random wall at a random position
        const respawn = () => {
            const w = nc.width, h = nc.height, edge = Math.floor(Math.random() * 4);
            if (edge === 0) { px = Math.random() * w; py = 2; ang = Math.PI / 2; }
            if (edge === 1) { px = Math.random() * w; py = h - 2; ang = -Math.PI / 2; }
            if (edge === 2) { px = 2; py = Math.random() * h; ang = 0; }
            if (edge === 3) { px = w - 2; py = Math.random() * h; ang = Math.PI; }
            ang += (Math.random() - 0.5) * 1.0;
            targetAng = ang;
        };

        const drawNeon = (ms) => {
            // the decay: every frame the past sinks a little further into the night
            ctx.globalCompositeOperation = 'source-over';
            ctx.shadowBlur = 0;
            ctx.fillStyle = 'rgba(22, 20, 31, 0.045)';
            ctx.fillRect(0, 0, nc.width, nc.height);

            // macro randomness: glide smoothly, change intent every second or two
            if (ms > nextTurn) {
                targetAng = ang + (Math.random() - 0.5) * 3.0;
                targetSpeed = 1.4 + Math.random() * 3.4;
                nextTurn = ms + 700 + Math.random() * 1500;
            }
            ang += (targetAng - ang) * 0.045;
            speed += (targetSpeed - speed) * 0.05;

            const mixT = (Math.sin(ms * 0.00013) + 1) / 2 * (trailColors.length - 1);
            const col = trailColors[Math.round(mixT)];
            for (let i = 0; i < 2; i++) {
                const nx = px + Math.cos(ang) * speed;
                const ny = py + Math.sin(ang) * speed;
                if (nx < 0 || ny < 0 || nx > nc.width || ny > nc.height) { respawn(); continue; }
                ctx.strokeStyle = col;
                ctx.shadowColor = col;
                ctx.shadowBlur = 12;
                ctx.lineWidth = 2.4;
                ctx.lineCap = 'round';
                ctx.beginPath();
                ctx.moveTo(px, py);
                ctx.lineTo(nx, ny);
                ctx.stroke();
                px = nx; py = ny;
            }

            // the shining head: white-hot core in a coloured bloom, shimmering
            const r = 2.4 + Math.sin(ms * 0.012) * 0.5;
            ctx.shadowColor = col;
            ctx.shadowBlur = 26;
            ctx.fillStyle = col;
            ctx.beginPath();
            ctx.arc(px, py, r + 1.6, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 10;
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(px, py, r * 0.7, 0, Math.PI * 2);
            ctx.fill();
        };

        if (still) {
            drawMist(1200);
            for (let i = 0; i < 900; i++) drawNeon(i * 16);
            mc.style.opacity = ''; nc.style.opacity = '';
            return;
        }
        let raf;
        const loop = (ms) => {
            const light = document.documentElement.dataset.theme === 'light';
            if (light) drawMist(ms); else drawNeon(ms);
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        mc.style.opacity = ''; nc.style.opacity = '';
        onUnmounted(() => { cancelAnimationFrame(raf); window.removeEventListener('resize', sizeNeon); });
    });
</script>

<template>
    <canvas ref="neonCanvas" class="wall wallNeon" style="opacity: 0"></canvas>
    <canvas ref="mistCanvas" class="wall wallMist" style="opacity: 0"></canvas>
</template>

<style>
    .wall {
        position: fixed;
        inset: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        transition: opacity 1s ease;
    }

    .wallMist {
        opacity: 0;
    }

    .wallNeon {
        opacity: 1;
    }

    :root[data-theme="light"] .wallMist {
        opacity: 1;
    }

    :root[data-theme="light"] .wallNeon {
        opacity: 0;
    }
</style>
