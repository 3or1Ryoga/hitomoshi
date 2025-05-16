'use client'

import React from 'react'
import { ReactP5Wrapper } from '@p5-wrapper/react'

export default function ArrowBackground() {
    const arrows: any[] = []

    const setup = (p5: any, canvasParentRef: any) => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef)
        p5.background(0)
    }

    const draw = (p5: any) => {
        // 軽いトレイル
        p5.fill(0, 20)
        p5.noStroke()
        p5.rect(0, 0, p5.width, p5.height)

        // 矢印スポーン
        if (p5.frameCount % 2 === 0) {
            const a = {
                pos: p5.createVector(p5.width / 2, p5.height / 2),
                vel: p5.constructor.Vector.fromAngle(p5.random(p5.TWO_PI)).mult(p5.random(1, 3)),
                col: p5.random() < 0.5 ? p5.color(0, 150, 255, 180) : p5.color(255, 255, 255, 180),
                size: p5.random(10, 20),
            }
            arrows.push(a)
        }

        // 更新・描画・削除
        for (let i = arrows.length - 1; i >= 0; i--) {
            const a = arrows[i]
            a.pos.add(a.vel)
            const wander = p5.constructor.Vector.fromAngle(a.vel.heading() + p5.random(-0.1, 0.1))
            a.vel.lerp(wander.setMag(a.vel.mag()), 0.05)

            p5.push()
            p5.translate(a.pos.x, a.pos.y)
            p5.rotate(a.vel.heading())
            p5.stroke(a.col)
            p5.strokeWeight(2)
            p5.line(0, 0, a.size, 0)
            p5.fill(a.col)
            p5.noStroke()
            p5.triangle(
                a.size, 0,
                a.size - a.size * 0.4, a.size * 0.2,
                a.size - a.size * 0.4, -a.size * 0.2
            )
            p5.pop()

            if (
                a.pos.x < -50 || a.pos.x > p5.width + 50 ||
                a.pos.y < -50 || a.pos.y > p5.height + 50
            ) {
                arrows.splice(i, 1)
            }
        }
    }

    const windowResized = (p5: any) => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
    }

    return (
        <div className="absolute inset-0 -z-10">
            <ReactP5Wrapper setup={setup} draw={draw} windowResized={windowResized} />
        </div>
    )
}
