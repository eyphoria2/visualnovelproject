var preload = [
  "hills1.jpg", "hills2.jpg",
  "amazed1.png", "amazed2.png",
  "cool1.png", "cool2.png",
  "hand_waving1.png", "hand_waving2.png",
  "laughing1.png", "laughing2.png",
  "loving1.png", "loving2.png",
  "simple1.png", "simple2.png",
  "smiling1.png", "smiling2.png",
  "sad1.png", "sad2.png",
  "silence1.png", "silence2.png",
  "angry1.png"
];

/*
    This section pre-loads your images.
    Don't change it unless you know what you're doing.
*/
var preloadObj = new Array(preload.length);
for (var i = 0; i < preload.length; i++)
{
    preloadObj[i] = new Image();
    preloadObj[i].src = preload[i];
}

/* Declare variables for characters, positions, and text blocks here */
var script; // this variable will hold your script

 /* Characters */
var tyler;
var gavin;

var skeptic;
var optimist;
var dreamer;
var realist;

var n; // short for "narrator"

var photo;
var textBlock;

var leftSide;
var rightSide;
var upperCenter;
var rightTop;

/*
    This function must exist, and must have this name
*/

function prepareNovel()
{
    novel.imagePath = ""; // path to your image directory
    novel.audioPath = ""; // path to your audio directory
    
    // initialize your characters, positions, and text blocks here

	skeptic = new Character("Лу", {color: "#FFD800"});
    optimist = new Character("Ами", {color: "#3988FA"});
	dreamer = new Character("Неос", {color: "#FF354E"});
    realist = new Character("Гелиос", {color: "#31EA6C"});
	
	skeptic2 = new Character("Кто-то", {color: "#FFD800"});
    optimist2 = new Character("Кто-то", {color: "#3988FA"});
	dreamer2 = new Character("Кто-то", {color: "#FF354E"});
    realist2 = new Character("Кто-то", {color: "#31EA6C"});
	
	someone = new Character("Кто-то", {color: "gray"});
	dark = new Character("Тьма", {color: "black"});
	creator = new Character("Создатель", {color: "white"});
	someone2 = new Character("Кто-то", {color: "white"});
	
    n = new Character("");
    
    leftSide = new Position(0.01, .97, 0, 1);
	leftMiddleSide = new Position(0.2, .97, 0, 1);
    rightSide = new Position(0.98, 0.97, 1, 1);
	rightMiddleSide = new Position(0.8, 0.97, 1, 1);
    upperCenter = new Position(0.5, 0.3, 0.5, 0.5);
    rightTop = new Position(1, 0.1, 1, 0);
	Center = new Position(0.55, 0.90, 1, 1);
    
    photo = new Character("");  
    lionText = new TextBlock("myText");
	
    
    // and put your script commands into this array
    script = [
        label, "start",
		
		n, "История начинается прямо здесь, с этой минуты. Приятного прохождения!",
		
		scene, {image: "start.png", position: Center, effect: "fade"},
		n, "Представляют.",
		n, "...",
        scene, "",

		audio, {src: "bensound-memories", format: ["mp3"], action: "play"},
		
		n, "— ...",
		someone, "— В самом начале было <strong>ни-че-го</strong>.",
		someone, "— ...ничего кроме тишины и полной темноты, и ведь казалось бы, ничего не может появится, как и до этого...",
		someone, "— Но рассеял полную темноту светом Создатель... и это было <strong>хорошо</strong>.",
		someone, "— То, что это было хорошо, надо просто принять.",
		someone, "— Свет не имел формы, но постепенно начал принимать очертания.",
		someone, "— Очертания эти изливались в самые своеобразные формы...",
		someone, "— ...пока наконец не приняли форму четырёх существ, которым было подвластно формировать мир вокруг себя.",
		
		audio, {src: "stop", format: ["mp3"], action: "play"},
		
	 
	realist, {image: "realist.png", position: leftMiddleSide},
		realist2, "— ...Так-так.",
		audio, {src: "bensound-sweet", format: ["mp3"], action: "play"},
		realist2, "— Ты вообще тут? может вернемся к нашим баранам?",	
	optimist2, {image: "optimist.png", position: rightMiddleSide},
		optimist2, "— ...Да.",
		optimist2, "— Извини, Гелиос.",
		optimist2, "— Что-то в ностальгию ударилась…",
		n, "*Героиня слегка дёрнула плечами*.",
		optimist2, "— Вспоминала, зачем мы вообще здесь собрались.",
		optimist2, "— А кто такие <i>бараны</i>?",
		n, "*Гелиос отмахивается*",
		realist, "— ...Не суть важно.",
		realist, "— Давайте сосредоточимся.",
	optimist2, {image: "optimist.png", position: rightMiddleSide},
	realist, {image: "empty.png", position: leftSide},
	skeptic2,{image: "skeptic.png", position: rightMiddleSide},
		skeptic2, "— ...",
		skeptic2, "— А где Неос?.",
		skeptic2, "— Разве она не должна быть с нами?",
	realist, {image: "realist2.png", position: leftSide},
	skeptic2,{image: "empty.png", position: leftMiddleSide},
	optimist2, {image: "empty.png", position: leftSide},
		realist, "— Должна. Сейчас.",
	realist, {image: "realist.png", position: leftSide},	
		n, "*Гелиос привычно щёлкает пальцами*.",
	realist, {image: "empty.png", position: leftSide},	
		n, "*Издалека появлятся маленькое светило.*", 
		n, "*Спустя несколько мгновений светило приобретает вполне понятные очертания.*", 
		dreamer2, "— ... ",
	dreamer, {image: "dreamer.png", position: Center},
		dreamer2, "— Я тут.",
		dreamer, "— И мне не нравится, когда меня призывают.",
	dreamer, {image: "dreamer.png", position: rightMiddleSide},	
	optimist2, {image: "optimist.png", position: leftMiddleSide},	
		optimist2, "— Неос... Сам понимаешь. Гулянки потом.",
	dreamer, {image: "empty.png", position: rightSide},	
	skeptic2,{image: "skeptic.png", position: leftMiddleSide},
		skeptic2, "— Решения не ждут.",

	dreamer, {image: "empty.png", position: rightSide},	
	skeptic2,{image: "empty.png", position: rightMiddleSide},
	optimist, {image: "empty.png", position: leftMiddleSide},
	realist, {image: "empty.png", position: leftSide},

		label, "oof",
		
		n, "— ...",
	optimist2, {image: "optimist.png", position: Center},
		optimist2, "— Существам Создателя будет очень сложно в этом пространстве, конечно...",
		optimist2, "— Кто вообще в здравом уме ограничивает квинтэссенцию света всего в 3 измерениях!",
	optimist2, {image: "optimist.png", position: rightSide},	
	dreamer, {image: "dreamer.png", position: Center},	
		dreamer, "— Как там тебя… Ами? это от Amigo?",
	dreamer, {image: "dreamer.png", position: rightMiddleSide},	
		dreamer, "— Я полагаю, всё не просто так.",
	optimist, {image: "empty.png", position: rightMiddleSide},	
		dreamer, "— Зато их индивидуальные ограничения дают им увлекательные сюжеты для жизни.",
		dreamer, "— Только посмотрите, что для них придумал Лу, наш техник вселенной.",
		dreamer, "— Они могут совершать действия только вперёд!",
	dreamer, {image: "dreamer2.png", position: rightMiddleSide},		
		dreamer, "— Да, Лу?",
		n, "— Неос смеётся и дружески толкает плечом Лу.",
		
	
	skeptic,{image: "skeptic.png", position: leftSide},	
		skeptic, "— Человеки позже назовут это ‘хроносом’.",
		skeptic, "— ...а ещё позже ‘временем’.",
	dreamer, {image: "empty.png", position: rightMiddleSide},	

	skeptic,{image: "skeptic.png", position: Center},			
		skeptic, "— Всё дело в направлении света. Для меньших существ Создателя невозможно будет воспринимать такое количество света.",
		skeptic, "— Поэтому для них условия существования более сжаты.",
	dreamer, {image: "empty.png", position: leftMiddleSide},		
	skeptic,{image: "skeptic.png", position: rightMiddleSide},	
	optimist2, {image: "optimist.png", position: leftMiddleSide},
		optimist, "— Но им всё равно нужны дополнительные условия...",
				
	skeptic,{image: "skeptic.png", position: rightSide},	
	realist, {image: "realist.png", position: Center},	
	optimist2, {image: "optimist.png", position: leftSide},
		realist, "— Тогда сейчас. Подождите.  Я давно хотел вам показать...",
	skeptic,{image: "empty.png", position: rightMiddleSide},	
	optimist2,{image: "empty.png", position: rightMiddleSide},
	realist, {image: "realist2.png", position: rightMiddleSide},	
		realist, "— Для начала нам нужна концепция свободного выбора.",
		realist, "— ...с этой концепцией появляется многолинейность в потоке времени для человеков.",
		
	dreamer, {image: "dreamer.png", position: leftMiddleSide},	
		dreamer, "— То есть, развитие временной спирали больше не предопределено?",
	realist, {image: "realist.png", position: rightMiddleSide},		
		realist, "— предопределено, просто к одному и тому же последствию теперь можно прийти разными путями.",
		realist, "— правда, человеки назовут это ‘будущим’ и всё равно будут верить в неопределённость.",	
	dreamer, {image: "empty.png", position: leftMiddleSide},	
	skeptic,{image: "skeptic.png", position: leftMiddleSide},	
	realist, {image: "realist.png", position: rightSide},	
		skeptic, "— Что ещё от них ожидать...",
	skeptic,{image: "skeptic.png", position: Center},	
	realist, {image: "empty.png", position: rightSide},	
		n, "В умных глазах Лу отражается сомнение.", 
		skeptic, "— Концепция работает?",
	
        label, "menu0",
        menu, [
			"Концепция работает?",
			"Да.", [jump, "main0"],
            "Другое да.", [jump, "main0"],
        ],
        
        label, "main0",
        scene, "",
				
	realist, {image: "realist.png", position: leftMiddleSide},		
		realist, "— Как видишь.",
	realist, {image: "realist2.png", position: leftMiddleSide},	
		realist, "— Что насчёт элементов?.",
		
	realist, {image: "realist2.png", position: rightSide},	
	skeptic,{image: "skeptic.png", position: leftMiddleSide},	
		skeptic, "— Вода и огонь, земля и воздух. Кстати, эти элементы между собой неожиданно сгенерировали целую систему механизмов.",
		skeptic, "— Живые существа будут называть это Природой.",
		
	skeptic,{image: "skeptic.png", position: rightMiddleSide},
	dreamer, {image: "dreamer.png", position: leftSide},	
		dreamer, "— Невероятно большая...", 
	dreamer, {image: "empty.png", position: leftMiddleSide},	
	optimist,{image: "optimist.png", position: leftMiddleSide},
		optimist, "— Это не будет опасно?.",
		
	dreamer, {image: "dreamer.png", position: Center},
	optimist,{image: "optimist.png", position: leftSide},
	skeptic,{image: "empty.png", position: rightMiddleSide},
		dreamer, "— Ха, поверь мне, человеки только и будут мечтать о том, чтобы познать эту систему.", 
		n, "Неос вскидывает голову.",
		
	dreamer, {image: "dreamer.png", position: rightMiddleSide},	
		dreamer, "— Природа будет важна для всех живых существ.",
	
	optimist,{image: "optimist.png", position: leftMiddleSide},	
		optimist, "— Но ведь огонь может их ранить!",
		optimist, "— Воздух не пригоден для жизни, вода — вообще яд!",
	dreamer, {image: "empty.png", position: rightMiddleSide},		
	optimist,{image: "optimist.png", position: leftSide},	
	realist, {image: "empty.png", position: rightSide},
		n, "Можно заметить, как Ами нервничает.", 
	
	optimist,{image: "empty.png", position: leftSide},	
	skeptic,{image: "skeptic.png", position: Center},
		skeptic, "— Да, по отдельности эти элементы нестабильны.",
		skeptic, "— Но вместе они создают нечто прекрасное.",
		
	dreamer, {image: "empty.png", position: rightSide},	
	skeptic,{image: "empty.png", position: rightMiddleSide},
	optimist, {image: "empty.png", position: leftMiddleSide},
	realist, {image: "empty.png", position: leftSide},
	
		label, "menu1",
        menu, [
			"Выбор",
			"Оставить жизнь без базовых элементов. ", [jump, "end1"],
            "Природа", [jump, "main1"],
        ],
		
				label, "end1",
				scene, "",
				
		
			skeptic,{image: "skeptic.png", position: rightMiddleSide},
				skeptic, "— Кхм...",
			skeptic,{image: "skeptic.png", position: rightSide},	
			dreamer, {image: "empty.png", position: leftMiddleSide},	
				dreamer, "— Что-то мы запутались.", 
				n, "*Неос хмурит брови*", 
				dreamer, "— Разве мы не должны были создавать условия для жизни?.", 
				dreamer, "— Ами, зачем? Доверься Лу!", 
				
				
			dreamer, {image: "empty.png", position: rightSide},	
			skeptic,{image: "empty.png", position: rightMiddleSide},
			optimist, {image: "empty.png", position: leftMiddleSide},
			realist, {image: "empty.png", position: leftSide},
				
				audio, {src: "bensound-tomorrow", format: ["mp3"], action: "play"},
				n, "— ...",
				n, "Без материального мира вы не смогли существовать.",
				n, "Пожалуйста, следите внимательнее за тем, что происходит в диалоге.",
				n, "Персонажи часто говорят важные детали, помогающие сделать правильный выбор.",
			
				label, "menuend1",
				menu, [
					"Вселенная будет пересоздана. Будьте аккуратны, принимая решения!",
					"Переродиться.", [jump, "menu1"],
				],

		label, "main1",
        scene, "",
		audio, {src: "bensound-sweet", format: ["mp3"], action: "play"},
		
		
	realist, {image: "realist2.png", position: rightMiddleSide},		
		realist, "— Ну что-ж, вот и решили.",
	realist, {image: "realist.png", position: rightMiddleSide},			
		realist, "— Предлагаю заодно поселить их на огромных сферах, бесконечно парящих с определённой скоростью в пространстве.",
	dreamer, {image: "dreamer.png", position: leftSide},	
		dreamer, "— Человеков? Гелиос, зачем?",
	realist, {image: "realist2.png", position: rightMiddleSide},	
		realist, "— Концентрировать их в одном месте удобнее, и давать условия для их существования тоже.",
	dreamer, {image: "empty.png", position: leftSide},	
	skeptic, {image: "skeptic.png", position: leftMiddleSide},	
		skeptic, "— Звучит логично.",
	optimist, {image: "optimist.png", position: rightMiddleSide},	
	realist, {image: "empty.png", position: rightMiddleSide},
		optimist, "— Да, а сверху можно расположить защитный купол от внешних угроз.",
	skeptic, {image: "skeptic.png", position: leftMiddleSide},
		skeptic, "— Кстати, геометрически, это не сферы, а шары.",
	optimist, {image: "optimist.png", position: rightSide},	
		optimist, "— Геометрия?",
		skeptic, "— Да, я добавил, хотя смысла в этом....",
		skeptic, "— Меня будут ненавидеть за это.",
	optimist, {image: "optimist.png", position: rightMiddleSide},	
		n, "Ами пожимает плечами.", 
		optimist, " — Ну, если это зачем-то было нужно.",
		
	dreamer, {image: "empty.png", position: rightSide},	
	skeptic,{image: "empty.png", position: rightMiddleSide},
	optimist, {image: "empty.png", position: leftMiddleSide},
		
		
	realist, {image: "realist.png", position: leftMiddleSide},	
		realist, "— ...",
		realist, "— Ребят, тут вообще есть проблемка...",
	realist, {image: "realist.png", position: rightMiddleSide},	
	dreamer, {image: "dreamer.png", position: leftMiddleSide},	
		dreamer, "— Что случилось??",
	skeptic, {image: "skeptic.png", position: leftSide},	
	dreamer, {image: "empty.png", position: leftMiddleSide},
		skeptic, "*шёпотом* — Как всегда, одни проблемы.",
	skeptic, {image: "empty.png", position: rightMiddleSide},	
	realist, {image: "realist.png", position: leftMiddleSide},	
		realist, "— Помните ту концепцию времени, которую мы добавили?",
		realist, "— ...В общем, из-за неё человеки... как это...",
		realist, "— Их материальные тела рассыпаются, и их свету больше негде находиться.",
	skeptic, {image: "skeptic.png", position: leftSide},	
		skeptic, "*продолжая шёпотом* — Ну я не удивлён, что что-то не работает.",
	skeptic,{image: "empty.png", position: leftSide},	
		realist, "— ...Мы можем что-то придумать?",
		
	optimist, {image: "optimist.png", position: leftMiddleSide},	
	realist, {image: "realist.png", position: rightSide},
		optimist, "— Нам нужен защитный механизм для этого процесса.",
	dreamer, {image: "dreamer.png", position: rightMiddleSide},	
		dreamer, "— Можем создать концепцию перехода их света от предыдущего объекта к новому.",
		dreamer, "— Бесконечное существование!",
	optimist, {image: "optimist.png", position: leftSide},	
	realist, {image: "empty.png", position: rightSide},
		optimist, "— Мне кажется, это не разумно.",
		optimist, "— Человеки сойдут с ума пребывать в разных телах навечно...",
		n, "Ами хватается за голову.", 
		optimist, "— Пусть лучше их опыт обнуляется.",
	dreamer, {image: "empty.png", position: rightMiddleSide},	
	realist, {image: "realist.png", position: leftMiddleSide},	
		realist, "— Да, мы не можем дать им существовать вечно.",
		
		optimist, "— Пусть свет стремится из тела человека в новое тело, а цикл между телами будет называться жизнью.",
	optimist, {image: "empty.png", position: leftSide},	
	realist, {image: "empty.png", position: leftMiddleSide},	
	dreamer, {image: "dreamer.png", position: Center},		
		dreamer, "— Так...",

		label, "menu2",
		dreamer, {image: "dreamer.png", position: Center},
        menu, [
			"Неос выбирает",
			"Оставить переход между объектами.", [jump, "end2"],
            "Послушать Ами и Гелиоса", [jump, "main2"],
        ],
		
				label, "end2",
				scene, "",
				audio, {src: "bensound-tomorrow", format: ["mp3"], action: "play"},

			dreamer, {image: "dreamer.png", position: leftMiddleSide},		
				dreamer, "— Это не зачем.", 
				dreamer, "— Сможем придумать сверх этого другой механизм.", 
			skeptic, {image: "skeptic.png", position: rightMiddleSide},	
				skeptic, "— Конечно, это то, что нам стоит делать — нагромождать механизмы один на другой!",
			skeptic, {image: "empty.png", position: rightMiddleSide},
			optimist, {image: "optimist.png", position: rightMiddleSide},
				optimist, "— ...Они же сойдут с ума...",
			realist, {image: "realist.png", position: leftMiddleSide},		
			dreamer, {image: "empty.png", position: leftMiddleSide},
			optimist, {image: "empty.png", position: leftMiddleSide},
				realist, "*смотрит в будущее* — Хватит. Сейчас мы увидим, что там происходит.",
				dreamer, "— Оу. ",
				optimist, "— ...оуу.",
				skeptic, "— А я говорил...",
			realist, {image: "realist2.png", position: leftMiddleSide},	
				realist, "— Они решили прекратить существовать...",
				
			dreamer, {image: "empty.png", position: rightSide},	
			skeptic,{image: "empty.png", position: rightMiddleSide},
			realist, {image: "empty.png", position: leftSide},	

				n, "— ...",
				n, "Человечество не смогло найти реализации себя через бессмертие сознания.",
				n, "Пожалуйста, следите внимательнее за тем, что происходит в диалоге.",
				n, "Персонажи часто говорят важные детали, помогающие сделать правильный выбор.",
			
				label, "menuend2", 	
				menu, [
					"Вселенная будет пересоздана. Будьте аккуратны, принимая решения!",
					"Переродиться.", [jump, "menu2"],
				],
			
		label, "main2",
		scene, "",
		audio, {src: "bensound-sweet", format: ["mp3"], action: "play"},
		
	dreamer, {image: "dreamer.png", position: leftMiddleSide},	
		dreamer, "— Ну хорошо... ",
		dreamer, "— Не то, чтобы мне это нравится, но, кажется, так действительно лучше.",
	dreamer, {image: "empty.png", position: leftMiddleSide},	
	skeptic,{image: "skeptic.png", position: leftMiddleSide},
		skeptic, "— ...ого, мы договорились без всяких ссор.",
	realist, {image: "realist.png", position: rightSide},	
		n, "*Гелиос ставит руки в бока, но по нему видно, что он улыбается*",
	realist, {image: "realist2.png", position: rightMiddleSide},	
		realist, "— Ты такой скептик!",
		realist, "— ...А ссоры? Что это?",
		
		skeptic, "— Так человеки будут называть неспособность услышать друг друга в определённый момент.",
		skeptic, "— А ещё я очень устал, мы немного отклоняемся от поставленных задач.",
	realist, {image: "empty.png", position: rightMiddleSide},	
	skeptic,{image: "skeptic.png", position: rightMiddleSide},
	dreamer, {image: "dreamer.png", position: leftMiddleSide},		
		dreamer, "— Ну хватит уже бурчать.",
		skeptic, "— Я не бурчу!.",
	dreamer, {image: "empty.png", position: leftMiddleSide},		
		skeptic, "— ...",
		skeptic, "— Ну и ладно. Я в любом случае собирался поработать над некоторыми деталями отдельно.",
		skeptic, "— Всё-таки природа очень комплексная по своей системе.",
		skeptic, "— Позовите, если буду нужен.",
	skeptic,{image: "empty.png", position: rightMiddleSide},	
		n, "*Лу удаляется в неопределённом напрапвлении*",
	
	dreamer, {image: "dreamer.png", position: leftMiddleSide},	
		dreamer, "— ...как там человеки говорят… 'ну и лол!'.",
	dreamer, {image: "empty.png", position: rightSide},
	optimist, {image: "optimist.png", position: leftMiddleSide},	
		optimist, "*про себя* — надеюсь он там ничего не сломает своими проработками...",
	optimist, {image: "empty.png", position: leftMiddleSide},	
	realist, {image: "realist.png", position: leftMiddleSide},
		realist, "— Но в чём-то он может и прав. Возможно, нам нужно немного подумать в одиночестве.",
	dreamer, {image: "dreamer.png", position: rightMiddleSide},	
		dreamer, "— Тогда давайте разойдемся. Мне нужно отдохнуть от всего этого.",
	dreamer, {image: "empty.png", position: rightSide},		
	realist, {image: "realist2.png", position: leftMiddleSide},	
		n, "Гелиос кривит губы в саркатисческой улыбке, показывая иронию.",
		realist, "— В таком случае, выбора здесь нет.",
		
		label, "menu3",
        menu, [
			"Выбор без выбора",
			"Разойтись ненадолго.", [jump, "main3"],
        ],










		label, "main3",
		scene, "",
		audio, {src: "bensound-memories", format: ["mp3"], action: "play"},
		
		n, "— ...",
		n, "— Свет всё преломлялся и изменялся, порождая жизнь на своём пути.",
		n, "— Механизмы и структуры, разработанные 4 богами, функционировали и помогали жизни адаптироваться.",
		n, "— ...но настал момент, когда им снова пришлось собраться.",
		n, "— Что-то неладное происходило в мире.",

		audio, {src: "bensound-sweet", format: ["mp3"], action: "play"},
	realist, {image: "realist.png", position: leftMiddleSide},	
		n, "Гелиос машет рукой издалека.", 
		realist, " — Ну здравствуй.",
		realist, " — Ты тут одна?",
	optimist, {image: "optimist.png", position: rightMiddleSide},	
		optimist, "— ...А мы тут только вдвоём? Где остальные?",
		n, "Ами хмурится.",
		optimist, "— Особенно Лу меня волнует, негодяй...",
	realist, {image: "realist2.png", position: leftMiddleSide},	
	optimist, {image: "empty.png", position: rightMiddleSide},	
		realist, "— Ну сейчас.",
		n, "*Гелиос привычно щёлкает пальцами*", 
		audio, {src: "bensound-sweet", format: ["mp3"], action: "stop"},
	realist, {image: "realist.png", position: leftSide},	
		realist, "— ...",
		realist, "— ......",
	optimist, {image: "optimist.png", position: rightSide},		
		optimist, "— .......",
		realist, "— ................",
		realist, "— В смысле????.",
		optimist, "— Они... не могут прийти?!",
		n, "Гелиос и Ами ошеломлённо смотрят друг на друга.", 
	realist, {image: "realist2.png", position: leftMiddleSide},	
	optimist, {image: "optimist.png", position: rightMiddleSide},		
		realist, "— Что вообще могло случиться...",
		realist, "— Нужно найти их, пока не случилось что-то действительно ужасное..",
		optimist, "— Надеюсь, они наткнулись хотя бы друг на друга... ",
		realist, "— Вперёд!",


		label, "menu4",
		menu, [
			"— Ради всех остальных.",
			"Отправиться на поиски.", [jump, "main4"],
        ],

		label, "main4",
		scene, "",
		audio, {src: "bensound-scifi", format: ["mp3"], action: "play"},
		
	optimist, {image: "optimist.png", position: leftMiddleSide},	
		optimist, "— ...",
		optimist, "— Что делаем?",
	realist, {image: "realist.png", position: rightMiddleSide},	
		realist, "— Так-с.",
		realist, "— Из-за того, что скорость света ограничена, у нас получаются отдельные участки космоса, в которые мы не можем попасть сразу.",
		realist, "— И это значит, что нам надо искать где-то там.",
	realist, {image: "realist2.png", position: rightMiddleSide},	
		n, "Гелиос берёт Ами за руку и закрывает глаза.",
		realist, "— Говори, куда отправимся.",

		label, "menu5",
		menu, [
			"Выбрать за Ами, куда отправиться.",
			"1. Большая Медведица I (UMa I dSph).", [jump, "end3"],
			"2. Segue 2 — карликовая сфероидальная галактика.", [jump, "end3"],
			"3. Галактика в Драконе (Draco dSph).", [jump, "end3"],
			"4. Волосы Вероники (Com) — карликовая сфероидальная галактика.", [jump, "end3"],
			"5. Гончие Псы II (CVn II).", [jump, "end3"],
			"6. Большой Пёс (лат. Canis Major) — Искать около Сириуса.", [jump, "main5"],
			"7. Большое Магелланово Облако (Large Magellanic Cloud, LMC).", [jump, "end3"],
			"8. Ма́лое Магелла́ново О́блако (SMC, NGC 292).", [jump, "end3"],
        ],
		
		label, "end3",
		scene, "",
		
		n, "Здесь никого нет.",
		
		label, "menuend3",
		menu, [
			"— Нужно пойти назад.",
			"— Вернуться.", [jump, "menu5"],
        ],
		
		label, "main5",
		scene, "",
			
		dreamer, "— ...",
		
		realist, "— ох...",
	optimist, {image: "optimist.png", position: leftMiddleSide},
	realist, {image: "realist.png", position: rightMiddleSide},	
	
		n, "Гелиос и Ами находят Неос.", 
		n, "Её свёт был тусклый, а она сама еле живая.", 
		optimist, "— Ч-что произошло?",
		realist, "— Мда, тут бы никто не смог прийти на встречу...",
	
	optimist, {image: "empty.png", position: leftMiddleSide},
	realist, {image: "empty.png", position: leftSide},
		
		n, "*Гелиос и Ами помогают Неос прийти в себя*",
	
	dreamer, {image: "dreamer.png", position: rightSide},	
		dreamer, "— угхх...",
		dreamer, "— ...вот это жесть, конечно...",
	optimist, {image: "optimist.png", position: leftMiddleSide},
	realist, {image: "realist.png", position: leftSide},		
		realist, "— Что случилось?",
		optimist, "— Ты в порядке?",
		
	dreamer, {image: "dreamer.png", position: rightMiddleSide},		
	optimist, {image: "empty.png", position: leftMiddleSide},
	realist, {image: "empty.png", position: leftSide},
	
		dreamer, "— Теперь вроде бы да.",
	
	dreamer, {image: "empty.png", position: rightSide},	
	optimist, {image: "optimist.png", position: leftMiddleSide},
	realist, {image: "realist.png", position: leftSide},	
		
		
		optimist, "— Кто сделал это с тобой?",
	dreamer, {image: "dreamer.png", position: rightMiddleSide},			
		dreamer, "— кхх… скорее что, а не кто. Это очень странно, но... ",
		dreamer, "— Это было что-то невероятно ужасное и неприятное",
		dreamer, "— Как будто оно поглощает свет",
		
	realist, {image: "empty.png", position: leftSide},	
	optimist, {image: "optimist.png", position: leftSide},	
		optimist, "*боязливо*— Ч-что... Что оно хотело?",
	dreamer, {image: "dreamer.png", position: leftMiddleSide},		
		dreamer, "— Кушать оно хотело!",
		n, "*Неос немного пугает Ами*",
		n, "*Ами визжит*",
	
	dreamer, {image: "empty.png", position: rightSide},
	optimist, {image: "empty.png", position: leftMiddleSide},
	
	realist, {image: "realist.png", position: rightMiddleSide},	
		n, "*Гелиос улыбается*",
		realist, " — Спокойнее. Ты снова светишь, и это главное.",
	dreamer, {image: "dreamer.png", position: rightSide},		
		dreamer, "— Да нужно найти это нечто и разобраться!",
	optimist, {image: "optimist.png", position: leftSide},	
		optimist, "— Ааа...! Я не хочу… я...",
	
	dreamer, {image: "empty.png", position: rightSide},	
	skeptic,{image: "empty.png", position: rightMiddleSide},
	optimist, {image: "empty.png", position: leftMiddleSide},
	realist, {image: "empty.png", position: leftSide},

		label, "menu6",
		audio, {src: "bensound-scifi", format: ["mp3"], action: "play"},
		skeptic,{image: "skeptic.png", position: Center},
		skeptic, "— ...",
		menu, [
			"Сказать фразу за Лу:",
			"<strong>Дослушать |</strong> Не хотелось бы вас перебивать, но...", [jump, "main6"],
			"<strong>Перебить |</strong> Короче,смотрите...", [jump, "end4"],
        ],

				label, "end4",
				scene, "",
		
			skeptic,{image: "skeptic.png", position: leftMiddleSide},
				skeptic, "— Короче, смотрите...",
			skeptic,{image: "empty.png", position: rightMiddleSide},	
			realist, {image: "realist.png", position: rightMiddleSide},
				realist, "— Ты где вообще был? Почему не отзывался?",
			optimist, {image: "optimist.png", position: leftMiddleSide},	
				optimist, "— Совсем уже...",
			dreamer, {image: "dreamer.png", position: rightSide},	
				dreamer, "— Лу тоже пропадал? Пока меня пытались съесть заживо?",
					
			dreamer, {image: "empty.png", position: rightSide},	
			optimist, {image: "empty.png", position: leftMiddleSide},
			realist, {image: "empty.png", position: leftSide},	
	
			skeptic,{image: "skeptic.png", position: leftMiddleSide},
				skeptic, "— Ребят, у меня....",
			skeptic,{image: "empty.png", position: rightMiddleSide},
			
			dreamer, {image: "dreamer.png", position: rightSide},	
				dreamer, "*перебивает* — Лу, меня тут чуть не стало, а ты ходишь непонятно где.",
				dreamer, "— Просто невыносимо!",
			optimist, {image: "optimist.png", position: leftMiddleSide},	
				optimist, "— Тебе всё равно на нас, да?",
			realist, {image: "realist.png", position: rightMiddleSide},	
				realist, "— Лу, это всё нехорошо, ты же понимаешь..",
				
			dreamer, {image: "empty.png", position: rightSide},	
			optimist, {image: "empty.png", position: leftMiddleSide},
			realist, {image: "empty.png", position: leftSide},		
			
			skeptic,{image: "skeptic.png", position: leftMiddleSide},
				skeptic, "— Да что-ж вы... я... кхгшш… хфф...",
			skeptic,{image: "empty.png", position: rightMiddleSide},	
				audio, {src: "bensound-tomorrow", format: ["mp3"], action: "play"},
				dark, "*приглушённо* — шшшш....",
				dark, "*приглушённо* — ......",
		
				n, "— ...",
				n, "— Пока вы не могли услышать друг друга, к вам незаметно подкралась Тьма и поглотила вас.",
		
				label, "menuend4",
				menu, [
					"— Вселенная будет пересоздана. Будьте аккуратны, принимая решения!",
					"Переродиться.", [jump, "menu6"],
				],

		label, "main6",
		scene, "",
		
	skeptic,{image: "skeptic.png", position: leftSide},	
		skeptic, "— Не хотелось бы вас перебивать, но….",
	realist, {image: "realist.png", position: rightMiddleSide},	
		realist, "— Лу? Где ты был?",
	skeptic,{image: "skeptic.png", position: leftMiddleSide},		
		skeptic, "— Я был около Магелланового скопления. Послушайте!",
		skeptic, "— Я встретил там существ, которых ранее не видел никогда.",
		skeptic, "— В них просто нет никакого света!",
	skeptic,{image: "empty.png", position: rightMiddleSide},	
	realist, {image: "empty.png", position: leftSide},	
	dreamer, {image: "dreamer.png", position: rightMiddleSide},	
		dreamer, "— Ага… Вот что <em>пыталось меня сожрать</em>.",
	realist, {image: "realist.png", position: rightSide},
		realist, "— Мы как раз наткнулись на такое, буквально только что!",
	
	skeptic,{image: "empty.png", position: leftMiddleSide},	
		skeptic, "— Невообразимо просто, как такое вообще может быть...",
	dreamer, {image: "empty.png", position: rightSide},	
	realist, {image: "empty.png", position: leftSide},
	optimist, {image: "optimist.png", position: leftMiddleSide},
		optimist, "— А главное, что нам делать?",
	optimist, {image: "empty.png", position: leftMiddleSide},	
	dreamer, {image: "dreamer.png", position: rightMiddleSide},	
		n, "*Неос сжимает кулаки*.", 
		dreamer, "Мы должны противостоять.",
	optimist, {image: "optimist.png", position: leftMiddleSide},
		optimist, "— ...Но как?",
	dreamer, {image: "empty.png", position: rightSide},	
	skeptic,{image: "empty.png", position: rightMiddleSide},
	optimist, {image: "empty.png", position: leftMiddleSide},
	realist, {image: "empty.png", position: leftSide},

		
	realist, {image: "realist.png", position: leftMiddleSide},
		realist, "— Тьма — это отсутствие Света. Мы должны рассеять её.",
	skeptic,{image: "skeptic.png", position: rightMiddleSide},	
		skeptic, "— Это какая-то странная игра Создателя, внутри которой мы оказались.",
		skeptic, "— Нам теперь ничего не остается.",
	skeptic,{image: "empty.png", position: rightMiddleSide},	

		realist, "— Готовимся к битве...",

		

		label, "menu7",
		menu, [
			"— ",
			"Подготовиться к битве.", [jump, "main7"],
		],

		label, "main7",
		audio, {src: "bensound-epicbattle", format: ["mp3"], action: "play"},
		scene, "",
		
		n, "Наши герои собрались вместе, собирая свои силы.", 
		n, "Подготовка шла полным ходом.", 
		n, "Всё, что нужно сделать — это принять правильную последовательность шагов против действий врага.", 
		n, "И только умея слушать других, умея вести диалог, можно противостоять Вселенской Тьме.",
		
	realist, {image: "realist.png", position: leftMiddleSide},
		realist, "— ...Все помнят план?",
		realist, "— Я ставлю щит под атаку Тьмы, Неос меня поддерживает, Лу атакует Светом вместе с Ами.",
	skeptic,{image: "skeptic.png", position: rightMiddleSide},	
		skeptic, "— Да.. да, мы помним.",
	dreamer, {image: "empty.png", position: rightSide},	
	skeptic,{image: "empty.png", position: rightMiddleSide},
	optimist, {image: "empty.png", position: leftMiddleSide},
	realist, {image: "empty.png", position: leftSide},	
		
	dreamer, {image: "dreamer.png", position: leftMiddleSide},	
		dreamer, "— Чшш...",
	skeptic,{image: "skeptic.png", position: rightMiddleSide},	
		skeptic, "— М?",
		dreamer, "— <i>Оно</i> приближается...",
	dreamer, {image: "empty.png", position: rightSide},	
	skeptic,{image: "empty.png", position: rightMiddleSide},
	optimist, {image: "empty.png", position: leftMiddleSide},
	realist, {image: "empty.png", position: leftSide},	
		
		someone, " — ...",
		dark, " — шшшшфффф......",
		
	realist, {image: "realist.png", position: leftMiddleSide},	
		n, "*Гелиос глубоко вдыхает и выдыхает*",
		n, "*...затем резко щёлкает пальцами*",
	realist, {image: "empty.png", position: leftSide},
	skeptic,{image: "skeptic.png", position: leftMiddleSide},	
		realist, "— Создаю концепцию защиты!",
		n, "*Лу вскидывает руки*",
		skeptic, "— Беру на себя оптику преломлений.",
	skeptic,{image: "empty.png", position: leftMiddleSide},	
		
	realist, {image: "realist.png", position: leftMiddleSide},	
		realist, "— Начинаем!",	

	realist, {image: "empty.png", position: leftMiddleSide},



		
		label, "mainBattleStart",
		
			menu, [
				"Световой щит Гелиоса",
				"Поставить световой щит справа", [jump, "mainBattleRight"],
				"Поставить световой щит слева", [jump, "mainBattleLeft"],
			],

		label, "mainBattleRight",
		
			dreamer, {image: "empty.png", position: rightSide},	
			skeptic,{image: "empty.png", position: rightMiddleSide},
			optimist, {image: "empty.png", position: leftMiddleSide},
			realist, {image: "empty.png", position: leftSide},
			
			realist, "— Атакуем слева.",
			skeptic, "— Направляю луч света!",
		
			menu, [
				"Оптика световых лучей",
				"Направить налево", [jump, "mainBattleRight2"],
				"Направить направо", [jump, "mainBattleLeft2"],
			],
		
		label, "mainBattleLeft",
			
			dreamer, {image: "empty.png", position: rightSide},	
			skeptic,{image: "empty.png", position: rightMiddleSide},
			optimist, {image: "empty.png", position: leftMiddleSide},
			realist, {image: "empty.png", position: leftSide},

			
			realist, "— Атакуем справа.",
			skeptic, "— Направляю этот сверх-тяжелый луч света...",
		
			menu, [
				"Оптика световых лучей",
				"Направить налево", [jump, "mainBattleLeft2"],
				"Направить направо", [jump, "mainBattleRight2"],
			],
		
		label, "mainBattleLeft2",
		
			dreamer, {image: "empty.png", position: rightSide},	
			skeptic,{image: "empty.png", position: rightMiddleSide},
			optimist, {image: "empty.png", position: leftMiddleSide},
			realist, {image: "empty.png", position: leftSide},

		
			optimist, "— Ты целишься не туда!",
			skeptic, "— Ты не видишь, я пытаюсь!",
			dreamer, "— Ну же, давай...", 
			realist, "— Приготовьтесь, теперь будет сложно!",
		
			menu, [
				"Выставить новую защиту",
				"Поставить световой щит справа", [jump, "mainBattleLeft3"],
				"Поставить световой щит слева", [jump, "mainBattleLeftLeft3"],
			],
		
		
		label, "mainBattleRight2",
		
			dreamer, {image: "empty.png", position: rightSide},	
			skeptic,{image: "empty.png", position: rightMiddleSide},
			optimist, {image: "empty.png", position: leftMiddleSide},
			realist, {image: "empty.png", position: leftSide},


			realist, "— Приготовьтесь, теперь будет сложно!",
			skeptic, "— Ами, атакуй сверху!",
		
			menu, [
				"— Ами, давай!",
				"Атаковать сверху", [jump, "mainBattleSkip"],
			],

		
		label, "mainBattleSkip",
		
			dreamer, {image: "empty.png", position: rightSide},	
			skeptic,{image: "empty.png", position: rightMiddleSide},
			optimist, {image: "empty.png", position: leftMiddleSide},
			realist, {image: "empty.png", position: leftSide},

			realist, {image: "realist.png", position: leftMiddleSide},
			realist, "— Аккуратнее!",
			skeptic,{image: "skeptic.png", position: rightMiddleSide},	
			skeptic, "— Сам аккуратнее!",
			skeptic, "— Давай выбирай, что делать дальше!",
			
		
			menu, [
				"Сделать выбор за Гелиоса:",
				"Новая атака", [jump, "mainBattleRight3"],
				"Укрепить позиции", [jump, "mainBattleRight4"],
			],
		
		label, "mainBattleLeft3", 
		
			dreamer, {image: "empty.png", position: rightSide},	
			skeptic,{image: "empty.png", position: rightMiddleSide},
			optimist, {image: "empty.png", position: leftMiddleSide},
			realist, {image: "empty.png", position: leftSide},

			realist, "— Атакуй снова, теперь с нужной стороны!",
			
			menu, [
				"Оптика световых лучей — вторая попытка",
				"Направить налево", [jump, "mainBattleRight3"],
				"Направить направо", [jump, "mainBattleLeft4"],
			],

		label, "mainBattleLeftLeft3",
		
			dreamer, {image: "empty.png", position: rightSide},	
			skeptic,{image: "empty.png", position: rightMiddleSide},
			optimist, {image: "empty.png", position: leftMiddleSide},
			realist, {image: "empty.png", position: leftSide},

			realist, {image: "realist.png", position: leftMiddleSide},
			realist, "— Атакуй снова, теперь с нужной стороны!",
			
			menu, [
				"Оптика световых лучей — вторая попытка",
				"Направить налево", [jump, "mainBattleLeft4"],
				"Направить направо", [jump, "mainBattleRight3"],
			],
			
		
		label, "mainBattleRight3",
		
			dreamer, {image: "empty.png", position: rightSide},	
			skeptic,{image: "empty.png", position: rightMiddleSide},
			optimist, {image: "empty.png", position: leftMiddleSide},
			realist, {image: "empty.png", position: leftSide},
			dreamer, {image: "dreamer.png", position: leftMiddleSide},
			dreamer, "— Так, что теперь?", 
			skeptic,{image: "skeptic.png", position: rightMiddleSide},
			skeptic, "— Новая атака, нужно только выбрать <i>правильное</i> направление..",
			
			skeptic, {image: "skeptic.png", position: rightMiddleSide},
			skeptic, "— А вот теперь будет по-настоящему сложно...",
			
			menu, [
				"— Скорее решай!",
				"Атака сверху", [jump, "mainBattleLeftLeft4"],
				"Атака снизу", [jump, "mainBattleLeftLeft4"],
				"Атака слева", [jump, "mainBattleLeftLeft4"],
				"Атака справа", [jump, "mainBattleRight4"],
			],
		
		label, "mainBattleRight4",
		
			dreamer, {image: "empty.png", position: rightSide},	
			skeptic,{image: "empty.png", position: rightMiddleSide},
			optimist, {image: "empty.png", position: leftMiddleSide},
			realist, {image: "empty.png", position: leftSide},
		
			dreamer, {image: "dreamer.png", position: leftMiddleSide},
			dreamer, "— Осталось немного.", 
			dreamer, "— Дайте мне атаковать!", 
			optimist, {image: "optimist.png", position: rightMiddleSide},
			optimist, "— Неос, нет, ты нужна мне здесь!",
			optimist, "— Лучше дайте мне поставить щит!",
		
			menu, [
				"Командная работа — ключ к победе.",
				"Перестроить всех стратегически по кругу ", [jump, "mainBattleRight5"],
				"Выпустить Неос вперёд", [jump, "mainBattleLeft5"],
				"Перестроить Ами в авангард", [jump, "mainBattleLeftLeft4"],
			],
		
		label, "mainBattleRight5",
		
			dreamer, {image: "empty.png", position: rightSide},	
			skeptic,{image: "empty.png", position: rightMiddleSide},
			optimist, {image: "empty.png", position: leftMiddleSide},
			realist, {image: "empty.png", position: leftSide},
		
			realist, {image: "realist2.png", position: Center},
		
			menu, [
				"Решение на миллион.",
				"<strong>Непредсказуемая атака |</strong> Серия резких ударов светом", [jump, "mainBattleLeft7"],
				"<strong>Совместная атака |</strong> Концентрация света на Тьме", [jump, "mainBattleRight6"],
				"<strong>Защита |</strong> Укрепить позиции против Тьмы", [jump, "mainBattleLeft5"],
			],
		
		
		
		label, "mainBattleLeftLeft4",
			
			dreamer, {image: "empty.png", position: rightSide},	
			skeptic,{image: "empty.png", position: rightMiddleSide},
			optimist, {image: "empty.png", position: leftMiddleSide},
			realist, {image: "empty.png", position: leftSide},
			
			
			realist, {image: "realist.png", position: leftMiddleSide},
			realist, "— Нет, мы не угадали. Тьма парировала нашим действиям.",
			realist, "— ...",
			realist, "— Всё очень плохо...",
			optimist, {image: "optimist.png", position: rightMiddleSide},
			optimist, "— Теперь что?",
			skeptic,{image: "skeptic.png", position: leftSide},
			skeptic, " — Теперь погибель наша, вот что...",
			
			skeptic,{image: "empty.png", position: rightMiddleSide},
			optimist, {image: "empty.png", position: leftMiddleSide},
			realist, {image: "empty.png", position: leftSide},
			
			dreamer, {image: "dreamer.png", position: rightSide},
			dreamer, "— Эта битва ещё не проиграна, соберитесь!", 
		
			menu, [
				"Быстрое решение",
				"<strong>Исправить ошибку |</strong> Переместиться назад во времени", [jump, "mainBattleLeft6"],
				"<strong>Убежать |</strong> Переместиться на пару парсек от места битвы", [jump, "mainBattleLeft6"],
				"<strong>Командное действие |</strong> Выстроить щиты и подготовиться к атаке", [jump, "mainBattleLeft5"],
			],
		
		label, "mainBattleLeft4",
		
			dreamer, {image: "empty.png", position: rightSide},	
			skeptic,{image: "empty.png", position: rightMiddleSide},
			optimist, {image: "empty.png", position: leftMiddleSide},
			realist, {image: "empty.png", position: leftSide},
			
			realist, {image: "realist.png", position: leftMiddleSide},
			realist, "— Да как же так... Мы не можем защищаться и атаковать с одной и той же стороны!",
			realist, "— Перед атакой всегда должна быть защита.",
			
			optimist, {image: "optimist.png", position: rightMiddleSide},
			optimist, "— Блин...",
			optimist, "— Какая там обстановка?",
			realist, "— ...",
			realist, "— Всё очень плохо...",
			optimist, "— Теперь что?",
			skeptic,{image: "skeptic.png", position: leftSide},
			skeptic, " — Теперь погибель наша, вот что...",
			
			skeptic,{image: "empty.png", position: rightMiddleSide},
			optimist, {image: "empty.png", position: leftMiddleSide},
			realist, {image: "empty.png", position: leftSide},
			
			dreamer, {image: "empty.png", position: rightSide},
			dreamer, "— Эта битва ещё не проиграна, соберитесь!", 
		
		
			menu, [
				"Быстрое решение",
				"<strong>Исправить ошибку |</strong> Переместиться назад во времени", [jump, "mainBattleLeft6"],
				"<strong>Убежать |</strong> Переместиться на пару парсек от места битвы", [jump, "mainBattleLeft6"],
				"<strong>Командное действие |</strong> Выстроить щиты и подготовиться к атаке", [jump, "mainBattleLeft5"],
			],
			
		
		label, "mainBattleLeft5",
		
			dreamer, {image: "empty.png", position: rightSide},	
			skeptic,{image: "empty.png", position: rightMiddleSide},
			optimist, {image: "empty.png", position: leftMiddleSide},
			realist, {image: "empty.png", position: leftSide},
			
			optimist, {image: "optimist.png", position: leftMiddleSide},
			optimist, "— Кажется, получается!",
			optimist, "— Нужно перегруппироваться и атаковать снова!",
			dreamer, {image: "dreamer.png", position: rightMiddleSide},
			dreamer, "— Вперёд!", 
			
			menu, [
				"Последний шанс",
				"<strong>Командная Атака|</strong> 4 мощные атаки каждого героя", [jump, "mainBattleRightRight4"],
				"<strong>Индивидуальная атака|</strong> 4 разных приёма героев для победы", [jump, "mainBattleLeft7"],	
				"<strong>Атака + Защита|</strong> Ами и Гелиос ставят щиты, Неос и Лу атакуют", [jump, "mainBattleWellEnd"],			
			],
			
		label, "mainBattleRightRight4", 

			dreamer, {image: "empty.png", position: rightSide},	
			skeptic,{image: "empty.png", position: rightMiddleSide},
			optimist, {image: "empty.png", position: leftMiddleSide},
			realist, {image: "empty.png", position: leftSide},

			menu, [
				"Нет поражения хуже.",
				"<strong>Индивидуальная защита|</strong> Световые щиты для каждого героя", [jump, "mainBattleLeft7"],
				"<strong>Командная защита|</strong> Командный световой щит", [jump, "mainBattleWellEnd"],
			],

		
		label, "mainBattleLeft6",
		
			dreamer, {image: "empty.png", position: rightSide},	
			skeptic,{image: "empty.png", position: rightMiddleSide},
			optimist, {image: "empty.png", position: leftMiddleSide},
			realist, {image: "empty.png", position: leftSide},

				scene, "",
				
			skeptic,{image: "skeptic.png", position: leftMiddleSide},
				skeptic, "— ",
				audio, {src: "bensound-tomorrow", format: ["mp3"], action: "play"},
				dark, "*приглушённо* — шшшш....",
				dark, " ......",
			dreamer, {image: "empty.png", position: rightSide},	
			skeptic,{image: "empty.png", position: rightMiddleSide},
			optimist, {image: "empty.png", position: leftMiddleSide},
			realist, {image: "empty.png", position: leftSide},
		
		
				n, "— ...",
				n, "— Как известно, убегать от проблем никогда не было хорошим решением..",
				n, "— Вам пришел конец.",
				n, "— Вы прошли игру на 1/3 звёзд.",
				
				menu, [
					"Better Luck Next Time.",
					"Перейти в конец.", [jump, "lastlabel"],
				],
		
		label, "mainBattleLeft7",
		
				dreamer, {image: "empty.png", position: rightSide},	
				skeptic,{image: "empty.png", position: rightMiddleSide},
				optimist, {image: "empty.png", position: leftMiddleSide},
				realist, {image: "empty.png", position: leftSide},

				scene, "",
				audio, {src: "bensound-tomorrow", format: ["mp3"], action: "play"},
				
				n, "— ...",
				n, "— Недоговорившись о своих действиях, каждый сделал какое-то действие, которое помешало другому. ",
				n, "— Замешкавшись, вы потеряли контроль над светом, и Тьма этим воспользовалась.",
			
				n, "— Вам пришел конец.",
				n, "— Вы прошли игру на 1/3 звёзд.",
		
				menu, [
					"Ну может в следующий раз.",
					"Перейти в конец.", [jump, "lastlabel"],
				],
		
		
		
		
		
		
		
		
		
		
		label, "mainBattleWellEnd",
		
			dreamer, {image: "empty.png", position: rightSide},	
			skeptic,{image: "empty.png", position: rightMiddleSide},
			optimist, {image: "empty.png", position: leftMiddleSide},
			realist, {image: "empty.png", position: leftSide},
		
			audio, {src: "piano", format: ["mp3"], action: "play"},
			
			n, "...", 
		dreamer, {image: "dreamer.png", position: leftMiddleSide},	
			dreamer, "— ...Оно отступает.",
		optimist, {image: "optimist.png", position: leftSide},	
			optimist, "— ...кажется, да!",
		skeptic,{image: "skeptic.png", position: rightMiddleSide},
		dreamer, {image: "empty.png", position: rightSide},
			skeptic, "— Существовать в одном мире с этой тварью стало как-то мрачновато.",
			skeptic, "— Откуда оно вообщё взялось, и зачем?",
		optimist, {image: "optimist.png", position: leftMiddleSide},	
			optimist, "— Вот бы мы могли призвать Создателя и понять, зачем...",
			
		dreamer, {image: "empty.png", position: rightSide},	
		skeptic,{image: "empty.png", position: rightMiddleSide},
		optimist, {image: "empty.png", position: leftMiddleSide},
			
		realist, {image: "realist.png", position: leftMiddleSide},	
			realist, "— Предлагаю узнать прямо сейчас.",
			n, "Гелиос складывает руки в молитвенной позе.",
			n, "Яркий свет отражался сквозь его полу-закрытые глаза.",
			n, "Гелиос засиял.",
			
		label, "wellEndingX",
		
			menu, [
				"Призвать Создателя.",
				"Прочитать молитву.", [jump, "nothingHappened"],
			],
		
		
		label, "nothingHappened",
		
		
			audio, {src: "piano", format: ["mp3"], action: "play"},
			n, "...", 
			n, "....",
			n, ".....",
			n, "Ничего не произошло",
			
		realist, {image: "realist.png", position: leftMiddleSide},		
			realist, "— Мда.",
			realist, "— Ладно, в любом случае...",
			realist, "— Не расслабляйтесь.",
			realist, "— Нам ещё предстоит сражаться с этим, в любой момент.",
			realist, "— Создатель говорил, у него всегда есть план.",
			realist, "— И мы должны ему следовать.",
		
		label, "wellEnding0",
		
			menu, [
				"Выбрать за Гелиоса.",
				"Поверить в значимость плана Создателя.", [jump, "WellEnding1"],
				"Это всё бред.", [jump, "WellEnding2"],
			],
		
		label, "WellEnding1",
		
		realist, {image: "realist.png", position: leftMiddleSide},		
			realist, "— Всегда есть план...",
		skeptic,{image: "skeptic.png", position: rightMiddleSide},	
			skeptic, "— Будешь слепо верить каким-то словам?",
			skeptic, "— Я устал от всей этой лжи.",
		dreamer, {image: "dreamer.png", position: leftMiddleSide},	
		realist, {image: "empty.png", position: leftSide},
			dreamer, "— Не надо, Лу..",
		
			dreamer, {image: "empty.png", position: rightSide},	
			skeptic,{image: "empty.png", position: rightMiddleSide},
			optimist, {image: "empty.png", position: leftMiddleSide},
			realist, {image: "empty.png", position: leftSide},
		realist, {image: "realist.png", position: leftMiddleSide},		
			realist, "— В любом случае.",
			realist, "— Мы ничего не можем поделать, кроме как подготовиться к следующей битве.",
		optimist, {image: "optimist.png", position: leftMiddleSide},	
			optimist, "— ...получается, что так.",
		optimist, {image: "empty.png", position: rightMiddleSide},
		realist, {image: "empty.png", position: leftSide},
		
		
		skeptic,{image: "skeptic.png", position: leftMiddleSide},
			skeptic, "— Как хотите.",
			skeptic, "— В таком случае я лучше подготовлюсь в одиночку.",
			skeptic, "— Я уверен, что если мы возможно сможем выстоять против <i>этого существа</i>.",
			skeptic, "— То люди точно не смогут.",
		skeptic,{image: "skeptic.png", position: rightMiddleSide},	
			skeptic, "— Я отправляюсь на ближайшую заселенную ими планету.",
			skeptic, "— Она недалеко, Млечный Путь.",
			skeptic, "— Вы знаете, где меня искать.",
		optimist, {image: "optimist.png", position: leftMiddleSide},	
			optimist, "— Подожди!",
			optimist, "— Я пойду с тобой.",
			optimist, "— Я не выдержу в одиночестве открытого пространства.",
			
			
		realist, {image: "realist.png", position: Center},	
			realist, "— Ну может тогда и ты, Неос, пойдешь с ними?",
		
		dreamer, {image: "empty.png", position: rightSide},	
		skeptic,{image: "empty.png", position: rightMiddleSide},
		optimist, {image: "empty.png", position: leftMiddleSide},
		realist, {image: "empty.png", position: leftSide},
		
		dreamer, {image: "dreamer.png", position: leftMiddleSide},
			dreamer, "— Не-е...",
			dreamer, "— Мне с вами не по пути.",
			dreamer, "— Слишком много вопросов к одной занимательной персоне...",
			dreamer, "— Я лучше погибну, но найду Создателя.",
			n, "*Неос скрипит зубами*",
			dreamer, "— Он ответит за всё...",
			
		dreamer, {image: "empty.png", position: rightSide},	
		skeptic,{image: "empty.png", position: rightMiddleSide},
		optimist, {image: "empty.png", position: leftMiddleSide},
		realist, {image: "empty.png", position: leftSide},
		
		realist, {image: "realist.png", position: Center},	
			realist, "— Что-ж...",
			realist, "— Тогда удачи вам всем в пути.",
			realist, "— Мне было счастьем быть с вами...",
			
		dreamer, {image: "dreamer.png", position: rightSide},
			dreamer, "— А что будет с тобой, Гелиос?",	
		
		realist, {image: "realist2.png", position: Center},	
			n, "Гелиос многозначительно улыбнулся самой грустной улыбкой, какая вообще может существовать.",
			realist, "— Увидишь.",
		
			scene, "",
			
		dreamer, {image: "empty.png", position: rightSide},	
		skeptic,{image: "empty.png", position: rightMiddleSide},
		optimist, {image: "empty.png", position: leftMiddleSide},
		realist, {image: "empty.png", position: leftSide},
		
		
			someone2, "— ...",
			someone2, "— Герои разбрелись в разные стороны.",
			someone2, "— Теперь их путь — долгий и полный скорби.",
			
			scene, {image: "", position: Center},
			
			someone2, "— Ами с Лу спустятся девой и мужем на Землю утренней звездой.",
			someone2, "— Ами разделит свой свет на крылатых человеко-подобных существ.",
			someone2, "— Чтобы контролировать и оберегать жизнь людей.",
			
			someone2, "— Лу же взял на себя обязанности после смерти.",
			someone2, "— Он присматривает за смертными в своём огненном царстве.",
			someone2, "...",
			
			someone2, "— Неос была с трудным характером.",
			someone2, "— Но она просто хочет понять, что не так...",
			someone2, "— Отчаявшись найти Создателя в одной вселенной, она отправилась в другие.",
			someone2, "— И теперь люди гадают, действительно ли работает теория мультивселенных.",
			someone2, "...",
			
			someone2, "— Гелиос же решился на очень отважный поступок.",
			someone2, "— Пытаясь защитить живые существа против Тьмы, он понял, насколько мало Света вокруг",
			someone2, "— И он сам стал этим светом, обернувшись в яркий шар света — Солнце.",
			someone2, "— Испуская свет в разные стороны, Гелиос освещает вселенную...",
			
			someone2, "— ...",
			someone2, "— Герои разбрелись в разные стороны, но Тьма не дремлет.",
			someone2, "— Героям удалось отпугнуть её, но она всё ещё существует.",
			someone2, "— И существует она в их сердцах.",
			someone2, "— И пускай они  разошлись своими путями, им предстоит ещё встретиться с Тьмой прямо у себя под носом.",
			
			someone2, "— ...",
			creator, "— Ведь это я их такими создал.",
			creator, "— Именно Тьма внутри наших сердец мешает нам услышать других.",
			creator, "— Увидеть наши светлые души...",
			creator, "— Понять и принять.",
			
			creator, "— Теперь герои заняты — присматривают за Вами, людьми.",
			creator, "— Но Вселенская Тьма всё ещё рядом.",
			creator, "— 2020 по Григорианскому календарю год может стать губительным.",
			creator, "— Удачи вам всем.",
			
			n, "— Вы прошли игру на 2/3 звёзд.",
		
			menu, [
				"Частичная победа.",
				"Перейти в конец.", [jump, "lastlabel"],
			],
			
		label, "WellEnding2",	
			
			scene, "",
			
		realist, {image: "realist.png", position: leftMiddleSide},	
			realist, "— Но я не хочу верить этому.",
			realist, "— Зачем ему понадобилось это всё?!",
		skeptic,{image: "skeptic.png", position: rightMiddleSide},	
			skeptic, "— Согласен, это просто смертельная игра.",
		optimist, {image: "optimist.png", position: leftSide},	
			optimist, "— Не надо так о Создателе!",
			optimist, "— Никто даже не погиб.",
		dreamer, {image: "dreamer.png", position: leftMiddleSide},	
			dreamer, "— Она права!",
			dreamer, "— Выстояли сейчас, сможем и потом.",
		realist, {image: "realist2.png", position: leftMiddleSide},	
			n, "*Гелиос саркастически поднял брови*",
			realist, "— Да, конечно.",
			
			skeptic, "— Издеваетесь? Нас чуть живьем не поглотили!",
			dreamer, "— Перестань орать, скептик несчастный!",
			skeptic, "— Что ты мне ска...",
		dreamer, {image: "empty.png", position: rightSide},	
		skeptic,{image: "empty.png", position: rightMiddleSide},
		optimist, {image: "empty.png", position: leftMiddleSide},
		realist, {image: "empty.png", position: leftSide},	
			
			
			audio, {src: "bensound-tomorrow", format: ["mp3"], action: "play"},
			dark, "*приглушённо* — шшшш....",
			dark, " ......",
		
			n, "— ...",
			n, "— Ваши споры и ругань дали возможность Тьме подкрастаться незаметно.",
			n, "— Тьма поглотила вас.",
			n, "— В общем-то...",
			n, "— ...вам пришел конец.",
			n, "— Вы удалось прийти игру только на 1/3 звёзд.",
				
			menu, [
			"Ну ничего страшного.",
			"Перейти в конец.", [jump, "lastlabel"],
			],
			
			
			
			
			
			
			
			
			
			
			
			
			
		
		label, "mainBattleRight6",
		audio, {src: "bensound-memories", format: ["mp3"], action: "play"},
		
			scene, "", 
			
			n, "...", 
		dreamer, {image: "dreamer.png", position: leftMiddleSide},
			dreamer, "— ...а?",
			dreamer, "— Оно... оно кончилось?",
		optimist, {image: "optimist.png", position: rightMiddleSide},	
			optimist, "— ...кажется, да",
			
		realist, {image: "realist.png", position: Center},		
			realist, "— Вот это было жёстко, конечно...",
			realist, "— Столько взаимодействия командного, вот это у нас сплочённость!",
			
		dreamer, {image: "empty.png", position: rightSide},	
		skeptic,{image: "empty.png", position: rightMiddleSide},
		optimist, {image: "empty.png", position: leftMiddleSide},
		realist, {image: "empty.png", position: leftSide},	
			
			n, "*Всё медленно расслабляются, не веря в свою победу*", 
		skeptic,{image: "skeptic.png", position: leftMiddleSide},	
			n, "*Лу медленно выдыхает*", 
			skeptic, "— Как же хорошо, что всё это кончилось...",
		
		skeptic,{image: "skeptic.png", position: rightMiddleSide},
			skeptic, "— У меня есть только один вопрос...",
			skeptic, "— Это существо... оно состоит не из света.",
			skeptic, "— Откуда оно взялось и зачем?",
		
		skeptic,{image: "empty.png", position: rightMiddleSide},	
		realist, {image: "realist.png", position: leftMiddleSide},	
			realist, "— Предлагаю узнать прямо сейчас.",
			n, "Гелиос складывает руки в молитвенной позе.",
			n, "Яркий свет отражался сквозь его полу-закрытые глаза.",
			n, "Гелиос засиял. Связь была установлена.",
		
		label, "mainEnding0",
		
			menu, [
				"Призвать Создателя.",
				"Прочитать молитву.", [jump, "mainEnding1"],
			],
		
		
		label, "mainEnding1",
		
		
		audio, {src: "piano", format: ["mp3"], action: "play"},
		
		scene, "",
		n, "...", 
		n, "Неожиданно, послышался невероятно спокойный, мягкий голос, сразу со всех сторон.", 
		n, "Как будто его источник был везде.", 
		creator, "Sit vis vobiscum.",
		creator, "...Приветствую вас.",
	skeptic,{image: "skeptic.png", position: leftMiddleSide},	
		skeptic, "— Кхм...",
	skeptic,{image: "empty.png", position: leftMiddleSide},	
	dreamer, {image: "dreamer.png", position: leftMiddleSide},
		dreamer, "— Создатель!",
		dreamer, "— Скажи, зачем существовало это... <i>Оно</i>...?",
	dreamer, {image: "empty.png", position: rightSide},		
	realist, {image: "realist.png", position: leftMiddleSide},
		realist, "*напряжён*",
	realist, {image: "empty.png", position: leftMiddleSide},	
	
	
		creator, "— ...",
		creator, "— ...Видите-ли.",
		creator, "— ...Эта <i>Тьма</i> — ваша персональная борьба.",
	optimist, {image: "optimist.png", position: leftMiddleSide},	
		optimist, "— ...но зачем?",
	optimist, {image: "empty.png", position: leftMiddleSide},	
		creator, "— ...Для меня нет возможности создавать себе подобных, милые мои создания.",
		creator, "— ..И только сами вы можете не воссоединиться со мной, но стать, как я, пройдя свой путь..",
		creator, "— ...Вы победили Тьму ради других, но главное — вы победили её в себе.",
		creator, "— ...И это был первый шаг к вашему пониманию сути бытия.",
		creator, "— ...Светославляю вас...",
		
	dreamer, {image: "dreamer.png", position: rightMiddleSide},	
		dreamer, "— ...Но создатель? Что нам делать теперь?",
		n, "*Создатель загадочно улыбается*",
		creator, "— ...На самом деле вы всегда знали, что делать.",
		creator, "— ...",
		someone2, "— .........",
		
		label, "mainEnding2",
		
	dreamer, {image: "dreamer.png", position: leftMiddleSide},	
		dreamer, "— ...",
	optimist, {image: "optimist.png", position: rightMiddleSide},	
		optimist, "— Невероятно, конечно.",
	realist, {image: "realist.png", position: leftSide},	
		n, "*Гелиос вздыхает*",
	skeptic,{image: "skeptic.png", position: rightSide},	
		skeptic, "— Получается, нам всем нужно разойтись своим путём?",
	
		realist, "— Да.",
		realist, "— Вы прекрасно знаете, что теперь нужно делать.",

	dreamer, {image: "empty.png", position: rightSide},	
	skeptic,{image: "empty.png", position: rightMiddleSide},
	optimist, {image: "empty.png", position: leftMiddleSide},
	realist, {image: "empty.png", position: leftSide},
	
		n, "*Произошли коллективные объятья. Без выбора*", 
		
		skeptic, "Тогда прощаемся...",
		skeptic, "Теперь мы должны защищать людей от Тьмы..",
		
		scene, "",
		skeptic, "*Ярким светом сбрасывает себя на Землю вместе с Ами*",
		
		scene, "",
		dreamer, "*Выходит из за пределы галактических пространств в параллельную вселенную.*",
		
		n, "...",
		realist, "— ...",
	realist, {image: "realist.png", position: Center},
		realist, "— Хей.",
		realist, "— Надеюсь, ты понимаешь, для чего тебе всё это было показано.",

		realist, "— Будь осторожен. Тьма среди людей всё ещё существует.",
		realist, "— ...",
		realist, "— ...Я всегда буду рядом с тобой, светить для тебя.",
	realist, {image: "empty.png", position: leftSide},	
		n, "*Гелиос ушёл*",
		
		someone2, "— ...",
		someone2, "— ...",
			someone2, "— Герои разбрелись в разные стороны.",
			someone2, "— Их путь великий и прекрасный.",
			
			scene, {image: "", position: Center},
			
			someone2, "— Ами с Лу спустятся девой и мужем на Землю утренней звездой.",
			someone2, "— Ами разделит свой свет на крылатых человеко-подобных существ.",
			someone2, "— Чтобы контролировать и оберегать жизнь людей.",
			
			someone2, "— Лу же взял на себя обязанности после смерти.",
			someone2, "— Он присматривает за смертными в своём огненном царстве.",
			someone2, "...",
			
			scene, {image: "", position: Center},
			
			someone2, "— Неос была с трудным характером.",
			someone2, "— Но она просто хочет понять, что не так...",
			someone2, "— Отчаявшись найти Создателя в одной вселенной, она отправилась в другие.",
			someone2, "— И теперь люди гадают, действительно ли работает теория мультивселенных.",
			someone2, "...",
			
			scene, {image: "", position: Center},
			
			someone2, "— Гелиос же решился на очень отважный поступок.",
			someone2, "— Пытаясь защитить живые существа против Тьмы, он понял, насколько мало Света вокруг...",
			someone2, "— И он сам стал этим светом, обернувшись в яркий шар света — Солнце.",
			someone2, "— Испуская свет в разные стороны, Гелиос освещает вселенную...",
			
			someone2, "— ...",
			someone2, "— Героям удалось победить Тьму, но она всё ещё существует.",
			someone2, "— И существует она в сердцах всего живого.",
			someone2, "— ...",
			
			someone2, "— ...",
			creator, "— Ведь это я их такими создал.",
			creator, "— Именно Тьма внутри наших сердец мешает нам услышать других.",
			creator, "— Увидеть наши светлые души.",
			creator, "— Понять и принять...",
			
			creator, "— 4 героя Света теперь заняты — присматривают за Вами, людьми.",
			creator, "— Но Вселенская Тьма всё ещё рядом.",
			creator, "— 2020 по Григорианскому календарю год может стать губительным.",
			creator, "— Удачи вам всем.",
		
		n, "— ...",
		n, "— Поздравляем!.",
		n, "— Вы прошли игру на 3/3 звёзд.",
		
		menu, [
			"Победа.",
			"Перейти в конец.", [jump, "lastlabel"],
		],
		
		
		
		label, "lastlabel",
			
			audio, {src: "bensound-memories", format: ["mp3"], action: "play"},
			n, "...",
			n, "Поздравляем вас с успешным (или не очень) прохождением игры.",
			n, "Мы очень надеемся, что вам она понравилась.",
			n, "Перед тем, как закончить, пожалуйста, пройдите небольшой опросник об игре.",
			
		lionText, {
            width: 0.6, color: "grey", border: "1px solid grey",
            backgroundColor: "#2E3540",
            position: new Position(0.20, 0.3), align: "wenter",
            visibility: "visible",
        text:"Пожалуйста, пройдите небольшой опросник об игре: <a href='https://forms.gle/rQmxfJ2UVu1t2SzT9' style='color:white'> Google Forms</a>"},
			
			n, "Ещё раз спасибо <3.",
			n, "Перепройти игру?",
		
		
    ];
}
