
import 'whatwg-fetch';
import Promise from 'promise-polyfill';
import {Fragmen} from './fragmen.js';

let editor = null;
let canvas = null;
let lineout = null;
let fragmen = null;

window.addEventListener('DOMContentLoaded', () => {
    editor = editorSetting();
    canvas = document.querySelector('#webgl');
    lineout = document.querySelector('#lineout');
    window.addEventListener('resize', resize, false);
    resize();

    const option = {
        target: canvas,
        eventTarget: canvas,
        mouse: true,
        resize: true,
        escape: false
    };
    fragmen = new Fragmen(option).render(DEFAULT_SOURCE);
    fragmen.onBuild((status, message) => {
        lineout.classList.remove('warn');
        lineout.classList.remove('error');
        lineout.classList.add(status);
        lineout.textContent = message;
    });

    lineout.textContent = ' > ready';
}, false);

function resize(){
    const canvas = document.querySelector('#webgl');
    const bound = canvas.parentElement.getBoundingClientRect();
    canvas.width = bound.width;
    canvas.height = bound.height;
}

function update(source){
    if(fragmen == null){return;}
    fragmen.render(source);
}

function editorSetting(){
    const editor = ace.edit('editor');
    editor.setTheme('ace/theme/merbivore_soft');
    editor.session.setOption("indentedSoftWrap", false);
    editor.session.setUseWrapMode(true);
    editor.session.setMode('ace/mode/glsl');
    editor.session.setTabSize(2);
    editor.session.setUseSoftTabs(true);
    editor.$blockScrolling = Infinity;
    editor.setShowPrintMargin(false);
    editor.setHighlightSelectedWord(true);
    editor.setValue(DEFAULT_SOURCE);

    let timeoutId = null;
    editor.session.on('change', (evt) => {
        if(timeoutId != null){
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            timeoutId = null;
            update(editor.getValue());
        }, 1000);
    });
    setTimeout(() => {editor.gotoLine(1);}, 100);
    return editor;
}

const DEFAULT_SOURCE = `precision mediump float;
uniform vec2  resolution;     // resolution (width, height)
uniform vec2  mouse;          // mouse      (0.0 ~ 1.0)
uniform float time;           // time       (1second == 1.0)
uniform sampler2D backbuffer; // previous scene

const float PI = 3.1415926;

vec3 hsv(float h, float s, float v){
    vec4 t = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(vec3(h) + t.xyz) * 6.0 - vec3(t.w));
    return v * mix(vec3(t.x), clamp(p - vec3(t.x), 0.0, 1.0), s);
}

void main(){
    vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / resolution;
    vec3 line = vec3(0.0);
    for(float fi = 0.0; fi < 50.0; ++fi){
        float offset = fi * PI / 100.0;
        float value = 1.0 + sin(time * fi * 0.15 + 0.1) * 0.5;
        float timer = time * fi * 0.01;
        vec3  color = hsv((fi + time) * 0.0175, 1.0, value);
        line += 0.0025 / abs(p.y + sin(p.x * 1.0 + timer + offset) * 0.75) * color;
    }
    gl_FragColor = vec4(line, 1.0);
}`;


