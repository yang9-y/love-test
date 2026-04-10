// 10道题目
const questions = [
    {
      text: "如果一段感情的热恋期只有三个月，之后必然变成平淡如水、毫无激情的关系，你还愿意开始吗？",
      options: [
        { text: "A. 不愿意，没有激情的感情不如不要，我不想浪费时间在“维持”上。", type: "A" },
        { text: "B. 愿意，只要那三个月足够刻骨铭心，平淡后也可以转为亲情或陪伴。", type: "B" },
        { text: "C. 愿意，但我可能会在激情消退前主动寻找新的刺激点，尝试改变模式。", type: "C" },
        { text: "D. 犹豫，如果对方承诺平淡后依然忠诚，我可能会开始；否则算了。", type: "D" }
      ]
    },
    {
      text: "你和伴侣吵架到最激烈时，对方突然哭了，你会？",
      options: [
        { text: "A. 立刻停止争吵，先安抚对方的情绪。", type: "A" },
        { text: "B. 继续把逻辑道理说清楚，但放低音量放缓语速。", type: "B" },
        { text: "C. 感到不知所措，想先离开现场独自冷静一下。", type: "C" },
        { text: "D. 认为对方在用眼泪操控情绪，感到更愤怒。", type: "D" }
      ]
    },
    {
      text: "你的伴侣在争吵中说出最恶毒的话：“我这辈子最后悔的事就是遇见你。”事后ta道歉说是气话。你会？",
      options: [
        { text: "A. 原谅，但永远记得这句话。它像一根刺，你知道它在那里，但选择不提。", type: "A" },
        { text: "B. 当场反击：“你以为我不后悔吗？”然后用同样恶毒的话回敬。", type: "B" },
        { text: "C. 不原谅。有些话一旦说出口，关系就回不去了。气话是内心真实想法的泄洪。", type: "C" },
        { text: "D. 原谅，并且真的放下。你会把这句话理解为对方当时情绪的失控，而不是对关系的终极评价。", type: "D" }
      ]
    },
    {
      text: "你爱上一个人，但你们之间有一道无法逾越的障碍，在一起每一天都是倒计时，你会？",
      options: [
        { text: "A. 不会开始，既然注定要分开，何必给彼此增加一段需要“忘记”的记忆。", type: "A" },
        { text: "B. 会开始，哪怕只能在一起一天，我也要抓住那一瞬间的真实。", type: "B" },
        { text: "C. 会开始，同时寻找突破障碍的方法，不到最后一刻不认命。", type: "C" },
        { text: "D. 不开始，但会把这份感情藏在心里，成为一生的秘密。", type: "D" }
      ]
    },
    {
      text: "如果你可以植入一段“完美记忆”——让你觉得你和伴侣拥有过最浪漫的过去，但代价是你会忘记某一段真实但痛苦的回忆。你会？",
      options: [
        { text: "A. 会，痛苦的真实不如幸福的虚假，我愿意用一段假记忆换内心的平静。", type: "A" },
        { text: "B. 不会，任何虚假的东西都玷污了感情的真实性。我宁可要千疮百孔的真实，也不要完美的幻觉。", type: "B" },
        { text: "C. 会，但我只会植入那些“本来可能发生但没发生”的记忆，而不是完全虚假的。", type: "C" },
        { text: "D. 不会，但我也不会拒绝伴侣植入。ta如果觉得开心，那是ta的选择，我不干涉。", type: "D" }
      ]
    },
    {
      text: "你认为感情中最无法容忍的是？",
      options: [
        { text: "A. 欺骗与隐瞒。", type: "A" },
        { text: "B. 长期冷暴力。", type: "B" },
        { text: "C. 过度控制与束缚。", type: "C" },
        { text: "D. 平淡无聊，日复一日。", type: "D" }
      ]
    },
    {
      text: "你和伴侣感情稳定，但有一天你遇到了一个“灵魂共振”的人——和ta聊天让你感觉像在照镜子，而你确定伴侣永远不会发现。你会？",
      options: [
        { text: "A. 立刻切断与这个人的一切联系，主动告诉伴侣这件事。", type: "A" },
        { text: "B. 保持距离，但不会切断。偶尔聊聊天，当作一种精神上的调剂，但绝不越界。", type: "B" },
        { text: "C. 和这个人发展成密友，甚至把ta介绍给伴侣认识，用“三角化”来稀释危险。", type: "C" },
        { text: "D. 不会主动切断，但会开始拿伴侣和这个人比较，在心里默默打分。", type: "D" }
      ]
    },
    {
      text: "伴侣患重病且可能拖累你一生，你会？",
      options: [
        { text: "A. 不离不弃，责任优先。", type: "A" },
        { text: "B. 尽力照顾但内心会闪过逃离的念头。", type: "B" },
        { text: "C. 迅速寻求所有医疗资源和社会救助，把照顾流程化、专业化。", type: "C" },
        { text: "D. 崩溃但表面坚强，独自一人时才会大哭。", type: "D" }
      ]
    },
    {
      text: "伴侣对你撒了一个谎，这个谎没有造成任何实际伤害，但你发现了。你会？",
      options: [
        { text: "A. 当场拆穿并强调：“以后任何事都不许骗我，善意的谎言也是谎言。”", type: "A" },
        { text: "B. 心里很暖，知道对方是为你好，不会拆穿，但会默默记住这件事。", type: "B" },
        { text: "C. 开玩笑地说：“咦，我记得这个好像是打五折？我记错了？”给对方一个台阶下，同时暗示自己知道。", type: "C" },
        { text: "D. 不拆穿，但下次自己买贵重礼物时也会用同样的方式，维持一种“温柔的谎言平衡”。", type: "D" }
      ]
    },
    {
      text: "如果一段感情注定会失败（比如因家庭反对），你还愿意开始吗？",
      options: [
        { text: "A. 愿意，过程比结果重要，体验过就值得。", type: "A" },
        { text: "B. 不愿意，不浪费情绪和精力在没有结果的事情上。", type: "B" },
        { text: "C. 看对方值不值得。如果ta让我感受到了“灵魂共鸣”，即使会痛也愿意开始。", type: "C" },
        { text: "D. 会开始但会刻意保持心理距离，告诉自己“不要陷太深”。", type: "D" }
      ]
    }
  ];
  
  // 🔥 最终人设：网络梗版 + 社会映射 + 专属头像
  const resultTypes = {
    A: {
      name: "【情感KPI负责人】",
      desc: "谈恋爱像在做项目管理，心中有SOP、有OKR、有底线。撒谎=数据造假，冷暴力=沟通低效，分手=项目终止复盘。你不是挑剔，是在执行情感质量监控。",
      social: "社会映射：当代恋爱项目经理，主打一个流程清晰、结果可控。",
      advantage: "极度可靠、有原则、遇事不慌，能给关系稳稳的安全感。",
      shadow: "偶尔太讲规则，显得不够柔软，容易忽略情绪价值。",
      quote: "我不是狠心，我只是在按原则办事。",
      img: "A.png"
    },
    B: {
      name: "【纯爱战神 / 清醒逆行者】",
      desc: "在全员算计、搞钱至上的年代，你依然坚持真心换真心。拒绝虚伪、拒绝妥协、拒绝为了现实委屈灵魂。宁愿独自清醒，也不将就合群。",
      social: "社会映射：感情里的理想主义孤勇者，不随波逐流的真心人。",
      advantage: "爱得深刻、专一、有力量，能给对方独一无二的偏爱与坚定。",
      shadow: "过于理想化，容易受伤，也容易与现实格格不入。",
      quote: "我可以输，但我绝不敷衍自己的心。",
      img: "B.png"
    },
    C: {
      name: "【关系斜杠侠 / 野生路径规划师】",
      desc: "拒绝非黑即白，不信要么忍要么滚。别人在内耗二选一，你已经造出CDEFG。擅长在僵局里破局，在规则里找活路，永远有Plan B。",
      social: "社会映射：感情里的老油条+端水大师，危机中的即兴创作者。",
      advantage: "灵活、通透、不死板，再难的关系都能被你盘活。",
      shadow: "有时让人觉得不够坚定，像在留退路。",
      quote: "别急着下定论，我总能想到别的办法。",
      img: "C.png"
    },
    D: {
      name: "【情感精算师 / 防PUA防火墙】",
      desc: "大脑内置情感账本，付出要对等，爱要有边界。绝不恋爱脑，永远留安全垫。你算的不是利益，是公平、是底线、是不被消耗的自我。",
      social: "社会映射：当代反恋爱脑天花板，自带防渣防火墙。",
      advantage: "极度清醒、边界感强、不内耗、不被拿捏。",
      shadow: "太过理性，容易被误解为冷漠、算计、不够爱。",
      quote: "我不是不爱，我只是不想赔上全部的自己。",
      img: "D.png"
    }
  };
  
  // 全局变量
  let currentQuestion = 0;
  let count = { A: 0, B: 0, C: 0, D: 0 };
  
  // DOM
  const homePage    = document.getElementById("home-page");
  const quizPage    = document.getElementById("quiz-page");
  const resultPage  = document.getElementById("result-page");
  const startBtn    = document.getElementById("start-btn");
  const questionEl  = document.getElementById("question");
  const optionsEl   = document.getElementById("options");
  const progressBar = document.getElementById("bar");
  const resultTitle = document.getElementById("result-title");
  const resultImg   = document.getElementById("result-img");
  const resultDesc  = document.getElementById("result-desc");
  const resultAdv   = document.getElementById("result-advantage");
  const resultSha   = document.getElementById("result-shadow");
  const resultQuo   = document.getElementById("result-quote");
  const restartBtn  = document.getElementById("restart-btn");
  const shareBtn    = document.getElementById("share-btn");
  
  // 切换页面
  function switchPage(from, to) {
    from.classList.remove("active");
    to.classList.add("active");
  }
  
  // 渲染题目
  function renderQuestion() {
    const q = questions[currentQuestion];
    questionEl.innerText = q.text;
    optionsEl.innerHTML = "";
  
    q.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.innerText = opt.text;
      btn.onclick = () => {
        count[opt.type]++;
        currentQuestion++;
        if (currentQuestion < questions.length) {
          renderQuestion();
          progressBar.style.width = ((currentQuestion+1)/questions.length*100)+"%";
        } else {
          showResult();
        }
      };
      optionsEl.appendChild(btn);
    });
    progressBar.style.width = ((currentQuestion+1)/questions.length*100)+"%";
  }
  
  // 显示结果
  function showResult() {
    let maxType = "A";
    if (count.B > count[maxType]) maxType = "B";
    if (count.C > count[maxType]) maxType = "C";
    if (count.D > count[maxType]) maxType = "D";
  
    const res = resultTypes[maxType];
    resultTitle.innerText = res.name;
    resultDesc.innerText  = res.desc;
    resultAdv.innerHTML   = `<p style="color:#999; font-size:14px;">${res.social}</p>
  <h3>🌟 你的优势</h3><p>${res.advantage}</p>`;
    resultSha.innerHTML   = `<h3>🌫 可以更轻松一点</h3><p>${res.shadow}</p>`;
    resultQuo.innerHTML   = `<h3>💬 你的内心独白</h3><p>${res.quote}</p>
  <br>
  <h3>📝 作者想说</h3>
  <p style="color:#666; font-size:14px; line-height:1.8;">
  这个测试是我专门为你们整理的，纯属娱乐，别太当真。<br><br>
  感情这东西，本来就没有标准答案。你做出来的选项，最多只能说明你在某个瞬间、某种情绪下的第一反应，不代表你是谁，更不代表你会怎么爱、被爱、或者应该怎么被爱。<br><br>
  真正的感情，不是十道题能测出来的。它是两个人吵架后谁先递台阶，是生病时谁半夜爬起来倒水，是明明知道对方有一百个缺点但还是觉得“算了，就ta吧”。<br><br>
  所以做完这个测试，笑一笑就好。别用它来判断自己，更别用它来判断你的伴侣。<br><br>
  如果你愿意，可以把链接发给那个你愿意一起做测试的人。不是为了比谁的答案更“对”，而是为了看看——哦，原来你是这么想的，原来我是这么想的。<br><br>
  然后关掉手机，去好好爱具体的人。<br><br>
  —— 你的朋友
  </p>`;
  
    // 每个人设专属头像
    resultImg.src = res.img;
  
    switchPage(quizPage, resultPage);
  }
  
  // 开始
  startBtn.onclick = () => {
    currentQuestion = 0;
    count = { A:0, B:0, C:0, D:0 };
    progressBar.style.width = "10%";
    switchPage(homePage, quizPage);
    renderQuestion();
  };
  
  // 重新测试
  restartBtn.onclick = () => {
    currentQuestion = 0;
    count = { A:0, B:0, C:0, D:0 };
    progressBar.style.width = "0%";
    switchPage(resultPage, homePage);
  };
  
  // 分享
  shareBtn.onclick = () => {
    alert("测试完成！把链接发给那个你想一起测的人吧～");
  };
