(function () {
  const readingPassages = {
    3: [
      { title: "皇帝的命令", passage: "皇帝下令，让一个做官的人两天之内办好一件事情。那个人低头苦笑，说实在办不到。孙子站出来，说：“让我去吧，我会帮助他。”皇帝听了，答应让孙子留下来。", question: "谁帮助做官的人？", choices: ["孙子", "皇帝", "公鸡", "老虎"], answer: "A" },
      { title: "聪明的孙子", passage: "做官的人总是想着皇帝的命令，心里有很重的心事。他在外面散步时，孙子看见他低着头。孙子问清楚事情以后，想出了一个好主意。他先说服做官的人，再请他放心。做官的人听了，才笑了。", question: "孙子怎样帮助做官的人？", choices: ["想出一个好主意", "让他马上走开", "把饭菜留下来", "请皇帝去散步"], answer: "A" },
      { title: "勇敢地救人", passage: "昨天，一个孩子在外面散步时摔倒了。他的肩膀很痛，站不起来。旁边的人虽然很担心，但是不知道怎么办。小明立刻走过去，低头问清楚事情。他请旁边的人去找孩子的母亲，自己留下来帮助孩子。母亲赶到以后，非常感动，说小明又聪明又勇敢。", question: "母亲为什么感动？", choices: ["因为小明留下来帮助孩子", "因为小明带来了饭菜", "因为孩子去看公鸡", "因为皇帝改变了命令"], answer: "A" }
    ],
    4: [
      { title: "终于到达南海", passage: "从前，四川有一个穷和尚。他打算去南海拜佛，只带着一碗米饭和一根木棒。他日夜不停地赶路，饿了就吃一点，累了就在破庙休息。很久以后，他终于到达南海。", question: "穷和尚为什么能到达南海？", choices: ["因为他一直赶路", "因为他有很多钱", "因为他坐着大船", "因为另一个和尚带他去"], answer: "A" },
      { title: "富和尚的准备", passage: "另一个富和尚也愿意去南海。他觉得路上需要很多钱，所以一直准备。他买好很多东西，却总是没有出发。穷和尚从南海回来拜访他时，富和尚才知道自己可惜地错过了机会。", question: "富和尚为什么没有出发？", choices: ["因为他一直准备", "因为他找不到课本", "因为他不愿意拜佛", "因为他已经到达南海"], answer: "A" },
      { title: "破庙里的一本书", passage: "穷和尚赶路时，在一座破庙里休息。他看到旁边有一本书，就拿起来读。书里的课文让他改变了主意：虽然又饿又累，但是只要一直赶路，就一定有办法。他站起来，把书放在旁边，又日夜不停地赶路。最后，他终于到达了自己想去的地方。", question: "课文让穷和尚明白了什么？", choices: ["一直赶路就有办法", "需要很多钱才能读书", "应该把书送走", "应该留在破庙里"], answer: "A" }
    ],
    5: [
      { title: "走丢的骆驼", passage: "一位商人的骆驼走丢了，他赶紧去寻找。路上，一位老师不紧不慢地问：“骆驼是不是少了一颗牙齿？”商人说对极了。老师让他顺着脚印继续找，商人果然找到了骆驼。", question: "老师让商人顺着什么寻找？", choices: ["脚印", "血迹", "一条线", "课文"], answer: "A" },
      { title: "路边的血迹", passage: "一位母亲看见路边有血迹，又看见深深的脚印。她顺着脚印走过去，发现一只骆驼受伤了。她赶紧找人帮助，把受伤的骆驼送到安全的地方。母亲看清楚血迹以后，继续顺着脚印寻找。", question: "母亲为什么顺着脚印走？", choices: ["因为她看见了血迹", "因为她要去市场", "因为她走丢了课本", "因为她想找一碗米饭"], answer: "A" },
      { title: "深浅不同的脚印", passage: "老师带着孩子看地上的脚印。一个脚印很深，另一个比较浅。老师指点他们：“驮着东西的骆驼比较重，所以脚印会更深。”孩子们听了，觉得好极了。他们终于明白，脚印的深浅可以帮助人寻找骆驼。", question: "哪个脚印可能是驮着东西的骆驼留下的？", choices: ["比较深的脚印", "比较浅的脚印", "没有牙齿印的脚印", "藏起来的脚印"], answer: "A" }
    ],
    6: [
      { title: "墙上的时钟", passage: "墙上的时钟不声不响地走着。一秒钟很短，一分钟也很快过去。小军躺在床上看书，不知不觉已经很晚了。他注意到时间不会返回，就赶紧收好书去休息。", question: "小军注意到时间怎样？", choices: ["时间不会返回", "时间会藏起来", "时间会走丢", "时间会受伤"], answer: "A" },
      { title: "操场上的一分钟", passage: "操场上，大家正在打球，欢笑声很响亮。老师说：“我们做一个实验，一分钟之内看谁能拍球最多。”游戏开始后，大家都注意墙上的时钟，努力完成实验。一分钟以后，老师让大家停下来回答问题。", question: "大家为什么注意时钟？", choices: ["要计算一分钟", "要寻找骆驼", "要准备去南海", "要收拾饭店"], answer: "A" },
      { title: "悄悄长大的植物", passage: "小美做了一个植物实验。她把植物放在床边，每天拿起笔记下改变。植物不声不响地长大，过了许多天，她终于发现努力和时间能使小植物成功长高。她每天都注意时间，也愿意继续这个实验。许多天以后，她把这件事情说给母亲听。", question: "小美每天拿起笔做什么？", choices: ["记下植物的改变", "画骆驼的脚印", "写饭店的名字", "计算一碗米饭"], answer: "A" }
    ],
    7: [
      { title: "清晨去市场", passage: "清晨，一个年轻人从乡下赶到小镇的市场。他带着一头驴子，驴子驮着两大筐东西。到了饭店旁边，他发现一个筐歪了，就停下来收拾。", question: "年轻人为什么停下来？", choices: ["一个筐歪了", "驴子走丢了", "饭店关门了", "他要返回乡下"], answer: "A" },
      { title: "山坡上的脚印", passage: "年轻人走过山坡时，驴子突然摔了。筐里的东西落地，山坡上留下许多脚印。路过的行人赶紧来帮助。年轻人说：“谢谢，没关系，我收拾一下再走。”", question: "驴子摔了以后，谁来帮助？", choices: ["路过的行人", "富和尚", "一位商人", "森林里的老虎"], answer: "A" },
      { title: "饭店里的误会", passage: "小镇饭店里，一位行人把两大筐东西放在门旁。年轻人进门时，简直以为那是自己的筐。他正要拿走，行人赶紧说：“等一下，这是我的。”年轻人看清楚后说：“对不起，没关系，我们再说清楚。”行人也看清楚了，笑着说没关系。", question: "年轻人为什么差点拿错筐？", choices: ["两个筐看起来很像", "他的筐摔在山坡上", "饭店里没有灯", "行人把筐藏起来了"], answer: "A" }
    ]
  };

  const style = document.createElement("style");
  style.textContent = `
    .reading-check-page{position:fixed;inset:0;z-index:80;display:none;overflow:auto;background:linear-gradient(145deg,#eef5ff,#fff8ee);padding:clamp(18px,4vw,46px)}
    .reading-check-page.active{display:block}
    .reading-check-shell{width:min(980px,100%);margin:0 auto}
    .reading-check-top{display:flex;align-items:center;justify-content:space-between;gap:18px;margin-bottom:18px}
    .reading-check-top h1{margin:0;color:#1c2533;font-size:clamp(1.65rem,4vw,2.5rem)}
    .reading-check-close{border:1px solid #cbd5e1;background:#fff;color:#344054;border-radius:12px;padding:10px 16px;font-weight:750;cursor:pointer}
    .reading-check-meta{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin-bottom:16px}
    .reading-meta-card{background:#fff;border:1px solid #d6dde8;border-radius:16px;padding:14px 18px;box-shadow:0 8px 20px rgba(31,41,51,.07)}
    .reading-meta-card span{display:block;color:#667085;font-size:.78rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase}
    .reading-meta-card strong{display:block;margin-top:5px;color:#244fa8;font-size:1.35rem}
    .reading-card{background:#fff;border:1px solid #d6dde8;border-radius:22px;padding:clamp(22px,5vw,42px);box-shadow:0 18px 45px rgba(31,41,51,.11)}
    .reading-title{margin:0 0 16px;color:#1f2933;font-size:clamp(1.4rem,3vw,2rem)}
    .reading-passage{margin:0 0 26px;color:#27364a;font-family:"Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif;font-size:clamp(1.2rem,2.5vw,1.55rem);line-height:1.95}
    .reading-question{margin:0 0 14px;color:#1f2933;font-size:clamp(1.08rem,2vw,1.3rem);font-weight:800}
    .reading-choices{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
    .reading-choice{min-height:54px;border:2px solid #d6dde8;border-radius:14px;background:#fff;padding:12px 16px;text-align:left;color:#1f2933;font-size:1rem;font-weight:700;cursor:pointer}
    .reading-choice:hover:not(:disabled){border-color:#2f6fed;background:#f4f7ff}
    .reading-choice.correct{border-color:#177245;background:#eaf8f0;color:#116039}
    .reading-choice.wrong{border-color:#b42318;background:#fff0ee;color:#9b1c13}
    .reading-result{min-height:30px;margin:16px 0 0;font-weight:800}
    .reading-result.good{color:#177245}.reading-result.bad{color:#b42318}
    .reading-next{display:none;margin-top:14px;border:0;border-radius:14px;background:#2f6fed;color:#fff;padding:12px 20px;font-weight:800;cursor:pointer}
    .reading-next.active{display:inline-flex}
    .reading-check-launch-button{margin-bottom:12px;background:#fff7ed!important;border-color:#fed7aa!important;color:#9a3412!important}
    .reading-check-launch-button:not(:disabled):hover{background:#ffedd5!important;border-color:#fb923c!important}
    .reading-check-launch-button:disabled{background:#f3f4f6!important;border-color:#d1d5db!important;color:#6b7280!important}
    @media(max-width:640px){.reading-check-meta,.reading-choices{grid-template-columns:1fr}.reading-check-top{align-items:flex-start}.reading-check-close{padding:9px 12px}}
  `;
  document.head.append(style);

  const page = document.createElement("section");
  page.className = "reading-check-page";
  page.setAttribute("aria-hidden", "true");
  page.innerHTML = `
    <div class="reading-check-shell">
      <div class="reading-check-top">
        <h1>Reading Check · 阅读理解</h1>
        <button class="reading-check-close" type="button">Return to Study</button>
      </div>
      <div class="reading-check-meta">
        <div class="reading-meta-card"><span>Current Working Level</span><strong id="readingWorkingLevel">Level 3</strong></div>
        <div class="reading-meta-card"><span>Passage Serial Number</span><strong id="readingSerial">Passage 1 of 3</strong></div>
      </div>
      <article class="reading-card">
        <h2 class="reading-title" id="readingTitle"></h2>
        <p class="reading-passage" id="readingPassage"></p>
        <p class="reading-question" id="readingQuestion"></p>
        <div class="reading-choices" id="readingChoices"></div>
        <p class="reading-result" id="readingResult" aria-live="polite"></p>
        <button class="reading-next" id="readingNext" type="button">Next Passage</button>
      </article>
    </div>`;
  document.body.append(page);

  const state = { level: 3, passageIndex: 0, answered: false };
  const workingLevel = page.querySelector("#readingWorkingLevel");
  const serial = page.querySelector("#readingSerial");
  const title = page.querySelector("#readingTitle");
  const passage = page.querySelector("#readingPassage");
  const question = page.querySelector("#readingQuestion");
  const choiceBox = page.querySelector("#readingChoices");
  const result = page.querySelector("#readingResult");
  const next = page.querySelector("#readingNext");
  const close = page.querySelector(".reading-check-close");

  function completionKey(level) {
    return `mlp-reading-check-grade3-level-${level}`;
  }

  function renderReadingPassage() {
    const items = readingPassages[state.level];
    const item = items[state.passageIndex];
    state.answered = false;
    workingLevel.textContent = `Level ${state.level}`;
    serial.textContent = `Passage ${state.passageIndex + 1} of ${items.length}`;
    title.textContent = item.title;
    passage.textContent = item.passage;
    question.textContent = item.question;
    result.textContent = "";
    result.className = "reading-result";
    next.classList.remove("active");
    choiceBox.innerHTML = "";
    item.choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "reading-choice";
      button.textContent = `${String.fromCharCode(65 + index)}. ${choice}`;
      button.addEventListener("click", () => answerReadingQuestion(index));
      choiceBox.append(button);
    });
    page.scrollTo({ top: 0, behavior: "smooth" });
  }

  function answerReadingQuestion(index) {
    if (state.answered) return;
    state.answered = true;
    const item = readingPassages[state.level][state.passageIndex];
    const correctIndex = item.answer.charCodeAt(0) - 65;
    [...choiceBox.children].forEach((button, buttonIndex) => {
      button.disabled = true;
      if (buttonIndex === correctIndex) button.classList.add("correct");
      if (buttonIndex === index && index !== correctIndex) button.classList.add("wrong");
    });
    if (index === correctIndex) {
      result.textContent = "Correct! Great reading.";
      result.classList.add("good");
    } else {
      result.textContent = `Not quite. The correct answer is ${item.answer}.`;
      result.classList.add("bad");
    }
    const isLast = state.passageIndex === readingPassages[state.level].length - 1;
    next.textContent = isLast ? "Finish Reading Check" : "Next Passage";
    next.classList.add("active");
  }

  function openReadingCheck(level) {
    if (!readingPassages[level]) return;
    state.level = level;
    state.passageIndex = 0;
    page.classList.add("active");
    page.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    renderReadingPassage();
  }

  function closeReadingCheck() {
    page.classList.remove("active");
    page.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function offerReadingCheckForCurrentLevel() {
    if (currentGrade !== "grade3") return;
    const levelName = levels[levelIndex] && levels[levelIndex].name;
    if (!levelName || !levelName.endsWith(".1")) return;
    const readingLevel = Number(levelName.split(".")[0]);
    if (readingLevel < 3 || !readingPassages[readingLevel]) return;
    if (localStorage.getItem(completionKey(readingLevel)) === "complete") return;
    showModal(
      "Reading Check",
      `You are entering Level ${levelName}. Reading checks now begin at Level 3. Complete three passages for Working Level ${readingLevel}.`,
      "Start Reading Check",
      () => openReadingCheck(readingLevel)
    );
  }

  next.addEventListener("click", () => {
    const isLast = state.passageIndex === readingPassages[state.level].length - 1;
    if (isLast) {
      localStorage.setItem(completionKey(state.level), "complete");
      closeReadingCheck();
      showModal("Reading check complete!", `You completed all three passages for Working Level ${state.level}.`, "Continue Studying");
      return;
    }
    state.passageIndex += 1;
    renderReadingPassage();
  });
  close.addEventListener("click", closeReadingCheck);

  function currentReadingLevel() {
    if (currentGrade !== "grade3") return null;
    const levelName = levels[levelIndex] && levels[levelIndex].name;
    if (!levelName) return null;
    const readingLevel = Number(levelName.split(".")[0]);
    return readingPassages[readingLevel] ? readingLevel : null;
  }

  function makeReadingLaunchButton() {
    const button = document.createElement("button");
    button.className = "review-bank-button reading-check-launch-button";
    button.type = "button";
    button.addEventListener("click", () => {
      const readingLevel = currentReadingLevel();
      if (readingLevel) {
        openReadingCheck(readingLevel);
        return;
      }
      showModal(
        "Reading Check",
        "Reading checks begin in Grade 3 Level 3.1. Keep going, and this button will unlock when a reading passage is ready.",
        "OK"
      );
    });
    return button;
  }

  const studyReadingButton = makeReadingLaunchButton();
  const testReadingButton = makeReadingLaunchButton();
  const studyPanelNode = document.querySelector("#studyPanel");
  const dashboardActionsNode = document.querySelector(".review-bank-actions");
  const vocabListNode = document.querySelector("#vocabList");
  if (studyPanelNode && vocabListNode) studyPanelNode.insertBefore(studyReadingButton, vocabListNode);
  if (dashboardActionsNode) dashboardActionsNode.prepend(testReadingButton);

  function updateReadingButtons() {
    const readingLevel = currentReadingLevel();
    const levelText = readingLevel ? `Reading Check · Level ${readingLevel}` : "Reading Check";
    [studyReadingButton, testReadingButton].forEach((button) => {
      button.textContent = levelText;
      button.disabled = !readingLevel;
      button.title = readingLevel
        ? `Open reading check for Level ${readingLevel}`
        : "Reading checks begin in Grade 3 Level 3.1.";
    });
  }

  const originalStartLevel = startLevel;
  startLevel = function (index = levelIndex) {
    originalStartLevel(index);
    updateReadingButtons();
    offerReadingCheckForCurrentLevel();
  };

  updateReadingButtons();
  offerReadingCheckForCurrentLevel();
})();
