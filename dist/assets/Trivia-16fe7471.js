import{r as n,j as t}from"./index-fae3dac4.js";const o="/assets/smart-stout-f711eb40.jpg";function l({getData:i}){const[r,e]=n.useState(null);async function a(){let s=await i();e(s.trivia[Math.floor(Math.random()*s.trivia.length)])}return t.jsxs(t.Fragment,{children:[t.jsx("img",{src:o,onClick:a,className:"image"}),t.jsx("br",{}),t.jsx("button",{onClick:a,className:"big-button",children:"Bottoms Up!"}),t.jsx("p",{children:r})]})}export{l as default};
