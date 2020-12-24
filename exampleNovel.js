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
    novel.imagePath = "images/"; // path to your image directory
    novel.audioPath = "audio/"; // path to your audio directory
    
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
    
    leftSide = new Position(0.05, .95, 0, 1);
	leftMiddleSide = new Position(0.20, .95, 0, 1);
    rightSide = new Position(0.95, 0.95, 1, 1);
	rightMiddleSide = new Position(0.75, 0.95, 1, 1);
    upperCenter = new Position(0.5, 0.3, 0.5, 0.5);
    rightTop = new Position(1, 0.1, 1, 0);
	Center = new Position(0.5, .6, 0.5, 0.5);
    
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
		someone, "— ...пока наконец не приняла форму четырёх существ, которым было подвластно формировать мир вокруг себя.",
		
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
		optimist2, "— А кто такие <i>бараны?</i>.",
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
		dreamer2, "— И мне не нравится, когда меня призывают.",
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
	optimist2, {image: "empty.png", position: rightMiddleSide},	
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
	optimist2, {image: "optimist.png", position: Center},
		optimist, "— Но им всё равно нужны дополнительные условия...",
				
	skeptic,{image: "skeptic.png", position: rightSide},	
	realist, {image: "realist.png", position: Center},	
	optimist2, {image: "optimist.png", position: leftSide},
		realist, "— Тогда сейчас. Подождите.  Я давно хотел вам показать...",
	skeptic,{image: "empty.png", position: rightMiddleSide},	
	optimist2,{image: "empty.png", position: rightMiddleSide},
	realist, {image: "realist.png", position: rightMiddleSide},	
		realist, "— Для начала нам нужна концепция свободного выбора.",
		realist, "— ...с этой концепцией появляется многолинейность в потоке времени для человеков.",
		
	dreamer, {image: "dreamer.png", position: leftMiddleSide},	
		dreamer, "— То есть, развитие временной спирали больше не предопределено?",
		realist, "— предопределено, просто к одному и тому же последствию теперь можно прийти разными путями.",
		realist, "— правда, человеки назовут это ‘будущим’ и всё равно будут верить в неопределённость.",	
	dreamer, {image: "empty.png", position: leftMiddleSide},	
	skeptic,{image: "skeptic.png", position: leftMiddleSide},	
	realist, {image: "realist.png", position: rightSide},	
		skeptic, "— Что ещё от них ожидать...",
	skeptic,{image: "skeptic.png", position: Center},	
		n, "В умных глазах Лу отражается сомнение.", 
	realist, {image: "empty.png", position: rightSide},		
		skeptic, "— Концепция работает?",
	skeptic,{image: "empty.png", position: Center},		

        label, "menu0",
        menu, [
			"Концепция работает?",
			"Да.", [jump, "main0"],
            "Другое да.", [jump, "main0"],
        ],
        
        label, "main0",
        scene, "",
		
		realist, "— Как видишь.",
		realist, "— Что насчёт элементов?.",
		skeptic, "— Вода и огонь, земля и воздух. Кстати, эти элементы между собой неожиданно сгенерировали целую систему механизмов.",
		dreamer, "— И она огромна… Натуральная природа, как её назовут.", 
		optimist, "— Это не будет опасно?.",
		dreamer, "— Ха, поверь мне, человеки только и будут мечтать о том, чтобы познать эту систему.", 
		n, "Неос вскидывает голову.",
		dreamer, "— Природа будет важна для всех живых существ.", 
		optimist, "— Но ведь огонь может их ранить!",
		optimist, "— Воздух не пригоден для жизни, вода — вообще яд!",
		n, "Можно заметить, как Ами нервничает.", 
		skeptic, "— Да, по отдельности эти элементы нестабильны.",
		skeptic, "— Но вместе они создают нечто прекрасное.",
		
		label, "menu1",
        menu, [
			"Выбор",
			"Оставить жизнь без базовых элементов. ", [jump, "end1"],
            "Природа", [jump, "main1"],
        ],
		
				label, "end1",
				scene, "",
				audio, {src: "bensound-tomorrow", format: ["mp3"], action: "play"},
		
				skeptic, "— Кхм...",
				realist, "— Жизнь не проявляется.",
				dreamer, "— Что-то мы запутались.", 
				dreamer, "— Разве мы не должны были создавать условия для жизни?.", 

				n, "— ...",
				n, "Без материального мира вы не смогли существовать.",
				n, "Пожалуйста, следите внимательнее за тем, что происходит в диалоге.",
				n, "Персонажи часто говорят важные детали, помогающие сделать правильный выбор.",
			
				label, "menuend1",
				menu, [
					"Вселенная будет пересоздана. Будьте аккуратны, принимая решения!",
					"Переродиться.", [jump, "main0"],
				],

		label, "main1",
        scene, "",
		audio, {src: "bensound-sweet", format: ["mp3"], action: "play"},
		
		realist, "— Предлагаю заодно поселить их на огромных сферах, бесконечно парящих с определённой скоростью в пространстве.",
		dreamer, "— Человеков? Гелиос, зачем?",
		realist, "— Концентрировать их в одном месте удобнее, и давать условия для их существования тоже.",
		skeptic, "— Звучит логично.",
		optimist, "— Да, а сверху можно расположить защитный купол от внешних угроз.",
		skeptic, "— Кстати, геометрически, это не сферы, а шары.",
		optimist, "— Геометрия?",
		skeptic, "— Да, я добавил, хотя смысла в этом....",
		skeptic, "— Меня будут ненавидеть за это.",
		n, "Ами пожимает плечами.", 
		optimist, " — Ну, если это зачем-то было нужно.",
		realist, "— ...",
		realist, "— Ребят, тут вообще есть проблемка...",
		dreamer, "— Что случилось??",
		skeptic, "*шёпотом* — Как всегда, одни проблемы.",
		realist, "— Помните ту концепцию времени, которую мы добавили?",
		realist, "— ...В общем, из-за неё человеки... как это...",
		realist, "— Их материальные тела рассыпаются, и их свету больше негде находиться.",
		skeptic, "*продолжая шёпотом* — Ну я не удивлён, что что-то не работает.",
		realist, "— ...Мы можем что-то придумать?",
		optimist, "— Нам нужен защитный механизм для этого процесса.",
		dreamer, "— Можем создать концепцию перехода их света от предыдущего объекта к новому.",
		dreamer, "— Бесконечное существование!",
		optimist, "— Мне кажется, это не разумно.",
		optimist, "— Человеки сойдут с ума пребывать в разных телах навечно...",
		n, "Ами хватается за голову.", 
		optimist, "— Пусть лучше их опыт обнуляется.",
		realist, "— Да, мы не можем дать им существовать вечно.",
		optimist, "— Пусть свет стремится из тела человека в новое тело, а цикл между телами будет называться жизнью.",
		dreamer, "— Так...",

		label, "menu2",
        menu, [
			"Неос выбирает",
			"Оставить переход между объектами.", [jump, "end2"],
            "Послушать Ами и Гелиоса", [jump, "main2"],
        ],
		
				label, "end2",
				scene, "",
				audio, {src: "bensound-tomorrow", format: ["mp3"], action: "play"},
		
				dreamer, "— Это не зачем.", 
				dreamer, "— Сможем придумать сверх этого другой механизм.", 
				skeptic, "— Конечно, это то, что нам стоит делать — нагромождать механизмы один на другой!",
				optimist, "— ...Они же сойдут с ума...",
				realist, "*смотрит в будущее* — Хватит. Сейчас мы увидим, что там происходит.",
				dreamer, "— Оу. ",
				optimist, "— ...оуу.",
				skeptic, "— А я говорил...",
				realist, "— Они решили прекратить существовать...",

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
		
		dreamer, "— Ну хорошо... ",
		dreamer, "— Не то, чтобы мне это нравится, но, кажется, так действительно лучше.",
		skeptic, "— ...ого, мы договорились без всяких ссор.",
		n, "Гелиос ставит руки в бока, но по нему видно, что он улыбается",
		realist, "— Ты такой скептик!",
		realist, "— ...Ссоры? Что это?",
		skeptic, "— Так человеки будут называть неспособность услышать друг друга в определённый момент.",
		skeptic, "— А ещё я очень устал, мы немного отклоняемся от поставленных задач.",
		dreamer, "— Ну хватит уже бурчать.",
		skeptic, "— Я не бурчу!.",
		realist, "— Ещё как!",
		skeptic, "— Ну и ладно. Я в любом случае собирался поработать над некоторыми деталями отдельно.",
		skeptic, "— Всё-таки природа очень комплексная по своей системе.",
		skeptic, "*удаляется*— Позовите, если буду нужен.",
		dreamer, "— ...как там человеки говорят… 'ну и лол!'.",
		optimist, "*про себя* — надеюсь он там ничего не сломает своими проработками...",
		realist, "— Но в чём-то он может и прав. Возможно, нам нужно немного подумать в одиночестве.",
		dreamer, "— Тогда давайте разойдемся. Мне нужно отдохнуть от всего этого.",
		n, "Гелиос кривит губы в саркатисческой улыбке.",
		realist, "— В таком случае, выбора не остаётся.",
		
		label, "menu3",
        menu, [
			"— Выбор без выбора",
			"Разойтись ненадолго.", [jump, "main3"],
        ],

		label, "main3",
		scene, "",
		
		n, "— ...",
		n, "— Свет всё преломлялся и изменялся, порождая жизнь на своём пути.",
		n, "— Механизмы и структуры, разработанные 4 богами, функционировали и помогали жизни адаптироваться.",
		n, "— ...но настал момент, когда им снова пришлось собраться.",
		n, "— Что-то неладное происходило в мире.",

		audio, {src: "bensound-memories", format: ["mp3"], action: "play"},
		n, "Гелиос машет рукой издалека.", 
		realist, " — Ну здравствуй.",
		realist, " — Ты тут одна?",
		optimist, "— ...А мы тут только вдвоём? Где остальные?",
		n, "Ами хмурится.",
		optimist, "— Особенно Лу меня волнует, негодяй...",
		realist, "— Ну сейчас.",
		n, "Гелиос привычно щёлкает пальцами", 
		realist, "— ...",
		realist, "— ......",
		optimist, "— .......",
		realist, "— ................",
		realist, "— В смысле????.",
		optimist, "— Они... не могут прийти?!",
		n, "Гелиос и Ами ошеломлённо смотрят друг на друга.", 
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
		
		optimist, "— ...",
		optimist, "— Что делаем?",
		realist, "— Так-с.",
		realist, "— Из-за того, что скорость света ограничена, у нас получаются отдельные участки космоса, в которые мы не можем попасть сразу.",
		realist, "— И это значит, что нам надо искать где-то там.",
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
		n, "Гелиос и Ами находят Неос.", 
		n, "Её свёт был тусклый, а она сама еле живая.", 
		optimist, "— Ч-что произошло?",
		realist, "— Мда, тут бы никто не смог прийти на встречу...",
		n, "— ...Гелиос и Ами помогают Неос прийти в себя.",
		dreamer, "— угхх...",
		dreamer, "— ...вот это жесть, конечно...",
		realist, "— Что случилось?",
		optimist, "— Ты в порядке?",
		dreamer, "— Теперь вроде бы да.",
		optimist, "— Кто сделал это с тобой?",
		dreamer, "— кхх… скорее что, а не кто. Это очень странно, но... ",
		dreamer, "— Это было что-то невероятно ужасное и неприятное",
		dreamer, "— Как будто оно поглощает свет",
		optimist, "*боязливо*— Ч-что... Что оно хотело?",
		dreamer, "— Кушать оно хотело!",
		n, "Неос немного пугает Ами",
		n, "Ами визжит",
		realist, "*улыбается* — Спокойнее. Ты снова светишь, и это главное.",
		dreamer, "— Да нужно найти это нечто и разобраться!.",
		optimist, "— Я не хочу… я...",
		realist, "— Перестаньте. Вы же понимаете...",
		skeptic, "— ...",

		label, "menu6",
		menu, [
			"Сказать фразу за Лу:",
			"<strong>Дослушать |</strong> Не хотелось бы вас перебивать, но...", [jump, "main6"],
			"<strong>Перебить |</strong> Короче,смотрите...", [jump, "end4"],
        ],

				label, "end4",
				scene, "",
		
				skeptic, "— Короче, смотрите...",
				realist, "— Ты где вообще был? Почему не отзывался?",
				optimist, "— Совсем уже...",
				dreamer, "— Лу тоже пропадал? Пока меня пытались съесть заживо?",
				skeptic, "— Ребят, у меня....",
				dreamer, "*перебивает* — Лу, меня тут чуть не стало, а ты ходишь непонятно где.",
				dreamer, "— Просто невыносимо!",
				optimist, "— Тебе всё равно на нас, да?",
				realist, "— Лу, это всё нехорошо, ты же понимаешь..",
				skeptic, "— Да что-ж вы... я... кхгшш… хфф...",
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
		
		skeptic, "— Не хотелось бы вас перебивать, но….",
		realist, "— Лу? Где ты был?",
		skeptic, "— Я был около Магелланового скопления. Послушайте!",
		skeptic, "— Я встретил там существ, которых ранее не видел никогда",
		skeptic, "— В них просто нет никакого света!",
		dreamer, "— Ага… Вот что <em>пыталось меня сожрать</em>.",
		realist, "— Мы как раз наткнулись на такое, буквально только что!",
		skeptic, "— Невообразимо просто, как такое вообще может быть...",
		optimist, "— А главное, что нам делать?",
		n, "Неос сжимает кулаки.", 
		dreamer, "Мы должны противостоять.",
		optimist, "— ...Но как?",

		realist, "— Готовимся к битве.",

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
		n, "И только умея слушать других, умея принимать диалог, можно противостоять вселенской Тьме.",
		
		dreamer, "— Чшш...",
		skeptic, "— М?",
		dreamer, "— <i>Оно</i> приближается...",
		someone, " — ...",
		dark, " — шшшшфффф......",
		realist, "*выдох*",
		realist, "*щёлкает пальцами* — Создаю концепцию защиты.",
		skeptic, "*вскидывает руки*",
		skeptic, "— Беру на себя оптику преломлений.",
		
		





		
		label, "mainBattleStart",
		
			menu, [
				"Световой щит Гелиоса",
				"Поставить световой щит справа", [jump, "mainBattleRight"],
				"Поставить световой щит слева", [jump, "mainBattleLeft"],
			],

		label, "mainBattleRight",
		
			realist, "— Атакуем слева.",
			skeptic, "— Направляю луч света!",
		
			menu, [
				"Оптика световых лучей",
				"Направить налево", [jump, "mainBattleRight2"],
				"Направить направо", [jump, "mainBattleLeft2"],
			],
		
		label, "mainBattleLeft",
		
			realist, "— Атакуем справа.",
			skeptic, "— Направляю этот сверх-тяжелый луч света...",
		
			menu, [
				"Оптика световых лучей",
				"Направить налево", [jump, "mainBattleLeft2"],
				"Направить направо", [jump, "mainBattleRight2"],
			],
		
		label, "mainBattleLeft2",
		
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

			realist, "— Приготовьтесь, теперь будет сложно!",
			skeptic, "— Ами, атакуй сверху!",
		
			menu, [
				"— Ами, давай!",
				"Атаковать сверху", [jump, "mainBattleSkip"],
			],

		
		label, "mainBattleSkip",
		
			realist, "— Аккуратнее!",
			skeptic, "Сам аккуратнее!",
			skeptic, "Давай выбирай, что делать дальше!",
		
			menu, [
				"Сделать выбор за Гелиоса:",
				"Новая атака", [jump, "mainBattleRight3"],
				"Укрепить позиции", [jump, "mainBattleRight4"],
			],
		
		label, "mainBattleLeft3", 
		
			realist, "— Атакуй снова, теперь с нужной стороны!",
			
			menu, [
				"Оптика световых лучей — вторая попытка",
				"Направить налево", [jump, "mainBattleRight3"],
				"Направить направо", [jump, "mainBattleLeft4"],
			],

		label, "mainBattleLeftLeft3",
			
			realist, "— Атакуй снова, теперь с нужной стороны!",
			
			menu, [
				"Оптика световых лучей — вторая попытка",
				"Направить налево", [jump, "mainBattleLeft4"],
				"Направить направо", [jump, "mainBattleRight3"],
			],
			
		
		label, "mainBattleRight3",
		
			dreamer, "— Так, что теперь?", 
			dreamer, "— Новая атака, нужно только выбрать <i>правильное</i> направление..",
			
		skeptic, {image: "skeptic.png", position: Center},
			skeptic, "— А вот теперь будет по-настоящему сложно...",
			
			menu, [
				"— Скорее решай!",
				"Атака сверху", [jump, "mainBattleLeftLeft4"],
				"Атака снизу", [jump, "mainBattleLeftLeft4"],
				"Атака слева", [jump, "mainBattleLeft4"],
				"Атака справа", [jump, "mainBattleRight4"],
			],
		
		label, "mainBattleRight4",
		
		dreamer, {image: "dreamer.png", position: Center},
			dreamer, "— Осталось немного.", 
			dreamer, "— Дайте мне атаковать!", 
			optimist, "— Неос, нет, ты нужна мне здесь!",
			optimist, "— Лучше дайте мне поставить щит!",
		
			menu, [
				"Командная работа — ключ к победе.",
				"Перестроить всех стратегически по кругу ", [jump, "mainBattleRight5"],
				"Выпустить Неос вперёд", [jump, "mainBattleLeft5"],
				"Перестроить Ами в авангард", [jump, "mainBattleLeftLeft4"],
			],
		
		label, "mainBattleRight5",
		
			menu, [
				"Решение на миллион.",
				"<strong>Непредсказуемая атака |</strong> Серия резких ударов светом", [jump, "mainBattleLeft7"],
				"<strong>Совместная атака |</strong> Концентрация света на Тьме", [jump, "mainBattleRight6"],
				"<strong>Защита |</strong> Укрепить позиции против Тьмы", [jump, "mainBattleLeft5"],
			],
		
		
		
		label, "mainBattleLeftLeft4",
			
			realist, "— Нет, мы не угадали. Тьма парировала нашим действиям.",
			realist, "— ...",
			realist, "— Всё очень плохо...",
			optimist, "— Теперь что?",
			skeptic, " — Теперь погибель наша, вот что...",
			dreamer, "— Эта битва ещё не проиграна, соберитесь!", 
		
			menu, [
				"Быстрое решение",
				"<strong>Исправить ошибку |</strong> Переместиться назад во времени", [jump, "mainBattleLeft6"],
				"<strong>Убежать |</strong> Переместиться на пару парсек от места битвы", [jump, "mainBattleLeft6"],
				"<strong>Командное действие |</strong> Выстроить щиты и подготовиться к атаке", [jump, "mainBattleLeft5"],
			],
		
		label, "mainBattleLeft4",
			
			realist, "— Да как же так... Мы не можем защищаться и атаковать с одной и той же стороны!",
			realist, "— Перед атакой всегда должна быть защита.",
			optimist, "— Какая обстановка?",
			realist, "— ...",
			realist, "— Всё очень плохо...",
			optimist, "— Теперь что?",
			skeptic, "*трясётся* — Теперь погибель наша, вот что...",
			dreamer, "— Эта битва ещё не проиграна, соберитесь!", 
		
			menu, [
				"Быстрое решение",
				"<strong>Исправить ошибку |</strong> Переместиться назад во времени", [jump, "mainBattleLeft6"],
				"<strong>Убежать |</strong> Переместиться на пару парсек от места битвы", [jump, "mainBattleLeft6"],
				"<strong>Командное действие |</strong> Выстроить щиты и подготовиться к атаке", [jump, "mainBattleLeft5"],
			],
			
		
		label, "mainBattleLeft5",
			
			optimist, "— Кажется, получается!",
			optimist, "— Нужно перегруппироваться и атаковать снова!",
			dreamer, "— Вперёд!", 
			
			menu, [
				"Последний шанс",
				"<strong>Командная Атака|</strong> 4 мощные атаки каждого героя", [jump, "mainBattleRightRight4"],
				"<strong>Индивидуальная атака|</strong> 4 разных приёма героев для победы", [jump, "mainBattleLeft7"],	
				"<strong>Атака + Защита|</strong> Ами и Гелиос ставят щиты, Неос и Лу атакуют", [jump, "mainBattleWellEnd"],			
			],
			
		label, "mainBattleRightRight4", 	

			menu, [
				"Нет поражения хуже.",
				"<strong>Индивидуальная защита|</strong> Световые щиты для каждого героя", [jump, "mainBattleLeft7"],
				"<strong>Командная защита|</strong> Командный световой щит", [jump, "mainBattleWellEnd"],
			],

		
		label, "mainBattleLeft6",

				scene, "",
		
				skeptic, "— ",
				audio, {src: "bensound-tomorrow", format: ["mp3"], action: "play"},
				dark, "*приглушённо* — шшшш....",
				dark, " ......",
		
				n, "— ...",
				n, "— Как известно, убегать от проблем никогда не было хорошим решением..",
				n, "— Вам пришел конец.",
				n, "— Вы прошли игру на 1/3 звёзд.",
				
				menu, [
					"Better Luck Next Time.",
					"Перейти в конец.", [jump, "lastlabel"],
				],
		
		label, "mainBattleLeft7",

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
		
			audio, {src: "bensound-sweet", format: ["mp3"], action: "stop"},
			n, "...", 
			dreamer, "— ...Оно отступает.",
			dreamer, "— Что?",
			optimist, "— ...кажется, да!",
		
			skeptic, "— Существовать в одном мире с этой тварью стало как-то мрачновато.",
			skeptic, "— Откуда оно вообщё взялось, и зачем?",
			
			optimist, "— Вот бы мы могли призвать Создателя и понять, зачем...",
			
			realist, "— Предлагаю узнать прямо сейчас.",
			n, "Гелиос складывает руки в молитвенной позе.",
			n, "Яркий свет отражался сквозь его полу-закрытые глаза.",
			n, "Гелиос засиял. Связь была установлена.",
			
			label, "wellEndingX",
		
			menu, [
				"Призвать Создателя.",
				"Прочитать молитву.", [jump, "nothingHappened"],
			],
		
		
		label, "nothingHappened",
		
		
			audio, {src: "bensound-sweet", format: ["mp3"], action: "stop"},
			n, "...", 
			n, "Ничего не произошло",
			
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
			
			realist, "— Всегда есть план...",
			skeptic, "— Будешь слепо верить каким-то словам?",
			skeptic, "— Я устал от всей этой лжи.",
			dreamer, "— Не надо, Лу..",
			realist, "— В любом случае.",
			realist, "— Мы ничего не можем поделать, кроме как подготовиться к следующей битве.",
			optimist, "— ...получается, что так.",
		
			skeptic, "— Как хотите.",
			skeptic, "— В таком случае я лучше подготовлюсь в одиночку.",
			skeptic, "— Я уверен, что если мы возможно сможем выстоять против <i>этого существа</i>.",
			skeptic, "— То люди точно не смогут.",
			skeptic, "— Я отправляюсь на ближайшую заселенную ими планету.",
			skeptic, "— Она недалеко, Млечный Путь.",
			skeptic, "— Вы знаете, где меня искать.",
			
			optimist, "— Я с тобой.",
			optimist, "— Я не выдержу в одиночестве открытого пространства.",
			realist, "— Что-ж...",
	
			dreamer, "— Мне с вами не по пути.",
			dreamer, "— Слишком много вопросов...",
			dreamer, "— Я лучше погибну, но найду Создателя.",
			dreamer, "— Он ответит за всё...",
		
			scene, "",
		
			someone2, "— ...",
			someone2, "— Герои разбрелись в разные стороны, но Тьма не дремлет.",
			someone2, "— Вам удалось отпугнуть её, но она всё ещё существует.",
			someone2, "— И существует она в их сердцах.",
			
			someone2, "— ...",
			creator, "— Ведь это я их такими создал.",
			creator, "— Именно Тьма внутри наших сердец мешает нам услышать других.",
			creator, "— Увидеть их светлые души...",
			creator, "— Понять и принять.",
			
			creator, "— Теперь они заняты — присматривают за Вами, людьми.",
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
			
			realist, "— Но я не хочу верить этому.",
			realist, "— Зачем ему понадобилось это всё?!",
			skeptic, "— Согласен, это просто смертельная игра.",
			optimist, "— Не надо так о Создателе!",
			optimist, "— Никто даже не погиб.",
			dreamer, "— Выстояли сейчас, сможем и потом.",
			realist, "*сарказм* — Да, конечно.",
			skeptic, "— Издеваетесь? Нас чуть живьем не поглотили!",
			dreamer, "— Перестань орать, скептик несчастный!",
			skeptic, "— Что ты мне ска...",
			
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
		
			scene, "", 
		
			n, "...", 
			dreamer, "— ...а?",
			dreamer, "— Оно... оно кончилось?",
			optimist, "— ...кажется, да",
			realist, "— Вот это было жёстко, конечно...",
			realist, "— Столько взаимодействия командного, вот это у нас сплочённость.",
			n, "", 
			n, "Лу медленно выдыхает", 
			skeptic, "— Как же хорошо, что всё это кончилось...",
			n, "Лу медленно выдыхает", 
		
		
			skeptic, "— У меня есть только один вопрос...",
			skeptic, "— Это существо... оно состоит не из света.",
			skeptic, "— Откуда оно взялось, и зачем?",
			
			
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
		
		
		audio, {src: "bensound-sweet", format: ["mp3"], action: "stop"},
		n, "...", 
		n, "Неожиданно, послышался невероятно спокойный, мягкий голос, сразу со всех сторон.", 
		n, "Как будто его источник был везде.", 
		creator, "Sit vis vobiscum.",
		creator, "...Приветствую вас.",
		skeptic, "*смущён* — Кхм...",
		dreamer, "— Создатель!",
		dreamer, "— Скажи, зачем существовало это... <i>Оно</i>...?",
		realist, "*напряжён*",
		creator, "— ///////",
		creator, "— ///Видите-ли.",
		creator, "— ///Эта <i>Тьма</i> — ваша персональная борьба.",
		optimist, "— ...но зачем?",
		creator, "— ///Для меня нет возможности создавать себе подобных, милые мои создания.",
		creator, "— ///И только сами вы можете не воссоединиться со мной, но стать, как я, пройдя свой путь..",
		creator, "— ///Вы победили Тьму ради других, но главное — вы победили её в себе.",
		creator, "— ///И это был первый шаг к вашему пониманию сути бытия.",
		creator, "— ///Светославляю вас///",
		dreamer, "— ...Но создатель? Что нам делать теперь?",
		creator, "*улыбается* — ///На самом деле вы всегда знали, что делать",
		creator, "— ///////",
		someone2, "— //////////////////",
		
		label, "mainEnding2",
		
		dreamer, "— ...",
		optimist, "— Невероятно, конечно.",
		realist, "*выдыхает*",
		skeptic, "— Получается, нам всем нужно разойтись своим путём?",
		realist, "— Right. План есть план.",
		optimist, "— ...давайте обнимемся перед дорогой хоть.",
		n, "коллективные объятья. Без выбора.", 
		skeptic, "— Среди всяких <i>шаров</i>, Создатель проявил свет на одной конкретной.",
		optimist, "— Я должна спуститься вниз на эту планету и защищать на ней людей.",
		skeptic, "*берёт Ами за руку*",
		skeptic, "— Я последую за тобой и буду тебя поддерживать там.",
		skeptic, "— Неос? Гелиос?",
		dreamer, "— Извините. Это не для меня.",
		dreamer, "— Слишком много всего происходит вокруг вещей, которые я не нахожу важными.",
		dreamer, "— Я встану на поиски приключений в других мирах.",
		dreamer, "*грустно улыбается* — А потом ваши людишки будут представлять альтернативные реальности и теорию мультивселенной.",
		optimist, "— Ну а ты, Гелиос.",
		realist, "— ...",
		realist, "— Я всегда буду неподалёку. Мне суждено светить для этого людского шара...",
		realist, "— Я стану Солнцем местной космической системы.",
		optimist, "— Гелиос, ты серьезно?. Ты больше никогда не сможешь использовать свои способности!",
		realist, "— Я знаю...",
		realist, "— Идите.",
		n, "— Прощай.",
		
		
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
		
		n, "— Поздравляем!.",
		n, "— Вы прошли игру на 3/3 звёзд.",
		
		menu, [
			"Победа.",
			"Перейти в конец.", [jump, "lastlabel"],
		],
		
		
		
		label, "lastlabel",
			
			n, "...",
			n, "Поздравляем вас с успешным (или не очень) прохождением игры.",
			n, "Мы очень надеемся, что вам она понравилась.",
			n, "Перед тем, как закончить, пожалуйста, пройдите небольшой опросник об игре.",
			n, "Ещё раз спасибо <3.",
			n, "Перепройти игру?",
		
		
    ];
}
