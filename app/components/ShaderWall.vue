<script setup>
    const mistCanvas = ref(null);
    const neonCanvas = ref(null);

    onMounted(() => {
        const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        /* ---- light: petals over soft clouds (2D particles, Senbonzakura) ---- */
        const mc = mistCanvas.value;
        const pctx = mc.getContext('2d');
        const petalColors = ['#e04f82', '#d16a8e', '#ef8cab', '#c95c86'];
        const N = 90;
        let petals = [];
        let clouds = [];
        const sizePetals = () => {
            mc.width = Math.max(1, Math.floor(mc.clientWidth / 2));
            mc.height = Math.max(1, Math.floor(mc.clientHeight / 2));
            petals = Array.from({ length: N }, (_, i) => ({
                x: Math.random() * mc.width,
                y: Math.random() * mc.height,
                vx: 0, vy: 0,
                size: 2.2 + Math.random() * 2.4,
                aspect: 0.45 + Math.random() * 0.25,
                rot: Math.random() * Math.PI,
                rotV: (Math.random() - 0.5) * 0.02,
                col: petalColors[i % petalColors.length],
                phase: Math.random() * Math.PI * 2,
                theta: Math.acos(2 * Math.random() - 1), // seat on the orb
                phi: Math.random() * Math.PI * 2,
            }));
            clouds = Array.from({ length: 6 }, () => ({
                x: Math.random() * mc.width,
                y: Math.random() * mc.height,
                r: mc.width * (0.18 + Math.random() * 0.22),
                tint: Math.random() < 0.5 ? '247, 233, 223' : '236, 207, 198',
                drift: (Math.random() - 0.5) * 0.05,
            }));
        };
        sizePetals();
        window.addEventListener('resize', sizePetals);

        // state machine: float -> gather (converge + revolve) -> explode -> float
        let mode = 'float', modeUntil = 12000, orb = { x: 0, y: 0, r: 0 };
        const drawPetals = (ms) => {
            const w = mc.width, h = mc.height;
            if (ms > modeUntil) {
                if (mode === 'float') {
                    mode = 'gather';
                    modeUntil = ms + 9000;
                    orb = { x: w * (0.3 + Math.random() * 0.4), y: h * (0.3 + Math.random() * 0.4), r: Math.min(w, h) * 0.17 };
                } else if (mode === 'gather') {
                    mode = 'explode';
                    modeUntil = ms + 1400;
                    for (const p of petals) {
                        const dx = p.x - orb.x, dy = p.y - orb.y;
                        const d = Math.hypot(dx, dy) || 1;
                        const kick = 3.5 + Math.random() * 3;
                        p.vx = (dx / d) * kick - (dy / d) * 1.2;
                        p.vy = (dy / d) * kick + (dx / d) * 1.2;
                    }
                } else {
                    mode = 'float';
                    modeUntil = ms + 15000 + Math.random() * 12000;
                }
            }

            // sky: blush base and slow soft clouds
            pctx.globalAlpha = 1;
            pctx.fillStyle = '#f0d9cd';
            pctx.fillRect(0, 0, w, h);
            for (const c of clouds) {
                c.x += c.drift;
                if (c.x < -c.r) c.x = w + c.r;
                if (c.x > w + c.r) c.x = -c.r;
                const grad = pctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, c.r);
                grad.addColorStop(0, `rgba(${c.tint}, 0.9)`);
                grad.addColorStop(1, `rgba(${c.tint}, 0)`);
                pctx.fillStyle = grad;
                pctx.fillRect(c.x - c.r, c.y - c.r, c.r * 2, c.r * 2);
            }

            const spin = ms * 0.0011;
            for (const p of petals) {
                let depth = 0;
                if (mode === 'gather') {
                    // seat on a revolving sphere; smooth, non-uniform, a little unstable
                    const sx = Math.sin(p.theta) * Math.cos(p.phi + spin);
                    const sz = Math.sin(p.theta) * Math.sin(p.phi + spin);
                    const sy = Math.cos(p.theta);
                    const wob = Math.sin(ms * 0.003 + p.phase) * 4;
                    const tx = orb.x + sx * orb.r + wob;
                    const ty = orb.y + sy * orb.r * 0.92 + Math.cos(ms * 0.0026 + p.phase) * 3;
                    p.x += (tx - p.x) * 0.055;
                    p.y += (ty - p.y) * 0.055;
                    p.vx = 0; p.vy = 0;
                    depth = sz;
                } else {
                    // weightless float: one gentle breeze, individual sway, no gravity
                    const swayX = Math.sin(ms * 0.0007 + p.phase) * 0.12;
                    const swayY = Math.cos(ms * 0.0005 + p.phase) * 0.10;
                    p.vx += ((0.16 + swayX) - p.vx) * 0.02;
                    p.vy += ((-0.04 + swayY) - p.vy) * 0.02;
                    if (mode === 'explode') { p.vx *= 0.965; p.vy *= 0.965; }
                    p.x += p.vx;
                    p.y += p.vy;
                    if (p.x < -6) p.x = w + 6;
                    if (p.x > w + 6) p.x = -6;
                    if (p.y < -6) p.y = h + 6;
                    if (p.y > h + 6) p.y = -6;
                }
                p.rot += p.rotV;

                const scale = 1 + depth * 0.45;
                pctx.globalAlpha = mode === 'gather' ? 0.55 + 0.45 * (depth + 1) / 2 : 0.9;
                pctx.fillStyle = p.col;
                pctx.beginPath();
                pctx.ellipse(p.x, p.y, p.size * scale, p.size * p.aspect * scale, p.rot, 0, Math.PI * 2);
                pctx.fill();
            }
            pctx.globalAlpha = 1;
        };

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
            drawPetals(6000);
            for (let i = 0; i < 900; i++) drawNeon(i * 16);
            mc.style.opacity = ''; nc.style.opacity = '';
            return;
        }
        let raf;
        const loop = (ms) => {
            const light = document.documentElement.dataset.theme === 'light';
            if (light) drawPetals(ms); else drawNeon(ms);
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        mc.style.opacity = ''; nc.style.opacity = '';
        onUnmounted(() => {
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', sizeNeon);
            window.removeEventListener('resize', sizePetals);
        });
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
