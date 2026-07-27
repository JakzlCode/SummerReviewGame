(function () {
  const readingPassages = {
    grade3: {
      3: [
        { title: "皇帝的命令", passage: "皇帝下令，让一个做官的人两天之内办好一件事情。那个人低头苦笑，说实在办不到。孙子站出来，说：“让我去吧，我会帮助他。”皇帝听了，答应让孙子留下来。", questions: [{ question: "谁帮助做官的人？", choices: ["孙子", "皇帝", "公鸡", "老虎"], answer: 0 }] },
        { title: "聪明的孙子", passage: "做官的人总是想着皇帝的命令，心里有很重的心事。他在外面散步时，孙子看见他低着头。孙子问清楚事情以后，想出了一个好主意。他先说服做官的人，再请他放心。做官的人听了，才笑了。", questions: [{ question: "孙子怎样帮助做官的人？", choices: ["想出一个好主意", "让他马上走开", "把饭菜留下来", "请皇帝去散步"], answer: 0 }] },
        { title: "勇敢地救人", passage: "昨天，一个孩子在外面散步时摔倒了。他的肩膀很痛，站不起来。旁边的人虽然很担心，但是不知道怎么办。小明立刻走过去，低头问清楚事情。他请旁边的人去找孩子的母亲，自己留下来帮助孩子。母亲赶到以后，非常感动，说小明又聪明又勇敢。", questions: [{ question: "母亲为什么感动？", choices: ["因为小明留下来帮助孩子", "因为小明带来了饭菜", "因为孩子去看公鸡", "因为皇帝改变了命令"], answer: 0 }] }
      ],
      4: [
        { title: "终于到达南海", passage: "从前，四川有一个穷和尚。他打算去南海拜佛，只带着一碗米饭和一根木棒。他日夜不停地赶路，饿了就吃一点，累了就在破庙休息。很久以后，他终于到达南海。", questions: [{ question: "穷和尚为什么能到达南海？", choices: ["因为他一直赶路", "因为他有很多钱", "因为他坐着大船", "因为另一个和尚带他去"], answer: 0 }] },
        { title: "富和尚的准备", passage: "另一个富和尚也愿意去南海。他觉得路上需要很多钱，所以一直准备。他买好很多东西，却总是没有出发。穷和尚从南海回来拜访他时，富和尚才知道自己可惜地错过了机会。", questions: [{ question: "富和尚为什么没有出发？", choices: ["因为他一直准备", "因为他找不到课本", "因为他不愿意拜佛", "因为他已经到达南海"], answer: 0 }] },
        { title: "破庙里的一本书", passage: "穷和尚赶路时，在一座破庙里休息。他看到旁边有一本书，就拿起来读。书里的课文让他改变了主意：虽然又饿又累，但是只要一直赶路，就一定有办法。他站起来，把书放在旁边，又日夜不停地赶路。最后，他终于到达了自己想去的地方。", questions: [{ question: "课文让穷和尚明白了什么？", choices: ["一直赶路就有办法", "需要很多钱才能读书", "应该把书送走", "应该留在破庙里"], answer: 0 }] }
      ],
      5: [
        { title: "走丢的骆驼", passage: "一位商人的骆驼走丢了，他赶紧去寻找。路上，一位老师不紧不慢地问：“骆驼是不是少了一颗牙齿？”商人说对极了。老师让他顺着脚印继续找，商人果然找到了骆驼。", questions: [{ question: "老师让商人顺着什么寻找？", choices: ["脚印", "血迹", "一条线", "课文"], answer: 0 }] },
        { title: "路边的血迹", passage: "一位母亲看见路边有血迹，又看见深深的脚印。她顺着脚印走过去，发现一只骆驼受伤了。她赶紧找人帮助，把受伤的骆驼送到安全的地方。母亲看清楚血迹以后，继续顺着脚印寻找。", questions: [{ question: "母亲为什么顺着脚印走？", choices: ["因为她看见了血迹", "因为她要去市场", "因为她走丢了课本", "因为她想找一碗米饭"], answer: 0 }] },
        { title: "深浅不同的脚印", passage: "老师带着孩子看地上的脚印。一个脚印很深，另一个比较浅。老师指点他们：“驮着东西的骆驼比较重，所以脚印会更深。”孩子们听了，觉得好极了。他们终于明白，脚印的深浅可以帮助人寻找骆驼。", questions: [{ question: "哪个脚印可能是驮着东西的骆驼留下的？", choices: ["比较深的脚印", "比较浅的脚印", "没有牙齿印的脚印", "藏起来的脚印"], answer: 0 }] }
      ],
      6: [
        { title: "墙上的时钟", passage: "墙上的时钟不声不响地走着。一秒钟很短，一分钟也很快过去。小军躺在床上看书，不知不觉已经很晚了。他注意到时间不会返回，就赶紧收好书去休息。", questions: [{ question: "小军注意到时间怎样？", choices: ["时间不会返回", "时间会藏起来", "时间会走丢", "时间会受伤"], answer: 0 }] },
        { title: "操场上的一分钟", passage: "操场上，大家正在打球，欢笑声很响亮。老师说：“我们做一个实验，一分钟之内看谁能拍球最多。”游戏开始后，大家都注意墙上的时钟，努力完成实验。一分钟以后，老师让大家停下来回答问题。", questions: [{ question: "大家为什么注意时钟？", choices: ["要计算一分钟", "要寻找骆驼", "要准备去南海", "要收拾饭店"], answer: 0 }] },
        { title: "悄悄长大的植物", passage: "小美做了一个植物实验。她把植物放在床边，每天拿起笔记下改变。植物不声不响地长大，过了许多天，她终于发现努力和时间能使小植物成功长高。她每天都注意时间，也愿意继续这个实验。许多天以后，她把这件事情说给母亲听。", questions: [{ question: "小美每天拿起笔做什么？", choices: ["记下植物的改变", "画骆驼的脚印", "写饭店的名字", "计算一碗米饭"], answer: 0 }] }
      ],
      7: [
        { title: "清晨去市场", passage: "清晨，一个年轻人从乡下赶到小镇的市场。他带着一头驴子，驴子驮着两大筐东西。到了饭店旁边，他发现一个筐歪了，就停下来收拾。", questions: [{ question: "年轻人为什么停下来？", choices: ["一个筐歪了", "驴子走丢了", "饭店关门了", "他要返回乡下"], answer: 0 }] },
        { title: "山坡上的脚印", passage: "年轻人走过山坡时，驴子突然摔了。筐里的东西落地，山坡上留下许多脚印。路过的行人赶紧来帮助。年轻人说：“谢谢，没关系，我收拾一下再走。”", questions: [{ question: "驴子摔了以后，谁来帮助？", choices: ["路过的行人", "富和尚", "一位商人", "森林里的老虎"], answer: 0 }] },
        { title: "饭店里的误会", passage: "小镇饭店里，一位行人把两大筐东西放在门旁。年轻人进门时，简直以为那是自己的筐。他正要拿走，行人赶紧说：“等一下，这是我的。”年轻人看清楚后说：“对不起，没关系，我们再说清楚。”行人也看清楚了，笑着说没关系。", questions: [{ question: "年轻人为什么差点拿错筐？", choices: ["两个筐看起来很像", "他的筐摔在山坡上", "饭店里没有灯", "行人把筐藏起来了"], answer: 0 }] }
      ]
    },
    grade4: {
      1: [
        { title: "相反的一天", passage: "星期六早上，小雨盼望妈妈不上班，可是妈妈说今天一切都相反：小雨要戴上爸爸的眼镜，穿上妈妈的围裙，试试做“小大人”。她把地板扫得干干净净，又把书架整理得整整齐齐，才发现做家务比写作业还累。", questions: [{ question: "小雨为什么觉得做“小大人”很累？", choices: ["因为她做了很多家务", "因为她没有鞋子", "因为她一直在喝茶", "因为她下楼玩了一天"], answer: 0 }, { question: "小雨把什么地方整理得整整齐齐？", choices: ["书架", "厨房", "院子", "教室"], answer: 0 }] },
        { title: "有礼貌的孙女", passage: "奶奶的客人来喝茶，孙女小兰不但倒茶，而且把客人的衣服挂好。尽管她只是短短说了几句话，客人仍然感到很温暖。奶奶惊奇地发现，小兰接待客人越来越有礼貌了。", questions: [{ question: "客人为什么感到温暖？", choices: ["因为小兰有礼貌地接待客人", "因为天气很热", "因为奶奶送了礼物", "因为茶杯很大"], answer: 0 }] },
        { title: "毫无用处的盒子", passage: "小杰在地板上发现一个旧盒子，爸爸说它毫无用处，可以扔掉。小杰却把它擦得干干净净，放在书架旁边装小纸条。第二天，妈妈找作业纸时，发现这个盒子正好派上了用场。", questions: [{ question: "为什么旧盒子后来有用了？", choices: ["因为可以装小纸条和作业纸", "因为它会自己下楼", "因为它变成了眼镜", "因为客人要喝茶"], answer: 0 }, { question: "一开始爸爸觉得盒子怎么样？", choices: ["毫无用处", "非常漂亮", "太重了", "很有礼貌"], answer: 0 }] },
        { title: "鞋子的秘密", passage: "明明下楼时穿错了鞋子，一只大一只小，走路一高一低。妹妹看见后没有挖苦他，只是笑着提醒：“你的鞋子好像在比赛。”明明低头一看，惊奇地跑回家换鞋。", questions: [{ question: "明明为什么走路一高一低？", choices: ["因为他穿错了鞋子", "因为地板很脏", "因为他戴过眼镜", "因为他背着书架"], answer: 0 }] }
      ],
      2: [
        { title: "生肖大会", passage: "森林里开生肖大会，老牛说自己会种地、拉车，是大家的好帮手。小老鼠眼珠一转，说自己虽然小，却能钻进洞里找种子。大家听了都点头，因为每个动物都有自己的本领。", questions: [{ question: "老牛说自己会做什么？", choices: ["种地和拉车", "翻跟斗和飞舞", "看家和喝茶", "整理书架"], answer: 0 }, { question: "这个故事想说明什么？", choices: ["每个动物都有自己的本领", "小动物都没有用处", "只有老牛能帮忙", "种子会自己说话"], answer: 0 }] },
        { title: "会飞舞的纸蛇", passage: "美术课上，小金龙、白蛇和青蛇都挂在教室里。窗外风一吹，纸做的银环蛇也跟着飞舞，好像真的活了一样。小华吓得摘下眼镜，才发现那只是同学做的作品。", questions: [{ question: "银环蛇为什么会飞舞？", choices: ["因为风吹动了纸蛇", "因为它是真的蛇", "因为它会骑车", "因为它在看家"], answer: 0 }] },
        { title: "小偷怕什么", passage: "夜里，小偷想进院子，却听见狗在看家。狗没有冲杀，只是大叫几声，小偷就逃走了。第二天，爷爷说这只狗比骑兵还勇敢，真有趣。", questions: [{ question: "小偷为什么逃走了？", choices: ["因为狗在看家并大叫", "因为绵羊追他", "因为他要去骑车", "因为衣裳太旧"], answer: 0 }, { question: "爷爷觉得这只狗怎么样？", choices: ["勇敢又有趣", "懒惰又爱睡", "半信半疑", "毫无用处"], answer: 0 }] },
        { title: "金丝猴的表演", passage: "动物园里，金丝猴穿着旧衣服一样颜色的毛，在树上翻跟斗。旁边的小朋友属猪，他笑着说：“如果我也会这样翻，作业一定写不完。”大家听了都笑了。", questions: [{ question: "金丝猴在树上做什么？", choices: ["翻跟斗", "煮面", "扫地板", "抢夺种子"], answer: 0 }] }
      ],
      3: [
        { title: "纸浆试验", passage: "老师让大家做古代造纸试验：先把破布切碎，放进锅里煮成米糊一样的纸浆。再把纸浆一层一层贴在渔网上，拿到墙上晒干。几天后，大家终于看见一张粗粗的纸，试验成功了。", questions: [{ question: "大家把纸浆贴在哪里？", choices: ["渔网上", "自行车上", "鞋子里", "茶杯里"], answer: 0 }, { question: "这次试验最后怎么样？", choices: ["成功了", "失败了", "变成了拉车比赛", "传到了欧洲"], answer: 0 }] },
        { title: "晒太阳的纸", passage: "小林把湿纸贴在墙上晒太阳，可是弟弟以为那是一层白色的厚衣服。弟弟想把它扯来披在身上，幸好姐姐及时拦住。姐姐说：“这是纸，不是衣服，晒干以后写字更方便。”", questions: [{ question: "弟弟把湿纸误认为是什么？", choices: ["厚衣服", "渔网", "自行车", "种子"], answer: 0 }] },
        { title: "方便的发明", passage: "爸爸说，古代没有现在这么方便的纸，人们写字很不舒服。造纸术后来传到亚洲和欧洲，帮助了世界文明。小美听完说：“原来一张纸也能作出贡献。”", questions: [{ question: "造纸术传到了哪里？", choices: ["亚洲和欧洲", "只传到学校", "只传到厨房", "只传到齐国"], answer: 0 }, { question: "小美明白了什么？", choices: ["纸也能对文明作出贡献", "纸只能用来晒太阳", "欧洲没有文字", "自行车是四大发明之一"], answer: 0 }] },
        { title: "四大发明展览", passage: "学校办“四大发明”展览，展台之一介绍造纸术。小安骑自行车去参观，看到纸、印刷、火药和指南针的故事。她觉得这些发明不但改变了古代生活，而且影响了今天的世界。", questions: [{ question: "展览介绍了什么主题？", choices: ["四大发明", "生肖大会", "田忌赛马", "客人喝茶"], answer: 0 }] }
      ],
      4: [
        { title: "战国地图", passage: "历史课上，老师把战国时期的地图分成两段讲。那时许多国家打仗、抢夺土地，战争不断扩大，有些国家灭亡，有些国家剩下后还想统一天下。小宁听完才明白，原来齐国的故事发生在这样特殊的时期。", questions: [{ question: "故事发生在什么特殊时期？", choices: ["战国时期", "下雨的早上", "古代造纸试验时", "生肖大会时"], answer: 0 }, { question: "战国时期许多国家在做什么？", choices: ["打仗和抢夺土地", "整理书架", "喝茶接待客人", "翻跟斗"], answer: 0 }] },
        { title: "田忌的三匹马", passage: "田忌喜欢赛马，可他的上等马、中等马和下等马都比对手同等级的马慢一点。因此他常常失败，刚才又输了，心里很不服气。孙膑却半信半疑地笑着说：“换个顺序，也许能够取胜。”", questions: [{ question: "田忌为什么常常失败？", choices: ["同等级的马都慢一点", "他没有一匹马", "他不喜欢比赛", "他打断了老师"], answer: 0 }, { question: "孙膑建议田忌做什么？", choices: ["换个顺序", "换个国家", "停止奔跑", "去晒太阳"], answer: 0 }] },
        { title: "换个顺序", passage: "比赛开始了，田忌先用下等马对对方的上等马，虽然输了，但接着用上等马赢了对方的中等马。最后，他用中等马赢了对方的下等马，结果转败为胜。齐王看见箭头一样奔跑的马，也服气了。", questions: [{ question: "田忌怎样转败为胜？", choices: ["换个顺序比赛", "换个时间睡觉", "让马穿旧衣服", "让小偷看家"], answer: 0 }, { question: "田忌第一场为什么可以输？", choices: ["因为后两场能够赢回来", "因为比赛已经结束", "因为齐王不在场", "因为马不会奔跑"], answer: 0 }] },
        { title: "得意洋洋的小将", passage: "小将军第一次出场就赢了，得意洋洋地挖苦别人：“咱们当然最强！”老师打断他说：“同样的力量，顺序不同，结果可能相反。”小将军想起田忌赛马，脸红了，因为真正的胜利不只靠快，还靠想办法。", questions: [{ question: "老师为什么打断小将军？", choices: ["因为他说话太得意，还挖苦别人", "因为他忘了戴眼镜", "因为他要去种地", "因为他把纸浆晒干了"], answer: 0 }, { question: "这段话告诉我们什么？", choices: ["胜利也需要策略", "只要跑快就一定赢", "挖苦别人很有礼貌", "失败永远不能改变"], answer: 0 }] }
      ]
    }
  };

  const style = document.createElement("style");
  style.textContent = `
    .reading-check-page{position:fixed;inset:0;z-index:80;display:none;overflow:auto;background:linear-gradient(145deg,#eef5ff,#fff8ee);padding:clamp(18px,4vw,46px)}
    .reading-check-page.active{display:block}.reading-check-shell{width:min(980px,100%);margin:0 auto}.reading-check-top{display:flex;align-items:flex-start;justify-content:space-between;gap:18px;margin-bottom:18px}
    .reading-check-top h1{margin:0;color:#1c2533;font-size:clamp(1.65rem,4vw,2.5rem)}.reading-check-subtext{margin:6px 0 0;color:#667085;font-weight:750;line-height:1.45}
    .reading-check-close{border:1px solid #cbd5e1;background:#fff;color:#344054;border-radius:12px;padding:10px 16px;font-weight:750;cursor:pointer}.reading-card{background:#fff;border:1px solid #d6dde8;border-radius:22px;padding:clamp(22px,5vw,42px);box-shadow:0 18px 45px rgba(31,41,51,.11)}
    .reading-title{margin:0 0 16px;color:#1f2933;font-size:clamp(1.4rem,3vw,2rem)}.reading-passage{margin:0 0 26px;color:#27364a;font-family:"Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif;font-size:clamp(1.2rem,2.5vw,1.55rem);line-height:1.95}.reading-question{margin:0 0 14px;color:#1f2933;font-size:clamp(1.08rem,2vw,1.3rem);font-weight:800}
    .reading-choices{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.reading-choice{min-height:54px;border:2px solid #d6dde8;border-radius:14px;background:#fff;padding:12px 16px;text-align:left;color:#1f2933;font-size:1rem;font-weight:700;cursor:pointer}.reading-choice.correct{border-color:#177245;background:#eaf8f0;color:#116039}.reading-choice.wrong{border-color:#b42318;background:#fff0ee;color:#9b1c13}
    .reading-result{min-height:30px;margin:16px 0 0;font-weight:800}.reading-result.good{color:#177245}.reading-result.bad{color:#b42318}.reading-next{display:none;margin-top:14px;border:0;border-radius:14px;background:#2f6fed;color:#fff;padding:12px 20px;font-weight:800;cursor:pointer}.reading-next.active{display:inline-flex}
    .reading-check-launch-button{display:block!important;width:100%;margin:0 0 12px!important;background:#fff7ed!important;border-color:#fed7aa!important;color:#9a3412!important}.reading-check-note{margin:-4px 0 12px;color:#667085;font-size:.82rem;font-weight:750;line-height:1.35}@media(max-width:640px){.reading-choices{grid-template-columns:1fr}.reading-check-top{display:grid}}
  `;
  document.head.append(style);

  const page = document.createElement("section");
  page.className = "reading-check-page";
  page.innerHTML = `<div class="reading-check-shell"><div class="reading-check-top"><div><h1>Reading Check · 阅读理解</h1><p class="reading-check-subtext">Answer all reading questions correctly to unlock the next level. If you miss one, review and try this reading check again.</p></div><button class="reading-check-close" type="button">Go Back to Study</button></div><article class="reading-card"><h2 class="reading-title"></h2><p class="reading-passage"></p><p class="reading-question"></p><div class="reading-choices"></div><p class="reading-result" aria-live="polite"></p><button class="reading-next" type="button">Next Passage</button></article></div>`;
  document.body.append(page);

  const title = page.querySelector(".reading-title");
  const passage = page.querySelector(".reading-passage");
  const question = page.querySelector(".reading-question");
  const choices = page.querySelector(".reading-choices");
  const result = page.querySelector(".reading-result");
  const next = page.querySelector(".reading-next");
  const close = page.querySelector(".reading-check-close");
  const state = { level: 3, index: 0, correct: 0, answered: false, pendingAdvance: false };

  function readingLevelForCurrentLevel() {
  try {
    const name = levels[levelIndex] && levels[levelIndex].name;
    const number = Number(String(name || "").split(".")[0]);
    const gradePassages = readingPassages[currentGrade] || {};
    return gradePassages[number] ? number : null;
  } catch {
    return null;
  }
}

  function readingKey(levelNumber) {
    return `mlp-reading-check-${currentGrade}-level-${levelNumber}`;
  }

  function readingPassed(levelNumber) {
    return localStorage.getItem(readingKey(levelNumber)) === "passed";
  }

  function markReadingPassed(levelNumber) {
    localStorage.setItem(readingKey(levelNumber), "passed");
  }

  function showNotice(titleText, messageText, buttonText = "OK", action = null) {
    if (typeof showModal === "function") showModal(titleText, messageText, buttonText, action);
    else {
      window.alert(`${titleText}\n\n${messageText}`);
      if (action) action();
    }
  }

  function render() {
    const items = (readingPassages[currentGrade] || {})[state.level] || [];
    const item = items[state.index];
    state.answered = false;
    title.textContent = `Level ${state.level}: ${item.title} (${state.index + 1}/${items.length})`;
    passage.textContent = item.passage;
    question.textContent = item.question;
    result.textContent = "";
    result.className = "reading-result";
    next.classList.remove("active");
    choices.innerHTML = "";
    item.choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.className = "reading-choice";
      button.type = "button";
      button.textContent = `${String.fromCharCode(65 + index)}. ${choice}`;
      button.addEventListener("click", () => answer(index));
      choices.append(button);
    });
  }

  function answer(index) {
    if (state.answered) return;
    state.answered = true;
    (readingPassages[currentGrade] || {})[state.level][state.index].answer;
    if (index === correct) state.correct += 1;
    [...choices.children].forEach((button, buttonIndex) => {
      button.disabled = true;
      if (buttonIndex === correct) button.classList.add("correct");
      if (buttonIndex === index && index !== correct) button.classList.add("wrong");
    });
    result.textContent = index === correct ? "Correct! Great reading." : `Not quite. The correct answer is ${String.fromCharCode(65 + correct)}. You will need to retry this reading check to unlock the next level.`;
    result.classList.add(index === correct ? "good" : "bad");
    next.textContent = state.index === (readingPassages[currentGrade] || {})[state.level].length - 1 ? "Finish Reading Check" : "Next Passage";
    next.classList.add("active");
  }

  function openReadingCheck(levelNumber, pendingAdvance = false) {
    state.level = levelNumber;
    state.index = 0;
    state.correct = 0;
    state.pendingAdvance = pendingAdvance;
    page.classList.add("active");
    document.body.style.overflow = "hidden";
    render();
  }

  function closePage() {
    page.classList.remove("active");
    document.body.style.overflow = "";
  }

  function maybeAdvanceAfterReading() {
    if (!state.pendingAdvance && !passedLevels.has(levelIndex)) return;
    if (levelIndex < levels.length - 1) startLevel(levelIndex + 1);
    else startFinalTest();
  }

  function makeButton() {
    const button = document.createElement("button");
    button.className = "review-bank-button reading-check-launch-button";
    button.type = "button";
    button.textContent = "Reading Check";
    button.addEventListener("click", () => {
      const level = readingLevelForCurrentLevel();
      if (level) openReadingCheck(level, false);
      else showNotice("Reading Check", "Reading checks begin in Grade 3 Level 3.1.", "OK");
    });
    return button;
  }

  let studyButton = null;
  let testButton = null;

  function updateButtons() {
    const level = readingLevelForCurrentLevel();
    [studyButton, testButton].filter(Boolean).forEach((button) => {
      button.textContent = level ? `Reading Check · Level ${level}` : "Reading Check";
      button.title = level ? `Open reading check for Level ${level}` : "Reading checks begin in Grade 3 Level 3.1.";
    });
  }

  function installButtons() {
    const studyPanel = document.querySelector("#studyPanel");
    const vocabList = document.querySelector("#vocabList");
    const actions = document.querySelector(".review-bank-actions");
    if (studyPanel && vocabList && !studyButton) {
      studyButton = makeButton();
      studyPanel.insertBefore(studyButton, vocabList);
      const note = document.createElement("p");
      note.className = "reading-check-note";
      note.textContent = "After the word test, the reading check must be passed before the next level unlocks.";
      studyPanel.insertBefore(note, vocabList);
    }
    if (actions && !testButton) {
      testButton = makeButton();
      actions.prepend(testButton);
      const note = document.createElement("p");
      note.className = "reading-check-note";
      note.textContent = "Next level opens only after all reading questions are correct.";
      actions.append(note);
    }
    updateButtons();
  }

  function completePassedWordLevel() {
    rememberMissedWords(levelMissedWords);
    passedLevels.add(levelIndex);
    saveProgress();
    updateDashboard();
  }

  function showReadingGate() {
    const level = readingLevelForCurrentLevel();
    if (!level || readingPassed(level)) return false;
    testStopped = true;
    nextButton.disabled = true;
    choices.innerHTML = "";
    showPromptMessage("yuè dú jiǎn chá", "阅读检查");
    feedback.textContent = `Great word test: ${score}/${vocabulary.length} correct! Now complete Reading Check Level ${level}. You need all reading answers correct to unlock the next level.`;
    feedback.className = "feedback good";
    showNotice("Reading Check Required", `Nice work passing the word test. Before moving on, complete Reading Check Level ${level}. You need all answers correct to unlock the next level.`, "Start Reading Check", () => openReadingCheck(level, true));
    const button = document.createElement("button");
    button.className = "primary advance-button";
    button.type = "button";
    button.textContent = `Start Reading Check Level ${level}`;
    button.addEventListener("click", () => openReadingCheck(level, true));
    feedback.append(document.createElement("br"), button);
    return true;
  }

  next.addEventListener("click", () => {
    if (state.index < (readingPassages[currentGrade] || {})[state.level].length - 1) {
      state.index += 1;
      render();
      return;
    }
    const total = (readingPassages[currentGrade] || {})[state.level].length;
    closePage();
    if (state.correct === total) {
      markReadingPassed(state.level);
      showNotice("Reading check passed!", `You answered all ${total} reading questions correctly. The next level is now unlocked.`, "Continue", maybeAdvanceAfterReading);
    } else {
      state.pendingAdvance = false;
      showNotice("Try the reading check again", `You answered ${state.correct}/${total} correctly. Review the passage and try again. The next level unlocks after all answers are correct.`, "Go Back to Study");
    }
  });
  close.addEventListener("click", closePage);

  const installTimer = window.setInterval(() => {
    installButtons();
    if (studyButton || testButton) window.clearInterval(installTimer);
  }, 300);
  installButtons();

  const originalStartLevel = startLevel;
  startLevel = function (index = levelIndex) {
    originalStartLevel(index);
    window.setTimeout(installButtons, 0);
  };

  const originalFinishLevel = finishLevel;
  finishLevel = function () {
    const passedWordTest = score / vocabulary.length >= levelPassRate;
    const level = readingLevelForCurrentLevel();
    if (testMode === "level" && passedWordTest && level && !readingPassed(level)) {
      completePassedWordLevel();
      showReadingGate();
      return;
    }
    originalFinishLevel();
  };
})();
