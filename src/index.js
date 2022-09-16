import react from "../react";
const root = document.getElementById('root')

const virtualDom = (
  <div className="container">
    <h1>你好 great React</h1>
    <h2 data-test="test123">H2 title</h2>
    <div>
      嵌套1 <div>嵌套 1.1</div>
    </div>
    {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
    {2 == 2 && <div>2</div>}
    <button onClick={() => alert("你好!!!!!")}>点击我</button>
    <input type="text" value="13" />
  </div>
)

console.log(virtualDom)

// function txt(){
//   return <div>hello</div>
// }
// console.log(virtualDom)
