//! <1.DOM参照>
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
const statusSwitchBtn = document.getElementById("status_switch_btn");
const skillBtn = document.getElementById("skill_btn");
const skillBox = document.getElementById("skill_box");
const storyBtn = document.getElementById("story_btn");
const storyOverlay = document.getElementById("story_overlay");
const storyClose = document.getElementById("story_close");
const storySceneOverlay   = document.getElementById("story_scene_overlay");
const storySummaryBox     = document.getElementById("story_summary_box");
const storyDialogueArea   = document.getElementById("story_dialogue_area");
const storyFaceLeft       = document.getElementById("story_face_left");
const storyFaceRight      = document.getElementById("story_face_right");
const storyDialogueName   = document.getElementById("story_dialogue_name");
const storyDialogueText   = document.getElementById("story_dialogue_text");
const storySceneNext      = document.getElementById("story_scene_next");
const storyEventImageArea = document.getElementById("story_event_image_area");
const storyEventImage     = document.getElementById("story_event_image");
const townOverlay   = document.getElementById("town_overlay");
const townWeaponBtn = document.getElementById("town_weapon_btn");
const townItemBtn   = document.getElementById("town_item_btn");
const townArenaBtn  = document.getElementById("town_arena_btn");
const townMerudiBtn = document.getElementById("town_merudi_btn");
const townExitBtn   = document.getElementById("town_exit_btn");
const weaponOverlay      = document.getElementById("weapon_overlay");
const weaponCloseBtn     = document.getElementById("weapon_close");
const weaponList         = document.getElementById("weapon_list");
const weaponGoldLabel    = document.getElementById("weapon_gold");
const itemOverlay        = document.getElementById("item_overlay");
const itemCloseBtn       = document.getElementById("item_close");
const itemList           = document.getElementById("item_list");
const itemGoldLabel      = document.getElementById("item_gold");
const arenaOverlay       = document.getElementById("arena_overlay");
const arenaCloseBtn      = document.getElementById("arena_close");
const arenaBeginnerBtn   = document.getElementById("arena_beginner");
const arenaMiddleBtn     = document.getElementById("arena_middle");
const arenaAdvancedBtn   = document.getElementById("arena_advanced");
const arenaMasterBtn = document.getElementById("arena_master");
const merudiOverlay      = document.getElementById("merudi_overlay");
const merudiCloseBtn     = document.getElementById("merudi_close");
const merudiBody         = document.getElementById("merudi_body");
const mapBtn = document.getElementById("map_btn");
const mapOverlay = document.getElementById("map_overlay");
const mapCloseBtn = document.getElementById("map_close");
const mapBody = document.getElementById("map_body");
const mapTitle = document.getElementById("map_title");
const casinoOverlay = document.getElementById("casinoOverlay");
const casinoText = document.getElementById("casinoText");
const casinoHeadsBtn = document.getElementById("casinoHeadsBtn");
const casinoTailsBtn = document.getElementById("casinoTailsBtn");
const casinoCloseBtn = document.getElementById("casinoCloseBtn");
const townCasinoBtn = document.getElementById("townCasinoBtn");
const storyPortraitTopWrap = document.getElementById("storyPortraitTopWrap");
const storyPortraitTop = document.getElementById("storyPortraitTop");
const townInfoBtn = document.getElementById("town_info_btn");
const townHouseBtn = document.getElementById("town_house_btn");
const townMixBtn = document.getElementById("town_mix_btn");
const infoOverlay = document.getElementById("info_overlay");
const infoCloseBtn = document.getElementById("info_close");
const infoBody = document.getElementById("info_body");
const houseOverlay = document.getElementById("house_overlay");
const houseCloseBtn = document.getElementById("house_close");
const houseBody = document.getElementById("house_body");
const mixOverlay = document.getElementById("mix_overlay");
const mixCloseBtn = document.getElementById("mix_close");
const mixBody = document.getElementById("mix_body");
const arenaShopBtn = document.getElementById("arena_shop_btn");
const arenaShopOverlay = document.getElementById("arena_shop_overlay");
const arenaShopList = document.getElementById("arena_shop_list");
const arenaShopPoints = document.getElementById("arena_shop_points");
const arenaShopClose = document.getElementById("arena_shop_close");
const unitDetailOverlay = document.getElementById("unit_detail_overlay");
const unitDetailBox = document.getElementById("unit_detail_box");
const unitDetailClose = document.getElementById("unit_detail_close");
const equipSelectOverlay = document.getElementById("equip_select_overlay");
const equipSelectTitle = document.getElementById("equip_select_title");
const equipSelectList = document.getElementById("equip_select_list");
const equipSelectClose = document.getElementById("equip_select_close");
const clearSaveBtn = document.getElementById("clear_save_btn");

if (clearSaveBtn) {
  clearSaveBtn.addEventListener("click", () => {
    const ok = confirm("保存データを削除しますか？ この操作は戻せません。");
    if (!ok) return;
    clearGameSave();
  });
}














//! <2.定数(設定データ）>
//TODO---パス・共通設定
const UNIT_IMG_BASE = "./assets/img/"; 
const SPELL_COST = 5;
const DROP_RATE = 0.3;
const CASINO_BET = 500;
const CASINO_MAX_PROFIT = 50000;
const CASINO_EARLY_MAX_PROFIT = 10000;
const EARLY_AREA_LEVEL_CAP = 15;
const MID_AREA_LEVEL_CAP = 20;


//TODO---基本ID
const SKILL_ID = {
  SOUGA: "souga",
  SHIELD: "shield",
  REBELLION: "rebellion",
  ROYAL_BLOOD: "royal_blood",
  FOLLOW_UP: "follow_up",
  TETSU: "tetsu",
  FIRE: "fire",
  MANA_RAMPAGE: "mana_rampage",
  CHARISMA: "charisma",
  GIFTED: "gifted",
  HEAL: "heal",
  GIFT: "gift",
  LIGHTNING: "lightning",
  DESTINY: "destiny",
  RESURRECTION: "resurrection",
  GENESIS: "genesis",
  CHAOS: "chaos",
};


//TODO ---ユニット定義
const UNITS = {
  cress: {
    id: "cress",
    face: "./assets/img/kuresu.dia.png",
    name: "クレス",
    img: `${UNIT_IMG_BASE}530537444_749750834336152_7863546310926926073_n.png`,   // ★追加
    initial: { HP: 100, STR: 6, MAG: 3, AGL: 6, GRD: 5, LUCK: 5 },
    // initial: { HP: 3000, STR: 20, MAG: 12, AGL: 18, GRD: 20, LUCK: 23 },
    growth:  { HP: 0.7, STR: 0.8, MAG: 0.4, AGL: 0.7, GRD: 0.8, LUCK: 0.6 }
  },
  merudi: {
    id: "merudi",
    face: "./assets/img/merudi.dia.png",
    name: "メルディ",
    img: `${UNIT_IMG_BASE}merudi.png`, 
    initial: { HP: 60, STR: 3, MAG: 4, AGL: 5, GRD: 3, LUCK: 4 },
    // initial: { HP: 250, STR: 8, MAG: 24, AGL: 12, GRD: 8, LUCK: 24 },
    growth:  { HP: 0.4, STR: 0.3, MAG: 1.0, AGL: 0.6, GRD: 0.4, LUCK: 1.0 }
  },
  zeek:{
    id:"zeek",
    name:"ジーク",
    img:`${UNIT_IMG_BASE}#`,
    initial: { HP: 300, STR: 40, MAG: 12, AGL: 32, GRD: 40, LUCK: 8 },
    growth:  { HP: 0.9, STR: 0.9, MAG: 0.0, AGL: 0.8, GRD: 0.9, LUCK: 0.0 }
  }
};
const DEFAULT_PARTY = { front: "cress", back: null }; 


//TODO ---プレイヤー初期値
const stats   = { HP:100, STR:12, MAG:6, AGL:12, GRD:10, LUCK:10 };
const GROWTH  = { HP:0.7, STR:0.8, MAG:0.4, AGL:0.7, GRD:0.8, LUCK:0.6 };
const EQUIP = { weapon: null, armor: null, shield: null };


//TODO---スキル定義
const SKILLS = {
  [SKILL_ID.SOUGA]: {
    id: SKILL_ID.SOUGA,
    name: "王宮剣技・蒼牙",
    cost: 5,
    user: "cress",
    type: "attack",
    crit: 0.10,      
  },
  [SKILL_ID.SHIELD]: {
    id: SKILL_ID.SHIELD,
    name: "王宮盾技",
    cost: 5,
    user: "cress",
    type: "buff",
    duration: 2,
  },
  [SKILL_ID.REBELLION]: {
    id: SKILL_ID.REBELLION,
    name: "反逆の意志",
    cost: 7,
    user: "cress",
    type: "buff",
    duration: 2,
    learnLv: 10,      
    noEndTurn: true,   
  },
  [SKILL_ID.ROYAL_BLOOD]: {
    id: SKILL_ID.ROYAL_BLOOD,
    name: "王血の加護",
    cost: 0,
    user: "cress",
    type: "passive",
    learnBy: "classChange", 
  },
  [SKILL_ID.FOLLOW_UP]: {
    id: SKILL_ID.FOLLOW_UP,
    name: "追撃の構え",
    cost: 0,
    user: "cress",
    type: "passive",
    learnBy: "classChange", 
  },
  [SKILL_ID.TETSU]: {
    id: SKILL_ID.TETSU,
    name: "王家相伝・徹",
    cost: 20,
    user: "cress",
    type: "attack",
    learnLv: 40,  
    crit: 0.50,       
    ignoreGRD: true,   
  },
   [SKILL_ID.FIRE]: {
    id: SKILL_ID.FIRE,
    name: "ファイヤー",
    cost: 5,
    user: "merudi",
    type: "attack",
  },
  [SKILL_ID.MANA_RAMPAGE]: {
    id: SKILL_ID.MANA_RAMPAGE,
    name: "魔力暴走",
    cost: 0,
    user: "merudi",
    type: "passive",
  },
  [SKILL_ID.CHARISMA]: {
    id: SKILL_ID.CHARISMA,
    name: "カリスマ",
    cost: 0,
    user: "merudi",
    type: "passive",
  },
  [SKILL_ID.GIFTED]: {
    id: SKILL_ID.GIFTED,
    name: "ギフテッド",
    cost: 0,
    user: "merudi",
    type: "passive",
  },
  [SKILL_ID.HEAL]: {
    id: SKILL_ID.HEAL,
    name: "ヒール",
    cost: 10,
    user: "merudi",
    type: "heal",
    learnLv: 10,
  },
  [SKILL_ID.GIFT]: {
    id: SKILL_ID.GIFT,
    name: "ギフト",
    cost: 15,
    user: "merudi",
    type: "support",
    learnLv: 15,
  },
  [SKILL_ID.LIGHTNING]: {
    id: SKILL_ID.LIGHTNING,
    name: "ライトニング",
    cost: 15,
    user: "merudi",
    type: "attack",
    learnLv: 20,
  },
  [SKILL_ID.DESTINY]: {
    id: SKILL_ID.DESTINY,
    name: "運命再構築",
    cost: 20,
    user: "merudi",
    type: "buff",
    learnLv: 30,
  },
  [SKILL_ID.RESURRECTION]: {
    id: SKILL_ID.RESURRECTION,
    name: "リザレクション",
    cost: 25,
    user: "merudi",
    type: "revive",
    learnLv: 30,
  },
  [SKILL_ID.GENESIS]: {
    id: SKILL_ID.GENESIS,
    name: "ジェネシス",
    cost: 30,
    user: "merudi",
    type: "heal_all",
    learnLv: 40,
  },
  [SKILL_ID.CHAOS]: {
    id: SKILL_ID.CHAOS,
    name: "カオス",
    cost: 30,
    user: "merudi",
    type: "attack_all",
    learnLv: 40,
    ignoreMAG: true,
  },
};

//TODO ---アイテム・装備定義
const SHOP_ITEMS = [
  // 武器
  { key: "dagger",        name: "短剣",     price: 200,  kind: "weapon", stat: { STR: 4 }, durability: 40 },
  { key: "iron_sword",       name: "鉄の剣",       price: 750, kind: "weapon", stat: { STR: 8 }, durability: 60 },
  { key: "mercenary_sword",  name: "傭兵の剣",     price: 1500, kind: "weapon", stat: { STR: 12 }, durability: 60, crit: 0.05 },
  { key: "silver_sword",     name: "銀の剣",       price: 2500, kind: "weapon", stat: { STR: 15, AGL: 5 }, durability: 30 },
  { key: "thunder_sword",    name: "雷鳴の剣",     price: 3000, kind: "weapon", stat: { STR: 12 }, durability: 50, thunder: true },
  { key: "vampire_sword",    name: "吸血剣",       price: 3500, kind: "weapon", stat: { STR: 12 }, durability: 50, drain: true },
  { key: "grimoire",         name: "魔導書",       price: 900, kind: "weapon", stat: { MAG: 8 }, durability: 60 },
  { key: "mage_staff",       name: "魔導士の杖",   price: 1600, kind: "weapon", stat: { MAG: 8 }, durability: 30 },
  { key: "spirit_staff",     name: "精霊の杖",     price: 2650, kind: "weapon", stat: { MAG: 14, MP: 10 }, durability: 30 },
  {key: "legend_sword",name: "伝説の剣",price: 0,kind: "weapon",stat: { STR: 35, AGL: 10, LUCK: 10 },durability: 999,crit: 0.15},
  { key: "cutlass", name: "カトラス", price: 2100, kind: "weapon", stat: { STR: 14, AGL: 3 }, durability: 50 },
{ key: "marine_rapier", name: "マリンレイピア", price: 2400, kind: "weapon", stat: { STR: 12, AGL: 6 }, durability: 45 },
{ key: "trident", name: "三叉槍", price: 2800, kind: "weapon", stat: { STR: 18 }, durability: 55 },

  // 防具
  { key: "leather_armor", name: "革の鎧",   price: 600, kind: "armor",  stat: { GRD: 4 }, durability: 40 },
  { key: "iron_armor",       name: "鉄の鎧",       price: 1250, kind: "armor",  stat: { GRD: 7 }, durability: 40 },
  { key: "steel_armor",      name: "鋼の鎧",       price: 2500, kind: "armor",  stat: { GRD: 12 }, durability: 40 },
  { key: "magic_robe",       name: "魔道のローブ", price: 1250, kind: "armor",  stat: { GRD: 6 }, durability: 40 },
  { key: "priest_robe",      name: "司祭のローブ", price: 2250, kind: "armor",  stat: { GRD: 10 }, durability: 40 },

  // 盾
  { key: "leather_shield",name: "革の盾",   price: 450,  kind: "shield", stat: { GRD: 3 }, durability: 4 },
  { key: "iron_shield",      name: "鉄の盾",       price: 750, kind: "shield", stat: { GRD: 7 }, durability: 4 },
  { key: "steel_shield",     name: "鋼の盾",       price: 1500, kind: "shield", stat: { GRD: 12 }, durability: 4 },

  // HP回復
  { key: "herb",             name: "薬草",         price: 150,  kind: "consumable", effectType: "heal_hp", value: 30, usesPerBuy: 3 },
  { key: "fruit",            name: "癒しの果実",   price: 750, kind: "consumable", effectType: "heal_hp", value: 70, usesPerBuy: 3 },
  { key: "great_fruit",      name: "癒しの雫", price: 1500, kind: "consumable", effectType: "heal_hp", value: 150, usesPerBuy: 3 },
  { key: "elixir",           name: "エリクサー",   price: 50000, kind: "consumable", effectType: "revive", value: 1, usesPerBuy: 1 },

  // MP回復
  { key: "mana_fragment",    name: "魔石片",       price: 250,  kind: "consumable", effectType: "heal_mp", value: 5, usesPerBuy: 1 },
  { key: "lesser_mana",      name: "下級魔石",     price: 500, kind: "consumable", effectType: "heal_mp", value: 10, usesPerBuy: 1 },
  { key: "middle_mana",      name: "中級魔石",     price: 1000, kind: "consumable", effectType: "heal_mp", value: 20, usesPerBuy: 1 },

  // バフ
  { key: "power_drug",       name: "力の薬",       price: 500, kind: "consumable", effectType: "buff", statName: "STR", value: 5, turns: 3, usesPerBuy: 1 },
  { key: "guard_drug",       name: "守りの薬",     price: 500, kind: "consumable", effectType: "buff", statName: "GRD", value: 5, turns: 3, usesPerBuy: 1 },
  { key: "magic_drug",       name: "魔力の薬",     price: 500, kind: "consumable", effectType: "buff", statName: "MAG", value: 5, turns: 3, usesPerBuy: 1 },

  // 素材系
{ key: "nereid_tear", name: "ネレイドの涙", price: 600, kind: "material" },
{ key: "ocean_herb", name: "オーシャンハーブ", price: 400, kind: "material" },
{ key: "sea_crystal", name: "シークリスタル", price: 1000, kind: "material" },
{ key: "dragon_scale", name: "ドラゴンのうろこ", price: 0, kind: "material" },
{ key: "flying_whistle", name: "飛竜の笛", price: 0, kind: "special" },
];

const MARCIA_WEAPONS = [
  {
    key: "iron_sword",
    name: "鉄の剣",
    price: 1500,
    type: "weapon",
    stat: { STR: 8 },
    durability: 60,
    effect: "なし"
  },
  {
    key: "mercenary_sword",
    name: "傭兵の剣",
    price: 3000,
    type: "weapon",
    stat: { STR: 12 },
    durability: 60,
    crit: 0.05,
    effect: "クリティカル率+5%"
  },
  {
    key: "silver_sword",
    name: "銀の剣",
    price: 5000,
    type: "weapon",
    stat: { STR: 15, AGL: 5 },
    durability: 30,
    effect: "AGL+5"
  },
  {
    key: "thunder_sword",
    name: "雷鳴の剣",
    price: 6000,
    type: "weapon",
    stat: { STR: 12 },
    durability: 50,
    effect: "30%で追加雷撃"
  },
  {
    key: "vampire_sword",
    name: "吸血剣",
    price: 7000,
    type: "weapon",
    stat: { STR: 12 },
    durability: 50,
    effect: "与ダメージの10%吸収"
  }
];

const MARCIA_MAGIC_WEAPONS = [
  {
    key: "grimoire",
    name: "魔導書",
    price: 1800,
    type: "weapon",
    stat: { MAG: 8 },
    durability: 60,
    effect: "なし"
  },
  {
    key: "mage_staff",
    name: "魔導士の杖",
    price: 3200,
    type: "weapon",
    stat: { MAG: 8 },
    durability: 30,
    effect: "なし"
  },
  {
    key: "spirit_staff",
    name: "精霊の杖",
    price: 5300,
    type: "weapon",
    stat: { MAG: 14, MP: 10 },
    durability: 30,
    effect: "MP+10"
  }
];

const MARCIA_ARMORS = [
  {
    key: "iron_armor",
    name: "鉄の鎧",
    price: 2500,
    type: "armor",
    stat: { GRD: 7 },
    durability: 40
  },
  {
    key: "steel_armor",
    name: "鋼の鎧",
    price: 5000,
    type: "armor",
    stat: { GRD: 12 },
    durability: 40
  },
  {
    key: "magic_robe",
    name: "魔道のローブ",
    price: 2500,
    type: "armor",
    stat: { GRD: 6 },
    durability: 40
  },
  {
    key: "priest_robe",
    name: "司祭のローブ",
    price: 4500,
    type: "armor",
    stat: { GRD: 10 },
    durability: 40
  }
];

const MARCIA_SHIELDS = [
  {
    key: "iron_shield",
    name: "鉄の盾",
    price: 1500,
    type: "shield",
    stat: { GRD: 7 },
    durability: 4
  },
  {
    key: "steel_shield",
    name: "鋼の盾",
    price: 3000,
    type: "shield",
    stat: { GRD: 12 },
    durability: 4
  }
];

const MARCIA_HEAL_ITEMS = [
  {
    key: "herb",
    name: "薬草",
    price: 300,
    type: "item",
    effectType: "heal_hp",
    value: 30,
    uses: 3
  },
  {
    key: "healing_fruit",
    name: "癒しの果実",
    price: 1500,
    type: "item",
    effectType: "heal_hp",
    value: 70,
    uses: 3
  },
  {
    key: "great_healing_fruit",
    name: "大癒しの果実",
    price: 3000,
    type: "item",
    effectType: "heal_hp",
    value: 150,
    uses: 3
  },
  {
    key: "elixir",
    name: "エリクサー",
    price: 100000,
    type: "item",
    effectType: "revive",
    value: 1,
    uses: 1
  }
];

const MARCIA_MP_ITEMS = [
  {
    key: "mana_fragment",
    name: "魔石片",
    price: 500,
    type: "item",
    effectType: "heal_mp",
    value: 5,
    uses: 1
  },
  {
    key: "lesser_manastone",
    name: "下級魔石",
    price: 1000,
    type: "item",
    effectType: "heal_mp",
    value: 10,
    uses: 1
  },
  {
    key: "mid_manastone",
    name: "中級魔石",
    price: 2000,
    type: "item",
    effectType: "heal_mp",
    value: 20,
    uses: 1
  }
];

const MARCIA_BUFF_ITEMS = [
  {
    key: "power_potion",
    name: "力の薬",
    price: 1000,
    type: "item",
    effectType: "buff",
    stat: "STR",
    value: 5,
    turns: 3
  },
  {
    key: "guard_potion",
    name: "守りの薬",
    price: 1000,
    type: "item",
    effectType: "buff",
    stat: "GRD",
    value: 5,
    turns: 3
  },
  {
    key: "magic_potion",
    name: "魔力の薬",
    price: 1000,
    type: "item",
    effectType: "buff",
    stat: "MAG",
    value: 5,
    turns: 3
  }
];

const SHOP_DETAIL = {
  dagger:         { desc: "軽く扱いやすい短剣。", effect: "STR+4  / 耐久40" },
  iron_sword:      { desc: "標準的な鉄製の剣。", effect: "STR+8 / 耐久60" },
  mercenary_sword: { desc: "実戦向けの剣。", effect: "STR+12 / クリ率+5% / 耐久60" },
  silver_sword:    { desc: "俊敏さも上がる銀の剣。", effect: "STR+15 / AGL+5 / 耐久30" },
  thunder_sword:   { desc: "雷を宿した魔剣。", effect: "STR+12 / 30%で雷撃 / 耐久50" },
  vampire_sword:   { desc: "敵の血を吸う呪剣。", effect: "STR+12 / 与ダメ10%吸収 / 耐久50" },
  legend_sword: {desc: "闘技場最上級を制した者だけが手にできる伝説の剣。",effect: "STR+35 / AGL+10 / LUCK+10 / クリ率+15% / 耐久999"},
  cutlass: { desc: "船乗り御用達の湾刀。", effect: "STR+14 / AGL+3" },
marine_rapier: { desc: "海風のように軽い細剣。", effect: "STR+12 / AGL+6" },
trident: { desc: "海獣狩りに使われる三叉槍。", effect: "STR+18" },

nereid_tear: { desc: "精霊の涙。強力な合成素材。", effect: "合成素材" },
ocean_herb: { desc: "潮風に育った薬草。", effect: "合成素材" },
sea_crystal: { desc: "海底で生成される魔力結晶。", effect: "合成素材" },

  grimoire:        { desc: "魔力を高める魔導書。", effect: "MAG+8 / 耐久60" },
  mage_staff:      { desc: "魔導士が使う杖。", effect: "MAG+8 / 耐久30" },
  spirit_staff:    { desc: "精霊の加護を宿す杖。", effect: "MAG+14 / MP+10 / 耐久30" },

  leather_armor:  { desc: "革で作られた軽装防具。", effect: "GRD+4 / 耐久40" },
  iron_armor:      { desc: "鉄製の防具。", effect: "GRD+7 / 耐久40" },
  steel_armor:     { desc: "頑丈な鋼の鎧。", effect: "GRD+12 / 耐久40" },
  magic_robe:      { desc: "魔力を阻害しにくいローブ。", effect: "GRD+6 / 耐久40" },
  priest_robe:     { desc: "司祭の礼装。", effect: "GRD+10 / 耐久40" },

  leather_shield: { desc: "軽量な革張りの盾。", effect: "GRD+3 / 耐久4" },
  iron_shield:     { desc: "鉄製の盾。", effect: "GRD+7 / 耐久4" },
  steel_shield:    { desc: "鋼製の盾。", effect: "GRD+12 / 耐久4" },

  herb:            { desc: "一般的な回復薬。", effect: "HP+50 / 1個で3回使用" },
  fruit:           { desc: "濃い生命力を宿す果実。", effect: "HP+100 / 1個で3回使用" },
  great_fruit:     { desc: "非常に希少な果実。", effect: "HP+200 / 1個で3回使用" },
  elixir:          { desc: "究極の秘薬。", effect: "戦闘不能を回復 / 1回のみ" },

  mana_fragment:   { desc: "砕けた魔石。", effect: "MP+5" },
  lesser_mana:     { desc: "下級の魔石。", effect: "MP+10" },
  middle_mana:     { desc: "中級の魔石。", effect: "MP+20" },

  power_drug:      { desc: "肉体を活性化させる薬。", effect: "STR+5 / 3ターン" },
  guard_drug:      { desc: "守備を高める薬。", effect: "GRD+5 / 3ターン" },
  magic_drug:      { desc: "魔力を高める薬。", effect: "MAG+5 / 3ターン" },
  dragon_scale:   { desc: "色鮮やかな飛竜の鱗。", effect: "合成素材" },
flying_whistle: { desc: "飛竜を呼び寄せる不思議な笛。", effect: "灯台で使用可能 / 1回限り確定" },
};

const ARENA_SHOP_ITEMS = [
  { key: "herb_bundle", name: "薬草セット", cost: 300, type: "consumable", reward: { name: "薬草", amount: 5 } },
  { key: "fruit_bundle", name: "癒しの果実セット", cost: 800, type: "consumable", reward: { name: "癒しの果実", amount: 3 } },
  { key: "great_fruit_bundle", name: "癒しの雫セット", cost: 1200, type: "consumable", reward: { name: "癒しの雫", amount: 2 } },
  { key: "mana_bundle", name: "中級魔石セット", cost: 1000, type: "consumable", reward: { name: "中級魔石", amount: 2 } },
  { key: "legend_sword", name: "伝説の剣", cost: 5000, type: "equipment", reward: { name: "伝説の剣", amount: 1 } },
  { key: "flying_whistle", name: "飛竜の笛", cost: 2500, type: "special", reward: { name: "飛竜の笛", amount: 1 } }
];


//TODO---ショップ定義
const MARCIA_WEAPON_KEYS = [
  "iron_sword",
  "mercenary_sword",
  "silver_sword",
  "thunder_sword",
  "vampire_sword",
  "grimoire",
  "mage_staff",
  "spirit_staff",
  "iron_armor",
  "steel_armor",
  "magic_robe",
  "priest_robe",
  "iron_shield",
  "steel_shield"
];

const MARCIA_ITEM_KEYS = [
  "herb",
  "fruit",
  "great_fruit",
  "elixir",
  "mana_fragment",
  "lesser_mana",
  "middle_mana",
  "power_drug",
  "guard_drug",
  "magic_drug"
];

const LUMENIA_WEAPON_KEYS = [
  "cutlass",
  "marine_rapier",
  "trident"
];

const LUMENIA_ITEM_KEYS = [
  "nereid_tear",
  "ocean_herb",
  "sea_crystal"
];

const MAP_SHOPS = {
  village: {
    buy: [
      "herb",
      "dagger",
      "leather_armor",
      "leather_shield"
    ]
  },
  plain: {
    buy: []
  },
  labyrinth: {
    buy: []
  },
  marcia: {
    buy: [
      ...MARCIA_WEAPON_KEYS,
      ...MARCIA_ITEM_KEYS
    ]
  },
  lumenia: {
  buy: [
    "cutlass",
    "marine_rapier",
    "trident",
    "nereid_tear",
    "ocean_herb",
    "sea_crystal"
  ]
},
  
  volcano_secret: {
    buy: [
      "great_fruit",
      "middle_mana",
      "silver_sword",
      "steel_armor",
      "steel_shield"
    ]
  }
};


//TODO---素材・合成・特殊テキスト
const MIX_RECIPES = [
  {
    key: "bone_blade",
    name: "骨刃の短剣",
    materials: [
      { name: "スケルトンの骨片", count: 3 },
      { name: "ゴブリンの牙", count: 2 }
    ]
  }
];

const BOTTLE_LETTERS = [
  `【手紙1】
  月なき夜に門は開かず。まず影を読むべし。
  聖なる名に耳を傾けよ。月の次に来るは祈り。
  王は炎より先に座す。冠を忘れるな。
  炎は深淵を照らすためにある。最後ではない。
  もっとも深きものは、すべての後に眠る。
  `,
  "[手紙2]\n\
――古びた交易記録の一頁――\n\
\n\
この世界には、五つの力を司る存在があると伝えられている。\n\
\n\
水を統べるもの、\n\
炎を統べるもの、\n\
大地を支えるもの、\n\
蒼き叡智を宿すもの――\n\
\n\
そしてもう一つ、\n\
語られることのない“白き神竜”。\n\
\n\
それは極寒の地に眠り、\n\
決して人の前には姿を現さぬという。\n\
\n\
だが、古き交易路が極地へと繋がった時、\n\
凍てついた封印は僅かに揺らぐ。\n\
\n\
氷晶のカギ――\n\
それはその神域へ至るための、唯一の鍵である。",
  "【手紙3】\n\
――古い伝承の断片――\n\
\n\
はるか昔より、この世界の裏側には\n\
人ならざる者どもが棲むと語られてきた。\n\
\n\
それは魔物とも竜とも異なる、\n\
より邪悪で、意志を持つ存在――\n\
人々はそれを“悪魔”と呼んだ。\n\
\n\
多くは御伽話として退けられてきたが、\n\
戦乱と災厄の時代には、\n\
闇の底でその名を見たという記録が僅かに残る。\n\
\n\
契約を交わし、力を与え、\n\
その代償に魂や理を蝕むもの。\n\
\n\
もし伝説が真実ならば、\n\
悪魔は滅びたのではない。\n\
ただ長き眠りの中で、\n\
再び呼ばれる時を待っているのだ。",
  "【手紙4】\n\
――廃城探索記録・抜粋――\n\
\n\
グラディオ廃城の中央ホールにて、奇妙な現象を確認した。\n\
\n\
階段を降りる。\n\
また降りる。\n\
さらに降りる。\n\
\n\
だが、いくら進もうとも景色は変わらず、\n\
同じ構造の回廊と階層が繰り返されるのみであった。\n\
\n\
上へ戻ろうとしても同様だ。\n\
昇っているはずが、やはり同じ場所へと戻される。\n\
\n\
これは単なる迷宮ではない。\n\
空間そのものが歪められている可能性がある。\n\
\n\
あるいは――\n\
この場所には“資格”を持つ者だけが、\n\
本来の終着点へ辿り着けるのかもしれない。\n\
\n\
もしそうであるならば、\n\
我々はまだ、この城に拒まれているのだろう。",
  "【手紙5】ここに文面を入れる",
  "【手紙6】ここに文面を入れる",
  "【手紙7】ここに文面を入れる",
  "【手紙8】ここに文面を入れる",
  "【手紙9】ここに文面を入れる",
  "【手紙10】ここに文面を入れる"
];

const GLADIO_LIBRARY_BOOK_TEXT = {
  book_moon: "『月影寓話』――影の王と失われた夜の物語。",
  book_saint: "『聖者列伝』――聖堂に仕えた五人の生涯が綴られている。",
  book_crown: "『王冠の書』――古王家の継承儀礼と禁忌。",
  book_flame: "『炎の記録』――戦火に包まれた城塞都市の年代記。",
  book_depth: "『深淵年代記』――地下に封じられたものについて断片的に記されている。"
};

const GLADIO_LIBRARY_CORRECT_ORDER = [
  "book_moon",
  "book_saint",
  "book_crown",
  "book_flame",
  "book_depth"
];

const GLADIO_LIBRARY_BOOKS = [
  {
    id: "book_depth",
    title: "深淵年代記"
  },
  {
    id: "book_crown",
    title: "王冠の書"
  },
  {
    id: "book_flame",
    title: "炎の記録"
  },
  {
    id: "book_moon",
    title: "月影寓話"
  },
  {
    id: "book_saint",
    title: "聖者列伝"
  }
];

const IMG_BASE = "./assets/img/";


//TODO ---敵定義
const ENEMIES = {
  slime: {
    name: "スライム",
    hp: 50,
    atkMin: 1,
    atkMax: 2,
    agl: 9,
    exp: 5,
    grd: 5,
    gold: 50,
    img: `${IMG_BASE}slime.png`
  },
  goblin: {
    name: "ゴブリン",
    hp: 60,
    atkMin: 3,
    atkMax: 5,
    agl: 8,
    exp: 10,
    grd: 8,
    gold: 100,
    img: `${IMG_BASE}gobrin.png`
  },
  
  dragon: {
    name: "ドラゴン",
    hp: 1000,
    atkMin: 17,
    atkMax:25,
    agl: 18,
    grd: 36,
    imgSize: 260,
    img: `${IMG_BASE}boss.png`
  },
  zombie: {
    name: " ゾンビ",
    hp: 100,
    atkMin: 10,
    atkMax: 12 ,
    agl: 5,
    grd: 7,
    exp: 20,
    gold: 150,
    img: `${IMG_BASE}zombie.png`
  },
  graceMummy: {
  name: "グレイスマミー",
  hp: 60,
  atkMin: 8,
  atkMax: 10,
  agl: 7,
  grd: 12,
  exp: 20,
  gold: 150,
  img: `${IMG_BASE}grace_mumm.jpg`
},
behimosu: {
  name: "ベヒーモス",
  hp: 150,
  atkMin: 10,
  atkMax: 13,
  agl: 5,
  exp: 25,
  gold: 250,
  grd: 14,
  mag: 0,
  imgSize: 170,
  img: `${IMG_BASE}behimosu.png`
},
sandGoblin: {
  name: "サンドゴブリン",
  hp: 100,
  atkMin: 8,
  atkMax: 10,
  agl: 10,
  exp: 20,
  gold: 150,
  grd: 10,
  mag: 0,
  img: `${IMG_BASE}sand_goblin.png`
},
scorpion: {
  name: "デススコーピオン",
  hp: 120,
  atkMin: 11,
  atkMax: 14,
  agl: 10,
  exp: 25,
  gold: 200,
  grd: 12,
  mag: 0,
  img: `${IMG_BASE}scorpion.png`
},
grimoire: {
  name: "グリモワール",
  hp: 150,
  atkMin: 13,
  atkMax: 15,
  agl: 10,
  exp: 30,
  gold: 200,
  grd: 10,
  mag: 0,
  imgSize: 170,
  img: `${IMG_BASE}grimoire.png`
},
mimic: {
  name: "ミミック",
  hp: 200,
  atkMin: 14,
  atkMax: 17,
  agl: 11,
  exp: 30,
  gold: 200,
  grd: 15,
  mag: 10,
  imgSize: 170,
  img: `${IMG_BASE}mimic.png`
},
darkKnightShade: {
  name: "黒騎士の残影",
  hp: 250,
  atkMin: 17,
  atkMax: 20,
  agl: 13,
  exp: 40,
  gold: 500,
  grd: 16,
  mag: 0,
  imgSize: 200,
  img: `${IMG_BASE}dark_knight_shade.png`
},
pirate: {
    id: "pirate",
    name: "海賊",
    hp: 150,
    atkMin: 16,
    atkMax: 19,
    agl: 14,
    grd: 16,
    exp: 30,
    gold: 250,
    imgSize: 180,
    img: "./assets/img/enemy_pirate.png"
  },
  seaMage: {
    id: "seaMage",
    name: "海術師",
    hp: 120,
    atkMin: 13,
    atkMax: 16,
    agl: 12,
    grd: 14,
    exp: 25,
    gold: 200,
    imgSize: 180,
    img: "./assets/img/enemy_seamage.png"
  },
  mimic_beauty: {
  id: "mimic_beauty",
  name: "妖艶の擬態魔",
  hp: 300,
  atkMin: 20,
  atkMax: 25,
  agl: 16,
  grd: 15,
  mag: 22,
  exp: 100,
  gold: 500,
  imgSize: 190,
  img: "./assets/img/mimic_beauty.png"
},
despair: {
  id: "despair",
  name: "絶望",
  hp: 3200,
  atkMin: 72,
  atkMax: 100,
  agl: 30,
  grd: 22,
  mag: 25,
  exp: 400,
  gold: 1500,
  img: "./assets/img/despair.png"
},
slime_big: {
  id: "slime_big",
  name: "スライムビック",
  hp: 220,
  atkMin: 10,
  atkMax: 13,
  agl: 16,
  grd: 13,
  imgSize: 170,
  img: `${IMG_BASE}slime_big.png`
},

goblin_rider: {
  id: "goblin_rider",
  name: "ゴブリンライダー",
  hp: 190,
  atkMin: 15,
  atkMax: 18,
  agl: 10,
  grd: 15,
  imgSize: 170,
  img: `${IMG_BASE}goblin_rider.png`
},

child_dragon: {
  id: "child_dragon",
  name: "子ドラゴン",
  hp: 300,
  atkMin: 14,
  atkMax: 16,
  agl: 13,
  grd: 18,
  imgSize: 170,
  img: `${IMG_BASE}child_dragon.png`
},

dragon_hunter: {
  id: "dragon_hunter",
  name: "ドラゴンハンター",
  hp: 200,
  atkMin: 18,
  atkMax: 20,
  agl: 17,
  grd: 16,
  imgSize: 170,
  img: `${IMG_BASE}dragon_hunter.png`
},

arena_cress: {
  id: "arena_cress",
  name: "勇者？？？",
  hp: 800,
  atkMin: 42,
  atkMax: 50,
  agl: 25,
  grd: 39,
  mag: 33,
  imgSize: 250,
  img: `${IMG_BASE}arena_cress.png`
},
};

const STORY_BATTLE_ENEMIES = {
  tsuite_01: {
    id: "tsuite_01",
    name: "追手兵",
    hp: 60,
    atkMin: 3,
    atkMax: 5,
    grd:5,
    agl: 6,
    exp: 100,
    gold: 150,
    grd: 12,
    mag: 0,
    imgSize: 170,

    img: `${IMG_BASE}tsuite.jpg`
  },

  zeek:{
    id:"zeek",
name:"ジーク",
hp:800,
atkMin:20,
atkMax:25,
agl:13,
grd: 20,
exp:200,
gold:2000,
imgSize: 250,
img:`${IMG_BASE}enemy_zeek.png`

  },
  leviata: {
    id: "leviata",
    name: "水神竜レヴィアータ",
    hp: 1300,
    atkMin: 25,
    atkMax: 30,
    agl: 18,
    grd: 20,
    exp: 400,
    gold: 2200,
    imgSize: 340,
    img: "./assets/img/leviata.png"
  },
  frostrain: {
  id: "frostrain",
  name: "氷神竜フロストレイン",
  hp: 1100,
  atkMin: 35,
  atkMax: 40,
  agl: 30,
  grd: 20,
  mag: 32,
  exp: 400,
  gold: 2200,
  imgSize: 340,
  img: "./assets/img/frostrain.png"
},
ignarion: {
  id: "ignarion",
  name: "炎神竜イグナリオン",
  hp: 800,
  atkMin: 40,
  atkMax: 45,
  agl: 15,
  grd: 20,
  mag: 36,
  exp: 400,
  gold: 2400,
  imgSize: 340,
  img: "./assets/img/ignarion.png"
},
azrael: {
  id: "azrael",
  name: "蒼神竜アズラエル",
  hp: 1100,
  atkMin: 35,
  atkMax: 40,
  agl: 20,
  grd: 20,
  mag: 40,
  exp: 400,
  gold: 2600,
  imgSize: 340,
  img: "./assets/img/azrael.png"
},
granius: {
  id: "granius",
  name: "岩神竜グラニウス",
  hp: 1300,
  atkMin: 30,
  atkMax: 35,
  agl: 20,
  grd: 30,
  mag: 18,
  exp: 400,
  gold: 2800,
  imgSize: 340,
  img: "./assets/img/granius.png"
},

  contract_demon_knight: {
    id: "contract_demon_knight",
  name: "契約者ヴァルグレイヴ",

  hp: 1000,
  atkMin: 30,
  atkMax: 35,
  agl: 25,
  grd: 20,
  mag: 18,
  exp: 400,
  gold: 3000,
  phase: 1, // ←フェーズ管理
  imgSize: 250,
  img: "./assets/img/valgrave_sealed.png"
  },

  volcano_leonis_soldier: {
    id: "volcano_leonis_soldier",
    name: "レオニス兵",
    hp: 250,
    atkMin: 20,
    atkMax: 22,
    agl: 16,
    grd: 18,
    mag: 10,
    exp: 100,
    gold: 500,
    imgSize: 200,
    img: "./assets/img/leonis_soldier_enemy.png"
  },

  volcano_commander: {
    id: "volcano_commander",
    name: "レオニス王国幹部",
    hp: 800,
    atkMin: 25,
    atkMax: 30,
    agl: 23,
    grd: 25,
    mag: 24,
    exp: 300,
    gold: 1800,
    imgSize: 250,
    img: "./assets/img/leonis_commander_battle.png"
  },

  volcano_beast: {
    id: "volcano_beast",
    name: "火山魔獣",
    hp: 200,
    atkMin: 18,
    atkMax: 22,
    agl: 12,
    grd: 20,
    mag: 15,
    exp: 150,
    gold: 800,
    imgSize: 250,
    img: "./assets/img/volcano_beast.png"
  },
  estoria_guard: {
  id: "estoria_guard",
  name: "エストリア近衛兵",
  hp: 340,
  atkMin: 22,
  atkMax: 30,
  grd: 20,
  agl: 16,
  exp: 100,
  gold: 300,
  mag: 0,
  imgSize: 200,
  img: `${IMG_BASE}estoria_guard.png`
},
valdorein: {
  id: "valdorein",
  name: "ヴァルドレイン",
  hp: 500,
  atkMin: 21,
  atkMax: 28,
  grd: 20,
  agl: 22,
  exp: 400,
  gold: 0,
  mag: 18,
  imgSize: 250,
  img: `${IMG_BASE}valdorein.png`
},
belial: {
  id: "belial",
  name: "大悪魔ベリアル",
  hp: 2000,
  atkMin: 40,
  atkMax: 50,
  grd: 28,
  agl: 32,
  exp: 400,
  gold: 0,
  mag: 35,
  imgSize: 250,
  img: `${IMG_BASE}belial.png`
},
};


//TODO ---敵出現・戦闘関連定義
const DROP_TABLE = [
  { name: "薬草",       weight: 50 },
  // { name: "癒しの果実", weight: 10 },
  // { name: "魔力丸",     weight: 10 },
  // { name: "レイピア",   weight: 2  },
];

//TODOストーリーショップ
const STORY_SHOP = {

  1:["herb"],

  2:["herb","fruit"],

  3:["herb","fruit","mana"],

  4:["herb","fruit","mana","rapier"],

  5:["herb","fruit","mana","rapier","thorn"]

};

const DRAGON_GEMS = {
  fire: {
    key: "dragon_gem_fire",
    name: "竜玉(火)",
    bonus: { STR: 20, MAG: 8 },
    crit: 0.10
  },
  water: {
    key: "dragon_gem_water",
    name: "竜玉(水)",
    bonus: { HP: 200, MP: 40 },
    regen: 30
  },
  rock: {
    key: "dragon_gem_rock",
    name: "竜玉(岩)",
    bonus: { GRD: 20, HP: 100 },
    damageCut: 0.15
  },
  ice: {
    key: "dragon_gem_ice",
    name: "竜玉(氷)",
    bonus: { AGL: 18, LUCK: 10 },
    evasion: 0.20
  },
  blue: {
    key: "dragon_gem_blue",
    name: "竜玉(蒼)",
    bonus: { MAG: 20, MP: 60 },
    mpCostCut: 0.30
  }
};



//TODOマルシア武器ショップ
const MARCIA_WEAPON_SHOP = [
  { key: "iron_sword", name: "鉄の剣", price: 300 },
  { key: "steel_sword", name: "鋼の剣", price: 600 },
  { key: "knight_sword", name: "騎士の剣", price: 1200 }
];

const ENEMY_GROUP_RATE = [
  { count: 1, weight: 30 }, // 30%
  { count: 2, weight: 45 }, // 45%
  { count: 3, weight: 25 }  // 25%
];

const STORY_ENEMY_TABLE = {
  1: ["slime"],
  2: ["slime", "goblin"],
  3: ["goblin", "wolf"],
  4: ["wolf"],
  5: ["dragon"]
};

const GLADIO_TOWER_ENEMIES = {
  1: ["skeleton"],
  2: ["skeleton", "wraith"],
  3: ["darkKnightShade", "wraith"]
};

const ARENA_ENEMIES = {
  beginner: ["slime_big", "goblin_rider"],
  middle: ["child_dragon", "dragon_hunter", "dragon_hunter"],
  advanced: ["dragon"],
  master: ["arena_cress"]
};

const ARENA_REWARDS = {
  beginner: {
    label: "初級",
    itemReward: { name: "薬草", gold: 500 },
    pointReward: 500
  },
  middle: {
    label: "中級",
    itemReward: { name: "癒しの果実", gold: 1000 },
    pointReward: 1000
  },
  advanced: {
    label: "上級",
    itemReward: { name: "癒しの雫", gold: 1500 },
    pointReward: 1500
  },
  master: {
    label: "最上級",
    itemReward: { name: "伝説の剣", gold: 0 },
    pointReward: 3000
  }
};


//TODO---マップ定義
const STORY_MAPS = {
  village: {
    id: "village",
    name: "カルム村",
    unlocked: true,
    unlockLevel: 1,
    visited: false,
    background: "./assets/img/bg_village.png",
    enemies: ["tsuite_01"]
  },

  plain: {
    id: "plain",
    name: "アルディア平原",
    unlocked: false,
    unlockLevel: 5,
    visited: false,
    background: "./assets/img/530556201_740928238647808_5784113294969287064_n.jpg",
    intro: [
      {
    type: "summary",
    text: `📖 第二章「平原の出会い」

舞台：アルディア平原`
  },
  {
    type: "summary",
    text: `カルム村を離れたクレスたちは、
果てしなく広がるアルディア平原へと足を踏み入れた。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "ここまで来れば、少しは追手も撒けたか……"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "油断は禁物です。追手だけでなく、この先には魔物も潜んでいるでしょう"
  },
  {
    type: "summary",
    text: `草原の風が強く吹き抜ける。

その中に混じって、
誰かのかすかな叫び声が聞こえた気がした。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……今、何か聞こえなかったか？"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "ええ……人の声のようにも聞こえました"
  },
  {
    type: "summary",
    text: `二人が視線を向けた先、
草むらの奥で何かが激しく蠢いている。

魔物か、
それとも――新たな出会いか。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "行こう、セリオス"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "はい、殿下。ここから新たな運命が始まります"
  },
  {
    type: "summary",
    text: `こうしてクレスたちは、
アルディア平原の奥へと進んでいく。

その先に待つものが
敵か、味方か――
まだ誰も知らなかった。`
  }
    ],
    enemies: ["slime", "goblin"]
  },

  labyrinth: {
  id: "labyrinth",
  name: "封印迷宮",
  unlocked: false,
  unlockLevel: 6,
  visited: false,
  background: "./assets/img/bg_labyrinth.png",
  intro: [
    {
      type: "summary",
      text: `📖 第三章「封印迷宮」

舞台：封印迷宮`
    },
    {
      type: "summary",
      text: `瘴気に満ちた迷宮の入口に、
クレスたちは静かに足を踏み入れる。`
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      face: "./assets/img/kuresu.dia.png",
      text: "……ここが封印迷宮か"
    },
    {
      type: "dialogue",
      name: "セリオス",
      side: "left",
      face: "./assets/img/seriosu.dia.png",
      text: "気をつけてください、殿下。この奥には只ならぬ気配があります"
    }
  ],
  enemies: ["zombie", "graceMummy"]
},
marcia: {
  id: "marcia",
  name: "マルシア商業都市",
  unlocked: false,
  unlockLevel: 10,
  visited: false,
  background: "./assets/img/bg_marcia.png",
  type:"town",
  intro: [
    {
      type: "summary",
      text: `長い旅路の末――

クレスたちはついに
マルシア商業都市へと辿り着いた。`
    },
    {
      type: "summary",
      text: `巨大な城壁に囲まれたその都市には、
朝から絶えることのない喧騒が満ちていた。

商人たちの呼び声、
荷馬車のきしむ音、
武具を打つ金属音――

あらゆる音が重なり合い、
都市そのものが生きているかのようだった。`
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      face: "./assets/img/kuresu.dia.png",
      text: "……これが、マルシア商業都市か"
    },
    {
      type: "dialogue",
      name: "セリオス",
      side: "left",
      face: "./assets/img/seriosu.dia.png",
      text: "ええ。大陸でも有数の交易都市です"
    },
    {
      type: "dialogue",
      name: "セリオス",
      side: "left",
      face: "./assets/img/seriosu.dia.png",
      text: "表では商人たちが富を競い、裏では傭兵や情報屋たちが暗躍する……実に複雑な街です"
    },
    {
      type: "summary",
      text: `往来には武器や防具を運ぶ商隊の姿があり、
露店には薬草や見慣れぬ道具が並んでいる。

旅人にとって必要なものは、
この街でほとんど揃うだろう。`
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      face: "./assets/img/kuresu.dia.png",
      text: "装備も整えられそうだな。今の俺たちには助かる"
    },
    {
      type: "dialogue",
      name: "セリオス",
      side: "left",
      face: "./assets/img/seriosu.dia.png",
      text: "ええ。それだけではありません"
    },
    {
      type: "dialogue",
      name: "セリオス",
      side: "left",
      face: "./assets/img/seriosu.dia.png",
      text: "この街には王都の情勢、反乱軍の噂、各地の戦況……あらゆる情報が集まります"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      face: "./assets/img/kuresu.dia.png",
      text: "……ここなら、次の一手を見つけられるかもしれない"
    },
    {
      type: "summary",
      text: `その時、通りの奥から
ひときわ大きな歓声が響いた。

どうやらこの都市には、
武器屋や道具屋だけでなく、
腕自慢たちが集う闘技場もあるらしい。`
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      face: "./assets/img/kuresu.dia.png",
      text: "闘技場まであるのか……随分と賑やかな街だな"
    },
    {
      type: "dialogue",
      name: "セリオス",
      side: "left",
      face: "./assets/img/seriosu.dia.png",
      text: "強者が集まる場所です。力試しにも、資金集めにも使えるでしょう"
    },
    {
      type: "summary",
      text: `亡国の王子にとって、
この街はただの休息地ではない。

物資を整え、
新たな仲間と出会い、
情報を集め、
来るべき戦いに備えるための拠点――

マルシア商業都市は、
クレスたちにとって
新たな転機の地となるのだった。`
    }
  ],
  enemies: []
},
desert: {
  id: "desert",
  name: "デザリア砂漠",
  unlocked: false,
  unlockLevel: 16,
  visited: false,
  background: "./assets/img/bg.desert.png",
  intro: [
  {
    type: "summary",
    text: `灼熱の風が吹き荒れる大地――
クレスたちは新たに
デザリア砂漠へと足を踏み入れた。`
  },
  {
    type: "summary",
    text: `見渡す限りの砂。
空はどこまでも高く、太陽は容赦なく照りつけている。`
  },
  {
    type: "summary",
    text: `一歩進むごとに、体力が削られていくような感覚。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……想像以上だな"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "これ、普通に歩いてるだけでも危ないぞ"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "ええ。水の確保と体力管理が最優先です"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "敵よりも先に環境に殺される場所ですから"
  },
  {
    type: "summary",
    text: `乾いた風が吹き抜ける。`
  },
  {
    type: "summary",
    text: `その風はどこか重く、妙な違和感を含んでいた。`
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "……ねえ"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "なんか、変じゃない？"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "変って……砂漠なんてこんなもんじゃないのか？"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "違う……"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "砂の下、なんか“動いてる”感じがする"
  },
  {
    type: "summary",
    text: `耳を澄ませる。`
  },
  {
    type: "summary",
    text: `……だが、聞こえるのは風の音だけ。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "念のため警戒を。砂の下に潜る魔物も存在します"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……なるほどな"
  },
  {
    type: "summary",
    text: `クレスは剣に手をかける。`
  },
  {
    type: "summary",
    text: `視界のどこにも敵の姿はない。`
  },
  {
    type: "summary",
    text: `だが――`
  },
  {
    type: "summary",
    text: `確かに“何か”が潜んでいる。`
  },
  {
    type: "summary",
    text: `その時――`
  },
  {
    type: "summary",
    text: `足元の砂が、不自然に沈んだ。`
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "来る！"
  },
  {
    type: "summary",
    text: `次の瞬間、砂の中から影が跳ね上がる！`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……やっぱりな！"
  },
  {
    type: "summary",
    text: `灼熱の砂漠での戦いが、今始まる――`
  }
],
  enemies: ["behimosu", "sandGoblin", "scorpion"]
},
gladio: {
  id: "gladio",
  name: "グラディオ廃城",
  unlocked: false,
  unlockLevel: 25,
  visited: false,
  background: "./assets/img/bg_gladio_castle.png",
  intro: [
  {
    type: "summary",
    text: `📖 第六章「灰の廃城」\n\n舞台：グラディア廃城`
  },
  {
    type: "summary",
    text: `崩れた石壁。\n風に削られた塔。\n\nグラディア廃城――かつて王国の海路を監視していた要塞は、今や静かに朽ち果てていた。`
  },
  {
    type: "summary",
    text: `足を踏み入れた瞬間、空気が変わる。\n\n風の音すら、どこか遠く感じられた。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……妙に静かだな"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "廃城とはいえ、ここまで音がないのは不自然です"
  },
  {
    type: "summary",
    text: `石畳はひび割れ、かつて人が行き交っていた面影はほとんど残っていない。`
  },
  {
    type: "summary",
    text: `だが――完全に死んだ場所ではない。`
  },
  {
    type: "summary",
    text: `誰もいないはずの空間に、微かな“気配”だけが残っていた。`
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "……ここ、なんか嫌な感じがする"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "魔物か？"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "ううん……違う"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "もっとこう……見られてる感じ"
  },
  {
    type: "summary",
    text: `その言葉に、クレスは周囲を見渡す。`
  },
  {
    type: "summary",
    text: `崩れた塔。\n崩落した回廊。\n影しか存在しない空間。`
  },
  {
    type: "summary",
    text: `だが――確かに何かが“いる”。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "警戒を。何かがこの場所を占拠している可能性があります"
  },
  {
    type: "summary",
    text: `クレスは静かに頷き、前へ進む。`
  },
  {
    type: "summary",
    text: `この城には、ただの廃墟以上の意味がある。`
  },
  {
    type: "summary",
    text: `かつてここは、海を監視し、王国の未来を見据えていた場所。`
  },
  {
    type: "summary",
    text: `その記録が残っているなら――`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "次に進むための手がかりになるはずだ"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "ええ。この城の奥に、旧航路の記録が保管されているはずです"
  },
  {
    type: "summary",
    text: `だが――`
  },
  {
    type: "summary",
    text: `その記録に辿り着くには、この“異様な静けさ”の正体を突破しなければならない。`
  },
  {
    type: "summary",
    text: `そしてその時――`
  },
  {
    type: "summary",
    text: `崩れた壁の影が、不自然に揺らいだ。`
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "……来る！"
  },
  {
    type: "summary",
    text: `影の中から、何かが動き出す。`
  },
  {
    type: "summary",
    text: `それは、この城に取り残された存在か――`
  },
  {
    type: "summary",
    text: `あるいは、この場所に引き寄せられた“別の何か”か。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……来たな"
  },
  {
    type: "summary",
    text: `灰に覆われた廃城で、新たな戦いが幕を開ける――`
  }
],
  enemies: ["grimoire", "mimic", "darkKnightShade"]
},

gladio_underground: {
  id: "gladio_underground",
  name: "グラディオ廃城・地下迷宮",
  unlocked: false,
  visited: false,
  background: "./assets/img/bg_gladio_underground_01.png",
  type: "field",
  intro: [],
  enemies: ["grimoire", "mimic", "darkKnightShade"]
},

lumenia: {
  id: "lumenia",
  name: "海上都市ルーメリア",
  unlocked: false,
  visited: false,
  background: "./assets/img/map_lumenia.png",
  intro: [
  {
    type: "summary",
    text: `📖 第七章「海上都市ルーメリア」\n\n潮の都、交易と陰謀が交差する場所。`
  },
  {
    type: "summary",
    text: `長い航路の末、クレスたちはついに海上都市ルーメリアへと辿り着いた。`
  },
  {
    type: "summary",
    text: `無数の船が停泊する巨大な港。\n木造と石造が混ざり合った街並み。\n潮の香りと人々の喧騒が、空気を満たしている。`
  },
  {
    type: "summary",
    text: `ここは王国の支配が及びきらない場所。\n各地の商人、傭兵、そして裏の人間たちが集う都市だった。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……すごいな。これだけ人が集まる街は初めて見た"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "ルーメリアは交易の要ですから。各国の物資と情報がここに集まります"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "ですが同時に……表に出せない取引も多い場所です"
  },
  {
    type: "summary",
    text: `港では怒号が飛び交い、荷物が次々と運び込まれている。`
  },
  {
    type: "summary",
    text: `その一方で、視線を逸らす者や、こちらを値踏みするように見てくる者もいた。`
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "……なんか、嫌な感じの人多いね"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "ああ……歓迎されてる雰囲気じゃないな"
  },
  {
    type: "summary",
    text: `この街では、力でも正義でもなく――“価値”がすべてだ。`
  },
  {
    type: "summary",
    text: `金、情報、そして利用価値。`
  },
  {
    type: "summary",
    text: `それを持たない者は、簡単に切り捨てられる。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "殿下、ここでは不用意な行動は控えてください"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "この街は……敵も味方も、簡単には見分けられません"
  },
  {
    type: "summary",
    text: `その時――`
  },
  {
    type: "summary",
    text: `港の奥で、小さな騒ぎが起きているのが目に入った。`
  },
  {
    type: "summary",
    text: `何かを巡って、商人と武装した男たちが言い争っている。`
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "……あれ、ただの喧嘩じゃないよね"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "ええ……ああいうのが、この街の日常です"
  },
  {
    type: "summary",
    text: `クレスはその光景を静かに見つめる。`
  },
  {
    type: "summary",
    text: `王国とは違う秩序。\n違う価値観。\nそして、違う“危険”。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……ここで情報を集めるしかないな"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "次に進むためにも、この街を理解する必要がある"
  },
  {
    type: "summary",
    text: `海上都市ルーメリア――`
  },
  {
    type: "summary",
    text: `それは新たな出会いと、危険な陰謀が待ち受ける場所だった。`
  }
],
  enemies: ["pirate", "seaMage", "harborGuard"]
},

kansho: {
  id: "kansho",
  name: "蛇神の環礁",
  unlocked: false,
  visited: false,
  background: "./assets/img/map_kansho.png",
  type: "field",
  intro: [
  {
    type: "summary",
    text: `📖 第八章「蛇神の環礁」\n\n舞台：蛇神の環礁`
  },
  {
    type: "summary",
    text: `ルーメリアを離れたクレスたちは、
海図にも曖昧にしか記されていない海域へと足を踏み入れた。`
  },
  {
    type: "summary",
    text: `大小無数の岩礁が円を描くように連なり、
中央には、静まり返った海が広がっている。`
  },
  {
    type: "summary",
    text: `そこはまるで――外界から切り離された“別の領域”だった。`
  },
  {
    type: "summary",
    text: `波は穏やかなはずなのに、
どこか不自然な静けさが支配している。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……なんだここは"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "海なのに、妙に静かすぎる"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "環礁の内側に入っていますからね……ですが、それにしても不自然です"
  },
  {
    type: "summary",
    text: `風が吹いているはずなのに、
水面にはほとんど波が立たない。`
  },
  {
    type: "summary",
    text: `音が、吸い込まれているようだった。`
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "……ここ、ダメな場所だよ"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "ダメって……どういう意味だ？"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "生きてるものが、ここに入っちゃいけない感じ……"
  },
  {
    type: "summary",
    text: `その言葉に、背筋がわずかに冷たくなる。`
  },
  {
    type: "summary",
    text: `だが、引き返すわけにはいかない。`
  },
  {
    type: "summary",
    text: `この先に進むためには、
この海域を越える必要がある。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "古い記録では、この場所は“蛇神の眠る海”と呼ばれていました"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "実在するかどうかは不明ですが……信仰の対象になっていたのは確かです"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "神、か……"
  },
  {
    type: "summary",
    text: `その時――`
  },
  {
    type: "summary",
    text: `水面が、わずかに揺れた。`
  },
  {
    type: "summary",
    text: `波ではない。`
  },
  {
    type: "summary",
    text: `下から、“何か”が動いている。`
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "……いる"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "すごく大きいのが……下にいる"
  },
  {
    type: "summary",
    text: `視線を落とす。`
  },
  {
    type: "summary",
    text: `透き通る海の奥深く、
何か巨大な影がゆっくりと蠢いていた。`
  },
  {
    type: "summary",
    text: `それは魚ではない。`
  },
  {
    type: "summary",
    text: `長く、うねるような――まるで“蛇”のような形。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……冗談だろ"
  },
  {
    type: "summary",
    text: `その瞬間、水面が大きく歪む。`
  },
  {
    type: "summary",
    text: `影が急速に浮上してくる――！`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "来ます！ 構えてください！"
  },
  {
    type: "summary",
    text: `静寂を破り、巨大な存在がその姿を現そうとしていた。`
  },
  {
    type: "summary",
    text: `蛇神の環礁――その名の意味が、今明らかになる。`
  }
],
  enemies: ["sea_serpent", "water_spirit"]
},
volcano: {
  id: "volcano",
  name: "ヴォルカノ火山",
  unlocked: false,
  visited: false,
  background: "./assets/img/bg_volcano.png",
  type: "field",
  intro: [
  {
    type: "summary",
    text: `📖 第九章「灼熱の核」\n\n舞台：ヴォルカノ火山`
  },
  {
    type: "summary",
    text: `大地が裂け、赤黒い炎が吹き上がる地――
クレスたちは、ヴォルカノ火山へと辿り着いた。`
  },
  {
    type: "summary",
    text: `空は灰に覆われ、昼でありながら薄暗い。`
  },
  {
    type: "summary",
    text: `絶え間なく響く轟音と、地の底から伝わる振動。`
  },
  {
    type: "summary",
    text: `ここは“生きている火山”ではない。`
  },
  {
    type: "summary",
    text: `まるで何かに“動かされている”かのようだった。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……普通じゃないな"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "ええ。自然現象では説明がつきません"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "この火山、内部で何かが暴走しています"
  },
  {
    type: "summary",
    text: `熱風が吹き付ける。`
  },
  {
    type: "summary",
    text: `だがその熱は、ただの炎とは違う。`
  },
  {
    type: "summary",
    text: `どこか禍々しく、肌にまとわりつくような感覚だった。`
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "……これ、火じゃない"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "どういう意味だ？"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "中にあるの、もっと“違うもの”……すごく強い魔力"
  },
  {
    type: "summary",
    text: `その言葉と同時に――`
  },
  {
    type: "summary",
    text: `遠くから、金属音と怒号が響いた。`
  },
  {
    type: "dialogue",
    name: "？？？",
    side: "left",
    text: "押し返せ！ コアは絶対に守れ！！"
  },
  {
    type: "dialogue",
    name: "？？？",
    side: "left",
    text: "くそっ……この力、制御できないのか！？"
  },
  {
    type: "summary",
    text: `岩陰から様子を覗くと、そこには武装した兵士たちの姿があった。`
  },
  {
    type: "summary",
    text: `紋章――レオニス王国。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "……レオニス兵です"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "この火山を利用しようとしているのでしょう"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "あの異常な力を、か……？"
  },
  {
    type: "summary",
    text: `火山の奥から、脈打つような光が見える。`
  },
  {
    type: "summary",
    text: `それはまるで――心臓のように、一定のリズムで鼓動していた。`
  },
  {
    type: "summary",
    text: `“コア”と呼ばれる存在。`
  },
  {
    type: "summary",
    text: `自然ではない力の源。`
  },
  {
    type: "summary",
    text: `そして、それを巡って争う人間たち。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……こんなもの、放っておいていいはずがない"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "ええ。このままでは、さらに被害が広がります"
  },
  {
    type: "summary",
    text: `その時――`
  },
  {
    type: "summary",
    text: `地面が大きく揺れた。`
  },
  {
    type: "summary",
    text: `溶岩が激しく噴き上がり、空気が歪む。`
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "……来る！"
  },
  {
    type: "summary",
    text: `溶岩の中から、異形の影が姿を現す。`
  },
  {
    type: "summary",
    text: `それは、この地に生きる魔物ではない。`
  },
  {
    type: "summary",
    text: `コアの影響を受け、変質した存在。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……来たか"
  },
  {
    type: "summary",
    text: `ヴォルカノ火山――`
  },
  {
    type: "summary",
    text: `その深部に潜む“力”と、それを巡る争い。`
  },
  {
    type: "summary",
    text: `灼熱の戦いが、今始まる――`
  }
],
  enemies: ["volcano_beast", "volcano_leonis_soldier"]
},
frost_peak: {
  id: "frost_peak",
  name: "氷上都市ニーベリア",
  unlocked: false,
  unlockLevel: 1,
  visited: false,
  background: "./assets/img/bg_frost_peak.png",
  type: "field",
  intro: [
  {
    type: "summary",
    text: `📖 第十章「氷上都市ニーベリア」\n\n舞台：氷上都市ニーベリア`
  },
  {
    type: "summary",
    text: `吹き荒れる雪と氷の大地――
クレスたちは極寒の都市ニーベリアへと辿り着いた。`
  },
  {
    type: "summary",
    text: `地面はすべて凍りつき、
街そのものが氷の上に築かれている。`
  },
  {
    type: "summary",
    text: `白く閉ざされた世界の中で、
人々は静かに、しかし確かに生きていた。`
  },
  {
    type: "summary",
    text: `吐く息は白く、
わずかな時間で指先の感覚が奪われていく。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……寒い、どころじゃないな"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "ええ。装備がなければ数分で動けなくなるでしょう"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "この地で生きるには、それ相応の覚悟が必要です"
  },
  {
    type: "summary",
    text: `街の人々は厚い防寒具に身を包み、
必要以上の言葉を交わすことなく行き交っている。`
  },
  {
    type: "summary",
    text: `どこか、外の世界を拒むような閉鎖的な空気。`
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "……静かすぎる"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "人はいるのに、妙に活気がないな"
  },
  {
    type: "summary",
    text: `その理由はすぐにわかった。`
  },
  {
    type: "summary",
    text: `街の中心にそびえる巨大な氷の神殿。`
  },
  {
    type: "summary",
    text: `その奥には――この地を支配する存在が眠っている。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "この地は“氷神竜フロストレイン”への信仰で成り立っています"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "人々はその加護を恐れ、同時に依存しているのです"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……神に支配されてる、ってことか"
  },
  {
    type: "summary",
    text: `その時――`
  },
  {
    type: "summary",
    text: `遠くから、低く響く音が聞こえた。`
  },
  {
    type: "summary",
    text: `それは風ではない。`
  },
  {
    type: "summary",
    text: `氷が軋むような、重く長い振動。`
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "……いる"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "すごく大きい……この下に"
  },
  {
    type: "summary",
    text: `足元の氷の奥深く。`
  },
  {
    type: "summary",
    text: `そこに、確かに何かが眠っている。`
  },
  {
    type: "summary",
    text: `それは、この地を守る神か――`
  },
  {
    type: "summary",
    text: `あるいは、封じられた災厄か。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……確かめる必要があるな"
  },
  {
    type: "summary",
    text: `氷上都市ニーベリア――`
  },
  {
    type: "summary",
    text: `静寂に包まれたこの地で、
新たな真実が明らかになろうとしていた。`
  }
],
  enemies: []
},

castle: {
  id: "castle",
  name: "王都エストリア",
  unlocked: false,
  visited: false,
  background: "./assets/img/bg_estria.png",
  type: "town",
  intro: [
    {
      type: "summary",
      text: `📖 第八章「王都帰還」

舞台：王都エストリア`
    },
    {
      type: "summary",
      text: `長き逃亡の末――

クレスはついに、
かつての故郷である王都へと戻ってきた。`
    },
    {
      type: "summary",
      text: `巨大な城壁、見慣れた石畳、
そして変わらぬはずの街並み。

だが――

その空気は、
かつての王都とはまるで違っていた。`
    },
    {
      type: "summary",
      text: `人々の声は小さく、
笑顔は消え、
どこか怯えたような空気が街全体を覆っている。`
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      face: "./assets/img/kuresu.dia.png",
      text: "……静かすぎる"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      face: "./assets/img/kuresu.dia.png",
      text: "昔は、もっと活気があったはずだ"
    },
    {
      type: "dialogue",
      name: "セリオス",
      side: "left",
      face: "./assets/img/seriosu.dia.png",
      text: "ええ……王の死以降、この街は変わってしまいました"
    },
    {
      type: "summary",
      text: `王の死はすでに広く知れ渡っている。

そしてその犯人は――

「第一王子クレス」`
    },
    {
      type: "summary",
      text: `人々の視線が、
わずかにクレスへと向けられる。

その目に宿るのは、
恐れと――明確な敵意だった。`
    },
    {
      type: "dialogue",
      name: "市民",
      side: "left",
      text: "……あれが……"
    },
    {
      type: "dialogue",
      name: "市民",
      side: "left",
      text: "王を殺した……"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      face: "./assets/img/kuresu.dia.png",
      text: "……やはり、あいつか"
    },
    {
      type: "dialogue",
      name: "セリオス",
      side: "left",
      face: "./assets/img/seriosu.dia.png",
      text: "ええ。すべてはヴァルドレインの掌の上です"
    },
    {
      type: "dialogue",
      name: "セリオス",
      side: "left",
      face: "./assets/img/seriosu.dia.png",
      text: "王国の軍、貴族、そして民衆の認識までも……すべて操作されています"
    },
    {
      type: "summary",
      text: `王都の実権は完全に奪われていた。

もはやこの国は、
かつてクレスが知っていた王国ではない。`
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      face: "./assets/img/kuresu.dia.png",
      text: "……あいつ一人に、ここまでやられるとはな"
    },
    {
      type: "dialogue",
      name: "セリオス",
      side: "left",
      face: "./assets/img/seriosu.dia.png",
      text: "油断は禁物です。今もなお、あなたは最重要指名手配犯です"
    },
    {
      type: "dialogue",
      name: "セリオス",
      side: "left",
      face: "./assets/img/seriosu.dia.png",
      text: "正面から王城に近づけば、即座に囲まれるでしょう"
    },
    {
      type: "summary",
      text: `王城へは近づけない。

だが――
引き返すという選択肢は存在しなかった。`
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      face: "./assets/img/kuresu.dia.png",
      text: "……構わない"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      face: "./assets/img/kuresu.dia.png",
      text: "真実は、俺が取り戻す"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      face: "./assets/img/kuresu.dia.png",
      text: "父上の名も、この国も……全部だ"
    },
    {
      type: "summary",
      text: `その瞳に、かつての王子の迷いはない。

そこにあるのは――
覚悟だった。`
    },
    {
      type: "dialogue",
      name: "セリオス",
      side: "left",
      face: "./assets/img/seriosu.dia.png",
      text: "……ならば、手段は一つです"
    },
    {
      type: "dialogue",
      name: "セリオス",
      side: "left",
      face: "./assets/img/seriosu.dia.png",
      text: "下町から地下通路へ侵入し、王城の裏へ出ます"
    },
    {
      type: "summary",
      text: `それはかつて、
王城から脱出するために使った道。`
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      face: "./assets/img/kuresu.dia.png",
      text: "……あの夜と同じ道か"
    },
    {
      type: "summary",
      text: `炎に包まれた王城。
倒れていった仲間たち。

忘れることのできない記憶が、
静かに蘇る。`
    },
    {
      type: "summary",
      text: `だが今回は違う。

逃げるためではない――

すべてを取り戻すために、
再びその道を進む。`
    },
    {
      type: "summary",
      text: `すべてを奪った男――
ヴァルドレイン。

その元へ、今――踏み込む。`
    }
  ],
  enemies: []
},

};

const MAP_OVERLAYS = {
  village: {
    title: "カルム村 全体図",
    background: "./assets/img/map_village.png",
    spots: [
      {
        id: "chief_house",
        label: "村長の家",
        x: "20%",
        y: "20%",
        action: () => {
          closeMapOverlay();
          openVillageChiefHouse();
        }
      },
      {
        id: "shop",
        label: "道具屋",
        x: "78%",
        y: "35%",
        action: () => {
          closeMapOverlay();
          SHOP_MODE = "buy";
          CURRENT_SHOP_ITEMS = getShopItemsByKeys(MAP_SHOPS.village.buy);
          setShopTabUI();
          renderShopList(CURRENT_SHOP_ITEMS);
          toggleShop(true);
        }
      },
      {
  id: "house_treasure",
  label: "村人の家",
  x: "20%",
  y: "55%",
  action: () => {
    closeMapOverlay();
    openVillageTreasureHintHouse();
  }
},
{
  id: "house_rebellion",
  label: "村人の家",
  x: "20%",
  y: "40%",
  action: () => {
    closeMapOverlay();
    openVillageRebellionHouse();
  }
},
{
  id: "house_oldman",
  label: "村人の家",
  x: "79%",
  y: "57%",
  action: () => {
    closeMapOverlay();
    openVillageOldmanHouse();
  }
},
      {
        id: "treasure",
        label: "宝箱",
        x: "25%",
        y: "80%",
        action: () => {
          openVillageTreasure();
        }
      },
      {
        id: "exit",
        label: "外れ",
        x: "80%",
        y: "75%",
        action: () => {
          showMapMessage("カルム村の外れだ。次の目的地へ向かえそうだ。");
          openMapOverlay(currentMap);
        }
      }
    ]
  },

  plain: {
    title: "アルディア平原 全体図",
    background: "./assets/img/map_plain.jpg",
    spots: [
      {
        id: "battle_area",
        label: "戦闘区域",
        x: "70%",
        y: "45%",
        action: () => {
          closeMapOverlay();
          startStoryStageBattle();
        }
      },
      
      {
  id: "hidden_herb",
  label: "",
  x: "18%",
  y: "78%",
  hidden: true,
  action: () => {
    if (plainHerbTaken) {
      showMapMessage("もう何もなさそうだ。");
      return;
    }

    plainHerbTaken = true;
    saveStoryFlags();

    playerHP = Math.min(playerMaxHP, playerHP + 20);
    updatePlayerHP();

    showMapMessage("草むらから薬草を見つけた！ HPが20回復した！");
    openMapOverlay(currentMap);
  }
},
{
  id: "azure_sanctuary",
  label: "蒼穹の祭壇",
  x: "82%",
  y: "18%",
  hidden: () => !azureSanctuaryOpened,
  action: () => {
    closeMapOverlay();
    openAzraelEvent();
  }
},
    ]
  },

  labyrinth: {
    title: "封印迷宮 全体図",
    background: "./assets/img/map_labyrinth.png",
    spots: [
      {
        id: "entrance",
        label: "入口",
        x: "50%",
        y: "80%",
        action: () => {
          addLog("封印迷宮の入口だ。瘴気が漂っている。");
        }
      },
      {
        id: "deep",
  label: "深部",
  x: "50%",
  y: "25%",
  action: () => {
    closeMapOverlay();
    openLabyrinthDeep();
  }
      }
    ]
  },

  desert: {
  title: "デザリア砂漠 全体図",
  background: "./assets/img/map_desert.png",
  spots: [
    {
      id: "oasis",
      label: "オアシス",
      x: "58%",
      y: "42%",
      action: () => {
        closeMapOverlay();
        openDesertOasis();
      }
    },
    {
      id: "monster_nest",
      label: "魔物の巣",
      x: "22%",
      y: "67%",
      action: () => {
        closeMapOverlay();
        if (canEncounterGranius() && !graniusDefeated) {
      openGraniusEvent();
      return;
    }
        openDesertMonsterNest();
      }
    },
    {
      id: "house",
      label: "民家",
      x: "80%",
      y: "67%",
      action: () => {
        closeMapOverlay();
        openDesertHouse();
      }
    },
    {
      id: "red_dragon_jaw",
      label: "赤竜の下顎",
      x: "16%",
      y: "18%",
      action: () => {
        closeMapOverlay();
        openRedDragonJaw();
      }
    }
  ]
},
  
  gladio: {
  title: "グラディオ廃城 全体図",
  background: "./assets/img/map_gladio.jpg",
  spots: [
    {
      id: "gate",
      label: "正門",
      x: "50%",
      y: "82%",
      action: () => {
        showMapMessage("朽ちた正門だ。冷たい風が吹き込んでいる。");
      }
    },
    {
      id: "courtyard",
      label: "崩れた中庭",
      x: "35%",
      y: "58%",
      action: () => {
        closeMapOverlay();
        startStoryStageBattle();
      }
    },
    {
      id: "library",
      label: "旧書庫",
      x: "73%",
      y: "52%",
      action: () => {
        closeMapOverlay();
        openGladioLibrary();
      }
    },
    {
  id: "hall",
  label: "中央ホール",
  x: "50%",
  y: "46%",
  action: () => {
    closeMapOverlay();
    openGladioHall();
  }
},
{
  id: "prison",
  label: "牢屋",
  x: "80%",
  y: "35%",
  action: () => {
    closeMapOverlay();
    openGladioPrison();
  }
},
    {
      id: "tower",
      label: "見張り塔跡",
      x: "22%",
      y: "28%",
      action: () => {
        closeMapOverlay();
        openGladioTower();
      }
    },
    {
      id: "throne",
      label: "玉座の間",
      x: "52%",
      y: "18%",
      action: () => {
        closeMapOverlay();
        openGladioBossEvent();
      }
    }
  ]
},
gladio_underground: {
  title: "グラディオ廃城 地下迷宮",
  background: "./assets/img/map_gladio_underground.png",
  spots: [
    {
      id: "descend",
      label: "さらに下る",
      x: "50%",
      y: "65%",
      action: () => {
        closeMapOverlay({ keepBattleUIHidden: true });
        descendGladioUnderground();
      }
    },
    {
      id: "return",
      label: "引き返す",
      x: "50%",
      y: "82%",
      action: () => {
        closeMapOverlay();
        openMapOverlay("gladio");
      }
    }
  ]
},

lumenia: {
  title: "海上都市ルーメニア 全体図",
  background: "./assets/img/map_lumenia.png",
  spots: [
    {
      id: "port",
      label: "港",
      x: "45%",
      y: "72%",
      action: () => {
        closeMapOverlay();
        openLumeniaPort();
      }
    },
    {
      id: "market",
      label: "貿易市場",
      x: "58%",
      y: "58%",
      action: () => {
        closeMapOverlay();
        openLumeniaMarket();
      }
    },
    {
      id: "shop",
      label: "ショップ",
      x: "52%",
      y: "42%",
      action: () => {
        closeMapOverlay();
        openMapShop();
      }
    },
    {
      id: "lighthouse",
      label: "灯台",
      x: "50%",
      y: "18%",
      action: () => {
        closeMapOverlay();
        openLumeniaLighthouse();
      }
    },
    {
      id: "guild",
      label: "情報商ギルド",
      x: "68%",
      y: "50%",
      action: () => {
        closeMapOverlay();
        openLumeniaGuild();
      }
    },
    {
      id: "slum",
      label: "裏路地",
      x: "30%",
      y: "65%",
      action: () => {
        closeMapOverlay();
        openLumeniaBackstreet();
      }
    },
    {
      id: "house",
      label: "民家",
      x: "38%",
      y: "48%",
      action: () => {
        closeMapOverlay();
        openLumeniaHouse();
      }
    }
  ]
},
kansho: {
  background: "./assets/img/map_kansho1.png",
  spots: [
    {
      id: "battle_area",
      label: "浅瀬",
      x: "68%",
      y: "52%",
      action: () => {
        closeMapOverlay();
        startKanshoBattle();
      }
    },

    {
      id: "shell_point",
      label: "漂着物",
      x: "24%",
      y: "72%",
      action: () => {
        showMapMessage("潮に流された漂着物が散らばっている。");
        openMapOverlay("kansho");
      }
    },

    {
      id: "leviata_shrine",
      label: "深淵の祭壇",
      x: "78%",
      y: "18%",
      action: () => {
        closeMapOverlay();
        openLeviataEvent();
      }
    }
  ]
},
volcano: {
  title: "ヴォルカノ火山 全体図",
  background: "./assets/img/map_volcano.png",
  spots: [
    {
      id: "battlefield",
      label: "戦場",
      x: "48%",
      y: "70%",
      action: () => {
        closeMapOverlay();
        openVolcanoBattlefield();
      }
    },
    {
      id: "rescue",
      label: "崩落地帯",
      x: "28%",
      y: "52%",
      hidden: () => !volcanoRescueOpened,
      action: () => {
        closeMapOverlay();
        openVolcanoRescueEvent();
      }
    },
    {
      id: "mid",
      label: "熔岩回廊",
      x: "63%",
      y: "44%",
      hidden: () => !volcanoMidOpened,
      action: () => {
        closeMapOverlay();
        openVolcanoMidEvent();
      }
    },
    {
      id: "core",
      label: "火口深部",
      x: "50%",
      y: "20%",
      hidden: () => !volcanoCoreOpened,
      action: () => {
        closeMapOverlay();
        openVolcanoCoreEvent();
      }
    },
    {
  id: "summit",
  label: "火山頂上",
  x: "68%",
  y: "8%",
  hidden: () => !volcanoSummitOpened,
  action: () => {
    closeMapOverlay();
    startMapStory("volcano_summit");
  }
}
  ]
},
frost_peak: {
  title: "氷上都市ニーベリア 全体図",
  background: "./assets/img/map_frost_peak.png",
  spots: [
    {
      id: "frozen_field",
      label: "凍土平原",
      x: "35%",
      y: "72%",
      action: () => {
        closeMapOverlay();
        openFrostField();
      }
    },
    {
      id: "ice_ruins",
      label: "氷結神殿跡",
      x: "58%",
      y: "48%",
      action: () => {
        closeMapOverlay();
        openFrostRuins();
      }
    },
    {
      id: "dragon_lair",
      label: "氷神域",
      x: "52%",
      y: "18%",
      hidden: () => !frostDragonLairOpened,
      action: () => {
        closeMapOverlay();
        openFrostDragonBoss();
      }
    }
  ]
},

castle: {
  title: "エストリア王城",
  background: "./assets/img/map_estria_castle.png",
  spots: [
    {
      id: "underground_prison",
      label: "地下通路",
      
      x: "70%",
      y: "90%",
      action: () => openEstriaUndergroundEvent()
    },
    {
      id: "dungeon",
      label: "地下牢",
      x: "30%",
      y: "70%",
      unlocked: false,
      action: () => openEstriaPrison()
    },
    {
      id: "back_corridor",
      label: "裏廊下",
      x: "80%",
      y: "70%",
      unlocked: false,
      action: () => openEstriaCorridor()
    },
    {
      id: "stairs",
      label: "大階段",
      x: "50%",
      y: "45%",
      unlocked: false,
      action: () => openEstriaStairs()
    },
    {
      id: "hall",
      label: "王城ホール",
      x: "40%",
      y: "30%",
      unlocked: false,
      action: () => openEstriaHall()
    },
    {
      id: "throne",
      label: "玉座の間",
      x: "50%",
      y: "10%",
      unlocked: false,
      action: () => openEstriaFinalScene()
    }
  ]
},
};


//TODO---マップ用スポット定義
const grassNode = {
  id: "grass",
  label: "",
  x: "30%",
  y: "60%",
  action: () => {
    if (grassTaken) {
      addLog("もう何もなさそうだ…");
      return;
    }
    grassTaken = true;
    addLog("薬草を見つけた！");
    playerHP = Math.min(playerMaxHP, playerHP + 20);
    updatePlayerHP();
    // ボタンを消す
    const el = document.querySelector('[data-node="grass"]');
    if (el) el.style.display = "none";
  }
};







//TODOストーリーイベント定義
//村
const VILLAGE_CHIEF_EVENT = [
  {
    type: "dialogue",
    name: "村長",
    side: "left",
    face: "./assets/img/village_chief.png",
    text: "クレス……本当に行くのじゃな"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……ああ。このまま村にいれば、みんなを巻き込む"
  },
  {
    type: "dialogue",
    name: "村長",
    side: "left",
    face: "./assets/img/village_chief.png",
    text: "おぬしが背負うものは大きい。じゃが、一人で抱え込みすぎるでないぞ"
  },
  {
    type: "dialogue",
    name: "村長",
    side: "left",
    face: "./assets/img/village_chief.png",
    text: "せめてこれを持っていくがよい。旅の助けになるはずじゃ"
  },
  {
    type: "summary",
    text: "村長から『癒しの果実』を受け取った。"
  }
];

const VILLAGE_PEOPLE_EVENT = [
  {
    type: "dialogue",
    name: "村人",
    side: "left",
    face: "./assets/img/villager.png",
    text: "王都で反乱が起きたなんて……まだ信じられないよ"
  },
  {
    type: "dialogue",
    name: "村人",
    side: "left",
    face: "./assets/img/villager.png",
    text: "兵士までこの村に来るなんて、いったい国はどうなっちまうんだ……"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……"
  },
  {
    type: "summary",
    text: "村人は不安げに空を見上げていた。"
  }
];

const VILLAGE_OLDMAN_EVENT = [
  {
    type: "dialogue",
    name: "老人",
    side: "left",
    face: "./assets/img/villager_old.png",
    text: "……おや、おぬしらは旅の者か"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "ああ。このあたりで何か妙な話はないか？"
  },
  {
    type: "dialogue",
    name: "老人",
    side: "left",
    face: "./assets/img/villager_old.png",
    text: "妙な話、か……なら一つある"
  },
  {
    type: "dialogue",
    name: "老人",
    side: "left",
    face: "./assets/img/villager_old.png",
    text: "この近くに、古びた城があるのは知っておるか？"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "……ああ、噂程度には"
  },
  {
    type: "dialogue",
    name: "老人",
    side: "left",
    face: "./assets/img/villager_old.png",
    text: "今ではただの廃墟じゃ。だが、昔は誰もむやみに近づこうとはせなんだ"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "何か理由があるのか？"
  },
  {
    type: "dialogue",
    name: "老人",
    side: "left",
    face: "./assets/img/villager_old.png",
    text: "あそこにはな……地下へ続く“隠し通路”があると言われておる"
  },
  {
    type: "dialogue",
    name: "老人",
    side: "left",
    face: "./assets/img/villager_old.png",
    text: "崩れた石の奥……どこかに封じられた入口があるらしい"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "地下……か"
  },
  {
    type: "dialogue",
    name: "老人",
    side: "left",
    face: "./assets/img/villager_old.png",
    text: "わしが若い頃、村へ流れてきた旅の兵士がこんなことを言っておった"
  },
  {
    type: "dialogue",
    name: "老人",
    side: "left",
    face: "./assets/img/villager_old.png",
    text: "“あの城には、上に見えているものより深い場所がある”とな"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "……ただの地下倉庫ではない、ということか"
  },
  {
    type: "dialogue",
    name: "老人",
    side: "left",
    face: "./assets/img/villager_old.png",
    text: "うむ。昔は何かを隠していた場所だ、とも聞く"
  },
  {
    type: "dialogue",
    name: "老人",
    side: "left",
    face: "./assets/img/villager_old.png",
    text: "財宝だと言う者もおった"
  },
  {
    type: "dialogue",
    name: "老人",
    side: "left",
    face: "./assets/img/villager_old.png",
    text: "じゃが、わしはそうは思わん"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "なぜだ？"
  },
  {
    type: "dialogue",
    name: "老人",
    side: "left",
    face: "./assets/img/villager_old.png",
    text: "宝を隠すためだけなら、ああまで物々しい噂は残らん"
  },
  {
    type: "dialogue",
    name: "老人",
    side: "left",
    face: "./assets/img/villager_old.png",
    text: "あるいは、決して外に出してはならぬ“何か”を封じていたのではないか……とな"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "……"
  },
  {
    type: "dialogue",
    name: "老人",
    side: "left",
    face: "./assets/img/villager_old.png",
    text: "……だがな"
  },
  {
    type: "dialogue",
    name: "老人",
    side: "left",
    face: "./assets/img/villager_old.png",
    text: "本当に気味が悪いのは、そこへ入った者の話じゃ"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "入った者がいたのか？"
  },
  {
    type: "dialogue",
    name: "老人",
    side: "left",
    face: "./assets/img/villager_old.png",
    text: "何人かな。だが、皆そろって同じことを口にした"
  },
  {
    type: "dialogue",
    name: "老人",
    side: "left",
    face: "./assets/img/villager_old.png",
    text: "“地の底から、何かに見られている気がする”とな……"
  },
  {
    type: "dialogue",
    name: "老人",
    side: "left",
    face: "./assets/img/villager_old.png",
    text: "耳元で囁かれたと言う者もおれば、誰もおらんはずの奥で足音を聞いたと言う者もおった"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "……不気味だな"
  },
  {
    type: "dialogue",
    name: "老人",
    side: "left",
    face: "./assets/img/villager_old.png",
    text: "うむ。しかも妙なのは、それだけではない"
  },
  {
    type: "dialogue",
    name: "老人",
    side: "left",
    face: "./assets/img/villager_old.png",
    text: "中へ入った者は皆、帰ってきた後しばらく同じ夢を見るそうじゃ"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "夢？"
  },
  {
    type: "dialogue",
    name: "老人",
    side: "left",
    face: "./assets/img/villager_old.png",
    text: "暗い石の階段を、どこまでも下り続ける夢じゃ"
  },
  {
    type: "dialogue",
    name: "老人",
    side: "left",
    face: "./assets/img/villager_old.png",
    text: "そして夢の底で、誰かがじっとこちらを見上げておる……とな"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "……それは、ただの噂で済ませるには出来すぎている"
  },
  {
    type: "dialogue",
    name: "老人",
    side: "left",
    face: "./assets/img/villager_old.png",
    text: "じゃろう？ だから村の者は近づかん"
  },
  {
    type: "dialogue",
    name: "老人",
    side: "left",
    face: "./assets/img/villager_old.png",
    text: "忠告しておく。あそこに足を踏み入れるなら、覚悟を決めていくことじゃ"
  },
  {
    type: "dialogue",
    name: "老人",
    side: "left",
    face: "./assets/img/villager_old.png",
    text: "あれは、ただの古い城ではない"
  },
  {
    type: "summary",
    text: "老人の語る“地下の噂”が、妙に心に引っかかった……"
  }
];

const POST_BATTLE_LEVEL5_STORY = [
  {
    type: "summary",
    text: `激戦の末、
追手を退けることには成功した。

だが、このまま村に留まれば
いずれさらに多くの兵が
押し寄せてくるだろう。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……もう、ここには居られない"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "これ以上、俺のせいで誰かが傷つくのは耐えられない"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "ならば参りましょう、殿下。次に向かうべきはアルディア平原です"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "ああ……行こう"
  },
  {
    type: "summary",
    text: `こうしてクレスたちは
カルム村を後にする。

王城を追われた王子の旅は
新たな仲間と運命に出会うため、
次の地へと続いていく──`
  },
  
];

const PEACE_VILLAGE_STORY = [
  {
    type: "summary",
    text: "ヴァルドレイン討伐の報せは、静かにカルム村にも届いていた。"
  },
  {
    type: "summary",
    text: "村を包んでいた不安は薄れ、人々の表情にもようやく安堵が戻っている。"
  },
  {
    type: "dialogue",
    name: "村人",
    side: "left",
    text: "最近は、夜も前ほど怖くなくなったよ"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……少しでも、平和が戻ったならいい"
  },
  {
    type: "summary",
    text: "小さな村に吹く風は、かつてよりも穏やかだった。"
  }
];

//平原
const ALDIA_PLAIN_INTRO = [
  {
    type: "summary",
    text: `📖 第二章「平原の出会い」

舞台：アルディア平原`
  },
  {
    type: "summary",
    text: `カルム村を後にしたクレスたちは
夜明けの光が差し始める頃、
広大なアルディア平原へと辿り着いた。`
  },
  {
    type: "summary",
    text: `どこまでも続く草原。
頬を撫でる風は穏やかだったが、
その静けさは
かえって旅の孤独を際立たせていた。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……村を出てしまったな"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "あの場に留まっていれば、いずれ村人たちを巻き込んでいました"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "わかっている。だが……また守れなかった気がしてならない"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "いいえ、殿下は守りました。だからこそ、彼らは今も生きています"
  },
  {
    type: "summary",
    text: `クレスは足を止め、
遥か遠くに霞む王都の方角を見つめた。

奪われた祖国。
失った地位。
そして、この手から零れ落ちていった多くの命。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……必ず取り戻す。この国も、父上の無念も、すべて"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "その意志こそが、今のあなたを支える力です"
  },
  {
    type: "summary",
    text: `その時――

草原の奥から、
獣の唸り声のような不気味な音が
風に乗って響いてきた。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "……気をつけてください、殿下。この平原、魔物の気配があります"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "追手だけじゃない、か……"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "だが立ち止まるわけにはいかない。ここから先へ進むためにも、切り開くしかない"
  },
  {
    type: "summary",
    text: `王子の逃避行は、
やがて国を巡る大きな運命へと繋がっていく。

その始まりとなる戦いが、
今、アルディア平原で幕を開けようとしていた。`
  }
];

const PEACE_PLAIN_STORY = [
  {
    type: "summary",
    text: "アルディア平原には、戦いの気配ではなく、草原を渡る風の音が満ちていた。"
  },
  {
    type: "summary",
    text: "かつて追手や魔物に怯えながら進んだこの場所も、今はどこか懐かしく感じられる。"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "平原が静かなだけで、こうも景色が違って見えるものなのですね"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "ああ。やっと、ただの風景として見られる"
  }
];

//迷宮
const SEALED_LABYRINTH_UNLOCK_STORY = [
  {
    type: "summary",
    text: `アルディア平原を進むクレスたちの前に、
巨大な岩山が立ちはだかった。

風は止み、草は揺れず、
まるでこの一帯だけが世界から切り離されたかのように静まり返っている。`
  },
  {
    type: "summary",
    text: `岩山の裂け目の奥には、
古びた石造りの入口が静かに口を開けていた。

長い年月を経たはずの石壁は、
奇妙なほど崩れもなく、まるで“何かに守られている”ようだった。`
  },
  {
    type: "summary",
    text: `だが、その周囲には――
不自然なほど濃い魔物の気配が漂っている。

視界の端で影が蠢き、
耳を澄ませば、低い唸り声が絶え間なく響いていた。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……魔物の数が多すぎる"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "ただの平原にしては異常だ……何かが、この場所を歪めている"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "おそらく……原因はあの遺跡でしょう"
  },
  {
    type: "summary",
    text: `セリオスが指差した先――

そこには、巨大な石の門が刻まれた
古代遺跡があった。

門には複雑な紋様が刻まれており、
見る者に言い知れぬ圧迫感を与える。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "あれは……遺跡か？"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "いいえ……あれは『封印迷宮』です"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "封印迷宮……？"
  },
  {
    type: "summary",
    text: `セリオスは一瞬だけ言葉を選ぶように沈黙し、
やがて静かに語り始めた。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "エストリア王国を築いた初代国王――"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "その御方は、かつて“災厄”と呼ばれた魔物を討ち倒しました"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "災厄……？"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "はい。国を一つ滅ぼしかねないほどの存在だったと記録されています"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "ですが……完全に滅ぼすことはできなかった"
  },
  {
    type: "summary",
    text: `風が一瞬、冷たく吹き抜ける。

セリオスの声には、
わずかに緊張が混じっていた。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "その魔物は、この迷宮の奥深くに封じられ――"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "王国によって、長い年月をかけて封印され続けてきたのです"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……魔物が眠っているのか"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "はい。今も封印は破られてはいません"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "ですが……その存在だけで瘴気が溢れ、魔物を引き寄せてしまうのです"
  },
  {
    type: "summary",
    text: `まるで迷宮そのものが、
魔物を呼び寄せる“核”であるかのように――

周囲には異様な気配が渦巻いていた。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "だからこの辺りだけ魔物が多いのか……"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "ええ……そして、封印が弱まっている可能性もあります"
  },
  {
    type: "summary",
    text: `その言葉に、空気が一層重く沈んだ。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "放っておけば、魔物は増え続ける……"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……なら、この迷宮を調べる必要があるな"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "危険な場所です。内部は記録すらほとんど残っていません"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "ですが……殿下の判断に従います"
  },
  {
    type: "summary",
    text: `クレスは静かに頷いた。

その瞳には、不安ではなく――
王としての決意が宿っていた。`
  },
  {
    type: "summary",
    text: `こうして新たな探索地――

『封印迷宮』が
クレスたちの前に姿を現した。`
  }
];

const LABYRINTH_SEAL_MONSTER_EVENT = [
  {
    type: "summary",
    text: `封印迷宮の最深部。

そこは、これまでの階層とは明らかに異なる空間だった。`
  },
  {
    type: "summary",
    text: `空気は重く淀み、
呼吸をするだけで胸が締め付けられる。

床一面には巨大な封印陣が刻まれ、
淡い光が脈打つように明滅している。`
  },
  {
    type: "summary",
    text: `その中心――

異形の魔物が、
無数の鎖と光の楔によって縛りつけられていた。`
  },
  {
    type: "summary",
    text: `それは“生きている”のかすら分からない。

だが、その存在だけで
周囲の空間が歪み、瘴気が溢れ出している。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……これが……"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "……はい。これが、先代の王によって封じられた魔物……"
  },
  {
    type: "summary",
    text: `セリオスの声は、わずかに低く沈んでいた。

その視線は魔物から逸らされることなく、
どこか張り詰めている。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "今もなお……封印され続けているのか"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "ええ……ですが――"
  },
  {
    type: "summary",
    text: `次の瞬間。

封印陣の光が、不規則に揺らいだ。`
  },
  {
    type: "summary",
    text: `まるで“何か”が内側から押し返しているかのように、
鎖がわずかに軋む音を立てる。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……今のは……"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "封印が……弱まっています"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "長い年月で力が薄れたのか……あるいは――"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "あるいは？"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "……何かが、この封印に干渉しているのかもしれません"
  },
  {
    type: "summary",
    text: `その言葉に、空気がさらに冷たくなる。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "放っておいても……いずれこの魔物は、自力で蘇るでしょう"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "その時、この地だけでなく……王国全体に被害が及ぶ可能性があります"
  },
  {
    type: "summary",
    text: `クレスは黙って魔物を見つめた。

その存在は、
ただそこにあるだけで“脅威”だった。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……これを、先代は倒しきれなかったのか"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "……ええ"
  },
  {
    type: "summary",
    text: `短い返答。

だが、その裏にある“何か”を、
クレスは感じ取っていた。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……このままにはしておけないな"
  }
];

const LABYRINTH_SEAL_CHOICE_EVENT = [
  {
    type: "summary",
    text: `封印陣の光が、ゆっくりと脈打つ。

その中心に立つクレスの剣が、
微かに共鳴するように震え始めていた。`
  },
  {
    type: "summary",
    text: `まるで封印と剣が、
互いを認識しているかのように――`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "……王家の剣が、封印陣に反応しています"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "この剣が……？"
  },
  {
    type: "summary",
    text: `剣を握る手に、微かな熱が伝わる。

それは拒絶ではなく――
“呼びかけ”のような感覚だった。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……この剣なら、封印を解くことができるのか"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "おそらくは"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "先代王の血筋に連なる力……それが、この封印に干渉できるのでしょう"
  },
  {
    type: "summary",
    text: `セリオスは封印陣を見つめながら、
ゆっくりと言葉を続ける。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "この封印は、“外から破る”ものではありません"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "王の力によって、“解かれる”ことを前提に作られている……"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "つまり……"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "はい。殿下の意思ひとつで、この封印は解けます"
  },
  {
    type: "summary",
    text: `その言葉が、重く響く。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "ですが……封印を解けば、魔物は目覚めます"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "それは、先代王ですら討ちきれなかった存在です"
  },
  {
    type: "summary",
    text: `封印陣の光が、不気味に揺らぐ。

まるでその言葉に応えるかのように――`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "もし目覚めれば……この迷宮だけでは済まないでしょう"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "王国全土に被害が及ぶ可能性すらあります"
  },
  {
    type: "summary",
    text: `クレスは剣を握りしめた。

その重みは、ただの武器のものではない。

王としての責任――
そのすべてが、この選択にかかっている。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……"
  },
  {
    type: "summary",
    text: `封印を維持するか。

それとも、危険を承知で真実に踏み込むか――`
  },
  {
    type: "choice",
    choices: [
      {
        text: "封印を解除する",
        result: "release"
      },
      {
        text: "今はやめておく",
        result: "leave"
      }
    ]
  }
];

const LABYRINTH_RELEASE_EVENT = [
  {
    type: "summary",
    text: `クレスは静かに剣を構えた。

王家の剣が、低く唸るように震えている。`
  },
  {
    type: "summary",
    text: `その刃を、封印陣へと向けた瞬間――

古い紋様が、まるで呼応するかのように激しく輝き始めた。`
  },
  {
    type: "summary",
    text: `光は脈打ち、
迷宮全体が震える。`
  },
  {
    type: "summary",
    text: `――バキッ

乾いた音とともに、
一本の光の鎖が砕け散った。`
  },
  {
    type: "summary",
    text: `続いて、もう一本。

そして、また一本――

封印は、確実に崩れ始めていた。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "……来ます……！"
  },
  {
    type: "summary",
    text: `次の瞬間――

空気が変わった。`
  },
  {
    type: "summary",
    text: `重く、粘つくような圧力が、
その場にいる全員を押し潰そうとする。`
  },
  {
    type: "summary",
    text: `封印陣の中心。

動くはずのない魔物の影が、
ゆっくりと揺れた。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……目覚めるか"
  },
  {
    type: "summary",
    text: `最後の鎖が、軋む。`
  },
  {
    type: "summary",
    text: `――そして、砕けた。`
  },
  {
    type: "summary",
    text: `一瞬。

すべての音が消えた。`
  },
  {
    type: "summary",
    text: `次の瞬間――

封じられていた瘴気が、爆発するように溢れ出した。`
  },
  {
    type: "summary",
    text: `空間が歪み、
光がねじれ、
視界が黒く染まる。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "――完全に、解放されます！"
  },
  {
    type: "summary",
    text: `魔物の身体が、ゆっくりと動き出す。`
  },
  {
    type: "summary",
    text: `それは“目覚める”というより――

長い眠りから、“戻ってきた”ようだった。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "退くな……ここで倒す！"
  },
  {
    type: "summary",
    text: `その言葉に応えるように――

魔物の“目”が、ゆっくりと開かれた。`
  },
  {
    type: "summary",
    text: `封印されし魔物が、ついに目を覚ました――`
  }
];

const LABYRINTH_DEEP_EVENT = [
  {
    type: "summary",
    text: `封印迷宮の最深部へ続く道が、静かに口を開けている。

そこから流れ出してくる空気は、ただ冷たいだけではなかった。
肌に触れた瞬間、ぞっとするような不快さが全身を這い上がってくる。`
  },
  {
    type: "summary",
    text: `石壁には古い傷跡のような刻印が無数に残されていた。

まるでかつてこの先へ踏み込んだ者たちが、
少しでも“何か”を封じようともがいた痕跡のようだった。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "……この先は、これまでとは比べものにならないほど危険です"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "瘴気の濃度も異常ですが……それ以上に、空間そのものが侵入者を拒んでいるように感じます"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "ああ……ここまでの魔物たちとは、気配の重さが違う"
  },
  {
    type: "summary",
    text: `通路の奥は暗く、どこまで続いているのかも分からない。

だがその闇のさらに向こうに、
この迷宮を支配する何かが確かに息づいている――
そんな確信だけが、胸の奥に重く沈んでいた。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "今ならまだ引き返せます。ですが……もし封印が本当に限界に近いのなら、放置することはできません"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "ああ……だが、ここまで来た以上、進まないわけにはいかない"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "もしここに災いが封じられているなら、逃げてもいずれ外へ溢れ出す。なら、向き合うしかない"
  },
  {
    type: "summary",
    text: `クレスは静かに剣の柄へ手をかけた。

その仕草は、自らを奮い立たせるためのものでもあり、
この先に待つものを受け入れる覚悟の表れでもあった。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "……承知しました。ならば、私も最後までお供します"
  },
  {
    type: "summary",
    text: `二人は短く視線を交わし、
言葉少なに最深部への道へと足を踏み入れた。

瘴気がさらに濃くなっていく……。`
  }
];

const VALGRAVE_INTRO_EVENT = [
  {
    type: "summary",
    text: `封印陣の奥――

幾重にも重ねられた鎖と光の楔に縛られた“それ”が、
ゆっくりと顔を上げた。`
  },
  {
    type: "summary",
    text: `鎧は砕け、長い年月に晒されたかのように朽ちかけている。

だが、その奥に宿る気配だけは、
今なお消えることなく、鋭く空間を切り裂いていた。`
  },
  {
    type: "summary",
    text: `目が合った瞬間――

まるで深淵そのものに覗き込まれたかのような
圧倒的な重圧が、クレスの全身を貫く。`
  },
  {
    type: "dialogue",
    name: "？？？",
    side: "left",
    text: "……その剣……"
  },
  {
    type: "dialogue",
    name: "？？？",
    side: "left",
    text: "王の血か……だが、その力はまだ浅い"
  },
  {
    type: "summary",
    text: `低く、かすれた声。

だがその響きには、
かつて王と刃を交えた者だけが持つ重みが宿っていた。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    text: "まさか……この気配……"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    text: "伝承に記された……王の宿敵……！？"
  },
  {
    type: "summary",
    text: `セリオスの声が震える。

それは恐怖ではない。
歴史の中で語られる“存在そのもの”への畏怖だった。`
  },
  {
    type: "dialogue",
    name: "ヴァルグレイヴ",
    side: "left",
    text: "……ようやく思い出したか"
  },
  {
    type: "dialogue",
    name: "ヴァルグレイヴ",
    side: "left",
    text: "我が名は――ヴァルグレイヴ"
  },
  {
    type: "summary",
    text: `その名が響いた瞬間、
封印陣がわずかに軋み、空気が震えた。`
  },

  // 回想ここから
  {
    type: "summary",
    text: `その瞬間――

クレスの脳裏に、まるで自分の記憶ではない
遠い光景が流れ込んできた。`
  },
  {
    type: "summary",
    text: `燃え盛る戦場。
砕け散る城壁。
空を覆う黒雲の下、二人の男が向かい合っている。`
  },
  {
    type: "dialogue",
    name: "若き王",
    side: "right",
    text: "ヴァルグレイヴ……まだ引き返せる"
  },
  {
    type: "dialogue",
    name: "ヴァルグレイヴ",
    side: "left",
    text: "引き返す？"
  },
  {
    type: "dialogue",
    name: "ヴァルグレイヴ",
    side: "left",
    text: "王よ、それは弱き者の言葉だ"
  },
  {
    type: "summary",
    text: `漆黒の瘴気が、ヴァルグレイヴの足元から噴き上がる。

その力は、ただの魔力ではない。
見ているだけで心を削るような、異質な“何か”だった。`
  },
  {
    type: "dialogue",
    name: "若き王",
    side: "right",
    text: "……悪魔と契約したのか"
  },
  {
    type: "dialogue",
    name: "ヴァルグレイヴ",
    side: "left",
    text: "そうだ"
  },
  {
    type: "dialogue",
    name: "ヴァルグレイヴ",
    side: "left",
    text: "人の力には限界がある。ならば超えればいい"
  },
  {
    type: "dialogue",
    name: "ヴァルグレイヴ",
    side: "left",
    text: "国を守るためにも、世界を支配するためにも……力は絶対だ"
  },
  {
    type: "dialogue",
    name: "若き王",
    side: "right",
    text: "それは守る力ではない"
  },
  {
    type: "dialogue",
    name: "若き王",
    side: "right",
    text: "お前はもう、人として越えてはならぬ一線を越えた"
  },
  {
    type: "summary",
    text: `二人はかつて、同じ時代に並び立つ英雄だった。

だが片や民を守る王として、
片や力そのものを求める覇者として、
その道は決定的に分かたれていた。`
  },
  {
    type: "dialogue",
    name: "ヴァルグレイヴ",
    side: "left",
    text: "王よ……貴様は甘い"
  },
  {
    type: "dialogue",
    name: "ヴァルグレイヴ",
    side: "left",
    text: "力なき正義では、何一つ守れぬ"
  },
  {
    type: "dialogue",
    name: "若き王",
    side: "right",
    text: "ならば証明してみせよう"
  },
  {
    type: "dialogue",
    name: "若き王",
    side: "right",
    text: "人の理を捨てずとも、お前を止められると"
  },
  {
    type: "summary",
    text: `剣と闇が激突する。

白き光と黒き深淵が衝突し、
天地を裂くような轟音が戦場に響き渡った。`
  },
  {
    type: "summary",
    text: `そして最後に残ったのは、
膝をついたヴァルグレイヴと、
剣を掲げた王の姿だった。`
  },
  {
    type: "dialogue",
    name: "若き王",
    side: "right",
    text: "……滅ぼしはしない"
  },
  {
    type: "dialogue",
    name: "若き王",
    side: "right",
    text: "お前の罪も、力も、この迷宮の底で封じる"
  },
  {
    type: "dialogue",
    name: "ヴァルグレイヴ",
    side: "left",
    text: "王よ……それが情けだというのなら"
  },
  {
    type: "dialogue",
    name: "ヴァルグレイヴ",
    side: "left",
    text: "いつか必ず、貴様の血がその代償を払うことになるぞ……"
  },
  {
    type: "summary",
    text: `視界が白く弾け――

回想は、そこで途切れた。`
  },
  // 回想ここまで

  {
    type: "summary",
    text: `気づけば再び、クレスたちは封印陣の前に立っていた。

だが胸には、遠い時代の戦いの残響が
確かに焼きついている。`
  },
  {
    type: "dialogue",
    name: "ヴァルグレイヴ",
    side: "left",
    text: "……見えたか"
  },
  {
    type: "dialogue",
    name: "ヴァルグレイヴ",
    side: "left",
    text: "かつて王と我が、何を賭して刃を交えたのかを"
  },
  {
    type: "dialogue",
    name: "ヴァルグレイヴ",
    side: "left",
    text: "我は力を求め――人の理を捨てた"
  },
  {
    type: "dialogue",
    name: "ヴァルグレイヴ",
    side: "left",
    text: "悪魔と契約し、この身に“深淵”を宿したのだ"
  },
  {
    type: "summary",
    text: `その言葉と共に、
彼の体から禍々しい気配がにじみ出る。

それは明らかに、人のものではなかった。`
  },
  {
    type: "dialogue",
    name: "ヴァルグレイヴ",
    side: "left",
    text: "王はそれを“禁忌”と呼び……我を討った"
  },
  {
    type: "dialogue",
    name: "ヴァルグレイヴ",
    side: "left",
    text: "だが殺しきれず……この迷宮に封じた"
  },
  {
    type: "summary",
    text: `鎖が軋む。

長い封印の中でもなお、
その力は完全には失われていない。`
  },
  {
    type: "dialogue",
    name: "ヴァルグレイヴ",
    side: "left",
    text: "遅かったな……"
  },
  {
    type: "dialogue",
    name: "ヴァルグレイヴ",
    side: "left",
    text: "王は、もういない"
  },
  {
    type: "dialogue",
    name: "ヴァルグレイヴ",
    side: "left",
    text: "だが……血は続いているようだ"
  },
  {
    type: "summary",
    text: `その視線が、クレスへと突き刺さる。

まるで試すかのように――`
  },
  {
    type: "dialogue",
    name: "ヴァルグレイヴ",
    side: "left",
    text: "ならば見せてみよ……王の後継者よ"
  },
  {
    type: "dialogue",
    name: "ヴァルグレイヴ",
    side: "left",
    text: "我を再び封じるだけの力が、貴様にあるのかをな……！"
  }
];

const EARLY_AREA_LEVEL_CAP_STORY = [
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "……殿下、ここまでです。この周辺で得られる経験には限界があります"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "これ以上は、この地に留まっていても大きな成長は望めない……ということか"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "はい。先へ進み、新たな土地へ向かうべきです"
  },
  {
    type: "summary",
    text: "この地での成長は限界に達した。新たな地へ向かおう。"
  }
];


//マルシア
const MARCIA_UNLOCK_STORY = [
  {
    type: "summary",
    text: `アルディア平原での戦いを重ね、
クレスたちは確かな成長を実感していた。

だが同時に、この地に漂う異変の気配もまた、
よりはっきりと感じられるようになっていた。`
  },
  {
    type: "summary",
    text: `倒してもなお湧き続ける魔物、
広がりつつある瘴気――

それは単なる偶然ではなく、
どこかに原因が存在していることを示していた。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……この平原、どこかおかしい"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "魔物の数も、質も……普通じゃない"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "はい……私も同感です"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "この異変の原因を探るには、もう少し広い情報が必要でしょう"
  },
  {
    type: "summary",
    text: `セリオスは地図を取り出し、
ひとつの都市を指し示した。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "この先に――マルシア商業都市があります"
  },
  {
    type: "summary",
    text: `マルシア。

王都に次ぐ規模を誇る交易の中心地であり、
多くの人間と情報が行き交う場所だ。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "商業都市か……"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "旅人や傭兵も多そうだな"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "ええ。商人、冒険者、傭兵……あらゆる人間が集まります"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "それだけに、噂や裏の情報も手に入りやすいはずです"
  },
  {
    type: "summary",
    text: `人が集まる場所には、
必ず情報と――そして思惑が集まる。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "ただし……注意も必要です"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "注意？"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "あの都市は中立を掲げていますが……裏では様々な勢力が動いていると聞きます"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "殿下の立場が知られれば、面倒に巻き込まれる可能性もあるでしょう"
  },
  {
    type: "summary",
    text: `王族としての身分。

それは時に、力であると同時に
足枷にもなり得る。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……なら、なおさら行くべきだな"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "情報があるなら、掴みに行く"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "この異変を放っておくわけにはいかない"
  },
  {
    type: "summary",
    text: `その言葉には、王族としてではなく、
一人の戦士としての決意が込められていた。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "……承知しました、殿下"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "では、マルシアへ向かいましょう"
  },
  {
    type: "summary",
    text: `こうしてクレスたちは、
新たな目的地――

交易と欲望、そして情報が渦巻く都市
『マルシア商業都市』へと足を踏み出すこととなった。`
  }
];

const MERUDI_MANSION_EVENT = [
{
type:"summary",
text:`都市の一角に、ひときわ大きな屋敷が建っていた。

重厚な門には古い紋章が刻まれている。`
},
{
type:"dialogue",
name:"クレス",
side:"right",
face:"./assets/img/kuresu.dia.png",
text:"立派な屋敷だな"
},
{
type:"dialogue",
name:"セリオス",
side:"left",
face:"./assets/img/seriosu.dia.png",
text:"……その紋章"
},
{
type:"dialogue",
name:"クレス",
side:"right",
face:"./assets/img/kuresu.dia.png",
text:"知っているのか？"
},
{
type:"dialogue",
name:"セリオス",
side:"left",
face:"./assets/img/seriosu.dia.png",
text:"王国でも名の知れた魔導名門家の紋章です"
},
{
type:"dialogue",
name:"クレス",
side:"right",
face:"./assets/img/kuresu.dia.png",
text:"魔導名門家……"
},
{
type:"dialogue",
name:"セリオス",
side:"left",
face:"./assets/img/seriosu.dia.png",
text:`優れた魔導士を多く輩出した家系です。

魔導学院の教師にも、この家の出身者が多い`
},
{
type:"summary",
text:`セリオスは門の紋章をじっと見つめた。`
},
{
type:"dialogue",
name:"セリオス",
side:"left",
face:"./assets/img/seriosu.dia.png",
text:"確か……この家の娘の名は――"
},
{
type:"dialogue",
name:"セリオス",
side:"left",
face:"./assets/img/seriosu.dia.png",
text:"メルディ"
},
{
type:"dialogue",
name:"クレス",
side:"right",
face:"./assets/img/kuresu.dia.png",
text:"……道具屋の少女か"
},
{
type:"dialogue",
name:"セリオス",
side:"left",
face:"./assets/img/seriosu.dia.png",
text:"おそらく"
},
{
type:"summary",
text:`だが、屋敷の門は固く閉ざされていた。`
},
{
type:"dialogue",
name:"クレス",
side:"right",
face:"./assets/img/kuresu.dia.png",
text:"ここに住んでいるのか？"
},
{
type:"dialogue",
name:"セリオス",
side:"left",
face:"./assets/img/seriosu.dia.png",
text:"……それは分かりません"
},
{
type:"dialogue",
name:"セリオス",
side:"left",
face:"./assets/img/seriosu.dia.png",
text:`ただ、名門の娘が道具屋で働いているとは
少々不自然ですね`
},
{
type:"summary",
text:`屋敷は静まり返っていた。`
},
{
type:"dialogue",
name:"セリオス",
side:"left",
face:"./assets/img/seriosu.dia.png",
text:"事情があるのでしょう"
},
{
type:"summary",
text:`クレスはもう一度だけ屋敷を振り返った。`
}
];

const MERUDI_SHOP_EVENT = [
  {
type:"summary",
text:`マルシア商業都市の道具屋。

店内には薬品や魔導素材が並び、
独特の匂いが漂っていた。`
},
{
type:"dialogue",
name:"？？？",
side:"left",
face:"./assets/img/merudi.dia.png",
text:"あ、それ――"
},
{
type:"dialogue",
name:"クレス",
side:"right",
face:"./assets/img/kuresu.dia.png",
text:"？"
},
{
type:"dialogue",
name:"？？？",
side:"left",
face:"./assets/img/merudi.dia.png",
text:"その薬草と魔石、同じ袋に入れると爆発するよ"
},
{
type:"dialogue",
name:"クレス",
side:"right",
face:"./assets/img/kuresu.dia.png",
text:"爆発！？"
},
{
type:"dialogue",
name:"セリオス",
side:"right",
face:"./assets/img/seriosu2.dia.png",
text:"……本当ですか？"
},
{
type:"dialogue",
name:"？？？",
side:"left",
face:"./assets/img/merudi.dia.png",
text:`うん。小さいけどね。

前にやったことあるから`
},
{
type:"dialogue",
name:"セリオス",
side:"right",
face:"./assets/img/seriosu2.dia.png",
text:"つまり実験したのですね"
},
{
type:"dialogue",
name:"？？？",
side:"left",
face:"./assets/img/merudi.dia.png",
text:"失敗とも言うけど"
},
{
type:"summary",
text:`少女は悪びれもなく笑った。`
},
{
type:"dialogue",
name:"？？？",
side:"left",
face:"./assets/img/merudi.dia.png",
text:"あなたたち、旅の人でしょ？"
},
{
type:"dialogue",
name:"クレス",
side:"right",
face:"./assets/img/kuresu.dia.png",
text:"ああ。少しこの街に寄っただけだ"
},
{
type:"dialogue",
name:"？？？",
side:"left",
face:"./assets/img/merudi.dia.png",
text:"そっか"
},
{
type:"summary",
text:`メルディはクレスの顔をじっと見つめた。`
},
{
type:"dialogue",
name:"？？？",
side:"left",
face:"./assets/img/merudi.dia.png",
text:"……不思議な顔してるね"
},
{
type:"dialogue",
name:"クレス",
side:"right",
face:"./assets/img/kuresu.dia.png",
text:"どういう意味だ？"
},
{
type:"dialogue",
name:"？？？",
side:"left",
face:"./assets/img/merudi.dia.png",
text:"うーん……なんて言えばいいかな"
},
{
type:"summary",
text:`クレスは少しだけ目をそらした。`
},
{
type:"dialogue",
name:"？？？",
side:"left",
face:"./assets/img/merudi.dia.png",
text:"……ま、いっか"
},
{
type:"dialogue",
name:"？？？",
side:"left",
face:"./assets/img/merudi.dia.png",
text:"旅、気をつけてね"
},
{
type:"summary",
text:`そう言うと少女は店の奥へと消えていった。`
}
];

const MERUDI_JOIN_EVENT = [
{
type:"summary",
text:`マルシア商業都市を後にしようとした、その時――

背後から慌ただしい足音が響いた。`
},
{
type:"dialogue",
name:"メルディ",
side:"left",
face:"./assets/img/merudi.dia.png",
text:"ま、待って！"
},
{
type:"dialogue",
name:"クレス",
side:"right",
face:"./assets/img/kuresu.dia.png",
text:"メルディ……？"
},
{
type:"summary",
text:`肩で息をしながら、メルディはクレスたちの前で立ち止まった。`
},
{
type:"dialogue",
name:"メルディ",
side:"left",
face:"./assets/img/merudi.dia.png",
text:"……決めたの"
},
{
type:"dialogue",
name:"メルディ",
side:"left",
face:"./assets/img/merudi.dia.png",
text:"私、あなたたちと一緒に行きたい"
},
{
type:"dialogue",
name:"セリオス",
side:"right",
face:"./assets/img/seriosu2.dia.png",
text:"気まぐれでは務まりませんよ"
},
{
type:"dialogue",
name:"メルディ",
side:"left",
face:"./assets/img/merudi.dia.png",
text:"気まぐれじゃない"
},
{
type:"dialogue",
name:"メルディ",
side:"left",
face:"./assets/img/merudi.dia.png",
text:"私、名門魔導家の娘なの"
},
{
type:"dialogue",
name:"メルディ",
side:"left",
face:"./assets/img/merudi.dia.png",
text:"でも、そんな肩書きだけで中身は空っぽ"
},
{
type:"dialogue",
name:"クレス",
side:"right",
face:"./assets/img/kuresu.dia.png",
text:"……"
},
{
type:"dialogue",
name:"メルディ",
side:"left",
face:"./assets/img/merudi.dia.png",
text:`周りはみんな天才ばっかりだった。

魔導学院でも、家でも……`
},
{
type:"dialogue",
name:"メルディ",
side:"left",
face:"./assets/img/merudi.dia.png",
text:"私は何度やっても失敗ばっかり"
},
{
type:"dialogue",
name:"メルディ",
side:"left",
face:"./assets/img/merudi.dia.png",
text:"だから家を出て、道具屋にいたの"
},
{
type:"summary",
text:`その言葉は、強がりのない静かな告白だった。`
},
{
type:"dialogue",
name:"メルディ",
side:"left",
face:"./assets/img/merudi.dia.png",
text:"でも、あそこにいても何も変わらなかった"
},
{
type:"dialogue",
name:"メルディ",
side:"left",
face:"./assets/img/merudi.dia.png",
text:`私はずっと、
『才能がない私』のまま立ち止まってた`
},
{
type:"dialogue",
name:"メルディ",
side:"left",
face:"./assets/img/merudi.dia.png",
text:"だから外に出たい"
},
{
type:"dialogue",
name:"メルディ",
side:"left",
face:"./assets/img/merudi.dia.png",
text:`誰かに認められるためじゃなくて、
自分で自分を認められるようになりたいの`
},
{
type:"summary",
text:`その瞳には、はっきりとした意志が宿っていた。`
},
{
type:"dialogue",
name:"クレス",
side:"right",
face:"./assets/img/kuresu.dia.png",
text:"……危険な旅になる"
},
{
type:"dialogue",
name:"メルディ",
side:"left",
face:"./assets/img/merudi.dia.png",
text:"知ってる"
},
{
type:"dialogue",
name:"クレス",
side:"right",
face:"./assets/img/kuresu.dia.png",
text:"それでも、どうして俺たちなんだ？"
},
{
type:"dialogue",
name:"メルディ",
side:"left",
face:"./assets/img/merudi.dia.png",
text:"……あなたを見たから"
},
{
type:"dialogue",
name:"メルディ",
side:"left",
face:"./assets/img/merudi.dia.png",
text:`あなた、全部失ったような顔をしてるのに、
ちゃんと前を向こうとしてる`
},
{
type:"summary",
text:`クレスはわずかに目を伏せた。`
},
{
type:"dialogue",
name:"メルディ",
side:"left",
face:"./assets/img/merudi.dia.png",
text:"でも逃げてないよね"
},
{
type:"dialogue",
name:"メルディ",
side:"left",
face:"./assets/img/merudi.dia.png",
text:"だから思ったの"
},
{
type:"dialogue",
name:"メルディ",
side:"left",
face:"./assets/img/merudi.dia.png",
text:`この旅についていけば、
私も何か見つけられるかもしれないって`
},
{
type:"choice",
choices:[
{
text:"一緒に来るか？",
result:"join_now"
},
{
text:"危険だ",
result:"join_later"
}
]
}
];

const MARCIA_INFO_EVENT = [
  {
    type: "summary",
    text: "路地の奥、薄暗い店の中で一人の情報屋がこちらを見ていた。"
  },
  {
    type: "dialogue",
    name: "情報屋",
    side: "left",
    face: "./assets/img/info_broker.png",
    text: "……1000Gだ。払うなら、今の王国の“本当”を教えてやる"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "殿下、ここは聞いておく価値があります"
  },
  {
    type: "choice",
    choices: [
      { text: "1000G払う", result: "pay" },
      { text: "やめる", result: "leave" }
    ]
  }
];

const MARCIA_INFO_RESULT = [
  {
    type: "summary",
    text: `薄暗い路地の奥――

マルシアの喧騒から切り離されたような場所で、
情報屋は静かに口を開いた。`
  },
  {
    type: "dialogue",
    name: "情報屋",
    side: "left",
    face: "./assets/img/info_broker.png",
    text: "毎度あり……と言いたいところだが、今回は少し重い話になる"
  },
  {
    type: "dialogue",
    name: "情報屋",
    side: "left",
    face: "./assets/img/info_broker.png",
    text: "まず一つ――反逆者クレスの名は、もう王国全土に広まってる"
  },
  {
    type: "dialogue",
    name: "情報屋",
    side: "left",
    face: "./assets/img/info_broker.png",
    text: "王都の布告じゃ『国を裏切り、王に刃を向けた王子』って筋書きでな"
  },
  {
    type: "dialogue",
    name: "情報屋",
    side: "left",
    face: "./assets/img/info_broker.png",
    text: "民衆の前じゃ、もう“悪役”として話が出来上がってる"
  },
  {
    type: "summary",
    text: `作られた物語は、真実よりも早く広がる。

そして一度信じられたものは、
簡単には覆らない。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……やはり、そこまで広がっているか"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "真実を知る者は、ほとんどいないというわけだな"
  },
  {
    type: "dialogue",
    name: "情報屋",
    side: "left",
    face: "./assets/img/info_broker.png",
    text: "ああ。知ってても口に出せねえさ"
  },
  {
    type: "dialogue",
    name: "情報屋",
    side: "left",
    face: "./assets/img/info_broker.png",
    text: "今の王国じゃ、“正しいこと”より“都合のいいこと”の方が生き残る"
  },

  {
    type: "dialogue",
    name: "情報屋",
    side: "left",
    face: "./assets/img/info_broker.png",
    text: "二つ目――最近の王国は、かなりきな臭い"
  },
  {
    type: "summary",
    text: `情報屋の声が、わずかに低くなる。`
  },
  {
    type: "dialogue",
    name: "情報屋",
    side: "left",
    face: "./assets/img/info_broker.png",
    text: "地方の徴税は急に厳しくなった。払えなきゃ土地も家も取り上げだ"
  },
  {
    type: "dialogue",
    name: "情報屋",
    side: "left",
    face: "./assets/img/info_broker.png",
    text: "それだけじゃねえ。王城直属の部隊が、各地を巡回してる"
  },
  {
    type: "dialogue",
    name: "情報屋",
    side: "left",
    face: "./assets/img/info_broker.png",
    text: "表向きは“治安維持”や“反乱鎮圧”だがな……"
  },
  {
    type: "dialogue",
    name: "情報屋",
    side: "left",
    face: "./assets/img/info_broker.png",
    text: "実際は、王にとって都合の悪い人間を消して回ってるって話だ"
  },
  {
    type: "summary",
    text: `誰が敵で、誰が味方なのか。

それすら曖昧になりつつある状況だった。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu2.dia.png",
    text: "……予想以上に、事態は進んでいますね"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu2.dia.png",
    text: "ここまで露骨な統制が行われているとは……"
  },

  {
    type: "dialogue",
    name: "情報屋",
    side: "left",
    face: "./assets/img/info_broker.png",
    text: "三つ目――王国の内側も一枚岩じゃない"
  },
  {
    type: "dialogue",
    name: "情報屋",
    side: "left",
    face: "./assets/img/info_broker.png",
    text: "貴族どもは派閥争いでバラバラだ"
  },
  {
    type: "dialogue",
    name: "情報屋",
    side: "left",
    face: "./assets/img/info_broker.png",
    text: "現王に従う連中、距離を置く連中、そして……裏で動いてる連中もいる"
  },
  {
    type: "summary",
    text: `見えないところで、確実に何かが動いている。

それは一つの事件ではなく、
国そのものを揺るがす流れだった。`
  },
  {
    type: "dialogue",
    name: "情報屋",
    side: "left",
    face: "./assets/img/info_broker.png",
    text: "そして最後だ――"
  },
  {
    type: "dialogue",
    name: "情報屋",
    side: "left",
    face: "./assets/img/info_broker.png",
    text: "あんたが本当に生きてるって事実"
  },
  {
    type: "dialogue",
    name: "情報屋",
    side: "left",
    face: "./assets/img/info_broker.png",
    text: "それ自体が、この停滞した盤面を動かす“駒”になる"
  },
  {
    type: "dialogue",
    name: "情報屋",
    side: "left",
    face: "./assets/img/info_broker.png",
    text: "王にとっても、貴族にとっても、そして敵にとってもな"
  },
  {
    type: "summary",
    text: `クレスという存在は、もはや一個人ではない。

それは――
この国の未来を左右する“引き金”だった。`
  }
];

const MARCIA_HOUSE_EVENT = [
  {
    type: "summary",
    text: `市街地の一角にある民家。

外の喧騒とは対照的に、
中からは笑い声と酒の匂いが漂ってきた。`
  },
  {
    type: "summary",
    text: `どうやら、旅人や常連たちが集まる
気さくな家のようだ。`
  },
  {
    type: "dialogue",
    name: "住人",
    side: "left",
    face: "./assets/img/villager.png",
    text: "おや、見ない顔だね。あんたたち旅人かい？"
  },
  {
    type: "dialogue",
    name: "住人",
    side: "left",
    face: "./assets/img/villager.png",
    text: "それなら、この街の闘技場は見ておいて損はないよ"
  },
  {
    type: "summary",
    text: `闘技場――

マルシアの名物のひとつであり、
腕に覚えのある者たちが集う場所だ。`
  },
  {
    type: "dialogue",
    name: "住人",
    side: "left",
    face: "./assets/img/villager.png",
    text: "下の階級でもそこそこ稼げるが……本番は上級だ"
  },
  {
    type: "dialogue",
    name: "住人",
    side: "left",
    face: "./assets/img/villager.png",
    text: "優勝すりゃ、賞金だけじゃない。特別な景品が出るって話でな"
  },
  {
    type: "dialogue",
    name: "住人",
    side: "left",
    face: "./assets/img/villager.png",
    text: "珍しい装備やら、高級な魔道具やら……普通じゃ手に入らない代物ばかりだ"
  },
  {
    type: "summary",
    text: `それは単なる娯楽ではなく、
力ある者に対する“報酬の場”でもあった。`
  },
  {
    type: "dialogue",
    name: "住人",
    side: "left",
    face: "./assets/img/villager.png",
    text: "ただし……楽な話じゃない"
  },
  {
    type: "dialogue",
    name: "住人",
    side: "left",
    face: "./assets/img/villager.png",
    text: "上級に出る連中は、ただの剣士じゃねえ"
  },
  {
    type: "dialogue",
    name: "住人",
    side: "left",
    face: "./assets/img/villager.png",
    text: "傭兵崩れに、元騎士、果ては訳ありの連中まで……命のやり取りに慣れた奴ばかりさ"
  },
  {
    type: "summary",
    text: `勝ち上がることは、
そのまま“実力を証明すること”に等しい。`
  },
  {
    type: "dialogue",
    name: "住人",
    side: "left",
    face: "./assets/img/villager.png",
    text: "それに……あそこは表向きは見世物だがな"
  },
  {
    type: "dialogue",
    name: "住人",
    side: "left",
    face: "./assets/img/villager.png",
    text: "裏じゃ貴族や金持ちが目を光らせてる"
  },
  {
    type: "dialogue",
    name: "住人",
    side: "left",
    face: "./assets/img/villager.png",
    text: "気に入られりゃ仕事が来ることもあるし……逆に目をつけられることもある"
  },
  {
    type: "summary",
    text: `闘技場は単なる娯楽ではない。

そこは、力と金と思惑が交差する
もうひとつの“戦場”だった。`
  },
  {
    type: "dialogue",
    name: "住人",
    side: "left",
    face: "./assets/img/villager.png",
    text: "腕に自信があるなら、挑戦してみるといい"
  },
  {
    type: "dialogue",
    name: "住人",
    side: "left",
    face: "./assets/img/villager.png",
    text: "この街で名を上げる、一番手っ取り早い方法だからな"
  },
  {
    type: "summary",
    text: `闘技場・上級――

そこには特別な報酬と、
それに見合う危険が待っているようだ。`
  }
];

const MARCIA_MIX_EVENT = [
  {
    type: "summary",
    text: `炉の熱気と、鼻を刺すような薬品の匂いが漂う工房。

壁には見慣れない器具や、乾燥させた魔物の部位が吊るされ、
机の上には色とりどりの液体が入った瓶が並んでいる。

ここは――素材を“別の価値”へと変える場所だ。`
  },
  {
    type: "summary",
    text: `奥では、一人の職人が無骨な手つきで何かを調合していた。

火花が散り、小さな爆ぜる音とともに、
淡く光る結晶が生み出される。`
  },
  {
    type: "dialogue",
    name: "合成屋",
    side: "left",
    face: "./assets/img/alchemy_shop.png",
    text: "……新顔か。ここは見ての通り、“合成屋”だ"
  },
  {
    type: "dialogue",
    name: "合成屋",
    side: "left",
    face: "./assets/img/alchemy_shop.png",
    text: "モンスター素材を持ってるなら、ただのガラクタにしておくのは勿体ねぇ"
  },
  {
    type: "summary",
    text: `彼は手元の魔石を軽く叩きながら、
その内部に宿る微かな光を見せた。`
  },
  {
    type: "dialogue",
    name: "合成屋",
    side: "left",
    face: "./assets/img/alchemy_shop.png",
    text: "魔物ってのはな、ただの肉や骨じゃない"
  },
  {
    type: "dialogue",
    name: "合成屋",
    side: "left",
    face: "./assets/img/alchemy_shop.png",
    text: "生きてた時の“力”や“性質”が、そのまま残ってる"
  },
  {
    type: "dialogue",
    name: "合成屋",
    side: "left",
    face: "./assets/img/alchemy_shop.png",
    text: "牙なら攻撃性、骨なら耐久、魔石なら純粋な魔力……って具合にな"
  },
  {
    type: "summary",
    text: `つまりそれらは、
単なる素材ではなく――

“力の欠片”そのものだった。`
  },
  {
    type: "dialogue",
    name: "合成屋",
    side: "left",
    face: "./assets/img/alchemy_shop.png",
    text: "それを組み合わせて、別の形に再構築する"
  },
  {
    type: "dialogue",
    name: "合成屋",
    side: "left",
    face: "./assets/img/alchemy_shop.png",
    text: "それが俺たち合成屋の仕事だ"
  },
  {
    type: "summary",
    text: `炉の中で、素材が溶け合い、
まったく別の性質を持つ物へと変わっていく。`
  },
  {
    type: "dialogue",
    name: "合成屋",
    side: "left",
    face: "./assets/img/alchemy_shop.png",
    text: "牙、骨、爪、魔石……一見使い道がなさそうなものほど、いい材料になる"
  },
  {
    type: "dialogue",
    name: "合成屋",
    side: "left",
    face: "./assets/img/alchemy_shop.png",
    text: "逆に言えば、何をどう組み合わせるかで出来上がるモンは全く変わる"
  },
  {
    type: "summary",
    text: `同じ素材でも、
組み合わせ次第で武器にも薬にもなる――

それが合成という技術だった。`
  },
  {
    type: "dialogue",
    name: "合成屋",
    side: "left",
    face: "./assets/img/alchemy_shop.png",
    text: "最初から全部覚えようとする必要はねぇ"
  },
  {
    type: "dialogue",
    name: "合成屋",
    side: "left",
    face: "./assets/img/alchemy_shop.png",
    text: "細かい合成は、経験していくうちに分かってくるもんだ"
  },
  {
    type: "dialogue",
    name: "合成屋",
    side: "left",
    face: "./assets/img/alchemy_shop.png",
    text: "だが一つだけ覚えとけ"
  },
  {
    type: "dialogue",
    name: "合成屋",
    side: "left",
    face: "./assets/img/alchemy_shop.png",
    text: "素材は絶対に捨てるな"
  },
  {
    type: "dialogue",
    name: "合成屋",
    side: "left",
    face: "./assets/img/alchemy_shop.png",
    text: "価値が分かる頃には、もう手に入らねぇことも多いからな"
  },
  {
    type: "summary",
    text: `この世界では、
不要に見えるものほど価値を持つことがある。

それを見抜けるかどうかは、
使い手次第だった。`
  },
  {
    type: "summary",
    text: `合成屋が利用可能になった。

集めた素材から、新たなアイテムを生み出すことができる。`
  }
];

const CASINO_OWNER_INTRO = [
  {
    type: "summary",
    text: `マルシアの喧騒の奥――

表通りの華やかさとは裏腹に、
薄暗い路地の先にひっそりと佇む建物があった。

中からは、笑い声と怒号、
そして金属の触れ合う乾いた音が響いてくる。`
  },
  {
    type: "summary",
    text: `扉を開けた瞬間、
煙草と酒の匂いが鼻を突いた。

視線が一斉にこちらへ向けられ、
値踏みするような空気が流れる。`
  },
  {
    type: "dialogue",
    name: "賭博場の主",
    side: "left",
    face: "./assets/img/casino_owner.png",
    text: "……ようこそ、旅人さん"
  },
  {
    type: "summary",
    text: `奥の席に座る男が、
ゆっくりと口元を歪めた。

その目は笑っていない。`
  },
  {
    type: "dialogue",
    name: "賭博場の主",
    side: "left",
    face: "./assets/img/casino_owner.png",
    text: "ここはな……運と度胸、それだけがものを言う場所だ"
  },
  {
    type: "dialogue",
    name: "賭博場の主",
    side: "left",
    face: "./assets/img/casino_owner.png",
    text: "腕も、身分も関係ねぇ。勝つか負けるか、それだけだ"
  },
  {
    type: "summary",
    text: `周囲では歓声と舌打ちが交錯している。

一瞬で大金を得る者もいれば、
同じ速さで全てを失う者もいる。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……賭けの内容は？"
  },
  {
    type: "summary",
    text: `クレスは周囲の様子を一瞥しながら、
静かに問いかけた。`
  },
  {
    type: "dialogue",
    name: "賭博場の主",
    side: "left",
    face: "./assets/img/casino_owner.png",
    text: "簡単さ。500Gを賭けて、表か裏かを当てるだけ"
  },
  {
    type: "dialogue",
    name: "賭博場の主",
    side: "left",
    face: "./assets/img/casino_owner.png",
    text: "当たれば倍。外せば――全部没収だ"
  },
  {
    type: "summary",
    text: `男は机の上に一枚のコインを置く。

それはただの貨幣ではない。
何度も使われたのか、縁がわずかに欠けていた。`
  },
  {
    type: "dialogue",
    name: "賭博場の主",
    side: "left",
    face: "./assets/img/casino_owner.png",
    text: "単純だろ？ だからこそ面白い"
  },
  {
    type: "dialogue",
    name: "賭博場の主",
    side: "left",
    face: "./assets/img/casino_owner.png",
    text: "運が良けりゃ、一晩で成り上がれる"
  },
  {
    type: "dialogue",
    name: "賭博場の主",
    side: "left",
    face: "./assets/img/casino_owner.png",
    text: "……だが逆に言えば、一瞬で何もかも失う"
  },
  {
    type: "summary",
    text: `その言葉には、
経験に裏打ちされた重みがあった。`
  },
  {
    type: "dialogue",
    name: "賭博場の主",
    side: "left",
    face: "./assets/img/casino_owner.png",
    text: "どうする？ 試してみるか？"
  },
  {
    type: "summary",
    text: `男はにやりと笑い、
指先でコインを軽く弾いた。`
  },
  {
    type: "summary",
    text: `コインは空中で回転し――

運命を試すかのように、静かに落ちてくる。`
  }
];

const MARCIA_HERO_RETURN_STORY = [
  {
    type: "summary",
    text: "再び訪れたマルシア商業都市は、以前より明らかに活気を失っていた。"
  },
  {
    type: "summary",
    text: "通りを行き交う商人たちの声は小さく、露店の数も減っている。"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……前に来た時より、ずいぶん静かだな"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "エストリア王国の圧政が、交易都市にまで影を落としているのでしょう"
  },
  {
    type: "summary",
    text: "人々の表情には疲労と不満が浮かんでいた。"
  },
  {
    type: "summary",
    text: "この都市でもまた、王国に対する怒りが静かに燻っている――"
  }
];

const MARCIA_REBEL_INFO_EVENT = [
  {
    type: "summary",
    text: "情報屋の空気は以前より重く、店の奥にはただならぬ緊張が漂っていた。"
  },
  {
    type: "dialogue",
    name: "情報屋",
    side: "left",
    face: "./assets/img/info_broker.png",
    text: "……英雄クレス、か。今のお前なら会わせてもいい相手がいる"
  },
  {
    type: "summary",
    text: "薄暗い奥の間に通される。そこには、外套をまとった一人の人物が待っていた。"
  },
  {
    type: "dialogue",
    name: "反乱組織のリーダー",
    side: "left",
    face: "./assets/img/rebel_leader.png",
    text: "亡国の王子クレス……いや、今は英雄と呼ぶべきか"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……あなたは？"
  },
  {
    type: "dialogue",
    name: "反乱組織のリーダー",
    side: "left",
    face: "./assets/img/rebel_leader.png",
    text: "エストリア王宮への反乱を準備している者だ。この都市にも、もはや王国に耐えきれぬ者たちがいる"
  },
  {
    type: "dialogue",
    name: "反乱組織のリーダー",
    side: "left",
    face: "./assets/img/rebel_leader.png",
    text: "時が来れば、お前にも力を貸してもらうことになるだろう"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……わかった。俺も、王国の圧政を終わらせたい"
  }
];

const MARCIA_REBEL_INFO_REPEAT = [
  {
    type: "dialogue",
    name: "情報屋",
    side: "left",
    face: "./assets/img/info_broker.png",
    text: "反乱の火はまだ小さい。だが、確実に広がっている"
  },
  {
    type: "dialogue",
    name: "情報屋",
    side: "left",
    face: "./assets/img/info_broker.png",
    text: "英雄クレス……その名は、すでに各地で囁かれているぞ"
  }
];

const PEACE_MARCIA_STORY = [
  {
    type: "summary",
    text: "マルシア商業都市は、以前にも増して活気に満ちていた。"
  },
  {
    type: "summary",
    text: "怒号ではなく商人の呼び声が響き、通りには安堵した人々の笑顔が戻っている。"
  },
  {
    type: "dialogue",
    name: "商人",
    side: "left",
    text: "物騒な噂も減って、やっと商売に集中できるってもんだ！"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "……前より、街の空気が軽い"
  },
  {
    type: "summary",
    text: "混沌の街だったマルシアにも、確かな落ち着きが訪れつつあった。"
  }
];


//砂漠
const DESERT_UNLOCK_STORY = [
  {
    type: "summary",
    text: `マルシア商業都市での準備を終えたクレスたちは、
次なる行き先についての情報を集めていた。

賑わいに満ちた街の裏で交わされる噂は、
どれも一様に“ある場所”を指し示していた――`
  },
  {
    type: "summary",
    text: `それは都市の外、
遥か地平線の先に広がるという灼熱の大地。

多くの旅人が挑み、
そして二度と戻らなかった場所。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "殿下、この先に広がるのは『デザリア砂漠』です"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "昼は灼熱、夜は凍てつく寒さ……環境そのものが命を削る地です"
  },
  {
    type: "summary",
    text: `ただの過酷な土地ではない。

そこには常に、得体の知れない“気配”が漂っているという。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "砂漠か……厳しい道になりそうだな"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "ええ。だが同時に――重要な遺跡や失われた技術も眠っているとされています"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "王国ですら把握しきれていない領域……それがあの砂漠です"
  },
  {
    type: "summary",
    text: `文明の手が届かない場所。

そこには、まだ知られていない“何か”が確かに存在している。`
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "でもね……そういう場所だからこそ、見えるものもあると思う"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "誰も触れていない真実とか……隠された力とか"
  },
  {
    type: "summary",
    text: `彼女の言葉は、どこか確信めいていた。

まるでその先に、
何か“引き寄せられている”かのように。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……進むしかないな"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "ここで止まっていたら、何も変えられない"
  },
  {
    type: "summary",
    text: `都市の喧騒を背に、
クレスたちは新たな大地へと歩み出す。`
  },
  {
    type: "summary",
    text: `そこに広がるのは、

灼熱と静寂、
そして数多の魔物が支配する過酷な世界――`
  },
  {
    type: "summary",
    text: `だが同時に、

失われた力と、
まだ見ぬ運命が眠る地でもあった。`
  },
  {
    type: "summary",
    text: `新しいマップ「デザリア砂漠」が開放された！`
  },
  {
  type: "summary",
  text: `街を離れ、砂漠へと続く道を歩き出す。`
},
{
  type: "summary",
  text: `背後の喧騒は次第に遠ざかり、静かな風の音だけが残った。`
},
{
  type: "dialogue",
  name: "クレス",
  side: "right",
  face: "./assets/img/kuresu.dia.png",
  text: "……なあ、メルディ"
},
{
  type: "dialogue",
  name: "メルディ",
  side: "left",
  face: "./assets/img/merudi.dia.png",
  text: "なに？"
},
{
  type: "dialogue",
  name: "クレス",
  side: "right",
  face: "./assets/img/kuresu.dia.png",
  text: "さっき言ってた“見えるものがある”ってやつ……あれ、どういう意味なんだ？"
},
{
  type: "summary",
  text: `少しだけ考えるように、メルディは視線を空へ向ける。`
},
{
  type: "dialogue",
  name: "メルディ",
  side: "left",
  face: "./assets/img/merudi.dia.png",
  text: "うーん……うまく言えないけど"
},
{
  type: "dialogue",
  name: "メルディ",
  side: "left",
  face: "./assets/img/merudi.dia.png",
  text: "人がたくさんいる場所って、いろんな“声”が混ざってるでしょ？"
},
{
  type: "dialogue",
  name: "メルディ",
  side: "left",
  face: "./assets/img/merudi.dia.png",
  text: "でも、誰もいない場所だと……逆に、隠れてたものがはっきりする感じ"
},
{
  type: "dialogue",
  name: "クレス",
  side: "right",
  face: "./assets/img/kuresu.dia.png",
  text: "……隠れてたもの、か"
},
{
  type: "summary",
  text: `その言葉は、どこか胸に引っかかった。`
},
{
  type: "dialogue",
  name: "メルディ",
  side: "left",
  face: "./assets/img/merudi.dia.png",
  text: "クレスも、見つかるかもよ？"
},
{
  type: "dialogue",
  name: "クレス",
  side: "right",
  face: "./assets/img/kuresu.dia.png",
  text: "俺が？"
},
{
  type: "dialogue",
  name: "メルディ",
  side: "left",
  face: "./assets/img/merudi.dia.png",
  text: "うん。まだ気づいてないこととか"
},
{
  type: "summary",
  text: `メルディは軽く笑う。`
},
{
  type: "summary",
  text: `その言葉の意味を理解するには、まだ少し時間がかかりそうだった。`
}


];

const DESERT_OASIS_EVENT = [
  {
    type: "summary",
    text: `灼熱の砂漠を進む中――

突如として、視界の先に緑が現れた。`
  },
  {
    type: "summary",
    text: `乾ききった大地の中にぽっかりと開いた空間。

そこには、まるで別世界のように
澄みきった水を湛えたオアシスが広がっていた。`
  },
  {
    type: "summary",
    text: `風は穏やかで、砂の気配も薄い。

ここだけが砂漠から切り離されたかのような、
異様な静けさに包まれている。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……こんな場所が、本当に存在するのか"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "自然のオアシスにしては……出来すぎています"
  },
  {
    type: "summary",
    text: `水面は鏡のように静まり返り、
わずかな揺らぎすら見せない。`
  },
  {
    type: "summary",
    text: `だがその透明さは、
逆に底の“深さ”を感じさせた。`
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "……ここ、ちょっと変"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "水の中……ただの水じゃない"
  },
  {
    type: "summary",
    text: `メルディは水面をじっと見つめる。

その瞳は、何か“見えないもの”を捉えているようだった。`
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "底に……何かある"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "でも、それだけじゃない……何かに“守られてる”感じがする"
  },
  {
    type: "summary",
    text: `その言葉と同時に、
水面がわずかに揺らいだ気がした。`
  },
  {
    type: "summary",
    text: `覗き込めば、
どこまでも深く落ちていきそうな感覚に襲われる。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "不用意に近づくのは危険かもしれません"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……だが、このまま見過ごすわけにもいかないな"
  },
  {
    type: "summary",
    text: `この場所には、何かがある。

それは価値あるものか――
それとも、触れてはならないものか。`
  },
  {
    type: "choice",
    choices: [
      {
        text: "水の中にもぐる",
        result: "dive"
      },
      {
        text: "今はやめておく",
        result: "leave"
      }
    ]
  }
];

const DESERT_OASIS_DRAIN_FOUND_EVENT = [
  {
    type: "summary",
    text: `冷たい水の中を進むと、

底の岩陰に、不自然な光沢を放つ物体が埋もれているのが見えた。`
  },
  {
    type: "summary",
    text: `それは周囲の自然物とは明らかに異なる、

滑らかに加工された“金属”だった。`
  },
  {
    type: "summary",
    text: `砂や水流に晒されているはずなのに、
ほとんど劣化の痕跡がない。

まるで――今もなお機能しているかのように。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……自然に出来たものじゃないな"
  },
  {
    type: "summary",
    text: `よく見るとそれは、
岩盤に埋め込まれた“栓”のような構造をしていた。

周囲には微かに刻印のような紋様が走っている。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "これは……排水機構……？"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "つまり、このオアシスは自然のものではなく……"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "誰かが意図的に“維持している”可能性があります"
  },
  {
    type: "summary",
    text: `水面の異様な静けさ、
澄みすぎた水――

そのすべてが、この装置によって作られているのかもしれない。`
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "……これ、ただの装置じゃない気がする"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "なんか……“押さえつけてる”感じがする"
  },
  {
    type: "summary",
    text: `その言葉に合わせるように、

栓の周囲から、かすかな振動のようなものが伝わってくる。`
  },
  {
    type: "summary",
    text: `もしこれを外せば――

水が引くだけで済むのか、
それとも何かが解放されるのか。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "不用意に操作するのは危険です"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "ですが……この先に進む手がかりになる可能性もあります"
  },
  {
    type: "summary",
    text: `静かな水の底で、

クレスはその栓を見つめる。`
  },
  {
    type: "summary",
    text: `これは単なる装置か――
それとも、何かを封じる“鍵”なのか。`
  },
  {
    type: "choice",
    choices: [
      {
        text: "栓を抜く",
        result: "drain"
      },
      {
        text: "今は触れない",
        result: "leave"
      }
    ]
  }
];

const DESERT_OASIS_SELECT_ONLY_EVENT = [
  {
    type: "summary",
    text: "オアシスの水面は静かに揺れている。"
  },
  {
    type: "choice",
    choices: [
      {
        text: "潜る",
        result: "dive"
      },
      {
        text: "やめる",
        result: "leave"
      }
    ]
  }
];

const DESERT_HOUSE_EVENT = [
  {
    type: "summary",
    text: `砂嵐に削られた大地の中に、

半ば埋もれるようにして建つ一軒の民家があった。`
  },
  {
    type: "summary",
    text: `壁は風化し、扉も軋んでいる。

だが中には、確かに人の気配が残っていた。`
  },
  {
    type: "summary",
    text: `扉を開けると、
薄暗い室内の奥で、一人の老人が静かにこちらを見ていた。`
  },
  {
    type: "dialogue",
    name: "老人",
    side: "left",
    face: "./assets/img/villager_old.png",
    text: "……旅人か"
  },
  {
    type: "dialogue",
    name: "老人",
    side: "left",
    face: "./assets/img/villager_old.png",
    text: "こんな砂漠の奥まで来る者は、そう多くはない"
  },
  {
    type: "summary",
    text: `その声には驚きも警戒もない。

ただ長い時間をこの地で過ごしてきた者だけが持つ、
静かな重みがあった。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "あのオアシスについて何か知らないか？"
  },
  {
    type: "summary",
    text: `老人の目が、わずかに細められる。`
  },
  {
    type: "dialogue",
    name: "老人",
    side: "left",
    face: "./assets/img/villager_old.png",
    text: "……あそこか"
  },
  {
    type: "dialogue",
    name: "老人",
    side: "left",
    face: "./assets/img/villager_old.png",
    text: "知っとるとも。だが――あれは昔からあったものではない"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "違うのですか？"
  },
  {
    type: "summary",
    text: `老人はゆっくりと息を吐き、
遠い記憶を辿るように語り始めた。`
  },
  {
    type: "dialogue",
    name: "老人",
    side: "left",
    face: "./assets/img/villager_old.png",
    text: "今から……百年ほど前かの"
  },
  {
    type: "dialogue",
    name: "老人",
    side: "left",
    face: "./assets/img/villager_old.png",
    text: "この辺りには、水場などひとつもなかった"
  },
  {
    type: "summary",
    text: `ただ乾いた砂と風だけが支配する、
完全な死の大地だったという。`
  },
  {
    type: "dialogue",
    name: "老人",
    side: "left",
    face: "./assets/img/villager_old.png",
    text: "ある夜……大地が揺れた"
  },
  {
    type: "summary",
    text: `それは地震というより――

地の奥で“何かが動いた”ような、不気味な揺れだった。`
  },
  {
    type: "dialogue",
    name: "老人",
    side: "left",
    face: "./assets/img/villager_old.png",
    text: "翌朝には……あそこに水が湧いていたそうじゃ"
  },
  {
    type: "summary",
    text: `何の前触れもなく現れたオアシス。

それは恵みであると同時に、
明らかな“異常”でもあった。`
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "自然にできた感じじゃないね……"
  },
  {
    type: "dialogue",
    name: "老人",
    side: "left",
    face: "./assets/img/villager_old.png",
    text: "うむ。村の者も皆そう言っとった"
  },
  {
    type: "dialogue",
    name: "老人",
    side: "left",
    face: "./assets/img/villager_old.png",
    text: "最初は喜んださ。水は命じゃからな"
  },
  {
    type: "summary",
    text: `だが――それは長くは続かなかった。`
  },
  {
    type: "dialogue",
    name: "老人",
    side: "left",
    face: "./assets/img/villager_old.png",
    text: "やがて妙な話が増え始めた"
  },
  {
    type: "dialogue",
    name: "老人",
    side: "left",
    face: "./assets/img/villager_old.png",
    text: "底が見えん、どれだけ潜っても尽きぬ……"
  },
  {
    type: "dialogue",
    name: "老人",
    side: "left",
    face: "./assets/img/villager_old.png",
    text: "夜になると、水面の下で“何かが動く”のを見た者もおる"
  },
  {
    type: "summary",
    text: `噂は次第に、
恐怖へと変わっていった。`
  },
  {
    type: "dialogue",
    name: "老人",
    side: "left",
    face: "./assets/img/villager_old.png",
    text: "中には……戻ってこなかった者もおる"
  },
  {
    type: "summary",
    text: `その言葉は静かだったが、
重く、否定の余地がなかった。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "では……あの水の下に何かが……"
  },
  {
    type: "dialogue",
    name: "老人",
    side: "left",
    face: "./assets/img/villager_old.png",
    text: "遺跡だとか、封印だとか……色々言われとる"
  },
  {
    type: "dialogue",
    name: "老人",
    side: "left",
    face: "./assets/img/villager_old.png",
    text: "だが本当のところは、誰も知らん"
  },
  {
    type: "summary",
    text: `ただ一つ確かなのは――

あのオアシスは、
“自然に生まれたものではない”ということだけだった。`
  },
  {
  type: "summary",
  text: `老人の話を聞き終え、クレスたちは静かに家を後にした。`
},
{
  type: "summary",
  text: `外に出ると、乾いた風が再び吹き付ける。`
},
{
  type: "summary",
  text: `だが先ほどまでとは違い、その風がどこか冷たく感じられた。`
},
{
  type: "dialogue",
  name: "クレス",
  side: "right",
  face: "./assets/img/kuresu.dia.png",
  text: "……ただの水場じゃない、ってことか"
},
{
  type: "dialogue",
  name: "メルディ",
  side: "left",
  face: "./assets/img/merudi.dia.png",
  text: "うん"
},
{
  type: "dialogue",
  name: "メルディ",
  side: "left",
  face: "./assets/img/merudi.dia.png",
  text: "あそこ、“下”がある感じがする"
},
{
  type: "dialogue",
  name: "クレス",
  side: "right",
  face: "./assets/img/kuresu.dia.png",
  text: "下……？"
},
{
  type: "summary",
  text: `メルディは少しだけ考え込むように目を細めた。`
},
{
  type: "dialogue",
  name: "メルディ",
  side: "left",
  face: "./assets/img/merudi.dia.png",
  text: "うまく言えないけど……ただの“底”じゃない"
},
{
  type: "dialogue",
  name: "メルディ",
  side: "left",
  face: "./assets/img/merudi.dia.png",
  text: "何か、繋がってる感じ"
},
{
  type: "summary",
  text: `その言葉に、クレスはわずかに眉をひそめる。`
},
{
  type: "dialogue",
  name: "クレス",
  side: "right",
  face: "./assets/img/kuresu.dia.png",
  text: "……遺跡か、封印か"
},
{
  type: "dialogue",
  name: "クレス",
  side: "right",
  face: "./assets/img/kuresu.dia.png",
  text: "どっちにしろ、放っておける話じゃないな"
},
{
  type: "dialogue",
  name: "メルディ",
  side: "left",
  face: "./assets/img/merudi.dia.png",
  text: "うん。でも――"
},
{
  type: "dialogue",
  name: "メルディ",
  side: "left",
  face: "./assets/img/merudi.dia.png",
  text: "あそこ、ちょっと怖いよ"
},
{
  type: "summary",
  text: `その言葉は冗談ではなく、純粋な警告だった。`
},
{
  type: "dialogue",
  name: "クレス",
  side: "right",
  face: "./assets/img/kuresu.dia.png",
  text: "……ああ、分かってる"
},
{
  type: "dialogue",
  name: "クレス",
  side: "right",
  face: "./assets/img/kuresu.dia.png",
  text: "だからこそ、行く必要がある"
},
{
  type: "summary",
  text: `砂漠の奥に存在する“異常”。`
},
{
  type: "summary",
  text: `その正体を確かめるため、クレスたちは再び歩き出した。`
}
];

const RED_DRAGON_JAW_EVENT = [
  {
    type: "summary",
    text: `砂嵐に削られた荒野の中――

異様な影が地平に横たわっていた。`
  },
  {
    type: "summary",
    text: `近づくにつれ、それがただの岩ではないことが分かる。

巨大な“頭骨”――
それも、人の何倍もの大きさを持つ竜のものだった。`
  },
  {
    type: "summary",
    text: `骨は風化し、半ば砂に埋もれている。

だがその形状には、
かつてこの地を支配していた存在の威厳が残っていた。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……これほどの巨体の竜が、ここで倒されたのか"
  },
  {
    type: "summary",
    text: `周囲には戦いの痕跡らしきものは残っていない。

まるで、この場所そのものが
長い時間をかけてすべてを飲み込んでしまったかのようだった。`
  },
  {
    type: "summary",
    text: `だが――ひとつだけ、異質なものがあった。`
  },
  {
    type: "summary",
    text: `無数に並ぶ牙の中で、

一本だけが、赤黒く鈍い光を放っている。`
  },
  {
    type: "summary",
    text: `それはまるで、
今もなお“生きている”かのように脈動していた。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "……これは、ただの化石ではありません"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "強い魔力が……いえ、意思のようなものが残っています"
  },
  {
    type: "summary",
    text: `長い年月を経てもなお消えない力。

それは、この竜が
並の魔物ではなかったことを物語っていた。`
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "……怒ってる"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "怒ってる……？"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "うん。ずっと、終われないままここに残ってる感じ"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "痛いとか苦しいとかじゃなくて……奪われたまま、閉じ込められてるみたい"
  },
  {
    type: "summary",
    text: `彼女の言葉に呼応するように、

赤い牙の輝きがわずかに強まった。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "残留思念が牙に宿っているのでしょうか……"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……この竜も、何かに利用されたのかもしれないな"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "クレス"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "それ、触るなら気をつけて"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "危ないってことか？"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "……ううん"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "多分、試される"
  },
  {
    type: "summary",
    text: `クレスは赤い牙を見つめ返す。

そこに宿るのが憎しみだけではないことを、
薄々感じ取っていた。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……まだ力が残っているなら、使えるはずだ"
  },
  {
    type: "summary",
    text: `クレスはゆっくりと手を伸ばす。`
  },
  {
    type: "summary",
    text: `触れた瞬間――

わずかな熱と共に、
脈打つような感覚が手のひらを伝った。`
  },
  {
    type: "summary",
    text: `それは拒絶ではない。

むしろ――“試されている”かのようだった。`
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "……やっぱり"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "殿下、無理は――"
  },
  {
    type: "summary",
    text: `骨の隙間に手をかけ、力を込める――`
  },
  {
    type: "summary",
    text: `鈍い音と共に、牙が引き抜かれる。`
  },
  {
    type: "summary",
    text: `その瞬間、わずかに周囲の空気が震えた。`
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "……少しだけ、静かになった"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "そうか"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "なら、無駄じゃなかったんだな"
  },
  {
    type: "summary",
    text: `赤竜の牙を手に入れた。`
  },
  {
    type: "summary",
    text: `それはただの素材ではない。

かつてこの地を支配した存在の、
力の残滓そのものだった。`
  }
];

//グラディオ廃城
const GLADIO_UNLOCK_STORY = [
  {
    type: "summary",
    text: `マルシアで得た情報をもとに、
クレスたちは次なる進路を探っていた。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "殿下……海上都市ルーメリアへ渡る方法が見つかりました"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "ほんと！？ 海の向こうってことだよね？"
  },
  {
    type: "summary",
    text: `ルーメリア――

王国の干渉が及びにくいとされる、
自由と交易の都。`
  },
  {
    type: "summary",
    text: `そこに辿り着ければ、
追手を振り切り、新たな手がかりを得られる可能性があった。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "ただし……正規の航路はすでに閉ざされています"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "つまり、別の道を探す必要があるということか"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "はい。記録によれば……かつて使われていた古い航路が存在します"
  },
  {
    type: "summary",
    text: `それは王国が統制を強める以前、
限られた者だけが利用していた秘密の航路。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "その記録が残されている場所が――グラディオ廃城です"
  },
  {
    type: "summary",
    text: `グラディオ廃城――

かつて王国の要塞として使われながらも、
ある時期を境に放棄された場所。`
  },
  {
    type: "summary",
    text: `今では魔物が巣食う危険地帯として、
誰も近づかなくなっている。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "廃城か……"
  },
  {
    type: "summary",
    text: `忘れ去られた場所には、
必ず理由がある。`
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "なんか嫌な予感するけど……でも、そこに行くしかないんだよね"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "ああ……進むしかない"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "行こう。そこに――次へ進む道がある"
  },
  {
    type: "summary",
    text: `こうしてクレスたちは、

新たな目的地――
「グラディオ廃城」へ向かうことを決めた。`
  },
  {
    type: "summary",
    text: `グラディオ廃城が解放された。`
  },

  // ===== 王城パート =====

  {
    type: "summary",
    text: `――その頃、レオニス王城――`
  },
  {
    type: "summary",
    text: `重厚な玉座の間。

静まり返った空間の中で、
ひとりの兵が膝をつき報告を行っていた。`
  },
  {
    type: "dialogue",
    name: "王城兵",
    side: "left",
    text: "……報告いたします"
  },
  {
    type: "dialogue",
    name: "王城兵",
    side: "left",
    text: "反逆者クレスの生存を確認しました"
  },
  {
    type: "dialogue",
    name: "王城兵",
    side: "left",
    text: "現在、各地を転々としながら戦力を蓄えている模様"
  },
  {
    type: "summary",
    text: `一瞬の沈黙。`
  },
  {
    type: "summary",
    text: `その空気を支配しているのは、
目に見えない“圧”だった。`
  },
  {
    type: "dialogue",
    name: "？？？",
    side: "right",
    text: "……そうか"
  },
  {
    type: "summary",
    text: `低く、感情の読めない声。`
  },
  {
    type: "dialogue",
    name: "？？？",
    side: "right",
    text: "まだ生きているとはな……"
  },
  {
    type: "dialogue",
    name: "？？？",
    side: "right",
    text: "……これ以上、泳がせるな"
  },
  {
    type: "summary",
    text: `その一言で、
場の空気が一段と冷え込む。`
  },
  {
    type: "dialogue",
    name: "？？？",
    side: "right",
    text: "始末しろ"
  },
  {
    type: "dialogue",
    name: "？？？",
    side: "right",
    text: "――処断執行人ジークを向かわせろ"
  },
  {
    type: "summary",
    text: `その名が告げられた瞬間――

兵の背筋に、冷たいものが走った。`
  },
  {
    type: "summary",
    text: `王国が誇る“処刑の刃”。

一度その名が下された者に、
生き延びた者はいない――`
  }
];

const GLADIO_CASTLE_STORY = [
  {
    type: "summary",
    text: `崩れかけた石壁と、風に軋む門。

グラディオ廃城は、
かつての威容を失いながらも、
なお重苦しい存在感を放っていた。`
  },
  {
    type: "summary",
    text: `城内は静まり返り、
足音だけが虚しく響く。`
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "ここ……ほんとに人がいないの？"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "ええ……ですが、この静けさは不自然です"
  },
  {
    type: "summary",
    text: `まるで“何か”が、
この城のすべてを見下ろしているかのような感覚。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……書庫は奥だな。進むぞ"
  },

  // ===== 玉座の間 =====

  {
    type: "summary",
    text: `やがて辿り着いたのは、
崩れかけた玉座の間だった。`
  },
  {
    type: "summary",
    text: `かつて王が座していたであろう場所は、
今や朽ち、静寂に包まれている――はずだった。`
  },

  {
    type: "summary",
    text: `――だが`
  },

  {
    type: "summary",
    text: `玉座には、“誰か”が座っていた。`
  },
  {
    type: "summary",
    text: `崩れた王座に、
当然のように腰を下ろし、
こちらを見下ろしている影。`
  },

  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "……っ！？"
  },

  {
    type: "dialogue",
    name: "？？？",
    side: "right",
    text: "……遅い"
  },

  {
    type: "summary",
    text: `低く、感情のない声が響く。`
  },

  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……誰だ！"
  },

  {
    type: "summary",
    text: `男はゆっくりと立ち上がる。

その動きには一切の無駄がなく、
ただ“処理”のように正確だった。`
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.png",
    text: "任務対象、確認"
  },
  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.png",
    text: "レオニス王城直属"
  },
  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.png",
    text: "処断執行人――ジーク"
  },

  {
    type: "summary",
    text: `まるで最初からここで待っていたかのように、
迷いなく名を名乗る。`
  },

  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "……待ち伏せ、ですか"
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.png",
    text: "違う"
  },
  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.png",
    text: "お前たちがここに来る可能性が最も高いと判断した"
  },
  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.png",
    text: "よって、待機していた"
  },

  {
    type: "summary",
    text: `感情はない。

ただ、任務を遂行するための“最適解”。`
  },

  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "なにそれ……気味悪い……"
  },

  {
    type: "summary",
    text: `空気が変わる。

この場はすでに、
彼の“処刑場”になっていた。`
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.png",
    text: "クレス"
  },

  {
    type: "summary",
    text: `名を呼ばれた瞬間、
完全に“標的”として固定される。`
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.png",
    text: "お前の命をもって――任務完了だ"
  },

  {
    type: "summary",
    text: `一歩、踏み出す。`
  },
  {
    type: "summary",
    text: `それだけで、
戦闘開始の合図としては十分だった。`
  },

  {
    type: "summary",
    text: `戦いは、避けられない――`
  }
];

const ZEEK_AFTER_BATTLE_STORY = [

  {
    type: "summary",
    text: `激しい戦いの末――

クレスは膝をつき、
剣を地面に突き立てた。`
  },

  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "ぐっ……！"
  },

  {
    type: "summary",
    text: `全身が軋む。

立っていることすら、
もはや限界だった。`
  },

  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "クレス！！"
  },

  {
    type: "summary",
    text: `ジークはゆっくりと歩み寄る。

その足取りに、
一切の迷いはない。`
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.png",
    text: "……終わりだ"
  },

  {
    type: "summary",
    text: `刃が振り下ろされれば、
それで全てが終わる――`
  },

  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……それでも"
  },

  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "俺は……進む"
  },

  {
    type: "summary",
    text: `震える身体を押さえつけながら、
クレスは顔を上げる。`
  },

  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "奪われたまま終わるつもりはない"
  },

  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "王だからじゃない……命令だからでもない"
  },

  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "俺は――守るために戦う"
  },

  {
    type: "summary",
    text: `その瞳には、
確かな意志が宿っていた。`
  },

  {
    type: "summary",
    text: `倒れてなお、
折れていない“何か”。`
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.png",
    text: "……"
  },

  {
    type: "summary",
    text: `振り上げられていた刃が――止まる。`
  },

  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "……え……？"
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.png",
    text: "……行け"
  },

  {
    type: "summary",
    text: `予想外の言葉だった。`
  },

  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "な、なんで……？"
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.png",
    text: "今のお前たちを斬っても――ただの処刑だ"
  },

  {
    type: "summary",
    text: `そこにあるのは慈悲ではない。

ただの“判断”。`
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.png",
    text: "価値がない"
  },

  // ===== 回想ここから =====

  {
    type: "summary",
    text: `その言葉の直後――

ジークの脳裏に、
遠い昔の光景がよぎった。`
  },

  {
    type: "summary",
    text: `焼け落ちた村。
倒れ伏す大人たち。
泣き叫ぶ子どもたち。`
  },

  {
    type: "summary",
    text: `まだ少年だったジークは、
血と灰にまみれた剣を握りしめながら、
ただ立ち尽くしていた。`
  },

  {
    type: "dialogue",
    name: "少年時代のジーク",
    side: "left",
    text: "……どうしてだ"
  },

  {
    type: "dialogue",
    name: "少年時代のジーク",
    side: "left",
    text: "どうして、誰も守れない……"
  },

  {
    type: "summary",
    text: `力がなかった。

正しさだけでは、
何ひとつ守れないと知った日だった。`
  },

  {
    type: "summary",
    text: `それからの彼は、
ただ強さだけを求めた。

守るために。
二度と奪われないために。`
  },

  {
    type: "summary",
    text: `だが――`
  },

  {
    type: "summary",
    text: `いつからだったか。

守るために振るっていた剣は、
命じられるままに“処断するための剣”へと変わっていた。`
  },

  {
    type: "summary",
    text: `王城の中で、
感情を捨て、
迷いを捨て、
ただ任務を遂行する刃として生き延びてきた。`
  },

  {
    type: "dialogue",
    name: "？？？",
    side: "left",
    text: "守るためには、情を捨てろ"
  },

  {
    type: "dialogue",
    name: "？？？",
    side: "left",
    text: "お前は剣であれ。意思を持つな"
  },

  {
    type: "summary",
    text: `そうして生きてきたはずだった。`
  },

  {
    type: "summary",
    text: `だが今、目の前の男は――

敗北し、
血を流し、
膝をつきながらも、
なお“守るために戦う”と言った。`
  },

  {
    type: "summary",
    text: `それは、ジークがかつて捨てたはずの言葉だった。`
  },

  // ===== 回想ここまで =====

  {
    type: "summary",
    text: `だが――`
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.png",
    text: "……だが、その目"
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.png",
    text: "消えていないな"
  },

  {
    type: "summary",
    text: `初めてわずかに、
“興味”ではなく、
確かめたいという感情が混じる。`
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.png",
    text: "……昔の俺と同じだ"
  },

  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "え……？"
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.png",
    text: "いや……違うな"
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.png",
    text: "お前は、まだ捨てていない"
  },

  {
    type: "summary",
    text: `その一言には、
ジーク自身にも向けられた
微かな自嘲が滲んでいた。`
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.png",
    text: "次に会う時――"
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.png",
    text: "お前がまだ同じ目をしているなら"
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.png",
    text: "その時は、本当に試してやる"
  },

  {
    type: "summary",
    text: `それは警告ではない。

己の過去と、
目の前の男の信念とを
秤にかけるための“約束”だった。`
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.png",
    text: "俺はここに残る"
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.png",
    text: "この城で待つ"
  },

  {
    type: "summary",
    text: `完全に背を向ける。

もはや敵としてすら見ていないようでいて、
その実、視線の先を託したようでもあった。`
  },

  {
    type: "summary",
    text: `張り詰めていた空気が、わずかに緩む。`
  },

  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "……殿下、急ぎましょう"
  },

  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "航路図を発見しました"
  },

  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "これです……海上都市へ渡る旧航路"
  },

  {
    type: "summary",
    text: `埃をかぶった古い地図。

だがそこには、
確かに新たな道が記されていた。`
  },

  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "今なら……追手を撒けるかもしれない"
  },

  {
    type: "summary",
    text: `だが――

あの男は、逃がしただけだ。`
  },

  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……行こう"
  },

  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "次の地へ"
  },

  {
    type: "summary",
    text: `背後には、圧倒的な存在。

それでもクレスは、
前へ進むことを選んだ――`
  }

];

const GLADIO_HALL_BLOCKED_EVENT = [
  {
    type: "summary",
    text: `中央ホールへ足を踏み入れた瞬間、
空気がわずかに変わった。`
  },
  {
    type: "summary",
    text: `広く吹き抜けになった空間の中央には、
巨大な縦穴が穿たれている。`
  },
  {
    type: "summary",
    text: `見下ろした先には、闇。

ただ暗いだけではない。
底の見えない深さが、
こちらを静かに見返しているようだった。`
  },
  {
    type: "summary",
    text: `穴の縁には古い石階段が沿うように続いている。

だが、その階段は途中から無残に崩れ落ち、
先へ進む道は闇の中で途切れていた。`
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "……やだ、この下……変な感じがする"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "ただ深いだけじゃない。何かがずっと下で息をひそめてるみたい"
  },
  {
    type: "summary",
    text: `冗談ではないと、
その声色だけで分かった。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "……この下に、さらに階層があるようです"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "地下牢や貯蔵庫、という規模じゃなさそうだな"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "はい……むしろ、城の構造に対して不自然すぎます"
  },
  {
    type: "summary",
    text: `セリオスは崩れた石材に触れ、慎重に穴の周囲を見回した。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "表向きの城郭図に、これほど深い地下構造が記されていた記録はありません"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "もし存在していたのだとすれば……意図的に隠されていた可能性があります"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "隠されていた、か……"
  },
  {
    type: "summary",
    text: `それは財宝を守るためか。
あるいは、外に出してはならない何かを封じるためか。`
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "……ねえ、これ"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "階段が壊れたっていうより、“閉じられた”って感じがしない？"
  },
  {
    type: "summary",
    text: `確かに、崩れた石の断面は
ただ年月で壊れたにしては妙に不自然だった。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "誰かが意図的に道を絶った……？"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "ええ。その可能性は高いでしょう"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "そして、わざわざ塞いだ以上――別の場所からこの地下へ干渉する仕掛けがあるはずです"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "つまり、この場で無理に降りることはできない"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "はい。今はまだ"
  },
  {
    type: "summary",
    text: `穴の底から、冷たい風が吹き上がる。`
  },
  {
    type: "summary",
    text: `その風は、
ただの地下の空気ではなかった。

まるでこの城の奥底に眠る何かが、
静かにこちらを待っているかのようだった。`
  },
  {
    type: "summary",
    text: `この先へ進むには、
まずこの廃城のどこかに隠された仕掛けを見つけ出す必要がありそうだ。`
  }
];

const GLADIO_HALL_OPEN_EVENT = [
  {
    type: "summary",
    text: "中央ホールの縦穴の奥から、古い石機構が動く音が響いた。"
  },
  {
    type: "summary",
    text: "崩れていた通路の一部が持ち上がり、地下へ降りられる足場が現れる。"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "旧書庫の仕掛けが、この地下機構に繋がっていたのですね"
  },
  {
    type: "choice",
    choices: [
      { text: "地下へ進む", result: "go" },
      { text: "今は戻る", result: "leave" }
    ]
  }
];

const GLADIO_PRISON_EVENT = [
  {
    type: "summary",
    text: `地下深く――

ひときわ空気の重い一角に、
鉄格子で仕切られた牢が並んでいた。`
  },
  {
    type: "summary",
    text: `壁は黒ずみ、
長い年月の中で何度も何かを閉じ込めてきた痕跡が残っている。`
  },
  {
    type: "summary",
    text: `だが――`
  },
  {
    type: "summary",
    text: `その奥の一室だけ、
明らかに“新しい”。`
  },
  {
    type: "summary",
    text: `鎖は錆びていない。

床にも、かすかな“擦れた跡”が残っている。`
  },
  {
    type: "summary",
    text: `そして――そこには、一人の女がいた。`
  },
  {
    type: "summary",
    text: `手首と足首を鎖に繋がれ、
力なく座り込んでいる。`
  },
  {
    type: "dialogue",
    name: "女冒険家",
    side: "left",
    face: "./assets/img/beautiful_adventurer.png",
    text: "……誰……？"
  },
  {
    type: "summary",
    text: `顔を上げた瞬間――

その瞳に、かすかな希望の光が宿る。`
  },
  {
    type: "dialogue",
    name: "女冒険家",
    side: "left",
    face: "./assets/img/beautiful_adventurer.png",
    text: "お願い……ここから出して……"
  },
  {
    type: "summary",
    text: `その声は弱々しく、
今にも消えてしまいそうだった。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……君は誰だ？ なぜこんな場所にいる"
  },
  {
    type: "dialogue",
    name: "女冒険家",
    side: "left",
    face: "./assets/img/beautiful_adventurer.png",
    text: "私は……ただの冒険者……"
  },
  {
    type: "dialogue",
    name: "女冒険家",
    side: "left",
    face: "./assets/img/beautiful_adventurer.png",
    text: "遺跡を調べていたの……そしたら急に……出口が閉じて……"
  },
  {
    type: "summary",
    text: `言葉は途切れ途切れだが、
嘘をついているようには見えない――`
  },
  {
    type: "summary",
    text: `だが――`
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "……ねえ"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "この人……なんか変"
  },
  {
    type: "summary",
    text: `小さな声。

だが、はっきりとした違和感。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "……殿下、慎重に"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "この地下は、長い間閉ざされていたはずです"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "にもかかわらず……ここに“生者の気配”が残っているのは不自然です"
  },
  {
    type: "summary",
    text: `セリオスの視線は鋭い。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "……それに、この鎖"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "単なる拘束具ではありません。魔力封印の術式が組み込まれています"
  },
  {
    type: "summary",
    text: `ただ閉じ込めているのではない。

“何かを封じている”――`
  },
  {
    type: "dialogue",
    name: "女冒険家",
    side: "left",
    face: "./assets/img/beautiful_adventurer.png",
    text: "ち、違う……私はただ……"
  },
  {
    type: "summary",
    text: `一瞬だけ――

その表情に、焦りのようなものがよぎった。`
  },
  {
    type: "dialogue",
    name: "女冒険家",
    side: "left",
    face: "./assets/img/beautiful_adventurer.png",
    text: "お願い……助けて……ここにいたら……おかしくなりそうなの……"
  },
  {
    type: "summary",
    text: `その声は、今度は確かに“本物の恐怖”を帯びていた。`
  },
  {
    type: "summary",
    text: `だが――

それが“彼女自身のもの”なのかは、分からない。`
  },
  {
    type: "summary",
    text: `鎖を解けば、助けられる。

だが同時に、
何かを解き放つ可能性もある――`
  },
  {
    type: "choice",
    choices: [
      { text: "鎖を解く", result: "release" },
      { text: "今は様子を見る", result: "leave" }
    ]
  }
];

const GLADIO_PRISON_RELEASE_EVENT = [
  {
    type: "summary",
    text: "鎖が外れた瞬間、女は静かに俯いた。"
  },
  {
    type: "dialogue",
    name: "女冒険家",
    side: "left",
    face: "./assets/img/beautiful_adventurer.png",
    text: "……ありがとう"
  },
  {
    type: "summary",
    text: "次の瞬間、その身体が不気味に膨れ上がる。"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "殿下、離れてください！ 擬態です！"
  },
  {
    type: "summary",
    text: "女冒険家は、おぞましい異形の魔物へと変貌した――"
  }
];

const GLADIO_RETURN_AFTER_LUMERIA = [
  {
    type: "summary",
    text: `ルーメニアからの帰還――

再び訪れたグラディオ廃城は、
以前とは明らかに空気が違っていた。`
  },
  {
    type: "summary",
    text: `静かだ。

だがそれは“無人”の静けさではない。

何かが“待っている”静寂だった。`
  },
  {
    type: "summary",
    text: `崩れた城門を越え、
クレスたちは迷いなく玉座の間へと進む。`
  },
  {
    type: "summary",
    text: `あの時と同じ場所――`
  },
  {
    type: "summary",
    text: `そして、やはりそこに“いた”。`
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.dia.png",
    text: "……来たか"
  },

  {
    type: "summary",
    text: `背を向けたまま。

だが、その存在感だけで
逃げ場がないことを理解させる。`
  },

  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "……ほんとに、待ってたんだ……"
  },

  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu2.dia.png",
    text: "……退く気はなさそうですね"
  },

  {
    type: "summary",
    text: `ジークはゆっくりと振り返る。`
  },

  {
    type: "summary",
    text: `その目は以前と同じ――

だが、どこか“確かめる者”の視線に変わっていた。`
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.dia.png",
    text: "逃げなかったな"
  },

  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "逃げる理由はない"
  },

  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "あの時、お前は言ったはずだ"
  },

  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "“次は試す”ってな"
  },

  {
    type: "summary",
    text: `沈黙。`
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.dia.png",
    text: "……ああ"
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.dia.png",
    text: "だから来た"
  },

  {
    type: "summary",
    text: `その言葉に偽りはない。`
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.dia.png",
    text: "前回は“処刑”だった"
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.dia.png",
    text: "だが今回は違う"
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.dia.png",
    text: "お前が進んだ道に――価値があったのか"
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.dia.png",
    text: "この目で確かめる"
  },

  {
    type: "summary",
    text: `それは任務ではない。

ジーク自身の“答え”を出すための戦いだった。`
  },

  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "だったら――"
  },

  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "今度は見せてやる"
  },

  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "俺が進んできた理由を"
  },

  {
    type: "summary",
    text: `クレスの足取りに、迷いはない。`
  },

  {
    type: "summary",
    text: `あの時の“膝をついた男”ではない。`
  },

  {
    type: "summary",
    text: `自らの意思で立つ者として、
ここにいる。`
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.dia.png",
    text: "……いい目だ"
  },

  {
    type: "summary",
    text: `ほんのわずか――

ジークの口元が動いた。`
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.dia.png",
    text: "では――始めよう"
  },

  {
    type: "summary",
    text: `処刑ではない。`
  },

  {
    type: "summary",
    text: `試練でもない。`
  },

  {
    type: "summary",
    text: `これは――

“選択を賭けた戦い”だ。`
  }
];

const ZEEK_JOIN_EVENT = [
  {
    type: "summary",
    text: `激突の果て――

最後の一撃が、空間を裂いた。`
  },

  {
    type: "summary",
    text: `火花が散り、
次の瞬間――`
  },

  {
    type: "summary",
    text: `ジークの剣が、大きく弾かれる。`
  },

  {
    type: "summary",
    text: `体勢を崩したのは――ジークの方だった。`
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.dia.png",
    text: "……っ"
  },

  {
    type: "summary",
    text: `一瞬の隙。`
  },

  {
    type: "summary",
    text: `その間に、クレスの刃が喉元へと突きつけられていた。`
  },

  {
    type: "summary",
    text: `勝敗は――明らかだった。`
  },

  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "……勝った……？"
  },

  {
    type: "summary",
    text: `誰も動かない。`
  },

  {
    type: "summary",
    text: `ただ、二人の間にだけ緊張が残る。`
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.dia.png",
    text: "……そうか"
  },

  {
    type: "summary",
    text: `ジークはゆっくりと息を吐く。`
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.dia.png",
    text: "今のは……完全に俺の敗北だ"
  },

  // ===== 重要：ここで「初めて負けた感」 =====

  {
    type: "summary",
    text: `その声には、悔しさよりも――

わずかな“納得”が混じっていた。`
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.dia.png",
    text: "ただの力じゃないな……"
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.dia.png",
    text: "迷いのない剣だ"
  },

  {
    type: "summary",
    text: `クレスの刃は揺れていない。`
  },

  {
    type: "summary",
    text: `あの時とは違う。`
  },

  {
    type: "summary",
    text: `“折れない意志”が、そこにあった。`
  },

  // ===== 思想パート =====

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.dia.png",
    text: "……俺はこれまで、命令に従うことが正しいと思っていた"
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.dia.png",
    text: "守るために斬る――それが“役目”だと"
  },

  {
    type: "summary",
    text: `だが、その前提は今、崩れた。`
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.dia.png",
    text: "だが違ったな"
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.dia.png",
    text: "命令ではなく、自分の意志で振るう剣の方が――強い"
  },

  // ===== クレスを認める =====

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.dia.png",
    text: "お前は証明した"
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.dia.png",
    text: "その道に、力があることを"
  },

  {
    type: "summary",
    text: `静かに、剣が下ろされる。`
  },

  // ===== 加入 =====

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.dia.png",
    text: "ならば俺は――選ぶ"
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.dia.png",
    text: "王城ではなく、お前の剣を"
  },

  {
    type: "summary",
    text: `それは裏切りではない。`
  },

  {
    type: "summary",
    text: `“新しい正義の選択”だった。`
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.dia.png",
    text: "クレス"
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.dia.png",
    text: "俺をお前たちに加えろ"
  },

  {
    type: "summary",
    text: `その言葉は重い。`
  },

  {
    type: "summary",
    text: `“敗者”としてではなく、

“認めた者”としての申し出だった。`
  },

  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……ああ"
  },

  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "来い、ジーク"
  },

  {
    type: "summary",
    text: `二人の剣は、初めて同じ方向を向いた。`
  },

  {
    type: "summary",
    text: "ジークが仲間に加わった！"
  }
];

const MID_AREA_LEVEL_CAP_STORY = [
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "……ここまでです。この地で得られる成長には限界があります"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "これ以上ここに留まっても、大きな成長は望めないということか"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "はい。次の地へ進みましょう"
  },
  {
    type: "summary",
    text: "この地での成長は限界に達した。新たな地へ向かおう。"
  }
];

const PEACE_GLADIO_STORY = [
  {
    type: "summary",
    text: "グラディオ廃城は相変わらず静まり返っていた。"
  },
  {
    type: "summary",
    text: "だが、その静けさはかつての不穏さではなく、長い役目を終えた後の眠りのようだった。"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "この城も、ようやく本当に終わりを迎えられたのかもしれません"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "ああ……もう、ここで何かに怯える必要はない"
  }
];


//ルーメニア
const LUMENIA_PORT_BLOCKED_STORY = [
  {
    type: "summary",
    text: `海上都市ルーメニア――

無数の船が行き交い、
潮の匂いと人々の喧騒が混ざり合う大通り。`
  },
  {
    type: "summary",
    text: `商人、傭兵、船乗り。

様々な思惑を抱えた者たちが集まるこの街は、
常に活気に満ちているはずだった。`
  },
  {
    type: "summary",
    text: `だが――

その奥に見える港だけは、
どこか異質な空気をまとっている。`
  },

  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "まずは港だ。この街の海路を押さえれば、動きやすくなる"
  },

  {
    type: "summary",
    text: `クレスの視線の先には、
大小の船が停泊するはずの広大な港。`
  },

  {
    type: "summary",
    text: `だがそこには――

妙な緊張が漂っていた。`
  },

  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "……おかしいですね"
  },

  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "人の数は多いはずなのに……港側だけ、空気が荒れています"
  },

  {
    type: "summary",
    text: `怒号、荒い笑い声、
そして時折聞こえる鈍い衝撃音。`
  },

  {
    type: "summary",
    text: `それは“商業都市の港”の音ではない。`
  },

  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "……なんか、イヤな感じする"
  },

  {
    type: "summary",
    text: `その時――`
  },

  {
    type: "summary",
    text: `通りの脇で様子を窺っていた商人が、
周囲を気にしながら声をかけてきた。`
  },

  {
    type: "dialogue",
    name: "商人",
    side: "left",
    face: "./assets/img/villager.png",
    text: "……あんたたち、よそ者だな"
  },

  {
    type: "dialogue",
    name: "商人",
    side: "left",
    face: "./assets/img/villager.png",
    text: "今は港に近づくな。あそこはもう“普通の場所”じゃない"
  },

  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "どういうことだ"
  },

  {
    type: "summary",
    text: `商人はさらに声を潜める。`
  },

  {
    type: "dialogue",
    name: "商人",
    side: "left",
    face: "./assets/img/villager.png",
    text: "裏路地の海賊どもがな……ここ最近、一気に勢力を広げやがった"
  },

  {
    type: "dialogue",
    name: "商人",
    side: "left",
    face: "./assets/img/villager.png",
    text: "最初は積荷をかすめる程度だったが……今じゃ完全に港を牛耳ってる"
  },

  {
    type: "summary",
    text: `視線の先――

港の入口には、武装した荒くれ者たちの姿が見える。`
  },

  {
    type: "summary",
    text: `通行人は避けるように遠回りし、
商人たちも近づこうとしない。`
  },

  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "海賊が……街の中にまで入り込んでるの？"
  },

  {
    type: "dialogue",
    name: "商人",
    side: "left",
    face: "./assets/img/villager.png",
    text: "ああ。もう“外の連中”じゃねえ"
  },

  {
    type: "dialogue",
    name: "商人",
    side: "left",
    face: "./assets/img/villager.png",
    text: "この街そのものを食い始めてる"
  },

  {
    type: "summary",
    text: `その言葉には、はっきりとした恐怖が滲んでいた。`
  },

  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "……妙ですね"
  },

  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "これほどの規模なら、本来は都市側が動くはずですが……"
  },

  {
    type: "summary",
    text: `取り締まる気配はない。`
  },

  {
    type: "summary",
    text: `それは“無力”なのか――それとも。`
  },

  {
    type: "dialogue",
    name: "商人",
    side: "left",
    face: "./assets/img/villager.png",
    text: "連中を黙らせない限り、港は使えない"
  },

  {
    type: "dialogue",
    name: "商人",
    side: "left",
    face: "./assets/img/villager.png",
    text: "船も、航路も、全部あいつらの縄張りだ"
  },

  {
    type: "summary",
    text: `つまり――`
  },

  {
    type: "summary",
    text: `この街の“出口”は、奪われている。`
  },

  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……なら、やることは一つだ"
  },

  {
    type: "summary",
    text: `迷いはない。`
  },

  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "港を取り戻す"
  },

  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "そのために――先にあの海賊どもを排除する"
  },

  {
    type: "summary",
    text: `視線の先には、荒れた港。`
  },

  {
    type: "summary",
    text: `その奥にあるはずの“次の道”は、
まだ閉ざされている。`
  },

  {
    type: "summary",
    text: "港へ進むには、裏路地にたむろする海賊たちを排除する必要があるようだ。"
  }
];

const LUMENIA_GUILD_EVENT = [
  {
    type: "summary",
    text: `情報商ギルド――

紙束と海図、封を切られていない書簡、
そして無数の噂話が飛び交う場所。`
  },
  {
    type: "summary",
    text: `室内には商人、船乗り、傭兵崩れ、
身なりの良い使者らしき者までが混ざり合い、
誰もが小声で何かを売り、何かを探っている。`
  },
  {
    type: "summary",
    text: `ここでは金貨だけではない。

情報そのものが、武器であり、
盾であり、ときに命綱になる。`
  },
  {
    type: "dialogue",
    name: "情報商",
    side: "left",
    face: "./assets/img/info_broker.png",
    text: "……見ない顔だな"
  },
  {
    type: "dialogue",
    name: "情報商",
    side: "left",
    face: "./assets/img/info_broker.png",
    text: "王国に逆らう連中の話を聞きに来たのか？"
  },
  {
    type: "summary",
    text: `その声には、試すような響きがあった。

この場では、軽々しく本音を口にする者ほど早く消えるのだろう。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "……何か知っているのですね"
  },
  {
    type: "dialogue",
    name: "情報商",
    side: "left",
    face: "./assets/img/info_broker.png",
    text: "知ってるさ。ここは、そういう話が流れ着く場所だ"
  },
  {
    type: "dialogue",
    name: "情報商",
    side: "left",
    face: "./assets/img/info_broker.png",
    text: "だが勘違いするな。どこかに立派な“反王国軍”があるわけじゃない"
  },
  {
    type: "summary",
    text: `男は机の上の海図を指先で軽く叩いた。`
  },
  {
    type: "dialogue",
    name: "情報商",
    side: "left",
    face: "./assets/img/info_broker.png",
    text: "表立って旗を掲げてるわけじゃない。だが、王国のやり方に反発する勢力は確かにある"
  },
  {
    type: "dialogue",
    name: "情報商",
    side: "left",
    face: "./assets/img/info_broker.png",
    text: "重すぎる徴税に耐えかねた地方領主、商路を潰されて怒ってる商人、命令ひとつで切り捨てられた兵、国境を追われた流れ者……"
  },
  {
    type: "dialogue",
    name: "情報商",
    side: "left",
    face: "./assets/img/info_broker.png",
    text: "立場も理由も違う。だが、今の王国を快く思っていないって点だけは同じだ"
  },
  {
    type: "summary",
    text: `それは“軍”ではない。

むしろ、各地に散った不満と怒りの断片――
まだ名前すら持たない火種だった。`
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "でも、それだけじゃ……ただバラバラに燻ってるだけだよね"
  },
  {
    type: "dialogue",
    name: "情報商",
    side: "left",
    face: "./assets/img/info_broker.png",
    text: "その通りだ、お嬢ちゃん"
  },
  {
    type: "dialogue",
    name: "情報商",
    side: "left",
    face: "./assets/img/info_broker.png",
    text: "皆、王国に不満はある。だが誰もが他人を信用していない"
  },
  {
    type: "dialogue",
    name: "情報商",
    side: "left",
    face: "./assets/img/info_broker.png",
    text: "下手に動けば潰される。だから口を噤み、様子を見る。そうして火は、燻ったまま消えていく"
  },
  {
    type: "summary",
    text: `ギルドのざわめきの奥には、
確かに“何かを待っている空気”があった。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……敵の中にも、揺らいでいる者がいるということか"
  },
  {
    type: "dialogue",
    name: "情報商",
    side: "left",
    face: "./assets/img/info_broker.png",
    text: "ああ。王国の内側にいた連中ほど、今のやり方に疑問を持ち始めてる"
  },
  {
    type: "dialogue",
    name: "情報商",
    side: "left",
    face: "./assets/img/info_broker.png",
    text: "だが、揺らぎは揺らぎのままだ。誰かが“進む理由”を示さない限りな"
  },
  {
    type: "summary",
    text: `男の視線が、わずかにクレスへ向く。`
  },
  {
    type: "dialogue",
    name: "情報商",
    side: "left",
    face: "./assets/img/info_broker.png",
    text: "火種はある。問題は、誰がそれをひとつの炎にまとめるかだ"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "……各地に散っている反発を繋ぐ者がいれば、盤面は変わる"
  },
  {
    type: "dialogue",
    name: "情報商",
    side: "left",
    face: "./assets/img/info_broker.png",
    text: "そういうことだ"
  },
  {
    type: "dialogue",
    name: "情報商",
    side: "left",
    face: "./assets/img/info_broker.png",
    text: "王国を倒す力は、最初からどこか一か所にあるんじゃない"
  },
  {
    type: "dialogue",
    name: "情報商",
    side: "left",
    face: "./assets/img/info_broker.png",
    text: "散らばった怒りと、失ったものを抱えた連中を……誰かが一つに束ねた時に初めて生まれる"
  },
  {
    type: "summary",
    text: `クレスは黙ってその言葉を聞いていた。

それは単なる噂話ではなく、
これから先に待つ現実そのもののように思えた。`
  },
  {
    type: "summary",
    text: "王国に対する反対勢力は、まだ散発的だが確かに存在しているようだ。"
  }
];

const LUMENIA_HOUSE_EVENT = [
  {
    type: "summary",
    text: `港町の一角にある民家。

室内には、香辛料の匂いが染みついた木箱や、
見慣れない紋様の刻まれた樽、
遠い異国から運ばれてきたらしい布袋がいくつも積まれていた。`
  },
  {
    type: "summary",
    text: `倉庫というには生活の気配があり、
民家というには荷が多すぎる。

この街では、住む場所と商う場所の境目すら
曖昧なのかもしれなかった。`
  },
  {
    type: "dialogue",
    name: "住人",
    side: "left",
    face: "./assets/img/villager.png",
    text: "……旅人さんかい？"
  },
  {
    type: "dialogue",
    name: "住人",
    side: "left",
    face: "./assets/img/villager.png",
    text: "その顔を見るに、この街の流儀はまだよく知らなさそうだな"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "流儀？"
  },
  {
    type: "dialogue",
    name: "住人",
    side: "left",
    face: "./assets/img/villager.png",
    text: "この街じゃ、ただ金を持ってるだけじゃ駄目なんだ"
  },
  {
    type: "summary",
    text: `住人は積まれた木箱を軽く叩きながら、
苦笑まじりに肩をすくめた。`
  },
  {
    type: "dialogue",
    name: "住人",
    side: "left",
    face: "./assets/img/villager.png",
    text: "金貨なんてのは、誰でも出せる。だが“こいつは約束を守る”って信用は、すぐには買えない"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "つまり、取引相手として信頼されることが重要だと"
  },
  {
    type: "dialogue",
    name: "住人",
    side: "left",
    face: "./assets/img/villager.png",
    text: "そういうことさ"
  },
  {
    type: "dialogue",
    name: "住人",
    side: "left",
    face: "./assets/img/villager.png",
    text: "貿易を続けて、相手から“信用できる”と思われると、もっといいものと交換してもらえることがある"
  },
  {
    type: "dialogue",
    name: "住人",
    side: "left",
    face: "./assets/img/villager.png",
    text: "最初は安い雑貨や余り物しか回ってこなくてもな、何度もきっちり取引を重ねりゃ、向こうも少しずつ腹の内を見せてくる"
  },
  {
    type: "summary",
    text: `それは単なる売買ではない。

品を介して相手との関係を築いていく――
この街の交易は、そういうものらしい。`
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "信用で交換できるものが増えるんだ……"
  },
  {
    type: "dialogue",
    name: "住人",
    side: "left",
    face: "./assets/img/villager.png",
    text: "ああ。珍しい素材、表に出ない品、どこから仕入れたのかも分からない代物……そういうのは、いきなり新顔には回ってこない"
  },
  {
    type: "dialogue",
    name: "住人",
    side: "left",
    face: "./assets/img/villager.png",
    text: "下手な相手に渡せば、品も商売も台無しになるからな"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "なるほど。金があるかより、繋がりを持てるかの方が大きいのか"
  },
  {
    type: "dialogue",
    name: "住人",
    side: "left",
    face: "./assets/img/villager.png",
    text: "この街じゃそっちの方がずっと重い"
  },
  {
    type: "dialogue",
    name: "住人",
    side: "left",
    face: "./assets/img/villager.png",
    text: "港ってのはな、物が集まる場所である前に、人と人の思惑が流れ着く場所なんだよ"
  },
  {
    type: "summary",
    text: `外から来た者、流れ着いた商人、国を渡る船乗り。

ルーメニアは、品だけでなく
人の欲や打算までも飲み込んで回っている。`
  },
  {
    type: "dialogue",
    name: "住人",
    side: "left",
    face: "./assets/img/villager.png",
    text: "付き合いを重ねるのが大事ってわけさ。焦って得をしようとする奴ほど、結局なにも掴めずに終わる"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "……この街らしい仕組みですね。信用そのものが通貨の一つになっている"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "なんかちょっと面白いかも。ちゃんと相手に覚えてもらえたら、手に入るものも変わるんだね"
  },
  {
    type: "dialogue",
    name: "住人",
    side: "left",
    face: "./assets/img/villager.png",
    text: "そうさ。この街で“またあんたか”って言われるようになった頃、ようやく本当の商売が始まるのさ"
  },
  {
    type: "summary",
    text: "貿易を続けて信用が上がると、より良い交換ができるようになるらしい。"
  }
];

const LUMENIA_LIGHTHOUSE_EVENT = [
  {
    type: "summary",
    text: "巨大な灯台が海を見下ろしている。今はまだ特に調べることはなさそうだ。"
  }
];

const LUMENIA_MARKET_EVENT = [
  {
    type: "summary",
    text: "交易品と素材が並ぶ賑やかな市場だ。"
  },
  {
    type: "summary",
    text: "素材交換の仕組みは、今後利用できるようになりそうだ。"
  }
];

const LUMENIA_BACKSTREET_EVENT = [
  {
    type: "summary",
    text: `大通りの喧騒を抜けた先――

裏路地は、まるで別の街のようだった。`
  },
  {
    type: "summary",
    text: `湿った石畳、
積み上げられた木箱、
鼻をつく酒と血の混じったような匂い。

そこに集まるのは、
港の表では見かけない顔ばかりだった。`
  },
  {
    type: "summary",
    text: `視線が集まる。

値踏みするような、
獲物を見るような目――`
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "……空気、全然違うね。ここ"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "ええ……正規の流通から外れた者たちの領域でしょう"
  },
  {
    type: "summary",
    text: `その時――

奥の影から、一人の男がゆっくりと歩み出る。`
  },
  {
    type: "dialogue",
    name: "海賊",
    side: "left",
    face: "./assets/img/enemy_pirate.png",
    text: "……見ねえ顔だな"
  },
  {
    type: "dialogue",
    name: "海賊",
    side: "left",
    face: "./assets/img/enemy_pirate.png",
    text: "観光気分で迷い込んだにしちゃ、場所が悪いぜ"
  },
  {
    type: "summary",
    text: `男の背後には、同じような荒くれ者たちが無言で並ぶ。

逃げ道は、すでに塞がれていた。`
  },
  {
    type: "dialogue",
    name: "海賊",
    side: "left",
    face: "./assets/img/enemy_pirate.png",
    text: "ここは俺たちの縄張りだ"
  },
  {
    type: "dialogue",
    name: "海賊",
    side: "left",
    face: "./assets/img/enemy_pirate.png",
    text: "用があるなら、まずは通行料でも払ってもらおうか"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……港を塞いでいるのも、お前たちか"
  },
  {
    type: "summary",
    text: `クレスの言葉に、
周囲の空気がわずかに張り詰める。`
  },
  {
    type: "dialogue",
    name: "海賊",
    side: "left",
    face: "./assets/img/enemy_pirate.png",
    text: "ああ、そうだ"
  },
  {
    type: "dialogue",
    name: "海賊",
    side: "left",
    face: "./assets/img/enemy_pirate.png",
    text: "この街の港はな、表の連中だけのもんじゃねえ"
  },
  {
    type: "dialogue",
    name: "海賊",
    side: "left",
    face: "./assets/img/enemy_pirate.png",
    text: "流れてくる荷も、人も……全部“選別”してやってんのさ"
  },
  {
    type: "summary",
    text: `それは単なる占拠ではない。

流通そのものを握ろうとする動き――`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "……非合法な物流を掌握している、ということですか"
  },
  {
    type: "dialogue",
    name: "海賊",
    side: "left",
    face: "./assets/img/enemy_pirate.png",
    text: "難しい言い方すんなよ"
  },
  {
    type: "dialogue",
    name: "海賊",
    side: "left",
    face: "./assets/img/enemy_pirate.png",
    text: "要は――俺たちを通さなきゃ、この街の海は使えねえってことだ"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "そんなの……街の人たち困るじゃん"
  },
  {
    type: "dialogue",
    name: "海賊",
    side: "left",
    face: "./assets/img/enemy_pirate.png",
    text: "困る？"
  },
  {
    type: "dialogue",
    name: "海賊",
    side: "left",
    face: "./assets/img/enemy_pirate.png",
    text: "だったら金払えばいいだけだろ。誰も損はしてねえ"
  },
  {
    type: "summary",
    text: `歪んだ理屈。

だが、この裏路地ではそれが“現実”だった。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……そのやり方が通ると思っているのか"
  },
  {
    type: "dialogue",
    name: "海賊",
    side: "left",
    face: "./assets/img/enemy_pirate.png",
    text: "通ってるから、こうして立ってんだよ"
  },
  {
    type: "summary",
    text: `男はニヤリと笑い、剣の柄に手をかける。`
  },
  {
    type: "dialogue",
    name: "海賊",
    side: "left",
    face: "./assets/img/enemy_pirate.png",
    text: "文句があるなら――"
  },
  {
    type: "dialogue",
    name: "海賊",
    side: "left",
    face: "./assets/img/enemy_pirate.png",
    text: "力づくで通ってみな"
  },
  {
    type: "summary",
    text: `囲みが狭まる。

交渉の余地は、最初からなかった――`
  }
];

const LUMENIA_PORT_UNLOCK_EVENT = [
  {
    type: "summary",
    text: `裏路地に巣食っていた海賊たちを幾度も退けた末――

ついに、この一帯を支配していた荒くれ者たちは
目に見えて数を減らしていった。`
  },
  {
    type: "summary",
    text: `つい先ほどまで漂っていた
剣呑な殺気と嘲笑は消え、

代わりに、長く押し殺されていたような
静かな息遣いが街に戻り始める。`
  },
  {
    type: "summary",
    text: `閉ざされていた窓がわずかに開き、
物陰からこちらを窺っていた住民たちが
少しずつ表へ姿を見せていく。`
  },
  {
    type: "dialogue",
    name: "住民",
    side: "left",
    face: "./assets/img/villager.png",
    text: "……ほんとに、連中がいなくなったのか……？"
  },
  {
    type: "dialogue",
    name: "別の住民",
    side: "left",
    face: "./assets/img/villager.png",
    text: "ああ……裏路地の見張りも消えてる。もう港へ近づいても大丈夫かもしれない"
  },
  {
    type: "summary",
    text: `街の空気が、確かに変わっていた。

それは大きな勝利というより――
長く淀んでいた流れが、ようやく動き出した感覚だった。`
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "……やっと静かになったね"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "なんか、街そのものが息を吹き返したみたい"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "ええ。これで港を塞いでいた私兵まがいの連中は排除できたはずです"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "少なくとも、正規の海路に近づくことはできるでしょう"
  },
  {
    type: "summary",
    text: `セリオスは周囲を見渡す。

だがその表情には、
わずかな警戒が残っていた。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……けど、これで全てが片付いたわけじゃない"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "海賊を追い払っただけだ。この街の奥にある歪みまでは、まだ消えていない"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "はい。ですが、港を取り戻せた意味は大きい"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "海を押さえれば、情報も、人の流れも、次の道も見えてきます"
  },
  {
    type: "summary",
    text: `ルーメニアは海の都。

その心臓部ともいえる港が再び開くことは、
単なる利便の回復ではない。`
  },
  {
    type: "summary",
    text: `それは、
次なる地へ向かうための道であり、

同時に、
この街で止まっていた流れを
再び前へ進める一歩でもあった。`
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "じゃあ……ようやく海の先も見られるんだね"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "ああ"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "行こう。ルーメニアの港へ"
  },
  {
    type: "summary",
    text: `潮の匂いを含んだ風が、
裏路地の奥から静かに吹き込んでくる。

閉ざされていた海への道は、
今――再び開かれた。`
  },
  {
    type: "summary",
    text: "港が解放された！"
  }
];

const PEACE_LUMENIA_STORY = [
  {
    type: "summary",
    text: "海上都市ルーメリアの港には、穏やかな波音と人々の喧騒が戻っていた。"
  },
  {
    type: "summary",
    text: "以前のような張り詰めた空気は薄れ、街全体がようやく呼吸を取り戻したように見える。"
  },
  {
    type: "dialogue",
    name: "港の男",
    side: "left",
    text: "最近は海まで穏やかに見えるよ。気のせいじゃないといいがな"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……気のせいじゃない。少しずつでも、世界は変わる"
  }
];


//環礁
const KANSHO_UNLOCK_STORY = [
  {
    type: "summary",
    text: `📖 第八章「蛇神の環礁」`
  },
  {
    type: "summary",
    text: `ルーメニアの港を拠点に、
クレスたちは次なる航路を探っていた。`
  },
  {
    type: "summary",
    text: `だが――

最近、この海域では
奇妙な噂が広がり始めていた。`
  },

  // ===== 失踪事件 =====

  {
    type: "dialogue",
    name: "情報商人",
    side: "left",
    text: "最近、近海で船が消えている"
  },
  {
    type: "dialogue",
    name: "情報商人",
    side: "left",
    text: "嵐でもない、海賊でもない……ただ、跡形もなくな"
  },
  {
    type: "summary",
    text: `沈没した形跡すら残らない。

積荷も、乗組員も――
まるで最初から存在しなかったかのように。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    text: "……原因は分かっていないのか"
  },
  {
    type: "dialogue",
    name: "情報商人",
    side: "left",
    text: "唯一共通してるのは、最後に目撃された場所だ"
  },

  // ===== 環礁の導入 =====

  {
    type: "dialogue",
    name: "情報商人",
    side: "left",
    text: "……あの蛇みたいな岩礁だ"
  },
  {
    type: "summary",
    text: `地図の上に指が落とされる。

そこには、
螺旋を描くように連なる奇妙な岩礁地帯が記されていた。`
  },
  {
    type: "summary",
    text: `まるで巨大な蛇が、
海の上でとぐろを巻いているかのような形。`
  },

  // ===== 学術的説明 =====

  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    text: "あれは自然の地形ではありません"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    text: "王国成立以前に存在した海洋文明――その遺構とされています"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    text: "正確な用途は不明ですが……航路制御、あるいは儀式施設だったという説もある"
  },
  {
    type: "summary",
    text: `失われた文明。

今の王国ですら把握しきれていない、
古い時代の遺産――`
  },

  // ===== メルディの違和感 =====

  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    text: "……違う"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    text: "あれ、ただの遺跡じゃない"
  },
  {
    type: "summary",
    text: `メルディは目を細める。`
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    text: "魔力が流れてる……それも、ずっと途切れてない"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    text: "まるで――まだ“動いてる”みたい"
  },
  {
    type: "summary",
    text: `その言葉に、場の空気がわずかに変わる。`
  },

  // ===== 不穏さ強化 =====

  {
    type: "summary",
    text: `船が消える海域。

古代の遺構。

そして――
今も機能しているかのような魔力。`
  },
  {
    type: "summary",
    text: `それらが示すものは、
単なる事故ではない。`
  },

  // ===== 決意 =====

  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    text: "……放っておけば、被害は増え続ける"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    text: "そして、あの先に進むためにも――避けては通れない場所だ"
  },
  {
    type: "summary",
    text: `クレスの視線は、迷いなく地図へ向けられていた。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    text: "なら行くしかない"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    text: "この先へ進むために"
  },

  // ===== 締め =====

  {
    type: "summary",
    text: `静かな海の奥に潜む、未知の脅威。

それは遺跡か――
あるいは、まだ目覚めていない何かか。`
  },
  {
    type: "summary",
    text: "新たな行き先「蛇神の環礁」が解放された"
  }
];

const KANSHO_INTRO = [
  {
    type: "summary",
    text: `📖 第八章「蛇神の環礁」

舞台：蛇神の環礁`
  },
  {
    type: "summary",
    text: `ルーメニアの沖合に浮かぶ、巨大な蛇の骸のような環礁。

船乗りたちはその場所を恐れ、
近づこうとはしない。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "あれはただの岩礁ではありません。古代海洋民の遺跡です"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "……魔力が流れてる。まだ生きてるみたい"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "なら行くしかない。この先へ進むために"
  }
];

const KANSHO_MAIN_STORY = [
  {
    type: "summary",
    text: `船が環礁へと近づいた、その時――

それまで響いていた波音が、
不意に途絶えた。`
  },
  {
    type: "summary",
    text: `風は吹いている。

水面も揺れている。

だが、“音だけ”が存在しない。`
  },
  {
    type: "summary",
    text: `まるでこの場所だけ、
世界から切り離されたかのような
異様な静寂が広がっていた。`
  },

  // ===== 違和感 =====

  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    text: "……ここ、普通じゃない"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    text: "海なのに……“流れてない”感じがする"
  },
  {
    type: "summary",
    text: `メルディは水面を見つめる。

その瞳には、はっきりとした警戒が浮かんでいた。`
  },

  // ===== 観察 =====

  {
    type: "summary",
    text: `周囲を取り囲む岩礁は、
近くで見ると異様な形をしていた。`
  },
  {
    type: "summary",
    text: `滑らかすぎる曲面。

不自然に揃った裂け目。

まるで削られたのではなく――
“成形された”かのような構造。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    text: "……この石、自然のものではありません"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    text: "人工物です。しかも……かなり高度な技術で加工されている"
  },
  {
    type: "summary",
    text: `指先で触れた石肌は、
冷たいはずなのに――どこか“ぬめり”を帯びていた。`
  },

  // ===== 不穏さ強化 =====

  {
    type: "summary",
    text: `遺跡のはずだ。

だが、この場所には――
“死んだもの”とは思えない気配が残っている。`
  },
  {
    type: "summary",
    text: `それは構造物ではなく、

まるで巨大な何かの“体内”に
足を踏み入れているかのような感覚だった。`
  },

  // ===== 入口出現 =====

  {
    type: "summary",
    text: `その時――`
  },
  {
    type: "summary",
    text: `環礁の一部が、
ゆっくりと軋みを上げる。`
  },
  {
    type: "summary",
    text: `岩が開いたのではない。

“口が開いた”。`
  },
  {
    type: "summary",
    text: `内側へと続く暗闇は、
まるで何かを待ち受けるかのように
静かに口を開けている。`
  },

  // ===== 反応 =====

  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    text: "……呼ばれてる"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    text: "あの中から……ずっと"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    text: "……自動機構か、それとも……"
  },
  {
    type: "summary",
    text: `セリオスは言葉を切る。`
  },

  // ===== 決意 =====

  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    text: "……進むしかないな"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    text: "ここまで来て、引き返す理由はない"
  },
  {
    type: "summary",
    text: `その言葉に、
わずかな緊張が空気に走る。`
  },

  // ===== 締め =====

  {
    type: "summary",
    text: `蛇の口のように開いた入口は、

静かに――だが確実に、
侵入者を待ち受けていた。`
  }
];


//火山
const VOLCANO_INTRO_EVENT = [
  {
    type: "summary",
    text: `轟音と共に、赤黒い炎が空へ噴き上がる。

ヴォルカノ火山――そこは既に戦場と化していた。`
  },
  {
    type: "summary",
    text: `レオニス王国とエストリア王国の兵が、
溶岩の間で激しく衝突している。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "……始まっていますね"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "すごい魔力……あれ、全部コアのせい？"
  },
  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.dia.png",
    text: "ああ。あれを巡って殺し合ってる"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……"
  },
  {
    type: "summary",
    text: `クレスは戦場を見つめる。

かつて自分が守るはずだった民と、
それを奪った国の兵たち。`
  }
];

const VOLCANO_SAVE_SOLDIER = [
  {
    type: "summary",
    text: `クレスは剣を抜き、
レオニス兵を斬り伏せた。`
  },
  {
    type: "dialogue",
    name: "エストリア兵",
    side: "left",
    face: "./assets/img/estoria_soldier.png",
    text: "……！？"
  },
  {
    type: "dialogue",
    name: "エストリア兵",
    side: "left",
    face: "./assets/img/estoria_soldier.png",
    text: "助かった……のか……？"
  },
  {
    type: "dialogue",
    name: "エストリア兵",
    side: "left",
    face: "./assets/img/estoria_soldier.png",
    text: "……待て"
  },
  {
    type: "dialogue",
    name: "エストリア兵",
    side: "left",
    face: "./assets/img/estoria_soldier.png",
    text: "その顔……"
  },
  {
    type: "dialogue",
    name: "エストリア兵",
    side: "left",
    face: "./assets/img/estoria_soldier.png",
    text: "クレス……！？"
  },
  {
    type: "dialogue",
    name: "エストリア兵",
    side: "left",
    face: "./assets/img/estoria_soldier.png",
    text: "裏切り者が……！！"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "え……？"
  },
  {
    type: "dialogue",
    name: "エストリア兵",
    side: "left",
    face: "./assets/img/estoria_soldier.png",
    text: "国を捨てて逃げた王子が……何のつもりだ！！"
  },
  {
    type: "dialogue",
    name: "エストリア兵",
    side: "left",
    face: "./assets/img/estoria_soldier.png",
    text: "俺たちは……お前のせいで戦ってるんだぞ！！"
  },
  {
    type: "summary",
    text: `その言葉は、刃のようにクレスの胸に突き刺さった。`
  }
];

const VOLCANO_MID_EVENT = [
  {
    type: "summary",
    text: `炎と煙に包まれた戦場。

剣戟と叫びが絶え間なく響き、
命が消える音が、すぐ隣で繰り返されている。`
  },

  {
    type: "summary",
    text: `クレスたちはその中を進みながら、
否応なく“現実”を目の当たりにしていた。`
  },

  // ===== セリオス =====

  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "……どちらの国も、同じです"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu2.dia.png",
    text: "掲げる理想も、守ろうとしているものも"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu2.dia.png",
    text: "本質的には、変わりません"
  },

  {
    type: "summary",
    text: `セリオスの声は冷静だった。

だがその奥には、
わずかな苦味が滲んでいる。`
  },

  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu2.dia.png",
    text: "違うのは……手段だけです"
  },

  // ===== メルディ =====

  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "……でも、それって変だよ"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "どっちに渡っても……人が苦しむなら"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "それ、守ってるって言えるのかな……"
  },

  {
    type: "summary",
    text: `純粋な疑問。

だがそれは、
誰もが目を逸らしてきた核心でもあった。`
  },

  // ===== ジーク =====

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.dia.png",
    text: "……それが“国”だ"
  },

  {
    type: "summary",
    text: `即答だった。`
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.dia.png",
    text: "守るために奪い――"
  },
  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.dia.png",
    text: "奪うために殺す"
  },

  {
    type: "summary",
    text: `一切の迷いも、装飾もない言葉。`
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.dia.png",
    text: "どちらも変わらない"
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.dia.png",
    text: "違うように見えるだけだ"
  },

  {
    type: "summary",
    text: `それは諦めではない。

積み重ねてきた現実から導き出された、
一つの“結論”だった。`
  },

  // ===== クレス =====

  {
    type: "summary",
    text: `その言葉を、

クレスは黙って受け止める。`
  },

  {
    type: "summary",
    text: `否定できない。

だが、受け入れることもできない。`
  },

  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……それでも"
  },

  {
    type: "summary",
    text: `言葉は続かない。`
  },

  {
    type: "summary",
    text: `まだ、自分の中で答えが形になっていない。`
  },

  {
    type: "summary",
    text: `だが――`
  },

  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……このままでいいとは思えない"
  },

  // ===== 余韻 =====

  {
    type: "summary",
    text: `炎が揺れる。`
  },

  {
    type: "summary",
    text: `戦場は変わらない。

だが――

その中で、確かに何かが揺らぎ始めていた。`
  }
];

const VOLCANO_BATTLE_LINES = [
  {
    type: "summary",
    text: `溶岩の熱気の中、

兵たちの叫びがぶつかり合う。`
  },

  // ===== レオニス側 =====

  {
    type: "dialogue",
    name: "レオニス兵",
    side: "left",
    face: "./assets/img/leonis_soldier.png",
    text: "この力があれば戦争は終わる！！"
  },
  {
    type: "dialogue",
    name: "レオニス兵",
    side: "left",
    face: "./assets/img/leonis_soldier.png",
    text: "これ以上、無駄に血を流さなくて済むんだ！！"
  },
  {
    type: "dialogue",
    name: "レオニス兵",
    side: "left",
    face: "./assets/img/leonis_soldier.png",
    text: "だから……抵抗するな！！"
  },
  {
    type: "dialogue",
    name: "レオニス兵",
    side: "left",
    face: "./assets/img/leonis_soldier.png",
    text: "それが貴様らのためでもあるんだ！！"
  },

  {
    type: "summary",
    text: `その声には、焦りが滲んでいた。`
  },

  // ===== エストリア側 =====

  {
    type: "dialogue",
    name: "エストリア兵",
    side: "left",
    face: "./assets/img/estoria_soldier.png",
    text: "ふざけるな！！"
  },
  {
    type: "dialogue",
    name: "エストリア兵",
    side: "left",
    face: "./assets/img/estoria_soldier.png",
    text: "それで救われるのは、お前たちの国だけだろうが！！"
  },
  {
    type: "dialogue",
    name: "エストリア兵",
    side: "left",
    face: "./assets/img/estoria_soldier.png",
    text: "これがなければ……俺たちは滅びるんだ！！"
  },
  {
    type: "dialogue",
    name: "エストリア兵",
    side: "left",
    face: "./assets/img/estoria_soldier.png",
    text: "家族も、故郷も……全部奪われる！！"
  },

  {
    type: "summary",
    text: `それは、ただの戦意ではない。

“守るもの”を失う恐怖だった。`
  },

  // ===== 衝突 =====

  {
    type: "dialogue",
    name: "レオニス兵",
    side: "left",
    face: "./assets/img/leonis_soldier.png",
    text: "だから終わらせるって言ってるんだ！！"
  },
  {
    type: "dialogue",
    name: "レオニス兵",
    side: "left",
    face: "./assets/img/leonis_soldier.png",
    text: "力で押さえ込めば、争いは消える！！"
  },

  {
    type: "dialogue",
    name: "エストリア兵",
    side: "left",
    face: "./assets/img/estoria_soldier.png",
    text: "それは“終わり”じゃない……支配だ！！"
  },
  {
    type: "dialogue",
    name: "エストリア兵",
    side: "left",
    face: "./assets/img/estoria_soldier.png",
    text: "そんなものに従うくらいなら――"
  },
  {
    type: "dialogue",
    name: "エストリア兵",
    side: "left",
    face: "./assets/img/estoria_soldier.png",
    text: "死んだ方がマシだ！！"
  },

  // ===== 余韻 =====

  {
    type: "summary",
    text: `どちらも、間違っていない。`
  },
  {
    type: "summary",
    text: `どちらも、正しいと信じている。`
  },
  {
    type: "summary",
    text: `だからこそ――

戦いは終わらない。`
  }
];

const VOLCANO_CORE_EVENT = [
  {
    type: "summary",
    text: `火山の最奥――

そこには、現実とは思えない光景が広がっていた。`
  },
  {
    type: "summary",
    text: `脈動する巨大な光。

それはただ存在しているだけで、
空間そのものを歪ませている。`
  },
  {
    type: "summary",
    text: `地面は波打ち、
空気は震え、

まるで“世界の奥”が
露出してしまったかのようだった。`
  },

  // ===== メルディ =====

  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "……これが、コア"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "こんなの……見たことない……"
  },

  {
    type: "summary",
    text: `彼女の声には、
明確な“恐れ”が混じっていた。`
  },

  // ===== セリオス =====

  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "莫大な魔力……"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu2.dia.png",
    text: "いえ……これは、魔力という枠に収まるものではありません"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu2.dia.png",
    text: "制御など不可能です。人が扱っていいものではない"
  },

  // ===== ジーク =====

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.dia.png",
    text: "だが奴らは使う"
  },
  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.dia.png",
    text: "どんな代償を払ってでもな"
  },
  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.dia.png",
    text: "国を生かすために"
  },

  {
    type: "summary",
    text: `それは肯定ではない。

だが、否定でもなかった。`
  },

  // ===== メルディ違和感 =====

  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "……でも……これ……おかしい"
  },
  {
    type: "summary",
    text: `メルディはゆっくりと、
その光に手をかざす。`
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "流れ方が……違う"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "これ……ただの魔力じゃない"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "人の中に流れてるものと……似てる……"
  },

  // ===== セリオス気づき =====

  {
    type: "summary",
    text: `その言葉に、

セリオスの表情が凍りつく。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu2.dia.png",
    text: "……まさか"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu2.dia.png",
    text: "これは……"
  },

  // ===== クレス拒絶 =====

  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……やめろ"
  },
  {
    type: "summary",
    text: `低く、鋭い声。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "それ以上言うな"
  },

  {
    type: "summary",
    text: `“気づいてはいけない”何か。`
  },

  {
    type: "summary",
    text: `もしそれを言葉にしてしまえば――

もう、元には戻れない。`
  }
];

const VOLCANO_BOSS_EVENT = [
  {
    type: "summary",
    text: `コアの前――

熱と光が歪む空間に、
ひとりの男が立っていた。`
  },

  {
    type: "dialogue",
    name: "？？？",
    side: "left",
    text: "……やはり来たか"
  },

  {
    type: "summary",
    text: `その視線は、真っ直ぐにジークへ向けられている。`
  },

  // ===== ジーク =====

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.dia.png",
    text: "……"
  },

  {
    type: "dialogue",
    name: "幹部",
    side: "left",
    face: "./assets/img/leonis_commander.png",
    text: "ジーク"
  },
  {
    type: "dialogue",
    name: "幹部",
    side: "left",
    face: "./assets/img/leonis_commander.png",
    text: "任務放棄とはな"
  },

  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.dia.png",
    text: "……違う"
  },
  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.dia.png",
    text: "目が覚めただけだ"
  },

  {
    type: "summary",
    text: `わずかな沈黙。`
  },

  {
    type: "dialogue",
    name: "幹部",
    side: "left",
    face: "./assets/img/leonis_commander.png",
    text: "そうか"
  },
  {
    type: "dialogue",
    name: "幹部",
    side: "left",
    face: "./assets/img/leonis_commander.png",
    text: "なら――処分する"
  },

  // ===== クレス介入 =====

  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "待て"
  },

  {
    type: "summary",
    text: `クレスは一歩前に出る。`
  },

  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "その前に聞かせろ"
  },

  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "あのコア……お前たちは何を使っている"
  },

  // ===== 幹部の反応 =====

  {
    type: "summary",
    text: `幹部はわずかに目を細める。`
  },

  {
    type: "dialogue",
    name: "幹部",
    side: "left",
    face: "./assets/img/leonis_commander.png",
    text: "……気づいたか"
  },

  {
    type: "dialogue",
    name: "幹部",
    side: "left",
    face: "./assets/img/leonis_commander.png",
    text: "あれは“ただの魔力”ではない"
  },

  // ===== コア解説 =====

  {
    type: "summary",
    text: `男は振り返り、脈動するコアを見上げる。`
  },

  {
    type: "dialogue",
    name: "幹部",
    side: "left",
    face: "./assets/img/leonis_commander.png",
    text: "人は死ぬ時、強い魔力を残す"
  },
  {
    type: "dialogue",
    name: "幹部",
    side: "left",
    face: "./assets/img/leonis_commander.png",
    text: "恐怖、怒り、執念……"
  },
  {
    type: "dialogue",
    name: "幹部",
    side: "left",
    face: "./assets/img/leonis_commander.png",
    text: "それらは消えずに、世界に沈む"
  },

  {
    type: "summary",
    text: `コアが脈打つ。`
  },

  {
    type: "dialogue",
    name: "幹部",
    side: "left",
    face: "./assets/img/leonis_commander.png",
    text: "あれは、それを“集めたもの”だ"
  },

  // ===== メルディ =====

  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "……そんな……"
  },

  // ===== セリオス =====

  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu2.dia.png",
    text: "……人の……残滓を……"
  },

  // ===== 幹部思想 =====

  {
    type: "dialogue",
    name: "幹部",
    side: "left",
    face: "./assets/img/leonis_commander.png",
    text: "犠牲ではない"
  },
  {
    type: "dialogue",
    name: "幹部",
    side: "left",
    face: "./assets/img/leonis_commander.png",
    text: "無駄に散る命を、“力”に変えているだけだ"
  },

  {
    type: "dialogue",
    name: "幹部",
    side: "left",
    face: "./assets/img/leonis_commander.png",
    text: "その力で戦争を終わらせる"
  },

  // ===== クレス =====

  {
    type: "summary",
    text: `クレスの拳が、静かに震える。`
  },

  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "それが……正しいと、本気で思っているのか"
  },

  // ===== 幹部決定打 =====

  {
    type: "dialogue",
    name: "幹部",
    side: "left",
    face: "./assets/img/leonis_commander.png",
    text: "ああ"
  },

  {
    type: "dialogue",
    name: "幹部",
    side: "left",
    face: "./assets/img/leonis_commander.png",
    text: "救える命の方が多いなら、それが正義だ"
  },

  {
    type: "summary",
    text: `迷いのない答え。`
  },

  // ===== 戦闘前 =====

  {
    type: "dialogue",
    name: "幹部",
    side: "left",
    face: "./assets/img/leonis_commander.png",
    text: "……だが理解は不要だ"
  },
  {
    type: "dialogue",
    name: "幹部",
    side: "left",
    face: "./assets/img/leonis_commander.png",
    text: "ここで止める"
  },

  {
    type: "summary",
    text: `コアが強く脈打つ――`
  }
];

const VOLCANO_END_EVENT = [
  {
    type: "summary",
    text: `幹部を打ち倒した、その直後――

火口の奥で脈動していたコアが、
不気味な唸りを上げた。`
  },
  {
    type: "summary",
    text: `ひときわ強い光が迸り、
空気そのものが震える。

次の瞬間――
地の底から何かが目覚めたような轟音が響き渡った。`
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "……まずい！ コアが暴走してる！"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu2.dia.png",
    text: "さきほどの戦闘で均衡が崩れたのか……！"
  },
  {
    type: "summary",
    text: `コアの光は脈打つたびに激しさを増し、
周囲の岩盤を赤黒く侵食していく。`
  },
  {
    type: "summary",
    text: `それは単なる爆発ではなかった。

この土地そのものの“性質”を書き換えている――
そんな禍々しい変質だった。`
  },
  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.dia.png",
    text: "……火山そのものが、コアに喰われている"
  },
  {
    type: "summary",
    text: `噴き上がる溶岩は、
もはや自然の炎ではない。

コアに呼応した魔力が混ざり、
周囲にいた魔物たちの姿をさらに異形へと変えていく。`
  },
  {
    type: "summary",
    text: `咆哮が響く。

魔物たちは苦しむように身をよじらせながら、
より凶悪で、より禍々しい存在へと変貌していった。`
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "魔物まで……強化されてる……！？"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu2.dia.png",
    text: "コアの暴走が周囲の生命と環境、両方に影響しているのです……！"
  },
  {
    type: "summary",
    text: `そしてついに、
火山は限界を迎えた。`
  },
  {
    type: "summary",
    text: `轟音とともに大地が裂け、
火口から膨大な溶岩流が雪崩のように溢れ出す。`
  },
  {
    type: "summary",
    text: `悲鳴が上がった。`
  },
  {
    type: "dialogue",
    name: "エストリア兵",
    side: "left",
    face: "./assets/img/estoria_soldier.png",
    text: "な、なんだこれは……！？ 退け、退けええっ！！"
  },
  {
    type: "dialogue",
    name: "レオニス兵",
    side: "left",
    face: "./assets/img/leonis_soldier.png",
    text: "コアを守れ！ ……ぐああああっ！！"
  },
  {
    type: "summary",
    text: `エストリア兵も、レオニス兵も関係なく、
逃げ遅れた者たちが次々と溶岩に飲まれていく。`
  },
  {
    type: "summary",
    text: `さっきまで互いを敵と呼んでいた兵たちは、
今や等しく、暴走した力の前に蹂躙されていた。`
  },
  {
    type: "summary",
    text: `国の名も、
大義も、
憎しみも――

灼熱の奔流の前では、
あまりにも脆かった。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……どちらも間違っている"
  },
  {
    type: "summary",
    text: `燃え盛る戦場を見つめながら、
クレスは低く言い放つ。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "この力で国を救う未来も"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "奪われる側がただ耐える未来も……認めない"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "命を喰って成り立つ力に、未来なんてあるはずがない"
  },
  {
    type: "summary",
    text: `その瞳には、
もはや迷いはなかった。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……なら"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "どちらにも渡さない"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "この暴走も、この戦いも――"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "俺が止める"
  },
  {
    type: "summary",
    text: `クレスは灼熱の奔流の中へ踏み出そうとする。

だが、その腕を後ろから掴む者がいた。`
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "駄目……！ それじゃ止まらない！"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "でも、このまま見ているわけにはいかない！"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu2.dia.png",
    text: "殿下、あのコアはすでに通常の手段で破壊できる段階を超えています……！"
  },
  {
    type: "summary",
    text: `なおもコアは脈動を続け、
溢れ出す魔力は火山全体を呑み込もうとしていた。`
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "止める方法は……ひとつだけある"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "何だ……！？"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "私が、このコアの魔力を吸収して制御するの"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "なっ……そんなことをしたら、お前の身体が――"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "わかってる……でも、今ここで止めなきゃ、全部なくなる"
  },
  {
    type: "dialogue",
    name: "ジーク",
    side: "left",
    face: "./assets/img/zeek.dia.png",
    text: "……正気か"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "正気じゃなきゃ、こんな選択しないよ"
  },
  {
    type: "summary",
    text: `メルディは一歩、また一歩と、
暴走するコアの正面へ歩み出た。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "メルディ、やめろ！"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "クレス……あなたは未来を諦めないって言った"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "だったら私は、その未来が壊れるのを止める"
  },
  {
    type: "summary",
    text: `そしてメルディは、
紅く脈打つコアへと手をかざした。`
  },
  {
    type: "summary",
    text: `次の瞬間――

暴走していた魔力が奔流となって溢れ出し、
すべてがメルディの身体へと吸い込まれていく。`
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "っ……あああああああっ！！"
  },
  {
    type: "summary",
    text: `灼熱の光が視界を埋め尽くす。

火山を揺るがしていた轟音はなお止まらない。
だが、暴れ狂っていたコアの脈動だけが、
少しずつ、確かに弱まっていった。`
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu2.dia.png",
    text: "……制御しているのか……！？"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "メルディ！！ もうやめろ！！"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "まだ……全部……抑えきれてない……！"
  },
  {
    type: "summary",
    text: `メルディの足元に魔法陣が広がる。

それに呼応するように、
火山を侵していた赤黒い脈動はゆっくりと収束し、
溶岩の奔流も次第に勢いを失っていった。`
  },
  {
    type: "summary",
    text: `やがて――

コアは沈黙した。`
  },
  {
    type: "summary",
    text: `火山を引き裂いていた轟音も止み、
崩れかけていた大地は、
かろうじて静けさを取り戻す。`
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "メルディ！ しっかりしろ！"
  },
  {
    type: "summary",
    text: `コアの前で膝をつくメルディの身体には、
なお赤い光が残滓のように揺れていた。`
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "……大丈夫。今は、まだ抑えられる……"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "“今は”……？"
  },
  {
    type: "dialogue",
    name: "メルディ",
    side: "left",
    face: "./assets/img/merudi.dia.png",
    text: "この力……消えたんじゃない。私の中に残ってるの……"
  },
  {
    type: "summary",
    text: `火山の崩壊は免れた。

だがその代償として、
メルディは危うい力をその身に宿すことになった。`
  },
  {
    type: "summary",
    text: `その赤い残光は、
これから先の旅に新たな影を落とすことを、
誰よりも雄弁に物語っていた――`
  }
];



//エストリア王城
const ESTRIA_CORRIDOR_EVENT = [
  {
    type: "summary",
    text: "裏廊下――王宮の喧騒から外れた、薄暗い石造りの通路。"
  },
  {
    type: "summary",
    text: "人気は少ない。だがその静けさが、かえって不気味だった。"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "この先を抜ければ、大階段へ近づけるはずです"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "ああ……一気に進むぞ"
  },
  {
    type: "summary",
    text: "二人が足早に進もうとした、その時――"
  },
  {
    type: "dialogue",
    name: "エストリア兵",
    side: "left",
    text: "……止まれ！ そこで何をしている！"
  },
  {
    type: "summary",
    text: "曲がり角の向こうから、巡回中のエストリア兵が姿を現す。"
  },
  {
    type: "dialogue",
    name: "エストリア兵",
    side: "left",
    text: "その顔……まさか、クレス……！？"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……見逃しては、くれないか"
  },
  {
    type: "dialogue",
    name: "エストリア兵",
    side: "left",
    text: "できるわけがない！ 貴様は王殺しとして手配されている！"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "殿下、ここは避けられません……！"
  },
  {
    type: "summary",
    text: "巡回兵はすでに剣を抜いていた。"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……なら、突破するしかない！"
  }
];

const ESTRIA_CORRIDOR_AFTER_BATTLE = [
  {
    type: "summary",
    text: "巡回兵を退け、裏廊下に再び静寂が戻る。"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "これでしばらくは追手も来ないでしょう"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……だが、もう後戻りはできないな"
  },
  {
    type: "summary",
    text: "兵の足止めを突破したことで、王宮中枢へ続く道が開けた。"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "大階段へ向かいましょう。ヴァルドレインは、この先にいます"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "ああ……決着をつける"
  }
];

const ESTRIA_STAIRS_EVENT = [
  {
    type: "summary",
    text: "大階段――王宮の中枢へと続く、重厚な石の階段。"
  },
  {
    type: "summary",
    text: "その先には、玉座の間がある。"
  },
  {
    type: "summary",
    text: "すべてを奪った男――ヴァルドレインが待つ場所だ。"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "……ここから先は、もう後戻りできません"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……わかっている"
  },
  {
    type: "summary",
    text: "クレスは大階段の先を見据え、静かに剣を握り直した。"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "ここで終わらせる。父上の無念も、この国の歪みも――全部だ"
  },
  {
    type: "dialogue",
    name: "セリオス",
    side: "left",
    face: "./assets/img/seriosu.dia.png",
    text: "はい、殿下。私も最後までお供します"
  },
  {
    type: "summary",
    text: "二人は覚悟を胸に、大階段を登り始めた。"
  }
];






//その他ストーリー
const STORY_EVENTS = {
  1: [
    {
      type:"battle",
    },
    {
      type: "summary",
      text: `激戦の末、
追手を退けることには成功した。

だが、このまま村に留まれば
いずれさらに多くの兵が
押し寄せてくるだろう。`
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      face: "./assets/img/kuresu.dia.png",
      text: "……もう、ここには居られない"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      face: "./assets/img/kuresu.dia.png",
      text: "これ以上、俺のせいで誰かが傷つくのは耐えられない"
    },
    {
      type: "dialogue",
      name: "セリオス",
      side: "left",
      face: "./assets/img/seriosu.dia.png",
      text: "ならば参りましょう、殿下。次に向かうべきはアルディア平原です"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      face: "./assets/img/kuresu.dia.png",
      text: "ああ……行こう"
    },
    {
      type: "summary",
      text: `こうしてクレスたちは
カルム村を後にする。

王城を追われた王子の旅は
新たな仲間と運命に出会うため、
次の地へと続いていく──`
    }
  ]
};



























































































//! <3.状態（進行データ）>
//TODO ---状態管理
const unitStates = {}; 
const INV = new Map(); 
const logQueue = [];
let isLogPlaying = false;
let logTimer = null;
let instantLogMode = false;


//TODO ---状態:現在操作中ユニット
let currentUnitId = "cress"; 
let currentState = null;


//TODO ---状態:編成
let party = { ...DEFAULT_PARTY };
let selectingSlot = "front"; // "front" or "back"


//TODO ---状態:戦闘
let gold         = 500;

let currentEnemies = [];   // 敵配列
let enemyHP = 0;           // 先頭生存敵のHPを互換用に保持

let playerHP     = 100;
let playerMaxHP  = 100;
let playerMaxMP  = 30;
let playerMP     = playerMaxMP;
let isGuarding   = false;


//TODO ---状態:成長
let playerLevel  = 1;
let playerExp    = 0;
let playerNextExp= 100;


//TODO ---状態:ショップ
let SHOP_MODE = "buy";


//TODO ---状態:進行
// let stage = 1;
// ストーリー進行
// let storyProgress = 1;
let currentMap = "village";
// let mapStage = 1; // そのマップ内で何戦目か
let currentEnemy = null;
let introPageIndex = 0;
let introPlaying = false;
let storyBattleMode = true;
let battleReturnTo = null;
let storyScenePages = [];
let storySceneIndex = 0;
let storyScenePlaying = false;
let storySceneOnComplete = null;
let level5StoryPlayed = false;
let level8StoryPlayed = false;
let level15StoryPlayed = false;
let defeatedPursuerBattle = false;
let level25StoryPlayed = false;
let arenaPoints = Number(localStorage.getItem("arenaPoints") || "0");
let currentArenaRank = null;




const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;





//TODO ---状態:現在操作中ユニット
let statusViewSlot = "front"; // "front" or "back"

//!ストーリーモード
let merudiMet = false;                  // 道具屋で会ったか
let merudiJoined = false;               // 仲間加入済みか
let merudiShopEventDone = false;        // 道具屋イベントを見たか
let merudiMansionUnlocked = false;      // 屋敷ボタンを解放したか
let merudiMansionEventDone = false;     // 屋敷イベントを見たか
let merudiJoinEventDone = false;        // 街を出る時の加入イベントを見たか
let storySceneResult = null;
let EQUIP_DURABILITY = { weapon: 0, armor: 0, shield: 0 };
let CURRENT_SHOP_ITEMS = SHOP_ITEMS;
let volcanoSecretShopUnlocked = false;
let desertUnlockedStoryPlayed = false;
let villageChiefEventDone = false;
let villagePeopleEventDone = false;
let villageTreasureOpened = false;
let villageTreasureHintShown = false;
let isMapEventMode = false;
let keepBattleUIHiddenAfterStory = false;
let gladioTowerFloor = 0;          // 現在の塔攻略段階 0〜3
let gladioTowerCleared = false;    // 3階攻略済み
let gladioBossEventDone = false;   // 玉座イベントを見たか
let gladioRouteFound = false;      // 航路図入手済み
let villageRebellionTalkDone = false;
let villageOldmanTalkDone = false;
let grassTaken = false;
let plainHerbTaken = false;
let casinoProfitTotal = Number(localStorage.getItem("casinoProfitTotal") || "0");
let desertHouseTalkDone = false;
let redDragonFangTaken = false;
let oasisDrainFound = false;
let oasisDrainOpened = false;
let gladioHallChecked = false;
let gladioPrisonEventDone = false;
let gladioBeautyReleased = false;
let gladioBeautyMonsterDefeated = false;

let gladioLibrarySolved = false;
let gladioUndergroundOpened = false;
let gladioBookOrderProgress = [];
let gladioUndergroundFloor = 0;          // 地下の現在階層
let gladioUndergroundEntered = false;    // 地下に入ったことがあるか
let gladioUndergroundTrueOpened = false; // 真20階条件を満たしたか
let gladioUndergroundLoopSeen = false;   // 19階ループ演出を見たか
let lumeniaPortLocked = true;
let lumeniaPirateWins = 0;
let lumeniaPortUnlockedStoryDone = false;
let lumeniaGuildTalkDone = false;
let lumeniaHouseTalkDone = false;
let lumeniaPortBlockedStoryDone = false;
let lumeniaLighthouseEventDone = false;
let lumeniaMarketEventDone = false;
let zeekFirstBattleDone = false;
let zeekRetreatedToLumenia = false;
let zeekRematchDone = false;
let zeekJoined = false;
let volcanoIntroPlayed = false;
let volcanoSoldierSaved = false;
let volcanoMidEventPlayed = false;
let volcanoCoreReached = false;
let volcanoBossDefeated = false;
let volcanoEndEventPlayed = false;
let zeekBattleTurn = 0;
let currentDragonGem = null;
let frostDragonLairOpened = false;
let estriaUndergroundVisited = false;
let estriaPrisonVisited = false;
let estriaCorridorVisited = false;
let estriaCorridorCleared = false;
let pendingEstriaCorridorBattle = false;
let pendingValdoreinBattle = false;
let pendingBelialBattle = false;
let kalmVillageLocked = false;
let zeekDefeatedInGladio = false;
let earlyAreaLevelCapStoryPlayed = false;
let midAreaLevelCapStoryPlayed = false;
let merudiEventCleared = false;
let oasisIntroSeen = false;
let forceLumeniaOnly = false;
let forceGladioOnly = false;
let volcanoRescueOpened = false;
let volcanoMidOpened = false;
let volcanoCoreOpened = false;
let heroCressAwakened = false;
let marciaHeroStoryDone = false;
let marciaRebelLeaderMet = false;
let lumeniaWhistleReady = false;
let lumeniaWhistleUsed = false;
let colorDragonMet = false;
let volcanoSummitOpened = false;
let ignarionDefeated = false;
let ignarionIntroPlayed = false;
let azureSanctuaryOpened = false;
let azraelDefeated = false;
let azraelIntroPlayed = false;
let valdoreinDefeated = false;
let graniusDefeated = false;
let graniusIntroPlayed = false;
let leviataDefeated = false;
let leviataIntroPlayed = false;
let peaceVillageStoryDone = false;
let peacePlainStoryDone = false;
let peaceMarciaStoryDone = false;
let peaceGladioStoryDone = false;
let peaceLumeniaStoryDone = false;
let zeekReunionEventDone = false;

let gladioReturnFromLumeniaEventDone = false;
let openingBattleStarted = false;









//! <4.ユニット管理>
function applyUnitToCurrent(unitId) {
  const unit = UNITS[unitId];
  if (!unit) return;

  saveGlobalsToState();

  const state = getUnitState(unitId);
  loadStateToGlobals(state);

  updatePlayerHP();
  refreshStatusIfOpen();

  if (skillBox && skillBox.classList.contains("is-open")) {
    updateSkillUI();
  }
}

function loadStateToGlobals(state) {
  currentState = state;
  currentUnitId = state.unitId;
  currentDragonGem = state.dragonGem || null;

  playerLevel   = state.level;
  playerExp     = state.exp;
  playerNextExp = state.nextExp;

  playerMaxHP = state.maxHP;
  playerHP    = state.hp;

  playerMaxMP = state.maxMP;
  playerMP    = state.mp;

  Object.assign(stats, {
    HP: 0, STR: 0, MAG: 0, AGL: 0, GRD: 0, LUCK: 0
  }, state.stats);

  Object.assign(GROWTH, {
    HP: 0, STR: 0, MAG: 0, AGL: 0, GRD: 0, LUCK: 0
  }, state.growth);

  Object.assign(EQUIP, {
    weapon: null, armor: null, shield: null
  }, state.equip);

  Object.assign(EQUIP_DURABILITY, {
    weapon: 0, armor: 0, shield: 0
  }, state.equipDurability || {});
}

function saveGlobalsToState() {
  if (!currentState) return;

  currentState.level   = playerLevel;
  currentState.exp     = playerExp;
  currentState.nextExp = playerNextExp;
  currentState.dragonGem = currentDragonGem;

  currentState.maxHP = playerMaxHP;
  currentState.hp    = playerHP;

  currentState.maxMP = playerMaxMP;
  currentState.mp    = playerMP;

  currentState.stats = { ...stats };
  currentState.growth = { ...GROWTH };
  currentState.equip = { ...EQUIP };
  currentState.equipDurability = { ...EQUIP_DURABILITY };
}

function createUnitState(unitId) {
  const unit = UNITS[unitId];

  let initialSkills = [];
  let baseMaxMP = 30;

  if (unitId === "cress") {
    initialSkills = [SKILL_ID.SOUGA, SKILL_ID.SHIELD];
  }

  if (unitId === "merudi") {
    initialSkills = [
      SKILL_ID.FIRE,
      SKILL_ID.MANA_RAMPAGE,
      SKILL_ID.CHARISMA,
      SKILL_ID.GIFTED
    ];
    baseMaxMP += 15; // 魔力暴走の常時効果
  }

  return {
  unitId,
  name: unit.name,
  img: unit.img,
  level: 1,
  exp: 0,
  nextExp: 100,
  stats: { ...unit.initial },
  growth: { ...unit.growth },
  maxHP: unit.initial.HP,
  hp: unit.initial.HP,
  maxMP: baseMaxMP,
  mp: baseMaxMP,
  equip: { weapon: null, armor: null, shield: null },
  equipDurability: { weapon: 0, armor: 0, shield: 0 },
  skills: initialSkills,
  items: [],
  title: unitId === "cress" ? "亡国の王子" : "未覚の術師",
  classStage: 0,
  buffs:[],
  dragonGem: null
};
}

function hasSkill(unitId, skillId) {
  const st = getUnitState(unitId);
  return !!st?.skills?.includes(skillId);
}

function getUnitState(unitId) {
  if (!unitId) return null;
  if (!unitStates[unitId]) unitStates[unitId] = createUnitState(unitId);

  if (!Array.isArray(unitStates[unitId].items)) {
    unitStates[unitId].items = [];
  }

  return unitStates[unitId];
}
function addItemToUnit(unitId, itemName) {
  const st = getUnitState(unitId);
  if (!st) return false;

  if (!Array.isArray(st.items)) {
    st.items = [];
  }

  if (st.items.length >= 4) {
    addLog(`【${st.name}】はこれ以上道具を持てない。`);
    return false;
  }

  st.items.push(itemName);
  addLog(`【${st.name}】は ${itemName} を手に入れた。`);
  return true;
}

function rollGrowth(player) {
  // player.unitId が入っている想定（無ければ "hero" 扱いなどに）
  const unit = UNITS[player.unitId];
  if (!unit) return { gains: [], before: null, after: null };

  const before = { ...player.stats };

  const gains = [];
  for (const key of ["HP", "STR", "MAG", "AGL", "GRD", "LUCK"]) {
    const p = unit.growth[key] ?? 0;
    if (Math.random() < p) {
      player.stats[key] += 1;
      gains.push(key);
    }
  }

  const after = { ...player.stats };
  return { gains, before, after };
}

function applyUnit(player, unitId) {
  const unit = UNITS[unitId];
  if (!unit) return;

  player.unitId = unitId;

  // 初期ステに置換
  player.stats = {
    HP: unit.initial.HP,
    STR: unit.initial.STR,
    MAG: unit.initial.MAG,
    AGL: unit.initial.AGL,
    GRD: unit.initial.GRD,
    LUCK: unit.initial.LUCK
  };

  // 最大HP/現在HPの扱いが分かれている場合はここを調整
  // 例: player.maxHp / player.hp を使っているなら
  // player.maxHp = player.stats.HP;
  // player.hp    = player.stats.HP;

  // 表示更新（あなたの既存関数名に合わせて呼ぶ）
  if (typeof updateStatusUI === "function") updateStatusUI();
  if (typeof renderPlayerHP === "function") renderPlayerHP();
}

function calcCritRate(skill = null, unitId = currentUnitId) {
  let critRate = 0.05 + getBattleStat(unitId, "LUCK") * 0.005;

  const st = getUnitState(unitId);
  const weapon = st?.equip?.weapon ? findItemByName(st.equip.weapon) : null;
  if (weapon?.crit) critRate += weapon.crit;

  if (skill?.crit) {
    critRate += skill.crit;
  }

  const gemName = st?.dragonGem || null;
  if (gemName) {
    const gem = getDragonGemByName(gemName);
    if (gem?.crit) critRate += gem.crit;
  }

  return Math.min(1, critRate);
}

function getAdjustedMpCost(baseCost) {
  let cost = baseCost;

  if (currentDragonGem) {
    const gem = getDragonGemByName(currentDragonGem);
    if (gem?.mpCostCut) {
      cost = Math.ceil(baseCost * (1 - gem.mpCostCut));
    }
  }

  return Math.max(0, cost);
}

function addBuff(unitId,buff){
  const st =getUnitState(unitId);
  if(!st) return;

  if(!st.buffs) st.buffs=[];

  st.buffs.push({...buff});
}

function getBuffValue(unitId,statName){
  const st=getUnitState(unitId);
  if(!st || !st.buffs)return 0;
  return st.buffs
  .filter(buff=>buff.stat===statName)
  .reduce((sum,buff)=>sum +buff.value,0);
  
}

function getBattleStat(unitId, statName) {
  const st = getUnitState(unitId);
  if (!st) return 0;

  let base = 0;
  if (statName === "HP") base = st.maxHP ?? st.stats?.HP ?? 0;
  else if (statName === "MP") base = st.maxMP ?? st.stats?.MP ?? 0;
  else base = st.stats?.[statName] ?? 0;

  const buff = getBuffValue(unitId, statName);

  const gemName = st.dragonGem || null;
  const gem = gemName ? getDragonGemByName(gemName) : null;
  const gemBonus = gem?.bonus?.[statName] ?? 0;

  return base + buff + gemBonus;
}

function getEquippedDragonGem(unitId) {
  const st = getUnitState(unitId);
  if (!st || !st.dragonGem) return null;
  return getDragonGemByName(st.dragonGem);
}

function getDragonGemEffect(unitId, effectName, defaultValue = 0) {
  const gem = getEquippedDragonGem(unitId);
  const value = gem?.[effectName];
  return typeof value === "number" ? value : defaultValue;
}

function applyDragonGemCurrentDelta(unitId, gemName, sign = 1) {
  const st = getUnitState(unitId);
  if (!st || !gemName) return;

  const gem = getDragonGemByName(gemName);
  if (!gem?.bonus) return;

  const hpDelta = (gem.bonus.HP ?? 0) * sign;
  const mpDelta = (gem.bonus.MP ?? 0) * sign;

  if (hpDelta !== 0) {
    st.hp = Math.max(0, (st.hp ?? 0) + hpDelta);
  }

  if (mpDelta !== 0) {
    st.mp = Math.max(0, (st.mp ?? 0) + mpDelta);
  }

  const maxHP = getBattleStat(unitId, "HP");
  const maxMP = getBattleStat(unitId, "MP");

  st.hp = Math.min(st.hp ?? 0, maxHP);
  st.mp = Math.min(st.mp ?? 0, maxMP);

  if (currentUnitId === unitId) {
    currentState = st;
  }
}

function getDisplayStat(unitId, statName) {
  const st = getUnitState(unitId);
  if (!st) return 0;

  let base = 0;
  if (statName === "HP") base = st.maxHP ?? 0;
  else if (statName === "MP") base = st.maxMP ?? 0;
  else base = st.stats?.[statName] ?? 0;

  const equipBonus = ["weapon", "armor", "shield"].reduce((sum, slot) => {
    const itemName = st.equip?.[slot];
    if (!itemName) return sum;

    const item = findItemByName(itemName);
    return sum + (item?.stat?.[statName] ?? 0);
  }, 0);

  const gem = st.dragonGem ? getDragonGemByName(st.dragonGem) : null;
  const gemBonus = gem?.bonus?.[statName] ?? 0;

  return base + equipBonus + gemBonus;
}

function findItemByName(name) {
  return SHOP_ITEMS.find(item => item.name === name || item.key === name) || null;
}

function tickBuff(unitId){
  const st=getUnitState(unitId);
  if(!st ||!st.buffs)return;

  st.buffs.forEach(buff=>{
    buff.turns -= 1;
  });

  const expired =st.buffs.filter(buff =>buff.turns<=0);
  st.buffs=st.buffs.filter(buff=>buff.turns>0);

  expired.forEach(buff=>{
    addLog(`${st.name}の${buff.name}の効果が切れた！`);
  });
}

function triggerClassChangeFor(unitId) {
  const st = getUnitState(unitId);
  if (!st) return false;

  if (unitId === "cress") {
    if (st.classStage >= 1) return false;

    addLog("クレスは英雄として覚醒した！");
    st.title = "英雄クレス";
    st.stats.STR += 5;
    st.stats.MAG += 1;
    st.stats.AGL += 2;
    st.stats.GRD += 3;
    st.stats.LUCK += 3;

    if (!st.skills.includes(SKILL_ID.ROYAL_BLOOD)) st.skills.push(SKILL_ID.ROYAL_BLOOD);
    if (!st.skills.includes(SKILL_ID.FOLLOW_UP)) st.skills.push(SKILL_ID.FOLLOW_UP);

    st.classStage = 1;
  }

  if (unitId === "merudi") {
    // Lv20 → 天賦の魔術師
    if (st.level >= 20 && st.classStage < 1) {
      addLog("メルディは天賦の魔術師へと覚醒した！");
      st.title = "天賦の魔術師";
      st.stats.STR += 2;
      st.stats.MAG += 3;
      st.stats.AGL += 2;
      st.stats.GRD += 1;
      st.stats.LUCK += 2;
      st.classStage = 1;
    }

    // Lv40 → 創成と破壊の大魔術師
    else if (st.level >= 40 && st.classStage < 2) {
      addLog("メルディは創成と破壊の大魔術師へ到達した！");
      st.title = "創成と破壊の大魔術師";
      st.stats.STR += 2;
      st.stats.MAG += 5;
      st.stats.AGL += 2;
      st.stats.GRD += 2;
      st.stats.LUCK += 3;
      st.classStage = 2;
    } else {
      return false;
    }
  }

  if (currentUnitId === unitId) {
    saveGlobalsToState();
    loadStateToGlobals(st);
    updatePlayerHP();
    refreshStatusIfOpen();
    if (skillBox && skillBox.classList.contains("is-open")) updateSkillUI();
  }

  return true;
}











//TODOキャラクター情報(クレス)






















//! <5.編成UI>
//TODO保存・読み込み
function loadParty() {
  let p;
  try {
    p = JSON.parse(localStorage.getItem("party"));
  } catch {
    p = null;
  }

  if (!p) p = { ...DEFAULT_PARTY };

  if (!UNITS[p.front]) p.front = DEFAULT_PARTY.front;
  if (p.back && !UNITS[p.back]) p.back = null;

  // メルディ未加入なら編成から除外
  if (!merudiJoined) {
    if (p.front === "merudi") p.front = DEFAULT_PARTY.front;
    if (p.back === "merudi") p.back = null;
  }

  return p;
}
function saveParty(party) {
  localStorage.setItem("party", JSON.stringify(party));
}

//TODO解放判定
function isFormationUnlocked() {
  return merudiJoined;
}

function isMerudiUnlocked() {
  return merudiJoined;
}

function updateFormationUnlockUI() {
  if (isFormationUnlocked()) {
    $("#formation_btn").show();
  } else {
    $("#formation_btn").hide();
  }
}


//TODO編成画面UI
function openUnitOverlay() {
  $("#unit_overlay").attr("aria-hidden", "false").fadeIn(120);

  // ヘッダーを編成向けに（HTML側のタイトルが同じならそのままでもOK）
  $("#unit_title").text("ユニット編成（前衛 / 後衛）");

  renderFormationUI();
}

function closeUnitOverlay() {
  $("#unit_overlay").attr("aria-hidden", "true").fadeOut(120);
}

function renderFormationUI() {
  // 枠表示を上に出す（無ければ #unit_list の前に差し込む）
  if ($("#formation_slots").length === 0) {
    $("#unit_list").before(`
      <div id="formation_slots" style="display:grid; gap:10px; margin-bottom:12px;">
        <div style="display:flex; gap:10px; align-items:center; justify-content:space-between;">
          <button id="slot_front" type="button" class="lv_ok_btn" style="flex:1;">前衛：<b id="front_name">—</b></button>
          <button id="slot_back"  type="button" class="lv_ok_btn" style="flex:1;">後衛：<b id="back_name">—</b></button>
        </div>
        <div style="display:flex; gap:10px;">
          <button id="swap_slots" type="button" class="lv_ok_btn" style="flex:1;">前衛↔後衛 入れ替え</button>
          <button id="clear_back" type="button" class="lv_ok_btn" style="flex:1;">後衛を外す</button>
        </div>
        <div style="font-size:12px; opacity:.85;">選択中：<b id="selecting_slot_txt">前衛</b>（下のリストからユニットを選んで配置）</div>
      </div>
    `);
  }

  // 枠の名前更新
  $("#front_name").text(party.front ? UNITS[party.front]?.name ?? party.front : "—");
  $("#back_name").text(party.back  ? UNITS[party.back]?.name  ?? party.back  : "—");
  $("#selecting_slot_txt").text(selectingSlot === "front" ? "前衛" : "後衛");

  // 候補一覧（所持ユニット概念がまだ無いなら UNITS 全部でOK）
  // 「解放済みだけ表示」にしたい場合はここでフィルタする
  const candidates = Object.values(UNITS).filter(u => {
  if (u.id === "merudi") return isMerudiUnlocked();
  return true;
});

  const $list = $("#unit_list");
  $list.empty();

  candidates.forEach(unit => {
    const init = unit.initial;
    const g = unit.growth;

    const isSelectedFront = party.front === unit.id;
    const isSelectedBack  = party.back === unit.id;

    const badge =
      isSelectedFront ? "【前衛】" :
      isSelectedBack  ? "【後衛】" : "";




const merudiOk = isMerudiUnlocked();

$("#slot_back").prop("disabled", !merudiOk);
$("#swap_slots").prop("disabled", !merudiOk);
$("#clear_back").prop("disabled", !merudiOk);

if (!merudiOk) {
  $("#back_name").text("未解放");
}

    const $li = $(`
      <li class="unit_item" data-unit="${unit.id}">
        <div class="unit_name">${badge} ${unit.name}</div>
        <div class="unit_stats">
          初期: HP${init.HP} / STR${init.STR} / MAG${init.MAG} / AGL${init.AGL} / GRD${init.GRD} / LUCK${init.LUCK}
        </div>
        <div class="unit_growth">
          成長確率: HP${g.HP} / STR${g.STR} / MAG${g.MAG} / AGL${g.AGL} / GRD${g.GRD} / LUCK${g.LUCK}
        </div>
      </li>
    `);

    $list.append($li);
  });
}

function updatePartyView() {
  const front = party?.front ? UNITS[party.front] : null;
  const back  = party?.back  ? UNITS[party.back]  : null;

  const frontImg = document.getElementById("front_unit_img");
  const frontName = document.getElementById("front_unit_name");

  if (frontImg) {
    frontImg.style.backgroundImage = front?.img ? `url(${front.img})` : "";
    frontImg.setAttribute("aria-label", front ? `前衛：${front.name}` : "前衛：なし");
  }

  if (frontName) {
    frontName.textContent = front ? front.name : "—";
    frontName.disabled = !front;
  }

  const backImg = document.getElementById("back_unit_img");
  const backName = document.getElementById("back_unit_name");

  if (backImg) {
    backImg.style.backgroundImage = back?.img ? `url(${back.img})` : "";
    backImg.setAttribute("aria-label", back ? `後衛：${back.name}` : "後衛：なし");
  }

  if (backName) {
    backName.textContent = back ? back.name : "—";
    backName.disabled = !back;
  }

  if (frontName) {
  frontName.classList.toggle("is-selected", statusViewSlot === "front");
}

if (backName) {
  backName.classList.toggle("is-selected", statusViewSlot === "back");
}
}


//TODO編成の整合性
function onPlayerDown() {
  if (party.back) {
    party.front = party.back;
    party.back = null;

    saveParty(party);
    updatePartyView();

    if (party.front) {
      applyUnitToCurrent(party.front);
      updatePlayerHP();
      refreshStatusIfOpen();
    }

    addLog("後衛が前衛に出た！");
    return true;
  }

  return false;
}

function ensurePartyValid() {

  // 未加入ならメルディは絶対にパーティに入れない
  if (!merudiJoined) {
    if (party.front === "merudi") {
      party.front = DEFAULT_PARTY.front;
    }
    if (party.back === "merudi") {
      party.back = null;
    }
  }

  if (!party.front && !party.back) {
    party.front = DEFAULT_PARTY.front;
  }

  if (!party.front && party.back) {
    party.front = party.back;
    party.back = null;
  }

  if (party.front && !UNITS[party.front]) party.front = DEFAULT_PARTY.front;
  if (party.back && !UNITS[party.back]) party.back = null;
}

function normalizeStatusViewSlot() {
  if (statusViewSlot === "back" && !party.back) statusViewSlot = "front";
}

function getViewingUnitId() {
  return statusViewSlot === "front" ? party.front : party.back;
}

function toggleStatusView() {
  // 後衛がいないなら常に前衛
  if (!party.back) {
    statusViewSlot = "front";
  } else {
    statusViewSlot = (statusViewSlot === "front") ? "back" : "front";
  }
  updateStatusUI();
}





















//! <6.ターン制>
//TODO ---ターン順管理用の状態
let turnOrder = [];  
let turnIndex = 0;
let isPlayerTurn = false; 

//TODO参加者抽出・ターン順作成
function getAlivePartyUnitIds() {
  // ★いま操作中の globals を必ず state に反映してから判定する
  saveGlobalsToState();

  const ids = [];

  if (party.front) {
    const st = getUnitState(party.front);
    if (st && st.hp > 0) ids.push(party.front);
  }

  if (party.back) {
    const st = getUnitState(party.back);
    if (st && st.hp > 0) ids.push(party.back);
  }

  return ids;
}

function buildTurnOrder() {
  const actors = [];

  for (const uid of getAlivePartyUnitIds()) {
    const st = getUnitState(uid);
    const agl = st?.stats?.AGL ?? 0;
    actors.push({ type: "player", unitId: uid, agl });
  }

  for (const enemy of getAliveEnemies()) {
    actors.push({
      type: "enemy",
      enemyIndex: currentEnemies.indexOf(enemy),
      agl: enemy.agl ?? 0
    });
  }

  actors.sort((a, b) => {
    if (b.agl !== a.agl) return b.agl - a.agl;
    return Math.random() < 0.5 ? -1 : 1;
  });

  turnOrder = actors.map(a => {
    if (a.type === "player") {
      return { type: "player", unitId: a.unitId };
    }
    return { type: "enemy", enemyIndex: a.enemyIndex };
  });

  turnIndex = 0;
}


//TODOターンループ制御(開始→次→終了)
function startTurnLoop() {
  buildTurnOrder();
  nextTurn();
}

function nextTurn() {
  if (isBattleOverByEnemies()) return;

  const alive = getAlivePartyUnitIds();
  if (alive.length === 0) {
    disableCommands();
    showGameOver();
    return;
  }

  if (turnIndex >= turnOrder.length) {
    buildTurnOrder();
  }

  const actor = turnOrder[turnIndex];

  if (actor.type === "player") {
    const st = getUnitState(actor.unitId);
    if (!st || st.hp <= 0) {
      turnIndex++;
      return nextTurn();
    }

    applyUnitToCurrent(actor.unitId);

    // 竜玉(水)の自動回復
  const regenGem = getEquippedDragonGem(actor.unitId);
if (regenGem?.regen) {
  st.hp = Math.min(getBattleStat(actor.unitId, "HP"), (st.hp ?? 0) + regenGem.regen);

  if (actor.unitId === currentUnitId) {
    applyUnitToCurrent(actor.unitId);
    updatePlayerHP();
  }

  addLog(`${regenGem.name}の力でHPが${regenGem.regen}回復した。`);
}

    tickBuff(actor.unitId);
    saveGlobalsToState();

    if (actor.unitId === "merudi" && hasSkill("merudi", SKILL_ID.GIFTED)) {
      playerMP = Math.min(playerMaxMP, playerMP + 5);
      saveGlobalsToState();
      updatePlayerMP();
      addLog("ギフテッドが発動！ MPが5回復した。");
    }

    isPlayerTurn = true;
    enableCommands();
    addLog(`▶ ${st.name} の行動`);
    refreshStatusIfOpen();
    return;
  }
   if (actor.type === "enemy") {
    const enemy = currentEnemies[actor.enemyIndex];
    if (!enemy || enemy.hp <= 0) {
      turnIndex++;
      return nextTurn();
    }

    isPlayerTurn = false;
    disableCommands();
    enemyTurnSingle(enemy);
    return;
  }

  isPlayerTurn = false;
  disableCommands();
  enemyTurnTurnBased();
}

function endTurn() {
  // いまの操作ユニットの globals を state へ保存
  saveGlobalsToState();
 


  turnIndex++;
  nextTurn();
}

function pickEnemyTargetUnitId() {
  const frontSt = party.front ? getUnitState(party.front) : null;
  if (frontSt && frontSt.hp > 0) return party.front;

  const backSt = party.back ? getUnitState(party.back) : null;
  if (backSt && backSt.hp > 0) return party.back;

  return null;
}


//TODO行動順補助(イニシアチブ)
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


//TODO敵ターン(ターゲット選択→攻撃処理)
function enemyTurnTurnBased() {
  flushLogs();
  instantLogMode = true;
  

  const aliveEnemies = getAliveEnemies();
  if (aliveEnemies.length === 0) {
    instantLogMode = false;
    return handleEnemyDefeated();
  }

  for (const enemy of aliveEnemies) {
    const targetId = pickEnemyTargetUnitId();
    if (!targetId) {
      disableCommands();
      showGameOver();
      instantLogMode = false;
      return;
    }
    

    const target = getUnitState(targetId);
if (!target || target.hp <= 0) continue;

const luck = getBattleStat(targetId, "LUCK");

// 基本回避
let evasion = Math.min(0.05 + luck * 0.005, 0.35);

// 竜玉(氷)の回避ボーナス
const gem = getEquippedDragonGem(targetId);
if (gem?.evasion) {
  evasion += gem.evasion;
}

// 上限
evasion = Math.min(evasion, 0.75);

// 回避判定
if (Math.random() < evasion) {
  if (gem?.evasion) {
    addLog(`【${target.name}】は${gem.name}の力で攻撃を回避した！`);
  } else {
    addLog(`${target.name} は素早く身をかわした！ 攻撃を回避した。`);
  }
  continue;
}

const base = rand(enemy.atkMin, enemy.atkMax);
const grd = getBattleStat(targetId, "GRD");
let dmg = Math.max(1, base - Math.floor(grd * 0.5));

// 竜玉(岩)の被ダメ軽減
const damageCut = getDragonGemEffect(targetId, "damageCut", 0);
if (damageCut > 0) {
  dmg = Math.max(0, Math.floor(dmg * (1 - damageCut)));
}

addLog(`${enemy.name}の攻撃！`);

if (target.isGuarding) {
  dmg = Math.ceil(dmg / 2);
  target.isGuarding = false;
  addLog(`${target.name} は守りでダメージを軽減した！`);
}

target.hp = Math.max(0, target.hp - dmg);

if (targetId === currentUnitId) {
  if (EQUIP.armor) reduceEquipDurability("armor", 1);
  if (EQUIP.shield) reduceEquipDurability("shield", 1);
  playerHP = target.hp;
}

addLog(`${target.name} は${dmg}のダメージを受けた。`);

    if (target.hp <= 0) {
      if (
        target.unitId === "cress" &&
        hasSkill("cress", SKILL_ID.ROYAL_BLOOD) &&
        !target.royalUsed
      ) {
        if (Math.random() < 0.5) {
          target.hp = 1;
          target.royalUsed = true;
          addLog("王血の加護が発動！");
        }
      }
    }

    if (target.hp <= 0) {
      addLog(`${target.name} は倒れた……`);

      if (targetId === party.front) {
        const revived = onPlayerDown();
        if (!revived) {
          disableCommands();
          showGameOver();
          instantLogMode = false;
          return;
        }
      }
    }
  }

  if (party.front) {
  const front = getUnitState(party.front);
  if (front && party.front === currentUnitId) {
    playerHP = front.hp;
  }

  saveGlobalsToState();
  applyUnitToCurrent(party.front);
}

updatePlayerHP();
refreshStatusIfOpen();

instantLogMode = false;

turnIndex++;
nextTurn();
}

function selectAlly(callback) {
  const choices = [];

  if (party.front) {
    const st = getUnitState(party.front);
    choices.push({ text: st.name, result: party.front });
  }

  if (party.back) {
    const st = getUnitState(party.back);
    choices.push({ text: st.name, result: party.back });
  }

  openStoryScene([
    {
      type: "choice",
      choices: choices
    }
  ], (result) => {
    callback(result);
  });
}

















//! <7.UI（ログ/ステータス）>
//TODOログUI
window.alert = (msg) => addLog(msg);

function addLog(message, { maxEntries = 100 } = {}) {
  if (!logList) return;

  const text = String(message);

  // 即時モード中はその場で表示
  if (instantLogMode) {
    const li = document.createElement("li");
    li.textContent = text;
    logList.appendChild(li);

    while (logList.children.length > maxEntries) {
      logList.removeChild(logList.firstElementChild);
    }

    const parent = document.querySelector(".rog_box");
    if (parent) parent.scrollTop = parent.scrollHeight;
    return;
  }

  // 通常時はキューに積んでゆっくり出す
  logQueue.push({
    message: text,
    maxEntries
  });

  playLogQueue();
}

function flushLogs({ maxEntries = 100 } = {}) {
  if (!logList) return;

  if (logTimer) {
    clearTimeout(logTimer);
    logTimer = null;
  }

  isLogPlaying = false;

  while (logQueue.length > 0) {
    const { message } = logQueue.shift();
    const li = document.createElement("li");
    li.textContent = message;
    logList.appendChild(li);
  }

  while (logList.children.length > maxEntries) {
    logList.removeChild(logList.firstElementChild);
  }

  const parent = document.querySelector(".rog_box");
  if (parent) parent.scrollTop = parent.scrollHeight;
}

function playLogQueue() {
  if (isLogPlaying) return;
  if (!logList) return;
  if (logQueue.length === 0) return;

  isLogPlaying = true;

  const { message, maxEntries } = logQueue.shift();

  const li = document.createElement("li");
  li.textContent = message;
  logList.appendChild(li);

  while (logList.children.length > maxEntries) {
    logList.removeChild(logList.firstElementChild);
  }

  const parent = document.querySelector(".rog_box");
  if (parent) parent.scrollTop = parent.scrollHeight;

  logTimer = setTimeout(() => {
    isLogPlaying = false;
    logTimer = null;
    playLogQueue();
  }, 700);
}


//TODO HP・MP表示
function updateEnemyHP() {
  syncCurrentEnemy();

  if (enemyHPText) {
    if (currentEnemy) {
      enemyHPText.textContent = `${currentEnemy.name} のHP: ${currentEnemy.hp}`;
    } else {
      enemyHPText.textContent = "敵はいない";
    }
  }

  renderEnemySlots();
}

function updatePlayerHP() {
  saveGlobalsToState();

  if (playerHPBox) {
    playerHPBox.textContent = "あなたのHP:" + playerHP + "/" + playerMaxHP;
  }

  updateStatusUI();
}

function updatePlayerMP() {
  saveGlobalsToState();
  updateStatusUI();
}

function renderEnemySlots() {
  const area = document.getElementById("enemy_area");
  if (!area) return;

  ensureSelectedEnemy();
  area.innerHTML = "";

  currentEnemies.forEach((enemy, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `enemy_card enemy_pos_${index}`;
    card.dataset.index = index;

    if (enemy.hp <= 0) {
      card.classList.add("is-dead");
      card.disabled = true;
    }

    if (index === selectedEnemyIndex && enemy.hp > 0) {
      card.classList.add("is-selected");
    }

    card.innerHTML = `
  <div class="enemy_card_img ${enemy.id === "zeek" ? "enemy_large" : ""}"
       style="
         background-image:url('${enemy.img || ""}');
         width:${enemy.imgSize || 120}px;
         height:${enemy.imgSize || 120}px;
         background-size: contain;
         background-repeat: no-repeat;
         background-position: center;
       ">
  </div>
  <div class="enemy_card_name">${enemy.name}</div>
  <div class="enemy_card_hp">HP ${enemy.hp}/${enemy.hpMax}</div>
`;

    card.addEventListener("click", () => {
      if (enemy.hp <= 0) return;
      selectedEnemyIndex = index;
      ensureSelectedEnemy();
      renderEnemySlots();
      updateEnemyHP();
      
    });

    area.appendChild(card);
  });
}

//TODO ステータスUI
function formatLine(label, value) {
  return `<div><span style="display:inline-block;min-width:90px;color: var(--ui-text);
  ">${label}</span>${value}</div>`;
}

function updateStatusUI() {
  if (!statusBox) return;

  saveGlobalsToState();

  const viewUnitId = getViewingUnitId();
  const viewState = getUnitState(viewUnitId) || currentState;
  if (!viewState) return;

  const lv    = viewState.level;
const exp   = viewState.exp;
const next  = viewState.nextExp;

const hpMax = getBattleStat(viewUnitId, "HP");
const mpMax = getBattleStat(viewUnitId, "MP");
const hp    = Math.min(viewState.hp ?? 0, hpMax);
const mp    = Math.min(viewState.mp ?? 0, mpMax);

const STR  = getBattleStat(viewUnitId, "STR");
const MAG  = getBattleStat(viewUnitId, "MAG");
const AGL  = getBattleStat(viewUnitId, "AGL");
const GRD  = getBattleStat(viewUnitId, "GRD");
const LUCK = getBattleStat(viewUnitId, "LUCK");

const weaponName = viewState.equip.weapon || "—";
const armorName  = viewState.equip.armor  || "—";
const shieldName = viewState.equip.shield || "—";
const dura = viewState.equipDurability || { weapon: 0, armor: 0, shield: 0 };

const slotLabel = (statusViewSlot === "front") ? "前衛" : "後衛";

  const frontState = party.front ? getUnitState(party.front) : null;
  const backState  = party.back  ? getUnitState(party.back)  : null;

  const frontNameHtml = frontState
  ? `<button type="button" class="status-name-link" data-slot="front">${frontState.name}</button>`
  : "—";

const backNameHtml = backState
  ? `<button type="button" class="status-name-link" data-slot="back">${backState.name}</button>`
  : "—";

  let html = "";

  html += `<div style="margin-bottom:6px;">`;
  html += `前衛：${frontNameHtml}<br>`;
  html += `後衛：${backNameHtml}`;
  html += `</div>`;

  html += formatLine("レベル", `Lv.${lv}`);
  html += formatLine("経験値", `${exp}/${next}`);
  html += formatLine("HP", `${hp}/${hpMax}`);
  html += formatLine("MP", `${mp}/${mpMax}`);
  html += formatLine("所持金", `${gold}G`);
  html += formatLine("闘技場PT", `${arenaPoints}pt`);

  html += `<div style="margin-top:6px;color:#555;">— 能力値 —</div>`;
  html += formatLine("STR（力）",  STR);
  html += formatLine("MAG（魔）",  MAG);
  html += formatLine("AGL（速）",  AGL);
  html += formatLine("GRD（防）",  GRD);
  html += formatLine("LUCK（運）", LUCK);

  

  statusBox.innerHTML = html;

  statusBox.querySelectorAll(".status-name-link").forEach(btn => {
  btn.addEventListener("click", () => {
    const slot = btn.dataset.slot;
    openUnitDetailOverlay(slot);
  });
});
equipSelectList.querySelectorAll(".equip-choice-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    equipItemToUnit(btn.dataset.unit, btn.dataset.slot, btn.dataset.item);
    closeEquipSelectOverlay();
    updateStatusUI();
    openUnitDetailOverlay(btn.dataset.unit === party.front ? "front" : "back");
  });
});
}

function classChangeToHeroCress() {
  const cress = getUnitState("cress");
  if (!cress) return;

  // ステータス強化
  cress.maxHP += 200;
  cress.stats.STR += 10;
  cress.stats.AGL += 8;
  cress.stats.GRD += 8;
  cress.stats.LUCK += 5;

  // HP全回復（好み）
  cress.hp = cress.maxHP;

  // フラグ
  cress.class = "hero";

  addLog("クレスは英雄クレスへと覚醒した！");
}

function applyDragonGemCurrentBonus(unitId, gemName, sign = 1) {
  const st = getUnitState(unitId);
  if (!st || !gemName) return;

  const gem = getDragonGemByName(gemName);
  if (!gem?.bonus) return;

  const hpBonus = (gem.bonus.HP ?? 0) * sign;
  const mpBonus = (gem.bonus.MP ?? 0) * sign;

  if (hpBonus !== 0) {
    st.hp = Math.max(0, (st.hp ?? 0) + hpBonus);
  }

  if (mpBonus !== 0) {
    st.mp = Math.max(0, (st.mp ?? 0) + mpBonus);
  }

  const maxHP = getBattleStat(unitId, "HP");
  const maxMP = getBattleStat(unitId, "MP");

  st.hp = Math.min(st.hp ?? 0, maxHP);
  st.mp = Math.min(st.mp ?? 0, maxMP);
}

function openUnitDetailOverlay(slot) {
  const unitId = slot === "front" ? party.front : party.back;
  if (!unitId) return;


  const st = getUnitState(unitId);
  if (!st) return;

  const dispHP   = getDisplayStat(unitId, "HP");
const dispMP   = getDisplayStat(unitId, "MP");
const dispSTR  = getDisplayStat(unitId, "STR");
const dispMAG  = getDisplayStat(unitId, "MAG");
const dispAGL  = getDisplayStat(unitId, "AGL");
const dispGRD  = getDisplayStat(unitId, "GRD");
const dispLUCK = getDisplayStat(unitId, "LUCK");

  const dura = st.equipDurability || { weapon: 0, armor: 0, shield: 0 };

  const unitImg =
  UNITS[unitId]?.face ||
  st.img ||
  UNITS[unitId]?.img ||
  "./assets/img/kuresu.dia.png";

  const weaponDisplay = st.equip.weapon
  ? `<button type="button" class="equip-slot-btn" data-unit="${unitId}" data-slot="weapon">${st.equip.weapon}${dura.weapon ? ` (耐久:${dura.weapon})` : ""}</button>`
  : `<button type="button" class="equip-slot-btn is-empty" data-unit="${unitId}" data-slot="weapon">—</button>`;
  const armorDisplay = `<button type="button" class="equip-slot-btn ${st.equip.armor ? "" : "is-empty"}" data-unit="${unitId}" data-slot="armor">${st.equip.armor || "—"}${dura.armor ? ` (耐久:${dura.armor})` : ""}</button>`;

const shieldDisplay = `<button type="button" class="equip-slot-btn ${st.equip.shield ? "" : "is-empty"}" data-unit="${unitId}" data-slot="shield">${st.equip.shield || "—"}${dura.shield ? ` (耐久:${dura.shield})` : ""}</button>`;

const dragonGemDisplay = `<span class="dragon-gem-display">${st.dragonGem || "—"}</span>`;

  const items = Array.isArray(st.items) ? st.items : [];
const item1 = items[0] || "—";
const item2 = items[1] || "—";
const item3 = items[2] || "—";
const item4 = items[3] || "—";

const itemBtn = (index) => {
  const itemName = items[index] || "—";
  return `<button type="button" class="item-slot-btn ${items[index] ? "" : "is-empty"}" data-unit="${unitId}" data-index="${index}">${itemName}</button>`;
};

  unitDetailBox.innerHTML = `
  <div class="unit-detail-layout">
    <div class="unit-detail-header">
      <button id="unit_detail_close_inner" type="button" class="unit-detail-close">閉じる</button>
      <div class="unit-detail-name">${slot === "front" ? "前衛" : "後衛"}：${st.name}</div>
    </div>

    <div class="unit-detail-top">
      <img src="${unitImg}" alt="${st.name}" class="unit-detail-image">
    </div>

    <div class="unit-detail-bottom">
      <div class="unit-detail-panel">
        <div class="unit-detail-title">ステータス</div>
        ${formatLine("レベル", `Lv.${st.level}`)}
        ${formatLine("経験値", `${st.exp}/${st.nextExp}`)}
        ${formatLine("HP", `${st.hp}/${dispHP}`)}
        ${formatLine("MP", `${st.mp}/${dispMP}`)}
        ${formatLine("STR（力）", dispSTR)}
        ${formatLine("MAG（魔）", dispMAG)}
        ${formatLine("AGL（速）", dispAGL)}
        ${formatLine("GRD（防）", dispGRD)}
        ${formatLine("LUCK（運）", dispLUCK)}
      </div>

      <div class="unit-detail-panel">
        <div class="unit-detail-title">装備</div>
        ${formatLine("武器", weaponDisplay)}
        ${formatLine("防具", armorDisplay)}
        ${formatLine("盾", shieldDisplay)}

        <div style="margin-top:10px;" class="unit-detail-title">道具</div>
        ${formatLine("1", itemBtn(0))}
        ${formatLine("2", itemBtn(1))}
        ${formatLine("3", itemBtn(2))}
        ${formatLine("4", itemBtn(3))}
      </div>
    </div>
  </div>
`;

  unitDetailOverlay.classList.add("is-open");
  unitDetailOverlay.setAttribute("aria-hidden", "false");
  unitDetailBox.querySelectorAll(".equip-slot-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const targetUnitId = btn.dataset.unit;
    const slotName = btn.dataset.slot;
    const st = getUnitState(targetUnitId);
    if (!st) return;

    if (slotName === "dragonGem") {
      if (st.dragonGem) {
        unequipDragonGemFromUnit(targetUnitId);
      } else {
        openDragonGemSelectOverlay(targetUnitId);
      }
      return;
    }

    if (st.equip[slotName]) {
      unequipItemFromUnit(targetUnitId, slotName);
    } else {
      openEquipSelectOverlay(targetUnitId, slotName);
    }
  });
});
unitDetailBox.querySelectorAll(".item-slot-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const targetUnitId = btn.dataset.unit;
    const index = Number(btn.dataset.index);
    const st = getUnitState(targetUnitId);
    if (!st) return;

    if (st.items[index]) {
      removeUnitItem(targetUnitId, index);
    } else {
      openUnitItemSelectOverlay(targetUnitId, index);
    }
  });
});

  const innerCloseBtn = document.getElementById("unit_detail_close_inner");
  if (innerCloseBtn) {
    innerCloseBtn.addEventListener("click", closeUnitDetailOverlay);
  }
}

function openEquipSelectOverlay(unitId, equipSlot) {
  const st = getUnitState(unitId);
  if (!st) return;

  const inventoryItems = Array.from(INV.keys());

  const candidates = inventoryItems.filter(itemName => {
    const itemData = SHOP_ITEMS.find(x => x.name === itemName || x.key === itemName);
    return itemData && itemData.kind === equipSlot;
  });

  equipSelectTitle.textContent = `${st.name}の${equipSlot === "weapon" ? "武器" : equipSlot}を選択`;

  if (candidates.length === 0) {
    equipSelectList.innerHTML = `<div>装備できるアイテムがありません。</div>`;
  } else {
    equipSelectList.innerHTML = candidates.map(itemName => {
      const count = invCount(itemName);
      return `<button type="button" class="equip-choice-btn" data-unit="${unitId}" data-slot="${equipSlot}" data-item="${itemName}">${itemName} ×${count}</button>`;
    }).join("");
  }

  equipSelectOverlay.classList.add("is-open");
  equipSelectOverlay.setAttribute("aria-hidden", "false");

  equipSelectList.querySelectorAll(".equip-choice-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      equipItemToUnit(btn.dataset.unit, btn.dataset.slot, btn.dataset.item);
      closeEquipSelectOverlay();
      openUnitDetailOverlay(unitId === party.front ? "front" : "back");
    });
  });
}

function unequipItemFromUnit(unitId, equipSlot) {
  const st = getUnitState(unitId);
  if (!st || !st.equip || !st.equip[equipSlot]) return;

  const oldItem = st.equip[equipSlot];

  if (invCount(oldItem) >= 99) {
    addLog(`【${st.name}】荷物がいっぱいで ${oldItem} を外せない。`);
    return;
  }

  invAdd(oldItem, 1);
  st.equip[equipSlot] = null;
  st.equipDurability[equipSlot] = 0;

  if (currentUnitId === unitId) {
    currentState = st;
    Object.assign(EQUIP, st.equip);
    Object.assign(EQUIP_DURABILITY, st.equipDurability);
  }

  updateStatusUI();
  openUnitDetailOverlay(unitId === party.front ? "front" : "back");
  addLog(`【${st.name}】${oldItem} を外した。`);
}

function setUnitItem(unitId, index, itemName) {
  const st = getUnitState(unitId);
  if (!st) return;
  if (!Array.isArray(st.items)) st.items = [];

  const dragonGemNames = Object.values(DRAGON_GEMS).map(g => g.name);
  const isDragonGem = dragonGemNames.includes(itemName);

  // すでにその枠に入っている物を戻す
  if (st.items[index]) {
    const oldItem = st.items[index];
    invAdd(oldItem, 1);

    // 以前入っていたものが竜玉なら装備解除
    if (dragonGemNames.includes(oldItem) && st.dragonGem === oldItem) {
      st.dragonGem = null;
      if (currentUnitId === unitId) currentDragonGem = null;
    }
  }

  // 新しいアイテムをセット
  st.items[index] = itemName;
  invRemove(itemName, 1);

  // 竜玉なら装備扱いにする
  if (isDragonGem) {
    st.dragonGem = itemName;
    if (currentUnitId === unitId) currentDragonGem = itemName;
  }

  updateStatusUI();
  openUnitDetailOverlay(unitId === party.front ? "front" : "back");
  addLog(`【${st.name}】${itemName} を道具欄に設定した。`);
  saveStoryFlags();
}

function unequipDragonGemFromUnit(unitId) {
  const st = getUnitState(unitId);
  if (!st || !st.dragonGem) return;

  const oldGem = st.dragonGem;
  invAdd(oldGem, 1);
  st.dragonGem = null;

  if (currentUnitId === unitId) {
    currentDragonGem = null;
    currentState = st;
  }

  updateStatusUI();
  openUnitDetailOverlay(unitId === party.front ? "front" : "back");
  addLog(`【${st.name}】${oldGem} を外した。`);
  saveStoryFlags();
}

function unequipDragonGemFromUnit(unitId) {
  const st = getUnitState(unitId);
  if (!st || !st.dragonGem) return;

  const oldGem = st.dragonGem;
  invAdd(oldGem, 1);
  st.dragonGem = null;

  if (currentUnitId === unitId) {
    currentDragonGem = null;
    currentState = st;
  }

  updateStatusUI();
  openUnitDetailOverlay(unitId === party.front ? "front" : "back");
  addLog(`【${st.name}】${oldGem} を外した。`);
  saveStoryFlags();
}

function openDragonGemSelectOverlay(unitId) {
  const st = getUnitState(unitId);
  if (!st || !equipSelectOverlay || !equipSelectTitle || !equipSelectList) return;

  const candidates = Array.from(INV.keys()).filter(itemName => {
    return Object.values(DRAGON_GEMS).some(gem => gem.name === itemName || gem.key === itemName);
  });

  equipSelectTitle.textContent = `${st.name}の竜玉を選択`;

  if (candidates.length === 0) {
    equipSelectList.innerHTML = `<div>装備できる竜玉がありません。</div>`;
  } else {
    equipSelectList.innerHTML = candidates.map(itemName =>
      `<button type="button" class="dragon-gem-choice-btn" data-unit="${unitId}" data-item="${itemName}">${itemName}</button>`
    ).join("");

    equipSelectList.querySelectorAll(".dragon-gem-choice-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        equipDragonGemToUnit(btn.dataset.unit, btn.dataset.item);
        closeEquipSelectOverlay();
        openUnitDetailOverlay(btn.dataset.unit === party.front ? "front" : "back");
      });
    });
  }

  equipSelectOverlay.classList.add("is-open");
  equipSelectOverlay.setAttribute("aria-hidden", "false");
}

function equipDragonGemToUnit(unitId, itemName) {
  const st = getUnitState(unitId);
  if (!st) return false;

  const oldGem = st.dragonGem || null;

  // 先に古い竜玉の現在値補正を外す
  if (oldGem) {
    st.dragonGem = null;
    applyDragonGemCurrentBonus(unitId, oldGem, -1);
  }

  // 新しい竜玉を装備
  st.dragonGem = itemName;

  // 現在操作中ユニットなら同期
  if (unitId === currentUnitId) {
    currentDragonGem = itemName;
  }

  // 新しい竜玉の現在値補正を適用
  applyDragonGemCurrentBonus(unitId, itemName, +1);

  updateStatusUI();
  updatePlayerHP();
  openUnitDetailOverlay(unitId);
  saveStoryFlags();

  return true;
}

function removeUnitItem(unitId, index) {
  const st = getUnitState(unitId);
  if (!st || !Array.isArray(st.items) || !st.items[index]) return;

  const dragonGemNames = Object.values(DRAGON_GEMS).map(g => g.name);
  const itemName = st.items[index];

  // 先に道具欄から外す対象が装備中の竜玉か判定
  const isEquippedDragonGem =
    dragonGemNames.includes(itemName) && st.dragonGem === itemName;

  // 装備中の竜玉なら、現在HP/MP補正を先に外す
  if (isEquippedDragonGem) {
    st.dragonGem = null;
    applyDragonGemCurrentDelta(unitId, itemName, -1);

    if (currentUnitId === unitId) {
      currentDragonGem = null;
      currentState = st;
    }
  }

  invAdd(itemName, 1);
  st.items[index] = null;

  while (st.items.length && st.items[st.items.length - 1] == null) {
    st.items.pop();
  }

  updateStatusUI();
  openUnitDetailOverlay(unitId === party.front ? "front" : "back");
  addLog(`【${st.name}】${itemName} を道具欄から外した。`);
  saveStoryFlags();
}

function openUnitItemSelectOverlay(unitId, index) {
  const st = getUnitState(unitId);
  if (!st || !equipSelectOverlay || !equipSelectTitle || !equipSelectList) return;

  const dragonGemNames = Object.values(DRAGON_GEMS).map(g => g.name);

  const candidates = Array.from(INV.keys()).filter(itemName => {
    const itemData = SHOP_ITEMS.find(x => x.name === itemName || x.key === itemName);
    const isConsumable = itemData && itemData.kind === "consumable";
    const isDragonGem = dragonGemNames.includes(itemName);
    return isConsumable || isDragonGem;
  });

  equipSelectTitle.textContent = `${st.name}の道具を選択`;

  if (candidates.length === 0) {
    equipSelectList.innerHTML = `<div class="equip-empty-message">設定できる道具がありません。</div>`;
  } else {
    equipSelectList.innerHTML = candidates.map(itemName => {
      const itemData = SHOP_ITEMS.find(x => x.name === itemName || x.key === itemName);
      const isDragonGem = dragonGemNames.includes(itemName);
      const kindLabel = isDragonGem ? "竜玉" : "道具";
      const count = invCount(itemName);

      return `
        <button
          type="button"
          class="equip-choice-btn ${isDragonGem ? "is-dragon-gem" : "is-item"}"
          data-unit="${unitId}"
          data-index="${index}"
          data-item="${itemName}"
        >
          <span class="equip-choice-name">${itemName}</span>
          <span class="equip-choice-meta">${kindLabel} ×${count}</span>
        </button>
      `;
    }).join("");

    equipSelectList.querySelectorAll(".equip-choice-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        setUnitItem(btn.dataset.unit, Number(btn.dataset.index), btn.dataset.item);
        closeEquipSelectOverlay();
        openUnitDetailOverlay(btn.dataset.unit === party.front ? "front" : "back");
      });
    });
  }

  equipSelectOverlay.classList.add("is-open");
  equipSelectOverlay.setAttribute("aria-hidden", "false");
}

function equipItemToUnit(unitId, equipSlot, itemName) {
  const st = getUnitState(unitId);
  if (!st) return;

  const itemData = SHOP_ITEMS.find(x => x.name === itemName || x.key === itemName);
  if (!itemData) return;
  if (itemData.kind !== equipSlot) return;

  if (!st.equip) st.equip = { weapon: null, armor: null, shield: null };
  if (!st.equipDurability) st.equipDurability = { weapon: 0, armor: 0, shield: 0 };

  // すでに同じ装備なら何もしない
  if (st.equip[equipSlot] === itemName) return;

  // 先に現在装備中のものを荷物へ戻す
  const oldItem = st.equip[equipSlot];
  if (oldItem) {
    if (invCount(oldItem) >= 99) {
      addLog(`【${st.name}】荷物がいっぱいで ${oldItem} を外せない。`);
      return;
    }
    invAdd(oldItem, 1);
  }

  // 新しい装備を荷物から消費
  if (invCount(itemName) <= 0) {
    addLog(`${itemName} を所持していない。`);
    return;
  }
  invRemove(itemName, 1);

  // 装備反映
  st.equip[equipSlot] = itemName;
  st.equipDurability[equipSlot] = itemData.durability || 0;

  if (currentUnitId === unitId) {
    currentState = st;
    Object.assign(EQUIP, st.equip);
    Object.assign(EQUIP_DURABILITY, st.equipDurability);
  }

  updateStatusUI();
  openUnitDetailOverlay(unitId === party.front ? "front" : "back");
  addLog(`【${st.name}】${itemName} を装備した。`);
  saveStoryFlags();
}



function closeEquipSelectOverlay() {
  equipSelectOverlay.classList.remove("is-open");
  equipSelectOverlay.setAttribute("aria-hidden", "true");
}

if (equipSelectClose) {
  equipSelectClose.addEventListener("click", closeEquipSelectOverlay);
}

function closeUnitDetailOverlay() {
  unitDetailOverlay.classList.remove("is-open");
  unitDetailOverlay.setAttribute("aria-hidden", "true");
}

if (unitDetailClose) {
  unitDetailClose.addEventListener("click", closeUnitDetailOverlay);
}

function toggleStatusUI() {
  if (!statusBox) return;

  updateStatusUI();
  statusBox.classList.add("is-open");
  statusBox.style.display = "block";
  statusBox.setAttribute("aria-hidden", "false");

  // スキルが開いていたら閉じる
  if (skillBox) {
    skillBox.classList.remove("is-open");
    skillBox.style.display = "none";
    skillBox.setAttribute("aria-hidden", "true");
  }
}

function refreshStatusIfOpen() {
  if (!statusBox) return;

  // 表示中かどうかを実際の見た目で判定
  const style = window.getComputedStyle(statusBox);
  const visible =
    style.display !== "none" &&
    style.visibility !== "hidden" &&
    style.opacity !== "0";

  if (visible) {
    updateStatusUI();
  }
}

function getDragonGemByName(name) {
  return Object.values(DRAGON_GEMS).find(g => g.name === name) || null;
}

function applyDragonGemBonus(gem, sign = 1) {
  if (!gem) return;

  const bonus = gem.bonus || {};
  for (const [k, v] of Object.entries(bonus)) {
    if (k === "HP") {
      playerMaxHP += sign * v;
      playerHP = Math.min(playerMaxHP, playerHP + (sign > 0 ? v : 0));
      continue;
    }

    if (k === "MP") {
      playerMaxMP += sign * v;
      playerMP = Math.min(playerMaxMP, playerMP + (sign > 0 ? v : 0));
      continue;
    }

    if (typeof stats[k] === "number") {
      stats[k] += sign * v;
    }
  }
}

function equipDragonGem(gemName) {
  const gem = getDragonGemByName(gemName);
  if (!gem) {
    addLog("その竜玉は存在しない。");
    return;
  }

  // すでに装着中の竜玉を外す
  if (currentDragonGem) {
    const prevGem = getDragonGemByName(currentDragonGem);
    applyDragonGemBonus(prevGem, -1);
    invAdd(currentDragonGem, 1);
    addLog(`${currentDragonGem}を外した。`);
  }

  currentDragonGem = gem.name;
  applyDragonGemBonus(gem, +1);

  invRemove(gem.name, 1);

  saveGlobalsToState();
  updatePlayerHP();
  updatePlayerMP();
  refreshStatusIfOpen();

  addLog(`${gem.name}を装着した！`);
}



//TODO スキルUI
function toggleSkillUI() {
  if (!skillBox) return;

  const isOpen = skillBox.classList.contains("is-open");

  if (isOpen) {
    skillBox.classList.remove("is-open");
    skillBox.style.display = "none";
    skillBox.setAttribute("aria-hidden", "true");
    return;
  }

  updateSkillUI();
  skillBox.classList.add("is-open");
  skillBox.style.display = "block";
  skillBox.setAttribute("aria-hidden", "false");
}

function updateSkillUI() {
  if (!skillBox) return;

  const st = getUnitState(currentUnitId);
  if (!st) return;

  const skillIds = st.skills || [];

  let html = `<div class="skill_title">${st.name} のスキル</div>`;

  if (skillIds.length === 0) {
    html += `<div>スキルを習得していません。</div>`;
    skillBox.innerHTML = html;
    return;
  }

  skillIds.forEach(skillId => {
    const skill = SKILLS[skillId];
    if (!skill) return;

    const canUse = (playerMP >= (skill.cost ?? 0));
    const disabledAttr = canUse ? "" : "disabled";

    html += `
      <button class="skill_item_btn" data-skill-id="${skill.id}" ${disabledAttr} type="button">
        <div class="skill_name">${skill.name}</div>
        <div class="skill_cost">消費MP：${skill.cost ?? 0}</div>
        <div class="skill_type">タイプ：${skill.type ?? "—"}</div>
      </button>
    `;
  });

  skillBox.innerHTML = html;
}

//TODO オーバーレイ共通
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

function openFacilityOverlay(overlay) {
  if (!overlay) return;
  overlay.classList.add("is-open");
  overlay.setAttribute("aria-hidden", "false");
}

function closeFacilityOverlay(overlay) {
  if (!overlay) return;
  overlay.classList.remove("is-open");
  overlay.setAttribute("aria-hidden", "true");
}


//TODO マップメッセージUI
function showMapMessage(text, duration = 2000) {

  const box = document.getElementById("map_event_log");
  if (!box) return;

  box.textContent = text;

  box.classList.add("is-show");

  clearTimeout(box._timer);

  box._timer = setTimeout(() => {
    box.classList.remove("is-show");
  }, duration);
}


//TODO ストーリー表示UI
function showStorySummary(page) {
  storySummaryBox.style.display = "block";
  storyDialogueArea.style.display = "none";

  storySummaryBox.textContent = page.text || "";

  if (page.image) {
    storyEventImageArea.style.display = "flex";
    storyEventImage.src = page.image;
    storyEventImage.alt = "イベント画像";
  } else {
    storyEventImageArea.style.display = "none";
    storyEventImage.src = "";
    storyEventImage.alt = "";
  }
}

function showStoryDialogue(page) {
  storySummaryBox.style.display = "none";
  storyDialogueArea.style.display = "block";
  storyEventImageArea.style.display = "none";

  storyDialogueName.textContent = page.name || "";
  storyDialogueText.textContent = page.text || "";

  storyFaceLeft.classList.remove("active");
  storyFaceRight.classList.remove("active");

  if (page.side === "left") {
    storyFaceLeft.src = page.face || "";
    storyFaceLeft.alt = page.name || "";
    storyFaceLeft.style.display = "block";
    storyFaceLeft.classList.add("active");

    storyFaceRight.style.display = "none";
    storyFaceRight.src = "";
    storyFaceRight.alt = "";
  } else {
    storyFaceRight.src = page.face || "";
    storyFaceRight.alt = page.name || "";
    storyFaceRight.style.display = "block";
    storyFaceRight.classList.add("active");

    storyFaceLeft.style.display = "none";
    storyFaceLeft.src = "";
    storyFaceLeft.alt = "";
  }

  if (storyPortraitTopWrap && storyPortraitTop) {
  if (page.face) {
    storyPortraitTopWrap.style.display = "flex";
    storyPortraitTop.src = page.face;
    storyPortraitTop.alt = page.name || "";
  } else {
    storyPortraitTopWrap.style.display = "none";
    storyPortraitTop.src = "";
    storyPortraitTop.alt = "";
  }
}
}

function showStoryChoice(page) {
  storySummaryBox.style.display = "none";
  storyDialogueArea.style.display = "block";
  storyEventImageArea.style.display = "none";

  storyDialogueName.textContent = "選択";
  storyDialogueText.innerHTML = "";

  storyFaceLeft.style.display = "none";
  storyFaceRight.style.display = "none";

  const wrap = document.createElement("div");
  wrap.className = "story_choice_wrap";

  (page.choices || []).forEach(choice => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "story_choice_btn";
    btn.textContent = choice.text;

    btn.addEventListener("click", (e) => {
      e.stopPropagation();

      const result = choice.result;
      closeStoryScene();

      const cb = storySceneOnComplete;
      storySceneOnComplete = null;
      storySceneResult = null;

      if (typeof cb === "function") cb(result);
    });

    wrap.appendChild(btn);
  });

  storyDialogueText.appendChild(wrap);
}

function renderStoryScenePage() {
  const page = storyScenePages[storySceneIndex];
  if (!page) return;

  if (page.type === "summary") {
    showStorySummary(page);
    storySceneNext.style.display = "";
  } else if (page.type === "dialogue") {
    showStoryDialogue(page);
    storySceneNext.style.display = "";
  } else if (page.type === "choice") {
    showStoryChoice(page);
    storySceneNext.style.display = "none";
  }

  if (page.type !== "choice") {
    storySceneNext.textContent =
      storySceneIndex >= storyScenePages.length - 1
        ? "▼クリックで終了"
        : "▼クリックで次へ";
  }
}

function openStoryScene(pages, onComplete) {
  if (!storySceneOverlay || !Array.isArray(pages) || pages.length === 0) {
    if (typeof onComplete === "function") onComplete();
    return;
  }

  storyScenePages = pages;
  storySceneIndex = 0;
  storyScenePlaying = true;
  storySceneOnComplete = onComplete || null;
  storySceneResult = null;

  disableCommands();

  storySceneOverlay.classList.add("is-open");
  storySceneOverlay.setAttribute("aria-hidden", "false");

  renderStoryScenePage();
}

function closeStoryScene() {
  storySceneOverlay.classList.remove("is-open");
  storySceneOverlay.setAttribute("aria-hidden", "true");
  storyScenePlaying = false;

  if (keepBattleUIHiddenAfterStory || isMapEventMode) {
    return;
  }

  if (storyBattleMode && isPlayerTurn) {
    enableCommands();
  }
}

function nextStoryScenePage() {
  if (!storyScenePlaying) return;

  const page = storyScenePages[storySceneIndex];
  if (page?.type === "choice") return;

  if (storySceneIndex < storyScenePages.length - 1) {
    storySceneIndex++;
    renderStoryScenePage();
    return;
  }

  closeStoryScene();

  const cb = storySceneOnComplete;
  const result = storySceneResult;

  storySceneOnComplete = null;
  storySceneResult = null;

  if (typeof cb === "function") cb(result);
}
















//! <8.戦闘>
//TODO クレススキル
//王宮剣技・蒼牙
function skillSouga() {
  const target = getFrontAliveEnemy();
  if (!target) return;

  const skill = SKILLS[SKILL_ID.SOUGA];

  if (playerMP < skill.cost) {
    addLog("MPが足りない！");
    return;
  }

  playerMP -= skill.cost;

  let normalBase = getBattleStat("cress", "STR");
  let dmg = Math.floor(normalBase * 2);

  let critRate = calcCritRate(skill);
  if (Math.random() < critRate) {
    dmg *= 2;
    addLog("クリティカル！");
  }

  damageEnemyByIndex(currentEnemies.indexOf(target), dmg);
  addLog(`蒼牙！ ${target.name}に${dmg}ダメージ`);
}

//王宮盾技
function skillShield(){
  const skill=SKILLS[SKILL_ID.SHIELD];

  

  if(playerMP < skill.cost) {
    addLog("MPが足りない！");
    return;
  }

  playerMP -= skill.cost;

  addBuff("cress",{
    stat:"GRD",
    value:15,
    turns:3,
    name:"王宮盾技"

  });

  addLog("王宮盾技！守りを固めた");
}

//反逆の意志
function skillRebellion(){
  const skill =SKILLS[SKILL_ID.REBELLION];


  if(playerMP < skill.cost) {
    addLog("MPが足りない！");
    return;
  }

  playerMP -= skill.cost;

  addBuff("cress",{
    stat:"STR",
    value:10,
    turns:2,
    name:"反逆の意志"
  });

  addBuff("cress",{
    stat:"AGL",
    value:5,
    turns:2,
    name:"反逆の意志"
  });
  

  addLog("反逆の意志！力と速さが上がった！");
}

//王家相伝・徹
function skillTetsu() {
  const st = getUnitState("cress");
  const skill =SKILLS[SKILL_ID.TETSU];

  if (playerMP < skill.cost) {
    addLog("MPが足りない！");
    return;
  }

  playerMP -= skill.cost;

  let dmg = getBattleStat("cress","STR")*3;
  
  let critRate = calcCritRate(skill);

  if (Math.random() < critRate) {
    dmg *= 2;
    addLog("会心の一撃！");
  }

  enemyHP = Math.max(0, enemyHP - dmg);
  addLog(`王家相伝・徹！ ${dmg}ダメージ！`);
  updateEnemyHP();
}


//TODO メルディ補助
//魔力暴走
function getMerudiSpellSuccessRate(st) {
  if (!st || st.unitId !== "merudi") return 1.0;
  if (!hasSkill("merudi", SKILL_ID.MANA_RAMPAGE)) return 1.0;

  if (st.level >= 40) return 1.00;
  if (st.level >= 30) return 0.90;
  if (st.level >= 20) return 0.80;
  if (st.level >= 10) return 0.70;
  return 0.60;
}

function updateUnitMpUI(unitId) {
  if (party.front === unitId) {
    playerMP = getUnitState(unitId).mp;
    updatePlayerMP();
  }
}


//TODO メルディスキル
//ファイヤー
function skillFire() {
  const st = getUnitState("merudi");
  const target = getFrontAliveEnemy();
  if (!target || !st) return;

  const cost = getAdjustedMpCost(5);

  if (st.mp < cost) {
    addLog("MPが足りない！");
    return;
  }

  st.mp -= cost;
  updateUnitMpUI("merudi");

  const successRate = getMerudiSpellSuccessRate(st);
  if (Math.random() > successRate) {
    addLog(`${st.name}は指先に火を灯した――`);
    addLog("しかし魔力が乱れ、ファイヤーは不発に終わった……");
    return;
  }

  let dmg = st.stats.MAG * 2 - (target.mag || 0);
  dmg = Math.max(1, dmg);

  damageEnemyByIndex(currentEnemies.indexOf(target), dmg);

  addLog(`${st.name}は指先に火を灯した――「炎よ、敵を包め……ファイヤー！」`);
  addLog(`${target.name}に${dmg}のダメージ！`);

  if (isBattleOverByEnemies()) return handleEnemyDefeated();
}

//ヒール
function skillHeal() {
  const st = getUnitState("merudi");
  const skill = SKILLS[SKILL_ID.HEAL];
  const cost = getAdjustedMpCost(skill.cost);

  if (!st) return;

  if (st.mp < cost) {
    addLog("MPが足りない！");
    return;
  }

  selectAlly((targetId) => {
    const target = getUnitState(targetId);
    if (!target) return;

    st.mp -= cost;
    updateUnitMpUI("merudi");

    const beforeHp = target.hp;
    const heal = Math.floor(st.stats.MAG * 2.5) + 20;
    target.hp = Math.min(target.maxHP, target.hp + heal);
    const actualHeal = target.hp - beforeHp;

    if (targetId === currentUnitId) {
      playerHP = target.hp;
    }

    updatePlayerHP();
    refreshStatusIfOpen();

    addLog(`${st.name}はそっと祈りを捧げた――「癒しの光よ、命を満たせ……ヒール！」`);
    addLog(`${target.name}のHPが${actualHeal}回復した！`);
  });
}

//ギフト
function skillGift() {
  const st = getUnitState("merudi");
  const skill = SKILLS[SKILL_ID.GIFT];
  const cost = getAdjustedMpCost(skill.cost);

  if (!st) return;

  if (st.mp < cost) {
    addLog("MPが足りない！");
    return;
  }

  selectAlly((targetId) => {
    const target = getUnitState(targetId);
    if (!target || target.hp <= 0) {
      addLog("対象がいない！");
      return;
    }

    st.mp -= cost;
    updateUnitMpUI("merudi");

    const beforeMp = target.mp || 0;
    const recover = Math.floor(st.stats.MAG * 1.5) + 10;

    target.mp = Math.min(target.maxMP || 0, (target.mp || 0) + recover);
    const actualRecover = target.mp - beforeMp;

    if (targetId === currentUnitId) {
      playerMP = target.mp;
    }

    updateUnitMpUI(targetId);
    refreshStatusIfOpen();

    addLog(`${st.name}は魔力を分け与えた――`);
    addLog(`${target.name}のMPが${actualRecover}回復した！`);
  });
}

//運命再構築
function skillDestiny() {
  const st = getUnitState("merudi");
  const skill = SKILLS[SKILL_ID.DESTINY];
  const cost = getAdjustedMpCost(skill.cost);

  if (!st) return;

  if (st.mp < cost) {
    addLog("MPが足りない！");
    return;
  }

  st.mp -= cost;

  if (currentUnitId === "merudi") {
    playerMP = st.mp;
  }

  updateUnitMpUI("merudi");
  updatePlayerMP();

  addBuff("merudi", {
    stat: "MAG",
    value: 15,
    turns: 3,
    name: "運命再構築"
  });

  addBuff("merudi", {
    stat: "AGL",
    value: 10,
    turns: 3,
    name: "運命再構築"
  });

  refreshStatusIfOpen();

  addLog(`${st.name}は瞳が妖しく輝く――`);
  addLog("「運命の糸よ、再び編み直されよ……運命再構築！」");
  addLog(`${st.name}の力が高まった！`);
}

//リザレクション
function skillResurrection() {
  const st = getUnitState("merudi");
  const skill = SKILLS[SKILL_ID.RESURRECTION];
  const cost = getAdjustedMpCost(skill.cost);

  if (!st) return;

  if (st.mp < cost) {
    addLog("MPが足りない！");
    return;
  }

  const deadTargets = getAlivePartyMembers().filter(unit => unit.hp <= 0);
  if (deadTargets.length === 0) {
    addLog("復活させる対象がいない！");
    return;
  }

  selectDeadAlly((targetId) => {
    const target = getUnitState(targetId);
    if (!target || target.hp > 0) {
      addLog("復活させる対象がいない！");
      return;
    }

    st.mp -= cost;
    updateUnitMpUI("merudi");

    target.hp = Math.floor(target.maxHP * 0.5);

    addLog(`${st.name}は静かに祈った――`);
    addLog("「失われし命よ、再び立ち上がれ……リザレクション！」");
    addLog(`${target.name}は蘇った！`);

    updatePlayerHP();
  });
}

function selectDeadAlly(callback) {
  const deadAllies = getPartyMembers().filter(unit => unit && unit.hp <= 0);

  if (deadAllies.length === 0) {
    addLog("復活させる対象がいない！");
    return;
  }

  addLog("復活させる味方を選んでください。");

  deadAllies.forEach(unit => {
    addTargetSelectButton(unit.name, () => {
      callback(unit.id);
    });
  });
}

//ライトニング
function skillLightning() {
  const st = getUnitState("merudi");
  const skill = SKILLS[SKILL_ID.LIGHTNING];
  if (!st) return;

  const cost = getAdjustedMpCost(skill.cost);
  if (st.mp < cost) {
    addLog("MPが足りない！");
    return;
  }

  const target = getTargetEnemy();
  if (!target) {
    addLog("対象がいない！");
    return;
  }

  st.mp -= cost;
  updateUnitMpUI("merudi");

  const successRate = getMerudiSpellSuccessRate(st);
  if (Math.random() > successRate) {
    addLog(`${st.name}は空に手を掲げた――`);
    addLog("しかし雷は応えなかった……");
    return;
  }

  let dmg = st.stats.MAG * 4 - (target.mag || 0);
  dmg = Math.max(1, dmg);

  addLog(`${st.name}は空に手を掲げた――「天の怒りよ、雷撃となれ……ライトニング！」`);
  addLog(`${target.name}に${dmg}のダメージ！`);

  damageEnemyByIndex(selectedEnemyIndex, dmg);

  if (isBattleOverByEnemies()) {
    return handleEnemyDefeated();
  }
}

//カオス
function skillChaos() {
  const st = getUnitState("merudi");
  const skill = SKILLS[SKILL_ID.CHAOS];
  if (!st) return;

  const cost = getAdjustedMpCost(skill.cost);
  if (st.mp < cost) {
    addLog("MPが足りない！");
    return;
  }

  const aliveIndexes = getAliveEnemyIndexes();
  if (aliveIndexes.length === 0) {
    addLog("対象がいない！");
    return;
  }

  st.mp -= cost;
  updateUnitMpUI("merudi");

  const successRate = getMerudiSpellSuccessRate(st);
  if (Math.random() > successRate) {
    addLog("世界が軋む――");
    addLog("だが、混沌の力は制御できなかった……");
    return;
  }

  addLog("世界が軋む――");
  addLog(`${st.name}の魔力が限界を超えて溢れ出す！`);
  addLog("「原初の混沌よ、すべてを呑み込め……カオス！」");

  aliveIndexes.forEach(index => {
    const enemy = currentEnemies[index];
    if (!enemy || enemy.hp <= 0) return;

    const dmg = Math.max(1, st.stats.MAG * 5);
    addLog(`${enemy.name}に${dmg}のダメージ！`);
    damageEnemyByIndex(index, dmg);
  });

  if (isBattleOverByEnemies()) {
    return handleEnemyDefeated();
  }
}

//ジェネシス
function skillGenesis() {
  const st = getUnitState("merudi");
  const skill = SKILLS[SKILL_ID.GENESIS];
  const cost = getAdjustedMpCost(skill.cost);

  if (!st) return;

  if (st.mp < cost) {
    addLog("MPが足りない！");
    return;
  }

  st.mp -= cost;
  updateUnitMpUI("merudi");

  const heal = Math.floor(st.stats.MAG * 3) + 40;
  const members = [party.front, party.back];

  members.forEach((unitId) => {
    const target = getUnitState(unitId);
    if (!target || target.hp <= 0) return;

    const beforeHp = target.hp;
    target.hp = Math.min(target.maxHP, target.hp + heal);
    const actualHeal = target.hp - beforeHp;

    if (unitId === currentUnitId) {
      playerHP = target.hp;
    }

    if (actualHeal > 0) {
      addLog(`${target.name}のHPが${actualHeal}回復した！`);
    }
  });

  updatePlayerHP();
  refreshStatusIfOpen();

  addLog("まばゆい光が戦場を包み込む――");
  addLog(`${st.name}は高らかに詠唱した！`);
  addLog("「創世の光よ、命を満たせ……ジェネシス！」");
}

function applyClassChangeSkills(unitId) {
  const unit = getUnitState(unitId);

  Object.values(SKILLS).forEach(skill => {
    if (skill.user === unitId && skill.learnBy === "classChange") {
      learnSkill(unitId, skill.id);
    }
  });
}



//TODO 敵取得・敵生成
function getAliveEnemies() {
  return currentEnemies.filter(enemy => enemy && enemy.hp > 0);
}

function getRandomEnemiesForCurrentMap(count = null) {
  const map = STORY_MAPS[currentMap];
  if (!map || !Array.isArray(map.enemies) || map.enemies.length === 0) return [];

  const enemyCount = Math.min(
    3,
    count ?? rand(1, 3)
  );

  const result = [];

  for (let i = 0; i < enemyCount; i++) {
    const enemyId = map.enemies[rand(0, map.enemies.length - 1)];
    const enemy = makeStoryEnemy(enemyId);
    if (!enemy) continue;

    result.push({
      ...enemy,
      hpMax: enemy.hp
    });
  }

  return result;
}

function clearBattleState() {
  currentEnemies = [];
  currentEnemy = null;
  enemyHP = 0;
  storyBattleMode = false;
  saveStoryFlags();
}


function getFrontAliveEnemy() {
  return currentEnemies.find(enemy => enemy && enemy.hp > 0) || null;
}

function syncCurrentEnemy() {
  currentEnemy = getFrontAliveEnemy();
  enemyHP = currentEnemy ? currentEnemy.hp : 0;
}

function isBattleOverByEnemies() {
  return getAliveEnemies().length === 0;
}

function getAliveEnemyIndexes() {
  const result = [];
  currentEnemies.forEach((enemy, index) => {
    if (enemy && enemy.hp > 0) result.push(index);
  });
  return result;
}

function ensureSelectedEnemy() {
  const alive = getAliveEnemyIndexes();

  if (alive.length === 0) {
    selectedEnemyIndex = -1;
    currentEnemy = null;
    enemyHP = 0;
    return null;
  }

  if (
    selectedEnemyIndex < 0 ||
    !currentEnemies[selectedEnemyIndex] ||
    currentEnemies[selectedEnemyIndex].hp <= 0
  ) {
    selectedEnemyIndex = alive[0];
  }

  currentEnemy = currentEnemies[selectedEnemyIndex];
  enemyHP = currentEnemy.hp;
  return currentEnemy;
}

function getTargetEnemy() {
  return ensureSelectedEnemy();
}

function pickEnemyGroupCount() {
  const total = ENEMY_GROUP_RATE.reduce((sum, row) => sum + row.weight, 0);
  let r = Math.random() * total;

  for (const row of ENEMY_GROUP_RATE) {
    r -= row.weight;
    if (r <= 0) return row.count;
  }

  return 1;
}

function makeStoryEnemy(enemyId) {
  if (STORY_BATTLE_ENEMIES[enemyId]) return { ...STORY_BATTLE_ENEMIES[enemyId] };
  if (ENEMIES[enemyId]) return { ...ENEMIES[enemyId] };
  return null;
}

function normalizeBattleEnemy(rawEnemy) {
  if (!rawEnemy) return null;

  return {
    id: rawEnemy.id || "story_enemy",
    name: rawEnemy.name || "追手兵",
    hp: rawEnemy.stats?.hp ?? rawEnemy.hp ?? 100,
    atkMin: rawEnemy.atkMin ?? Math.max(1, Math.floor((rawEnemy.stats?.atk ?? rawEnemy.atk ?? 10) * 0.8)),
    atkMax: rawEnemy.atkMax ?? Math.max(2, Math.floor((rawEnemy.stats?.atk ?? rawEnemy.atk ?? 10) * 1.2)),
    agl: rawEnemy.stats?.spd ?? rawEnemy.agl ?? 8,
    exp: rawEnemy.stats?.exp ?? rawEnemy.exp ?? 30,
    gold: rawEnemy.stats?.gold ?? rawEnemy.gold ?? 20,
    grd: rawEnemy.stats?.def ?? rawEnemy.def ?? 0,
    mag: rawEnemy.stats?.mag ?? rawEnemy.mag ?? 0,
    img: rawEnemy.images?.battle || rawEnemy.image || `${IMG_BASE}tsuite_battle.png`
  };
}

function loadEnemy(enemyOrEnemies) {
  const list = Array.isArray(enemyOrEnemies) ? enemyOrEnemies : [enemyOrEnemies];

  currentEnemies = list
    .filter(Boolean)
    .slice(0, 3)
    .map((enemy, i) => ({
      ...enemy,
      uid: enemy.uid || `${enemy.id || enemy.name}_${Date.now()}_${i}`,
      hpMax: enemy.hpMax ?? enemy.hp
    }));

  selectedEnemyIndex = 0;
  ensureSelectedEnemy();
  isGuarding = false;
  updateEnemyHP();
  renderEnemySlots();

  currentEnemies.forEach(enemy => {
    addLog(`${enemy.name}が現れた！`);
  });
}

function preloadEnemyImages() {
  const srcList = [
    ...Object.values(ENEMIES).map(e => e.img),
    ...Object.values(STORY_BATTLE_ENEMIES).map(e => e.img)
  ];

  srcList.forEach(src => {
    if (!src) return;
    const img = new Image();
    img.src = src;
  });
}


//TODO 戦闘コマンド制御
function setCommandsEnabled(on) { [attackBtn, guardBtn, spellBtn, itemBtn].forEach(b => { if (b) b.disabled = !on; }); }

function disableCommands() { setCommandsEnabled(false); }

function enableCommands()  { setCommandsEnabled(true);  }


//TODO 戦闘計算
function calcSpellDamage() { const magStat = (typeof stats?.MAG === "number") ? stats.MAG : 0; const base = Math.floor(Math.random()*11) + 15; return base + magStat * 3; }

function calcEvasionChance(){
  const luck = (typeof stats?.LUCK === "number") ? stats.LUCK : 0;
  let chance = 0.05 + luck * 0.005;

  // 竜玉(氷)の回避ボーナス
  if (currentDragonGem) {
    const gem = getDragonGemByName(currentDragonGem);
    if (gem?.evasion) {
      chance += gem.evasion;
    }
  }

  return Math.min(chance, 0.80); // 上限ちょい上げてもOK
}

function damageEnemyByIndex(index, damage) {
  const enemy = currentEnemies[index];
  if (!enemy || enemy.hp <= 0) return null;

  enemy.hp = Math.max(0, enemy.hp - damage);
  syncCurrentEnemy();
  updateEnemyHP();

  if (enemy.hp <= 0) {
    addLog(`${enemy.name}を倒した！`);

    if (isBattleOverByEnemies()) {

      if (pendingEstriaCorridorBattle) {
        pendingEstriaCorridorBattle = false;
        afterEstriaCorridorBattle();
        return enemy;
      }
      if (pendingValdoreinBattle) {
        pendingValdoreinBattle = false;
        afterValdoreinBattle();
        return enemy;
      }
      if (pendingBelialBattle) {
      pendingBelialBattle = false;
      estriaEnding();
      return enemy;
    }

      addLog("戦闘に勝利した！");
    }
  }

  return enemy;
}

function damageFrontEnemy(damage) {
  const target = getFrontAliveEnemy();
  if (!target) return null;

  const index = currentEnemies.indexOf(target);
  return damageEnemyByIndex(index, damage);
}

function getGoldReward(enemy, stage){
  const s = stage || 1;
  const base = 5 + s * 5;
  const variance = rand(0,4);
  return base + variance;
}

function getExpReward(enemy, stage) {
  return enemy?.exp ?? 10;
}

function getEquipStatBonus(itemName) {
  const item = findItemByName(itemName);
  return item?.stat || null;
}

function getEquipMaxDurability(itemName) {
  const item = findItemByName(itemName);
  return item?.durability || 0;
}


//TODO プレイヤー行動
function attack() {
  flushLogs();
  if (!isPlayerTurn) return;

  instantLogMode = true;

  doAttackOnce();

  if (isBattleOverByEnemies()) {
    instantLogMode = false;
    return handleEnemyDefeated();
  }

  if (currentUnitId === "cress" && hasSkill("cress", SKILL_ID.FOLLOW_UP)) {
    const chance = 50 + Math.abs((currentEnemy?.agl ?? 0) - getBattleStat(currentUnitId, "AGL"));
    const roll = Math.random() * 100;
    if (roll < chance) {
      addLog("追撃の構えが発動！");
      doAttackOnce({ isFollowUp: true });

      if (isBattleOverByEnemies()) {
        instantLogMode = false;
        return handleEnemyDefeated();
      }
    }
  }
  
  instantLogMode = false;
  endTurn();
}

function doAttackOnce({ isFollowUp = false } = {}) {
  const target = getTargetEnemy();
  if (!target) return 0;

  const targetIndex = selectedEnemyIndex;

  const str = getBattleStat(currentUnitId, "STR");
  const base = Math.floor(Math.random() * 20) + 5;
  const strBonus = Math.floor(str * 0.7);
  let damage = base + strBonus;

  const critRate = calcCritRate();
  if (Math.random() < critRate) {
    damage *= 2;
    addLog("クリティカル！");
  }

  damageEnemyByIndex(targetIndex, damage);

  addLog(
    isFollowUp
      ? `追撃！ ${target.name}に${damage}のダメージ！`
      : `攻撃！ ${target.name}に${damage}のダメージ！`
  );

  if (EQUIP.weapon === "吸血剣") {
    const heal = Math.max(1, Math.floor(damage * 0.1));
    playerHP = Math.min(playerMaxHP, playerHP + heal);
    updatePlayerHP();
    addLog(`吸血剣が発動！ HPを${heal}回復した！`);
  }

  if (EQUIP.weapon === "雷鳴の剣" && Math.random() < 0.3) {
    const thunderDmg = Math.max(1, stats.MAG - (target.mag || 0));
    damageEnemyByIndex(targetIndex, thunderDmg);
    addLog(`雷鳴の剣が発動！ ${target.name}に${thunderDmg}の追加ダメージ！`);
  }

  reduceEquipDurability("weapon", 1);

  return damage;
}

function guard() {
  flushLogs();
  if (!isPlayerTurn) return;

  instantLogMode = true;

  const st = getUnitState(currentUnitId);
  if (st) st.isGuarding = true;

  addLog("防御！次の被ダメージを軽減する準備をした。");

  if (currentUnitId === "cress" && hasSkill("cress", SKILL_ID.ROYAL_BLOOD)) {
    const heal = Math.floor(playerMaxHP * 0.1);
    playerHP = Math.min(playerMaxHP, playerHP + heal);
    addLog(`王血の加護が発動！HPが${heal}回復した。`);
    updatePlayerHP();
  }

  instantLogMode = false;
  endTurn();
}

function castSpell() {
  flushLogs();
  if (!isPlayerTurn) return;

  instantLogMode = true;

  if (playerMP < SPELL_COST) {
    addLog("MPが足りない!");
    instantLogMode = false;
    return;
  }

  playerMP -= SPELL_COST;
  updatePlayerMP();

  const damage = calcSpellDamage();
  enemyHP = Math.max(0, enemyHP - damage);
  updateEnemyHP();
  addLog(`呪文！ 火炎に包まれ${damage}のダメージ!（MP-${SPELL_COST}）`);

  instantLogMode = false;

  if (enemyHP <= 0) return handleEnemyDefeated();

  endTurn();
}

function useSkill(skillId) {
  flushLogs();
  if (!isPlayerTurn) return;

  instantLogMode = true;

  const st = getUnitState(currentUnitId);
  if (!st) {
    instantLogMode = false;
    return;
  }

  if (!st.skills.includes(skillId)) {
    addLog("そのスキルは使えない。");
    instantLogMode = false;
    return;
  }

  const skill = SKILLS[skillId];
  if (!skill) {
    instantLogMode = false;
    return;
  }

  const cost = getAdjustedMpCost(skill.cost ?? 0);
if (st.mp < cost) {
  addLog("MPが足りない！");
  updateSkillUI();
  instantLogMode = false;
  return;
}

  switch (skillId) {
    case SKILL_ID.SOUGA:
      skillSouga();
      break;
    case SKILL_ID.SHIELD:
      skillShield();
      break;
    case SKILL_ID.REBELLION:
      skillRebellion();
      break;
    case SKILL_ID.TETSU:
      skillTetsu();
      break;
    case SKILL_ID.FIRE:
      skillFire();
      break;
    case SKILL_ID.LIGHTNING:
      skillLightning();
      break;
    case SKILL_ID.CHAOS:
      skillChaos();
      break;
    case SKILL_ID.HEAL:
  skillHeal();
  break;
case SKILL_ID.GIFT:
  skillGift();
  break;
case SKILL_ID.DESTINY:
  skillDestiny();
  break;
case SKILL_ID.RESURRECTION:
  skillResurrection();
  break;
case SKILL_ID.GENESIS:
  skillGenesis();
  break;
    default:
      addLog("このスキルはまだ未実装です。");
      instantLogMode = false;
      return;
  }

  updatePlayerMP();
  updateSkillUI();

  instantLogMode = false;

  if (enemyHP <= 0) {
    toggleSkillUI();
    return handleEnemyDefeated();
  }

  if (!skill.noEndTurn) {
    toggleSkillUI();
    endTurn();
  } else {
    addLog("まだ行動できる！");
  }
}




//TODO敵の行動
function enemyTurn() {
  return enemyTurnTurnBased();
}

function enemyTurnSingle(enemy) {
  if (enemy?.id === "zeek" && !zeekReunionEventDone) {
  zeekBattleTurn++;

  if (zeekBattleTurn >= 4) {
    return finishZeekBattle();
  }
}

  flushLogs();
  instantLogMode = true;

  const targetId = pickEnemyTargetUnitId();
  if (!targetId) {
    disableCommands();
    showGameOver();
    instantLogMode = false;
    return;
  }

  const target = getUnitState(targetId);

  const base = rand(enemy.atkMin, enemy.atkMax);
  const grd = getBattleStat(targetId, "GRD");
  let dmg = Math.max(1, base - Math.floor(grd * 0.5));

  addLog(`${enemy.name}の攻撃!`);

  const luck = target?.stats?.LUCK ?? 0;
  const evasion = Math.min(0.05 + luck * 0.005, 0.35);
  if (Math.random() < evasion) {
    addLog(`${target.name} は素早く身をかわした！ 攻撃を回避した。`);
    instantLogMode = false;
    turnIndex++;
    return nextTurn();
  }

  if (target.isGuarding) {
    dmg = Math.ceil(dmg / 2);
    target.isGuarding = false;
    addLog(`${target.name} は守りでダメージを軽減した！`);
  }

  target.hp = Math.max(0, target.hp - dmg);

  if (targetId === currentUnitId) {
    if (EQUIP.armor) reduceEquipDurability("armor", 1);
    if (EQUIP.shield) reduceEquipDurability("shield", 1);
    playerHP = target.hp;
  }

  addLog(`${target.name} は${dmg}のダメージを受けた。`);

  if (target.hp <= 0) {
    if (
      target.unitId === "cress" &&
      hasSkill("cress", SKILL_ID.ROYAL_BLOOD) &&
      !target.royalUsed
    ) {
      if (Math.random() < 0.5) {
        target.hp = 1;
        target.royalUsed = true;
        if (targetId === currentUnitId) {
          playerHP = target.hp;
        }
        addLog("王血の加護が発動！");
      }
    }
  }

  if (target.hp <= 0) {
    addLog(`${target.name} は倒れた……`);

    if (targetId === party.front) {
      const revived = onPlayerDown();
      if (!revived) {
        disableCommands();
        showGameOver();
        instantLogMode = false;
        return;
      }
    }
  }
  if (enemy.id === "contract_demon_knight") {
  if (enemy.phase === 2 && Math.random() < 0.4) {
    const dmg = rand(60, 90);
    playerHP = Math.max(0, playerHP - dmg);

    addLog("ヴァルグレイヴの魔撃！");
    addLog(`${dmg}のダメージ！`);

    updatePlayerHP();
    return;
  }
}

  if (party.front) {
    const front = getUnitState(party.front);
    if (front && party.front === currentUnitId) {
      playerHP = front.hp;
      playerMaxHP = front.maxHP;
      playerMP = front.mp;
      playerMaxMP = front.maxMP;
    }

    saveGlobalsToState();
    applyUnitToCurrent(party.front);
  }

  updatePlayerHP();
  updatePlayerMP();
  refreshStatusIfOpen();

  instantLogMode = false;

  turnIndex++;
  nextTurn();
}


//TODO勝利判定・戦闘終了
function handleEnemyDefeated() {

  if (currentEnemies.some(enemy => enemy?.id === "leviata") && !leviataDefeated) {
  leviataDefeated = true;
  saveStoryFlags?.();

  invAdd(DRAGON_GEMS.water.name, 1);
  addLog("🌊 竜玉(水)を手に入れた！");

  openStoryScene([
    {
      type: "summary",
      text: "水神竜レヴィアータは高く咆哮すると、水の光となって海の底へ還っていった。"
    },
    {
      type: "summary",
      text: "祭壇には、澄んだ青の竜玉だけが静かに残されている。"
    }
  ], () => {
    openMapOverlay("kansho");
  });

  return;
}
  if (currentEnemies.some(enemy => enemy?.id === "granius") && !graniusDefeated) {
  graniusDefeated = true;
  saveStoryFlags?.();

  invAdd(DRAGON_GEMS.rock.name, 1);
  addLog("🪨 竜玉(岩)を手に入れた！");

  openStoryScene([
    {
      type: "summary",
      text: "岩神竜グラニウスは轟音とともに崩れ落ち、その身を構成していた岩は静かに砂へ還っていった。"
    },
    {
      type: "summary",
      text: "その中心には、鈍く輝く竜玉だけが残されている。"
    }
  ], () => {
    openMapOverlay("desert");
  });

  return;
}

  if (currentEnemies.some(enemy => enemy?.id === "azrael") && !azraelDefeated) {
  azraelDefeated = true;
  saveStoryFlags?.();

  // 💠 竜玉(蒼)付与
  invAdd(DRAGON_GEMS.blue.name, 1);
  addLog("💠 竜玉(蒼)を手に入れた！");

  openStoryScene([
    {
      type: "summary",
      text: "蒼神竜アズラエルは静かに空へ還っていった。"
    },
    {
      type: "summary",
      text: "祭壇には、蒼く澄んだ竜玉が残されている。"
    }
  ], () => {
    openMapOverlay("plain");
  });

  return;
}
  if (currentEnemies.some(enemy => enemy?.id === "valdorein") && !valdoreinDefeated) {
  valdoreinDefeated = true;
  saveStoryFlags?.();
  checkAndOpenAzureSanctuary();
}
  if (!isBattleOverByEnemies()) {
    syncCurrentEnemy();
    updateEnemyHP();
    return;
  }
  if (currentEnemies.some(enemy => enemy?.id === "zeek") && zeekReunionEventDone && !zeekJoined) {
  openStoryScene(ZEEK_JOIN_EVENT, () => {
    joinZeekNow();

    // ヴォルカノ火山を開放
    STORY_MAPS.volcano.unlocked = true;
    saveStoryFlags();
    refreshStoryMapUI();

    showMapMessage("ジークが仲間に加わった。新しいマップ「ヴォルカノ火山」が開放された！");
    openMapOverlay("gladio");
  });
  return;
}

  if (currentEnemies.some(enemy => enemy?.id === "tsuite_01")) {
    defeatedPursuerBattle = true;
  }
  if (currentEnemies.some(enemy => enemy?.id === "contract_demon_knight")) {
  onValgraveDefeated();
  return;
}

if (currentEnemies.some(enemy => enemy?.id === "ignarion") && !ignarionDefeated) {
  ignarionDefeated = true;
  saveStoryFlags?.();

  // 🔥 竜玉(火)付与
  invAdd(DRAGON_GEMS.fire.name, 1);
  addLog("🔥 竜玉(火)を手に入れた！");

  openStoryScene([
    {
      type: "summary",
      text: "炎神竜イグナリオンは咆哮を残し、灼熱の光となって消えた。"
    },
    {
      type: "summary",
      text: "火口には、紅く輝く竜玉だけが残されている。"
    }
  ], () => {
    openMapOverlay("volcano_summit");
  });

  return;
}

if (currentEnemies.some(enemy => enemy?.id === "volcano_commander") && !volcanoBossDefeated) {
  volcanoBossDefeated = true;
  saveStoryFlags();

  openStoryScene(VOLCANO_END_EVENT, () => {
    volcanoEndEventPlayed = true;
    saveStoryFlags();

    addLog("ヴォルカノ火山のコアを巡る戦いに一区切りがついた。");
    openMapOverlay("volcano");
  });
  return;
}

  // グラディオ廃城・塔攻略
  if (currentMap === "gladio" && !gladioBossEventDone && !gladioTowerCleared && gladioTowerFloor > 0) {
    if (gladioTowerFloor >= 3) {
      gladioTowerCleared = true;

      openStoryScene([
        {
          type: "summary",
          text: `見張り塔の最上階まで踏破した。\n\n崩れた階段の先に、玉座の間へ続く通路が開かれている。`
        },
        {
          type: "dialogue",
          name: "セリオス",
          side: "left",
          face: "./assets/img/seriosu.dia.png",
          text: "この先が廃城の中枢です……殿下、ジークが待っているかもしれません"
        },
        {
          type: "dialogue",
          name: "クレス",
          side: "right",
          face: "./assets/img/kuresu.dia.png",
          text: "ああ、行こう"
        }
      ], () => {
        addLog("玉座の間へ進めるようになった！");
        storyOverlay?.classList.add("is-open");
        storyOverlay?.setAttribute("aria-hidden", "false");
      });

      return;
    }

    openStoryScene([
      {
        type: "summary",
        text: `見張り塔の${gladioTowerFloor}階を突破した。\n\nさらに上へ進めそうだ。`
      }
    ], () => {
      openMapOverlay("gladio");
    });

    return;
  }

  if (currentMap === "lumenia" && currentEnemies.some(enemy => enemy?.id === "pirate")) {
  lumeniaPirateWins += 1;
  addLog(`裏路地の海賊を撃退した！（${lumeniaPirateWins}/5）`);
  saveStoryFlags();

  if (lumeniaPirateWins >= 5 && lumeniaPortLocked) {
  lumeniaPortLocked = false;

  // ルーメニア港解放後はグラディオへ戻す
  forceGladioOnly = true;

  saveStoryFlags();

  openStoryScene(LUMENIA_PORT_UNLOCK_EVENT, () => {
    classChangeToHeroCress();
    applyClassChangeSkills("cress");
    showMapMessage("港は解放された……だが、今はグラディオ廃城へ戻るしかない。");
    openMapOverlay("lumenia");
  });
  return;
}

  openStoryScene([
    {
      type: "summary",
      text: `海賊たちは散り散りに逃げていった。\nまだ裏路地には残党がいるようだ。`
    }
  ], () => {
    openMapOverlay("lumenia");
  });
  return;
}

if (currentArenaRank) {
  handleArenaVictory(currentArenaRank);
  return;
}

  addLog("敵を倒した！");

  const totalGold = currentEnemies.reduce((sum, enemy) => sum + (enemy?.gold ?? 20), 0);
  gold += totalGold;
  updateGoldUI();
  addLog(`${totalGold}G 手に入れた！`);

  const totalExp = currentEnemies.reduce((sum, enemy) => sum + (enemy?.exp ?? 30), 0);
  saveGlobalsToState();
  saveStoryFlags();

  const receivers = getAlivePartyUnitIds();
  const n = Math.max(1, receivers.length);
  const base = Math.floor(totalExp / n);
  let rem = totalExp % n;

  receivers.forEach(uid => {
    let add = base + (rem > 0 ? 1 : 0);
    if (rem > 0) rem--;
    gainExpForUnit(uid, add);
  });
  saveStoryFlags();

  setTimeout(() => {
    if (level5StoryPlayed && currentMap === "village") {
    return;
  }
  const enemies = getRandomEnemiesForCurrentMap();
  if (!enemies.length) return;
  loadEnemy(enemies);
  startTurnLoop();
}, 1000);
}


//TODO EXP・レベル
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
  playerNextExp = 100;

  const after = { level: playerLevel, maxHP: playerMaxHP, STR: stats.STR, MAG: stats.MAG, GRD: stats.GRD, AGL: stats.AGL, LUCK: stats.LUCK };

  addLog(`レベルが上がった！ Lv.${before.level} → Lv.${after.level}`);
  addLog(`最大HP ${before.maxHP} → ${after.maxHP}`);
  grew.forEach(g => addLog(`ステータス上昇：${g}`));

  saveGlobalsToState(); // ★追加
  saveStoryFlags();

  updatePlayerHP();
  showLevelUpPanel(before, after, grew.join(" / "));
  refreshStatusIfOpen();
  triggerLevel5VillageExit();
  checkAndOpenVolcanoSummit();
  checkAndOpenAzureSanctuary();
}

function levelUpUnitState(st) {
  const name = st.name ?? st.unitId ?? "???";

  const before = {
    level: st.level,
    maxHP: st.maxHP,
    STR: st.stats.STR,
    MAG: st.stats.MAG,
    AGL: st.stats.AGL,
    GRD: st.stats.GRD,
    LUCK: st.stats.LUCK
  };

  st.level += 1;

  const grew = [];
  for (const key of Object.keys(st.growth)) {
    if (Math.random() < st.growth[key]) {
      st.stats[key] += 1;
      grew.push(`${key}+1`);
    }
  }

  const hpGain = rand(4, 7);
  st.maxHP += hpGain;
  st.hp = Math.min(st.hp + hpGain, st.maxHP);

  st.exp -= st.nextExp;
  st.nextExp = 100;

  const after = {
    level: st.level,
    maxHP: st.maxHP,
    STR: st.stats.STR,
    MAG: st.stats.MAG,
    AGL: st.stats.AGL,
    GRD: st.stats.GRD,
    LUCK: st.stats.LUCK
  };

  // ★ログ（回数分）
  addLog(`【${name}】レベルが上がった！ Lv.${before.level} → Lv.${after.level}`);
  addLog(`【${name}】最大HP ${before.maxHP} → ${after.maxHP}`);
  addLog(`【${name}】ステータス上昇：${grew.length ? grew.join(" / ") : "なし"}`);

    if (st.unitId === currentUnitId) {
    playerLevel   = st.level;
    playerExp     = st.exp;
    playerNextExp = st.nextExp;
    playerMaxHP   = st.maxHP;
    playerHP      = st.hp;
    playerMaxMP   = st.maxMP;
    playerMP      = st.mp;

    Object.assign(stats,  st.stats);
    Object.assign(GROWTH, st.growth);
    Object.assign(EQUIP,  st.equip);
  }

  // ★レベルアップパネル（操作中のユニットだけ出す：連続レベル/複数人で爆発しない）
  if (st.unitId === currentUnitId) {
    showLevelUpPanel(before, after, `【${name}】${grew.length ? grew.join(" / ") : "なし"}`);
  }

  // ✅Lv20でクラスチェンジ（クレス）
if (st.unitId === "cress" && st.level >= 20 && !st.classStage) {
  triggerClassChangeFor("cress");
}

// ✅メルディも同様にしたいなら（例：Lv20で）
if (st.unitId === "merudi" && st.level >= 20 && st.classStage < 1) {
  triggerClassChangeFor("merudi");
}

if (st.unitId === "merudi" && st.level >= 40 && st.classStage < 2) {
  triggerClassChangeFor("merudi");
}



// クレス
if (st.unitId === "cress") {
  if (st.level >= 10) learnSkill("cress", SKILL_ID.REBELLION);

  if (st.level >= 5 && defeatedPursuerBattle && !level5StoryPlayed) {
  triggerLevel5VillageExit();
  return;
}

  // Lv8で封印迷宮
  if (st.level >= 8 && !level8StoryPlayed) {
    level8StoryPlayed = true;
    STORY_MAPS.labyrinth.unlocked = true;

    openStoryScene(SEALED_LABYRINTH_UNLOCK_STORY, () => {
      addLog("新しいマップ「封印迷宮」が開放された！");
      refreshStoryMapUI();
    });
  }

  if (st.level >= 10 && !level15StoryPlayed) {
    level15StoryPlayed = true;
    STORY_MAPS.marcia.unlocked = true;

    openStoryScene(MARCIA_UNLOCK_STORY, () => {
      addLog("新しいマップ「マルシア商業都市」が開放された！");
      refreshStoryMapUI();
    });
  }

  if (st.unitId === "cress") {

  if (st.level >= 17 && !level25StoryPlayed) {
  level25StoryPlayed = true;
  STORY_MAPS.gladio.unlocked = true;

  openStoryScene(GLADIO_UNLOCK_STORY, () => {
    addLog("新しいマップ「グラディオ廃城」が開放された！");
    refreshStoryMapUI();
  });
}

}

}


// メルディ
if (st.unitId === "merudi") {
  if (st.level >= 10) learnSkill("merudi", SKILL_ID.HEAL);
  if (st.level >= 15) learnSkill("merudi", SKILL_ID.GIFT);
  if (st.level >= 20) learnSkill("merudi", SKILL_ID.LIGHTNING);
  if (st.level >= 30) {
    learnSkill("merudi", SKILL_ID.DESTINY);
    learnSkill("merudi", SKILL_ID.RESURRECTION);
  }
  if (st.level >= 40) {
    learnSkill("merudi", SKILL_ID.GENESIS);
    learnSkill("merudi", SKILL_ID.CHAOS);
  }
}


}

function learnSkill(unitId, skillId) {
  const st = getUnitState(unitId);
  if (!st) return;
  if (!st.skills.includes(skillId)) {
    st.skills.push(skillId);
    addLog(`【${st.name}】${SKILLS[skillId].name} を習得した！`);
  }
}

function gainExpForUnit(unitId, amount) {
  const st = getUnitState(unitId);
  if (!st || amount <= 0) return;

  const gainedExp = (unitId === "merudi") ? amount * 2 : amount;

  if (isEarlyAreaLevelCappedMap() && st.level >= EARLY_AREA_LEVEL_CAP) {
    if (!earlyAreaLevelCapStoryPlayed) {
      earlyAreaLevelCapStoryPlayed = true;
      saveStoryFlags?.();

      openStoryScene(EARLY_AREA_LEVEL_CAP_STORY, () => {
        addLog(`【${st.name}】この地ではこれ以上成長できない。`);
      });
    } else {
      addLog(`【${st.name}】この地ではこれ以上成長できない。`);
    }
    return;
  }

  if (isMidAreaLevelCappedMap() && st.level >= MID_AREA_LEVEL_CAP) {
    if (!midAreaLevelCapStoryPlayed) {
      midAreaLevelCapStoryPlayed = true;
      saveStoryFlags?.();

      openStoryScene(MID_AREA_LEVEL_CAP_STORY, () => {
        addLog(`【${st.name}】この地ではこれ以上成長できない。`);
      });
    } else {
      addLog(`【${st.name}】この地ではこれ以上成長できない。`);
    }
    return;
  }

  const name = st.name ?? st.unitId ?? "???";
  addLog(`【${name}】経験値 +${gainedExp}`);

  st.exp += gainedExp;

  while (st.exp >= st.nextExp) {
    if (isEarlyAreaLevelCappedMap() && st.level >= EARLY_AREA_LEVEL_CAP) {
      st.exp = Math.min(st.exp, st.nextExp - 1);

      if (!earlyAreaLevelCapStoryPlayed) {
        earlyAreaLevelCapStoryPlayed = true;
        saveStoryFlags?.();

        openStoryScene(EARLY_AREA_LEVEL_CAP_STORY, () => {
          addLog(`【${st.name}】この地ではこれ以上成長できない。`);
        });
      }
      break;
    }

    if (isMidAreaLevelCappedMap() && st.level >= MID_AREA_LEVEL_CAP) {
      st.exp = Math.min(st.exp, st.nextExp - 1);

      if (!midAreaLevelCapStoryPlayed) {
        midAreaLevelCapStoryPlayed = true;
        saveStoryFlags?.();

        openStoryScene(MID_AREA_LEVEL_CAP_STORY, () => {
          addLog(`【${st.name}】この地ではこれ以上成長できない。`);
        });
      }
      break;
    }

    levelUpUnitState(st);
  }

  if (statusBox && statusBox.classList.contains("is-open")) {
    const viewing = getViewingUnitId();
    if (viewing === unitId) updateStatusUI();
  }

  if (unitId === currentUnitId) {
    playerLevel   = st.level;
    playerExp     = st.exp;
    playerNextExp = st.nextExp;
    playerMaxHP   = st.maxHP;
    playerHP      = st.hp;
    playerMaxMP   = st.maxMP;
    playerMP      = st.mp;

    Object.assign(stats,  st.stats);
    Object.assign(GROWTH, st.growth);
    Object.assign(EQUIP,  st.equip);

    updatePlayerHP();
    updatePlayerMP();
    refreshStatusIfOpen();
  }
}


//TODO ステージ戦闘開始
function startOpeningBattle() {
  // openingBattleStarted = true;
  // if (!localStorage.getItem("currentMap")) {
  //   setCurrentMap("village");
  // }
  

  // storyBattleMode = true;

  // const map = STORY_MAPS[currentMap];
  // if (!map) return;

  // applyCurrentMapBackground();

  // const enemies = getRandomEnemiesForCurrentMap();
  // if (!enemies.length) return;

  // addLog("カルム村に敵が現れた！");
  // loadEnemy(enemies);
  // startTurnLoop();

  
  currentMap = "village";
  openingBattleStarted = true;
  storyBattleMode = true;

  applyCurrentMapBackground();

  const enemies = getRandomEnemiesForCurrentMap();
  if (!enemies.length) return;

  addLog("カルム村に敵が現れた！");
  loadEnemy(enemies);
  saveStoryFlags();
  startTurnLoop();
}


function applyCurrentMapBackground() {
  const map = STORY_MAPS[currentMap];
  if (!map || !map.background) return;

  document.body.style.backgroundImage = `url(${map.background})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
}

function startStoryStageBattle() {
  const enemies = getRandomEnemiesForCurrentMap();
  if (!enemies.length) return;

  storyBattleMode = true;
  loadEnemy(enemies);
  startTurnLoop();
}

function startCurrentMapBattle() {
  const map = STORY_MAPS[currentMap];
  if (!map) return;

  if (map.type === "town") {
    applyCurrentMapBackground();
    openTownMap(currentMap);
    return;
  }

  storyBattleMode = true;
  applyCurrentMapBackground();

  const enemies = getRandomEnemiesForCurrentMap();
  if (!enemies.length) {
    addLog(`${currentMap} の敵データが見つからない。`);
    return;
  }

  loadEnemy(enemies);
  startTurnLoop();
  saveStoryFlags();
}






//! 9.イベント
//TODO 町・施設イベント
function openMerudiMansion() {
  if (!merudiMansionEventDone) {
    merudiMansionEventDone = true;
    openStoryScene(MERUDI_MANSION_EVENT, () => {
      addLog("メルディの屋敷について気になることが増えた。");
    });
  } else {
    addLog("メルディの屋敷だ。静かな空気が流れている。");
  }
}

function joinMerudiNow() {
  if (merudiJoined) return;

  merudiJoined = true;

  // メルディの状態を生成
  getUnitState("merudi");

  // 後衛が空なら自動で後衛に入れる
  if (!party.back) {
    party.back = "merudi";
  }

  ensurePartyValid();
  saveParty(party);
  saveStoryFlags();

  updateFormationUnlockUI();
  updatePartyView();
  updateMarciaTownButtons();
  refreshStatusIfOpen();

  addLog("メルディが仲間に加わった！");
}

function leaveMarciaTown() {
  if (!merudiShopEventDone || !merudiMansionEventDone) {
    addLog("まだこの街には集めるべき情報が残っているようだ。");
    return;
  }
  closeFacilityOverlay(weaponOverlay);
  closeFacilityOverlay(itemOverlay);
  closeFacilityOverlay(arenaOverlay);
  closeFacilityOverlay(merudiOverlay);

  if (
    merudiShopEventDone &&
    merudiMansionEventDone &&
    !merudiJoined &&
    !merudiJoinEventDone
  ) {
    merudiJoinEventDone = true;
    saveStoryFlags();

    openStoryScene(MERUDI_JOIN_EVENT, (result) => {
      if (result === "join_now") {
        joinMerudiNow();
      } else if (result === "join_later") {
        addLog("メルディはその場に残った。");
      }

      // 加入イベントの直後に砂漠開放ストーリー
      if (!STORY_MAPS.desert.unlocked) {
        STORY_MAPS.desert.unlocked = true;
        desertUnlockedStoryPlayed = true;

        openStoryScene(DESERT_UNLOCK_STORY, () => {
          refreshStoryMapUI();
          closeTownMap();
          storyOverlay?.classList.add("is-open");
          storyOverlay?.setAttribute("aria-hidden", "false");

          if (enemyHP > 0) {
            isPlayerTurn = true;
            enableCommands();
          }
        });

        return;
      }

      closeTownMap();
      storyOverlay?.classList.add("is-open");
      storyOverlay?.setAttribute("aria-hidden", "false");

      if (enemyHP > 0) {
        isPlayerTurn = true;
        enableCommands();
      }
    });

    return;
  }

  if (!STORY_MAPS.desert.unlocked) {
    STORY_MAPS.desert.unlocked = true;
    desertUnlockedStoryPlayed = true;

    openStoryScene(DESERT_UNLOCK_STORY, () => {
      refreshStoryMapUI();
      closeTownMap();
      storyOverlay?.classList.add("is-open");
      storyOverlay?.setAttribute("aria-hidden", "false");
    });

    return;
  }

  closeTownMap();
  storyOverlay?.classList.add("is-open");
  storyOverlay?.setAttribute("aria-hidden", "false");

  if (enemyHP > 0) {
    isPlayerTurn = true;
    enableCommands();
  }
}

function openArenaMenu() {
  addLog("闘技場に入った。猛者たちの歓声が響いている。");
  // ここで次に arenaOverlay を作るか、
  // まずは confirm / ボタン式で初級・中級・上級を選ばせる
}

function startArenaBattle(rank) {
  currentArenaRank = rank;

  const enemyIds = ARENA_ENEMIES[rank];
  const enemyList = (Array.isArray(enemyIds) ? enemyIds : [enemyIds])
    .map(id => makeStoryEnemy(id))
    .filter(Boolean);

  if (enemyList.length === 0) {
    addLog("闘技場の敵データが未設定です。");
    return;
  }

  closeFacilityOverlay(arenaOverlay);
  closeTownMap();

  storyBattleMode = true;
  setCurrentMap("marcia");

  document.body.style.backgroundImage = 'url("./assets/img/bg_arena_mobile.png")';
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";

  loadEnemy(enemyList);
  startTurnLoop();

  addLog(`闘技場・${ARENA_REWARDS[rank]?.label || rank}の試合が始まる！`);
}

function openArenaOverlay() {
  openFacilityOverlay(arenaOverlay);
}

function renderWeaponShopOverlay() {
  if (!weaponList) return;

  let keys = MARCIA_WEAPON_KEYS;
  if (currentMap === "lumenia") {
    keys = LUMENIA_WEAPON_KEYS;
  }

  const items = getShopItemsByKeys(keys);
  weaponList.innerHTML = "";

  items.forEach(item => {
    const li = document.createElement("li");

    const left = document.createElement("div");
    left.innerHTML = `
      <div><strong>${item.name}</strong></div>
      <div>${item.price}G</div>
      <div style="font-size:12px;">${SHOP_DETAIL[item.key]?.effect || ""}</div>
    `;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = "購入";
    btn.addEventListener("click", () => buyItem(item));

    li.appendChild(left);
    li.appendChild(btn);
    weaponList.appendChild(li);
  });

  if (weaponGoldLabel) {
    weaponGoldLabel.textContent = `所持金: ${gold}G`;
  }
}

function openWeaponShopOverlay() {
  renderWeaponShopOverlay();
  openFacilityOverlay(weaponOverlay);
}

function renderItemShopOverlay() {
  if (!itemList) return;

  let keys = MARCIA_ITEM_KEYS;
  if (currentMap === "lumenia") {
    keys = LUMENIA_ITEM_KEYS;
  }

  const items = getShopItemsByKeys(keys);
  itemList.innerHTML = "";

  items.forEach(item => {
    const li = document.createElement("li");

    const left = document.createElement("div");
    left.innerHTML = `
      <div><strong>${item.name}</strong></div>
      <div>${item.price}G</div>
      <div style="font-size:12px;">${SHOP_DETAIL[item.key]?.effect || ""}</div>
    `;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = "購入";
    btn.addEventListener("click", () => buyItem(item));

    li.appendChild(left);
    li.appendChild(btn);
    itemList.appendChild(li);
  });

  if (itemGoldLabel) {
    itemGoldLabel.textContent = `所持金: ${gold}G`;
  }
}

function openItemShopOverlay() {
  if (!merudiShopEventDone && !merudiJoined) {
    merudiShopEventDone = true;

    openStoryScene(MERUDI_SHOP_EVENT, () => {
      merudiMet = true;
      merudiMansionUnlocked = true;
      updateMarciaTownButtons();
      addLog("メルディという不思議な少女と出会った。");
      addLog("都市の一角に『メルディの屋敷』が現れた。");

      renderItemShopOverlay();
      openFacilityOverlay(itemOverlay);
    });
    return;
  }

  renderItemShopOverlay();
  openFacilityOverlay(itemOverlay);
}

function openHouseOverlay() {
  openStoryScene(MARCIA_HOUSE_EVENT);
}

function openMixOverlay() {
  openStoryScene(MARCIA_MIX_EVENT, () => {
    addLog("合成機能は今後実装予定。");
  });
}

function openInfoOverlay() {
  if (heroCressAwakened) {
    openStoryScene(
      marciaRebelLeaderMet ? MARCIA_REBEL_INFO_REPEAT : MARCIA_REBEL_INFO_EVENT,
      () => {
        if (!marciaRebelLeaderMet) {
          marciaRebelLeaderMet = true;
          saveStoryFlags();
        }
      }
    );
    return;
  }

  openStoryScene(MARCIA_INFO_EVENT, (result) => {
    if (result !== "pay") return;

    if (gold < 1000) {
      addLog("1000G足りない。");
      openStoryScene([
        {
          type: "dialogue",
          name: "情報屋",
          side: "left",
          face: "./assets/img/info_broker.png",
          text: "金がないなら情報もない。そういう世界だ"
        }
      ]);
      return;
    }

    gold -= 1000;
    updateGoldUI();
    addLog("情報屋に1000G支払った。");

    openStoryScene(MARCIA_INFO_RESULT);
  });
}

function openCasinoOverlay() {
  if (!casinoOverlay) return;

  const remain = Math.max(0, CASINO_MAX_PROFIT - casinoProfitTotal);

  casinoText.textContent =
  `賭博場の主「${CASINO_BET}G賭けて、表か裏か、好きな方を選びな」\n` +
  `（この賭博場で稼げる残り上限：${remain}G）`;

  openFacilityOverlay(casinoOverlay);
}

function closeCasinoOverlay() {
  if (!casinoOverlay) return;
  closeFacilityOverlay(casinoOverlay);
}

function playCasino(choice) {
  if (gold < CASINO_BET) {
    casinoText.textContent = `賭博場の主「おっと、${CASINO_BET}G持ってから来な」`;
    addLog(`${CASINO_BET}G足りないため賭けられない。`);
    return;
  }

  const currentCasinoMaxProfit = zeekDefeatedInGladio
    ? CASINO_MAX_PROFIT
    : CASINO_EARLY_MAX_PROFIT;

  const remain = Math.max(0, currentCasinoMaxProfit - casinoProfitTotal);
  if (remain <= 0) {
    casinoText.textContent =
      "賭博場の主「今日はもう終わりだ。この場で稼げるだけ稼いだな」";
    addLog("この賭博場ではこれ以上稼げない。");
    return;
  }

  const unitId = party.front || currentUnitId || "cress";
  const st = getUnitState(unitId);
  const luck = st?.stats?.LUCK ?? 0;

  const winRate = Math.min(0.95, (50 + luck) / 100);

  gold -= CASINO_BET;
  updateGoldUI();

  const win = Math.random() < winRate;
  const result = win ? choice : (choice === "表" ? "裏" : "表");

  if (win) {
    const profit = Math.min(CASINO_BET, remain);
    const payout = CASINO_BET + profit;

    gold += payout;
    casinoProfitTotal += profit;

    saveCasinoData();
    updateGoldUI();

    const newRemain = Math.max(0, currentCasinoMaxProfit - casinoProfitTotal);

    casinoText.textContent =
      `賭博場の主がコインを弾いた……「${result}」！\n` +
      `${st?.name ?? "ユニット"}の幸運が冴えわたる！ ${payout}Gを受け取った！\n` +
      `（純利益 +${profit}G / 残り上限 ${newRemain}G）`;

    addLog(`賭博に勝利！ ${payout}Gを受け取った！（純利益 +${profit}G）`);
  } else {
    casinoText.textContent =
      `賭博場の主がコインを弾いた……「${result}」！\n` +
      `賭けは外れた……${CASINO_BET}Gを失った。`;

    addLog(`賭博に負けた……${CASINO_BET}Gを失った。`);
  }

  refreshStatusIfOpen();
  saveStoryFlags();
}

function saveCasinoData() {
  localStorage.setItem("casinoProfitTotal", String(casinoProfitTotal));
}


//TODO 店・ショップ補助
function getShopItemsByKeys(keys = []) {
  return keys
    .map(key => SHOP_ITEMS.find(item => item.key === key))
    .filter(Boolean);
}

function getCurrentMapShopKeys() {
  if (currentMap === "plain") {
    return [];
  }

  if (currentMap === "village") {
    return MAP_SHOPS.village.buy;
  }

  if (currentMap === "marcia") {
    return MAP_SHOPS.marcia.buy;
  }
  if (currentMap === "lumenia") {
    return MAP_SHOPS.lumenia.buy;
  }

  if (currentMap === "labyrinth") {
    return MAP_SHOPS.labyrinth.buy;
  }

  if (currentMap === "volcano" && volcanoSecretShopUnlocked) {
    return MAP_SHOPS.volcano_secret.buy;
  }

  return [];
}

function getCurrentMapShopItems() {
  return getShopItemsByKeys(getCurrentMapShopKeys());
}

function openMapShop() {
  const items = getCurrentMapShopItems();

  if (!items.length) {
    showMapMessage("この場所には利用できる店がない。");
    return;
  }

  SHOP_MODE = "buy";
  CURRENT_SHOP_ITEMS = items;

  setShopTabUI();
  renderShopList(CURRENT_SHOP_ITEMS);
  toggleShop(true);
}

function setCurrentMap(mapId) {
  currentMap = mapId;
  applyCurrentMapBackground();
  saveStoryFlags();
}

function renderStoryShop(items){

  shopList.innerHTML="";

  items.forEach(item=>{

    const li=document.createElement("li");

    li.textContent=`${item.name} ${item.price}G`;

    const btn=document.createElement("button");
    btn.textContent="購入";

    btn.onclick=()=>buyItem(item);

    li.appendChild(btn);

    shopList.appendChild(li);

  });

}

function openMarciaWeaponShop() {
  SHOP_MODE = "buy";
  setShopTabUI();

  const items = getShopItemsByKeys(MARCIA_WEAPON_KEYS);
  renderShopList(items);

  toggleShop(true);
}

function renderMarciaWeaponShop() {
  if (!shopList) return;
  shopList.innerHTML = "";

  MARCIA_WEAPON_SHOP.forEach(it => {
    const li = document.createElement("li");

    const info = document.createElement("div");
    info.innerHTML = `<div class="shop_item_name">${it.name}</div>
                      <div class="shop_item_price">${it.price}G</div>`;

    const btn = document.createElement("button");
    btn.textContent = "購入";
    btn.type = "button";
    btn.onclick = () => buyItem(it);

    li.appendChild(info);
    li.appendChild(btn);
    shopList.appendChild(li);
  });

  if (shopGoldLabel) shopGoldLabel.textContent = `${gold}G`;
}

function openMarciaItemShop() {
  SHOP_MODE = "buy";
  setShopTabUI();

  const items = getShopItemsByKeys(MARCIA_ITEM_KEYS);
  renderShopList(items);

  toggleShop(true);

  triggerMerudiShopEvent();
}


//TODO マップ操作
function openMapOverlay(mapId) {

  
  const data = MAP_OVERLAYS[mapId];
  if (!data || !mapOverlay || !mapBody || !mapTitle) {
    addLog("このマップの全体画面はまだ未実装です。");
    return;
  }
  if (forceGladioOnly && mapId !== "gladio") {
    showMapMessage("今はグラディオ廃城へ戻る必要がある。");
    return;
  }

  disableCommands();

  if (storyBtn) storyBtn.style.display = "none";
  if (shopBtn) shopBtn.style.display = "none";

  if (commandPanel) commandPanel.style.display = "none";
  if (inventoryBox) inventoryBox.classList.remove("is-open");

  if (skillBox) {
    skillBox.classList.remove("is-open");
    skillBox.style.display = "none";
    skillBox.setAttribute("aria-hidden", "true");
  }

  if (statusBox) {
    statusBox.classList.remove("is-open");
    statusBox.style.display = "none";
    statusBox.setAttribute("aria-hidden", "true");
  }

  if (enemyHPBox) enemyHPBox.style.display = "none";

  mapTitle.textContent = data.title;
  mapBody.innerHTML = "";
  mapBody.style.backgroundImage = `url(${data.background})`;
  mapBody.style.backgroundSize = "cover";
  mapBody.style.backgroundPosition = "center";
  mapBody.style.position = "relative";

  (data.spots || []).forEach(spot => {

  if (typeof spot.hidden === "function" && spot.hidden()) {
    return;
  }

  if (spot.unlocked === false) return;

  const btn = document.createElement("button");
  btn.type = "button";
  btn.style.position = "absolute";
  btn.style.left = spot.x;
  btn.style.top = spot.y;
  btn.style.transform = "translate(-50%, -50%)";

  btn.className = "map_spot_btn";
  btn.textContent = spot.label;

  btn.addEventListener("click", () => {
    if (typeof spot.action === "function") {
      spot.action();
    }
  });

  mapBody.appendChild(btn);
});

  mapOverlay.classList.add("is-open");
  mapOverlay.setAttribute("aria-hidden", "false");
}

function closeMapOverlay({ keepBattleUIHidden = false } = {}) {
  if (!mapOverlay) return;

  mapOverlay.classList.remove("is-open");
  mapOverlay.setAttribute("aria-hidden", "true");

  if (keepBattleUIHidden) return;
  if (storyBtn) {
    storyBtn.style.display = "";
  }

  if (shopBtn) {
    shopBtn.style.display = "";
  }

  if (commandPanel) commandPanel.style.display = "block";

  if (enemyHP > 0) {
    enableCommands();
  }

  if (enemyHPBox) enemyHPBox.style.display = "";
}

function openTownMap(townId) {
  if (forceGladioOnly && mapId !== "gladio") {
    showMapMessage("今はグラディオ廃城へ戻る必要がある。");
    return;
  }
  if (!townOverlay) return;

  townOverlay.classList.add("is-open");
  townOverlay.setAttribute("aria-hidden", "false");

  let bg = "";

  if (townId === "marcia") {
    bg = "./assets/img/bg_marcia_town.png";
  } else if (townId === "castle") {
    bg = "./assets/img/bg_castle_town.png";
  } else if (townId === "village") {
    bg = "./assets/img/bg_village_town.png";
  }

  if (bg) {
    document.body.style.backgroundImage = `url(${bg})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
  }

  disableCommands();

  if (commandPanel) commandPanel.style.display = "none";
  if (enemyHPBox) enemyHPBox.style.display = "none";

  if (inventoryBox) inventoryBox.classList.remove("is-open");
  if (skillBox) {
    skillBox.classList.remove("is-open");
    skillBox.style.display = "none";
  }
  if (statusBox) {
    statusBox.classList.remove("is-open");
    statusBox.style.display = "none";
  }
  if (enemyPicture) enemyPicture.style.display = "none";

  updateMarciaTownButtons(townId);
}

function closeTownMap() {
  if (!townOverlay) return;

  townOverlay.classList.remove("is-open");
  townOverlay.setAttribute("aria-hidden", "true");

  if (commandPanel) commandPanel.style.display = "";
  
  if (enemyHPBox) enemyHPBox.style.display = "";

  
  if (enemyPicture) enemyPicture.style.display = "";
}

function refreshStoryMapUI() {
  document.querySelectorAll(".map_node").forEach(node => {
    const mapId = node.dataset.map;
    const map = STORY_MAPS[mapId];
    if (!map) {
      node.style.display = "none";
      return;
    }

    node.style.display = map.unlocked ? "" : "none";
    node.classList.toggle("is-locked", !map.unlocked);
  });
}

function playMapIntro(mapId, onComplete) {
  const map = STORY_MAPS[mapId];
  if (!map) return;

  disableCommands();

  if (Array.isArray(map.story)) {
    map.story.forEach(line => addLog(line));
  }

  map.visited = true;

  setTimeout(() => {
    if (typeof onComplete === "function") onComplete();
  }, (map.story?.length || 1) * 800);
}

function playMapStory(mapId) {
  const map = STORY_MAPS[mapId];
  if (!map) return;

  if (map.background) {
    document.body.style.backgroundImage = `url(${map.background})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
  }

  if (Array.isArray(map.intro)) {
    map.intro.forEach(line => addLog(line));
  }
}

function startMapStory(mapId) {
  clearBattleState();
  if (forceGladioOnly && mapId === "gladio") {
    forceGladioOnly = false;
    saveStoryFlags();
  }

  if (mapId === "volcano_summit") {
  openIgnarionBoss();
  return;
}

  if (mapId === "village" && kalmVillageLocked) {
    storyOverlay?.classList.remove("is-open");
    storyOverlay?.setAttribute("aria-hidden", "true");

    openStoryScene([
      {
        type: "summary",
        text: "カルム村の入口が見える。"
      },
      {
        type: "summary",
        text: "だが――クレスは足を止めた。"
      },
      {
        type: "dialogue",
        name: "クレス",
        side: "right",
        face: "./assets/img/kuresu.dia.png",
        text: "……ここには戻れない"
      },
      {
        type: "dialogue",
        name: "クレス",
        side: "right",
        face: "./assets/img/kuresu.dia.png",
        text: "俺が関われば、また村の人たちを危険に晒す"
      },
      {
        type: "summary",
        text: "クレスは静かに背を向けた。"
      }
    ], () => {
      storyOverlay?.classList.add("is-open");
      storyOverlay?.setAttribute("aria-hidden", "false");
    });
    return;
  }

  const map = STORY_MAPS[mapId];
  if (!map || !map.unlocked) return;

  setCurrentMap(mapId);
  storyBattleMode = map.type !== "town";

  if (map.background) {
    document.body.style.backgroundImage = `url(${map.background})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
  }

  storyOverlay?.classList.remove("is-open");
  storyOverlay?.setAttribute("aria-hidden", "true");
  if (
  mapId === "village" &&
  valdoreinDefeated &&
  !peaceVillageStoryDone
) {
  peaceVillageStoryDone = true;
  saveStoryFlags();

  openStoryScene(PEACE_VILLAGE_STORY, () => {
    openMapOverlay("village");
  });
  return;
}

if (
  mapId === "plain" &&
  valdoreinDefeated &&
  !peacePlainStoryDone
) {
  peacePlainStoryDone = true;
  saveStoryFlags();

  openStoryScene(PEACE_PLAIN_STORY, () => {
    const enemies = getRandomEnemiesForCurrentMap();
    if (!enemies.length) {
      addLog("このマップの敵データはまだ未実装です。");
      return;
    }
    loadEnemy(enemies);
    startTurnLoop();
  });
  return;
}

if (
  mapId === "marcia" &&
  valdoreinDefeated &&
  !peaceMarciaStoryDone
) {
  peaceMarciaStoryDone = true;
  saveStoryFlags();

  openStoryScene(PEACE_MARCIA_STORY, () => {
    openTownMap("marcia");
  });
  return;
}

if (
  mapId === "gladio" &&
  valdoreinDefeated &&
  !peaceGladioStoryDone
) {
  peaceGladioStoryDone = true;
  saveStoryFlags();

  openStoryScene(PEACE_GLADIO_STORY, () => {
    const enemies = getRandomEnemiesForCurrentMap();
    if (!enemies.length) {
      addLog("このマップの敵データはまだ未実装です。");
      return;
    }
    loadEnemy(enemies);
    startTurnLoop();
  });
  return;
}

if (
  mapId === "lumenia" &&
  valdoreinDefeated &&
  !peaceLumeniaStoryDone
) {
  peaceLumeniaStoryDone = true;
  saveStoryFlags();

  openStoryScene(PEACE_LUMENIA_STORY, () => {
    openTownMap("lumenia");
  });
  return;
}

  // マルシア再訪イベントはここに移動
  if (
    mapId === "marcia" &&
    heroCressAwakened &&
    STORY_MAPS.marcia?.visited &&
    !marciaHeroStoryDone
  ) {
    marciaHeroStoryDone = true;
    saveStoryFlags();

    openStoryScene(MARCIA_HERO_RETURN_STORY, () => {
      openTownMap("marcia");
    });
    return;
  }

  if (
    mapId === "gladio" &&
    STORY_MAPS.lumenia?.visited &&
    (getUnitState("cress")?.level ?? 1) >= 45 &&
    !gladioReturnFromLumeniaEventDone
  ) {
    gladioReturnFromLumeniaEventDone = true;
    zeekReunionEventDone = true;
    saveStoryFlags();

    openStoryScene(GLADIO_RETURN_ZEEK_EVENT, () => {
      startZeekJoinBattle();
    });
    return;
  }

  const onMapStart = () => {
    if (mapId === "castle") {
      openMapOverlay("castle");
      return;
    }

    if (map.type === "town") {
      openTownMap(mapId);
      return;
    }

    const enemies = getRandomEnemiesForCurrentMap();
    if (!enemies.length) {
      addLog("このマップの敵データはまだ未実装です。");
      return;
    }

    loadEnemy(enemies);
    startTurnLoop();
  };

  if (!map.visited && Array.isArray(map.intro) && map.intro.length > 0) {
  map.visited = true;
  saveStoryFlags();
  openStoryScene(map.intro, onMapStart);
} else {
  onMapStart();
}
}

function resumeCurrentMap() {
  const map = STORY_MAPS[currentMap];
  if (!map) return;

  applyCurrentMapBackground();

  if (map.type === "town") {
    openTownMap(currentMap);
    return;
  }

  const enemies = getRandomEnemiesForCurrentMap();
  if (!enemies.length) {
    addLog(`${currentMap} の敵データが見つからない。`);
    return;
  }

  loadEnemy(enemies);
  startTurnLoop();
}

function getDragonGemDataByName(name) {
  return Object.values(DRAGON_GEMS).find(g => g.name === name || g.key === name) || null;
}

function addBonusToStats(target, bonus = {}) {
  for (const [key, value] of Object.entries(bonus)) {
    if (typeof value !== "number") continue;
    if (typeof target[key] !== "number") target[key] = 0;
    target[key] += value;
  }
  return target;
}

function checkMapUnlocks() {
  const cress = getUnitState("cress");
  if (!cress) return;

  const level = cress.level;
  let unlockedAny = false;

  Object.values(STORY_MAPS).forEach(map => {
    if (!map.unlocked && level >= map.unlockLevel) {
      map.unlocked = true;
      unlockedAny = true;
      addLog(`新しいマップ「${map.name}」が開放された！`);
    }
  });

  if (unlockedAny) {
    refreshStoryMapUI();
  }
}


//TODO 村イベント
function openVillageChiefHouse() {
  isMapEventMode = true;

  if (villageChiefEventDone) {
    showMapMessage("村長の家だ。もう話は聞いた。");
    isMapEventMode = false;
    openMapOverlay(currentMap);
    return;
  }

  villageChiefEventDone = true;
  saveStoryFlags();
  

  keepBattleUIHiddenAfterStory = true;

  openStoryScene(VILLAGE_CHIEF_EVENT, () => {
    keepBattleUIHiddenAfterStory = false;

    invAdd("癒しの果実", 1);
    showMapMessage("癒しの果実を1個手に入れた！");
    renderInventoryList();

    isMapEventMode = false;
    openMapOverlay(currentMap);
  });
}

function openVillageTreasureHintHouse() {
  isMapEventMode = true;
  keepBattleUIHiddenAfterStory = true;

  if (villageTreasureHintShown) {
    showMapMessage("この家の村人は、村のどこかに宝があると話していた。");
    isMapEventMode = false;
    openMapOverlay(currentMap);
    return;
  }

  villageTreasureHintShown = true;
  saveStoryFlags();

  openStoryScene([
    {
      type: "dialogue",
      name: "村人",
      side: "left",
      face: "./assets/img/villager.png",
      text: "そういえばこの村のどこかに、昔の旅人が隠した宝があるって話を聞いたことがあるよ"
    },
    {
      type: "dialogue",
      name: "村人",
      side: "left",
      face: "./assets/img/villager.png",
      text: "川辺のほうが怪しいって噂だけど……本当かどうかは分からないね"
    },
    {
      type: "summary",
      text: "このマップのどこかに宝があるらしい。"
    }
  ], () => {
    keepBattleUIHiddenAfterStory = false;
    isMapEventMode = false;
    openMapOverlay(currentMap);
  });
}

function openVillageRebellionHouse() {
  isMapEventMode = true;
  keepBattleUIHiddenAfterStory = true;

  if (villageRebellionTalkDone) {
    showMapMessage("村人はまだ王都の反乱を不安がっている。");
    isMapEventMode = false;
    openMapOverlay(currentMap);
    return;
  }

  villageRebellionTalkDone = true;
  saveStoryFlags();

  openStoryScene(VILLAGE_PEOPLE_EVENT, () => {
    keepBattleUIHiddenAfterStory = false;
    isMapEventMode = false;
    openMapOverlay(currentMap);
  });
}

function openVillageTreasure() {
  isMapEventMode = true;
  if (villageTreasureOpened) {
    showMapMessage("宝箱はすでに空っぽだ。");
    
    openMapOverlay(currentMap);
    return;
  }

  villageTreasureOpened = true;
  gold += 3000;
  saveStoryFlags();
  updateGoldUI();

  showMapMessage("宝箱を開けた！");
  showMapMessage("3000Gを手に入れた！");
  isMapEventMode = false;
    openMapOverlay(currentMap);
}

function openVillageOldmanHouse() {
  isMapEventMode = true;
  keepBattleUIHiddenAfterStory = true;

  if (villageOldmanTalkDone) {
    showMapMessage("老人は、古い城の地下に妙な空間があるという話をしていた。");
    isMapEventMode = false;
    openMapOverlay(currentMap);
    return;
  }

  villageOldmanTalkDone = true;
  saveStoryFlags();

  openStoryScene(VILLAGE_OLDMAN_EVENT, () => {
    keepBattleUIHiddenAfterStory = false;
    isMapEventMode = false;
    openMapOverlay(currentMap);
  });
}

function triggerLevel5VillageExit() {
  const cress = getUnitState("cress");
  if (!cress) return;
  if (level5StoryPlayed) return;
  if (cress.level < 5) return;
  if (!defeatedPursuerBattle) return;

  level5StoryPlayed = true;
  kalmVillageLocked = true;
  STORY_MAPS.plain.unlocked = true;

  openStoryScene(POST_BATTLE_LEVEL5_STORY, () => {
    addLog("カルム村にはもう戻れない。");
    addLog("新しいマップ「アルディア平原」が開放された！");
    refreshStoryMapUI();

    storyOverlay?.classList.add("is-open");
    storyOverlay?.setAttribute("aria-hidden", "false");
  });
}
const VILLAGE_CHIEF_PEACE_EVENT = [
  {
    type: "dialogue",
    name: "村長",
    side: "left",
    face: "./assets/img/village_chief.png",
    text: "おお、クレス……よく戻ってきてくれたのう"
  },
  {
    type: "dialogue",
    name: "村長",
    side: "left",
    face: "./assets/img/village_chief.png",
    text: "ヴァルドレインが討たれたと聞いた時は、村中が息をのんだものじゃ"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……みんなが無事でいてくれたなら、それでいい"
  },
  {
    type: "dialogue",
    name: "村長",
    side: "left",
    face: "./assets/img/village_chief.png",
    text: "おぬしが守ろうとしたものは、確かにここに残っておる"
  },
  {
    type: "dialogue",
    name: "村長",
    side: "left",
    face: "./assets/img/village_chief.png",
    text: "もう、この村は怯えるだけの場所ではない。皆、少しずつ前を向き始めておるよ"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……そうか"
  },
  {
    type: "summary",
    text: "村長の言葉は、長い戦いの果てにようやく訪れた安らぎを感じさせた。"
  }
];

const VILLAGE_PEOPLE_PEACE_EVENT = [
  {
    type: "dialogue",
    name: "村人",
    side: "left",
    face: "./assets/img/villager.png",
    text: "最近は夜も静かでさ、子どもたちもやっと安心して眠れてるんだ"
  },
  {
    type: "dialogue",
    name: "村人",
    side: "left",
    face: "./assets/img/villager.png",
    text: "前は空を見上げるたびに不安だったけど、今は風まで優しく感じるよ"
  },
  {
    type: "dialogue",
    name: "クレス",
    side: "right",
    face: "./assets/img/kuresu.dia.png",
    text: "……平和が戻ったなら、何よりだ"
  },
  {
    type: "summary",
    text: "村人の表情には、かつての怯えではなく穏やかな安堵が浮かんでいた。"
  }
];


//TODOアルディア
function checkAndOpenAzureSanctuary() {
  const front = getUnitState(party.front);
  if (!front) return false;

  const level = front.level ?? front.st?.level ?? 0;

  if (level >= 40 && valdoreinDefeated && !azureSanctuaryOpened) {
    azureSanctuaryOpened = true;
    saveStoryFlags?.();
    addLog("アルディア平原に『蒼穹の祭壇』が出現した！");
    return true;
  }

  return false;
}

function openAzraelEvent() {
  if (azraelDefeated) {
    openStoryScene([
      {
        type: "summary",
        text: "蒼穹の祭壇には、今も静かな蒼い気配だけが満ちている。"
      }
    ], () => {
      openMapOverlay("plain");
    });
    return;
  }

  openStoryScene([
    {
      type: "summary",
      text: "アルディア平原の果てに、空へ溶けるような蒼い神域が広がっていた。"
    },
    {
      type: "summary",
      text: "祭壇の中央に集まった蒼光は、やがて巨大な竜の姿を形作る。"
    },
    {
      type: "dialogue",
      name: "アズラエル",
      side: "left",
      text: "……人の子よ。ここへ至った理由を答えよ"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      face: "./assets/img/kuresu.dia.png",
      text: "先へ進むためだ。力を奪うためじゃない。確かめに来た"
    },
    {
      type: "dialogue",
      name: "アズラエル",
      side: "left",
      text: "ヴァルドレインを討ち、なお慢心せぬか。ならば問おう――貴様は何を守る"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      face: "./assets/img/kuresu.dia.png",
      text: "失われた過去じゃない。これから取り戻す未来だ"
    },
    {
      type: "dialogue",
      name: "アズラエル",
      side: "left",
      text: "よかろう。その意志が本物か、我が蒼き試練で示してみせよ"
    }
  ], () => {
    azraelIntroPlayed = true;
    saveStoryFlags?.();
    startAzraelBattle();
  });
}

function startAzraelBattle() {
  const enemy = makeStoryEnemy("azrael");
  if (!enemy) {
    addLog("蒼神竜アズラエルのデータが見つかりません。");
    openMapOverlay("plain");
    return;
  }

  storyBattleMode = true;
  setCurrentMap("plain");

  document.body.style.backgroundImage = `url("./assets/img/bg_azure_sanctuary.png")`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";

  loadEnemy([{
    ...enemy,
    uid: `azrael_${Date.now()}`,
    hpMax: enemy.hp
  }]);

  addLog("蒼神竜アズラエルが静かに姿を現した……！");
  startTurnLoop();
}


//TODO マルシア
function renderMerudiOverlay() {
  if (!merudiBody) return;

  if (!merudiMansionEventDone) {
    merudiBody.innerHTML = `
      <p>重厚な門の奥に、静かな空気が漂っている。</p>
      <p>名門の屋敷らしいが、人の姿は見えない。</p>
    `;
  } else {
    merudiBody.innerHTML = `
      <p>メルディの屋敷だ。</p>
      <p>門の奥は相変わらず静まり返っている。</p>
    `;
  }
}

function openMerudiOverlay() {
  if (!merudiMansionUnlocked) {
    addLog("まだ行けない場所だ。");
    return;
  }

  renderMerudiOverlay();
  openFacilityOverlay(merudiOverlay);

  if (!merudiMansionEventDone) {
    closeFacilityOverlay(merudiOverlay);
    openMerudiMansion();
  }
}



function handleArenaVictory(rank) {
  addLog(`闘技場・${ARENA_REWARDS[rank]?.label || rank}で勝利した！`);

  if (rank === "master") {
    giveArenaMasterReward();
    currentArenaRank = null;
    return;
  }

  openArenaRewardChoice(rank);
}

function giveArenaItemGoldReward(rank) {
  const reward = ARENA_REWARDS[rank];
  if (!reward) return;

  const itemName = reward.itemReward.name;
  const goldAmount = reward.itemReward.gold;

  invAdd(itemName, 1);
  gold += goldAmount;
  updateGoldUI();
  renderInventoryList();

  addLog(`${itemName}を手に入れた！`);
  addLog(`${goldAmount}Gを手に入れた！`);

  currentArenaRank = null;
  openArenaOverlay();
}

function giveArenaPointReward(rank) {
  const reward = ARENA_REWARDS[rank];
  if (!reward) return;

  arenaPoints += reward.pointReward;
  localStorage.setItem("arenaPoints", String(arenaPoints));

  addLog(`闘技場ポイントを${reward.pointReward}獲得した！`);
  addLog(`現在の闘技場ポイント: ${arenaPoints}pt`);

  currentArenaRank = null;
  openArenaOverlay();
}

function giveArenaMasterReward() {
  invAdd("伝説の剣", 1);
  arenaPoints += 3000;
  localStorage.setItem("arenaPoints", String(arenaPoints));

  renderInventoryList();
  updateGoldUI();

  addLog("伝説の剣を手に入れた！");
  addLog("闘技場ポイントを3000獲得した！");
  addLog(`現在の闘技場ポイント: ${arenaPoints}pt`);

  currentArenaRank = null;
  openArenaOverlay();
}

function openArenaRewardChoice(rank) {
  const reward = ARENA_REWARDS[rank];
  if (!reward) return;

  const ok = confirm(
    `報酬を選んでください。\n\n` +
    `OK: ${reward.itemReward.name} + ${reward.itemReward.gold}G\n` +
    `キャンセル: 闘技場ポイント ${reward.pointReward}pt`
  );

  if (ok) {
    giveArenaItemGoldReward(rank);
  } else {
    giveArenaPointReward(rank);
  }
}



//TODO 砂漠イベント
function getRandomBottleLetter() {
  return BOTTLE_LETTERS[rand(0, BOTTLE_LETTERS.length - 1)];
}

function openDesertOasis() {
  isMapEventMode = true;
  keepBattleUIHiddenAfterStory = true;

  // 初回
  if (!oasisIntroSeen) {
    oasisIntroSeen = true;
    saveStoryFlags();

    openStoryScene(DESERT_OASIS_EVENT, (result) => {
      if (result !== "dive") {
        keepBattleUIHiddenAfterStory = false;
        isMapEventMode = false;
        openMapOverlay("desert");
        return;
      }

      handleDesertOasisDive();
    });

    return;
  }

  // 二回目以降
  openStoryScene(DESERT_OASIS_SELECT_ONLY_EVENT, (result) => {
    if (result !== "dive") {
      keepBattleUIHiddenAfterStory = false;
      isMapEventMode = false;
      openMapOverlay("desert");
      return;
    }

    handleDesertOasisDive();
  });
}

function handleDesertOasisDive() {
  const roll = Math.random() * 100;

  // 0.5%
  if (!oasisDrainFound && roll < 0.5) {
    oasisDrainFound = true;
    saveStoryFlags();

    openStoryScene(DESERT_OASIS_DRAIN_FOUND_EVENT, (result) => {
      if (result === "drain") {
        oasisDrainOpened = true;
        saveStoryFlags();

        openStoryScene([
          {
            type: "summary",
            text: "栓を引き抜いた瞬間、轟音とともに水が渦を巻いて流れ始めた。"
          },
          {
            type: "summary",
            text: "オアシスの底に、奥へ続く洞窟の入口が姿を現す。"
          },
          {
            type: "dialogue",
            name: "クレス",
            side: "right",
            face: "./assets/img/kuresu.dia.png",
            text: "……こんな場所が隠されていたのか"
          },
          {
            type: "choice",
            choices: [
              {
                text: "奥の洞窟へ進む",
                result: "go_cave"
              },
              {
                text: "今は戻る",
                result: "leave"
              }
            ]
          }
        ], (caveResult) => {
          keepBattleUIHiddenAfterStory = false;
          isMapEventMode = false;

          if (caveResult === "go_cave") {
            addLog("オアシスの奥にある洞窟へ進んだ。");
            // ここに今後 洞窟イベント or 専用マップ遷移
          }

          openMapOverlay("desert");
        });
      } else {
        keepBattleUIHiddenAfterStory = false;
        isMapEventMode = false;
        openMapOverlay("desert");
      }
    });

    return;
  }

  // 次の10% → 下級魔石
  if (roll < 10.5) {
    invAdd("下級魔石", 1);
    renderInventoryList();

    openStoryScene([
      {
        type: "summary",
        text: "水の底で、小さく光る鉱石を見つけた。"
      },
      {
        type: "summary",
        text: "下級魔石を1個手に入れた。"
      }
    ], () => {
      keepBattleUIHiddenAfterStory = false;
      isMapEventMode = false;
      openMapOverlay("desert");
    });

    return;
  }

  // 次の10% → ビンに入った手紙
  if (roll < 20.5) {
    const letterText = getRandomBottleLetter();

    openStoryScene([
      {
        type: "summary",
        text: "水辺に、栓のされた古いビンが流れ着いていた。"
      },
      {
        type: "summary",
        text: "中には手紙が入っている。"
      },
      {
        type: "summary",
        text: letterText
      }
    ], () => {
      keepBattleUIHiddenAfterStory = false;
      isMapEventMode = false;
      openMapOverlay("desert");
    });

    return;
  }

  // それ以外
  openStoryScene([
    {
      type: "summary",
      text: "冷たい水の中を探ってみたが、特に何も見つからなかった。"
    }
  ], () => {
    keepBattleUIHiddenAfterStory = false;
    isMapEventMode = false;
    openMapOverlay("desert");
  });
}

function openDesertMonsterNest() {
  addLog("砂漠の奥に潜む魔物の巣だ。");
  startStoryStageBattle();
}

function openDesertHouse() {
  isMapEventMode = true;
  keepBattleUIHiddenAfterStory = true;

  if (desertHouseTalkDone) {
    showMapMessage("住人は、オアシスは百年前に突然現れたものだと話していた。");
    isMapEventMode = false;
    openMapOverlay("desert");
    return;
  }

  desertHouseTalkDone = true;
  saveStoryFlags();

  openStoryScene(DESERT_HOUSE_EVENT, () => {
    keepBattleUIHiddenAfterStory = false;
    isMapEventMode = false;
    openMapOverlay("desert");
  });
}

function openRedDragonJaw() {
  isMapEventMode = true;
  keepBattleUIHiddenAfterStory = true;

  if (redDragonFangTaken) {
    showMapMessage("もう抜けそうな牙はない。");
    isMapEventMode = false;
    openMapOverlay("desert");
    return;
  }

  redDragonFangTaken = true;
  saveStoryFlags();
  invAdd("赤竜の牙", 1);
  renderInventoryList();

  openStoryScene(RED_DRAGON_JAW_EVENT, () => {
    keepBattleUIHiddenAfterStory = false;
    isMapEventMode = false;
    openMapOverlay("desert");
  });
}

function openGraniusEvent() {
  if (graniusDefeated) {
    openStoryScene([
      {
        type: "summary",
        text: "かつて岩神竜グラニウスが姿を現した巣には、今は重く静かな気配だけが残っている。"
      }
    ], () => {
      openMapOverlay("desert");
    });
    return;
  }

  openStoryScene([
    {
      type: "summary",
      text: "魔物の巣の奥から、地鳴りのような低い唸りが響く。"
    },
    {
      type: "summary",
      text: "砂が弾け、大地そのものが盛り上がるように巨大な影が現れた。"
    },
    {
      type: "dialogue",
      name: "メルディ",
      side: "left",
      face: "./assets/img/merudi.dia.png",
      text: "……来る。これ、普通の魔物じゃない……！"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      face: "./assets/img/kuresu.dia.png",
      text: "巣の主ってわけか……！"
    },
    {
      type: "summary",
      text: "岩を纏う巨竜が、砂塵を巻き上げながら姿を現した――"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      face: "./assets/img/kuresu.dia.png",
      text: "……岩神竜グラニウス！"
    }
  ], () => {
    graniusIntroPlayed = true;
    saveStoryFlags?.();
    startGraniusBattle();
  });
}

function startGraniusBattle() {
  const enemy = makeStoryEnemy("granius");
  if (!enemy) {
    addLog("岩神竜グラニウスのデータが見つかりません。");
    openMapOverlay("desert");
    return;
  }

  storyBattleMode = true;
  setCurrentMap("desert");

  document.body.style.backgroundImage = `url("./assets/img/bg_desert_nest.png")`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";

  loadEnemy([{
    ...enemy,
    uid: `granius_${Date.now()}`,
    hpMax: enemy.hp
  }]);

  addLog("岩神竜グラニウスが立ちはだかった！");
  startTurnLoop();
}


//TODO グラディオ関連イベント
function startGladioCastleEvent(){

openStoryScene(GLADIO_CASTLE_STORY, ()=>{

loadEnemy([
makeStoryEnemy("zeek")
]);

startTurnLoop();

});

}

function finishZeekBattle() {
  disableCommands();
  storyBattleMode = false;

  const front = getUnitState(party.front);
  if (front) {
    front.hp = Math.max(1, Math.floor(front.maxHP * 0.1));
  }

  if (party.back) {
    const back = getUnitState(party.back);
    if (back) {
      back.hp = Math.max(1, Math.floor(back.maxHP * 0.2));
    }
  }

  if (party.front) applyUnitToCurrent(party.front);
  updatePlayerHP();

  openStoryScene(ZEEK_AFTER_BATTLE_STORY, () => {
    zeekDefeatedInGladio = true;
    gladioRouteFound = true;
    STORY_MAPS.lumenia.unlocked = true;

    // 追加
    forceLumeniaOnly = true;

    saveStoryFlags();
    refreshStoryMapUI();

    storyOverlay?.classList.add("is-open");
    storyOverlay?.setAttribute("aria-hidden", "false");
  });
}

function openGladioTower() {
  if (gladioTowerCleared) {
    showMapMessage("見張り塔はすでに踏破した。この先は玉座の間へ進める。");
    openMapOverlay("gladio");
    return;
  }

  gladioTowerFloor++;
  if (gladioTowerFloor > 3) gladioTowerFloor = 3;

  const floor = gladioTowerFloor;
  const enemyIds = GLADIO_TOWER_ENEMIES[floor] || ["skeleton"];

  const enemies = enemyIds
    .map(id => makeStoryEnemy(id))
    .filter(Boolean)
    .map((enemy, i) => ({
      ...enemy,
      uid: `${enemy.id || enemy.name}_tower_${floor}_${i}`,
      hpMax: enemy.hp
    }));

  addLog(`見張り塔・${floor}階に突入した！`);

  storyBattleMode = true;
  setCurrentMap("gladio");

  loadEnemy(enemies);
  startTurnLoop();
}

function openGladioBossEvent() {
  if (!gladioTowerCleared) {
    showMapMessage("玉座の間へ続く道は閉ざされている。見張り塔を攻略する必要がありそうだ。");
    openMapOverlay("gladio");
    return;
  }

  if (gladioBossEventDone) {
    showMapMessage("ここでジークと対峙した……張り詰めた空気が残っている。");
    openMapOverlay("gladio");
    return;
  }

  gladioBossEventDone = true;

  openStoryScene([
    {
      type: "summary",
      text: `崩れた玉座の間。\n\nその奥に、一人の男が静かに立っていた。`
    },
    {
      type: "dialogue",
      name: "ジーク",
      side: "left",
      face: "./assets/img/zeek.dia.png",
      text: "……ようやく来たか"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      face: "./assets/img/kuresu.dia.png",
      text: "ジーク……"
    },
    {
      type: "dialogue",
      name: "ジーク",
      side: "left",
      face: "./assets/img/zeek.dia.png",
      text: "レオニス王城直属、処断執行人ジーク"
    },
    {
      type: "dialogue",
      name: "ジーク",
      side: "left",
      face: "./assets/img/zeek.dia.png",
      text: "ここでお前たちを処断する"
    },
    {
      type: "dialogue",
      name: "メルディ",
      side: "left",
      face: "./assets/img/merudi.dia.png",
      text: "来るよ……！"
    }
  ], () => {
    startZeekBossBattle();
  });
}

function startZeekBossBattle() {
  zeekBattleTurn = 0;
  storyBattleMode = true;
  setCurrentMap("gladio");

  const enemy = makeStoryEnemy("zeek");
  if (!enemy) {
    addLog("ジークの敵データが見つかりません。");
    return;
  }

  loadEnemy([
    {
      ...enemy,
      uid: `zeek_${Date.now()}`,
      hpMax: enemy.hp
    }
  ]);

  addLog("ジークとの戦いが始まった！");
  startTurnLoop();
}

function openGladioHall() {
  isMapEventMode = true;
  keepBattleUIHiddenAfterStory = true;

  if (!gladioUndergroundOpened) {
    openStoryScene(GLADIO_HALL_BLOCKED_EVENT, () => {
      keepBattleUIHiddenAfterStory = false;
      isMapEventMode = false;
      openMapOverlay("gladio");
    });
    return;
  }

  openStoryScene(GLADIO_HALL_OPEN_EVENT, (result) => {
    keepBattleUIHiddenAfterStory = false;
    isMapEventMode = false;

    if (result === "go") {
  enterGladioUnderground();
} else {
  openMapOverlay("gladio");
}
  });
}

function enterGladioUnderground() {
  gladioUndergroundEntered = true;
  if (gladioUndergroundFloor <= 0) gladioUndergroundFloor = 1;

  STORY_MAPS.gladio_underground.unlocked = true;
  setCurrentMap("gladio_underground");
  saveStoryFlags();

  applyGladioUndergroundVisuals();

  openStoryScene([
    {
      type: "summary",
      text: `中央ホールの縦穴を下りた先には、さらに深い石造迷宮が広がっていた。`
    },
    {
      type: "dialogue",
      name: "セリオス",
      side: "left",
      face: "./assets/img/seriosu.dia.png",
      text: "……おかしい。この城に、これほど深い地下構造があった記録はありません"
    },
    {
      type: "dialogue",
      name: "メルディ",
      side: "left",
      face: "./assets/img/merudi.dia.png",
      text: "……いやな感じ。ここ、ただの地下じゃない"
    }
  ], () => {
    openMapOverlay("gladio_underground");
  });
}

function descendGladioUnderground() {
  if (gladioUndergroundFloor <= 0) gladioUndergroundFloor = 1;

  const nextFloor = gladioUndergroundFloor + 1;

  if (nextFloor >= 20 && !canReachTrue20thFloor()) {
    triggerGladioUndergroundFalseArrival();
    return;
  }

  gladioUndergroundFloor = nextFloor;
  gladioUndergroundTrueOpened = canReachTrue20thFloor();
  saveStoryFlags();

  if (gladioUndergroundFloor === 20) {
    triggerGladioUndergroundTrue20();
    return;
  }

  triggerGladioUndergroundFloorEvent(gladioUndergroundFloor, () => {
    setCurrentMap("gladio_underground");
    applyGladioUndergroundVisuals();
    startStoryStageBattle();
  });
}

function triggerGladioUndergroundFloorEvent(floor, onComplete) {
  let pages = [
    {
      type: "summary",
      text: `地下迷宮の${floor}階へ降りた。冷気とも瘴気ともつかない空気がまとわりつく。`
    }
  ];

  if (floor === 3) {
    pages.push({
      type: "dialogue",
      name: "セリオス",
      side: "left",
      face: "./assets/img/seriosu.dia.png",
      text: "……さきほどから、誰かの足音が聞こえませんか"
    });
  }

  if (floor === 7) {
    pages.push(
      {
        type: "dialogue",
        name: "メルディ",
        side: "left",
        face: "./assets/img/merudi.dia.png",
        text: "ねえ……今、後ろで私の声がした"
      },
      {
        type: "summary",
        text: "誰もいないはずの暗がりから、かすかに笑い声のようなものが響いた。"
      }
    );
  }

  if (floor === 11) {
    pages.push(
      {
        type: "dialogue",
        name: "セリオス",
        side: "left",
        face: "./assets/img/seriosu2.dia.png",
        text: "殿下、本当に進むおつもりですか……？ もう戻れない気がする"
      },
      {
        type: "summary",
        text: "壁の向こうから、低い囁き声が絶え間なく流れ込んでくる。"
      }
    );
  }

  if (floor === 15) {
    pages.push(
      {
        type: "dialogue",
        name: "メルディ",
        side: "left",
        face: "./assets/img/merudi.dia.png",
        text: "……違う、これは魔力じゃない。何かが私たちを見てる"
      },
      {
        type: "summary",
        text: "視界の端で、存在しないはずの階段が何本も折り重なって見えた。"
      }
    );
  }

  if (floor === 18) {
    pages.push(
      {
        type: "dialogue",
        name: "？？？",
        side: "left",
        text: "――ここまで来たか"
      },
      {
        type: "dialogue",
        name: "セリオス",
        side: "left",
        face: "./assets/img/seriosu2.dia.png",
        text: "……今の声は、聞こえましたよね"
      }
    );
  }

  if (floor === 19) {
    pages.push(
      {
        type: "summary",
        text: "十九階。だが、降りてきたはずなのに、どこか見覚えのある冷たい風が吹いている。"
      },
      {
        type: "dialogue",
        name: "メルディ",
        side: "left",
        face: "./assets/img/merudi.dia.png",
        text: "……変だよ。下ってるのに、上に近づいてる"
      }
    );
  }

  openStoryScene(pages, onComplete);
}

function triggerGladioUndergroundFalseArrival() {
  gladioUndergroundLoopSeen = true;
  gladioUndergroundFloor = 0;
  setCurrentMap("gladio");
  saveStoryFlags();

  openStoryScene([
    {
      type: "summary",
      text: `さらに一階下へ降りた――その瞬間、視界が大きく歪んだ。`
    },
    {
      type: "summary",
      text: `気づくとクレスたちは、グラディオ廃城の地上・中央ホールに立っていた。`
    },
    {
      type: "dialogue",
      name: "セリオス",
      side: "left",
      face: "./assets/img/seriosu2.dia.png",
      text: "……ありえない。十九階から、どうして地上へ……"
    },
    {
      type: "dialogue",
      name: "メルディ",
      side: "left",
      face: "./assets/img/merudi.dia.png",
      text: "足りないんだと思う。降りるための力か、守るための何かが"
    },
    {
      type: "summary",
      text: "この迷宮は、ただ下るだけでは最深部へ辿り着けないようだ。"
    }
  ], () => {
    openMapOverlay("gladio");
  });
}

function triggerGladioUndergroundTrue20() {
  setCurrentMap("gladio_underground");
  applyGladioUndergroundVisuals();
  saveStoryFlags();

  openStoryScene([
    {
      type: "summary",
      text: `十九階の先で、はじめて本当の意味で“下り階段”が現れた。`
    },
    {
      type: "dialogue",
      name: "セリオス",
      side: "left",
      face: "./assets/img/seriosu.dia.png",
      text: "王家の装備が、この空間の歪みを拒絶している……？"
    },
    {
      type: "dialogue",
      name: "メルディ",
      side: "left",
      face: "./assets/img/merudi.dia.png",
      text: "うん……それに、もう飲まれない。私が、みんなを繋ぎ止める"
    },
    {
      type: "summary",
      text: `二十階。\n\nそこには“絶望”が待っていた。`
    }
  ], () => {
    startGladioDespairBossBattle();
  });
}

function startGladioDespairBossBattle() {
  const enemy = makeStoryEnemy("despair");
  if (!enemy) {
    addLog("絶望の敵データが見つかりません。");
    return;
  }

  storyBattleMode = true;
  setCurrentMap( "gladio_underground");
  applyGladioUndergroundVisuals();

  loadEnemy([{
    ...enemy,
    uid: `despair_${Date.now()}`,
    hpMax: enemy.hp
  }]);

  addLog("最深部の闇が形を持ち始める――『絶望』が現れた！");
  startTurnLoop();
}

function openGladioPrison() {
  isMapEventMode = true;
  keepBattleUIHiddenAfterStory = true;

  if (gladioBeautyMonsterDefeated) {
    showMapMessage("牢屋には、破れた鎖だけが残っている。");
    isMapEventMode = false;
    openMapOverlay("gladio");
    return;
  }

  if (gladioPrisonEventDone) {
    showMapMessage("牢屋の奥から、不気味な気配が漂っている……");
    isMapEventMode = false;
    openMapOverlay("gladio");
    return;
  }

  gladioPrisonEventDone = true;

  openStoryScene(GLADIO_PRISON_EVENT, (result) => {
    if (result === "release") {
      gladioBeautyReleased = true;

      openStoryScene(GLADIO_PRISON_RELEASE_EVENT, () => {
        startGladioPrisonBossBattle();
      });
    } else {
      keepBattleUIHiddenAfterStory = false;
      isMapEventMode = false;
      openMapOverlay("gladio");
    }
  });
}

function startGladioPrisonBossBattle() {
  const enemy = makeStoryEnemy("mimic_beauty");
  if (!enemy) {
    addLog("牢屋の敵データが見つかりません。");
    keepBattleUIHiddenAfterStory = false;
    isMapEventMode = false;
    openMapOverlay("gladio");
    return;
  }

  storyBattleMode = true;
  setCurrentMap("gladio");

  loadEnemy([{
    ...enemy,
    uid: `mimic_beauty_${Date.now()}`,
    hpMax: enemy.hp
  }]);

  addLog("妖艶の擬態魔が襲いかかってきた！");
  keepBattleUIHiddenAfterStory = false;
  isMapEventMode = false;
  startTurnLoop();
}

function playGladioReturnFromLumeniaEvent() {
  isMapEventMode = true;
  keepBattleUIHiddenAfterStory = true;

  setCurrentMap("gladio");

  openStoryScene(GLADIO_RETURN_AFTER_LUMERIA, () => {
  gladioReturnFromLumeniaEventDone = true;
  zeekReunionEventDone = true;
  forceGladioOnly = false;
  saveStoryFlags();

  keepBattleUIHiddenAfterStory = false;
  isMapEventMode = false;

  startZeekReunionBattle();
});
}

function startZeekReunionBattle() {
  zeekBattleTurn = 0;
  storyBattleMode = true;
  setCurrentMap("gladio");

  const enemy = makeStoryEnemy("zeek");
  if (!enemy) {
    addLog("ジークの敵データが見つかりません。");
    return;
  }

  loadEnemy([{
    ...enemy,
    uid: `zeek_reunion_${Date.now()}`,
    hpMax: enemy.hp
  }]);

  addLog("ジークとの再戦が始まった！");
  startTurnLoop();
}

function openGladioLibrary() {
  isMapEventMode = true;
  keepBattleUIHiddenAfterStory = true;

  if (gladioLibrarySolved) {
    showMapMessage("書棚の奥で動いた仕掛けは、すでに停止している。地下への道は開いたままだ。");
    isMapEventMode = false;
    keepBattleUIHiddenAfterStory = false;
    return;
  }

  openStoryScene([
    {
      type: "summary",
      text: "旧書庫には古い本が並んでいる。"
    },
    {
      type: "dialogue",
      name: "セリオス",
      side: "left",
      face: "./assets/img/seriosu.dia.png",
      text: "……この本棚、何か仕掛けがありそうです"
    }
  ], () => {
    openGladioLibraryChoice();
  });
}

function openGladioLibraryChoice() {
  const choices = GLADIO_LIBRARY_BOOKS.map(book => ({
    text: book.title,
    result: book.id
  }));

  choices.push({
    text: "やめる",
    result: "leave"
  });

  openStoryScene([
    {
      type: "summary",
      text: `旧書庫には、傷みながらも奇妙に保存された五冊の本が並んでいる。\nどの順番で手に取る？`
    },
    {
      type: "choice",
      choices
    }
  ], (result) => {
    if (!result || result === "leave") {
      openMapOverlay("gladio");
      return;
    }

    handleGladioLibraryBook(result);
  });
}

function handleGladioLibraryBook(bookId) {
  gladioBookOrderProgress.push(bookId);

  const book = GLADIO_LIBRARY_BOOKS.find(b => b.id === bookId);
  addLog(`『${book?.title ?? "不明な本"}』を手に取った。`);

  const currentIndex = gladioBookOrderProgress.length - 1;
  const correctId = GLADIO_LIBRARY_CORRECT_ORDER[currentIndex];

  if (bookId !== correctId) {
    gladioBookOrderProgress = [];

    openStoryScene([
      {
        type: "summary",
        text: "本を手に取った瞬間、書架の奥で何かが軋んだ。"
      },
      {
        type: "summary",
        text: "だがすぐに音は止み、並んでいた本が元の位置に戻ってしまう。"
      },
      {
        type: "dialogue",
        name: "セリオス",
        side: "left",
        face: "./assets/img/seriosu.dia.png",
        text: "……順番が違ったようです"
      }
    ], () => {
      openMapOverlay("gladio");
    });
    return;
  }

  if (gladioBookOrderProgress.length >= GLADIO_LIBRARY_CORRECT_ORDER.length) {
    gladioLibrarySolved = true;
    gladioUndergroundOpened = true;
    saveStoryFlags();

    openStoryScene([
      {
        type: "summary",
        text: "最後の一冊を手に取った瞬間、旧書庫全体が低く唸るように震えた。"
      },
      {
        type: "summary",
        text: "中央ホールの地下へ続く機構が起動したようだ。"
      },
      {
        type: "dialogue",
        name: "クレス",
        side: "right",
        face: "./assets/img/kuresu.dia.png",
        text: "地下への入口が開いたのか"
      }
    ], () => {
      openMapOverlay("gladio");
    });
    return;
  }

  saveStoryFlags();

  openStoryScene([
    {
      type: "summary",
      text: `『${book?.title ?? ""}』を読んだ。\nまだ何か足りないようだ……`
    },
    {
      type: "choice",
      choices: GLADIO_LIBRARY_BOOKS.map(b => ({
        text: b.title,
        result: b.id
      })).concat([{ text: "やめる", result: "leave" }])
    }
  ], (next) => {
    if (!next || next === "leave") {
      openMapOverlay("gladio");
      return;
    }

    handleGladioLibraryBook(next);
  });
}

function getGladioUndergroundBattleBg(floor) {
  if (floor <= 5)  return "./assets/img/bg_gladio_underground_01.png";
  if (floor <= 10) return "./assets/img/bg_gladio_underground_02.png";
  if (floor <= 15) return "./assets/img/bg_gladio_underground_03.png";
  if (floor <= 19) return "./assets/img/bg_gladio_underground_04.png";
  return "./assets/img/bg_gladio_underground_20.png";
}

function getGladioUndergroundMapBg(floor) {
  if (floor <= 5)  return "./assets/img/map_gladio_underground_01.png";
  if (floor <= 10) return "./assets/img/map_gladio_underground_02.png";
  if (floor <= 15) return "./assets/img/map_gladio_underground_03.png";
  if (floor <= 19) return "./assets/img/map_gladio_underground_04.png";
  return "./assets/img/map_gladio_underground_20.png";
}

function applyGladioUndergroundVisuals() {
  const battleBg = getGladioUndergroundBattleBg(gladioUndergroundFloor || 1);
  document.body.style.backgroundImage = `url(${battleBg})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";

  if (MAP_OVERLAYS.gladio_underground) {
    MAP_OVERLAYS.gladio_underground.background = getGladioUndergroundMapBg(gladioUndergroundFloor || 1);
    MAP_OVERLAYS.gladio_underground.title = `グラディオ廃城 地下迷宮 ${gladioUndergroundFloor}階`;
  }
}

function canReachTrue20thFloor() {
  const cress = getUnitState("cress");
  const merudi = getUnitState("merudi");

  if (!cress || !merudi) return false;

  const hasRoyalSwordEquipped = cress.equip?.weapon === "王家の剣";
  const hasRoyalArmorEquipped = cress.equip?.armor === "王家の鎧";
  const hasGenesis = hasSkill("merudi", SKILL_ID.GENESIS);
  

  return hasRoyalSwordEquipped && hasRoyalArmorEquipped && hasGenesis && hasPurify;
}

function startZeekJoinBattle() {
  const enemy = makeStoryEnemy("zeek");
  if (!enemy) {
    addLog("ジークの敵データが見つかりません。");
    return;
  }

  storyBattleMode = true;
  setCurrentMap("gladio");

  if (STORY_MAPS.gladio?.background) {
    document.body.style.backgroundImage = `url(${STORY_MAPS.gladio.background})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
  }

  loadEnemy([{
    ...enemy,
    uid: `zeek_join_${Date.now()}`,
    hpMax: enemy.hp
  }]);

  addLog("ジークが立ちはだかった！");
  startTurnLoop();
}

function joinZeekNow() {
  if (zeekJoined) return;

  zeekJoined = true;

  getUnitState("zeek");

  if (!party.back) {
    party.back = "zeek";
  }

  ensurePartyValid();
  saveParty(party);
  saveStoryFlags();

  updateFormationUnlockUI();
  updatePartyView();
  refreshStatusIfOpen();

  addLog("ジークが仲間に加わった！");
}


//TODO 迷宮イベント
function openLabyrinthDeep() {
  const cress = getUnitState("cress");
  const level = cress?.level ?? 1;

  if (level < 35) {
    openStoryScene([
      {
        type: "dialogue",
        name: "セリオス",
        side: "left",
        face: "./assets/img/seriosu.dia.png",
        text: "……お待ちください、殿下。この先の瘴気は危険すぎます"
      },
      {
        type: "dialogue",
        name: "クレス",
        side: "right",
        face: "./assets/img/kuresu.dia.png",
        text: "今の俺たちでは、まだ無理か……"
      },
      {
        type: "summary",
        text: "今はまだ深部へ進む力が足りないようだ。"
      }
    ], () => {
      openMapOverlay("labyrinth");
    });
    return;
  }

  openStoryScene(LABYRINTH_SEAL_MONSTER_EVENT, () => {
    if (!hasRoyalSword()) {
      openStoryScene([
        {
          type: "dialogue",
          name: "セリオス",
          side: "left",
          face: "./assets/img/seriosu.dia.png",
          text: "……封印陣に干渉するには、王家に連なる力を持つ剣が必要かもしれません"
        },
        {
          type: "dialogue",
          name: "クレス",
          side: "right",
          face: "./assets/img/kuresu.dia.png",
          text: "王家の剣、か……"
        },
        {
          type: "summary",
          text: "封印を解くには、特別な剣が必要なようだ。"
        }
      ], () => {
        openMapOverlay("labyrinth");
      });
      return;
    }

    openStoryScene(LABYRINTH_SEAL_CHOICE_EVENT, (result) => {
      if (result === "release") {
        openStoryScene(LABYRINTH_RELEASE_EVENT, () => {
          startLabyrinthSealBossBattle();
        });
      } else {
        addLog("今は封印に触れず、深部を後にした。");
        openMapOverlay("labyrinth");
      }
    });
  });
}

function hasRoyalSword() {
  return invCount("王家の剣") > 0 || EQUIP.weapon === "王家の剣";
}

function startLabyrinthSealBossBattle() {
  const enemy = makeStoryEnemy("contract_demon_knight");
  if (!enemy) {
    addLog("封印された魔物の敵データが見つかりません。");
    return;
  }

  storyBattleMode = true;
  setCurrentMap("labyrinth");

  loadEnemy([
    {
      ...enemy,
      uid: `contract_demon_knight_${Date.now()}`,
      hpMax: enemy.hp
    }
  ]);

  addLog("封印されし魔獣との戦いが始まった！");
  startTurnLoop();
}

function startValgraveBattle() {
  const enemy = makeStoryEnemy("contract_demon_knight");
  if (!enemy) {
    addLog("ヴァルグレイヴのデータが見つかりません。");
    return;
  }

  storyBattleMode = true;

  loadEnemy([
    {
      ...enemy,
      uid: `valgrave_${Date.now()}`,
      hpMax: enemy.hp
    }
  ]);

  addLog("契約者ヴァルグレイヴが姿を現した……！");
  startTurnLoop();
}

function checkValgravePhase(enemy) {
  if (enemy.id !== "contract_demon_knight") return;

  if (enemy.phase === 1 && enemy.hp <= enemy.hpMax / 2) {
    enemy.phase = 2;

    addLog("ヴァルグレイヴの身体から禍々しい力が溢れ出した！");
    addLog("「契約は終わらぬ……我はまだ滅びぬ！」");

    enemy.atkMin += 15;
    enemy.atkMax += 20;
    enemy.agl += 5;

    enemy.img = "./assets/img/valgrave_awakened.png"; // 覚醒画像
  }
}

function startValgraveRelease() {
  openStoryScene([
    {
      type: "summary",
      text: "王家の剣が封印に反応する――"
    },
    {
      type: "dialogue",
      name: "ヴァルグレイヴ",
      side: "left",
      text: "封印を解くとは……愚かだな"
    },
    {
      type: "summary",
      text: "鎖が砕け散る――"
    }
  ], () => {
    startValgraveBattle();
  });
}

function onValgraveDefeated() {
  openStoryScene([
    {
      type: "dialogue",
      name: "ヴァルグレイヴ",
      side: "left",
      text: "……遅すぎたな……王よ……"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      text: "……何を言っている"
    },
    {
      type: "summary",
      text: "ヴァルグレイヴの身体は、静かに崩れ落ちた……"
    }
  ]);
}


//TODO 海上都市イベント

function isMaterial(item) {
  return item.kind === "material";
}

function openLumeniaPort() {
  isMapEventMode = true;
  keepBattleUIHiddenAfterStory = true;

  if (lumeniaPortLocked) {
    if (!lumeniaPortBlockedStoryDone) {
      lumeniaPortBlockedStoryDone = true;
      saveStoryFlags();

      openStoryScene(LUMENIA_PORT_BLOCKED_STORY, () => {
        keepBattleUIHiddenAfterStory = false;
        isMapEventMode = false;
        openMapOverlay("lumenia");
      });
      return;
    }

    showMapMessage("海賊に港を押さえられている。先に裏路地を何とかする必要がありそうだ。");
    keepBattleUIHiddenAfterStory = false;
    isMapEventMode = false;
    openMapOverlay("lumenia");
    return;
  }

  // ★ここが追加ポイント（港解放後）
  if (!lumeniaPortUnlockedStoryDone) {
    lumeniaPortUnlockedStoryDone = true;

    // 新マップ解放
    STORY_MAPS.kansho.unlocked = true;
    STORY_MAPS.frost_peak.unlocked = true;

    // ★一時的にグラディオしか行けないモード
    forceGladioOnly = true;

    saveStoryFlags();
    refreshStoryMapUI();

    openStoryScene([
      {
        type: "summary",
        text: "港の封鎖が解かれ、航路が再び開かれた。"
      },
      {
        type: "summary",
        text: "新たな海域への道が拓けた。"
      }
    ], () => {
      keepBattleUIHiddenAfterStory = false;
      isMapEventMode = false;

      // ストーリーマップへ
      storyOverlay?.classList.add("is-open");
    });

    return;
  }

  showMapMessage("港へ行けるようになった。ここから先の航路が開けそうだ。");
  keepBattleUIHiddenAfterStory = false;
  isMapEventMode = false;
  openMapOverlay("lumenia");
}

function openLumeniaLighthouse() {
  isMapEventMode = true;
  keepBattleUIHiddenAfterStory = true;

  // 笛イベント（確定）
  if (lumeniaWhistleReady && !lumeniaWhistleUsed) {
    openStoryScene([
      {
        type: "summary",
        text: "灯台の上で、クレスは飛竜の笛を取り出した。"
      },
      {
        type: "choice",
        choices: [
          { text: "笛を吹く", result: "use" },
          { text: "やめる", result: "leave" }
        ]
      }
    ], (result) => {

      if (result !== "use") {
        keepBattleUIHiddenAfterStory = false;
        isMapEventMode = false;
        openMapOverlay("lumenia");
        return;
      }

      lumeniaWhistleUsed = true;
      lumeniaWhistleReady = false;
      saveStoryFlags();

      openColorDragonEvent();
    });

    return;
  }

  // 1%遭遇
  if (Math.random() < 0.01) {
    openColorDragonEvent();
    return;
  }

  // 通常
  openStoryScene(LUMENIA_LIGHTHOUSE_EVENT, () => {
    keepBattleUIHiddenAfterStory = false;
    isMapEventMode = false;
    openMapOverlay("lumenia");
  });
}

function openColorDragonEvent() {
  openStoryScene([
    {
      type: "summary",
      text: "灯台の上空に、七色の光が走った。"
    },
    {
      type: "summary",
      text: "巨大な飛竜がゆっくりと舞い降りてくる。"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      face: "./assets/img/kuresu.dia.png",
      text: "……これが、ドラゴン"
    },
    {
      type: "summary",
      text: "飛竜はクレスを一瞥すると、空へと舞い上がった。"
    },
    {
      type: "summary",
      text: "その場には、光る鱗が一枚残されている。"
    },
    {
      type: "summary",
      text: "ドラゴンのうろこを手に入れた。"
    }
  ], () => {

    // ★ここで入手
    invAdd("ドラゴンのうろこ", 1);
    renderInventoryList();

    keepBattleUIHiddenAfterStory = false;
    isMapEventMode = false;
    openMapOverlay("lumenia");
  });
}

function startColorDragonBattle() {
  const enemy = makeStoryEnemy("color_dragon");
  if (!enemy) {
    addLog("カラードラゴンの敵データが見つかりません。");
    keepBattleUIHiddenAfterStory = false;
    isMapEventMode = false;
    openMapOverlay("lumenia");
    return;
  }

  storyBattleMode = true;
  setCurrentMap("lumenia");

  loadEnemy([{
    ...enemy,
    uid: `color_dragon_${Date.now()}`,
    hpMax: enemy.hp
  }]);

  addLog("カラードラゴンが現れた！");
  keepBattleUIHiddenAfterStory = false;
  isMapEventMode = false;
  startTurnLoop();
}

function handleColorDragonDefeat() {
  colorDragonMet = true;
  saveStoryFlags();

  invAdd("ドラゴンのうろこ", 1);
  renderInventoryList();

  openStoryScene([
    {
      type: "summary",
      text: "カラードラゴンは咆哮を残し、空の彼方へ飛び去っていった。"
    },
    {
      type: "summary",
      text: "足元には、色鮮やかな鱗が一枚残されている。"
    },
    {
      type: "summary",
      text: "ドラゴンのうろこを1枚手に入れた。"
    }
  ], () => {
    openMapOverlay("lumenia");
  });
}


function openLumeniaGuild() {
  isMapEventMode = true;
  keepBattleUIHiddenAfterStory = true;

  openStoryScene(LUMENIA_GUILD_EVENT, () => {
    lumeniaGuildTalkDone = true;
    saveStoryFlags();

    keepBattleUIHiddenAfterStory = false;
    isMapEventMode = false;
    openMapOverlay("lumenia");
  });
}

function openLumeniaMarket() {
  isMapEventMode = true;
  keepBattleUIHiddenAfterStory = true;

  openStoryScene(LUMENIA_MARKET_EVENT, () => {
    lumeniaMarketEventDone = true;
    saveStoryFlags();

    keepBattleUIHiddenAfterStory = false;
    isMapEventMode = false;
    openMapOverlay("lumenia");
  });
}

function openLumeniaHouse() {
  isMapEventMode = true;
  keepBattleUIHiddenAfterStory = true;

  openStoryScene(LUMENIA_HOUSE_EVENT, () => {
    lumeniaHouseTalkDone = true;
    saveStoryFlags();

    keepBattleUIHiddenAfterStory = false;
    isMapEventMode = false;
    openMapOverlay("lumenia");
  });
}

function openLumeniaBackstreet() {
  isMapEventMode = true;
  keepBattleUIHiddenAfterStory = true;

  openStoryScene(LUMENIA_BACKSTREET_EVENT, () => {
    startLumeniaPirateBattle();
  });
}

function startLumeniaPirateBattle() {
  const enemy = makeStoryEnemy("pirate");
  if (!enemy) {
    addLog("海賊の敵データが見つかりません。");
    keepBattleUIHiddenAfterStory = false;
    isMapEventMode = false;
    openMapOverlay("lumenia");
    return;
  }

  storyBattleMode = true;
  setCurrentMap( "lumenia");

  loadEnemy([{
    ...enemy,
    uid: `lumenia_pirate_${Date.now()}`,
    hpMax: enemy.hp
  }]);

  addLog("裏路地の海賊が襲いかかってきた！");
  keepBattleUIHiddenAfterStory = false;
  isMapEventMode = false;
  startTurnLoop();
}

function handleLumeniaPirateDefeat() {
  lumeniaPortLocked = false;
  saveStoryFlags();

  openStoryScene([
    {
      type: "summary",
      text: "海賊を撃退した。"
    },
    {
      type: "summary",
      text: "これで港の封鎖は解かれたようだ。"
    }
  ], () => {
    heroCressAwakened = true;
    saveStoryFlags();

    showMapMessage("クレスの名は海上都市に広まり、人々は彼を『英雄クレス』と呼び始めた。");

    openMapOverlay("lumenia");
  });
}



//TODO 火山イベント
function openVolcanoBattlefield() {
  isMapEventMode = true;
  keepBattleUIHiddenAfterStory = true;

  const scene = volcanoIntroPlayed
    ? VOLCANO_BATTLE_LINES
    : VOLCANO_INTRO_EVENT;

  openStoryScene(scene, () => {
    volcanoIntroPlayed = true;
    volcanoRescueOpened = true;
    saveStoryFlags();

    keepBattleUIHiddenAfterStory = false;
    isMapEventMode = false;
    openMapOverlay("volcano");
  });
}

function startVolcanoFieldBattle() {
  storyBattleMode = true;
  setCurrentMap("volcano");

  const enemies = getRandomEnemiesForCurrentMap();
  if (!enemies.length) {
    addLog("ヴォルカノ火山の敵データが未設定です。");
    openMapOverlay("volcano");
    return;
  }

  loadEnemy(enemies);
  addLog("火山戦線で戦闘が始まった！");
  startTurnLoop();
}

function openVolcanoRescueEvent() {
  isMapEventMode = true;
  keepBattleUIHiddenAfterStory = true;

  openStoryScene(VOLCANO_SAVE_SOLDIER, () => {
    volcanoSoldierSaved = true;
    volcanoMidOpened = true;
    saveStoryFlags();

    keepBattleUIHiddenAfterStory = false;
    isMapEventMode = false;
    openMapOverlay("volcano");
  });
}

function openVolcanoMidEvent() {
  isMapEventMode = true;
  keepBattleUIHiddenAfterStory = true;

  openStoryScene(VOLCANO_MID_EVENT, () => {
    volcanoMidEventPlayed = true;
    volcanoCoreOpened = true;
    saveStoryFlags();

    keepBattleUIHiddenAfterStory = false;
    isMapEventMode = false;
    openMapOverlay("volcano");
  });
}

function openVolcanoCoreEvent() {
  isMapEventMode = true;
  keepBattleUIHiddenAfterStory = true;

  if (volcanoBossDefeated) {
    if (!volcanoEndEventPlayed) {
      openStoryScene(VOLCANO_END_EVENT, () => {
        volcanoEndEventPlayed = true;
        saveStoryFlags();

        keepBattleUIHiddenAfterStory = false;
        isMapEventMode = false;
        openMapOverlay("volcano");
      });
      return;
    }

    showMapMessage("コアの脈動は弱まりつつある……。");
    isMapEventMode = false;
    keepBattleUIHiddenAfterStory = false;
    openMapOverlay("volcano");
    return;
  }

  openStoryScene(VOLCANO_CORE_EVENT, () => {
    volcanoCoreReached = true;
    saveStoryFlags();

    openStoryScene(VOLCANO_BOSS_EVENT, () => {
      keepBattleUIHiddenAfterStory = false;
      isMapEventMode = false;
      startVolcanoBossBattle();
    });
  });
}

function startVolcanoBossBattle() {
  const enemy = makeStoryEnemy("volcano_commander");
  if (!enemy) {
    addLog("ヴォルカノ火山ボスのデータが見つかりません。");
    openMapOverlay("volcano");
    return;
  }

  storyBattleMode = true;
  setCurrentMap("volcano");

  if (STORY_MAPS.volcano?.background) {
    document.body.style.backgroundImage = `url(${STORY_MAPS.volcano.background})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
  }

  loadEnemy([{
    ...enemy,
    uid: `volcano_commander_${Date.now()}`,
    hpMax: enemy.hp
  }]);

  addLog("レオニス王国幹部が立ちはだかった！");
  startTurnLoop();
}

function unlockVolcanoNextMap() {
  if (!STORY_MAPS.kansho.unlocked) {
    STORY_MAPS.kansho.unlocked = true;
    refreshStoryMapUI();
    addLog("新たな行き先が開放された！");
  }
}

function unlockVolcanoStory() {
  if (STORY_MAPS.volcano.unlocked) return;

  STORY_MAPS.volcano.unlocked = true;
  refreshStoryMapUI();

  openStoryScene([
    {
      type: "summary",
      text: "各地の情報を追う中で、ヴォルカノ火山で大規模な戦闘が起きていると判明した。"
    },
    {
      type: "dialogue",
      name: "セリオス",
      side: "left",
      face: "./assets/img/seriosu.dia.png",
      text: "レオニスとエストリア、両国が火山のコアを狙っています"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      face: "./assets/img/kuresu.dia.png",
      text: "……どちらにも渡すわけにはいかない"
    },
    {
      type: "summary",
      text: "新しいマップ『ヴォルカノ火山』が開放された！"
    }
  ], () => {
    addLog("ヴォルカノ火山へ向かえるようになった！");
  });
}

function openIgnarionBoss() {
  if (ignarionDefeated) {
    openStoryScene([
      {
        type: "summary",
        text: "炎神竜イグナリオンを討った今も、火口には灼熱の余韻だけが残っている。"
      }
    ], () => {
      openMapOverlay("volcano_summit");
    });
    return;
  }

  openStoryScene([
    {
      type: "summary",
      text: "火口の中心が大きく脈動し、溶岩が渦を巻いて吹き上がる。"
    },
    {
      type: "summary",
      text: "その中から、灼熱の翼を持つ巨大な竜が姿を現した――"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      face: "./assets/img/kuresu.dia.png",
      text: "……炎神竜イグナリオン！"
    }
  ], () => {
    ignarionIntroPlayed = true;
    saveStoryFlags?.();
    startIgnarionBattle();
  });
}

function startIgnarionBattle() {
  const enemy = makeStoryEnemy("ignarion");
  if (!enemy) {
    addLog("炎神竜イグナリオンのデータが見つかりません。");
    openMapOverlay("volcano_summit");
    return;
  }

  storyBattleMode = true;
  setCurrentMap("volcano_summit");

  if (STORY_MAPS.volcano_summit?.background) {
    document.body.style.backgroundImage = `url(${STORY_MAPS.volcano_summit.background})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
  }

  loadEnemy([{
    ...enemy,
    uid: `ignarion_${Date.now()}`,
    hpMax: enemy.hp
  }]);

  addLog("炎神竜イグナリオンが立ちはだかった！");
  startTurnLoop();
}

function checkAndOpenVolcanoSummit() {
  const front = getUnitState(party.front);
  if (!front) return false;

  const level = front.level ?? front.st?.level ?? 0;

  if (currentMap === "volcano" && level >= 40 && !volcanoSummitOpened) {
    volcanoSummitOpened = true;
    STORY_MAPS.volcano_summit.unlocked = true;

    addLog("火山頂上が解放された！");

    refreshStoryMapUI?.();
    saveStoryFlags?.();

    return true;
  }

  return false;
}

function canEncounterGranius() {
  const front = getUnitState(party.front);
  if (!front) return false;

  const level = front.level ?? front.st?.level ?? 0;
  return level >= 40;
}

//TODO 環礁
function kanshoSealEvent() {
  openStoryScene([
    {
      type: "dialogue",
      name: "セリオス",
      side: "left",
      text: "封印装置です……ですが解除には魔力が必要です"
    },
    {
      type: "dialogue",
      name: "メルディ",
      side: "left",
      text: "……やってみる"
    },
    {
      type: "summary",
      text: "メルディが魔力を流し込んだ"
    },
    {
      type: "summary",
      text: "封印が解かれた"
    }
  ]);
}

function openLeviataEvent() {
  if (leviataDefeated) {
    openStoryScene([
      {
        type: "summary",
        text: "水神竜レヴィアータがいた祭壇には、今も静かな水音だけが響いている。"
      }
    ], () => {
      openMapOverlay("kansho");
    });
    return;
  }

  openStoryScene([
    {
      type: "summary",
      text: "環礁の中心にある祭壇へ足を踏み入れた瞬間、水面が不気味に揺れた。"
    },
    {
      type: "summary",
      text: "穏やかだった海が渦を巻き、巨大な影が深海から浮かび上がる。"
    },
    {
      type: "dialogue",
      name: "メルディ",
      side: "left",
      face: "./assets/img/merudi.dia.png",
      text: "……来る。すごく大きい……！"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      face: "./assets/img/kuresu.dia.png",
      text: "あれが……水神竜レヴィアータ！"
    }
  ], () => {
    leviataIntroPlayed = true;
    saveStoryFlags?.();
    startLeviataBattle();
  });
}

function startLeviataBattle() {
  const enemy = makeStoryEnemy("leviata");
  if (!enemy) {
    addLog("水神竜レヴィアータのデータが見つかりません。");
    openMapOverlay("kansho");
    return;
  }

  storyBattleMode = true;
  setCurrentMap("kansho");

  document.body.style.backgroundImage = `url("./assets/img/map_kansho.png")`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";

  loadEnemy([{
    ...enemy,
    uid: `leviata_${Date.now()}`,
    hpMax: enemy.hp
  }]);

  addLog("水神竜レヴィアータが姿を現した！");
  startTurnLoop();
}

//TODO 氷上都市ニーベリア
function openFrostRuins() {
  if (!canOpenFrostDragonLair()) {
    openStoryScene([
      {
        type: "summary",
        text: "氷結神殿跡だ。奥から凍てつく気配が漂うが、何かが封印を阻んでいる。"
      }
    ]);
    return;
  }

  openStoryScene([
    {
      type: "summary",
      text: "氷晶のカギが淡く輝き始めた。"
    },
    {
      type: "summary",
      text: "神殿の奥で眠っていた氷の封印が音を立てて砕け、隠された神域への道が開く。"
    }
  ], () => {
    frostDragonLairOpened = true;
    addLog("氷神域への道が開かれた！");
    openMapOverlay("frost_peak");
  });
}

function openFrostDragonBoss() {
  openStoryScene([
    {
      type: "summary",
      text: "白銀の神域に足を踏み入れた瞬間、世界が凍りついたような静寂が訪れる。"
    },
    {
      type: "summary",
      text: "次の瞬間、吹雪が渦を巻き、その中心から巨大な氷の翼がゆっくりと広がった。"
    },
    {
      type: "summary",
      text: "氷神竜フロストレイン――永久凍土の奥底に眠る、隠された白銀の神竜。"
    }
  ], () => {
    const boss = makeStoryEnemy("frostrain");
    if (!boss) {
      addLog("フロストレインのデータが見つからない。");
      return;
    }

    setCurrentMap("frost_peak");
    loadEnemy(boss);
    startTurnLoop();
    addLog("氷神竜フロストレインが現れた！");
  });
}



//エストリア
function openEstriaUndergroundEvent() {
  if (estriaUndergroundVisited) {
    showMapMessage("かつての記憶が蘇る……だが、もう迷いはない。");
    return;
  }
  estriaUndergroundVisited = true;
  openStoryScene([
    {
      type: "summary",
      text: "地下通路――かつて王城から脱出するために使った、忘れられぬ道。"
    },
    {
      type: "summary",
      text: "湿った石壁、薄暗い灯り、足音を飲み込むような静寂。"
    },
    {
      type: "summary",
      text: "一歩踏み入れた瞬間、クレスの胸に押し込めていた記憶が静かに疼き始める。"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      face: "./assets/img/kuresu.dia.png",
      text: "……あの夜と同じだ"
    },
    {
      type: "dialogue",
      name: "セリオス",
      side: "left",
      face: "./assets/img/seriosu.dia.png",
      text: "ええ……私も忘れたことはありません"
    },
    {
      type: "summary",
      text: "燃え上がる王城。響き渡る怒号。倒れていく兵たち。"
    },
    {
      type: "summary",
      text: "そして、自分を逃がすために剣を取った者たちの姿。"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      face: "./assets/img/kuresu.dia.png",
      text: "俺は……何もできなかった"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      face: "./assets/img/kuresu.dia.png",
      text: "父上も、城の皆も、守れないまま……ただ逃げることしかできなかった"
    },
    {
      type: "dialogue",
      name: "セリオス",
      side: "left",
      face: "./assets/img/seriosu.dia.png",
      text: "違います、殿下"
    },
    {
      type: "dialogue",
      name: "セリオス",
      side: "left",
      face: "./assets/img/seriosu.dia.png",
      text: "あの時、あなたが生き延びたからこそ、今ここまで来られたのです"
    },
    {
      type: "summary",
      text: "それでも、後悔は消えない。"
    },
    {
      type: "summary",
      text: "目を閉じれば、今でもあの夜の炎がまぶたの裏に焼きついている。"
    },
    {
      type: "dialogue",
      name: "？？？",
      side: "left",
      text: "……逃げろ、クレス"
    },
    {
      type: "summary",
      text: "不意に、遠い記憶の底から声が蘇る。"
    },
    {
      type: "dialogue",
      name: "？？？",
      side: "left",
      text: "生きろ……そして、取り戻せ"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      face: "./assets/img/kuresu.dia.png",
      text: "……父上……"
    },
    {
      type: "summary",
      text: "それは確かに、最後に聞いた王の声だった。"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      face: "./assets/img/kuresu.dia.png",
      text: "あの夜、俺は逃げた"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      face: "./assets/img/kuresu.dia.png",
      text: "だが今日は違う……もう、何も失わないために進む"
    },
    {
      type: "dialogue",
      name: "セリオス",
      side: "left",
      face: "./assets/img/seriosu.dia.png",
      text: "はい、殿下"
    },
    {
      type: "dialogue",
      name: "セリオス",
      side: "left",
      face: "./assets/img/seriosu.dia.png",
      text: "この道の先にいるのは、過去ではありません"
    },
    {
      type: "dialogue",
      name: "セリオス",
      side: "left",
      face: "./assets/img/seriosu.dia.png",
      text: "すべてを奪った男――ヴァルドレインです"
    },
    {
      type: "summary",
      text: "クレスは静かに剣の柄を握りしめる。"
    },
    {
      type: "summary",
      text: "もう逃げるためではない。"
    },
    {
      type: "summary",
      text: "真実を暴き、奪われたものを取り戻すために――二人は再び地下通路の奥へと歩みを進めた。"
    }
  ],
    () => {
      unlockEstriaDungeon();
    }
);
}

function unlockEstriaDungeon() {
  console.log("unlockEstriaDungeon called");

  const map = MAP_OVERLAYS["castle"];
  console.log("map =", map);

  if (!map || !map.spots) return;

  const dungeonSpot = map.spots.find((spot) => spot.id === "dungeon");
  console.log("dungeonSpot before =", dungeonSpot);

  if (!dungeonSpot) return;

  dungeonSpot.unlocked = true;
  console.log("dungeonSpot after =", dungeonSpot);

  if (currentMap === "castle") {
    openMapOverlay("castle");
  }

  addLog("地下牢が開放された。");
}

function openEstriaFinalScene() {
  openStoryScene([
    {
      type: "summary",
      text: "玉座の間――かつて王が座していた場所。"
    },
    {
      type: "summary",
      text: "広大な空間は静まり返り、玉座には誰もいない。"
    },
    {
      type: "summary",
      text: "王の不在だけが、この場のすべてを物語っていた。"
    },
    {
      type: "summary",
      text: "その玉座の前に、一人の男が立っている。"
    },
    {
      type: "dialogue",
      name: "ヴァルドレイン",
      side: "left",
      text: "……戻ってきたか、王殺し"
    },
    {
      type: "summary",
      text: "静かに響くその声は、まるでこの場の支配者であるかのようだった。"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      text: "その呼び方はやめろ"
    },
    {
      type: "dialogue",
      name: "ヴァルドレイン",
      side: "left",
      text: "なぜだ？ 国中がそう呼んでいる"
    },
    {
      type: "dialogue",
      name: "ヴァルドレイン",
      side: "left",
      text: "王を殺し、逃亡した裏切り者――それがお前だ"
    },
    {
      type: "summary",
      text: "言葉の一つ一つが、胸の奥を抉る。"
    },
    {
      type: "summary",
      text: "だがクレスは目を逸らさない。"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      text: "王を殺したのは――お前だ"
    },
    {
      type: "summary",
      text: "一歩、前へ踏み出す。"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      text: "あの夜、すべてを仕組んだのもお前だろう"
    },
    {
      type: "dialogue",
      name: "ヴァルドレイン",
      side: "left",
      text: "……そうだ"
    },
    {
      type: "summary",
      text: "あまりにもあっさりと、その男は認めた。"
    },
    {
      type: "dialogue",
      name: "ヴァルドレイン",
      side: "left",
      text: "王は弱かった"
    },
    {
      type: "dialogue",
      name: "ヴァルドレイン",
      side: "left",
      text: "腐りきった貴族どもに囲まれ、何一つ決断できぬ王"
    },
    {
      type: "dialogue",
      name: "ヴァルドレイン",
      side: "left",
      text: "あのままでは、この国はいずれ滅びていた"
    },
    {
      type: "summary",
      text: "その言葉に、わずかな狂気が滲む。"
    },
    {
      type: "dialogue",
      name: "ヴァルドレイン",
      side: "left",
      text: "だから私が変えた"
    },
    {
      type: "dialogue",
      name: "ヴァルドレイン",
      side: "left",
      text: "不要なものを切り捨て、あるべき姿へとな"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      text: "……父上を殺してか"
    },
    {
      type: "dialogue",
      name: "ヴァルドレイン",
      side: "left",
      text: "ああ"
    },
    {
      type: "dialogue",
      name: "ヴァルドレイン",
      side: "left",
      text: "そしてお前には、その罪を背負ってもらった"
    },
    {
      type: "dialogue",
      name: "ヴァルドレイン",
      side: "left",
      text: "実に都合が良かったよ。第一王子が裏切り者とはな"
    },
    {
      type: "summary",
      text: "怒りが、限界まで膨れ上がる。"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      text: "……貴様ァァァ！！"
    },
    {
      type: "summary",
      text: "剣に手をかける。"
    },
    {
      type: "summary",
      text: "あの夜、逃げるしかなかった自分はもういない。"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      text: "あの日奪われたもの……全部取り返す"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      text: "父上の名も、この国も――そして真実もだ"
    },
    {
      type: "dialogue",
      name: "ヴァルドレイン",
      side: "left",
      text: "面白い"
    },
    {
      type: "dialogue",
      name: "ヴァルドレイン",
      side: "left",
      text: "では証明してみせろ"
    },
    {
      type: "dialogue",
      name: "ヴァルドレイン",
      side: "left",
      text: "その力が、この私を超えられるかをな"
    },
    {
      type: "summary",
      text: "玉座の間に、張り詰めた殺気が満ちる。"
    },
    {
      type: "summary",
      text: "かつて王が座した場所で――"
    },
    {
      type: "summary",
      text: "今、王の座を巡る戦いが始まろうとしていた。"
    }
  ], () => {
    startValdoreinBattle();
  });
}

function openEstriaPrison() {
  if (estriaPrisonVisited) {
    showMapMessage("牢の奥で、官僚たちが静かにこちらを見つめている。");
    return;
  }

  estriaPrisonVisited = true;

  openStoryScene([
    {
      type: "summary",
      text: "地下牢――冷たい鉄格子が並ぶ、湿った石造りの牢獄。"
    },
    {
      type: "summary",
      text: "王城の華やかさとは隔絶されたその場所には、かすかな呻き声と鎖の音だけが響いていた。"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      face: "./assets/img/kuresu.dia.png",
      text: "……こんな場所に、まだ人が……？"
    },
    {
      type: "dialogue",
      name: "セリオス",
      side: "left",
      face: "./assets/img/seriosu.dia.png",
      text: "ええ……王城が落ちた後、粛清に反対した官僚たちがここへ送られたと聞いています"
    },
    {
      type: "summary",
      text: "鉄格子の奥には、痩せ細った男たちがうずくまっていた。"
    },
    {
      type: "dialogue",
      name: "老官僚",
      side: "left",
      text: "……その声……まさか"
    },
    {
      type: "dialogue",
      name: "老官僚",
      side: "left",
      text: "クレス殿下、なのですか……？"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      face: "./assets/img/kuresu.dia.png",
      text: "……俺を知っているのか"
    },
    {
      type: "dialogue",
      name: "老官僚",
      side: "left",
      text: "忘れるものですか……我らは、先王陛下に仕えた者たち……"
    },
    {
      type: "dialogue",
      name: "老官僚",
      side: "left",
      text: "あの夜、大臣ヴァルドレインが王を討ったと知り、異を唱えた者は皆ここへ投げ込まれました"
    },
    {
      type: "summary",
      text: "その言葉に、地下牢の空気がさらに重く沈む。"
    },
    {
  type: "dialogue",
  name: "クレス",
  side: "right",
  face: "./assets/img/kuresu.dia.png",
  text: "……そうだったのか"
},
{
  type: "dialogue",
  name: "クレス",
  side: "right",
  face: "./assets/img/kuresu.dia.png",
  text: "あの男が、すべてを仕組んだことも……俺に罪を着せたこともすべて知っている"
},
{
  type: "summary",
  text: "鉄格子の向こうで、官僚たちが息を呑む。"
},
{
  type: "dialogue",
  name: "老官僚",
  side: "left",
  text: "……ならば、なぜ……"
},
{
  type: "dialogue",
  name: "クレス",
  side: "right",
  face: "./assets/img/kuresu.dia.png",
  text: "今はまだ……ここでお前たちを助けることはできない"
},
{
  type: "summary",
  text: "拳を握る。鉄格子の冷たさが、現実を突きつける。"
},
{
  type: "dialogue",
  name: "クレス",
  side: "right",
  face: "./assets/img/kuresu.dia.png",
  text: "だが――"
},
{
  type: "dialogue",
  name: "クレス",
  side: "right",
  face: "./assets/img/kuresu.dia.png",
  text: "必ず戻る"
},
{
  type: "dialogue",
  name: "クレス",
  side: "right",
  face: "./assets/img/kuresu.dia.png",
  text: "この城を取り戻して、お前たちをここから出す"
},
{
  type: "dialogue",
  name: "クレス",
  side: "right",
  face: "./assets/img/kuresu.dia.png",
  text: "それまで……生きていてくれ"
},
{
  type: "summary",
  text: "静寂の中、その言葉だけが強く響いた。"
},
{
  type: "dialogue",
  name: "老官僚",
  side: "left",
  text: "……はは……"
},
{
  type: "dialogue",
  name: "老官僚",
  side: "left",
  text: "そのお言葉……それだけで、我らは十分に戦えます"
},
{
  type: "dialogue",
  name: "別の官僚",
  side: "left",
  text: "殿下が戻られるその時まで……必ず生き延びてみせましょう"
},
{
  type: "summary",
  text: "絶望の底にあったはずの瞳に、わずかな光が宿る。"
},
{
  type: "dialogue",
  name: "セリオス",
  side: "left",
  face: "./assets/img/seriosu.dia.png",
  text: "……参りましょう、殿下"
},
{
  type: "dialogue",
  name: "セリオス",
  side: "left",
  face: "./assets/img/seriosu.dia.png",
  text: "彼らを救うためにも、ここで立ち止まるわけにはいきません"
},
{
  type: "dialogue",
  name: "クレス",
  side: "right",
  face: "./assets/img/kuresu.dia.png",
  text: "ああ……すべて終わらせる"
}
  ], () => {
    unlockEstriaBackCorridor();
    openMapOverlay("castle");
  });
}

function openEstriaStairs() {
  closeMapOverlay();
  openStoryScene(ESTRIA_STAIRS_EVENT, () => {
    openMapOverlay("castle");
  });
}

function unlockEstriaThrone() {
  const map = MAP_OVERLAYS["castle"];
  if (!map || !map.spots) return;

  const throneSpot = map.spots.find((spot) => spot.id === "throne");
  if (!throneSpot) return;

  throneSpot.unlocked = true;
  addLog("玉座の間が開放された。");
}

function openEstriaStairs() {
  closeMapOverlay();
  openStoryScene(ESTRIA_STAIRS_EVENT, () => {
    unlockEstriaThrone();
    openMapOverlay("castle");
  });
}


function startEstriaCorridorBattle() {
  const enemy1 = makeStoryEnemy("estoria_guard");
  const enemy2 = makeStoryEnemy("estoria_guard");

  if (!enemy1 || !enemy2) {
    addLog("エストリア兵のデータが見つかりません。");
    openMapOverlay("castle");
    return;
  }

  storyBattleMode = true;
  setCurrentMap("castle");
  pendingEstriaCorridorBattle = true;

  loadEnemy([
    {
      ...enemy1,
      uid: `estoria_guard_a_${Date.now()}`,
      hpMax: enemy1.hp
    },
    {
      ...enemy2,
      uid: `estoria_guard_b_${Date.now() + 1}`,
      hpMax: enemy2.hp
    }
  ]);

  addLog("巡回中のエストリア兵が立ちはだかった！");
  startTurnLoop();
}

function afterEstriaCorridorBattle() {
  openStoryScene(ESTRIA_CORRIDOR_AFTER_BATTLE, () => {
    unlockEstriaStairs();
    openMapOverlay("castle");
  });
}

function unlockEstriaStairs() {
  const map = MAP_OVERLAYS["castle"];
  if (!map || !map.spots) return;

  const stairsSpot = map.spots.find((spot) => spot.id === "stairs");
  if (!stairsSpot) return;

  stairsSpot.unlocked = true;
  addLog("大階段が開放された。");
}

function unlockEstriaBackCorridor() {
  const map = MAP_OVERLAYS["castle"];
  if (!map || !map.spots) return;

  const corridorSpot = map.spots.find((spot) => spot.id === "back_corridor");
  if (!corridorSpot) return;

  corridorSpot.unlocked = true;

  addLog("裏廊下が開放された。");
}

function afterValdoreinBattle() {
  openStoryScene([
    {
      type: "summary",
      text: "激戦の末――ヴァルドレインは膝をついた。"
    },
    {
      type: "summary",
      text: "その身体は限界を迎え、血が床に滴り落ちる。"
    },
    {
      type: "dialogue",
      name: "ヴァルドレイン",
      side: "left",
      text: "……はは……"
    },
    {
      type: "dialogue",
      name: "ヴァルドレイン",
      side: "left",
      text: "ここまで、か……"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      text: "終わりだ、ヴァルドレイン"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      text: "お前の野望も、ここで終わる"
    },
    {
      type: "summary",
      text: "だがヴァルドレインは、ゆっくりと笑みを浮かべた。"
    },
    {
      type: "dialogue",
      name: "ヴァルドレイン",
      side: "left",
      text: "終わり……？違うな……"
    },
    {
      type: "dialogue",
      name: "ヴァルドレイン",
      side: "left",
      text: "私は……ここで止まるつもりはない"
    },
    {
      type: "summary",
      text: "その目には、狂気と執念が宿っていた。"
    },
    {
      type: "dialogue",
      name: "ヴァルドレイン",
      side: "left",
      text: "コアの研究……すべては、このためだった……"
    },
    {
      type: "dialogue",
      name: "ヴァルドレイン",
      side: "left",
      text: "人の力では届かぬ領域……悪魔の力……！！"
    },
    {
      type: "summary",
      text: "床に黒い紋様が浮かび上がる。"
    },
    {
      type: "summary",
      text: "禍々しい魔力が玉座の間を満たしていく。"
    },
    {
      type: "dialogue",
      name: "セリオス",
      side: "left",
      text: "……殿下、危険です！"
    },
    {
      type: "dialogue",
      name: "ヴァルドレイン",
      side: "left",
      text: "この力、利用してみせる……"
    },
    
    {
      type: "summary",
      text: "その瞬間、世界が歪む。"
    },
    {
      type: "summary",
      text: "ヴァルドレインの意識は、精神の深淵へと引きずり込まれる――"
    },

    // 精神世界描写
    {
      type: "summary",
      text: "闇の中――"
    },
    {
      type: "summary",
      text: "そこには、“何か”がいた。"
    },
    {
      type: "dialogue",
      name: "ベリアル",
      side: "left",
      text: "……ほう"
    },
    {
      type: "dialogue",
      name: "ベリアル",
      side: "left",
      text: "我を利用しようとした人間か"
    },
    {
      type: "dialogue",
      name: "ヴァルドレイン",
      side: "left",
      text: "貴様の力を寄越せ……！"
    },
    {
      type: "dialogue",
      name: "ベリアル",
      side: "left",
      text: "愚かだな"
    },
    {
      type: "summary",
      text: "次の瞬間――"
    },
    {
      type: "summary",
      text: "ヴァルドレインの意識は、圧倒的な力に呑み込まれた。"
    },
    {
      type: "dialogue",
      name: "ベリアル",
      side: "left",
      text: "その程度の精神で、我に触れようとは"
    },
    {
      type: "summary",
      text: "抗う間もなく――"
    },
    {
      type: "summary",
      text: "ヴァルドレインの魂は、完全に消滅した。"
    },

    // 現実に戻る
    {
      type: "summary",
      text: "玉座の間――"
    },
    {
      type: "summary",
      text: "ヴァルドレインの身体が、ゆっくりと立ち上がる。"
    },
    {
      type: "summary",
      text: "だがそこに、彼の意思は存在しない。"
    },
    {
      type: "dialogue",
      name: "ベリアル",
      side: "left",
      text: "……くく……"
    },
    {
      type: "dialogue",
      name: "ベリアル",
      side: "left",
      text: "最高に愉快だ"
    },
    {
      type: "dialogue",
      name: "ベリアル",
      side: "left",
      text: "我を支配するつもりだったか、人間よ"
    },
    {
      type: "dialogue",
      name: "ベリアル",
      side: "left",
      text: "だがまあ……気分はいい"
    },
    {
      type: "dialogue",
      name: "ベリアル",
      side: "left",
      text: "せめて、その望みくらいは叶えてやろう"
    },
    {
      type: "dialogue",
      name: "ベリアル",
      side: "left",
      text: "――クレスを消す、とな"
    },
    {
      type: "summary",
      text: "その存在から放たれる圧は、もはや人のものではない。"
    },
    {
      type: "summary",
      text: "完全に顕現した“悪魔”が、そこに立っていた。"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      text: "……ヴァルドレインじゃないな"
    },
    {
      type: "dialogue",
      name: "ベリアル",
      side: "left",
      text: "当然だ"
    },
    {
      type: "dialogue",
      name: "ベリアル",
      side: "left",
      text: "あの人間は、すでに消えた"
    },
    {
      type: "dialogue",
      name: "ベリアル",
      side: "left",
      text: "残っているのは――この肉体と、我だけだ"
    },
    {
      type: "summary",
      text: "空気が震える。"
    },
    {
      type: "summary",
      text: "真の戦いが、今始まる――"
    }
  ], () => {
    startBelialBattle();
  });
}

function estriaEnding() {
  openStoryScene([
    {
      type: "summary",
      text: "戦いは終わった――"
    },
    {
      type: "dialogue",
      name: "セリオス",
      side: "left",
      text: "……これで、すべて終わったのでしょうか"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      text: "……いや、違う"
    },
    {
      type: "summary",
      text: "クレスは静かに玉座を見上げる。"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      text: "この国は、まだ取り戻せていない"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      text: "俺は……すべてを取り戻す"
    },
    {
      type: "summary",
      text: "王都エストリア――それは終わりではなく、新たな始まりだった。"
    }
  ]);
}

function estriaEnding() {
  openStoryScene([
    {
      type: "summary",
      text: "激闘の末――大悪魔ベリアルはついに崩れ落ちた。"
    },
    {
      type: "summary",
      text: "禍々しい魔力は霧のように掻き消え、玉座の間には長い静寂だけが残る。"
    },
    {
      type: "dialogue",
      name: "セリオス",
      side: "left",
      face: "./assets/img/seriosu.dia.png",
      text: "……終わったのですね"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      face: "./assets/img/kuresu.dia.png",
      text: "ああ……ようやく"
    },
    {
      type: "summary",
      text: "クレスは静かに玉座を見上げた。"
    },
    {
      type: "summary",
      text: "かつて父王が座していた場所。"
    },
    {
      type: "summary",
      text: "その場所から、すべてが奪われた。"
    },
    {
      type: "summary",
      text: "だが今、その歪みは断ち切られたのだ。"
    },
    {
      type: "dialogue",
      name: "セリオス",
      side: "left",
      face: "./assets/img/seriosu.dia.png",
      text: "ヴァルドレインが隠していた文書と記録も、すでに押収しています"
    },
    {
      type: "dialogue",
      name: "セリオス",
      side: "left",
      face: "./assets/img/seriosu.dia.png",
      text: "先王暗殺の真相、殿下への冤罪、反対派の粛清――すべてを示す証拠です"
    },
    {
      type: "summary",
      text: "ヴァルドレインが密かに保管していた証拠は、王城中に伝えられた。"
    },
    {
      type: "summary",
      text: "王を殺したのが誰であったのか。"
    },
    {
      type: "summary",
      text: "誰が国を歪め、誰に罪を着せたのか。"
    },
    {
      type: "summary",
      text: "真実は、ようやく白日の下へと晒された。"
    },
    {
      type: "dialogue",
      name: "市民",
      side: "left",
      text: "……クレス殿下は、裏切り者なんかじゃなかったんだ……"
    },
    {
      type: "dialogue",
      name: "官僚",
      side: "left",
      text: "我らは、ようやく真の王を迎えられる……"
    },
    {
      type: "summary",
      text: "恐れと疑いに満ちていた民の目に、少しずつ光が戻っていく。"
    },
    {
      type: "summary",
      text: "そして地下牢に囚われていた者たちもまた、解放された。"
    },
    {
      type: "dialogue",
      name: "老官僚",
      side: "left",
      text: "お約束通り、戻ってこられましたな……陛下"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      face: "./assets/img/kuresu.dia.png",
      text: "……まだ陛下なんて呼び方は早い"
    },
    {
      type: "dialogue",
      name: "老官僚",
      side: "left",
      text: "いいえ"
    },
    {
      type: "dialogue",
      name: "老官僚",
      side: "left",
      text: "この国を取り戻したのは、他でもないあなたです"
    },
    {
      type: "summary",
      text: "やがて、王都エストリアに新たな時代の幕が上がる。"
    },
    {
      type: "summary",
      text: "民の信頼を取り戻したクレスは、正式にエストリア王国の王として迎えられた。"
    },
    {
      type: "summary",
      text: "それは、奪われた王子が玉座へと還る瞬間だった。"
    },
    {
      type: "dialogue",
      name: "セリオス",
      side: "left",
      face: "./assets/img/seriosu.dia.png",
      text: "……おめでとうございます、陛下"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      face: "./assets/img/kuresu.dia.png",
      text: "終わったわけじゃない"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      face: "./assets/img/kuresu.dia.png",
      text: "失ったものは多い……だが、この国は必ず立て直す"
    },
    {
      type: "dialogue",
      name: "クレス",
      side: "right",
      face: "./assets/img/kuresu.dia.png",
      text: "父上が守ろうとしたエストリアを、今度は俺が守る"
    },
    {
      type: "summary",
      text: "亡国の王子の旅は、ここで一つの決着を迎えた。"
    },
    {
      type: "summary",
      text: "だがそれは同時に――新たな王の物語の始まりでもあった。"
    }
  ], () => {
    openBelialAfterHint();
  });
}

function openBelialAfterHint() {
  openStoryScene([
    {
      type: "summary",
      text: "――その頃。"
    },
    {
      type: "summary",
      text: "地上から遥か遠く隔てられた、光なき深淵。"
    },
    {
      type: "summary",
      text: "黒い霧と瘴気が渦巻く、その奥深くで“何者か”が静かに目を開いた。"
    },
    {
      type: "dialogue",
      name: "？？？",
      side: "left",
      text: "……ほう"
    },
    {
      type: "dialogue",
      name: "？？？",
      side: "left",
      text: "地上で動いていた第三階級の奴が、消えたか"
    },
    {
      type: "summary",
      text: "低く響くその声には、驚きよりも興味が滲んでいた。"
    },
    {
      type: "dialogue",
      name: "？？？",
      side: "left",
      text: "ベリアルごときが滅びるとは……少しは楽しめそうだな"
    },
    {
      type: "dialogue",
      name: "？？？",
      side: "left",
      text: "人間どもに、そこまでの力があるとは"
    },
    {
      type: "summary",
      text: "闇の奥で、複数の眼がゆっくりと開く。"
    },
    {
      type: "summary",
      text: "そこには、まだ知られざる無数の気配が潜んでいた。"
    },
    {
      type: "dialogue",
      name: "？？？",
      side: "left",
      text: "ならば次は、我らが直々に確かめる番だ"
    },
    {
      type: "summary",
      text: "深淵の底で、不気味な笑いが静かに響く。"
    },
    {
      type: "summary",
      text: "ベリアルの死は終わりではなかった。"
    },
    {
      type: "summary",
      text: "それは、魔界に潜むさらなる脅威へと繋がる――新たな扉の始まりにすぎなかった。"
    }
  ]);
}


function openEstriaCorridor() {
  if (estriaCorridorCleared) {
    showMapMessage("巡回兵を突破した先に、大階段への道が続いている。");
    return;
  }

  if (estriaCorridorVisited) {
    showMapMessage("巡回兵と遭遇した場所だ。先へ進むには突破するしかない。");
    return;
  }

  estriaCorridorVisited = true;

  openStoryScene(ESTRIA_CORRIDOR_EVENT, () => {
    startEstriaCorridorBattle();
  });
}

function openEstriaHall() {
  addLog("王城ホールに踏み込んだ…");

  const enemies = [
    makeStoryEnemy("darkKnightShade"),
    makeStoryEnemy("skeleton")
  ];

  loadEnemy(enemies);
  startTurnLoop();
}

function startValdoreinBattle() {
  const enemy = makeStoryEnemy("valdorein");
  if (!enemy) {
    addLog("ヴァルドレインのデータが見つかりません。");
    openMapOverlay("castle");
    return;
  }

  storyBattleMode = true;
  setCurrentMap("castle");
  pendingValdoreinBattle = true;

  loadEnemy([
    {
      ...enemy,
      uid: `valdorein_${Date.now()}`,
      hpMax: enemy.hp
    }
  ]);

  addLog("ヴァルドレインが立ちはだかった！");
  startTurnLoop();
}

function startBelialBattle() {
  const enemy = makeStoryEnemy("belial");
  if (!enemy) {
    addLog("ベリアルのデータが見つかりません。");
    openMapOverlay("castle");
    return;
  }

  storyBattleMode = true;
  setCurrentMap("castle");
  pendingBelialBattle = true;

  loadEnemy([
    {
      ...enemy,
      uid: `belial_${Date.now()}`,
      hpMax: enemy.hp
    }
  ]);

  addLog("完全顕現した大悪魔ベリアルが襲いかかってきた！");
  startTurnLoop();
}




//TODO その他ストーリーイベント
function startKanshoBoss() {
  openStoryScene(KANSHO_TRIAL, () => {
    loadEnemy([
      makeStoryEnemy("leviata")
    ]);
    startTurnLoop();
  });
}

function finishKansho() {
  openStoryScene([
    {
      type: "summary",
      text: "遺跡の奥から古い航路図が現れた"
    },
    {
      type: "summary",
      text: "蒼海航路図を手に入れた"
    }
  ], () => {

    STORY_FLAGS.kanshoCleared = true;

    addLog("新たな航路が解放された！");
  });
}

function playDialogue(lines){

  disableCommands();

  lines.forEach(line=>{
    addLog(line);
  });

}

function updateMarciaTownButtons(townId = "marcia") {
  const townWeaponBtn = document.getElementById("town_weapon_btn");
  const townItemBtn   = document.getElementById("town_item_btn");
  const townArenaBtn  = document.getElementById("town_arena_btn");
  const townMerudiBtn = document.getElementById("town_merudi_btn");
  const townCasinoBtn = document.getElementById("townCasinoBtn");
  const townInfoBtn   = document.getElementById("town_info_btn");
  const townHouseBtn  = document.getElementById("town_house_btn");
  const townMixBtn    = document.getElementById("town_mix_btn");

  const allBtns = [
    townWeaponBtn,
    townItemBtn,
    townArenaBtn,
    townMerudiBtn,
    townCasinoBtn,
    townInfoBtn,
    townHouseBtn,
    townMixBtn
  ];

  allBtns.forEach((btn) => {
    if (btn) btn.style.display = "none";
  });

  if (townId === "marcia") {
    if (townWeaponBtn) townWeaponBtn.style.display = "";
    if (townItemBtn) townItemBtn.style.display = "";
    if (townArenaBtn) townArenaBtn.style.display = "";
    if (townMerudiBtn) townMerudiBtn.style.display = "";
    if (townCasinoBtn) townCasinoBtn.style.display = "";
    if (townInfoBtn) townInfoBtn.style.display = "";
    if (townHouseBtn) townHouseBtn.style.display = "";
    if (townMixBtn) townMixBtn.style.display = "";
    return;
  }

  if (townId === "castle") {
    if (townInfoBtn) townInfoBtn.style.display = "";
    if (townHouseBtn) townHouseBtn.style.display = "";
    return;
  }
  

  
}

function isEarlyAreaLevelCappedMap() {
  return currentMap === "plain" || currentMap === "labyrinth";
}

function isMidAreaLevelCappedMap() {
  return currentMap === "desert" || currentMap === "gladio";
}


//TODO 保存・読み込み・フラグ修正
function loadStoryFlags() {
  merudiJoined = JSON.parse(localStorage.getItem("merudiJoined") || "false");
  merudiMet = JSON.parse(localStorage.getItem("merudiMet") || "false");
  merudiShopEventDone = JSON.parse(localStorage.getItem("merudiShopEventDone") || "false");
  merudiMansionUnlocked = JSON.parse(localStorage.getItem("merudiMansionUnlocked") || "false");
  merudiMansionEventDone = JSON.parse(localStorage.getItem("merudiMansionEventDone") || "false");
  merudiJoinEventDone = JSON.parse(localStorage.getItem("merudiJoinEventDone") || "false");
  villageChiefEventDone = JSON.parse(localStorage.getItem("villageChiefEventDone") || "false");
  villagePeopleEventDone = JSON.parse(localStorage.getItem("villagePeopleEventDone") || "false");
  villageTreasureOpened = JSON.parse(localStorage.getItem("villageTreasureOpened") || "false");
  villageTreasureHintShown = JSON.parse(localStorage.getItem("villageTreasureHintShown") || "false");
villageRebellionTalkDone = JSON.parse(localStorage.getItem("villageRebellionTalkDone") || "false");
villageOldmanTalkDone = JSON.parse(localStorage.getItem("villageOldmanTalkDone") || "false");
plainHerbTaken = JSON.parse(localStorage.getItem("plainHerbTaken") || "false");
desertHouseTalkDone = JSON.parse(localStorage.getItem("desertHouseTalkDone") || "false");
redDragonFangTaken = JSON.parse(localStorage.getItem("redDragonFangTaken") || "false");
oasisDrainFound = JSON.parse(localStorage.getItem("oasisDrainFound") || "false");
oasisDrainOpened = JSON.parse(localStorage.getItem("oasisDrainOpened") || "false");
gladioLibrarySolved = JSON.parse(localStorage.getItem("gladioLibrarySolved") || "false");
gladioUndergroundOpened = JSON.parse(localStorage.getItem("gladioUndergroundOpened") || "false");
gladioBookOrderProgress = JSON.parse(localStorage.getItem("gladioBookOrderProgress") || "[]");
gladioPrisonEventDone = JSON.parse(localStorage.getItem("gladioPrisonEventDone") || "false");
gladioBeautyReleased = JSON.parse(localStorage.getItem("gladioBeautyReleased") || "false");
gladioBeautyMonsterDefeated = JSON.parse(localStorage.getItem("gladioBeautyMonsterDefeated") || "false");
gladioUndergroundFloor = JSON.parse(localStorage.getItem("gladioUndergroundFloor") || "0");
gladioUndergroundEntered = JSON.parse(localStorage.getItem("gladioUndergroundEntered") || "false");
gladioUndergroundTrueOpened = JSON.parse(localStorage.getItem("gladioUndergroundTrueOpened") || "false");
gladioUndergroundLoopSeen = JSON.parse(localStorage.getItem("gladioUndergroundLoopSeen") || "false");
lumeniaPortLocked = JSON.parse(localStorage.getItem("lumeniaPortLocked") || "true");
lumeniaPirateWins = JSON.parse(localStorage.getItem("lumeniaPirateWins") || "0");
lumeniaPortUnlockedStoryDone = JSON.parse(localStorage.getItem("lumeniaPortUnlockedStoryDone") || "false");
lumeniaGuildTalkDone = JSON.parse(localStorage.getItem("lumeniaGuildTalkDone") || "false");
lumeniaHouseTalkDone = JSON.parse(localStorage.getItem("lumeniaHouseTalkDone") || "false");
lumeniaPortBlockedStoryDone = JSON.parse(localStorage.getItem("lumeniaPortBlockedStoryDone") || "false");
lumeniaLighthouseEventDone = JSON.parse(localStorage.getItem("lumeniaLighthouseEventDone") || "false");
lumeniaMarketEventDone = JSON.parse(localStorage.getItem("lumeniaMarketEventDone") || "false");
zeekReunionEventDone = JSON.parse(localStorage.getItem("zeekReunionEventDone") || "false");
zeekJoined = JSON.parse(localStorage.getItem("zeekJoined") || "false");
gladioReturnFromLumeniaEventDone = JSON.parse(localStorage.getItem("gladioReturnFromLumeniaEventDone") || "false");
volcanoIntroPlayed = JSON.parse(localStorage.getItem("volcanoIntroPlayed") || "false");
volcanoSoldierSaved = JSON.parse(localStorage.getItem("volcanoSoldierSaved") || "false");
volcanoMidEventPlayed = JSON.parse(localStorage.getItem("volcanoMidEventPlayed") || "false");
volcanoCoreReached = JSON.parse(localStorage.getItem("volcanoCoreReached") || "false");
volcanoBossDefeated = JSON.parse(localStorage.getItem("volcanoBossDefeated") || "false");
volcanoEndEventPlayed = JSON.parse(localStorage.getItem("volcanoEndEventPlayed") || "false");
zeekDefeatedInGladio = JSON.parse(localStorage.getItem("zeekDefeatedInGladio") || "false");
midAreaLevelCapStoryPlayed = JSON.parse(localStorage.getItem("midAreaLevelCapStoryPlayed") || "false");
oasisIntroSeen = JSON.parse(localStorage.getItem("oasisIntroSeen") || "false");
forceGladioOnly = JSON.parse(localStorage.getItem("forceGladioOnly") || "false");
volcanoRescueOpened = JSON.parse(localStorage.getItem("volcanoRescueOpened") || "false");
volcanoMidOpened = JSON.parse(localStorage.getItem("volcanoMidOpened") || "false");
volcanoCoreOpened = JSON.parse(localStorage.getItem("volcanoCoreOpened") || "false");
villageTreasureHintShown = JSON.parse(localStorage.getItem("villageTreasureHintShown") || "false");
storyBattleMode = JSON.parse(localStorage.getItem("storyBattleMode") || "true");
currentEnemy = JSON.parse(localStorage.getItem("currentEnemy") || "null");
currentEnemies = JSON.parse(localStorage.getItem("currentEnemies") || "[]");
battleReturnTo = JSON.parse(localStorage.getItem("battleReturnTo") || "null");
openingBattleStarted = JSON.parse(localStorage.getItem("openingBattleStarted") || "false");
casinoProfitTotal = JSON.parse(localStorage.getItem("casinoProfitTotal") || "0");

// ===== ここから追加：キャラ状態・所持品・所持金の読み込み =====
  const loadedStates = JSON.parse(localStorage.getItem("unitStates") || "{}");

Object.keys(loadedStates).forEach(id => {
  unitStates[id] = loadedStates[id];
});

  const loadedParty = JSON.parse(
  localStorage.getItem("party") || JSON.stringify(DEFAULT_PARTY)
);

party.front = loadedParty.front ?? DEFAULT_PARTY.front;
party.back = loadedParty.back ?? DEFAULT_PARTY.back;

  gold = JSON.parse(localStorage.getItem("gold") || "0");
  arenaPoints = JSON.parse(localStorage.getItem("arenaPoints") || "0");
  currentMap = JSON.parse(localStorage.getItem("currentMap") || '"village"');

  // INV が Map の場合
  const invRaw = JSON.parse(localStorage.getItem("INV") || "[]");
  if (typeof INV !== "undefined" && INV instanceof Map) {
    INV.clear();
    invRaw.forEach(([name, count]) => {
      INV.set(name, count);
    });
  }

  const savedMapVisited = JSON.parse(localStorage.getItem("mapVisited") || "{}");

Object.keys(savedMapVisited).forEach((mapId) => {
  if (STORY_MAPS[mapId]) {
    STORY_MAPS[mapId].visited = !!savedMapVisited[mapId];
  }
});

  // ユニット状態の最低限補正
  Object.keys(unitStates).forEach(unitId => {
    const st = unitStates[unitId];
    if (!st) return;

    if (!Array.isArray(st.items)) st.items = [];
    if (!st.equip) st.equip = { weapon: null, armor: null, shield: null };
    if (!st.equipDurability) st.equipDurability = { weapon: 0, armor: 0, shield: 0 };
    if (!Array.isArray(st.skills)) st.skills = [];
    if (!Array.isArray(st.buffs)) st.buffs = [];
    if (st.dragonGem == null) st.dragonGem = null;
  });

  ensurePartyValid();

  if (party.front) {
    applyUnitToCurrent(party.front);
  }
}

function saveStoryFlags() {
  localStorage.setItem("merudiJoined", JSON.stringify(merudiJoined));
  localStorage.setItem("merudiMet", JSON.stringify(merudiMet));
  localStorage.setItem("merudiShopEventDone", JSON.stringify(merudiShopEventDone));
  localStorage.setItem("merudiMansionUnlocked", JSON.stringify(merudiMansionUnlocked));
  localStorage.setItem("merudiMansionEventDone", JSON.stringify(merudiMansionEventDone));
  localStorage.setItem("merudiJoinEventDone", JSON.stringify(merudiJoinEventDone));

  localStorage.setItem("villageChiefEventDone", JSON.stringify(villageChiefEventDone));
  localStorage.setItem("villagePeopleEventDone", JSON.stringify(villagePeopleEventDone));
  localStorage.setItem("villageTreasureOpened", JSON.stringify(villageTreasureOpened));
  localStorage.setItem("villageTreasureHintShown", JSON.stringify(villageTreasureHintShown));
  
  localStorage.setItem("villageTreasureHintShown", JSON.stringify(villageTreasureHintShown));
localStorage.setItem("villageRebellionTalkDone", JSON.stringify(villageRebellionTalkDone));
localStorage.setItem("villageOldmanTalkDone", JSON.stringify(villageOldmanTalkDone));
localStorage.setItem("plainHerbTaken", JSON.stringify(plainHerbTaken));
localStorage.setItem("desertHouseTalkDone", JSON.stringify(desertHouseTalkDone));
localStorage.setItem("redDragonFangTaken", JSON.stringify(redDragonFangTaken));
localStorage.setItem("oasisDrainFound", JSON.stringify(oasisDrainFound));
localStorage.setItem("oasisDrainOpened", JSON.stringify(oasisDrainOpened));
localStorage.setItem("gladioLibrarySolved", JSON.stringify(gladioLibrarySolved));
localStorage.setItem("gladioUndergroundOpened", JSON.stringify(gladioUndergroundOpened));
localStorage.setItem("gladioBookOrderProgress", JSON.stringify(gladioBookOrderProgress));
localStorage.setItem("gladioPrisonEventDone", JSON.stringify(gladioPrisonEventDone));
localStorage.setItem("gladioBeautyReleased", JSON.stringify(gladioBeautyReleased));
localStorage.setItem("gladioBeautyMonsterDefeated", JSON.stringify(gladioBeautyMonsterDefeated));
localStorage.setItem("gladioUndergroundFloor", JSON.stringify(gladioUndergroundFloor));
localStorage.setItem("gladioUndergroundEntered", JSON.stringify(gladioUndergroundEntered));
localStorage.setItem("gladioUndergroundTrueOpened", JSON.stringify(gladioUndergroundTrueOpened));
localStorage.setItem("gladioUndergroundLoopSeen", JSON.stringify(gladioUndergroundLoopSeen));
localStorage.setItem("lumeniaPortLocked", JSON.stringify(lumeniaPortLocked));
localStorage.setItem("lumeniaPirateWins", JSON.stringify(lumeniaPirateWins));
localStorage.setItem("lumeniaPortUnlockedStoryDone", JSON.stringify(lumeniaPortUnlockedStoryDone));
localStorage.setItem("lumeniaGuildTalkDone", JSON.stringify(lumeniaGuildTalkDone));
localStorage.setItem("lumeniaHouseTalkDone", JSON.stringify(lumeniaHouseTalkDone));
localStorage.setItem("lumeniaPortBlockedStoryDone", JSON.stringify(lumeniaPortBlockedStoryDone));
localStorage.setItem("lumeniaLighthouseEventDone", JSON.stringify(lumeniaLighthouseEventDone));
localStorage.setItem("lumeniaMarketEventDone", JSON.stringify(lumeniaMarketEventDone));
localStorage.setItem("zeekReunionEventDone", JSON.stringify(zeekReunionEventDone));
localStorage.setItem("zeekJoined", JSON.stringify(zeekJoined));
localStorage.setItem("gladioReturnFromLumeniaEventDone", JSON.stringify(gladioReturnFromLumeniaEventDone));
localStorage.setItem("volcanoIntroPlayed", JSON.stringify(volcanoIntroPlayed));
localStorage.setItem("volcanoSoldierSaved", JSON.stringify(volcanoSoldierSaved));
localStorage.setItem("volcanoMidEventPlayed", JSON.stringify(volcanoMidEventPlayed));
localStorage.setItem("volcanoCoreReached", JSON.stringify(volcanoCoreReached));
localStorage.setItem("volcanoBossDefeated", JSON.stringify(volcanoBossDefeated));
localStorage.setItem("volcanoEndEventPlayed", JSON.stringify(volcanoEndEventPlayed));
localStorage.setItem("zeekDefeatedInGladio", JSON.stringify(zeekDefeatedInGladio));
localStorage.setItem("midAreaLevelCapStoryPlayed", JSON.stringify(midAreaLevelCapStoryPlayed));
localStorage.setItem("oasisIntroSeen", JSON.stringify(oasisIntroSeen));
localStorage.setItem("forceGladioOnly", JSON.stringify(forceGladioOnly));
localStorage.setItem("volcanoRescueOpened", JSON.stringify(volcanoRescueOpened));
localStorage.setItem("volcanoMidOpened", JSON.stringify(volcanoMidOpened));
localStorage.setItem("volcanoCoreOpened", JSON.stringify(volcanoCoreOpened));

localStorage.setItem("storyBattleMode", JSON.stringify(storyBattleMode));
localStorage.setItem("currentEnemy", JSON.stringify(currentEnemy));
localStorage.setItem("currentEnemies", JSON.stringify(currentEnemies));
localStorage.setItem("battleReturnTo", JSON.stringify(battleReturnTo));
localStorage.setItem("openingBattleStarted", JSON.stringify(openingBattleStarted));
localStorage.setItem("casinoProfitTotal", JSON.stringify(casinoProfitTotal));

// ===== ここから追加：キャラ状態・所持品・所持金の保存 =====
  saveGlobalsToState();

localStorage.setItem("unitStates", JSON.stringify(unitStates));
localStorage.setItem("party", JSON.stringify(party));
localStorage.setItem("gold", JSON.stringify(gold));
localStorage.setItem("arenaPoints", JSON.stringify(arenaPoints));
localStorage.setItem("currentMap", JSON.stringify(currentMap));
localStorage.setItem("INV", JSON.stringify(Array.from(INV.entries())));

  // INV が Map の場合
  if (typeof INV !== "undefined" && INV instanceof Map) {
    localStorage.setItem("INV", JSON.stringify(Array.from(INV.entries())));
  }

  const mapVisited = {};

Object.keys(STORY_MAPS).forEach((mapId) => {
  mapVisited[mapId] = !!STORY_MAPS[mapId].visited;
});

localStorage.setItem("mapVisited", JSON.stringify(mapVisited));
}

function fixMerudiSaveData() {
  // メルディ加入イベントをまだ正規に通っていない想定で初期化したい場合
  // いったん全部リセットする
  merudiJoined = false;
  merudiMet = false;
  merudiShopEventDone = false;
  merudiMansionUnlocked = false;
  merudiMansionEventDone = false;
  merudiJoinEventDone = false;
  villageChiefEventDone = false;
  villagePeopleEventDone = false;
  villageTreasureOpened = false;

  // パーティからも除外
  if (party.front === "merudi") {
    party.front = DEFAULT_PARTY.front;
  }
  if (party.back === "merudi") {
    party.back = null;
  }

  saveParty(party);
  saveStoryFlags();
}


































































































































//! <11.ショップ/アイテム>
//TODOドロップ(抽選)
function weightedPick(table){
  const total = table.reduce((s,it)=>s+it.weight,0);
  let r = Math.random()*total;
  for (const it of table){ r-=it.weight; if(r<=0) return it; }
  return table[table.length-1];
}

function rollDrop(){ if(Math.random()>=DROP_RATE) return null; return weightedPick(DROP_TABLE).name; }


//TODOインベントリ(所持管理)
function renderInventoryList(){
  if(!inventoryList) return;
  inventoryList.innerHTML = "";
  const items = Array.from(INV.entries()).sort((a,b)=>a[0].localeCompare(b[0],'ja'));
  for(const [name,count] of items){
    const li = document.createElement("li");
    li.textContent = `${name} ×${count}`;
    li.dataset.name = name; 
    inventoryList.appendChild(li);
  }
}

function invAdd(name, n=1){ INV.set(name, (INV.get(name)||0) + n); renderInventoryList(); 
  saveStoryFlags();
}

function invRemove(name, n=1){
  const cur = INV.get(name)||0;
  const next = Math.max(0, cur - n);
  if (next === 0) INV.delete(name); else INV.set(name, next);
  renderInventoryList();
   saveStoryFlags();
}

function invCount(name){ return INV.get(name)||0; }

function addToInventory(itemName){ invAdd(itemName, 1); addLog(`${itemName}を手に入れた！`); }


//TODOショップ(効果適用)
function useItem(itemName) {
  flushLogs();
  if (!isPlayerTurn) return;

  instantLogMode = true;

  const dragonGem = getDragonGemByName(itemName);
if (dragonGem) {
  equipDragonGem(itemName);

  if (inventoryBox) inventoryBox.classList.remove("is-open");
  instantLogMode = false;
  endTurn();
  return;
}

  const item = findItemByName(itemName);
  if (!item) {
    addLog(`${itemName}を使った!`);
    instantLogMode = false;
    return;
  }

  // 装備品
  if (item.kind === "weapon" || item.kind === "armor" || item.kind === "shield") {
    equipItem(item.kind, item.name);
    invRemove(item.name, 1);

    if (inventoryBox) inventoryBox.classList.remove("is-open");
    instantLogMode = false;
    endTurn();
    return;
  }
  

  // 消耗品
  if (item.effectType === "heal_hp") {
    playerHP = Math.min(playerMaxHP, playerHP + item.value);
    addLog(`${item.name}を使ってHPが${item.value}回復した！`);
  }

  if (item.effectType === "heal_mp") {
    playerMP = Math.min(playerMaxMP, playerMP + item.value);
    addLog(`${item.name}を使ってMPが${item.value}回復した！`);
    updatePlayerMP();
  }

  if (item.effectType === "buff") {
    addBuff(currentUnitId, {
      stat: item.statName,
      value: item.value,
      turns: item.turns,
      name: item.name
    });
    addLog(`${item.name}を使った！ ${item.statName}+${item.value}（${item.turns}ターン）`);
  }

  if (item.effectType === "revive") {
    const targetId = party.front;
    const target = getUnitState(targetId);

    if (!target || target.hp > 0) {
      addLog("復活させる対象がいない！");
      instantLogMode = false;
      return;
    }

    target.hp = Math.floor(target.maxHP * 0.5);
    if (targetId === currentUnitId) {
      playerHP = target.hp;
    }
    addLog(`${target.name}は復活した！`);
  }

  updatePlayerHP();
  invRemove(item.name, 1);

  if (inventoryBox) inventoryBox.classList.remove("is-open");

  instantLogMode = false;
  endTurn();
}


//TODOショップ(価格計算)
function findItemByName(name){ return SHOP_ITEMS.find(it => it.name === name) || null; }

function getSellPrice(name){ const m = findItemByName(name); return m ? Math.max(1, Math.floor(m.price*0.5)) : 10; }


//TODOショップ(描画・UI)
function renderShopList(itemList = SHOP_ITEMS) {
  if (!shopList) return;
  shopList.innerHTML = "";

  if (SHOP_MODE === "buy") {
    itemList.forEach(it => {
      const li = document.createElement("li");
      li.dataset.key = it.key;

      const info = document.createElement("div");
      const nm = document.createElement("div");
      nm.className = "shop_item_name";
      nm.textContent = it.name;

      const pr = document.createElement("div");
      pr.className = "shop_item_price";
      pr.textContent = `${it.price}G`;

      info.appendChild(nm);
      info.appendChild(pr);

      const btn = document.createElement("button");
      btn.className = "shop_buy";
      btn.type = "button";
      btn.dataset.key = it.key;
      btn.textContent = "購入";

      li.appendChild(info);
      li.appendChild(btn);
      shopList.appendChild(li);

      li.addEventListener("mouseenter", () => updateShopDetail(it.key));
      li.addEventListener("mouseleave", () => updateShopDetail(null));
      li.addEventListener("focusin", () => updateShopDetail(it.key));
      li.addEventListener("focusout", () => updateShopDetail(null));
    });

    updateShopDetail(null);
  } else {
    const entries = Array.from(INV.entries()).filter(([, cnt]) => cnt > 0);

    if (entries.length === 0) {
      const li = document.createElement("li");
      li.textContent = "売れるアイテムがありません。";
      shopList.appendChild(li);
      return;
    }

    entries.sort((a, b) => a[0].localeCompare(b[0], "ja"));

    entries.forEach(([name, cnt]) => {
      const li = document.createElement("li");

      const info = document.createElement("div");
      const nm = document.createElement("div");
      nm.className = "shop_item_name";
      nm.textContent = `${name} ×${cnt}`;

      const pr = document.createElement("div");
      pr.className = "shop_item_price";
      pr.textContent = `${getSellPrice(name)}G で売却`;

      info.appendChild(nm);
      info.appendChild(pr);

      const btn = document.createElement("button");
      btn.className = "shop_sell";
      btn.type = "button";
      btn.dataset.name = name;
      btn.textContent = "売る";

      li.appendChild(info);
      li.appendChild(btn);
      shopList.appendChild(li);
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

function setShopTabUI(){
  shopTabBuy?.classList.toggle("is-active", SHOP_MODE==="buy");
  shopTabSell?.classList.toggle("is-active", SHOP_MODE==="sell");
}

function updateGoldUI(){ refreshStatusIfOpen(); }

function renderArenaShopList() {
  if (!arenaShopList) return;

  arenaShopList.innerHTML = "";

  if (arenaShopPoints) {
    arenaShopPoints.textContent = `所持ポイント: ${arenaPoints}pt`;
  }

  ARENA_SHOP_ITEMS.forEach(item => {
    const li = document.createElement("li");

    const info = document.createElement("div");
    info.className = "arena_shop_info";

    const name = document.createElement("div");
    name.className = "arena_shop_name";
    name.textContent = item.name;

    const price = document.createElement("div");
    price.className = "arena_shop_price";
    price.textContent = `${item.cost}pt`;

    const desc = document.createElement("div");
    desc.className = "arena_shop_desc";
    desc.textContent = `内容: ${item.reward.name} ×${item.reward.amount}`;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = "交換";
    btn.disabled = arenaPoints < item.cost;

    btn.addEventListener("click", () => {
      buyArenaShopItem(item.key);
    });

    info.appendChild(name);
    info.appendChild(price);
    info.appendChild(desc);

    li.appendChild(info);
    li.appendChild(btn);

    arenaShopList.appendChild(li);
  });
}

function openArenaShop() {
  renderArenaShopList();
  closeFacilityOverlay(arenaOverlay);
  openFacilityOverlay(arenaShopOverlay);
}

function closeArenaShop() {
  closeFacilityOverlay(arenaShopOverlay);
  openFacilityOverlay(arenaOverlay);
}




//TODOショップ(購入・売却)
function buyItem(item) {
  if (gold < item.price) {
    addLog("お金が足りない！");
    return;
  }

  gold -= item.price;
  updateGoldUI();

  const amount = item.kind === "consumable" ? (item.usesPerBuy || 1) : 1;
  invAdd(item.name, amount);

  addLog(`${item.name}を購入した！（-${item.price}G / 所持金：${gold}G）`);
  if (item.kind === "consumable" && amount > 1) {
    addLog(`${item.name}の使用回数が${amount}回分追加された！`);
  }

  if (weaponGoldLabel) weaponGoldLabel.textContent = `所持金: ${gold}G`;
if (itemGoldLabel) itemGoldLabel.textContent = `所持金: ${gold}G`;

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

function buyArenaShopItem(itemKey) {
  const item = ARENA_SHOP_ITEMS.find(x => x.key === itemKey);
  if (!item) return;

  if (arenaPoints < item.cost) {
    addLog("闘技場ポイントが足りない！");
    return;
  }

  arenaPoints -= item.cost;
  localStorage.setItem("arenaPoints", String(arenaPoints));

  invAdd(item.reward.name, item.reward.amount);

  addLog(`${item.name}を交換した！`);
  addLog(`${item.reward.name}を${item.reward.amount}個手に入れた！`);

  renderArenaShopList();
  refreshStatusIfOpen();
}


//TODO装備・成長
function applyBonus(bonus, sign) {
  if (!bonus) return;

  for (const [k, v] of Object.entries(bonus)) {
    if (k === "MP") {
      playerMaxMP += sign * v;
      if (sign > 0) playerMP += v;
      playerMP = Math.min(playerMP, playerMaxMP);
      continue;
    }

    if (typeof stats[k] === "number") {
      stats[k] += sign * v;
    }
  }
}
function equipItem(slot, itemName) {
  const prev = EQUIP[slot];
  const prevBonus = getEquipStatBonus(prev);

  if (prev && prevBonus) {
    applyBonus(prevBonus, -1);
  }

  EQUIP[slot] = itemName;

  const nextBonus = getEquipStatBonus(itemName);
  if (nextBonus) {
    applyBonus(nextBonus, +1);
  }

  EQUIP_DURABILITY[slot] = getEquipMaxDurability(itemName);

  saveGlobalsToState();
  addLog(`${itemName}を装備した！`);
  updateStatusUI();
  updatePlayerHP();
  updatePlayerMP();
}

function reduceEquipDurability(slot, amount = 1) {
  if (!EQUIP[slot]) return;

  EQUIP_DURABILITY[slot] = Math.max(0, (EQUIP_DURABILITY[slot] || 0) - amount);

  if (EQUIP_DURABILITY[slot] > 0) return;

  const brokenItem = EQUIP[slot];
  const bonus = getEquipStatBonus(brokenItem);
  if (bonus) applyBonus(bonus, -1);

  EQUIP[slot] = null;
  EQUIP_DURABILITY[slot] = 0;

  addLog(`${brokenItem}は壊れてしまった……`);
  saveGlobalsToState();
  updateStatusUI();
  updatePlayerHP();
  updatePlayerMP();
}
















//! <11.起動（DOMContentLoaded）
// ===== イベント束ね =====
document.addEventListener("DOMContentLoaded", () => {
  $(document).on("click", "#formation_btn", function () {
  if (!isFormationUnlocked()) return;
  openUnitOverlay();
});

$(document).on("click", ".unit_item", function () {
  const unitId = String($(this).data("unit"));
  if (!UNITS[unitId]) return;

  if (selectingSlot === "front") {
    party.front = unitId;
    if (party.back === unitId) party.back = null;
  } else {
    if (party.front === unitId) {
      addLog("前衛と同じユニットは後衛に配置できません。");
      return;
    }
    party.back = unitId;
  }

  ensurePartyValid();
  saveParty(party);
  renderFormationUI();
  updatePartyView();

  if (party.front) applyUnitToCurrent(party.front);
});



$(document).on("click", "#slot_front", function () {
  selectingSlot = "front";
  renderFormationUI();
});

$(document).on("click", "#slot_back", function () {
  selectingSlot = "back";
  renderFormationUI();
});

$(document).on("click", "#swap_slots", function () {
  const tmp = party.front;
  party.front = party.back;
  party.back = tmp;

  ensurePartyValid();
  saveParty(party);
  renderFormationUI();
  updatePartyView();

  if (party.front) applyUnitToCurrent(party.front);
});

$(document).on("click", "#clear_back", function () {
  party.back = null;
  ensurePartyValid();
  saveParty(party);
  renderFormationUI();
  updatePartyView();
});

$(document).on("click", "#unit_cancel_btn", function () {
  closeUnitOverlay();
});

$(document).on("click", "#unit_overlay", function (e) {
  if (e.target === this) closeUnitOverlay();
});

$(document).on("keydown", function (e) {
  if (e.key === "Escape" && $("#unit_overlay").attr("aria-hidden") === "false") {
    closeUnitOverlay();
  }
});


  inventoryList?.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li || !inventoryList.contains(li)) return;
    const name = li.dataset.name;
    if (!name) return;
    useItem(name);
  });

  skillBtn?.addEventListener("click", toggleSkillUI);
  skillBox?.addEventListener("click", (e) => {
    const btn = e.target.closest(".skill_item_btn");
    if (!btn || !skillBox.contains(btn)) return;

    const skillId = btn.dataset.skillId;
    if (!skillId) return;

    useSkill(skillId);
  });
  storyBtn?.addEventListener("click", () => {
  refreshStoryMapUI();
  storyOverlay.classList.add("is-open");
  storyOverlay.setAttribute("aria-hidden", "false");
});

  backBtn?.addEventListener("click", () => { window.location.href = "index.html"; });

  attackBtn?.addEventListener("click", attack);
  guardBtn?.addEventListener("click", guard);
  spellBtn?.addEventListener("click", castSpell);
  itemBtn?.addEventListener("click", ()=> inventoryBox?.classList.toggle("is-open"));
  

  statusBtn?.addEventListener("click", toggleStatusUI);
  mapBtn?.addEventListener("click", () => {
  openMapOverlay(currentMap);
});

mapCloseBtn?.addEventListener("click", closeMapOverlay);

mapOverlay?.addEventListener("click", (e) => {
  if (e.target === mapOverlay) {
    closeMapOverlay();
  }
});
  



  

  // shopBtn?.addEventListener("click", () => {
  //   SHOP_MODE="buy";
  //   setShopTabUI();
  //   renderShopList();
  //   toggleShop(true);
  // });
  shopBtn?.addEventListener("click", openMapShop);
  shopCloseBtn?.addEventListener("click", () => toggleShop(false));
  shopTabBuy?.addEventListener("click", () => {
  SHOP_MODE = "buy";
  setShopTabUI();
  renderShopList(CURRENT_SHOP_ITEMS);
});


shopTabSell?.addEventListener("click", () => {
  SHOP_MODE = "sell";
  setShopTabUI();
  renderShopList(CURRENT_SHOP_ITEMS);
});

// mapBtn?.addEventListener("click", () => {
//   console.log("MAPボタン押された");
//   console.log("currentMap =", currentMap);
//   console.log("map =", STORY_MAPS[currentMap]);

//   const map = STORY_MAPS[currentMap];

//   if (!currentMap || !map) {
//     console.log("currentMapかmapがない");
//     showMapMessage("今はマップを開けない。");
//     return;
//   }

//   if (map.type === "town") {
//     console.log("townなのでopenTownMapへ");
//     openTownMap(currentMap);
//     return;
//   }

//   console.log("fieldなのでopenMapOverlayへ");
//   openMapOverlay(currentMap);
// });

townWeaponBtn?.addEventListener("click", openWeaponShopOverlay);
townItemBtn?.addEventListener("click", openItemShopOverlay);
townArenaBtn?.addEventListener("click", openArenaOverlay);
townMerudiBtn?.addEventListener("click", openMerudiOverlay);
townExitBtn?.addEventListener("click", leaveMarciaTown);

weaponCloseBtn?.addEventListener("click", () => closeFacilityOverlay(weaponOverlay));
itemCloseBtn?.addEventListener("click", () => closeFacilityOverlay(itemOverlay));
arenaCloseBtn?.addEventListener("click", () => closeFacilityOverlay(arenaOverlay));
merudiCloseBtn?.addEventListener("click", () => closeFacilityOverlay(merudiOverlay));
townInfoBtn?.addEventListener("click", openInfoOverlay);
townHouseBtn?.addEventListener("click", openHouseOverlay);
townMixBtn?.addEventListener("click", openMixOverlay);

arenaBeginnerBtn?.addEventListener("click", () => startArenaBattle("beginner"));
arenaMiddleBtn?.addEventListener("click", () => startArenaBattle("middle"));
arenaAdvancedBtn?.addEventListener("click", () => startArenaBattle("advanced"));
arenaMasterBtn?.addEventListener("click", () => startArenaBattle("master"));
commandPanel?.classList.add("is-open");
commandPanel && (commandPanel.style.display = "block");
townCasinoBtn?.addEventListener("click", () => {
  openStoryScene(CASINO_OWNER_INTRO, () => {
    openCasinoOverlay();
  });
});
arenaShopBtn?.addEventListener("click", () => {
  openArenaShop();
});

arenaShopClose?.addEventListener("click", () => {
  closeArenaShop();
});

arenaShopOverlay?.addEventListener("click", (e) => {
  if (e.target === arenaShopOverlay) {
    closeArenaShop();
  }
});

casinoHeadsBtn?.addEventListener("click", () => playCasino("表"));
casinoTailsBtn?.addEventListener("click", () => playCasino("裏"));
casinoCloseBtn?.addEventListener("click", closeCasinoOverlay);


  shopList?.addEventListener("click", (e) => {
    const buyBtn = e.target.closest("button.shop_buy");
    if (buyBtn){
      const key = buyBtn.dataset.key;
      const item = SHOP_ITEMS.find(i => i.key === key);
      if (item) buyItem(item);
      return;
    }
    const sellBtn = e.target.closest("button.shop_sell");
    if (sellBtn){
      const name = sellBtn.dataset.name;
      sellItem(name);
      return;
    }
  });

  goRetry?.addEventListener("click", () => {
    closeOverlay(goOverlay);
    restartBattle();
  });
  goClose?.addEventListener("click", () => closeOverlay(goOverlay));
  goIndex?.addEventListener("click", () => { window.location.href = "index.html"; });

    statusSwitchBtn?.addEventListener("click", toggleStatusView);
    storySceneOverlay?.addEventListener("click", nextStoryScenePage);

  storyClose?.addEventListener("click", () => {
    storyOverlay.classList.remove("is-open");
    storyOverlay.setAttribute("aria-hidden", "true");
  });

//   // ここから初期セットアップ
//   if (!openingBattleStarted) {
//   startOpeningBattle();
// } else {
//   applyCurrentMapBackground();
// }
  // 保存データ補正
  loadStoryFlags(); 

applyCurrentMapBackground();

  // 一度だけ保存データ補正
if (!merudiJoined) {
  if (party.front === "merudi") party.front = DEFAULT_PARTY.front;
  if (party.back === "merudi") party.back = null;
  saveParty(party);
}
  preloadEnemyImages();
  refreshStoryMapUI();

  ensurePartyValid();
  applyUnitToCurrent(party.front);
  updatePartyView();
  normalizeStatusViewSlot();

  renderShopList();
  renderInventoryList();
  updateEnemyHP();
  updatePlayerHP();
  updateGoldUI();
  updatePlayerMP();
  updateMarciaTownButtons();
  updateStatusUI();

  console.log("reload currentMap =", currentMap);
console.log("reload currentEnemies =", currentEnemies);
console.log("reload currentEnemy =", currentEnemy);
console.log("reload openingBattleStarted =", openingBattleStarted);
  

const hasRestorableEnemies =
  Array.isArray(currentEnemies) &&
  currentEnemies.some(e => e && Number(e.hp) > 0);

if (hasRestorableEnemies) {
  loadEnemy(currentEnemies);
  startTurnLoop();
} else if (currentEnemy && Number(currentEnemy.hp) > 0) {
  loadEnemy([currentEnemy]);
  startTurnLoop();
} else if (!openingBattleStarted) {
  startOpeningBattle();
} else {
  resumeCurrentMap();
}

//   if (!currentMap) {
//   currentMap = "village";
// }

  if (skillBox) {
  skillBox.classList.remove("is-open");
  skillBox.style.display = "none";
  skillBox.setAttribute("aria-hidden", "true");
}

  

  const allowScrollSel = [".rog_box", ".inventory_box", ".shop_box", ".status_box"];
  document.addEventListener("touchmove", (e) => {
    if (allowScrollSel.some(sel => e.target.closest(sel))) return;
    e.preventDefault();
  }, { passive: false });

  const frontUnitNameBtn = document.getElementById("front_unit_name");
const backUnitNameBtn  = document.getElementById("back_unit_name");

frontUnitNameBtn?.addEventListener("click", () => {
  if (!party.front) return;

  statusViewSlot = "front";
  updateStatusUI();

  if (statusBox) {
    statusBox.classList.add("is-open");
    statusBox.style.display = "block";
    statusBox.setAttribute("aria-hidden", "false");
  }
});

backUnitNameBtn?.addEventListener("click", () => {
  if (!party.back) return;

  statusViewSlot = "back";
  updateStatusUI();

  if (statusBox) {
    statusBox.classList.add("is-open");
    statusBox.style.display = "block";
    statusBox.setAttribute("aria-hidden", "false");
  }
});
});



document.querySelectorAll(".map_node").forEach(btn => {
  btn.addEventListener("click", () => {
    const mapId = btn.dataset.map;
    const map = STORY_MAPS[mapId];
    if (!map) return;

    if (forceLumeniaOnly && mapId !== "lumenia") {
  showMapMessage("今は海上都市ルーメリアへ向かうしかない。");
  return;
}

if (forceGladioOnly && mapId !== "gladio") {
  showMapMessage("今はグラディオ廃城へ戻るしかない。");
  return;
}

    if (!map.unlocked) {
      addLog("まだ行けない場所だ");
      return;
    }

    if (forceLumeniaOnly && mapId === "lumenia") {
      forceLumeniaOnly = false;
      saveStoryFlags();
    }
    if (
      mapId === "gladio" &&
      forceGladioOnly &&
      !gladioReturnFromLumeniaEventDone &&
      !zeekReunionEventDone
    ) {
      playGladioReturnFromLumeniaEvent();
      return;
    }

    startMapStory(mapId);
  });
});











//! <12.ゲームオーバー>

function showGameOver(){ openOverlay(goOverlay, goRetry); }
function restartBattle() {
  playerHP = Math.min(playerMaxHP, Math.max(1, Math.floor(playerMaxHP * 0.5)));
  playerMP = playerMaxMP;
  isGuarding = false;

  const enemy = getRandomEnemyForCurrentMap();
  if (!enemy) return;

  loadEnemy(enemy);
  updatePlayerHP();
  updatePlayerMP();
  enableCommands();

  turnOrder = [];
  turnIndex = 0;
  isPlayerTurn = false;

  addLog("気力を振り絞って立ち上がった！（再挑戦）");
  startTurnLoop();
}

function clearGameSave() {
  localStorage.removeItem("merudiJoined");
  localStorage.removeItem("merudiMet");
  localStorage.removeItem("merudiShopEventDone");
  localStorage.removeItem("merudiMansionUnlocked");
  localStorage.removeItem("merudiMansionEventDone");
  localStorage.removeItem("merudiJoinEventDone");

  localStorage.removeItem("villageChiefEventDone");
  localStorage.removeItem("villagePeopleEventDone");
  localStorage.removeItem("villageTreasureOpened");
  localStorage.removeItem("villageTreasureHintShown");
  localStorage.removeItem("villageRebellionTalkDone");
  localStorage.removeItem("villageOldmanTalkDone");

  localStorage.removeItem("plainHerbTaken");
  localStorage.removeItem("desertHouseTalkDone");
  localStorage.removeItem("redDragonFangTaken");

  localStorage.removeItem("oasisDrainFound");
  localStorage.removeItem("oasisDrainOpened");

  localStorage.removeItem("gladioLibrarySolved");
  localStorage.removeItem("gladioUndergroundOpened");
  localStorage.removeItem("gladioBookOrderProgress");
  localStorage.removeItem("gladioPrisonEventDone");
  localStorage.removeItem("gladioBeautyReleased");
  localStorage.removeItem("gladioBeautyMonsterDefeated");
  localStorage.removeItem("gladioUndergroundFloor");
  localStorage.removeItem("gladioUndergroundEntered");
  localStorage.removeItem("gladioUndergroundTrueOpened");
  localStorage.removeItem("gladioUndergroundLoopSeen");

  localStorage.removeItem("lumeniaPortLocked");
  localStorage.removeItem("lumeniaPirateWins");
  localStorage.removeItem("lumeniaPortUnlockedStoryDone");
  localStorage.removeItem("lumeniaGuildTalkDone");
  localStorage.removeItem("lumeniaHouseTalkDone");
  localStorage.removeItem("lumeniaPortBlockedStoryDone");
  localStorage.removeItem("lumeniaLighthouseEventDone");
  localStorage.removeItem("lumeniaMarketEventDone");

  localStorage.removeItem("zeekReunionEventDone");
  localStorage.removeItem("zeekJoined");

  localStorage.removeItem("gladioReturnFromLumeniaEventDone");

  localStorage.removeItem("volcanoIntroPlayed");
  localStorage.removeItem("volcanoSoldierSaved");
  localStorage.removeItem("volcanoMidEventPlayed");
  localStorage.removeItem("volcanoCoreReached");
  localStorage.removeItem("volcanoBossDefeated");
  localStorage.removeItem("volcanoEndEventPlayed");

  localStorage.removeItem("zeekDefeatedInGladio");

  localStorage.removeItem("midAreaLevelCapStoryPlayed");
  localStorage.removeItem("oasisIntroSeen");

  localStorage.removeItem("forceGladioOnly");

  localStorage.removeItem("volcanoRescueOpened");
  localStorage.removeItem("volcanoMidOpened");
  localStorage.removeItem("volcanoCoreOpened");
  localStorage.removeItem("unitStates");
localStorage.removeItem("party");
localStorage.removeItem("gold");
localStorage.removeItem("arenaPoints");
localStorage.removeItem("currentMap");
localStorage.removeItem("INV");
localStorage.removeItem("storyBattleMode");
localStorage.removeItem("currentEnemy");
localStorage.removeItem("currentEnemies");
localStorage.removeItem("battleReturnTo");
localStorage.removeItem("mapVisited");
localStorage.removeItem("casinoProfitTotal");

  alert("セーブデータを削除しました");
  location.reload();
}