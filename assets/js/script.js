// "use strict";

// {
//     const hamburger = document.querySelector(".hamburger");
//     const nav = document.querySelector(".nav");

//     hamburger.addEventListener("click", () => {
//         hamburger.classList.toggle("open");
//         nav.classList.toggle("open");
//     });
// }

const enemyHP1=document.getElementById("enemy_hp");
const attackBtn=document.getElementById("command1");
const guardBtn=document.getElementById("command2");
const spellBtn=document.getElementById("command3");
const itemBtn=document.getElementById("command4");

const logList=document.querySelector(".rog_box ul");
// 敵の初期HP
let enemyHP=100;
let playerHP=100;

// HP表示
function updateEnemyHP(){
  document.getElementById("enemy_hp").textContent="敵のHP:"+enemyHP;
};

const addLog=(message,{maxEntries=100}={})=>{
  const logList=document.querySelector(".rog_box ul")
  if(!logList)return;
  const li=document.createElement("li");
  li.textContent=String(message);
  logList.appendChild(li);


while(logList.children.length>maxEntries){
  logList.removeChild(logList.firstElementChild);
}
const parent=logList.parentElement||logList;
parent.scrollTop=parent.scrollHeight;
};
window.alert=(msg)=>{
  addLog(msg);
};


  // 攻撃
  document.getElementById("command1").addEventListener("click",function(){
    const damage=Math.floor(Math.random()*20)+5;
    // const damage=my_power+weapon_power;
    enemyHP-=damage;
    if(enemyHP<0){
      enemyHP=0;
      updateEnemyHP();
      alert("敵を倒した！");
      const item=DROP_RATE=0.2;
      
      
      }else{
        updateEnemyHP();
      alert("攻撃！ 敵に"+damage+"のダメージ！");
      }
    })
  window.onload=updateEnemyHP;

  // 防御
  document.getElementById("command2").addEventListener("click",function(){
    addLog("防御！次の被ダメージを軽減する準備をした。");

  });
// 呪文
  document.getElementById("command3").addEventListener("click",function(){
    const damage=Math.floor(Math.random()*20)+5;
    // const damage=my_power+weapon_power;
    enemyHP-=damage;
    if(enemyHP<0){
      enemyHP=0;
      updateEnemyHP();
      alert("敵を倒した！");
      
      }else{
        updateEnemyHP();
      alert("呪文！ 火炎に包まれ"+damage+"のダメージ！");
      }
    })
  window.onload=updateEnemyHP;

  // アイテム
  document.getElementById("command4").addEventListener("click",function(){
    

  })

  


