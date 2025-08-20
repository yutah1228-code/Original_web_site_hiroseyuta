// "use strict";

// {
//     const hamburger = document.querySelector(".hamburger");
//     const nav = document.querySelector(".nav");

//     hamburger.addEventListener("click", () => {
//         hamburger.classList.toggle("open");
//         nav.classList.toggle("open");
//     });
// }

// 定義
const enemyHP1=document.getElementById("enemy_hp");
const attackBtn=document.getElementById("command1");
const guardBtn=document.getElementById("command2");
const spellBtn=document.getElementById("command3");
const itemBtn=document.getElementById("command4");
const logList=document.querySelector(".rog_box ul");

const battleToggleBtn=document.getElementById("battle_toggle");
const commandPanel=document.querySelector(".command_all");

if(battleToggleBtn && commandPanel){
  battleToggleBtn.addEventListener("click",()=>{
    commandPanel.classList.toggle("is_open");
    battleToggleBtn.textContent=commandPanel.classList.contains("is_open")?"閉じる":"戦う";
  });
}

// アイテム管理
const DROP_RATE=0.3;
const DROP_TABLE=[
  {name:"薬草",weight:50},
  {name:"癒しの果実",weight:10},
  {name:"魔力丸",weight:10},
  {name:"レイピア",weight:2},
];

function rollDrop(){
  if(Math.random()>=DROP_RATE)return null;
  return weightedPick(DROP_TABLE).name;
}


function weightedPick(table){
  const total=table.reduce((s,it)=>s+it.weight,0);
  let r=Math.random()*total;
  for(const it of table){
    r-=it.weight;
    if(r<=0)return it;
  }
  return table[table.length-1];
}
// 敵と味方の初期HP
let enemyHP=100;
let playerHP=100;
let isGuarding=false;

// HP表示
function updateEnemyHP(){
  document.getElementById("enemy_hp").textContent="敵のHP:"+enemyHP;
};
function updatePlayerHP(){
  document.getElementById("player_hp").textContent="あなたのHP:"+playerHP;
};

// ログ表示
const addLog=(message,{maxEntries=100}={})=>{
  const logList=document.querySelector(".rog_box ul")
  if(!logList){return;
  }else{
  const li=document.createElement("li");
  li.textContent=String(message);
  logList.appendChild(li);
  }
while(logList.children.length>maxEntries){
  logList.removeChild(logList.firstElementChild);
}
const parent=logList.parentElement||logList;
parent.scrollTop=parent.scrollHeight;
};
window.alert=(msg)=>{
  addLog(msg);
};

function addToInventory(itemName){
    const list=document.getElementById("inventory_list");
    if(!list)
      return;
      const li=document.createElement("li");
      li.textContent=itemName;
      list.appendChild(li);
  }

function endPlayerAction(){
  if(enemyHP>0){
    enemyTurn();
  }
}

function enemyTurn(){
  let dmg=Math.floor(Math.random()*11)+5;
  if(isGuarding){
    dmg=Math.ceil(dmg/2);
    isGuarding=false;
    addLog("敵の攻撃!守りでダメージを軽減した！");
  }else{
    addLog("敵の攻撃!")
  }

  playerHP=Math.max(0,playerHP-dmg);
  addLog("あなたは"+dmg+"のダメージを受けた。");
  updatePlayerHP();

  if(playerHP<=0){
    addLog("目の前が真っ暗になった……。");
    // disableCommands();
  }
}

// finction disableCommands(){
//   [attackBtn,guardBtn,spellBtn,itemBtn].forEach(b>={if(b) b.dasabled=true;});
// }



  // 攻撃
  document.getElementById("command1").addEventListener("click",function(){
    const damage=Math.floor(Math.random()*20)+5;
    // const damage=my_power+weapon_power;
    enemyHP=Math.max(0,enemyHP-damage);
    // enemyHP-=damage;
    if(enemyHP<=0){
      enemyHP=0;
      updateEnemyHP();
      alert("敵を倒した！");
      const item=rollDrop();
        if(item){
          addToInventory(item);
          addLog("戦利品:"+item+"を手に入れた！");
        }else{
          addLog("戦利品はなかった");
        }
      
        }else{
          updateEnemyHP();
        alert("攻撃！ 敵に"+damage+"のダメージ！");
        endPlayerAction();
        }
      })
  
  window.addEventListener("DOMContentLoaded",()=>{
    updateEnemyHP();
    updatePlayerHP();
  });

  // 防御
  document.getElementById("command2").addEventListener("click",function(){
    isGuarding=true;
    addLog("防御！次の被ダメージを軽減する準備をした。");
    endPlayerAction();

  });
// 呪文
  document.getElementById("command3").addEventListener("click",function(){
    const damage=Math.floor(Math.random()*20)+5;
    // const damage=my_power+weapon_power;
    enemyHP-=damage;
    if(enemyHP<=0){
      enemyHP=0;
      updateEnemyHP();
      alert("敵を倒した！");
      
      }else{
        updateEnemyHP();
      alert("呪文！ 火炎に包まれ"+damage+"のダメージ！");
      endPlayerAction();
      }
    })
  

  // アイテム
  document.getElementById("command4").addEventListener("click",function(){
    endPlayerAction();
    

  })

  


