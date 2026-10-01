/* English Flow - independent educational implementation
   學習流程：
   聽音 → 拼寫 → 即時校驗 → 生字 → 間隔複習
*/

const WORDS = [
  ["apple","蘋果","n.","小學"],
  ["book","書；書本","n.","小學"],
  ["cat","貓","n.","小學"],
  ["dog","狗","n.","小學"],
  ["egg","蛋","n.","小學"],
  ["fish","魚","n.","小學"],
  ["friend","朋友","n.","小學"],
  ["happy","快樂的","adj.","小學"],
  ["house","房子","n.","小學"],
  ["school","學校","n.","小學"],
  ["teacher","老師","n.","小學"],
  ["student","學生","n.","小學"],
  ["family","家庭","n.","小學"],
  ["water","水","n.","小學"],
  ["food","食物","n.","小學"],
  ["morning","早上","n.","小學"],
  ["night","夜晚","n.","小學"],
  ["small","小的","adj.","小學"],
  ["big","大的","adj.","小學"],
  ["red","紅色的","adj.","小學"],
  ["blue","藍色的","adj.","小學"],
  ["green","綠色的","adj.","小學"],
  ["run","跑","v.","小學"],
  ["walk","走路","v.","小學"],
  ["read","閱讀","v.","小學"],
  ["write","寫","v.","小學"],
  ["eat","吃","v.","小學"],
  ["drink","喝","v.","小學"],
  ["sleep","睡覺","v.","小學"],
  ["play","玩；演奏","v.","小學"],

  ["animal","動物","n.","國中"],
  ["answer","答案；回答","n./v.","國中"],
  ["arrive","到達","v.","國中"],
  ["begin","開始","v.","國中"],
  ["beautiful","美麗的","adj.","國中"],
  ["because","因為","conj.","國中"],
  ["between","在兩者之間","prep.","國中"],
  ["careful","小心的","adj.","國中"],
  ["different","不同的","adj.","國中"],
  ["early","早的；提早","adv./adj.","國中"],
  ["enough","足夠的","adj./adv.","國中"],
  ["example","例子","n.","國中"],
  ["favorite","最喜愛的","adj./n.","國中"],
  ["important","重要的","adj.","國中"],
  ["invite","邀請","v.","國中"],
  ["learn","學習","v.","國中"],
  ["leave","離開；留下","v.","國中"],
  ["message","訊息","n.","國中"],
  ["practice","練習","n./v.","國中"],
  ["problem","問題","n.","國中"],
  ["remember","記得","v.","國中"],
  ["together","一起","adv.","國中"],
  ["usually","通常","adv.","國中"],
  ["without","沒有；不帶","prep.","國中"],
  ["already","已經","adv.","國中"],

  ["achieve","達成","v.","高中"],
  ["advantage","優勢","n.","高中"],
  ["afford","負擔得起","v.","高中"],
  ["although","雖然","conj.","高中"],
  ["analyze","分析","v.","高中"],
  ["approach","方法；接近","n./v.","高中"],
  ["behavior","行為","n.","高中"],
  ["benefit","益處；受益","n./v.","高中"],
  ["challenge","挑戰","n./v.","高中"],
  ["communicate","溝通","v.","高中"],
  ["consider","考慮","v.","高中"],
  ["environment","環境","n.","高中"],
  ["evidence","證據","n.","高中"],
  ["increase","增加","v./n.","高中"],
  ["individual","個人；個別的","n./adj.","高中"],
  ["issue","議題；問題","n.","高中"],
  ["maintain","維持","v.","高中"],
  ["opportunity","機會","n.","高中"],
  ["reduce","減少","v.","高中"],
  ["require","需要；要求","v.","高中"],
  ["significant","重要的；顯著的","adj.","高中"],
  ["specific","特定的","adj.","高中"],
  ["suggest","建議；暗示","v.","高中"],
  ["therefore","因此","adv.","高中"],
  ["various","各種各樣的","adj.","高中"],

  ["accommodate","容納；適應","v.","TOEIC"],
  ["appointment","預約；約會","n.","TOEIC"],
  ["attendee","出席者","n.","TOEIC"],
  ["authorize","授權","v.","TOEIC"],
  ["colleague","同事","n.","TOEIC"],
  ["deadline","截止期限","n.","TOEIC"],
  ["department","部門","n.","TOEIC"],
  ["employee","員工","n.","TOEIC"],
  ["expense","費用","n.","TOEIC"],
  ["facility","設施","n.","TOEIC"],
  ["feedback","回饋","n.","TOEIC"],
  ["inventory","庫存","n.","TOEIC"],
  ["manufacturer","製造商","n.","TOEIC"],
  ["negotiate","協商","v.","TOEIC"],
  ["participant","參與者","n.","TOEIC"],
  ["proposal","提案","n.","TOEIC"],
  ["purchase","購買；購買物","v./n.","TOEIC"],
  ["refund","退款","n./v.","TOEIC"],
  ["reservation","預訂","n.","TOEIC"],
  ["schedule","行程；安排","n./v.","TOEIC"],
  ["shipment","貨物；出貨","n.","TOEIC"],
  ["supervisor","主管","n.","TOEIC"],
  ["temporary","暫時的","adj.","TOEIC"],
  ["warehouse","倉庫","n.","TOEIC"],
  ["conference","會議；研討會","n.","TOEIC"],
  ["budget","預算","n.","TOEIC"],
  ["confirm","確認","v.","TOEIC"],
  ["contract","合約","n.","TOEIC"],
  ["customer","顧客","n.","TOEIC"],
  ["discount","折扣","n.","TOEIC"],
  ["efficient","有效率的","adj.","TOEIC"],
  ["estimate","估計；估價","v./n.","TOEIC"],
  ["maintenance","維修；保養","n.","TOEIC"],
  ["policy","政策；規定","n.","TOEIC"],
  ["receipt","收據","n.","TOEIC"]
];

const GRAMMAR = [
  [
    "She ___ to school every day.",
    "go",
    "goes",
    "going",
    "gone",
    "B",
    "一般現在式，第三人稱單數主詞 she 後的動詞通常加 -s/-es。"
  ],
  [
    "They ___ dinner when I arrived.",
    "eat",
    "have eaten",
    "were eating",
    "will eat",
    "C",
    "過去某一時間點正在進行的動作使用過去進行式。"
  ],
  [
    "I have lived here ___ 2020.",
    "for",
    "since",
    "during",
    "from",
    "B",
    "since 後接開始的時間點，2020 是時間點。"
  ],
  [
    "There ___ many books on the desk.",
    "is",
    "are",
    "was",
    "be",
    "B",
    "books 是複數，因此使用 there are。"
  ],
  [
    "If it rains, we ___ at home.",
    "stay",
    "stayed",
    "will stay",
    "would stayed",
    "C",
    "第一類條件句常用 if + 現在式，主句用 will + 原形動詞。"
  ],
  [
    "This is the man ___ helped me.",
    "which",
    "where",
    "who",
    "when",
    "C",
    "先行詞 man 指人，在關係子句中可用 who。"
  ],
  [
    "My brother is ___ than me.",
    "tall",
    "taller",
    "tallest",
    "more tall",
    "B",
    "兩者比較使用比較級 taller。"
  ],
  [
    "You ___ wear a seat belt in a car.",
    "should",
    "might to",
    "can to",
    "would to",
    "A",
    "should 後接原形動詞，可表示建議或應做的事。"
  ],
  [
    "The report ___ yesterday.",
    "finished",
    "was finished",
    "is finish",
    "has finish",
    "B",
    "報告是被完成的，且時間是 yesterday，使用一般過去被動式。"
  ],
  [
    "I am interested ___ learning English.",
    "at",
    "on",
    "in",
    "for",
    "C",
    "be interested in 是固定搭配。"
  ],
  [
    "He has ___ his homework already.",
    "finish",
    "finished",
    "finishing",
    "finishes",
    "B",
    "現在完成式 have/has 後接過去分詞。"
  ],
  [
    "We went to the restaurant ___ it was recommended.",
    "because",
    "but",
    "unless",
    "although",
    "A",
    "句子表示去餐廳的原因，因此 because 合適。"
  ],
  [
    "Neither Tom nor his friends ___ available.",
    "is",
    "are",
    "be",
    "was",
    "B",
    "neither A nor B 的動詞通常依靠近動詞的主詞 friends，使用 are。"
  ],
  [
    "Please tell me ___ you need any help.",
    "what",
    "whether",
    "which",
    "whose",
    "B",
    "whether 可引導是否的間接問句。"
  ],
  [
    "The meeting starts ___ 9:00.",
    "in",
    "on",
    "at",
    "by",
    "C",
    "at 用於具體鐘點。"
  ],
  [
    "She is the ___ student in the class.",
    "careful",
    "more careful",
    "most careful",
    "carefully",
    "C",
    "三者以上比較使用最高級 most careful。"
  ],
  [
    "I look forward to ___ from you.",
    "hear",
    "hearing",
    "heard",
    "be hear",
    "B",
    "look forward to 的 to 是介系詞，後接動名詞。"
  ],
  [
    "The company plans ___ a new office.",
    "open",
    "opening",
    "to open",
    "opened",
    "C",
    "plan 後常接不定詞 to + 原形動詞。"
  ],
  [
    "He was tired, ___ he finished the work.",
    "because",
    "but",
    "so that",
    "unless",
    "B",
    "前後語意形成轉折，因此使用 but。"
  ],
  [
    "By the time we arrived, the train ___.",
    "left",
    "has left",
    "had left",
    "leaves",
    "C",
    "另一個過去事件之前已完成的動作使用過去完成式。"
  ]
];

const LISTENING = [
  [
    "The library opens at nine o'clock.",
    "小學",
    "圖書館九點開門。"
  ],
  [
    "Please bring your homework tomorrow.",
    "小學",
    "請明天帶你的作業。"
  ],
  [
    "My sister likes playing tennis after school.",
    "小學",
    "我妹妹喜歡放學後打網球。"
  ],
  [
    "The blue bag is under the chair.",
    "小學",
    "藍色的包包在椅子下面。"
  ],
  [
    "We usually eat breakfast at seven.",
    "國中",
    "我們通常七點吃早餐。"
  ],
  [
    "Please call me when you arrive at the station.",
    "國中",
    "你到車站時請打電話給我。"
  ],
  [
    "I forgot to bring my umbrella this morning.",
    "國中",
    "我今天早上忘了帶雨傘。"
  ],
  [
    "The movie starts at seven thirty, so let's leave early.",
    "國中",
    "電影七點半開始，所以我們早點出發吧。"
  ],
  [
    "Although the weather was cold, we went for a walk.",
    "高中",
    "雖然天氣很冷，我們還是去散步了。"
  ],
  [
    "The manager asked everyone to submit the report by Friday.",
    "高中",
    "經理要求每個人在星期五前提交報告。"
  ],
  [
    "The company will reduce costs by changing its delivery schedule.",
    "高中",
    "公司將透過改變配送時程來降低成本。"
  ],
  [
    "Please let me know if you need any additional information.",
    "TOEIC",
    "如果你需要任何額外資訊，請告訴我。"
  ],
  [
    "The conference room has been reserved for the marketing team.",
    "TOEIC",
    "會議室已經預留給行銷團隊。"
  ],
  [
    "Passengers should keep their receipts until they leave the airport.",
    "TOEIC",
    "乘客應保留收據直到離開機場。"
  ],
  [
    "The shipment is expected to arrive at the warehouse tomorrow morning.",
    "TOEIC",
    "貨物預計明天早上抵達倉庫。"
  ],
  [
    "The supervisor postponed the meeting because several employees were absent.",
    "TOEIC",
    "主管因幾名員工缺席而延後會議。"
  ]
];

const COURSES = [
  [
    "小學基礎",
    "小學",
    "生活單字、簡單句型與基礎聽力",
    "30+ 單字 · 4 種練習"
  ],
  [
    "國中進階",
    "國中",
    "常用字彙、時態與日常對話",
    "25+ 單字 · 文法 · 聽力"
  ],
  [
    "高中核心",
    "高中",
    "學術與進階常用字彙、複句與閱讀",
    "25+ 單字 · 文法 · 聽力"
  ],
  [
    "TOEIC 實戰",
    "TOEIC",
    "職場字彙、商務情境與 TOEIC 類型聽力",
    "50+ 單字 · 文法 · 聽力"
  ]
];

const STORE_KEY = "englishFlowV1";

let state =
  JSON.parse(localStorage.getItem(STORE_KEY) || "null") ||
  {
    learned: {},
    wrong: {},
    stars: [],
    sessions: [],
    streak: 0,
    lastStudy: null,
    level: "小學",
    mode: "spell",
    index: 0,
    grammarIndex: 0,
    dictIndex: 0,
    reviewIndex: 0
  };

function save() {
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function speak(text) {
  if (!("speechSynthesis" in window)) {
    toast("此瀏覽器不支援語音播放");
    return;
  }

  speechSynthesis.cancel();

  const u = new SpeechSynthesisUtterance(text);

  u.lang = "en-US";
  u.rate = 0.82;
  u.pitch = 1;

  speechSynthesis.speak(u);
}

function toast(msg) {
  const t = document.getElementById("toast");

  t.textContent = msg;
  t.style.opacity = 1;

  setTimeout(() => {
    t.style.opacity = 0;
  }, 1800);
}

function recordStudy() {
  const d = today();

  if (state.lastStudy !== d) {
    if (state.lastStudy) {
      const prev = new Date(state.lastStudy);
      const cur = new Date(d);

      const diff = Math.round(
        (cur - prev) / 86400000
      );

      state.streak = diff === 1
        ? state.streak + 1
        : 1;
    } else {
      state.streak = 1;
    }

    state.lastStudy = d;
  }

  state.sessions.push(Date.now());

  if (state.sessions.length > 1000) {
    state.sessions.shift();
  }

  save();
}

function learnedCount() {
  return Object.values(state.learned)
    .filter(x => x.mastered)
    .length;
}

function dueWords() {
  const now = Date.now();

  return WORDS.filter(w => {
    const x = state.learned[w[0]];

    return x &&
      x.due &&
      x.due <= now;
  });
}

function addWord(word, score) {
  const old =
    state.learned[word] ||
    {
      reviews: 0,
      mastered: false,
      interval: 0
    };

  old.reviews++;

  if (score === "again") {
    old.interval = 0;
    old.mastered = false;
    old.due =
      Date.now() +
      5 * 60 * 1000;
  }

  if (score === "hard") {
    old.interval =
      Math.max(
        1,
        Math.round(
          (old.interval || 1) * 1.8
        )
      );

    old.due =
      Date.now() +
      old.interval * 86400000;
  }

  if (score === "good") {
    old.interval =
      Math.max(
        1,
        Math.round(
          (old.interval || 1) * 2.5
        )
      );

    old.due =
      Date.now() +
      old.interval * 86400000;
  }

  if (score === "easy") {
    old.interval =
      Math.max(
        2,
        Math.round(
          (old.interval || 1) * 3.5
        )
      );

    old.due =
      Date.now() +
      old.interval * 86400000;
  }

  if (
    old.reviews >= 3 &&
    score !== "again"
  ) {
    old.mastered = true;
  }

  state.learned[word] = old;

  recordStudy();

  save();
}

function nav(page) {
  document
    .querySelectorAll(".nav")
    .forEach(b => {
      b.classList.toggle(
        "active",
        b.dataset.page === page
      );
    });

  document
    .querySelectorAll(".page")
    .forEach(p => {
      p.classList.toggle(
        "active",
        p.id === "page-" + page
      );
    });

  renderPage(page);
}

document
  .querySelectorAll(".nav")
  .forEach(b => {
    b.addEventListener(
      "click",
      () => nav(b.dataset.page)
    );
  });

function renderHome() {
  const due = dueWords().length;

  document.getElementById("page-home").innerHTML = `
    <div class="hero">
      <div>
        <h1>今天也聽一個、拼一個。</h1>
        <p>
          從耳朵到手指，再用間隔複習把單字真正留下來。
        </p>
      </div>

      <div class="hero-score">
        ${state.streak}
        <small> 天連續</small>
      </div>
    </div>

    <div class="stats" style="margin-top:18px">

      <div class="stat">
        <span class="muted">已掌握</span>
        <b>${learnedCount()}</b>
      </div>

      <div class="stat">
        <span class="muted">待複習</span>
        <b>${due}</b>
      </div>

      <div class="stat">
        <span class="muted">目前程度</span>
        <b>${state.level}</b>
      </div>

      <div class="stat">
        <span class="muted">收藏</span>
        <b>${state.stars.length}</b>
      </div>

    </div>

    <h2 class="section-title">
      開始今天的學習
    </h2>

    <div class="grid">

      <div
        class="card course-card"
        onclick="nav('practice')"
      >
        <h3>⌨ 聽音拼寫</h3>
        <p class="muted">
          聽英文發音，直接鍵盤拼出單字。
        </p>
        <button class="primary">
          開始練習
        </button>
      </div>

      <div
        class="card course-card"
        onclick="nav('dictation')"
      >
        <h3>◉ 句子聽寫</h3>
        <p class="muted">
          從短句逐步進入高中與 TOEIC 聽力。
        </p>
        <button class="primary">
          開始聽寫
        </button>
      </div>

      <div
        class="card course-card"
        onclick="nav('review')"
      >
        <h3>↻ 今日複習</h3>
        <p class="muted">
          ${
            due
              ? `有 ${due} 個項目到期。`
              : "目前沒有到期項目。"
          }
        </p>
        <button class="primary">
          開始複習
        </button>
      </div>

    </div>
  `;
}

function renderCourses() {
  document.getElementById("page-courses").innerHTML = `
    <h1>課程</h1>

    <p class="muted">
      依程度循序學習。
      題庫內容與介面均為本網站自行建立。
    </p>

    <div class="grid">

      ${COURSES.map(c => `
        <div
          class="card course-card"
          onclick="setLevel('${c[1]}');nav('practice')"
        >

          <span class="tag">
            ${c[1]}
          </span>

          <h3>
            ${c[0]}
          </h3>

          <p class="muted">
            ${c[2]}
          </p>

          <p class="small">
            ${c[3]}
          </p>

          <button class="secondary">
            進入課程 →
          </button>

        </div>
      `).join("")}

    </div>

    <h2 class="section-title">
      學習方式
    </h2>

    <div class="card">

      <b>① 聽</b>
      →
      <b>② 拼</b>
      →
      <b>③ 即時校驗</b>
      →
      <b>④ 收錄</b>
      →
      <b>⑤ 間隔複習</b>

      <p class="muted">
        複習採「忘記／模糊／記得／很熟」
        四檔回饋，根據回饋調整下次出現時間。
      </p>

    </div>
  `;
}

function setLevel(l) {
  state.level = l;
  state.index = 0;

  save();

  toast("已切換到 " + l);
}

function currentWords() {
  return WORDS.filter(
    w => w[3] === state.level
  );
}

function renderPractice() {
  const list = currentWords();

  if (!list.length) {
    return;
  }

  if (state.index >= list.length) {
    state.index = 0;
  }

  const w = list[state.index];

  const learned =
    state.learned[w[0]];

  const pct =
    Math.round(
      state.index / list.length * 100
    );

  document.getElementById(
    "page-practice"
  ).innerHTML = `

    <h1>聽音拼寫</h1>

    <div class="toolbar">

      <select id="levelSel">

        ${
          ["小學","國中","高中","TOEIC"]
            .map(x => `
              <option
                ${x === state.level ? "selected" : ""}
              >
                ${x}
              </option>
            `)
            .join("")
        }

      </select>

      <span class="tag">
        ${state.index + 1} /
        ${list.length}
      </span>

      <span class="tag">
        ${
          learned?.mastered
            ? "已掌握"
            : "學習中"
        }
      </span>

    </div>

    <div class="progress">
      <i style="width:${pct}%"></i>
    </div>

    <div class="practice-card">

      <button
        class="speaker"
        onclick="speak('${w[0]}')"
      >
        🔊
      </button>

      <div class="phonetic">
        ${w[2]} · ${w[1]}
      </div>

      <div
        class="word"
        id="masked"
      >
        ••••••
      </div>

      <input
        id="spellInput"
        class="answer-input"
        autocomplete="off"
        autocapitalize="none"
        spellcheck="false"
        placeholder="聽音後輸入英文"
      >

      <div
        id="spellFeedback"
        class="feedback"
      ></div>

      <div>

        <button
          class="primary"
          id="checkSpell"
        >
          檢查答案
        </button>

        <button
          class="secondary"
          id="nextSpell"
          style="display:none"
        >
          下一題 →
        </button>

      </div>

      <div style="margin-top:16px">

        <button
          class="ghost-btn"
          id="starBtn"
        >
          ${
            state.stars.includes(w[0])
              ? "★ 已收藏"
              : "☆ 收藏單字"
          }
        </button>

      </div>

    </div>
  `;

  document.getElementById(
    "levelSel"
  ).onchange = e => {
    setLevel(e.target.value);
    renderPractice();
  };

  const input =
    document.getElementById(
      "spellInput"
    );

  document.getElementById(
    "checkSpell"
  ).onclick = () =>
    checkSpell(w, input);

  input.onkeydown = e => {
    if (e.key === "Enter") {
      document
        .getElementById("checkSpell")
        .click();
    }
  };

  document.getElementById(
    "starBtn"
  ).onclick = () => {

    const i =
      state.stars.indexOf(w[0]);

    if (i >= 0) {
      state.stars.splice(i, 1);
    } else {
      state.stars.push(w[0]);
    }

    save();

    renderPractice();
  };

  speak(w[0]);
}

function checkSpell(w, input) {
  const ans =
    input.value
      .trim()
      .toLowerCase();

  const target =
    w[0].toLowerCase();

  const f =
    document.getElementById(
      "spellFeedback"
    );

  if (!ans) {
    f.textContent =
      "請先輸入答案。";

    return;
  }

  if (ans === target) {

    f.textContent =
      "✓ 正確！";

    f.style.color =
      "#24965d";

    addWord(
      w[0],
      "good"
    );

  } else {

    f.innerHTML =
      `✗ 再試一次。正確拼法：
       <strong>${w[0]}</strong>`;

    f.style.color =
      "#c33";

    state.wrong[w[0]] =
      (state.wrong[w[0]] || 0) + 1;

    save();
  }

  document.getElementById(
    "nextSpell"
  ).style.display =
    "inline-block";

  document.getElementById(
    "checkSpell"
  ).style.display =
    "none";

  document.getElementById(
    "nextSpell"
  ).onclick = () => {

    state.index =
      (state.index + 1) %
      currentWords().length;

    save();

    renderPractice();
  };
}

function renderDictation() {

  const list =
    LISTENING.filter(
      x => x[1] === state.level
    );

  if (!list.length) {
    state.level = "小學";
    return renderDictation();
  }

  if (state.dictIndex >= list.length) {
    state.dictIndex = 0;
  }

  const q =
    list[state.dictIndex];

  document.getElementById(
    "page-dictation"
  ).innerHTML = `

    <h1>句子聽寫</h1>

    <div class="toolbar">

      <select id="dLevel">

        ${
          ["小學","國中","高中","TOEIC"]
            .map(x => `
              <option
                ${x === state.level ? "selected" : ""}
              >
                ${x}
              </option>
            `)
            .join("")
        }

      </select>

      <span class="tag">
        ${state.dictIndex + 1} /
        ${list.length}
      </span>

    </div>

    <div class="practice-card">

      <button
        class="speaker"
        onclick="speak('${q[0].replace(/'/g,"\\'")}')"
      >
        🔊
      </button>

      <p class="muted">
        播放後輸入你聽到的完整句子。
      </p>

      <textarea
        id="dictInput"
        class="answer-input"
        rows="4"
        style="text-align:left;width:100%;font-size:18px"
        placeholder="Type what you hear..."
      ></textarea>

      <div
        id="dictFeedback"
        class="feedback"
      ></div>

      <button
        class="primary"
        id="checkDict"
      >
        檢查
      </button>

      <button
        class="secondary"
        id="nextDict"
        style="display:none"
      >
        下一題 →
      </button>

      <div
        id="dictAnswer"
        class="muted"
        style="margin-top:15px"
      ></div>

    </div>
  `;

  document.getElementById(
    "dLevel"
  ).onchange = e => {

    setLevel(e.target.value);

    state.dictIndex = 0;

    renderDictation();
  };

  document.getElementById(
    "checkDict"
  ).onclick = () => {

    const input =
      document
        .getElementById("dictInput")
        .value
        .trim()
        .toLowerCase()
        .replace(/[.,!?]/g, "");

    const target =
      q[0]
        .toLowerCase()
        .replace(/[.,!?]/g, "");

    const f =
      document.getElementById(
        "dictFeedback"
      );

    if (input === target) {

      f.textContent =
        "✓ 完全正確！";

      f.style.color =
        "#24965d";

      recordStudy();

    } else {

      f.textContent =
        "這題可以再聽一次，下面提供原句比對。";

      f.style.color =
        "#c33";

      document.getElementById(
        "dictAnswer"
      ).textContent =
        q[0];
    }

    document.getElementById(
      "nextDict"
    ).style.display =
      "inline-block";

    document.getElementById(
      "checkDict"
    ).style.display =
      "none";
  };

  document.getElementById(
    "nextDict"
  ).onclick = () => {

    state.dictIndex =
      (state.dictIndex + 1) %
      list.length;

    save();

    renderDictation();
  };
}

function renderGrammar() {

  const q =
    GRAMMAR[
      state.grammarIndex %
      GRAMMAR.length
    ];

  document.getElementById(
    "page-grammar"
  ).innerHTML = `

    <h1>文法練習</h1>

    <div class="toolbar">

      <span class="tag">
        題目
        ${state.grammarIndex + 1}
        /
        ${GRAMMAR.length}
      </span>

      <span class="tag">
        基礎～高中
      </span>

    </div>

    <div class="practice-card">

      <h2>
        ${q[0]}
      </h2>

      <div class="option-grid">

        ${q
          .slice(1,5)
          .map((x,i) => `
            <button
              class="option"
              data-v="${String.fromCharCode(65+i)}"
            >
              ${x}
            </button>
          `)
          .join("")}

      </div>

      <div
        id="gFeedback"
        class="feedback"
      ></div>

      <button
        class="secondary"
        id="gNext"
        style="display:none"
      >
        下一題 →
      </button>

    </div>
  `;

  document
    .querySelectorAll(".option")
    .forEach(b => {

      b.onclick = () => {

        document
          .querySelectorAll(".option")
          .forEach(x => {
            x.disabled = true;
          });

        const correct =
          b.dataset.v === q[5];

        b.classList.add(
          correct
            ? "correct"
            : "wrong"
        );

        if (!correct) {
          document
            .querySelector(
              `.option[data-v="${q[5]}"]`
            )
            .classList.add(
              "correct"
            );
        }

        document.getElementById(
          "gFeedback"
        ).textContent =
          (correct ? "✓ " : "✗ ") +
          q[6];

        if (correct) {
          recordStudy();
        }

        document.getElementById(
          "gNext"
        ).style.display =
          "inline-block";
      };
    });

  document.getElementById(
    "gNext"
  ).onclick = () => {

    state.grammarIndex++;

    save();

    renderGrammar();
  };
}

function renderReview() {

  const due =
    dueWords();

  document.getElementById(
    "page-review"
  ).innerHTML = `

    <h1>今日複習</h1>

    <p class="muted">
      用四檔回饋告訴系統你記得多少，
      讓下一次複習間隔自動調整。
    </p>

    ${
      due.length
        ? `
          <div
            class="practice-card"
            id="reviewCard"
          ></div>
        `
        : `
          <div class="empty">

            <h3>
              目前沒有到期單字
            </h3>

            <p class="muted">
              先去「聽音拼寫」
              學幾個新單字吧。
            </p>

            <button
              class="primary"
              onclick="nav('practice')"
            >
              開始學習
            </button>

          </div>
        `
    }
  `;

  if (due.length) {
    showReview(due);
  }
}

function showReview(due) {

  const w =
    due[
      state.reviewIndex %
      due.length
    ];

  const card =
    document.getElementById(
      "reviewCard"
    );

  card.innerHTML = `

    <button
      class="speaker"
      onclick="speak('${w[0]}')"
    >
      🔊
    </button>

    <div class="word">
      ${w[0]}
    </div>

    <div class="phonetic">
      ${w[2]} · ${w[1]}
    </div>

    <p class="muted">
      先自己回想意思，再播放發音。
    </p>

    <div class="option-grid">

      <button
        class="option"
        onclick="reviewRate('${w[0]}','again')"
      >
        忘記
        <br>
        <small>
          5 分鐘後再見
        </small>
      </button>

      <button
        class="option"
        onclick="reviewRate('${w[0]}','hard')"
      >
        模糊
        <br>
        <small>
          短間隔
        </small>
      </button>

      <button
        class="option"
        onclick="reviewRate('${w[0]}','good')"
      >
        記得
        <br>
        <small>
          正常間隔
        </small>
      </button>

      <button
        class="option"
        onclick="reviewRate('${w[0]}','easy')"
      >
        很熟
        <br>
        <small>
          長間隔
        </small>
      </button>

    </div>
  `;
}

function reviewRate(word, r) {
  addWord(word, r);

  state.reviewIndex++;

  renderReview();
}

function renderWords() {

  const items =
    WORDS.filter(
      w =>
        state.stars.includes(w[0]) ||
        state.learned[w[0]]
    );

  document.getElementById(
    "page-words"
  ).innerHTML = `

    <h1>生字本</h1>

    <p class="muted">
      學習過或收藏的單字會出現在這裡。
    </p>

    ${
      items.length
        ? `
          <div class="word-list">

            ${items.map(w => {

              const x =
                state.learned[w[0]] || {};

              return `

                <div class="word-row">

                  <div>

                    <strong>
                      ${w[0]}
                    </strong>

                    <span class="tag">
                      ${w[3]}
                    </span>

                    <div class="muted">
                      ${w[1]} · ${w[2]}
                    </div>

                  </div>

                  <div>

                    <button
                      class="secondary"
                      onclick="speak('${w[0]}')"
                    >
                      🔊
                    </button>

                    <span class="tag">
                      ${
                        x.mastered
                          ? "已掌握"
                          : "學習中"
                      }
                    </span>

                  </div>

                </div>
              `;
            }).join("")}

          </div>
        `
        : `
          <div class="empty">

            <h3>
              還沒有生字
            </h3>

            <p>
              完成聽音拼寫或收藏單字後，
              會自動出現在這裡。
            </p>

          </div>
        `
    }
  `;
}

function renderStats() {

  const total =
    state.sessions.length;

  const wrong =
    Object.values(
      state.wrong
    ).reduce(
      (a,b) => a+b,
      0
    );

  const accuracy =
    total
      ? Math.max(
          0,
          Math.round(
            (total - wrong) /
            total *
            100
          )
        )
      : 0;

  document.getElementById(
    "page-stats"
  ).innerHTML = `

    <h1>
      學習統計
    </h1>

    <div class="stats">

      <div class="stat">
        <span class="muted">
          學習紀錄
        </span>
        <b>${total}</b>
      </div>

      <div class="stat">
        <span class="muted">
          連續天數
        </span>
        <b>${state.streak}</b>
      </div>

      <div class="stat">
        <span class="muted">
          掌握單字
        </span>
        <b>${learnedCount()}</b>
      </div>

      <div class="stat">
        <span class="muted">
          估算正確率
        </span>
        <b>${accuracy}%</b>
      </div>

    </div>

    <h2 class="section-title">
      各程度單字
    </h2>

    <div class="card">

      ${
        ["小學","國中","高中","TOEIC"]
          .map(l => {

            const all =
              WORDS.filter(
                w => w[3] === l
              ).length;

            const done =
              WORDS.filter(
                w =>
                  w[3] === l &&
                  state.learned[w[0]]
                    ?.mastered
              ).length;

            return `

              <p>
                <b>${l}</b>

                <span class="muted">
                  ${done} / ${all}
                </span>
              </p>

              <div class="bar">

                <i
                  style="
                    width:${
                      all
                        ? done / all * 100
                        : 0
                    }%
                  "
                ></i>

              </div>

            `;
          })
          .join("")
      }

    </div>
  `;
}

function renderPage(p) {

  ({
    home: renderHome,
    courses: renderCourses,
    practice: renderPractice,
    dictation: renderDictation,
    grammar: renderGrammar,
    review: renderReview,
    words: renderWords,
    stats: renderStats
  }[p])();
}

document.getElementById(
  "themeBtn"
).onclick = () => {

  document.documentElement
    .classList.toggle("dark");

  localStorage.setItem(
    "efDark",
    document.documentElement
      .classList.contains("dark")
  );
};

if (
  localStorage.getItem(
    "efDark"
  ) === "true"
) {
  document.documentElement
    .classList.add("dark");
}

document.getElementById(
  "resetBtn"
).onclick = () => {

  if (
    confirm(
      "確定要清除本機所有學習進度嗎？"
    )
  ) {
    localStorage.removeItem(
      STORE_KEY
    );

    location.reload();
  }
};

renderHome();
