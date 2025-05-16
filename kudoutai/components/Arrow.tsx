// "use client";

// import React from "react";
// import { ReactP5Wrapper } from "react-p5-wrapper";

// function sketch(p5) {
//     p5.setup = () => p5.createCanvas(600, 400, p5.WEBGL);

//     p5.draw = () => {
//         p5.background(250);
//         p5.normalMaterial();
//         p5.push();
//         p5.rotateZ(p5.frameCount * 0.01);
//         p5.rotateX(p5.frameCount * 0.01);
//         p5.rotateY(p5.frameCount * 0.01);
//         p5.plane(100);
//         p5.pop();
//     };
// }

// export function Arrow() {
//     return <ReactP5Wrapper sketch={sketch} />;
// }


"use client";

import React from "react";
import dynamic from 'next/dynamic'


// ReactP5Wrapper を動的インポート（SSRを無効化）
const ReactP5Wrapper = dynamic( () =>
    import('react-p5-wrapper').then(mod => mod.ReactP5Wrapper),
    { ssr: false }
)

function sketch(p5: any) {
    const arrows: { pos: any; vel: any; col: any; size: number }[] = [];
    const layers = 3;
    const baseCount = 60;

    p5.setup = () => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight).parent("p5-root");
        p5.angleMode(p5.RADIANS);
        // 各レイヤーごとに矢印を生成
        for (let L = 0; L < layers; L++) {
        const count = baseCount * (1 + L * 0.5);
        for (let i = 0; i < count; i++) {
            const angle = p5.map(i, 0, count, 0, p5.TWO_PI);
            const radius = p5.lerp(50, Math.min(p5.width, p5.height) / 2, L / (layers - 1));
            const x = p5.width / 2 + p5.cos(angle) * radius;
            const y = p5.height / 2 + p5.sin(angle) * radius;
            // 外向きベロシティ→戻るようにマッピング
            const dir = p5.constructor.Vector.fromAngle(angle).mult( mapLayerSpeed(L) );
            arrows.push({
            pos: p5.createVector(x, y),
            vel: dir,
            col: pickColor(L),
            size: p5.random(6, 14)
            });
        }
        }
        p5.noStroke();
    };

    p5.draw = () => {
        p5.clear();
        arrows.forEach(a => {
        // 中心へ戻るように少しずつベクトル調整
        const toCenter = p5.constructor.Vector.sub(p5.createVector(p5.width/2, p5.height/2), a.pos)
            .setMag(0.1);
        a.vel.add(toCenter);
        a.pos.add(a.vel);
        // 端でループ
        wrapPos(a.pos, p5);

        // 矢印を描画
        p5.push();
        p5.translate(a.pos.x, a.pos.y);
        p5.rotate(a.vel.heading());
        p5.fill(a.col);
        drawArrow(a.size, p5);
        p5.pop();
        });
    };

    // 矢印形状（幾何学的）
    function drawArrow(sz: number, p: any) {
        p.beginShape();
        p.vertex(0, -sz * 0.5);
        p.vertex(sz * 1.2, 0);
        p.vertex(0, sz * 0.5);
        p.vertex(sz * 0.3, 0);
        p.endShape(p.CLOSE);
    }

    // レイヤーごとの色
    function pickColor(layer: number) {
        const blues = [
        p5.color(10, 70, 170, 180),
        p5.color(30, 120, 230, 160),
        p5.color(80, 180, 255, 140),
        ];
        return blues[layer] || p5.color(255);
    }

    // レイヤーごとの速度調整
    function mapLayerSpeed(layer: number) {
        return p5.map(layer, 0, layers - 1, 0.5, 2);
    }

    // 画面端で反対側にループ
    function wrapPos(v: any, p: any) {
        if (v.x < 0) v.x = p.width;
        if (v.x > p.width) v.x = 0;
        if (v.y < 0) v.y = p.height;
        if (v.y > p.height) v.y = 0;
    }

    p5.windowResized = () => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    };
}

export function Arrow() {
    return (
        <div id="p5-root" className="absolute inset-0 z-0">
        {/* ここで初めてクライアント実行時に ReactP5Wrapper を読み込む */}
        <ReactP5Wrapper sketch={sketch} />
        </div>
    )
}
