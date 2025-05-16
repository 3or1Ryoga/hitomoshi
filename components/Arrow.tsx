// "use client";

// import React, { useEffect, useRef } from "react";

// export function FlameEffect() {
//     const containerRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         if (!containerRef.current || typeof window === 'undefined') return;

//         // p5を動的インポート
//         import('p5').then((p5Module) => {
//             const p5 = p5Module.default;
            
//             const sketch = (p: any) => {
//                 interface Particle {
//                     pos: any;
//                     vel: any;
//                     acc: any;
//                     size: number;
//                     lifespan: number;
//                     maxLife: number;
//                     colorIndex: number;
//                     color: any;
//                     reset: () => void;
//                     update: () => void;
//                     display: () => void;
//                 }

//                 const particles: Particle[] = [];
//                 const particleCount = 300;
//                 let colors: any[] = [];
                
//                 class ParticleImpl implements Particle {
//                     pos: any;
//                     vel: any;
//                     acc: any;
//                     size: number;
//                     lifespan: number;
//                     maxLife: number;
//                     colorIndex: number;
//                     color: any;

//                     constructor() {
//                         this.pos = p.createVector(0, 0);
//                         this.vel = p.createVector(0, 0);
//                         this.acc = p.createVector(0, 0);
//                         this.size = 0;
//                         this.lifespan = 0;
//                         this.maxLife = 0;
//                         this.colorIndex = 0;
//                         this.color = p.color(0);
//                         this.reset();
//                         this.pos.x = p.random(p.width);
//                         this.pos.y = p.random(p.height);
//                     }
                    
//                     reset() {
//                         this.pos = p.createVector(
//                             p.random(p.width * 0.2, p.width * 0.8), 
//                             p.height + p.random(20)
//                         );
                        
//                         this.vel = p.createVector(
//                             p.random(-0.8, 0.8),
//                             p.random(-2.5, -0.8)
//                         );
                        
//                         this.acc = p.createVector(0, -0.01);
//                         this.size = p.random(3, 12);
//                         this.lifespan = p.random(80, 200);
//                         this.maxLife = this.lifespan;
//                         this.colorIndex = Math.floor(p.random(colors.length));
//                         this.color = colors[this.colorIndex];
//                     }
                    
//                     update() {
//                         this.vel.add(this.acc);
//                         this.pos.add(this.vel);
//                         this.pos.x += p.sin(p.frameCount * 0.01 + this.pos.y * 0.01) * 0.5;
//                         this.lifespan -= 1;
                        
//                         if (this.lifespan <= 0 || 
//                             this.pos.x < -this.size || 
//                             this.pos.x > p.width + this.size || 
//                             this.pos.y < -this.size) {
//                             this.reset();
//                         }
//                     }
                    
//                     display() {
//                         p.noStroke();
//                         const alpha = p.map(this.lifespan, 0, this.maxLife, 0, p.alpha(this.color));
//                         const c = p.color(p.red(this.color), p.green(this.color), p.blue(this.color), alpha);
//                         p.fill(c);
                        
//                         const yRatio = p.map(this.pos.y, p.height, 0, 1, 0.5);
//                         const w = this.size * yRatio;
                        
//                         p.push();
//                         p.translate(this.pos.x, this.pos.y);
//                         p.rotate(this.vel.heading() + p.PI/2);
//                         p.ellipse(0, 0, w, this.size * 1.5);
//                         p.pop();
//                     }
//                 }

//                 p.setup = () => {
//                     p.createCanvas(p.windowWidth, p.windowHeight);
//                     p.angleMode(p.RADIANS);
//                     p.blendMode(p.BLEND);
                    
//                     // 色の初期化をsetup内で行う
//                     colors = [
//                         p.color(220, 50, 32, 160),
//                         p.color(240, 80, 60, 140),
//                         p.color(255, 120, 100, 120),
//                         p.color(255, 180, 140, 100),
//                         p.color(70, 50, 100, 100)
//                     ];
                    
//                     for (let i = 0; i < particleCount; i++) {
//                         particles.push(new ParticleImpl());
//                     }
//                 };

//                 p.draw = () => {
//                     p.clear();
//                     drawGlow();
//                     particles.forEach(particle => {
//                         particle.update();
//                         particle.display();
//                     });
//                 };
                
//                 function drawGlow() {
//                     const glowSize = Math.min(p.width, p.height) * 0.4;
//                     const cx = p.width / 2;
//                     const cy = p.height * 0.9;
                    
//                     p.noStroke();
//                     for (let r = glowSize; r > 0; r -= glowSize/8) {
//                         const alphaVal = p.map(r, 0, glowSize, 40, 0);
//                         p.fill(255, 100, 50, alphaVal);
//                         p.ellipse(cx, cy, r, r * 0.6);
//                     }
//                 }

//                 p.windowResized = () => {
//                     p.resizeCanvas(p.windowWidth, p.windowHeight);
//                 };
//             };

//             // p5のインスタンスを作成
//             if (containerRef.current) {
//                 const p5Instance = new p5(sketch, containerRef.current);

//                 return () => {
//                     p5Instance.remove();
//                 };
//             }
//         });
//     }, []);

//     return <div ref={containerRef} className="absolute inset-0 z-0" />;
// }

// "use client";

// import React, { useEffect, useRef } from "react";

// export function FlameEffect() {
//     const containerRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         if (!containerRef.current || typeof window === 'undefined') return;

//         // p5を動的インポート
//         import('p5').then((p5Module) => {
//             const p5 = p5Module.default;
            
//             const sketch = (p: any) => {
//                 interface Particle {
//                     pos: any;
//                     vel: any;
//                     acc: any;
//                     size: number;
//                     lifespan: number;
//                     maxLife: number;
//                     colorIndex: number;
//                     color: any;
//                     reset: () => void;
//                     update: () => void;
//                     display: () => void;
//                 }

//                 const particles: Particle[] = [];
//                 const particleCount = 300;
//                 let colors: any[] = [];
                
//                 class ParticleImpl implements Particle {
//                     pos: any;
//                     vel: any;
//                     acc: any;
//                     size: number;
//                     lifespan: number;
//                     maxLife: number;
//                     colorIndex: number;
//                     color: any;

//                     constructor() {
//                         this.pos = p.createVector(0, 0);
//                         this.vel = p.createVector(0, 0);
//                         this.acc = p.createVector(0, 0);
//                         this.size = 0;
//                         this.lifespan = 0;
//                         this.maxLife = 0;
//                         this.colorIndex = 0;
//                         this.color = p.color(0);
//                         this.reset();
//                         this.pos.x = p.random(p.width);
//                         this.pos.y = p.random(p.height);
//                     }
                    
//                     reset() {
//                         this.pos = p.createVector(
//                             p.random(p.width * 0.2, p.width * 0.8), 
//                             p.height + p.random(20)
//                         );
                        
//                         this.vel = p.createVector(
//                             p.random(-0.8, 0.8),
//                             p.random(-2.5, -0.8)
//                         );
                        
//                         this.acc = p.createVector(0, -0.01);
//                         this.size = p.random(3, 12);
//                         this.lifespan = p.random(80, 200);
//                         this.maxLife = this.lifespan;
//                         this.colorIndex = Math.floor(p.random(colors.length));
//                         this.color = colors[this.colorIndex];
//                     }
                    
//                     update() {
//                         this.vel.add(this.acc);
//                         this.pos.add(this.vel);
//                         this.pos.x += p.sin(p.frameCount * 0.01 + this.pos.y * 0.01) * 0.5;
//                         this.lifespan -= 1;
                        
//                         if (this.lifespan <= 0 || 
//                             this.pos.x < -this.size || 
//                             this.pos.x > p.width + this.size || 
//                             this.pos.y < -this.size) {
//                             this.reset();
//                         }
//                     }
                    
//                     display() {
//                         p.noStroke();
//                         const alpha = p.map(this.lifespan, 0, this.maxLife, 0, p.alpha(this.color));
//                         const c = p.color(p.red(this.color), p.green(this.color), p.blue(this.color), alpha);
//                         p.fill(c);
                        
//                         const yRatio = p.map(this.pos.y, p.height, 0, 1, 0.5);
//                         const w = this.size * yRatio;
                        
//                         p.push();
//                         p.translate(this.pos.x, this.pos.y);
//                         p.rotate(this.vel.heading() + p.PI/2);
//                         p.ellipse(0, 0, w, this.size * 1.5);
//                         p.pop();
//                     }
//                 }

//                 p.setup = () => {
//                     p.createCanvas(p.windowWidth, p.windowHeight);
//                     p.angleMode(p.RADIANS);
//                     p.blendMode(p.BLEND);
                    
//                     // 色の初期化をsetup内で行う - より赤に近い色合いに修正
//                     colors = [
//                         p.color(220, 40, 20, 160),   // より深い朱色
//                         p.color(240, 60, 30, 140),   // 明るい朱色
//                         p.color(255, 90, 50, 120),   // オレンジ赤
//                         p.color(255, 150, 70, 100),  // 明るいオレンジ
//                         p.color(190, 30, 10, 130)    // 暗い赤色
//                     ];
                    
//                     for (let i = 0; i < particleCount; i++) {
//                         particles.push(new ParticleImpl());
//                     }
//                 };

//                 p.draw = () => {
//                     p.clear();
//                     // drawGlow() 関数の呼び出しを削除
//                     particles.forEach(particle => {
//                         particle.update();
//                         particle.display();
//                     });
//                 };
                
//                 // drawGlow 関数自体はコードから削除しても良いですが、
//                 // 将来的に再利用する可能性があるため、コメントアウトして残しておきます
//                 /*
//                 function drawGlow() {
//                     const glowSize = Math.min(p.width, p.height) * 0.4;
//                     const cx = p.width / 2;
//                     const cy = p.height * 0.9;
                    
//                     p.noStroke();
//                     for (let r = glowSize; r > 0; r -= glowSize/8) {
//                         const alphaVal = p.map(r, 0, glowSize, 40, 0);
//                         p.fill(255, 100, 50, alphaVal);
//                         p.ellipse(cx, cy, r, r * 0.6);
//                     }
//                 }
//                 */

//                 p.windowResized = () => {
//                     p.resizeCanvas(p.windowWidth, p.windowHeight);
//                 };
//             };

//             // p5のインスタンスを作成
//             if (containerRef.current) {
//                 const p5Instance = new p5(sketch, containerRef.current);

//                 return () => {
//                     p5Instance.remove();
//                 };
//             }
//         });
//     }, []);

//     return <div ref={containerRef} className="absolute inset-0 z-0" />;
// }

// パッと消えてしまう
// "use client";

// import React, { useEffect, useRef, useState } from "react";

// export function FlameEffect() {
//     const containerRef = useRef<HTMLDivElement>(null);
//     const [isVisible, setIsVisible] = useState(true);

//     // スクロール位置を監視し、表示・非表示を制御する
//     useEffect(() => {
//         const handleScroll = () => {
//             // スクロール位置が0（最上部）なら表示、それ以外なら非表示
//             if (window.scrollY === 0) {
//                 setIsVisible(true);
//             } else {
//                 setIsVisible(false);
//             }
//         };

//         // 初期化時にもチェック
//         handleScroll();

//         // スクロールイベントリスナーを追加
//         window.addEventListener('scroll', handleScroll);

//         // クリーンアップ関数でイベントリスナーを削除
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     useEffect(() => {
//         // isVisibleがfalseなら早期リターン
//         if (!isVisible || !containerRef.current || typeof window === 'undefined') return;

//         // p5を動的インポート
//         import('p5').then((p5Module) => {
//             const p5 = p5Module.default;
            
//             const sketch = (p: any) => {
//                 interface Particle {
//                     pos: any;
//                     vel: any;
//                     acc: any;
//                     size: number;
//                     lifespan: number;
//                     maxLife: number;
//                     colorIndex: number;
//                     color: any;
//                     reset: () => void;
//                     update: () => void;
//                     display: () => void;
//                 }

//                 const particles: Particle[] = [];
//                 const particleCount = 300;
//                 let colors: any[] = [];
                
//                 class ParticleImpl implements Particle {
//                     pos: any;
//                     vel: any;
//                     acc: any;
//                     size: number;
//                     lifespan: number;
//                     maxLife: number;
//                     colorIndex: number;
//                     color: any;

//                     constructor() {
//                         this.pos = p.createVector(0, 0);
//                         this.vel = p.createVector(0, 0);
//                         this.acc = p.createVector(0, 0);
//                         this.size = 0;
//                         this.lifespan = 0;
//                         this.maxLife = 0;
//                         this.colorIndex = 0;
//                         this.color = p.color(0);
//                         this.reset();
//                         this.pos.x = p.random(p.width);
//                         this.pos.y = p.random(p.height);
//                     }
                    
//                     reset() {
//                         this.pos = p.createVector(
//                             p.random(p.width * 0.2, p.width * 0.8), 
//                             p.height + p.random(20)
//                         );
                        
//                         this.vel = p.createVector(
//                             p.random(-0.8, 0.8),
//                             p.random(-2.5, -0.8)
//                         );
                        
//                         this.acc = p.createVector(0, -0.01);
//                         this.size = p.random(3, 12);
//                         this.lifespan = p.random(80, 200);
//                         this.maxLife = this.lifespan;
//                         this.colorIndex = Math.floor(p.random(colors.length));
//                         this.color = colors[this.colorIndex];
//                     }
                    
//                     update() {
//                         this.vel.add(this.acc);
//                         this.pos.add(this.vel);
//                         this.pos.x += p.sin(p.frameCount * 0.01 + this.pos.y * 0.01) * 0.5;
//                         this.lifespan -= 1;
                        
//                         if (this.lifespan <= 0 || 
//                             this.pos.x < -this.size || 
//                             this.pos.x > p.width + this.size || 
//                             this.pos.y < -this.size) {
//                             this.reset();
//                         }
//                     }
                    
//                     display() {
//                         p.noStroke();
//                         const alpha = p.map(this.lifespan, 0, this.maxLife, 0, p.alpha(this.color));
//                         const c = p.color(p.red(this.color), p.green(this.color), p.blue(this.color), alpha);
//                         p.fill(c);
                        
//                         const yRatio = p.map(this.pos.y, p.height, 0, 1, 0.5);
//                         const w = this.size * yRatio;
                        
//                         p.push();
//                         p.translate(this.pos.x, this.pos.y);
//                         p.rotate(this.vel.heading() + p.PI/2);
//                         p.ellipse(0, 0, w, this.size * 1.5);
//                         p.pop();
//                     }
//                 }

//                 p.setup = () => {
//                     p.createCanvas(p.windowWidth, p.windowHeight);
//                     p.angleMode(p.RADIANS);
//                     p.blendMode(p.BLEND);
                    
//                     // 色の初期化をsetup内で行う - より赤に近い色合いに修正
//                     colors = [
//                         p.color(220, 40, 20, 160),   // より深い朱色
//                         p.color(240, 60, 30, 140),   // 明るい朱色
//                         p.color(255, 90, 50, 120),   // オレンジ赤
//                         p.color(255, 150, 70, 100),  // 明るいオレンジ
//                         p.color(190, 30, 10, 130)    // 暗い赤色
//                     ];
                    
//                     for (let i = 0; i < particleCount; i++) {
//                         particles.push(new ParticleImpl());
//                     }
//                 };

//                 p.draw = () => {
//                     p.clear();
//                     // drawGlow() 関数の呼び出しを削除
//                     particles.forEach(particle => {
//                         particle.update();
//                         particle.display();
//                     });
//                 };

//                 p.windowResized = () => {
//                     p.resizeCanvas(p.windowWidth, p.windowHeight);
//                 };
//             };

//             // p5のインスタンスを作成
//             if (containerRef.current) {
//                 const p5Instance = new p5(sketch, containerRef.current);

//                 return () => {
//                     p5Instance.remove();
//                 };
//             }
//         });
//     }, [isVisible]); // isVisibleの変更を監視

//     // isVisibleがfalseならnullを返し、レンダリングしない
//     if (!isVisible) {
//         return null;
//     }

//     return <div ref={containerRef} className="absolute inset-0 z-0" />;
// }


"use client";

import React, { useEffect, useRef, useState } from "react";

export function FlameEffect() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [opacity, setOpacity] = useState(1);
    const opacityRef = useRef(1);

    // スクロールに応じて透明度を計算
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const maxFade = 300; // 300px で完全にフェードアウト
            const newOpacity = Math.max(0, 1 - scrollTop / maxFade);
            setOpacity(newOpacity);
        };

        handleScroll(); // 初期化時チェック
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // opacity ステートを ref に反映
    useEffect(() => {
        opacityRef.current = opacity;
    }, [opacity]);

    useEffect(() => {
        if (!containerRef.current || typeof window === 'undefined') return;

        import('p5').then((p5Module) => {
            const p5 = p5Module.default;

            const sketch = (p: any) => {
                interface Particle {
                    pos: any;
                    vel: any;
                    acc: any;
                    size: number;
                    lifespan: number;
                    maxLife: number;
                    colorIndex: number;
                    color: any;
                    reset: () => void;
                    update: () => void;
                    display: () => void;
                }

                const particles: Particle[] = [];
                const particleCount = 300;
                let colors: any[] = [];

                class ParticleImpl implements Particle {
                    pos: any;
                    vel: any;
                    acc: any;
                    size: number;
                    lifespan: number;
                    maxLife: number;
                    colorIndex: number;
                    color: any;

                    constructor() {
                        this.pos = p.createVector(0, 0);
                        this.vel = p.createVector(0, 0);
                        this.acc = p.createVector(0, 0);
                        this.size = 0;
                        this.lifespan = 0;
                        this.maxLife = 0;
                        this.colorIndex = 0;
                        this.color = p.color(0);
                        this.reset();
                        this.pos.x = p.random(p.width);
                        this.pos.y = p.random(p.height);
                    }

                    reset() {
                        this.pos = p.createVector(
                            p.random(p.width * 0.2, p.width * 0.8),
                            p.height + p.random(20)
                        );

                        this.vel = p.createVector(
                            p.random(-0.8, 0.8),
                            p.random(-2.5, -0.8)
                        );

                        this.acc = p.createVector(0, -0.01);
                        this.size = p.random(3, 12);
                        this.lifespan = p.random(80, 200);
                        this.maxLife = this.lifespan;
                        this.colorIndex = Math.floor(p.random(colors.length));
                        this.color = colors[this.colorIndex];
                    }

                    update() {
                        this.vel.add(this.acc);
                        this.pos.add(this.vel);
                        this.pos.x += p.sin(p.frameCount * 0.01 + this.pos.y * 0.01) * 0.5;
                        this.lifespan -= 1;

                        if (
                            this.lifespan <= 0 ||
                            this.pos.x < -this.size ||
                            this.pos.x > p.width + this.size ||
                            this.pos.y < -this.size
                        ) {
                            this.reset();
                        }
                    }

                    display() {
                        p.noStroke();
                        const baseAlpha = p.map(this.lifespan, 0, this.maxLife, 0, p.alpha(this.color));
                        const alpha = baseAlpha * opacityRef.current;

                        const c = p.color(
                            p.red(this.color),
                            p.green(this.color),
                            p.blue(this.color),
                            alpha
                        );
                        p.fill(c);

                        const yRatio = p.map(this.pos.y, p.height, 0, 1, 0.5);
                        const w = this.size * yRatio;

                        p.push();
                        p.translate(this.pos.x, this.pos.y);
                        p.rotate(this.vel.heading() + p.PI / 2);
                        p.ellipse(0, 0, w, this.size * 1.5);
                        p.pop();
                    }
                }

                p.setup = () => {
                    p.createCanvas(p.windowWidth, p.windowHeight);
                    p.angleMode(p.RADIANS);
                    p.blendMode(p.BLEND);

                    colors = [
                        p.color(220, 40, 20, 160),
                        p.color(240, 60, 30, 140),
                        p.color(255, 90, 50, 120),
                        p.color(255, 150, 70, 100),
                        p.color(190, 30, 10, 130)
                    ];

                    for (let i = 0; i < particleCount; i++) {
                        particles.push(new ParticleImpl());
                    }
                };

                p.draw = () => {
                    p.clear();
                    particles.forEach(particle => {
                        particle.update();
                        particle.display();
                    });
                };

                p.windowResized = () => {
                    p.resizeCanvas(p.windowWidth, p.windowHeight);
                };
            };

            if (containerRef.current) {
                const p5Instance = new p5(sketch, containerRef.current);
                return () => {
                    p5Instance.remove();
                };
            }
        });
    }, []); // 初期化時のみ

    return <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none" />;
}
