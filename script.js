var div=document.createElement('div');
div.innerHTML=`<input type="txt" id="txt">
<button type="button" onclick="foo()">search</button>
<div id="active"></div>`;
document.body.append(div);



async function foo(){
  let ci = document.getElementById("txt").value
  console.log(ci);

  let res = await fetch(`https://api.nationalize.io/?name[]=michael&name[]=matthew&name[]=jane${ci}`)

  let result=await res.json();

  console.log(result);
  var index=result.length-1;
  var result1=result[index].probability;

    document.getElementById("active").innerText=`probability:${result1}`


}