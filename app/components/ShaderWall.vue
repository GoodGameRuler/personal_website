<script setup>
    const canvas = ref(null);

    // Rose Pine mist, brighter than the panes so they read as dark glass.
    // Dawn fog for light. c0 base, c1 mid, c2 rose accent, c3 cool highlight.
    const palettes = {
        dark: [
            [0.20, 0.17, 0.30],
            [0.46, 0.39, 0.62],
            [0.92, 0.74, 0.73],
            [0.61, 0.81, 0.85],
        ],
        light: [
            [0.99, 0.96, 0.93],
            [0.96, 0.85, 0.79],
            [0.89, 0.71, 0.74],
            [0.92, 0.66, 0.31],
        ],
    };

    onMounted(() => {
        const el = canvas.value;
        const gl = el.getContext('webgl', { antialias: false, depth: false });
        if (!gl) return; // SVG wallpaper stays as the fallback

        const vsrc = `attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}`;
        const fsrc = `precision highp float;
uniform vec2 u_res;uniform float u_t;
uniform vec3 c0,c1,c2,c3;
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+1.),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*noise(p);p=p*2.02+vec2(13.7,7.3);a*=.5;}return v;}
void main(){
vec2 uv=gl_FragCoord.xy/u_res;
vec2 p=uv*vec2(u_res.x/u_res.y,1.)*1.6;
float t=u_t*.03;
vec2 q=vec2(fbm(p+t),fbm(p+vec2(5.2,1.3)-t*.7));
vec2 r=vec2(fbm(p+2.5*q+vec2(1.7,9.2)+t*.5),fbm(p+2.5*q+vec2(8.3,2.8)-t*.4));
float f=fbm(p+3.*r);
vec3 col=mix(c0,c1,clamp(f*1.6,0.,1.));
col=mix(col,c2,clamp(pow(r.x,2.2),0.,1.)*.55);
col=mix(col,c3,clamp(pow(q.y,3.),0.,1.)*.30);
col*=.82+.30*uv.y;
gl_FragColor=vec4(col,1.);}`;

        const sh = (type, src) => {
            const s = gl.createShader(type);
            gl.shaderSource(s, src);
            gl.compileShader(s);
            return s;
        };
        const prog = gl.createProgram();
        gl.attachShader(prog, sh(gl.VERTEX_SHADER, vsrc));
        gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, fsrc));
        gl.linkProgram(prog);
        if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
        gl.useProgram(prog);

        const buf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
        const loc = gl.getAttribLocation(prog, 'a');
        gl.enableVertexAttribArray(loc);
        gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

        const uRes = gl.getUniformLocation(prog, 'u_res');
        const uT = gl.getUniformLocation(prog, 'u_t');
        const uC = [0, 1, 2, 3].map(i => gl.getUniformLocation(prog, 'c' + i));

        // Render at reduced resolution; CSS upscaling keeps it soft like mist
        const resize = () => {
            el.width = Math.max(1, Math.floor(el.clientWidth / 3));
            el.height = Math.max(1, Math.floor(el.clientHeight / 3));
            gl.viewport(0, 0, el.width, el.height);
        };
        resize();
        window.addEventListener('resize', resize);

        // Palette eases toward the active theme so toggling melts between skies
        let cur = palettes.dark.map(c => [...c]);
        const draw = (ms) => {
            const want = palettes[document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'];
            for (let i = 0; i < 4; i++)
                for (let j = 0; j < 3; j++)
                    cur[i][j] += (want[i][j] - cur[i][j]) * 0.06;
            gl.uniform2f(uRes, el.width, el.height);
            gl.uniform1f(uT, ms / 1000);
            for (let i = 0; i < 4; i++) gl.uniform3fv(uC[i], cur[i]);
            gl.drawArrays(gl.TRIANGLES, 0, 3);
        };

        const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (still) {
            for (let i = 0; i < 60; i++) draw(40); // settle the palette, render one calm frame
            el.style.opacity = '1';
            return;
        }
        let raf;
        const loop = (ms) => { draw(ms); raf = requestAnimationFrame(loop); };
        raf = requestAnimationFrame(loop);
        el.style.opacity = '1';
        onUnmounted(() => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); });
    });
</script>

<template>
    <canvas ref="canvas" class="shaderWall"></canvas>
</template>

<style>
    .shaderWall {
        position: fixed;
        inset: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        opacity: 0;
        transition: opacity 1.2s ease;
    }
</style>
