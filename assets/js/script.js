document.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.getElementById("back_index");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }
});

// 定義
const enemyHP1=document.getElementById("enemy_hp");
const attackBtn=document.getElementById("command1");
const guardBtn=document.getElementById("command2");
const spellBtn=document.getElementById("command3");
const itemBtn=document.getElementById("command4");
const logList=document.querySelector(".rog_box ul");
const inventoryBox=document.querySelector(".inventory_box");
const battleToggleBtn=document.getElementById("battle_toggle");
const commandPanel=document.querySelector(".command_all");

// === GOLD（所持金） ===
// 初期
let gold = 500; 

function ensureGoldUI(){
  
}
function updateGoldUI(){
  
  
  // ステータスパネルが開いていたら再描画
  const box = document.getElementById("status_box");
  if (box && box.classList.contains("is-open")) updateStatusUI();
}

// 討伐時のゴールド報酬
function getGoldReward(enemy, stage){
  const s = stage || 1;
  const base = 5 + s * 2;     // ステージで増える
  const variance = rand(0, 4); // 少しブレ
  return base + variance;
}

// ===== ステータスパネル =====
function ensureStatusBox(){
  let box = document.getElementById("status_box");
  if (!box) {
    box = document.createElement("div");
    box.id = "status_box";
    box.className = "status_box";
    
    
    const host = document.querySelector(".command_list") 
    // 敵HP表示の直後に差し込む
    const enemyHpNode = document.getElementById("enemy_hp");
    host.insertBefore(box, (enemyHpNode ? enemyHpNode.nextSibling : host.firstChild));
  }
  return box;
}

function formatLine(label, value){
  return `<div><span style="display:inline-block;min-width:90px;color:#555;">${label}</span>${value}</div>`;
}

function updateStatusUI(){
  const box = ensureStatusBox();

  // 既存の数値が無い場合でも落ちないようフォールバック
  const lv    = (typeof playerLevel    === "number") ? playerLevel    : 1;
  const exp   = (typeof playerExp      === "number") ? playerExp      : 0;
  const next  = (typeof playerNextExp  === "number") ? playerNextExp  : 10;
  const hpMax = (typeof playerMaxHP    === "number") ? playerMaxHP    : 100;
  const mp    = (typeof playerMP       === "number") ? playerMP       : null;
  const mpMax = (typeof playerMaxMP    === "number") ? playerMaxMP    : null;

  const hasStats = (typeof stats === "object" && stats);
  const STR = hasStats && typeof stats.STR === "number" ? stats.STR : null;
  const MAG = hasStats && typeof stats.MAG === "number" ? stats.MAG : null;
  const AGL = hasStats && typeof stats.AGL === "number" ? stats.AGL : null;
  const GRD = hasStats && typeof stats.GRD === "number" ? stats.GRD : null;
  const LUCK= hasStats && typeof stats.LUCK=== "number" ? stats.LUCK: null;

  let html = `<div style="font-weight:600;margin-bottom:6px;">現在のステータス</div>`;
  html += formatLine("レベル", `Lv.${lv}`);
  html += formatLine("経験値", `${exp}/${next}`);
  html += formatLine("HP", `${playerHP}/${hpMax}`);
  if (mp !== null && mpMax !== null) {
    html += formatLine("MP", `${mp}/${mpMax}`);
  }
  html += formatLine("所持金", `${gold}G`);
  if (STR !== null || MAG !== null || AGL !== null || GRD !== null || LUCK !== null) {
    html += `<div style="margin-top:6px;color:#555;">— 能力値 —</div>`;
    if (STR !== null)  html += formatLine("STR（力）",  STR);
    if (MAG !== null)  html += formatLine("MAG（魔）",  MAG);
    if (AGL !== null)  html += formatLine("AGL（速）",  AGL);
    if (GRD !== null)  html += formatLine("GRD（防）",  GRD);
    if (LUCK !== null) html += formatLine("LUCK（運）", LUCK);
  }
  // 装備表示（EQUIP がまだ未定義でも落ちないようにガード）
  const weaponName = (typeof EQUIP !== "undefined" && EQUIP && EQUIP.weapon) ? EQUIP.weapon : "—";
  html += `<div style="margin-top:6px;color:#555;">— 装備 —</div>`;
  html += formatLine("武器", weaponName);

  const armorName = (typeof EQUIP !== "undefined" && EQUIP && EQUIP.armor) ? EQUIP.armor : "—";
  html += formatLine("防具", armorName);
  box.innerHTML = html;
}

function toggleStatusUI(){
  const box = ensureStatusBox();
  const isOpen = box.classList.contains("is-open");
  if (isOpen) {
    box.classList.remove("is-open");
    box.style.display = "none";
  } else {
    updateStatusUI();            // 開く直前に最新値で再描画
    box.classList.add("is-open");
    box.style.display = "block";
  }
}

// ステータスボタンにトグルを割り当て
const statusBtn = document.getElementById("status_btn");
if (statusBtn) {
  statusBtn.addEventListener("click", toggleStatusUI);
}

if(battleToggleBtn && commandPanel){
  battleToggleBtn.addEventListener("click",()=>{
    commandPanel.classList.toggle("is-open");
    battleToggleBtn.textContent=commandPanel.classList.contains("is-open")?"閉じる":"戦う";
  });
}

function refreshStatusIfOpen(){
  const box = document.getElementById("status_box");
  if (box && box.classList.contains("is-open")) {
    updateStatusUI();
  
  }
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
// 敵と味方の初期ステータス
let enemyHP=100;
let playerHP=100;
let playerMaxMP=30;
let playerMP=playerMaxMP;
const SPELL_COST=5;

function ensureMPUI(){
  
}

function updatePlayerMP(){
  refreshStatusIfOpen();
}


let isGuarding=false;

let playerLevel=1;
let playerExp=0;
let playerNextExp=10;
let playerMaxHP=100;

const stats={HP:100,STR:12,MAG:6,AGL:12,GRD:10,LUCK:10};
const GROWTH={HP:0.7,STR:0.8,MAG:0.3,AGL:0.7,GRD:0.8,LUCK:0.6};

function ensureStatusUI(){
  if(document.getElementById("status_bar")) return;
  const bar=document.createElement("div");
    
  const host = document.querySelector(".command_list") || document.body;
  const playerHpNode = document.getElementById("player_hp");
  host.insertBefore(bar, playerHpNode || host.firstChild);
}

// === 装備システム ===
const EQUIP = { weapon: null,armor:null }; // 今は武器だけ。増やすなら armor, accessory など

const EQUIP_BONUS = {
  weapon: {
    "レイピア": { STR: 5 },   // レイピア装備でSTR+5
    // 例: "バスタードソード": { STR: 8 },
  },
  armor:{
    "棘の鎧":{GRD:5},
  }
};

// 能力値ボーナスの適用/解除
function applyBonus(bonus, sign) {
  if (!bonus) return;
  for (const [k, v] of Object.entries(bonus)) {
    if (typeof stats[k] === "number") stats[k] += sign * v;
  }
}

// 装備する（同スロットは付け替え。前のボーナスを外してから新しいボーナスを付与）
function equipItem(slot, itemName) {
  const prev = EQUIP[slot];
  if (prev && EQUIP_BONUS[slot]?.[prev]) {
    applyBonus(EQUIP_BONUS[slot][prev], -1); // 解除
  }
  EQUIP[slot] = itemName;
  if (EQUIP_BONUS[slot]?.[itemName]) {
    applyBonus(EQUIP_BONUS[slot][itemName], +1); // 付与
  }
  addLog(`${itemName}を装備した！`);
  updateLevelExpUI();
  updateStatusUI();
}

function updateLevelExpUI() {
  ensureStatusUI();
  const lv = document.getElementById("player_lv_label");
  const ex = document.getElementById("player_exp_label");
  const gd = document.getElementById("player_gold_label");
  if (lv) lv.textContent = `Lv.${playerLevel}`;
  if (ex) ex.textContent = `EXP: ${playerExp}/${playerNextExp}`;
  if (gd) gd.textContent = `G:${gold}`;  
  refreshStatusIfOpen();
}

// レベルアップダイアログを開く（既存の levelUp() の最後で呼ぶ想定）
// before/after は { level, maxHP, STR, MAG, AGL, GRD, LUCK } を持つオブジェクト
// gainsText は "STR+1 / MAG+1" のような文字列
function showLevelUpPanel(before, after, gainsText) {
  const ov = document.getElementById("lvup_overlay");
  const ok = document.getElementById("lv_ok_btn");
  if (!ov || !ok) return;

  // 値を流し込み（undefinedでも落ちないようにフォールバック）
  setText("lv_from",  get(before, "level"));
  setText("lv_to",    get(after,  "level"));

  setText("hp_from",  get(before, "maxHP"));
  setText("hp_to",    get(after,  "maxHP"));

  setText("str_from", get(before, "STR"));
  setText("str_to",   get(after,  "STR"));

  setText("mag_from", get(before, "MAG"));
  setText("mag_to",   get(after,  "MAG"));

  setText("agl_from", get(before, "AGL"));
  setText("agl_to",   get(after,  "AGL"));

  setText("grd_from", get(before, "GRD"));
  setText("grd_to",   get(after,  "GRD"));

  setText("luk_from", get(before, "LUCK"));
  setText("luk_to",   get(after,  "LUCK"));

  setText("lv_gains", gainsText || "—");

  // 表示
  openOverlay(ov, ok);

  // 閉じるハンドラ
  const onClose = () => closeOverlay(ov);
  ok.onclick = onClose;

  // ESCキー・背景クリックでも閉じる
  const onKey = (e) => { if (e.key === "Escape") onClose(); };
  const onBg  = (e) => { if (e.target === ov) onClose(); };

  document.addEventListener("keydown", onKey);
  ov.addEventListener("click", onBg);

  // 後片付け
  function closeOverlay(el) {
    el.classList.remove("is-open");
    el.setAttribute("aria-hidden", "true");
    ok.onclick = null;
    document.removeEventListener("keydown", onKey);
    ov.removeEventListener("click", onBg);
  }
}

// 小道具
function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = String(value ?? "");
}
function openOverlay(overlay, focusEl) {
  overlay.classList.add("is-open");
  overlay.setAttribute("aria-hidden", "false");
  requestAnimationFrame(() => focusEl?.focus());
}
function get(obj, key) {
  return (obj && key in obj) ? obj[key] : "";
}

const rand = (min, max) => Math.floor(Math.random()*(max-min+1))+min;

function gainExp(amount) {
  addLog(`経験値を${amount}手に入れた！`);
  playerExp += amount;
  while (playerExp >= playerNextExp) {
    levelUp();
  }
  updateLevelExpUI();
  refreshStatusIfOpen();
}

function levelUp() {
  const before = {
    level: playerLevel,
    maxHP: playerMaxHP,
    STR: stats.STR,
    MAG: stats.MAG,
    AGL: stats.AGL,
    GRD: stats.GRD,

    LUCK: stats.LUCK
  };

  playerLevel += 1;

  // ステータス成長
  const grew = [];
  for (const key of Object.keys(GROWTH)) {
    if (Math.random() < GROWTH[key]) {
      stats[key] += 1;
      grew.push(`${key}+1`);
    }
  }
// HP成長
  const hpGain = rand(4,7);
  playerMaxHP += hpGain;

  playerExp -= playerNextExp;
  playerNextExp = Math.floor(playerNextExp * 1.35) + 2;

  const after = {
    level: playerLevel,
    maxHP: playerMaxHP,
    STR: stats.STR,
    MAG: stats.MAG,
    GRD: stats.GRD,
    AGL: stats.AGL,
    LUCK: stats.LUCK
  };

  addLog(`レベルが上がった！ Lv.${before.level} → Lv.${after.level}`);
  addLog(`最大HP ${before.maxHP} → ${after.maxHP}`);
  grew.forEach(g => addLog(`ステータス上昇：${g}`));
  updatePlayerHP();
  updateLevelExpUI();

  showLevelUpPanel(before, after, grew.join(" / "));
  refreshStatusIfOpen();
}

function getExpReward(enemy, stage) {
  const s = stage || 1;
  const base = 6 + s * 2;           // ステージに応じて増える
  const variance = rand(0, 3);      // 少しだけブレ
  return base + variance;
}



// HP表示
function updateEnemyHP(){
  let txt = document.getElementById("enemy_hp_text");
  if (!txt) {
    const box = document.getElementById("enemy_hp");
    txt = document.createElement("span");
    txt.id = "enemy_hp_text";
    box?.prepend(txt);
  }
  txt.textContent = "敵のHP:" + enemyHP;
};
function updatePlayerHP(){
  document.getElementById("player_hp").textContent = "あなたのHP:" + playerHP + "/" + playerMaxHP;
  if (playerHP <= 0)  { disableCommands(); showGameOver(); } 
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
const parent=document.querySelector(".rog_box");
if(parent){
  parent.scrollTop=parent.scrollHeight;
}
};
window.alert=(msg)=>{
  addLog(msg);
};

function addToInventory(itemName){
  invAdd(itemName, 1);
  addLog(`${itemName}を手に入れた！`);

    // const list=document.getElementById("inventory_list");
    // if(!list)
    //   return;
    //   const li=document.createElement("li");
    //   li.textContent=itemName;
    //   li.addEventListener("click",()=>{
    //     useItem(li,itemName);
    //   });
    //   list.appendChild(li);
  }

  function useItem(li,itemName){
    switch (itemName) {
      case "薬草":
        playerHP = Math.min(playerMaxHP, playerHP + 20);
        addLog("薬草を使ってHPが20回復した!");
        break;
      case "癒しの果実":
        playerHP = Math.min(playerMaxHP, playerHP + 50);
        addLog("癒しの果実を使ってHPが50回復した!");
        break;
      case "魔力丸":
        playerMP = Math.min(playerMaxMP, playerMP + 20);
        addLog("魔力丸を使ってMPが20回復した!");
        updatePlayerMP();

        
        break;
      case "レイピア":
        equipItem("weapon","レイピア");
        break;
      case "棘の鎧":
        equipItem("armor","棘の鎧");
        break;
      
      default:
        addLog(itemName+"を使った!");
        break;
    }

    updatePlayerHP();
    li.remove();
    invRemove(itemName, 1);
renderInventoryList();  
    if(inventoryBox) inventoryBox.classList.remove("is-open");
    endPlayerAction();
  //   const inCloseBtn=document.getElementById("inv_close");
  // if(invCloseBtn && inventoryBox){
  //   inCloseBtn.addEventListener("click",()=>{
  //     inventoryBox.classList.remove("is-open");
  //   });
  // }
  }

  

function endPlayerAction(){
  if(enemyHP>0){
    enemyTurn();
  }
}


  function randomInt(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
  }

  function enemyTurn(){
    const base=currentEnemy
    ?randomInt(currentEnemy.atkMin,currentEnemy.atkMax)
    :randomInt(5,15);

    let dmg=base;
  addLog("敵の攻撃!");

  // ★ 回避判定（LUCKによる）
  const evasion = calcEvasionChance();
  if (Math.random() < evasion) {
    addLog("素早く身をかわした！ 攻撃を回避した。");
    return; // このターンはノーダメージで終了
  }

  // ★ 回避できなかった場合のみガード判定
  if (isGuarding) {
    dmg = Math.ceil(dmg / 2);
    isGuarding = false;
    addLog("守りでダメージを軽減した！");
  }

  playerHP = Math.max(0, playerHP - dmg);
  addLog("あなたは" + dmg + "のダメージを受けた。");
  updatePlayerHP();
    // ★とげの鎧の効果（敵に反射ダメージ）
  if (EQUIP.armor === "棘の鎧" && dmg > 0) {
    const thorns = Math.ceil(dmg * 0.3); // 被ダメージの30%を反射（調整OK）
    enemyHP = Math.max(0, enemyHP - thorns);
    addLog(`棘の鎧が反撃！ 敵に${thorns}のダメージを与えた！`);
    updateEnemyHP();
    if (enemyHP <= 0) {
      addLog("敵は棘の鎧の反撃で倒れた！");
      // ★ここで倒したときの処理（getGoldReward など）を呼びたいならまとめて関数化するとスッキリします
    }
  }

  if (playerHP <= 0) {
    addLog("目の前が真っ暗になった……。");
    disableCommands();
    showGameOver(); 
    return;
  }

  
  
}
function setCommandsEnabled(on){
  [attackBtn, guardBtn, spellBtn, itemBtn].forEach(b=>{
    if (b) b.disabled = !on;
  });
}
function disableCommands(){ setCommandsEnabled(false); }
function enableCommands(){ setCommandsEnabled(true); }




// finction disableCommands(){
//   [attackBtn,guardBtn,spellBtn,itemBtn].forEach(b>={if(b) b.dasabled=true;});
// }



  // 攻撃
  document.getElementById("command1").addEventListener("click", function(){
  actWithInitiative(function playerAttack(){
    const str = (typeof stats?.STR === "number") ? stats.STR : 0;
    const base = Math.floor(Math.random()*20)+5;   // 5〜24
    const strBonus = Math.floor(str * 0.7);
    const damage = base + strBonus;

    enemyHP = Math.max(0, enemyHP - damage);

    if (enemyHP <= 0) {
      updateEnemyHP();
      alert("攻撃！ 敵に" + damage + "のダメージ！");
      alert("敵を倒した！");
      if (stage === BOSS_STAGE) {
  addLog("★ ボスを打ち倒した！ 世界に平和が訪れた…");
  // 任意：特別報酬
  const bonus = 500;
  gold += bonus; updateGoldUI();
  addLog(`特別報酬 ${bonus}G を手に入れた！（所持金：${gold}G）`);
}
      const g = getGoldReward(currentEnemy, stage);
      gold += g; updateGoldUI(); addLog(`${g}G 手に入れた！（所持金：${gold}G）`);

      const exp = getExpReward(currentEnemy, stage);
      gainExp(exp);

      const item = rollDrop();
      if (item){ addToInventory(item); addLog("戦利品:"+item+"を手に入れた！"); }
      else { addLog("戦利品はなかった"); }

      spawnNextEnemy();
    } else {
      updateEnemyHP();
      alert("攻撃！ 敵に" + damage + "のダメージ！");
    }
  });
});
      
  
  window.addEventListener("DOMContentLoaded",()=>{
    updateEnemyHP();
    updatePlayerHP();

  });

  // 防御
  document.getElementById("command2").addEventListener("click", function(){
  actWithInitiative(function playerGuard(){
    isGuarding = true;
    addLog("防御！次の被ダメージを軽減する準備をした。");
    // 先手プレイヤーでも、このターンは攻撃しない想定の単発行動
  });
});

// 呪文
  document.getElementById("command3").addEventListener("click", function(){
  actWithInitiative(function playerCast(){
    if (playerMP < SPELL_COST) { addLog("MPが足りない!"); return; }
    playerMP -= SPELL_COST; updatePlayerMP();

    const damage = calcSpellDamage();
    enemyHP = Math.max(0, enemyHP - damage);

    if (enemyHP <= 0) {
      updateEnemyHP();
      alert(`呪文！ 火炎に包まれ${damage}のダメージ!（MP-${SPELL_COST}）`);
      alert("敵を倒した！");
      if (stage === BOSS_STAGE) {
  addLog("★ ボスを打ち倒した！ 世界に平和が訪れた…");
  // 任意：特別報酬
  const bonus = 500;
  gold += bonus; updateGoldUI();
  addLog(`特別報酬 ${bonus}G を手に入れた！（所持金：${gold}G）`);
}
      const g = getGoldReward(currentEnemy, stage);
      gold += g; updateGoldUI(); addLog(`${g}G 手に入れた！（所持金：${gold}G）`);

      const exp = getExpReward(currentEnemy, stage);
      gainExp(exp);

      const item = rollDrop();
      if (item){ addToInventory(item); addLog("戦利品:" + item + "を手に入れた！"); }
      else { addLog("戦利品はなかった"); }

      spawnNextEnemy();
    } else {
      updateEnemyHP();
      alert(`呪文！ 火炎に包まれ${damage}のダメージ!（MP-${SPELL_COST}）`);
    }
  });
});


  // INTステがあればダメージに反映（なければ0）(
  function calcSpellDamage(){
    const magStat = (typeof stats?.MAG === "number") ? stats.MAG : 0;
    const base = Math.floor(Math.random() * 11) + 15;
    return base + magStat * 3;
  }
    function calcEvasionChance(){
  const luck = (typeof stats?.LUCK === "number") ? stats.LUCK : 0;
  // 回避率 = 5% + LUCK×0.5%（上限35%）
  // 例: LUCK=10 → 10% / LUCK=20 → 15%
  const chance = 0.05 + luck * 0.005;
  return Math.min(chance, 0.35);
}
// ===== 行動順（AGL） =====
function rollInitiativeScore(agl){
  // 小さなゆらぎを与える（-2〜+2）
  return (typeof agl === "number" ? agl : 0) + rand(-2, 2);
}

// プレイヤーが先に動くか？
function shouldPlayerActFirst(){
  const pAGL = (typeof stats?.AGL === "number") ? stats.AGL : 0;
  const eAGL = (currentEnemy && typeof currentEnemy.agl === "number") ? currentEnemy.agl : 0;
  return rollInitiativeScore(pAGL) >= rollInitiativeScore(eAGL);
}

/**
 * ラウンドの実行：
 * - 先手側の行動 -> 生存していれば後手側の行動
 * - playerAct は「プレイヤー行動」を**関数**で渡す
 */
function actWithInitiative(playerAct){
  if (shouldPlayerActFirst()) {
    // 先にプレイヤー
    playerAct();
    if (enemyHP > 0) enemyTurn();
  } else {
    // 先に敵
    enemyTurn();
    if (playerHP > 0) playerAct();
  }
}
function endPlayerAction(){ /* 行動順は actWithInitiative が面倒を見る */ }


  // アイテム
  document.getElementById("command4").addEventListener("click",function(){
    if(!inventoryBox)return;
    inventoryBox.classList.toggle("is-open");
    // endPlayerAction();
  });

  const enemyPicture=document.querySelector(".game_picture");
  let stage=1;
  let currentEnemy=null;

  const ENEMY_NAMES=["スライム","ゴブリン"];

 

const IMG_BASE = "./assets/img/";

const ENEMY_IMAGES = {
  "スライム": `${IMG_BASE}slime.png`,
  "ゴブリン": `${IMG_BASE}gobrin.png`,
  _default:   `${IMG_BASE}slime.png`, // フォールバック
};

 const BOSS_STAGE = 30;
const BOSS = {
  name: "ドラゴン",
  hp: 600,
  atkMin: 15,
  atkMax: 35,
  agl: 18,
  img: `${IMG_BASE}boss.png`, // assets/img/boss.png を用意
};
  function makeEnemy(stage){
    if (stage === BOSS_STAGE) {
    return { ...BOSS }; // ボスは定義通り固定
  }
    const name=ENEMY_NAMES[(stage-1)%ENEMY_NAMES.length];
    const hp=20+stage*2;
    const atkMin=1+stage*1;
    const atkMax=2+stage*1;
    const agl = 6 + stage*0.4;  
    return{name,hp,atkMin,atkMax,agl,img:getEnemyImage(name)};
  }
  
  function loadEnemy(enemy){
  currentEnemy = enemy;
  enemyHP = enemy.hp;
  isGuarding = false;
  updateEnemyHP();

  if (enemyPicture) {
    enemyPicture.style.backgroundImage = enemy.img ? `url(${enemy.img})` : "";
    enemyPicture.setAttribute("aria-label", enemy.name);
    enemyPicture.setAttribute("data-enemy", enemy.name);


    // ★ ボス時は少し大きく/赤枠など（CSS側でも調整可）
    enemyPicture.classList.toggle("is-boss", stage === BOSS_STAGE);
  }

  if (stage === BOSS_STAGE) {
    addLog(`⚠ ${enemy.name} が出現！(Lv.${stage})`);
    addLog("世界が震える…強大な気配を感じる！");
  } else {
    addLog(`${enemy.name}が現れた！(Lv.${stage})`);
  }
}



  

  // 名前→画像パスの対応表（好きなだけ追加）
// 画像のベースパス（HTMLからの相対。index.html と assets/ の位置に合わせて調整）


function getEnemyImage(name){
  const src = ENEMY_IMAGES[name];
  if (src) return src;
  addLog(`画像未定義の敵名「${name}」 → フォールバックを使用`);
  return ENEMY_IMAGES._default;

}

// （任意）事前読み込みで表示チラつき軽減
function preloadEnemyImages(){
  Object.values(ENEMY_IMAGES).forEach(src=>{
    if(!src) return;
    const img = new Image();
    img.src = src;
  });
}
document.addEventListener("DOMContentLoaded", preloadEnemyImages);

function renderInventoryList(){
  const ul = document.getElementById("inventory_list");
  if(!ul) return;
  ul.innerHTML = "";
  // 名前でソート（任意）
  const items = Array.from(INV.entries()).sort((a,b)=>a[0].localeCompare(b[0],'ja'));
  for(const [name,count] of items){
    const li = document.createElement("li");
    li.textContent = `${name} ×${count}`;
    // クリックで使用（既存ロジック使う）
    li.addEventListener("click", ()=>{
      useItem(li, name); // useItem内で li.remove() をしているのでDOM直消し → ここは無視されてもOK
    });
    ul.appendChild(li);
  }
}

  function spawnNextEnemy(delayMs=800){
    const next=makeEnemy(++stage);
    setTimeout(()=>loadEnemy(next),delayMs);
  }
// ==== 商品テーブル（必要なら別ファイルでもOK） ====
const SHOP_ITEMS = [
  { key: "herb",   name: "薬草",       price: 50  },
  { key: "fruit",  name: "癒しの果実", price: 100 },
  { key: "mana",   name: "魔力丸",     price: 150 },
  { key: "rapier", name: "レイピア",   price: 500 },
  { key: "thorn", name: "棘の鎧",   price: 1000 },
  
];

// 名前→メタ（price等）検索
function findItemByName(name){
  return SHOP_ITEMS.find(it => it.name === name) || null;
}
// 売値（デフォルトは買値の50% / 無登録は10G）
function getSellPrice(name){
  const meta = findItemByName(name);
  if (meta) return Math.max(1, Math.floor(meta.price * 0.5));
  return 10;
}

const INV = new Map(); // name -> count

function invAdd(name, n=1){
  INV.set(name, (INV.get(name)||0) + n);
  renderInventoryList();
}
function invRemove(name, n=1){
  const cur = INV.get(name)||0;
  const next = Math.max(0, cur - n);
  if (next === 0) INV.delete(name); else INV.set(name, next);
  renderInventoryList();
}
function invCount(name){ return INV.get(name)||0; }


const SHOP_DETAIL = {
  herb:  { desc: "シンプルな回復薬。", effect: "HPを20回復（即時）" },
  fruit: { desc: "みずみずしい果実。", effect: "HPを50回復（即時）" },
  mana:  { desc: "濃縮された魔力の玉。", effect: "MPを20回復（即時）" },
  rapier:{ desc: "細身の剣。扱いやすい。", effect: "装備でSTR+5（武器）" },
  thorn:{ desc: "返しの生えた鎧。", effect: "被ダメージの一部を反射(防具)" }
};



// gold / addToInventory / updateGoldUI / addLog は既存のゲーム側で定義済みを想定
// 無ければ最低限こういう形： let gold = 0; function addToInventory(){}

let SHOP_MODE = "buy"; // "buy" | "sell"

function renderShopList(){
  const ul = document.getElementById("shop_list");
  if(!ul) return;
  ul.innerHTML = "";

  if (SHOP_MODE === "buy") {
    // いつもの商品一覧
    SHOP_ITEMS.forEach(it => {
      const li = document.createElement("li");
      li.dataset.key = it.key;

      const info = document.createElement("div");
      const name = document.createElement("div");
      name.className = "shop_item_name";
      name.textContent = it.name;
      const price = document.createElement("div");
      price.className = "shop_item_price";
      price.textContent = `${it.price}G`;
      info.appendChild(name); info.appendChild(price);

      const btn = document.createElement("button");
      btn.className = "shop_buy"; btn.type = "button";
      btn.dataset.key = it.key; btn.textContent = "購入";

      li.appendChild(info); li.appendChild(btn); ul.appendChild(li);

      li.addEventListener("mouseenter", () => updateShopDetail(it.key));
      li.addEventListener("mouseleave", () => updateShopDetail(null));
      li.addEventListener("focusin",    () => updateShopDetail(it.key));
      li.addEventListener("focusout",   () => updateShopDetail(null));
    });
    ensureShopDetailBox();
    updateShopDetail(null);

  } else {
    // 売る：在庫から生成
    const entries = Array.from(INV.entries()).filter(([,cnt])=>cnt>0);
    if (entries.length === 0) {
      const li = document.createElement("li");
      li.textContent = "売れるアイテムがありません。";
      ul.appendChild(li);
      return;
    }
    entries.sort((a,b)=>a[0].localeCompare(b[0], 'ja'));
    entries.forEach(([name, cnt])=>{
      const li = document.createElement("li");
      const info = document.createElement("div");
      const nm = document.createElement("div");
      nm.className = "shop_item_name";
      nm.textContent = `${name} ×${cnt}`;
      const price = document.createElement("div");
      const sp = getSellPrice(name);
      price.className = "shop_item_price";
      price.textContent = `${sp}G で売却`;
      info.appendChild(nm); info.appendChild(price);

      const btn = document.createElement("button");
      btn.className = "shop_sell"; btn.type = "button";
      btn.dataset.name = name; btn.textContent = "売る";

      li.appendChild(info); li.appendChild(btn); ul.appendChild(li);
    });

    // 詳細枠は「売る」モードでは簡略化（任意）
    ensureShopDetailBox();
    updateShopDetail(null, /*showHintIfNull=*/false);
  }
}
function ensureShopDetailBox() {
  const box = document.getElementById("shop_box");
  if (!box) return null;

  let detail = document.getElementById("shop_detail");
  if (!detail) {
    detail = document.createElement("div");
    detail.id = "shop_detail";
    detail.style.cssText = `
      margin-top:10px;padding:10px;border:1px solid #ccc;border-radius:8px;
      background:#fff; font-size:10px; line-height:1.5;height:90px
    `;
    detail.innerHTML = `
      <div id="sd_name" style="font-weight:700;margin-bottom:4px;">—</div>
      <div id="sd_price" style="color:#555;margin-bottom:4px;">—</div>
      <div id="sd_desc">カーソルを合わせると詳細が表示されます。</div>
      <div id="sd_effect" style="margin-top:6px;color:#2a5;"> </div>
    `;
     box.appendChild(detail);
  }
  return detail;
}

function updateShopDetail(key, showHintIfNull = true) {
  const detail = ensureShopDetailBox();
  if (!detail) return;

  const nameEl = detail.querySelector("#sd_name");
  const priceEl = detail.querySelector("#sd_price");
  const descEl = detail.querySelector("#sd_desc");
  const effEl = detail.querySelector("#sd_effect");

  if (!key) {
    nameEl.textContent = "—";
    priceEl.textContent = "—";
    descEl.textContent = showHintIfNull ? "カーソルを合わせると詳細が表示されます。" : "";
    effEl.textContent = "";
    return;
  }

  const item = SHOP_ITEMS.find(i => i.key === key);
  const meta = SHOP_DETAIL[key];

  nameEl.textContent = item ? item.name : key;
  priceEl.textContent = item ? `${item.price}G` : "";
  descEl.textContent = meta?.desc || "";
  effEl.textContent = meta?.effect ? `効果：${meta.effect}` : "";
}

function toggleShop(force) {
  const box = document.getElementById("shop_box");
  if (!box) return;
  const willOpen = (force === true) || (force !== false && !box.classList.contains("is-open"));
  box.classList.toggle("is-open", willOpen);
  box.setAttribute("aria-hidden", willOpen ? "false" : "true");

  // 所持金の最新表示
  const gEl = document.getElementById("shop_gold");
  if (gEl) gEl.textContent = `${(typeof gold !== "undefined" ? gold : 0)}G`;

  if (willOpen) {
    ensureShopDetailBox();
    updateShopDetail(null);
  }
}

function buyItem(item) {
  if (typeof gold === "undefined") { console.warn("gold が未定義です"); return; }
  if (gold < item.price) {
    if (typeof addLog === "function") addLog("お金が足りない！");
    return;
  }

  gold -= item.price;
  if (typeof updateGoldUI === "function") updateGoldUI(); // 画面側の所持金表示
  if (typeof addToInventory === "function") addToInventory(item.name);
  if (typeof addLog === "function") addLog(`${item.name}を購入した！（-${item.price}G / 所持金：${gold}G）`);

  const gEl = document.getElementById("shop_gold");
  if (gEl) gEl.textContent = `${gold}G`;
}
function sellItem(name){
  // 装備中ガード（装備品は外してから売る）
  if (EQUIP.weapon === name || EQUIP.armor === name) {
    addLog(`${name}は装備中のため売れません。装備を外してください。`);
    return;
  }
  if (invCount(name) <= 0){ addLog(`${name}は持っていない。`); return; }

  const price = getSellPrice(name);
  invRemove(name, 1);
  gold += price;
  updateGoldUI?.();
  renderShopList();
  addLog(`${name}を${price}Gで売った！（所持金：${gold}G）`);
  // ステータス開いていたら更新
  refreshStatusIfOpen();
}

function wireShopEvents() {
  document.getElementById("shop_btn")?.addEventListener("click", () => {
    SHOP_MODE = "buy"; setShopTabUI(); renderShopList(); toggleShop(true);
  });
  document.getElementById("shop_close")?.addEventListener("click", () => toggleShop(false));

  const tabBuy  = document.getElementById("shop_tab_buy");
  const tabSell = document.getElementById("shop_tab_sell");
  tabBuy?.addEventListener("click", ()=>{ SHOP_MODE="buy";  setShopTabUI(); renderShopList(); });
  tabSell?.addEventListener("click", ()=>{ SHOP_MODE="sell"; setShopTabUI(); renderShopList(); });

  // 購入
  document.getElementById("shop_list")?.addEventListener("click", (e) => {
    const buyBtn = e.target.closest("button.shop_buy");
    if (buyBtn) {
      const key = buyBtn.dataset.key;
      const item = SHOP_ITEMS.find(i => i.key === key);
      if (item) buyItem(item);
      return;
    }
    // 売却
    const sellBtn = e.target.closest("button.shop_sell");
    if (sellBtn) {
      const name = sellBtn.dataset.name;
      sellItem(name);
      return;
    }
  });
}
function setShopTabUI(){
  document.getElementById("shop_tab_buy")?.classList.toggle("is-active", SHOP_MODE==="buy");
  document.getElementById("shop_tab_sell")?.classList.toggle("is-active", SHOP_MODE==="sell");
}

// === Game Over Overlay ===
function ensureGameOverOverlay(){
  let ov = document.getElementById("gameover_overlay");
  if (ov) return ov;

  ov = document.createElement("div");
  ov.id = "gameover_overlay";
  ov.className = "overlay";     // 既存CSSの .overlay/.is-open を使う想定（なければ下に簡易CSS例あり）
  ov.setAttribute("aria-hidden", "true");

  ov.innerHTML = `
     <div class="overlay-panel" role="dialog" aria-labelledby="go_title">
    <div id="go_title" style="font-size:20px;font-weight:700;margin-bottom:8px;">ゲームオーバー</div>
    <div style="margin-bottom:12px;color:#555;">あなたは倒れてしまった…</div>
    <div style="display:flex; gap:8px; justify-content:center;">
      <button id="go_retry"  type="button">リトライ</button>
      <button id="go_close"  type="button">閉じる</button>
      <button id="go_index"  type="button">タイトルへ戻る</button>
    </div>
  </div>
`;
  document.body.appendChild(ov);
  return ov;
}

function showGameOver(){
  const ov = ensureGameOverOverlay();
  const retry = ov.querySelector("#go_retry");
  const closeBtn = ov.querySelector("#go_close");
  const indexBtn= ov.querySelector("#go_index");

  // ボタン挙動
  retry.onclick = () => {
    closeGameOverOverlay();
    restartBattle();      // 下の「リスタート処理」を呼ぶ
  };
  closeBtn.onclick = closeGameOverOverlay;
  indexBtn.onclick = () => {
    window.location.href = "index.html";   // ←ここでタイトルへ戻る
  };

  function closeGameOverOverlay(){
    ov.classList.remove("is-open");
    ov.setAttribute("aria-hidden", "true");
  }

  openOverlay(ov, retry); // 既存の openOverlay を使用
}

function restartBattle(){
  // 必要に応じて復帰値を調整
  playerHP = Math.min(playerMaxHP, Math.max(1, Math.floor(playerMaxHP * 0.5))); // 最大HPの50%で復帰
  playerMP = playerMaxMP;
  isGuarding = false;

  // 敵を同じステージで出し直し
  currentEnemy = makeEnemy(stage);
  loadEnemy(currentEnemy);

  // UI反映
  updatePlayerHP();
  updatePlayerMP();
  enableCommands();

  addLog("気力を振り絞って立ち上がった！（再挑戦）");
}



document.addEventListener("DOMContentLoaded", () => {
  renderShopList();
  wireShopEvents();
  // 初期表示の所持金
  const gEl = document.getElementById("shop_gold");
  if (gEl && typeof gold !== "undefined") gEl.textContent = `${gold}G`;
});

  
  window.addEventListener("DOMContentLoaded",()=>{
    loadEnemy(makeEnemy(stage))
    updatePlayerHP();
    updateLevelExpUI();
    updateGoldUI();  
    updatePlayerMP();
    enableCommands(); 
    document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("player_mp")?.remove();
  document.getElementById("player_gold")?.remove();
});
  });





  

  


