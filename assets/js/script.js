// ===== 初期DOM参照 =====
const backBtn          = document.getElementById("back_index");
const enemyHPBox       = document.getElementById("enemy_hp");
const enemyHPText      = document.getElementById("enemy_hp_text");
const enemyPicture     = document.getElementById("enemy_picture");
const playerHPBox      = document.getElementById("player_hp");

const attackBtn        = document.getElementById("command1");
const guardBtn         = document.getElementById("command2");
const spellBtn         = document.getElementById("command3");
const itemBtn          = document.getElementById("command4");

const logList          = document.querySelector(".rog_box ul");
const inventoryBox     = document.querySelector(".inventory_box");
const inventoryList    = document.getElementById("inventory_list");

const battleToggleBtn  = document.getElementById("battle_toggle");
const commandPanel     = document.querySelector(".command_all");
const statusBtn        = document.getElementById("status_btn");
const statusBox        = document.getElementById("status_box");

const lvupOverlay      = document.getElementById("lvup_overlay");
const lvOkBtn          = document.getElementById("lv_ok_btn");

const shopBtn          = document.getElementById("shop_btn");
const shopBox          = document.getElementById("shop_box");
const shopCloseBtn     = document.getElementById("shop_close");
const shopTabBuy       = document.getElementById("shop_tab_buy");
const shopTabSell      = document.getElementById("shop_tab_sell");
const shopList         = document.getElementById("shop_list");
const shopGoldLabel    = document.getElementById("shop_gold");
const sdName           = document.getElementById("sd_name");
const sdPrice          = document.getElementById("sd_price");
const sdDesc           = document.getElementById("sd_desc");
const sdEffect         = document.getElementById("sd_effect");

const goOverlay        = document.getElementById("gameover_overlay");
const goRetry          = document.getElementById("go_retry");
const goClose          = document.getElementById("go_close");
const goIndex          = document.getElementById("go_index");

// ===== ユーティリティ =====
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// ===== 定数・データ =====
const DROP_RATE = 0.3;
const DROP_TABLE = [
  { name: "薬草",       weight: 50 },
  { name: "癒しの果実", weight: 10 },
  { name: "魔力丸",     weight: 10 },
  { name: "レイピア",   weight: 2  },
];

const IMG_BASE = "./assets/img/";
const ENEMY_IMAGES = {
  "スライム": `${IMG_BASE}slime.png`,
  "ゴブリン": `${IMG_BASE}gobrin.png`,
  _default:   `${IMG_BASE}slime.png`,
};

const ENEMY_NAMES = ["スライム", "ゴブリン"];
const BOSS_STAGE  = 30;
const BOSS = {
  name: "ドラゴン",
  hp: 600, atkMin: 15, atkMax: 35, agl: 18,
  img: `${IMG_BASE}boss.png`,
};

const SHOP_ITEMS = [
  { key: "herb",   name: "薬草",       price: 50  },
  { key: "fruit",  name: "癒しの果実", price: 100 },
  { key: "mana",   name: "魔力丸",     price: 150 },
  { key: "rapier", name: "レイピア",   price: 500 },
  { key: "thorn",  name: "棘の鎧",     price: 1000 },
];
const SHOP_DETAIL = {
  herb:  { desc: "シンプルな回復薬。",     effect: "HPを20回復（即時）" },
  fruit: { desc: "みずみずしい果実。",     effect: "HPを50回復（即時）" },
  mana:  { desc: "濃縮された魔力の玉。",   effect: "MPを20回復（即時）" },
  rapier:{ desc: "細身の剣。扱いやすい。", effect: "装備でSTR+5（武器）" },
  thorn: { desc: "返しの生えた鎧。",       effect: "被ダメージの一部を反射(防具)" }
};

// ===== 進行状態 =====
let gold         = 500;
let enemyHP      = 100;
let playerHP     = 100;
let playerMaxHP  = 100;

let playerMaxMP  = 30;
let playerMP     = playerMaxMP;
const SPELL_COST = 5;

let isGuarding   = false;
let playerLevel  = 1;
let playerExp    = 0;
let playerNextExp= 10;

const stats   = { HP:100, STR:12, MAG:6, AGL:12, GRD:10, LUCK:10 };
const GROWTH  = { HP:0.7, STR:0.8, MAG:0.4, AGL:0.7, GRD:0.8, LUCK:0.6 };

const EQUIP = { weapon: null, armor: null };
const EQUIP_BONUS = {
  weapon: { "レイピア": { STR: 5 } },
  armor:  { "棘の鎧":   { GRD: 5 } },
};

let SHOP_MODE = "buy";
const INV = new Map();  // name -> count

let stage = 1;
let currentEnemy = null;

// ===== 汎用ログ =====
function addLog(message, { maxEntries = 100 } = {}) {
  if (!logList) return;
  const li = document.createElement("li");
  li.textContent = String(message);
  logList.appendChild(li);
  while (logList.children.length > maxEntries) {
    logList.removeChild(logList.firstElementChild);
  }
  const parent = document.querySelector(".rog_box");
  if (parent) parent.scrollTop = parent.scrollHeight;
}

// alert乗っ取り（ログに流す）
window.alert = (msg) => addLog(msg);

// ===== HP/MP表示 =====
function updateEnemyHP() {
  if (enemyHPText) enemyHPText.textContent = "敵のHP:" + enemyHP;
}
function updatePlayerHP() {
  if (playerHPBox) playerHPBox.textContent = "あなたのHP:" + playerHP + "/" + playerMaxHP;
  if (playerHP <= 0) { disableCommands(); showGameOver(); }
}
function updatePlayerMP() {
  refreshStatusIfOpen();
}

// ===== ステータスUI =====
function formatLine(label, value) {
  return `<div><span style="display:inline-block;min-width:90px;color:#555;">${label}</span>${value}</div>`;
}

function updateStatusUI() {
  if (!statusBox) return;

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
  if (mp !== null && mpMax !== null) html += formatLine("MP", `${mp}/${mpMax}`);
  html += formatLine("所持金", `${gold}G`);

  if (STR !== null || MAG !== null || AGL !== null || GRD !== null || LUCK !== null) {
    html += `<div style="margin-top:6px;color:#555;">— 能力値 —</div>`;
    if (STR !== null)  html += formatLine("STR（力）",  STR);
    if (MAG !== null)  html += formatLine("MAG（魔）",  MAG);
    if (AGL !== null)  html += formatLine("AGL（速）",  AGL);
    if (GRD !== null)  html += formatLine("GRD（防）",  GRD);
    if (LUCK !== null) html += formatLine("LUCK（運）", LUCK);
  }

  const weaponName = (EQUIP && EQUIP.weapon) ? EQUIP.weapon : "—";
  const armorName  = (EQUIP && EQUIP.armor)  ? EQUIP.armor  : "—";
  html += `<div style="margin-top:6px;color:#555;">— 装備 —</div>`;
  html += formatLine("武器", weaponName);
  html += formatLine("防具", armorName);

  statusBox.innerHTML = html;
}

function toggleStatusUI() {
  if (!statusBox) return;
  const isOpen = statusBox.classList.contains("is-open");
  if (isOpen) {
    statusBox.classList.remove("is-open");
    statusBox.style.display = "none";
  } else {
    updateStatusUI();
    statusBox.classList.add("is-open");
    statusBox.style.display = "block";
  }
}
function refreshStatusIfOpen() {
  if (statusBox && statusBox.classList.contains("is-open")) updateStatusUI();
}

// ===== 装備・成長 =====
function applyBonus(bonus, sign) {
  if (!bonus) return;
  for (const [k, v] of Object.entries(bonus)) {
    if (typeof stats[k] === "number") stats[k] += sign * v;
  }
}
function equipItem(slot, itemName) {
  const prev = EQUIP[slot];
  if (prev && EQUIP_BONUS[slot]?.[prev]) applyBonus(EQUIP_BONUS[slot][prev], -1);
  EQUIP[slot] = itemName;
  if (EQUIP_BONUS[slot]?.[itemName]) applyBonus(EQUIP_BONUS[slot][itemName], +1);
  addLog(`${itemName}を装備した！`);
  updateStatusUI();
}

function showLevelUpPanel(before, after, gainsText) {
  if (!lvupOverlay || !lvOkBtn) return;
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

  openOverlay(lvupOverlay, lvOkBtn);
  const onClose = () => closeOverlay(lvupOverlay, lvOkBtn);
  lvOkBtn.onclick = onClose;
  const onKey = (e) => { if (e.key === "Escape") onClose(); };
  const onBg  = (e) => { if (e.target === lvupOverlay) onClose(); };
  document.addEventListener("keydown", onKey, { once:true });
  lvupOverlay.addEventListener("click", onBg, { once:true });
}

function setText(id, value) { const el = document.getElementById(id); if (el) el.textContent = String(value ?? ""); }
function get(obj, key) { return (obj && key in obj) ? obj[key] : ""; }
function openOverlay(overlay, focusEl) { overlay.classList.add("is-open"); overlay.setAttribute("aria-hidden","false"); requestAnimationFrame(() => focusEl?.focus()); }
function closeOverlay(overlay) { overlay.classList.remove("is-open"); overlay.setAttribute("aria-hidden","true"); }

// ===== EXP/レベルアップ =====
function gainExp(amount) {
  addLog(`経験値を${amount}手に入れた！`);
  playerExp += amount;
  while (playerExp >= playerNextExp) levelUp();
  refreshStatusIfOpen();
}
function levelUp() {
  const before = { level: playerLevel, maxHP: playerMaxHP, STR: stats.STR, MAG: stats.MAG, AGL: stats.AGL, GRD: stats.GRD, LUCK: stats.LUCK };
  playerLevel += 1;

  const grew = [];
  for (const key of Object.keys(GROWTH)) {
    if (Math.random() < GROWTH[key]) { stats[key] += 1; grew.push(`${key}+1`); }
  }
  const hpGain = rand(4, 7);
  playerMaxHP += hpGain;

  playerExp -= playerNextExp;
  playerNextExp = Math.floor(playerNextExp * 1.35) + 2;

  const after = { level: playerLevel, maxHP: playerMaxHP, STR: stats.STR, MAG: stats.MAG, GRD: stats.GRD, AGL: stats.AGL, LUCK: stats.LUCK };

  addLog(`レベルが上がった！ Lv.${before.level} → Lv.${after.level}`);
  addLog(`最大HP ${before.maxHP} → ${after.maxHP}`);
  grew.forEach(g => addLog(`ステータス上昇：${g}`));

  updatePlayerHP();
  showLevelUpPanel(before, after, grew.join(" / "));
  refreshStatusIfOpen();
}

// ===== 敵生成・画像 =====
function getEnemyImage(name) { return ENEMY_IMAGES[name] || ENEMY_IMAGES._default; }
function makeEnemy(stage) {
  if (stage === BOSS_STAGE) return { ...BOSS };
  const name   = ENEMY_NAMES[(stage - 1) % ENEMY_NAMES.length];
  const hp     = 20 + stage * 2;
  const atkMin = 1  + stage * 1;
  const atkMax = 2  + stage * 1;
  const agl    = 6  + stage * 0.4;
  return { name, hp, atkMin, atkMax, agl, img: getEnemyImage(name) };
}
function loadEnemy(enemy) {
  currentEnemy = enemy;
  enemyHP = enemy.hp;
  isGuarding = false;
  updateEnemyHP();

  if (enemyPicture) {
    enemyPicture.style.backgroundImage = enemy.img ? `url(${enemy.img})` : "";
    enemyPicture.setAttribute("aria-label", enemy.name);
    enemyPicture.setAttribute("data-enemy", enemy.name);
    enemyPicture.classList.toggle("is-boss", stage === BOSS_STAGE);
  }

  if (stage === BOSS_STAGE) {
    addLog(`⚠ ${enemy.name} が出現！(Lv.${stage})`);
    addLog("世界が震える…強大な気配を感じる！");
  } else {
    addLog(`${enemy.name}が現れた！(Lv.${stage})`);
  }
}
function preloadEnemyImages() {
  Object.values(ENEMY_IMAGES).forEach(src => { if (!src) return; const img = new Image(); img.src = src; });
}

// ===== 戦闘 =====
function setCommandsEnabled(on) { [attackBtn, guardBtn, spellBtn, itemBtn].forEach(b => { if (b) b.disabled = !on; }); }
function disableCommands() { setCommandsEnabled(false); }
function enableCommands()  { setCommandsEnabled(true);  }

function calcSpellDamage() { const magStat = (typeof stats?.MAG === "number") ? stats.MAG : 0; const base = Math.floor(Math.random()*11) + 15; return base + magStat * 3; }
function calcEvasionChance(){ const luck = (typeof stats?.LUCK === "number") ? stats.LUCK : 0; const chance = 0.05 + luck * 0.005; return Math.min(chance, 0.35); }
function rollInitiativeScore(agl){ return (typeof agl === "number" ? agl : 0) + rand(-2,2); }
function shouldPlayerActFirst(){
  const pAGL = (typeof stats?.AGL === "number") ? stats.AGL : 0;
  const eAGL = (currentEnemy && typeof currentEnemy.agl === "number") ? currentEnemy.agl : 0;
  return rollInitiativeScore(pAGL) >= rollInitiativeScore(eAGL);
}
function actWithInitiative(playerAct){
  if (shouldPlayerActFirst()) { playerAct(); if (enemyHP > 0) enemyTurn(); }
  else { enemyTurn(); if (playerHP > 0) playerAct(); }
}

function enemyTurn(){
  const base = currentEnemy ? rand(currentEnemy.atkMin, currentEnemy.atkMax) : rand(5,15);
  let dmg = base;
  addLog("敵の攻撃!");

  const evasion = calcEvasionChance();
  if (Math.random() < evasion) { addLog("素早く身をかわした！ 攻撃を回避した。"); return; }

  if (isGuarding) { dmg = Math.ceil(dmg/2); isGuarding = false; addLog("守りでダメージを軽減した！"); }

  playerHP = Math.max(0, playerHP - dmg);
  addLog(`あなたは${dmg}のダメージを受けた。`);
  updatePlayerHP();

  if (EQUIP.armor === "棘の鎧" && dmg > 0) {
    const thorns = Math.ceil(dmg * 0.5);
    enemyHP = Math.max(0, enemyHP - thorns);
    addLog(`棘の鎧が反撃！ 敵に${thorns}のダメージを与えた！`);
    updateEnemyHP();
    if (enemyHP <= 0) handleEnemyDefeated();
  }

  if (playerHP <= 0) { addLog("目の前が真っ暗になった……。"); disableCommands(); showGameOver(); }
}

function handleEnemyDefeated(){
  addLog("敵を倒した！");
  if (stage === BOSS_STAGE) {
    addLog("★ ボスを打ち倒した！ 世界に平和が訪れた…");
    const bonus = 500; gold += bonus; updateGoldUI(); addLog(`特別報酬 ${bonus}G を手に入れた！（所持金：${gold}G）`);
  }
  const g = getGoldReward(currentEnemy, stage); gold += g; updateGoldUI(); addLog(`${g}G 手に入れた！（所持金：${gold}G）`);
  const exp = getExpReward(currentEnemy, stage); gainExp(exp);

  const item = rollDrop();
  if (item){ addToInventory(item); addLog(`戦利品:${item}を手に入れた！`); }
  else { addLog("戦利品はなかった"); }

  spawnNextEnemy();
}

function getGoldReward(enemy, stage){
  const s = stage || 1;
  const base = 5 + s * 5;
  const variance = rand(0,4);
  return base + variance;
}
function getExpReward(enemy, stage){
  const s = stage || 1;
  const base = 6 + s * 2;
  const variance = rand(0,3);
  return base + variance;
}

function attack() {
  actWithInitiative(() => {
    const str = (typeof stats?.STR === "number") ? stats.STR : 0;
    const base = Math.floor(Math.random()*20) + 5;
    const strBonus = Math.floor(str * 0.7);
    const damage = base + strBonus;

    enemyHP = Math.max(0, enemyHP - damage);
    updateEnemyHP();
    alert(`攻撃！ 敵に${damage}のダメージ！`);

    if (enemyHP <= 0) handleEnemyDefeated();
  });
}

function guard() {
  actWithInitiative(() => {
    isGuarding = true;
    addLog("防御！次の被ダメージを軽減する準備をした。");
  });
}

function castSpell() {
  actWithInitiative(() => {
    if (playerMP < SPELL_COST) { addLog("MPが足りない!"); return; }
    playerMP -= SPELL_COST; updatePlayerMP();
    const damage = calcSpellDamage();

    enemyHP = Math.max(0, enemyHP - damage);
    updateEnemyHP();
    alert(`呪文！ 火炎に包まれ${damage}のダメージ!（MP-${SPELL_COST}）`);

    if (enemyHP <= 0) handleEnemyDefeated();
  });
}

// ===== ドロップ・インベントリ =====
function weightedPick(table){
  const total = table.reduce((s,it)=>s+it.weight,0);
  let r = Math.random()*total;
  for (const it of table){ r-=it.weight; if(r<=0) return it; }
  return table[table.length-1];
}
function rollDrop(){ if(Math.random()>=DROP_RATE) return null; return weightedPick(DROP_TABLE).name; }

function renderInventoryList(){
  if(!inventoryList) return;
  inventoryList.innerHTML = "";
  const items = Array.from(INV.entries()).sort((a,b)=>a[0].localeCompare(b[0],'ja'));
  for(const [name,count] of items){
    const li = document.createElement("li");
    li.textContent = `${name} ×${count}`;
    li.addEventListener("click", ()=> useItem(li, name));
    inventoryList.appendChild(li);
  }
}
function invAdd(name, n=1){ INV.set(name, (INV.get(name)||0) + n); renderInventoryList(); }
function invRemove(name, n=1){
  const cur = INV.get(name)||0;
  const next = Math.max(0, cur - n);
  if (next === 0) INV.delete(name); else INV.set(name, next);
  renderInventoryList();
}
function invCount(name){ return INV.get(name)||0; }

function addToInventory(itemName){ invAdd(itemName, 1); addLog(`${itemName}を手に入れた！`); }

function useItem(li, itemName){
  switch(itemName){
    case "薬草":
      playerHP = Math.min(playerMaxHP, playerHP + 20);
      addLog("薬草を使ってHPが20回復した!"); break;
    case "癒しの果実":
      playerHP = Math.min(playerMaxHP, playerHP + 50);
      addLog("癒しの果実を使ってHPが50回復した!"); break;
    case "魔力丸":
      playerMP = Math.min(playerMaxMP, playerMP + 20);
      addLog("魔力丸を使ってMPが20回復した!"); updatePlayerMP(); break;
    case "レイピア":
      equipItem("weapon","レイピア"); break;
    case "棘の鎧":
      equipItem("armor","棘の鎧"); break;
    default:
      addLog(`${itemName}を使った!`); break;
  }
  updatePlayerHP();
  li.remove();
  invRemove(itemName, 1);
  if(inventoryBox) inventoryBox.classList.remove("is-open");
}

// ===== ショップ =====
function findItemByName(name){ return SHOP_ITEMS.find(it => it.name === name) || null; }
function getSellPrice(name){ const m = findItemByName(name); return m ? Math.max(1, Math.floor(m.price*0.5)) : 10; }

function renderShopList(){
  if (!shopList) return;
  shopList.innerHTML = "";

  if (SHOP_MODE === "buy"){
    SHOP_ITEMS.forEach(it => {
      const li = document.createElement("li"); li.dataset.key = it.key;
      const info = document.createElement("div");
      const nm = document.createElement("div"); nm.className = "shop_item_name"; nm.textContent = it.name;
      const pr = document.createElement("div"); pr.className = "shop_item_price"; pr.textContent = `${it.price}G`;
      info.appendChild(nm); info.appendChild(pr);

      const btn = document.createElement("button");
      btn.className = "shop_buy"; btn.type = "button"; btn.dataset.key = it.key; btn.textContent = "購入";

      li.appendChild(info); li.appendChild(btn); shopList.appendChild(li);

      li.addEventListener("mouseenter", ()=> updateShopDetail(it.key));
      li.addEventListener("mouseleave", ()=> updateShopDetail(null));
      li.addEventListener("focusin",    ()=> updateShopDetail(it.key));
      li.addEventListener("focusout",   ()=> updateShopDetail(null));
    });
    updateShopDetail(null);
  } else {
    const entries = Array.from(INV.entries()).filter(([,cnt])=>cnt>0);
    if (entries.length === 0) {
      const li = document.createElement("li"); li.textContent = "売れるアイテムがありません。"; shopList.appendChild(li); return;
    }
    entries.sort((a,b)=>a[0].localeCompare(b[0],'ja'));
    entries.forEach(([name, cnt]) => {
      const li = document.createElement("li");
      const info = document.createElement("div");
      const nm = document.createElement("div"); nm.className = "shop_item_name"; nm.textContent = `${name} ×${cnt}`;
      const pr = document.createElement("div"); pr.className = "shop_item_price"; pr.textContent = `${getSellPrice(name)}G で売却`;
      info.appendChild(nm); info.appendChild(pr);

      const btn = document.createElement("button");
      btn.className = "shop_sell"; btn.type = "button"; btn.dataset.name = name; btn.textContent = "売る";

      li.appendChild(info); li.appendChild(btn); shopList.appendChild(li);
    });
    updateShopDetail(null, false);
  }
}

function updateShopDetail(key, showHintIfNull = true){
  if (!sdName || !sdPrice || !sdDesc || !sdEffect) return;
  if (!key){
    sdName.textContent = "—";
    sdPrice.textContent = "—";
    sdDesc.textContent = showHintIfNull ? "カーソルを合わせると詳細が表示されます。" : "";
    sdEffect.textContent = "";
    return;
  }
  const item = SHOP_ITEMS.find(i => i.key === key);
  const meta = SHOP_DETAIL[key];
  sdName.textContent = item ? item.name : key;
  sdPrice.textContent = item ? `${item.price}G` : "";
  sdDesc.textContent = meta?.desc || "";
  sdEffect.textContent = meta?.effect ? `効果：${meta.effect}` : "";
}

function toggleShop(force){
  if (!shopBox) return;
  const willOpen = (force === true) || (force !== false && !shopBox.classList.contains("is-open"));
  shopBox.classList.toggle("is-open", willOpen);
  shopBox.setAttribute("aria-hidden", willOpen ? "false" : "true");
  if (shopGoldLabel) shopGoldLabel.textContent = `${gold}G`;
  if (willOpen) updateShopDetail(null);
}
function buyItem(item){
  if (gold < item.price) { addLog("お金が足りない！"); return; }
  gold -= item.price; updateGoldUI();
  addToInventory(item.name);
  addLog(`${item.name}を購入した！（-${item.price}G / 所持金：${gold}G）`);
  if (shopGoldLabel) shopGoldLabel.textContent = `${gold}G`;
}
function sellItem(name){
  if (EQUIP.weapon === name || EQUIP.armor === name) { addLog(`${name}は装備中のため売れません。装備を外してください。`); return; }
  if (invCount(name) <= 0) { addLog(`${name}は持っていない。`); return; }
  const price = getSellPrice(name);
  invRemove(name, 1); gold += price; updateGoldUI(); renderShopList();
  addLog(`${name}を${price}Gで売った！（所持金：${gold}G）`);
  refreshStatusIfOpen();
}
function setShopTabUI(){
  shopTabBuy?.classList.toggle("is-active", SHOP_MODE==="buy");
  shopTabSell?.classList.toggle("is-active", SHOP_MODE==="sell");
}
function updateGoldUI(){ refreshStatusIfOpen(); }

// ===== 敵の切替 =====
function spawnNextEnemy(delayMs=800){
  const next = makeEnemy(++stage);
  setTimeout(()=> loadEnemy(next), delayMs);
}

// ===== イベント束ね =====
document.addEventListener("DOMContentLoaded", () => {
  // タイトル戻る
  backBtn?.addEventListener("click", () => { window.location.href = "index.html"; });

  // コマンド
  attackBtn?.addEventListener("click", attack);
  guardBtn?.addEventListener("click", guard);
  spellBtn?.addEventListener("click", castSpell);
  itemBtn?.addEventListener("click", ()=> inventoryBox?.classList.toggle("is-open"));

  // ステータス
  statusBtn?.addEventListener("click", toggleStatusUI);

  // バトルパネル開閉
  if (battleToggleBtn && commandPanel){
    battleToggleBtn.addEventListener("click", () => {
      commandPanel.classList.toggle("is-open");
      battleToggleBtn.textContent = commandPanel.classList.contains("is-open") ? "閉じる" : "戦う";
    });
  }

  // ショップ
  shopBtn?.addEventListener("click", () => { SHOP_MODE="buy"; setShopTabUI(); renderShopList(); toggleShop(true); });
  shopCloseBtn?.addEventListener("click", () => toggleShop(false));
  shopTabBuy?.addEventListener("click",  ()=> { SHOP_MODE="buy";  setShopTabUI(); renderShopList(); });
  shopTabSell?.addEventListener("click", ()=> { SHOP_MODE="sell"; setShopTabUI(); renderShopList(); });
  shopList?.addEventListener("click", (e) => {
    const buyBtn = e.target.closest("button.shop_buy");
    if (buyBtn){ const key = buyBtn.dataset.key; const item = SHOP_ITEMS.find(i => i.key === key); if (item) buyItem(item); return; }
    const sellBtn = e.target.closest("button.shop_sell");
    if (sellBtn){ const name = sellBtn.dataset.name; sellItem(name); return; }
  });

  // ゲームオーバー
  goRetry?.addEventListener("click", () => { closeOverlay(goOverlay); restartBattle(); });
  goClose?.addEventListener("click", () => closeOverlay(goOverlay));
  goIndex?.addEventListener("click", () => { window.location.href = "index.html"; });

  // 初期セットアップ
  preloadEnemyImages();
  loadEnemy(makeEnemy(stage));
  renderShopList();
  renderInventoryList();
  updateEnemyHP();
  updatePlayerHP();
  updateGoldUI();
  updatePlayerMP();
  enableCommands();
});

// ===== ゲームオーバーUI・再挑戦 =====
function showGameOver(){ openOverlay(goOverlay, goRetry); }
function restartBattle(){
  playerHP = Math.min(playerMaxHP, Math.max(1, Math.floor(playerMaxHP * 0.5)));
  playerMP = playerMaxMP; isGuarding = false;
  currentEnemy = makeEnemy(stage); loadEnemy(currentEnemy);
  updatePlayerHP(); updatePlayerMP(); enableCommands();
  addLog("気力を振り絞って立ち上がった！（再挑戦）");
}