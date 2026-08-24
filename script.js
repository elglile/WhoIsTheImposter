'use strict';

/* ============================================================
   Who is the Imposter — game data
   Each item: { en, ar, emoji, detail: {en, ar} }
   detail = short clue shown to crew players (never the imposter)
   ============================================================ */

const CATEGORIES = {
  food: {
    icon: '🍕',
    label: { en: 'Food', ar: 'أكل' },
    items: [
      { en: 'Pizza', ar: 'بيتزا', emoji: '🍕', detail: { en: 'Italy’s famous flat bread covered with cheese', ar: 'خبز إيطالي شهير مغطى بالجبن' } },
      { en: 'Burger', ar: 'برغر', emoji: '🍔', detail: { en: 'A grilled patty inside a round bun', ar: 'قطعة لحم مشوية بين خبزتين مستديرتين' } },
      { en: 'Sushi', ar: 'سوشي', emoji: '🍣', detail: { en: 'Japanese dish of raw fish and rice', ar: 'طبق ياباني من السمك النيء والأرز' } },
      { en: 'Shawarma', ar: 'شاورما', emoji: '🌯', detail: { en: 'Middle Eastern sliced meat in a wrap', ar: 'لحم شرقي مقطّع وملفوف بالخبز' } },
      { en: 'Pasta', ar: 'مكرونة', emoji: '🍝', detail: { en: 'Italian noodles served with sauce', ar: 'معكرونة إيطالية تقدم مع الصلصة' } },
      { en: 'Tacos', ar: 'تاكو', emoji: '🌮', detail: { en: 'Mexican folded tortilla stuffed with fillings', ar: 'خبز مكسيكي مطوي محشي' } },
      { en: 'Falafel', ar: 'فلافل', emoji: '🧆', detail: { en: 'Fried balls made from chickpeas', ar: 'كرات مقلية مصنوعة من الحمص' } },
      { en: 'Ice Cream', ar: 'آيس كريم', emoji: '🍦', detail: { en: 'Frozen sweet dessert eaten cold', ar: 'حلوى مثلجة تؤكل باردة' } },
      { en: 'Fried Chicken', ar: 'دجاج مقلي', emoji: '🍗', detail: { en: 'Crispy breaded chicken pieces', ar: 'قطع دجاج مقرمشة مغطاة بالبقسماط' } },
      { en: 'Steak', ar: 'ستيك', emoji: '🥩', detail: { en: 'A thick slice of grilled beef', ar: 'شريحة سميكة من اللحم البقري المشوي' } },
      { en: 'Salad', ar: 'سلطة', emoji: '🥗', detail: { en: 'A mix of fresh raw vegetables', ar: 'خضروات طازجة مشكلة' } },
      { en: 'Pancakes', ar: 'بان كيك', emoji: '🥞', detail: { en: 'Flat breakfast cakes eaten with syrup', ar: 'فطائر مسطحة للفطور تؤكل مع الشراب' } },
      { en: 'Donut', ar: 'دونات', emoji: '🍩', detail: { en: 'Sweet fried pastry shaped like a ring', ar: 'معجون حلو مقلية على شكل حلقة' } },
      { en: 'Ramen', ar: 'رامن', emoji: '🍜', detail: { en: 'Japanese noodle soup with broth', ar: 'حساء نودلز ياباني بمرق' } },
      { en: 'Kebab', ar: 'كباب', emoji: '🍢', detail: { en: 'Grilled meat pieces on a skewer', ar: 'قطع لحم مشوية على سيخ' } },
      { en: 'Croissant', ar: 'كرواسان', emoji: '🥐', detail: { en: 'Buttery flaky French pastry', ar: 'معجنات فرنسية هشة بالزبدة' } },
      { en: 'Popcorn', ar: 'فشار', emoji: '🍿', detail: { en: 'Puffed corn, the movie-time snack', ar: 'ذرة منتفخة، وجبة وقت الأفلام' } },
      { en: 'Chocolate Cake', ar: 'كيك شوكولاتة', emoji: '🍰', detail: { en: 'Soft layered cocoa dessert', ar: 'حلوى طرية بطبقات الشوكولاتة' } },
      { en: 'Hummus', ar: 'حمص', emoji: '🥣', detail: { en: 'Creamy chickpea dip for bread', ar: 'معجون حمص كريمي يُغمَّس به الخبز' } },
      { en: 'Hot Dog', ar: 'هوت دوج', emoji: '🌭', detail: { en: 'A sausage served inside a long bun', ar: 'نقانق تقدم داخل خبزة طويلة' } }
    ]
  },
  cars: {
    icon: '🚗',
    label: { en: 'Cars', ar: 'سيارات' },
    items: [
      { en: 'Ferrari', ar: 'فيراري', emoji: '🏎️', detail: { en: 'Legendary red sports car from Italy', ar: 'سيارة رياضية حمراء أسطورية من إيطاليا' } },
      { en: 'Lamborghini', ar: 'لامبورغيني', emoji: '🏎️', detail: { en: 'Italian luxury supercar maker', ar: 'شركة سيارات إيطالية خارقة فاخرة' } },
      { en: 'Mercedes-Benz', ar: 'مرسيدس', emoji: '🚗', detail: { en: 'German premium carmaker with the star logo', ar: 'شركة ألمانية فاخرة بشعار النجمة' } },
      { en: 'BMW', ar: 'بي إم دبليو', emoji: '🚘', detail: { en: 'German brand known as the ultimate driving machine', ar: 'علامة ألمانية تعرف بأفضل ماكينة قيادة' } },
      { en: 'Tesla', ar: 'تسلا', emoji: '⚡', w: 'Tesla, Inc.', detail: { en: 'American pioneer of electric cars', ar: 'الرائدة الأمريكية في السيارات الكهربائية' } },
      { en: 'Porsche', ar: 'بورشه', emoji: '🏎️', detail: { en: 'German luxury sports car factory', ar: 'مصنع السيارات الرياضية الألمانية الفاخرة' } },
      { en: 'Range Rover', ar: 'رينج روفر', emoji: '🚙', detail: { en: 'British luxury off-road SUV', ar: 'سيارة دفع رباعي بريطانية فاخرة' } },
      { en: 'Jeep', ar: 'جيب', emoji: '🚙', detail: { en: 'Rugged American SUV built for rough terrain', ar: 'سيارة أمريكية قوية للطرق الوعرة' } },
      { en: 'Ford Mustang', ar: 'فورد موستانج', emoji: '🏁', detail: { en: 'Classic American muscle car since 1964', ar: 'سيارة عضلات أمريكية كلاسيكية منذ 1964' } },
      { en: 'VW Beetle', ar: 'فولكس فاجن بيتل', emoji: '🐞', w: 'Volkswagen Beetle', detail: { en: 'German icon shaped like a little bug', ar: 'أيقونة ألمانية بشكل خنفساء صغيرة' } },
      { en: 'Rolls-Royce', ar: 'رولز رويس', emoji: '👑', w: 'Rolls-Royce Motor Cars', detail: { en: 'Ultra-luxury British limousine', ar: 'ليموزين بريطاني فائق الفخامة' } },
      { en: 'Toyota Corolla', ar: 'تويوتا كورولا', emoji: '🚗', detail: { en: 'Japan’s best-selling reliable sedan', ar: 'سيدان يابانية موثوقة الأكثر مبيعًا في العالم' } },
      { en: 'Honda Civic', ar: 'هوندا سيفيك', emoji: '🚗', detail: { en: 'Reliable compact car from Japan', ar: 'سيارة يابانية عملية وموثوقة' } },
      { en: 'Audi', ar: 'أودي', emoji: '🚘', detail: { en: 'German brand famous for its four rings', ar: 'علامة ألمانية مشهورة بحلقاتها الأربع' } },
      { en: 'Nissan GT-R', ar: 'نيسان جي تي آر', emoji: '🏁', detail: { en: 'Japanese supercar nicknamed Godzilla', ar: 'سيارة يابانية خارقة تلقب بغودزيلا' } },
      { en: 'McLaren', ar: 'ماكلارين', emoji: '🏎️', w: 'McLaren Automotive', detail: { en: 'British legend of Formula 1 racing', ar: 'أسطورة بريطانية في سباقات الفورمولا 1' } },
      { en: 'Hyundai', ar: 'هيونداي', emoji: '🚗', w: 'Hyundai Motor Company', detail: { en: 'South Korea’s biggest automaker', ar: 'أكبر شركة سيارات في كوريا الجنوبية' } },
      { en: 'Kia', ar: 'كيا', emoji: '🚗', detail: { en: 'South Korean car brand growing fast worldwide', ar: 'علامة سيارات كورية جنوبية تنمو عالميًا' } },
      { en: 'Fiat 500', ar: 'فيات 500', emoji: '🚗', detail: { en: 'Tiny Italian city car', ar: 'سيارة مدينة صغيرة جدًا من إيطاليا' } },
      { en: 'Chevrolet Silverado', ar: 'شفروليه سيلفرادو', emoji: '🛻', detail: { en: 'Big American pickup truck', ar: 'شاحنة بيك أب أمريكية كبيرة' } }
    ]
  },
  countries: {
    icon: '🌍',
    label: { en: 'Countries', ar: 'دول' },
    items: [
      { en: 'Egypt', ar: 'مصر', emoji: '🇪🇬', iso: 'eg', detail: { en: 'North African land of the pyramids and the Nile', ar: 'بلاد الأهرام والنيل في شمال إفريقيا' } },
      { en: 'Saudi Arabia', ar: 'السعودية', emoji: '🇸🇦', iso: 'sa', detail: { en: 'Arabian homeland of Islam’s two holy mosques', ar: 'موطن الحرمين الشريفين في جزيرة العرب' } },
      { en: 'UAE', ar: 'الإمارات', emoji: '🇦🇪', iso: 'ae', detail: { en: 'Gulf federation that is home to Dubai', ar: 'اتحاد خليجي موطن دبي' } },
      { en: 'Japan', ar: 'اليابان', emoji: '🇯🇵', iso: 'jp', detail: { en: 'Island nation of technology and samurai', ar: 'جزر التكنولوجيا والساموراي' } },
      { en: 'France', ar: 'فرنسا', emoji: '🇫🇷', iso: 'fr', detail: { en: 'European home of Paris and the Eiffel Tower', ar: 'بلد باريس وبرج إيفل في أوروبا' } },
      { en: 'Brazil', ar: 'البرازيل', emoji: '🇧🇷', iso: 'br', detail: { en: 'South American giant of samba and football', ar: 'عملاق أمريكا الجنوبية للسامبا وكرة القدم' } },
      { en: 'USA', ar: 'أمريكا', emoji: '🇺🇸', iso: 'us', detail: { en: 'The United States, a union of 50 states', ar: 'الولايات المتحدة، اتحاد من 50 ولاية' } },
      { en: 'Germany', ar: 'ألمانيا', emoji: '🇩🇪', iso: 'de', detail: { en: 'European powerhouse famous for engineering', ar: 'القوة الأوروبية المشهورة بالمهندسين' } },
      { en: 'Italy', ar: 'إيطاليا', emoji: '🇮🇹', iso: 'it', detail: { en: 'Boot-shaped peninsula where Rome once ruled', ar: 'شبه جزيرة على شكل حذاء حكمتها روما قديمًا' } },
      { en: 'Turkey', ar: 'تركيا', emoji: '🇹🇷', iso: 'tr', detail: { en: 'Country bridging Asia and Europe', ar: 'بلد يربط بين آسيا وأوروبا' } },
      { en: 'Morocco', ar: 'المغرب', emoji: '🇲🇦', iso: 'ma', detail: { en: 'North African kingdom on the Atlantic coast', ar: 'مملكة شمال إفريقيا على ساحل الأطلسي' } },
      { en: 'Qatar', ar: 'قطر', emoji: '🇶🇦', iso: 'qa', detail: { en: 'Small rich Gulf peninsula hosting the World Cup 2022', ar: 'شبه جزيرة خليجية غنية استضافت مونديال 2022' } },
      { en: 'United Kingdom', ar: 'بريطانيا', emoji: '🇬🇧', iso: 'gb', detail: { en: 'Island kingdom ruled from London', ar: 'المملكة الجزرية التي تحكمها لندن' } },
      { en: 'Spain', ar: 'إسبانيا', emoji: '🇪🇸', iso: 'es', detail: { en: 'Iberian land of flamenco and bullfighting', ar: 'بلاد الفلامنكو ومصارعة الثيران' } },
      { en: 'India', ar: 'الهند', emoji: '🇮🇳', iso: 'in', detail: { en: 'Huge South Asian subcontinent of billions', ar: 'شبه قارة ضخمة يسكنها مليارات البشر' } },
      { en: 'China', ar: 'الصين', emoji: '🇨🇳', iso: 'cn', detail: { en: 'The world’s most populous country', ar: 'أكثر دول العالم عددًا في السكان' } },
      { en: 'Canada', ar: 'كندا', emoji: '🇨🇦', iso: 'ca', detail: { en: 'Vast maple land north of the USA', ar: 'مساحات القيقب الشاسعة شمال أمريكا' } },
      { en: 'South Korea', ar: 'كوريا الجنوبية', emoji: '🇰🇷', iso: 'kr', detail: { en: 'Tech-savvy Asian nation behind K-pop', ar: 'بلد التكنولوجيا الآسيوي وموطن الكيبوب' } },
      { en: 'Switzerland', ar: 'سويسرا', emoji: '🇨🇭', iso: 'ch', detail: { en: 'Alpine country of watches, banks and chocolate', ar: 'بلد الجبال والساعات والبنوك والشوكولاتة' } },
      { en: 'Greece', ar: 'اليونان', emoji: '🇬🇷', iso: 'gr', detail: { en: 'Ancient cradle of philosophy and the Olympics', ar: 'المهد القديم للفلسفة والأولمبياد' } }
    ]
  },
  football: {
    icon: '⚽',
    label: { en: 'Football Players', ar: 'لاعبو كرة القدم' },
    items: [
      { en: 'Lionel Messi', ar: 'ليونيل ميسي', emoji: '🇦🇷', iso: 'ar', detail: { en: 'Argentine legend who shined at Barcelona', ar: 'أسطورة الأرجنتين الذي تألق في برشلونة' } },
      { en: 'Cristiano Ronaldo', ar: 'كريستيانو رونالدو', emoji: '🇵🇹', iso: 'pt', detail: { en: 'Portuguese star known around the world as CR7', ar: 'النجم البرتغالي المعروف عالميًا بـ CR7' } },
      { en: 'Neymar Jr', ar: 'نيمار', emoji: '🇧🇷', iso: 'br', detail: { en: 'Brazilian magician of dribbling skills', ar: 'ساحر المراوغة البرازيلي' } },
      { en: 'Kylian Mbappé', ar: 'كيليان مبابي', emoji: '🇫🇷', iso: 'fr', detail: { en: 'French World Cup winner with lightning pace', ar: 'بطل العالم الفرنسي صاحب السرعة الخاطفة' } },
      { en: 'Erling Haaland', ar: 'إيرلينغ هالاند', emoji: '🇳🇴', iso: 'no', detail: { en: 'Norwegian goal-scoring machine', ar: 'آلة تسجيل الأهداف النرويجية' } },
      { en: 'Mohamed Salah', ar: 'محمد صلاح', emoji: '🇪🇬', iso: 'eg', detail: { en: 'Egyptian king who rules Anfield', ar: 'ملك مصر الذي يحكم ملعب آنفيلد' } },
      { en: 'Karim Benzema', ar: 'كريم بنزيما', emoji: '🇩🇿', iso: 'dz', detail: { en: 'French striker and Real Madrid legend', ar: 'الهداف الفرنسي وأسطورة ريال مدريد' } },
      { en: 'Luka Modrić', ar: 'لوكا مودريتش', emoji: '🇭🇷', iso: 'hr', detail: { en: 'Croatian midfield maestro', ar: 'ساحر وسط الملعب الكرواتي' } },
      { en: 'Pelé', ar: 'بيليه', emoji: '🇧🇷', iso: 'br', detail: { en: 'Brazilian icon who won three World Cups', ar: 'البرازيلي الذي رفع ثلاث مونديالات' } },
      { en: 'Diego Maradona', ar: 'دييغو مارادونا', emoji: '🇦🇷', iso: 'ar', detail: { en: 'Argentine genius of the 1986 World Cup', ar: 'عبقري الأرجنتين في مونديال 1986' } },
      { en: 'Zinedine Zidane', ar: 'زين الدين زيدان', emoji: '🇫🇷', iso: 'fr', detail: { en: 'Elegant French playmaker and later coach', ar: 'صانع الألعاب الفرنسي الأنيق ومدرب لاحقًا' } },
      { en: 'Ronaldinho', ar: 'رونالدينيو', emoji: '🇧🇷', iso: 'br', detail: { en: 'Smiling Brazilian who played with joy', ar: 'البرازيلي المبتسم الذي لعب بمرح' } },
      { en: 'Harry Kane', ar: 'هاري كين', emoji: '🇬🇧', iso: 'gb-eng', detail: { en: 'England captain and clinical finisher', ar: 'قائد المنتخب الإنجليزي وقناص المناطق' } },
      { en: 'Kevin De Bruyne', ar: 'كيفن دي بروين', emoji: '🇧🇪', iso: 'be', detail: { en: 'Belgian king of assists', ar: 'ملك التمريرات الحاسمة البلجيكي' } },
      { en: 'Vinícius Jr', ar: 'فينيسيوس جونيور', emoji: '🇧🇷', iso: 'br', w: 'Vinícius Júnior', detail: { en: 'Real Madrid’s dazzling Brazilian winger', ar: 'الجناح البرازيلي اللامع في ريال مدريد' } },
      { en: 'Jude Bellingham', ar: 'جود بيلينجهام', emoji: '🇬🇧', iso: 'gb-eng', detail: { en: 'Young English midfield superstar', ar: 'نجم خط الوسط الإنجليزي الشاب' } },
      { en: 'Sadio Mané', ar: 'ساديو ماني', emoji: '🇸🇳', iso: 'sn', detail: { en: 'Senegalese winger famous for speed', ar: 'جناح السنغال المشهور بسرعته' } },
      { en: 'Riyad Mahrez', ar: 'رياض محرز', emoji: '🇩🇿', iso: 'dz', detail: { en: 'Algerian wizard of Manchester City', ar: 'ساحر الجزائر في مانشستر سيتي' } },
      { en: 'Robert Lewandowski', ar: 'روبرت ليفاندوفسكي', emoji: '🇵🇱', iso: 'pl', detail: { en: 'Polish striker with a scoring machine', ar: 'الهداف البولندي صاحب الأرقام القياسية' } },
      { en: 'Eden Hazard', ar: 'إيدن هازارد', emoji: '🇧🇪', iso: 'be', detail: { en: 'Belgian winger famed for his Chelsea years', ar: 'الجناح البلجيكي المشهور سنواته في تشيلسي' } }
    ]
  },
  animals: {
    icon: '🦁',
    label: { en: 'Animals', ar: 'حيوانات' },
    items: [
      { en: 'Lion', ar: 'أسد', emoji: '🦁', detail: { en: 'King of the savanna with a loud roar', ar: 'ملك السافانا بصوت زئيره العالي' } },
      { en: 'Elephant', ar: 'فيل', emoji: '🐘', detail: { en: 'The largest animal walking on land', ar: 'أكبر حيوان يمشي على اليابسة' } },
      { en: 'Giraffe', ar: 'زرافة', emoji: '🦒', detail: { en: 'The tallest animal with a very long neck', ar: 'أطول حيوان بعنقه الطويل جدًا' } },
      { en: 'Dolphin', ar: 'دلفين', emoji: '🐬', detail: { en: 'Smart sea mammal that loves to play', ar: 'ثديي بحري ذكي يحب اللعب' } },
      { en: 'Eagle', ar: 'نسر', emoji: '🦅', detail: { en: 'Bird of prey with razor-sharp eyesight', ar: 'طائر جارح بنظر ثاقب حاد' } },
      { en: 'Shark', ar: 'قرش', emoji: '🦈', detail: { en: 'Feared predator roaming the oceans', ar: 'المفترس المخيف الذي يجوب المحيطات' } },
      { en: 'Penguin', ar: 'بطريق', emoji: '🐧', detail: { en: 'Tuxedo bird that cannot fly but swims well', ar: 'طائر أنيق لا يطير لكنه سبّاح ماهر' } },
      { en: 'Kangaroo', ar: 'كنغر', emoji: '🦘', detail: { en: 'Australian hopper carrying babies in a pouch', ar: 'القافز الأسترالي الذي يحمل صغاره في جيبه' } },
      { en: 'Panda', ar: 'باندا', emoji: '🐼', detail: { en: 'Black-and-white bear obsessed with bamboo', ar: 'دب أبيض وأسود مهووس بالخيزران' } },
      { en: 'Tiger', ar: 'نمر', emoji: '🐯', detail: { en: 'Striped big cat prowling Asia', ar: 'القط الكبير المخطط الذي يتخلل آسيا' } },
      { en: 'Wolf', ar: 'ذئب', emoji: '🐺', detail: { en: 'Pack hunter that howls at the moon', ar: 'صائد جماعي يعوي تحت القمر' } },
      { en: 'Owl', ar: 'بومة', emoji: '🦉', detail: { en: 'Night bird that can turn its head around', ar: 'طائر الليل القادر على تدوير رأسه' } },
      { en: 'Camel', ar: 'جمل', emoji: '🐪', detail: { en: 'Ship of the desert surviving without water long', ar: 'سفينة الصحراء التي تصمد دون ماء طويلًا' } },
      { en: 'Horse', ar: 'حصان', emoji: '🐴', detail: { en: 'Fast loyal companion of humans for ages', ar: 'رفيق الإنسان السريع المخلص عبر العصور' } },
      { en: 'Rabbit', ar: 'أرنب', emoji: '🐰', detail: { en: 'Long-eared jumper that loves carrots', ar: 'القافز ذو الأذنين الطويلتين وعاشق الجزر' } },
      { en: 'Snake', ar: 'ثعبان', emoji: '🐍', detail: { en: 'Legless reptile that slides silently', ar: 'زاحف بلا أرجل ينزلق بصمت' } },
      { en: 'Octopus', ar: 'أخطبوط', emoji: '🐙', detail: { en: 'Eight-armed genius of the deep sea', ar: 'عبقري أعماق البحر بثمانية أذرع' } },
      { en: 'Butterfly', ar: 'فراشة', emoji: '🦋', detail: { en: 'Colorful insect flying with beautiful wings', ar: 'حشرة ملونة تطير بأجنحة جميلة' } },
      { en: 'Cat', ar: 'قطة', emoji: '🐱', detail: { en: 'Beloved independent pet that purrs', ar: 'حيوان أليف محبوب مستقل يخرخر' } },
      { en: 'Dog', ar: 'كلب', emoji: '🐶', detail: { en: 'Human’s best friend for thousands of years', ar: 'أفضل صديق للإنسان منذ آلاف السنين' } }
    ]
  },
  movies: {
    icon: '🎬',
    label: { en: 'Movies', ar: 'أفلام' },
    items: [
      { en: 'Titanic', ar: 'تيتانيك', emoji: '🚢', w: 'Titanic (1997 film)', detail: { en: 'Romance aboard the ship that sank in 1912', ar: 'قصة حب على متن السفينة التي غرقت عام 1912' } },
      { en: 'Avatar', ar: 'أفانتار', emoji: '🌳', detail: { en: 'Blue aliens defending their moon Pandora', ar: 'كائنات زرقاء تدافع عن قمر باندورا' } },
      { en: 'The Lion King', ar: 'الأسد الملك', emoji: '🦁', detail: { en: 'Animated tale of the lion cub Simba', ar: 'حكاية متحركة عن شبل الأسد سيمبا' } },
      { en: 'Inception', ar: 'بداية', emoji: '🌀', detail: { en: 'Thieves stealing ideas from dreams', ar: 'لصوص يسرقون الأفكار من داخل الأحلام' } },
      { en: 'Jurassic Park', ar: 'حديقة الديناصورات', emoji: '🦖', detail: { en: 'Dinosaur theme park that loses control', ar: 'حديقة ديناصورات تفلت من السيطرة' } },
      { en: 'The Matrix', ar: 'المصفوفة', emoji: '🕶️', detail: { en: 'Hacker learns reality is a simulation', ar: 'هاكر يكتشف أن الواقع مجرد محاكاة' } },
      { en: 'Frozen', ar: 'المجمدة', emoji: '❄️', detail: { en: 'Animated musical of ice queen sisters', ar: 'عمل متحرك موسيقي عن أختين وملكة الثلج' } },
      { en: 'Spider-Man', ar: 'الرجل العنكبوت', emoji: '🕷️', detail: { en: 'Teen hero swinging webs through New York', ar: 'فتى بطل يتأرجح بخيوط العنكبوت في نيويورك' } },
      { en: 'Harry Potter', ar: 'هاري بوتر', emoji: '⚡', detail: { en: 'Young wizard studying at Hogwarts', ar: 'ساحر صغير يدرس في مدرسة هوغوورتس' } },
      { en: 'Toy Story', ar: 'قصة لعبة', emoji: '🤠', detail: { en: 'Toys secretly come alive when humans leave', ar: 'ألعاب تنبض سرًا بالحياة حين يغادر البشر' } },
      { en: 'Interstellar', ar: 'بين النجوم', emoji: '🚀', w: 'Interstellar (film)', detail: { en: 'Astronauts searching space for a new Earth', ar: 'رواد فضاء يبحثون في الفلك عن أرض جديدة' } },
      { en: 'The Godfather', ar: 'العراب', emoji: '🎩', detail: { en: 'Epic saga of an Italian mafia family', ar: 'ملحمة عائلة المافيا الإيطالية' } },
      { en: 'Finding Nemo', ar: 'في بحث عن نيمو', emoji: '🐠', detail: { en: 'Clownfish dad crossing the ocean for his son', ar: 'أب سمكة يعبر المحيط بحثًا عن ابنه' } },
      { en: 'Fast & Furious', ar: 'السريع والغاضب', emoji: '🏎️', detail: { en: 'Street racers whose crew became family', ar: 'متسابقو الشوارع الذين أصبحوا عائلة' } },
      { en: 'Joker', ar: 'الجوكر', emoji: '🃏', detail: { en: 'Dark origin story of Gotham’s clown villain', ar: 'قصة نشأة الشرير الضاحك في غوثام' } },
      { en: 'Batman', ar: 'باتمان', emoji: '🦇', detail: { en: 'The dark knight protecting Gotham City', ar: 'الفارس المظلم حامي مدينة غوثام' } },
      { en: 'Star Wars', ar: 'حرب النجوم', emoji: '🌌', detail: { en: 'Galactic war between Jedi and Sith', ar: 'حرب المجرات بين الجيداي والسيث' } },
      { en: 'Pirates of the Caribbean', ar: 'قراصنة الكاريبي', emoji: '🏴‍☠️', detail: { en: 'Captain Jack Sparrow’s sea adventures', ar: 'مغامرات الكابتن جاك سبارو في البحار' } },
      { en: 'Shrek', ar: 'شريك', emoji: '👹', detail: { en: 'Comedy about a grumpy green ogre', ar: 'كوميديا عن الوغري الأخضر سريع الغضب' } },
      { en: 'Gladiator', ar: 'المصارع', emoji: '⚔️', detail: { en: 'Roman general seeking revenge in the arena', ar: 'جنرال روماني يطلب الانتقام في الحلبة' } }
    ]
  },
  brands: {
    icon: '📱',
    label: { en: 'Brands', ar: 'علامات تجارية' },
    items: [
      { en: 'Apple', ar: 'أبل', emoji: '🍎', w: 'Apple Inc.', detail: { en: 'Maker of the iPhone from California', ar: 'صانعة الآيفون من كاليفورنيا' } },
      { en: 'Nike', ar: 'نايكي', emoji: '✔️', w: 'Nike, Inc.', detail: { en: 'Sportswear giant with the swoosh logo', ar: 'عملاق الملابس الرياضية بشعار السوش' } },
      { en: 'Adidas', ar: 'أديداس', emoji: '👟', detail: { en: 'German sportswear brand with three stripes', ar: 'علامة رياضية ألمانية بخطوطها الثلاثة' } },
      { en: 'Samsung', ar: 'سامسونج', emoji: '📱', detail: { en: 'South Korean electronics empire', ar: 'إمبراطورية الإلكترونيات الكورية الجنوبية' } },
      { en: 'Coca-Cola', ar: 'كوكا كولا', emoji: '🥤', detail: { en: 'World-famous fizzy drink in a red can', ar: 'المشروب الغازي الشهير بالعلبة الحمراء' } },
      { en: "McDonald's", ar: 'ماكدونالدز', emoji: '🍟', detail: { en: 'Fast-food chain with golden arches', ar: 'سلسلة الوجبات السريعة بأقواسها الذهبية' } },
      { en: 'Amazon', ar: 'أمازون', emoji: '📦', w: 'Amazon (company)', detail: { en: 'Giant online store delivering everything', ar: 'المتجر الإلكتروني العملاق الذي يوصّل كل شيء' } },
      { en: 'Google', ar: 'جوجل', emoji: '🔍', detail: { en: 'The search engine everyone asks questions', ar: 'محرك البحث الذي يسأله الجميع كل شيء' } },
      { en: 'Starbucks', ar: 'ستاربكس', emoji: '☕', detail: { en: 'Coffee chain born in Seattle', ar: 'سلسلة القهوة التي وُلدت في سياتل' } },
      { en: 'IKEA', ar: 'ايكيا', emoji: '🪑', detail: { en: 'Swedish furniture you assemble yourself', ar: 'أثاث سويدي تركبه بنفسك' } },
      { en: 'Gucci', ar: 'جوتشي', emoji: '👜', detail: { en: 'Italian luxury fashion house', ar: 'دار الأزياء الإيطالية الفاخرة' } },
      { en: 'Rolex', ar: 'رولكس', emoji: '⌚', detail: { en: 'Swiss luxury watches symbolizing success', ar: 'ساعات سويسرية فاخرة ترمز للنجاح' } },
      { en: 'Lego', ar: 'ليغو', emoji: '🧱', detail: { en: 'Danish plastic bricks you build worlds with', ar: 'مكعبات دانماركية تبني بها عوالم كاملة' } },
      { en: 'Disney', ar: 'ديزني', emoji: '🏰', detail: { en: 'Magic castle of cartoons and theme parks', ar: 'قلعة السحر للكرتون والمدن الترفيهية' } },
      { en: 'Sony', ar: 'سوني', emoji: '🎮', detail: { en: 'Japanese giant behind PlayStation', ar: 'العملاق الياباني صاحب بلايستيشن' } },
      { en: 'Netflix', ar: 'نتفليكس', emoji: '🍿', detail: { en: 'Streaming app full of series and films', ar: 'تطبيق البث المليء بالمسلسلات والأفلام' } },
      { en: 'Zara', ar: 'زارا', emoji: '👗', w: 'Zara (retailer)', detail: { en: 'Spanish fast-fashion clothing store', ar: 'متجر الملابس الإسباني السريع الموضة' } },
      { en: 'Puma', ar: 'بوما', emoji: '🐆', detail: { en: 'German sport brand named after the wild cat', ar: 'علامة رياضية ألمانية تحمل اسم القط البري' } },
      { en: 'Chanel', ar: 'شانيل', emoji: '💄', detail: { en: 'French luxury perfume and fashion house', ar: 'دار العطور والأزياء الفرنسية الفاخرة' } },
      { en: 'Red Bull', ar: 'ريد بول', emoji: '🐂', detail: { en: 'Energy drink that “gives you wings”', ar: 'مشروب الطاقة الذي يمنحك الأجنحة' } }
    ]
  },
  activities: {
    icon: '🎯',
    label: { en: 'Activities', ar: 'أنشطة' },
    items: [
      { en: 'Football', ar: 'كرة القدم', emoji: '⚽', w: 'Association football', detail: { en: 'Team sport played with one ball and two goals', ar: 'لعبة جماعية بكرة واحدة ومرميين' } },
      { en: 'Basketball', ar: 'كرة السلة', emoji: '🏀', detail: { en: 'Shooting a ball through raised hoops', ar: 'رمي الكرة داخل سلّات مرتفعة' } },
      { en: 'Swimming', ar: 'السباحة', emoji: '🏊', detail: { en: 'Moving through water using arms and legs', ar: 'التحرك داخل الماء بالذراعين والساقين' } },
      { en: 'Camping', ar: 'التخييم', emoji: '🏕️', detail: { en: 'Sleeping in tents out in nature', ar: 'النوم في خيام وسط الطبيعة' } },
      { en: 'Fishing', ar: 'الصيد', emoji: '🎣', detail: { en: 'Catching fish patiently with a rod', ar: 'اصطياد السمك بصبر وبالصنارة' } },
      { en: 'Party', ar: 'الحفلة', emoji: '🎉', detail: { en: 'Gathering with music, dancing and fun', ar: 'تجمع بالموسيقى والرقص والمرح' } },
      { en: 'Dancing', ar: 'الرقص', emoji: '💃', w: 'Dance', detail: { en: 'Moving your body to the rhythm of music', ar: 'تحريك الجسم بإيقاع الموسيقى' } },
      { en: 'Cooking', ar: 'الطبخ', emoji: '🍳', detail: { en: 'Preparing food in the kitchen', ar: 'تحضير الطعام في المطبخ' } },
      { en: 'Painting', ar: 'الرسم', emoji: '🎨', detail: { en: 'Creating art with brushes and colors', ar: 'صنع الفن بالفرشاة والألوان' } },
      { en: 'Singing', ar: 'الغناء', emoji: '🎤', detail: { en: 'Making music with your own voice', ar: 'صناعة الموسيقى بصوتك وحده' } },
      { en: 'Hiking', ar: 'المشي الجبلي', emoji: '🥾', detail: { en: 'Long walks up mountains and trails', ar: 'مشيات طويلة في الجبال والمسارات' } },
      { en: 'Cycling', ar: 'ركوب الدراجات', emoji: '🚴', detail: { en: 'Riding bikes on two wheels', ar: 'قيادة الدراجات ذات العجلتين' } },
      { en: 'Yoga', ar: 'اليوغا', emoji: '🧘', detail: { en: 'Calm stretching exercise for body and mind', ar: 'تمارين هادئة لمرونة الجسم وصفاء الذهن' } },
      { en: 'Chess', ar: 'الشطرنج', emoji: '♟️', detail: { en: 'Strategy board battle of kings and queens', ar: 'معركة ذكية على الرقعة بين الملوك والوزراء' } },
      { en: 'Video Gaming', ar: 'ألعاب الفيديو', emoji: '🎮', w: 'Video game', detail: { en: 'Playing electronic games on screens', ar: 'لعب الألعاب الإلكترونية على الشاشات' } },
      { en: 'Reading', ar: 'القراءة', emoji: '📖', w: 'Book', detail: { en: 'Traveling into stories through books', ar: 'السفر إلى الحكايات عبر الكتب' } },
      { en: 'Gardening', ar: 'البستنة', emoji: '🌱', detail: { en: 'Growing plants, flowers and vegetables', ar: 'زراعة النباتات والزهور والخضار' } },
      { en: 'Shopping', ar: 'التسوق', emoji: '🛍️', detail: { en: 'Buying things from malls and markets', ar: 'شراء الأغراض من المولات والأسواق' } },
      { en: 'Traveling', ar: 'السفر', emoji: '✈️', w: 'Travel', detail: { en: 'Discovering new places far from home', ar: 'اكتشاف أماكن جديدة بعيدة عن الوطن' } },
      { en: 'Photography', ar: 'التصوير', emoji: '📸', detail: { en: 'Capturing special moments with a camera', ar: 'توثيق اللحظات الخاصة بالكاميرا' } }
    ]
  },
  series: {
    icon: '📺',
    label: { en: 'TV Series', ar: 'مسلسلات' },
    items: [
      { en: 'Friends', ar: 'فرندز', emoji: '☕', detail: { en: 'Six friends hanging out in a New York coffee shop', ar: 'ستة أصدقاء يتجمعون في مقهى نيويوركي' } },
      { en: 'Breaking Bad', ar: 'بريكينغ باد', emoji: '⚗️', detail: { en: 'Chemistry teacher becomes a drug maker', ar: 'مدرس كيمياء يدخل عالم تصنيع المخدرات' } },
      { en: 'Game of Thrones', ar: 'صراع العروش', emoji: '🐉', detail: { en: 'Noble houses battling for one iron throne', ar: 'عائلات نبيلة تتنازع على العرش الحديدي' } },
      { en: 'Stranger Things', ar: 'سترانجر ثينغز', emoji: '🔦', detail: { en: 'Kids facing supernatural secrets under their town', ar: 'أطفال يواجهون أسرارًا خارقة تحت مدينتهم' } },
      { en: 'Money Heist', ar: 'البيت من ورق', emoji: '🎭', detail: { en: 'Robbers in red suits and Dalí masks', ar: 'لصوص بالبدلات الحمراء وأقنعة دالي' } },
      { en: 'Squid Game', ar: 'لعبة الحبار', emoji: '🦑', detail: { en: 'Desperate players risk deadly childhood games', ar: 'لاعبون يائسون يخاطرون بألعاب طفولة قاتلة' } },
      { en: 'The Witcher', ar: 'الويتشر', emoji: '🗡️', detail: { en: 'Monster hunter earning coin in a dark world', ar: 'صائد وحوش يجني المال في عالم مظلم' } },
      { en: 'Prison Break', ar: 'الهرب من السجن', emoji: '⛓️', detail: { en: 'Brother plans an elaborate prison escape', ar: 'أخ يؤمّر لهروب محكم من السجن' } },
      { en: 'Peaky Blinders', ar: 'بيكي بليندرز', emoji: '🎩', detail: { en: 'Birmingham gangster family after WWI', ar: 'عائلة عصابات في برمنجهام بعد الحرب العالمية الأولى' } },
      { en: 'Dark', ar: 'دارك', emoji: '🕳️', w: 'Dark (German TV series)', detail: { en: 'Time-travel mysteries in a small German town', ar: 'أسرار سفر عبر الزمن في بلدة ألمانية صغيرة' } },
      { en: 'The Office', ar: 'ذا أوفيس', emoji: '📎', detail: { en: 'Funny fake documentary about office life', ar: 'كوميديا وثائقية ساخرة عن حياة المكتب' } },
      { en: 'Sherlock', ar: 'شيرلوك', emoji: '🔎', w: 'Sherlock (TV series)', detail: { en: 'The famous detective solving crimes in modern London', ar: 'المحقق الشهير يحل الجرائم في لندن الحديثة' } },
      { en: 'Black Mirror', ar: 'المرآة السوداء', emoji: '📱', detail: { en: 'Dark standalone tales about technology', ar: 'حكايات مستقلة مظلمة عن التكنولوجيا' } },
      { en: 'Wednesday', ar: 'ونزداي', emoji: '🖤', w: 'Wednesday (TV series)', detail: { en: 'Addams girl solving mysteries at her school', ar: 'ابنة عائلة آدامز تحل ألغاز مدرستها الغريبة' } },
      { en: 'Better Call Saul', ar: 'بتر كول سول', emoji: '⚖️', detail: { en: 'Story of the lawyer before Breaking Bad', ar: 'قصة المحامي قبل أحداث بريكينغ باد' } },
      { en: 'Narcos', ar: 'ناركوس', emoji: '🕵️', detail: { en: 'The hunt for Colombia’s drug lords', ar: 'مطاردة كبار تجار المخدرات في كولومبيا' } },
      { en: 'The Crown', ar: 'التاج', emoji: '👑', w: 'The Crown (TV series)', detail: { en: 'The story of Britain’s royal family', ar: 'قصة العائلة المالكة البريطانية' } },
      { en: 'Mr. Robot', ar: 'مستر روبوت', emoji: '💻', detail: { en: 'Hacker fighting giant corporations by night', ar: 'هاكر يقاوم الشركات الكبرى ليلاً' } },
      { en: 'Bab Al Hara', ar: 'باب الحارة', emoji: '🕌', detail: { en: 'Drama set in an old Damascus neighborhood', ar: 'دراما في حارة دمشقية قديمة' } },
      { en: 'The Rumor', ar: 'الشائعة', emoji: '🗣️', detail: { en: 'Drama about gossip spreading through a community', ar: 'دراما عن إشاعة تتسرب بين أهل الحي' } }
    ]
  },
  superheroes: {
    icon: '🦸',
    label: { en: 'Superheroes', ar: 'أبطال خارقون' },
    items: [
      { en: 'Spider-Man', ar: 'سبايدرمان', emoji: '🕷️', detail: { en: 'Teen hero swinging webs across New York', ar: 'بطل فتى يتأرجح بخيوطه عبر نيويورك' } },
      { en: 'Iron Man', ar: 'آيرون مان', emoji: '🦾', detail: { en: 'Billionaire genius in a high-tech flying suit', ar: 'ملياردير عبقري ببدلة طائرة تقنية' } },
      { en: 'Thor', ar: 'ثور', emoji: '🔨', w: 'Thor (Marvel Cinematic Universe)', detail: { en: 'Norse god wielding the mighty hammer Mjölnir', ar: 'إله الأساطير النوردية بمطرقة ميولنير العظيمة' } },
      { en: 'Black Panther', ar: 'البانثر الأسود', emoji: '🐆', w: 'Black Panther (character)', detail: { en: 'King and protector of Wakanda', ar: 'ملك واكاندا وحاميها' } },
      { en: 'Captain America', ar: 'كابتن أمريكا', emoji: '🛡️', detail: { en: 'Super soldier with an unbreakable round shield', ar: 'جندي خارق بدرعه المستدير الذي لا ينكسر' } },
      { en: 'Hulk', ar: 'هالك', emoji: '💪', detail: { en: 'Scientist turning into a giant green rage monster', ar: 'عالم يتحول لعملاق أخضر غاضب' } },
      { en: 'Batman', ar: 'باتمان', emoji: '🦇', detail: { en: 'Millionaire vigilante guarding Gotham at night', ar: 'مليونيري يحمي غوثام تحت جنح الليل' } },
      { en: 'Superman', ar: 'سوبرمان', emoji: '🦸', detail: { en: 'Caped hero from the destroyed planet Krypton', ar: 'البطل المغطى القادم من كوكب كريبتون المدمَّر' } },
      { en: 'Wonder Woman', ar: 'المرأة المعجزة', emoji: '⚔️', detail: { en: 'Amazon warrior princess with a magic lasso', ar: 'أميرة محاربة من الأمازون بسوطها السحري' } },
      { en: 'The Flash', ar: 'ذا فلاش', emoji: '⚡', detail: { en: 'Fastest man alive in a red suit', ar: 'أسرع إنسان على قيد الحياة بالبدلة الحمراء' } },
      { en: 'Joker', ar: 'الجوكر', emoji: '🤡', w: 'Joker (character)', detail: { en: 'Gotham’s laughing clown villain', ar: 'شرير غوثام الضاحك بمظهر المهرج' } },
      { en: 'Deadpool', ar: 'ديدبول', emoji: '🗡️', detail: { en: 'Mercenary cracking jokes with twin swords', ar: 'قاتل مأجور مرح بسيفين توأم' } },
      { en: 'Wolverine', ar: 'وولفرين', emoji: '🐺', detail: { en: 'Mutant with metal claws bursting from his hands', ar: 'متحوّل بمخالب معدنية تنبثق من يديه' } },
      { en: 'Aquaman', ar: 'أكوامان', emoji: '🌊', detail: { en: 'King who commands all creatures of the sea', ar: 'الملك الذي يأتمر بمخلوقات البحر كلها' } },
      { en: 'Doctor Strange', ar: 'دكتور سترينج', emoji: '🔮', detail: { en: 'Sorcerer opening magical portals anywhere', ar: 'ساحر يفتح أبوابًا سحرية في أي مكان' } }
    ]
  },
  historic: {
    icon: '🏛️',
    label: { en: 'Historic Figures', ar: 'شخصيات تاريخية' },
    items: [
      { en: 'Albert Einstein', ar: 'ألبرت أينشتاين', emoji: '🧠', detail: { en: 'Genius of relativity, father of E=mc²', ar: 'عبقري النسبية وصاحب معادلة E=mc²' } },
      { en: 'Nikola Tesla', ar: 'نيكولا تسلا', emoji: '🔌', detail: { en: 'Inventor who tamed alternating current', ar: 'المخترع الذي روّض التيار المتردد' } },
      { en: 'Isaac Newton', ar: 'إسحاق نيوتن', emoji: '🍎', detail: { en: 'Discovered gravity thanks to a falling apple', ar: 'اكتشف الجاذبية بفضل تفاحة ساقطة' } },
      { en: 'Cleopatra', ar: 'كليوباترا', emoji: '👑', detail: { en: 'Last queen of ancient Egypt', ar: 'آخر ملكات مصر القديمة' } },
      { en: 'Napoleon Bonaparte', ar: 'نابليون بونابرت', emoji: '🎖️', detail: { en: 'French emperor who conquered much of Europe', ar: 'إمبراطور فرنسا الذي غزا معظم أوروبا' } },
      { en: 'Adolf Hitler', ar: 'أدولف هتلر', emoji: '🪖', detail: { en: 'Dictator of Nazi Germany during WWII', ar: 'ديكتاتور ألمانيا النازية في الحرب العالمية الثانية' } },
      { en: 'George Washington', ar: 'جورج واشنطن', emoji: '🇺🇸', detail: { en: 'First president of the United States', ar: 'أول رؤساء الولايات المتحدة الأمريكية' } },
      { en: 'Abraham Lincoln', ar: 'أبراهام لينكولن', emoji: '🎩', detail: { en: 'President who ended slavery in America', ar: 'الرئيس الذي أنهى العبودية في أمريكا' } },
      { en: 'Julius Caesar', ar: 'يوليوس قيصر', emoji: '🏛️', detail: { en: 'Roman leader betrayed by his senators', ar: 'القائد الروماني الذي غدر به أعضاء مجلس الشيوخ' } },
      { en: 'Leonardo da Vinci', ar: 'ليوناردو دافنشي', emoji: '🖼️', detail: { en: 'Artist of the Mona Lisa and secret inventor', ar: 'رسام الموناليزا والمخترع السري' } },
      { en: 'Mahatma Gandhi', ar: 'المهاتما غاندي', emoji: '🕊️', detail: { en: 'Peaceful liberator of India', ar: 'المحرر السلمي للهند' } },
      { en: 'Martin Luther King Jr', ar: 'مارتن لوثر كينغ', emoji: '📢', detail: { en: 'Civil rights leader behind “I have a dream”', ar: 'قائد حقوق المدنية صاحب خطاب «حلم لدي»' } },
      { en: 'Saladin', ar: 'صلاح الدين الأيوبي', emoji: '⚔️', detail: { en: 'Muslim general who retook Jerusalem', ar: 'القائد المسلم الذي حرر القدس' } },
      { en: 'Ibn Sina', ar: 'ابن سينا', emoji: '📚', detail: { en: 'Father of medicine in Islamic golden age', ar: 'أبو الطب في العصر الذهبي الإسلامي' } },
      { en: 'Al-Khwarizmi', ar: 'الخوارزمي', emoji: '➗', detail: { en: 'Founder of algebra and algorithms', ar: 'مؤسس علم الجبر والخوارزميات' } },
      { en: 'Ibn Battuta', ar: 'ابن بطوطة', emoji: '🧭', detail: { en: 'History’s greatest Muslim traveler', ar: 'أعظم رحالة في التاريخ الإسلامي' } },
      { en: 'Alexander the Great', ar: 'الإسكندر المقدوني', emoji: '🛡️', detail: { en: 'Young Macedonian who conquered the ancient world', ar: 'الفتى المقدوني الذي غزا العالم القديم' } },
      { en: 'Winston Churchill', ar: 'وينستون تشرشل', emoji: '🇬🇧', detail: { en: 'Britain’s prime minister during WWII', ar: 'رئيس وزراء بريطانيا في الحرب العالمية الثانية' } },
      { en: 'Queen Elizabeth II', ar: 'الملكة إليزابيث الثانية', emoji: '👸', w: 'Elizabeth II', detail: { en: 'Britain’s longest-reigning queen', ar: 'أطول ملكات بريطانيا مدة حكمًا' } },
      { en: 'Genghis Khan', ar: 'جنكيز خان', emoji: '🐎', detail: { en: 'Mongol conqueror who united the steppes', ar: 'فاتح المغول الذي وحّد السهوب' } }
    ]
  }
};

/* Vague per-category hints given to the imposter (50% chance) */
const HINTS = {
  food: [
    { en: 'You can eat it.', ar: 'يمكنك أكلها.' },
    { en: 'You often find it in restaurants.', ar: 'نجدها غالبًا في المطاعم.' },
    { en: 'It is prepared in a kitchen.', ar: 'تُحضَّر في المطبخ.' },
    { en: 'It tastes delicious.', ar: 'طعمها لذيذ جدًا.' },
    { en: 'You might have it for lunch.', ar: 'قد تأكلها في الغداء.' }
  ],
  cars: [
    { en: 'It has four wheels.', ar: 'لها أربع عجلات.' },
    { en: 'You can drive it.', ar: 'يمكنك قيادتها.' },
    { en: 'It needs fuel or a charge.', ar: 'تحتاج وقودًا أو شحنًا.' },
    { en: 'You see them on the road every day.', ar: 'نراها في الشوارع كل يوم.' },
    { en: 'It has an engine inside.', ar: 'بداخلها محرك.' }
  ],
  countries: [
    { en: 'You can find it on a map.', ar: 'تجدها على الخريطة.' },
    { en: 'It has its own flag.', ar: 'لها علم خاص.' },
    { en: 'Millions of people live there.', ar: 'يعيش فيها ملايين الناس.' },
    { en: 'It has cities and borders.', ar: 'لها مدن وحدود.' },
    { en: 'It is a place on Earth.', ar: 'إنها مكان على الأرض.' }
  ],
  football: [
    { en: 'A famous sports star.', ar: 'نجم رياضي مشهور.' },
    { en: 'They play with a ball.', ar: 'يلعب بالكرة.' },
    { en: 'Millions of fans watch them.', ar: 'ملايين المشجعين يتابعونه.' },
    { en: 'Scoring goals is their job.', ar: 'تسجيل الأهداف هو عمله.' },
    { en: 'They wear a team jersey.', ar: 'يرتدي قميص فريق.' }
  ],
  animals: [
    { en: 'It is a living creature.', ar: 'إنه كائن حي.' },
    { en: 'You can find it in nature.', ar: 'تجده في الطبيعة.' },
    { en: 'Some people keep one at home.', ar: 'البعض يربيه في البيت.' },
    { en: 'It moves around on its own.', ar: 'يتحرك من تلقاء نفسه.' },
    { en: 'You might see it at the zoo.', ar: 'قد تراه في حديقة الحيوان.' }
  ],
  movies: [
    { en: 'You watch it on a screen.', ar: 'تشاهده على الشاشة.' },
    { en: 'It tells a story.', ar: 'يحكي قصة.' },
    { en: 'There are actors in it.', ar: 'يشارك فيه ممثلون.' },
    { en: 'You can stream it at home.', ar: 'يمكن مشاهدته في البيت.' },
    { en: 'It has credits at the end.', ar: 'له شارات نهاية وممثلون.' }
  ],
  brands: [
    { en: 'Its logo is everywhere.', ar: 'شعاره في كل مكان.' },
    { en: 'It sells products.', ar: 'يبيع منتجات.' },
    { en: 'You probably own something from it.', ar: 'غالبًا تملك شيئًا منه.' },
    { en: 'You see it in ads and malls.', ar: 'تراه في الإعلانات والمولات.' },
    { en: 'A company known worldwide.', ar: 'شركة معروفة عالميًا.' }
  ],
  activities: [
    { en: 'People do it in their free time.', ar: 'يمارسها الناس في وقت فراغهم.' },
    { en: 'It can be fun or relaxing.', ar: 'قد تكون ممتعة أو مريحة.' },
    { en: 'It fills your leisure time.', ar: 'تملأ وقت فراغك.' },
    { en: 'Some need equipment, some do not.', ar: 'بعضها يحتاج أدوات وبعضها لا.' },
    { en: 'Practice makes you better at it.', ar: 'التمرين يجعلك أفضل فيها.' }
  ],
  series: [
    { en: 'You watch it episode by episode.', ar: 'تشاهده حلقة بعد حلقة.' },
    { en: 'It has seasons and episodes.', ar: 'له مواسم وحلقات.' },
    { en: 'Streaming apps are full of them.', ar: 'تطبيقات البث مليئة بها.' },
    { en: 'Characters grow across episodes.', ar: 'شخصياته تتطور عبر الحلقات.' },
    { en: 'Perfect for binge-watching at night.', ar: 'مثالية للمشاهدة المتواصلة ليلاً.' }
  ],
  superheroes: [
    { en: 'A fictional character with powers.', ar: 'شخصية خيالية تمتلك قوى.' },
    { en: 'They wear costumes and masks.', ar: 'يرتدون أزياء وأقنعة.' },
    { en: 'They save people in comics and films.', ar: 'ينقذون الناس في القصص المصورة والأفلام.' },
    { en: 'Comic books made them famous.', ar: 'القصص المصورة جعلتهم مشهورين.' },
    { en: 'Some protect an entire city.', ar: 'بعضهم يحمي مدينة كاملة.' }
  ],
  historic: [
    { en: 'Their name lives in history books.', ar: 'اسمه باقٍ في كتب التاريخ.' },
    { en: 'They changed the world we know.', ar: 'غيّر العالم الذي نعرفه.' },
    { en: 'You study about them at school.', ar: 'تدرس عنه في المدرسة.' },
    { en: 'They lived long before us.', ar: 'عاش قبلنا بقرون طويلة.' },
    { en: 'Museums and books remember them.', ar: 'المتاحف والكتب تذكره.' }
  ]
};

/* ============================================================
   UI strings
   ============================================================ */

const STRINGS = {
  en: {
    title: 'Who is the Imposter?',
    tagline: 'A party game of secrets & suspicion — pass one phone around!',
    players: 'Players',
    playerN: 'Player {n}',
    categories: 'Categories',
    randomMix: 'Random Mix',
    start: 'Start Game',
    passTo: 'Pass the device to…',
    tapShow: "I'm ready — show my card",
    stepOf: '{x} / {n}',
    frontStamp: 'TOP SECRET',
    tapToReveal: 'Tap the card to reveal',
    youAreCrew: "You're a Crew Member!",
    secretIs: 'The secret thing is:',
    youAreImposter: 'You are the IMPOSTER!',
    noClue: 'No clues for you — bluff your way through!',
    hintLabel: 'Your only clue:',
    hideNext: 'Hide & Next Player',
    discussionTitle: 'Discussion Time!',
    discussionTip: 'Describe what you saw… but stay vague if you are bluffing. Then vote out the imposter!',
    startTimer: 'Start Timer',
    pauseTimer: 'Pause',
    resumeTimer: 'Resume',
    goToVote: 'Skip to Voting',
    votingTitle: 'Vote: Who is the Imposter?',
    votingTip: 'Discuss, then tap ＋ for every vote a player receives.',
    revealBtn: 'Reveal the Imposter',
    imposterWas: 'The imposter was…',
    secretWas: 'and the secret element was',
    mostVotes: 'Most votes: {name} ({n})',
    noVotesCast: 'No votes were cast.',
    playAgain: 'Play Again (same crew)',
    newGame: 'New Setup',
    crewBadge: 'CREW',
    imposterBadge: 'IMPOSTER'
  },
  ar: {
    title: 'من هو المنتحل؟',
    tagline: 'لعبة حفلات من الأسرار والشك — مرّروا هاتفًا واحدًا بينكم!',
    players: 'اللاعبون',
    playerN: 'لاعب {n}',
    categories: 'الفئات',
    randomMix: 'خلطة عشوائية',
    start: 'ابدأ اللعبة',
    passTo: 'مرّر الجهاز إلى…',
    tapShow: 'أنا جاهز — اعرض بطاقتي',
    stepOf: '{x} / {n}',
    frontStamp: 'سري للغاية',
    tapToReveal: 'اضغط على البطاقة لكشفها',
    youAreCrew: 'أنت من الفريق!',
    secretIs: 'الشيء السري هو:',
    youAreImposter: 'أنت المنتحل!',
    noClue: 'لا تلميحات لك — ادّعي أنك تعرف!',
    hintLabel: 'تلميحك الوحيد:',
    hideNext: 'إخفاء والانتقال للتالي',
    discussionTitle: 'وقت النقاش!',
    discussionTip: 'صفوا ما رأيتم… لكن أبقوا الغموض إن كنتم تمثلون. ثم صوّتوا لطرد المنتحل!',
    startTimer: 'ابدأ العدّ',
    pauseTimer: 'إيقاف مؤقت',
    resumeTimer: 'استئناف',
    goToVote: 'تجاوز إلى التصويت',
    votingTitle: 'تصويت: من هو المنتحل؟',
    votingTip: 'ناقشوا، ثم اضغطوا ＋ عن كل صوت يحصل عليه اللاعب.',
    revealBtn: 'اكشف المنتحل',
    imposterWas: 'المنتحل كان…',
    secretWas: 'والعنصر السري كان',
    mostVotes: 'الأكثر تصويتًا: {name} ({n})',
    noVotesCast: 'لم يُصوَّت لأحد.',
    playAgain: 'العب مجددًا (نفس اللاعبين)',
    newGame: 'إعداد جديد',
    crewBadge: 'الفريق',
    imposterBadge: 'المنتحل'
  }
};

/* ============================================================
   State & helpers
   ============================================================ */

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const rand = (n) => Math.floor(Math.random() * n);
const pick = (arr) => arr[rand(arr.length)];

let lang = ['en', 'ar'].includes(localStorage.getItem('imposter-lang'))
  ? localStorage.getItem('imposter-lang')
  : 'en';
let currentScreen = 'setup';

const state = {
  numPlayers: 4,
  names: [],
  categoryChoice: 'random',     // setup selection
  catKey: null,                 // resolved key for current round
  _secret: null,                // encoded round answer (never stored in plain text)
  currentPlayerIndex: 0,
  votes: [],
  timer: { duration: 60, remaining: 60, intervalId: null, running: false }
};

/* ------------------------------------------------------------
   Round-secret obfuscation.
   The imposter index, secret element and hint flag are XOR'd
   with a random per-session key and base64-encoded, so anyone
   glancing at memory/console between turns sees no answer.
   Decoded only for the moment a card/result is rendered.
   ------------------------------------------------------------ */
const SECRET_KEY = Uint8Array.from({ length: 24 }, () => rand(256));

function encodeSecret(secret) {
  const bytes = new TextEncoder().encode(JSON.stringify(secret));
  const masked = bytes.map((b, i) => b ^ SECRET_KEY[i % SECRET_KEY.length]);
  let bin = '';
  masked.forEach((b) => { bin += String.fromCharCode(b); });
  return btoa(bin);
}

function decodeSecret(encoded) {
  const masked = Uint8Array.from(atob(encoded), (c) => c.charCodeAt(0));
  const bytes = masked.map((b, i) => b ^ SECRET_KEY[i % SECRET_KEY.length]);
  return JSON.parse(new TextDecoder().decode(bytes));
}

/* ------------------------------------------------------------
   Element imagery.
   Countries show their real flag (flagcdn.com). Everyone else
   tries a real photo via the Wikipedia article thumbnail API,
   fetched once per round with a short timeout and cached in
   localStorage. Any failure (offline, missing page) silently
   falls back to the emoji.
   ------------------------------------------------------------ */
const FLAG_CDN = 'https://flagcdn.com/w320/';

let thumbCache = {};
try { thumbCache = JSON.parse(localStorage.getItem('imposter-thumbs') || '{}'); } catch (_) {}

function saveThumbs() {
  try {
    const keys = Object.keys(thumbCache);
    if (keys.length > 400) keys.slice(0, keys.length - 400).forEach((k) => delete thumbCache[k]);
    localStorage.setItem('imposter-thumbs', JSON.stringify(thumbCache));
  } catch (_) {}
}

function fetchWithTimeout(url, ms) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), ms);
  return fetch(url, { signal: ctrl.signal }).finally(() => clearTimeout(timer));
}

async function wikiThumb(title) {
  if (!title) return null;
  if (thumbCache[title] !== undefined) return thumbCache[title];
  let url = null;
  try {
    const res = await fetchWithTimeout(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title.replace(/ /g, '_'))}`,
      3000
    );
    if (res.ok) {
      const data = await res.json();
      // upgrade tiny thumbs (e.g. 40px) to a crisp 320px rendition
      url = data?.thumbnail?.source?.replace(/\/\d+px-/, '/320px-') || null;
    } else {
      thumbCache[title] = null; // page missing — remember so we don't retry
      saveThumbs();
      return null;
    }
  } catch (_) {
    return null; // offline / transient — not cached, retried next round
  }
  thumbCache[title] = url;
  saveThumbs();
  return url;
}

function resolveVisual(item, catKey) {
  return (async () => {
    if (catKey === 'countries' && item.iso) return { img: FLAG_CDN + item.iso + '.png' };
    const url = await wikiThumb(item.w || item.en);
    if (url) return { img: url };
    if (item.iso) return { img: FLAG_CDN + item.iso + '.png' }; // player nationality flag
    return { emoji: item.emoji };
  })();
}

function paintVisual(container, item, visual) {
  container.textContent = '';
  container.classList.remove('hidden');
  if (visual.img) {
    const im = document.createElement('img');
    im.className = 'visual-img';
    im.alt = item[lang] || item.en;
    im.referrerPolicy = 'no-referrer';
    im.addEventListener('error', () => {
      if (container.isConnected) container.textContent = item.emoji;
    });
    im.src = visual.img;
    container.appendChild(im);
  } else {
    container.textContent = visual.emoji;
  }
}

function t(key) {
  return STRINGS[lang][key] ?? STRINGS.en[key];
}
function fmt(key, vars) {
  let s = t(key);
  for (const [k, v] of Object.entries(vars)) s = s.replace(`{${k}}`, v);
  return s;
}
function catLabel(key) {
  return CATEGORIES[key].label[lang];
}

function showScreen(id) {
  currentScreen = id;
  $$('.screen').forEach((sc) => sc.classList.remove('active'));
  $(`#screen-${id}`).classList.add('active');
  window.scrollTo(0, 0);
}

/* ============================================================
   Language
   ============================================================ */

function applyLang() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  $$('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  $('#langToggle').textContent = lang === 'en' ? 'عربي' : 'EN';
  refreshDynamic();
}

function refreshDynamic() {
  renderNameInputs();
  renderCategoryGrid();
  if (currentScreen === 'pass') renderPass(false);
  if (currentScreen === 'card') renderCardText();
  if (currentScreen === 'discussion') updateTimerLabels();
  if (currentScreen === 'voting') renderVotes();
  if (currentScreen === 'result') renderResult();
}

/* ============================================================
   Setup screen
   ============================================================ */

function renderNameInputs() {
  const wrap = $('#nameInputs');
  const prev = $$('#nameInputs input').map((i) => i.value);
  wrap.innerHTML = '';
  for (let i = 0; i < state.numPlayers; i++) {
    const inp = document.createElement('input');
    inp.type = 'text';
    inp.maxLength = 16;
    inp.placeholder = fmt('playerN', { n: i + 1 });
    inp.value = prev[i] || '';
    inp.setAttribute('aria-label', inp.placeholder);
    wrap.appendChild(inp);
  }
}

function changePlayerCount(delta) {
  state.numPlayers = Math.min(7, Math.max(3, state.numPlayers + delta));
  $('#playerCountVal').textContent = state.numPlayers;
  renderNameInputs();
}

function renderCategoryGrid() {
  const grid = $('#categoryGrid');
  grid.innerHTML = '';

  const mixBtn = document.createElement('button');
  mixBtn.type = 'button';
  mixBtn.className = 'cat-btn' + (state.categoryChoice === 'random' ? ' selected' : '');
  mixBtn.innerHTML = `<span class="cat-icon">🎲</span><span></span>`;
  mixBtn.lastElementChild.textContent = t('randomMix');
  mixBtn.addEventListener('click', () => selectCategory('random'));
  grid.appendChild(mixBtn);

  for (const [key, cat] of Object.entries(CATEGORIES)) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'cat-btn' + (state.categoryChoice === key ? ' selected' : '');
    btn.innerHTML = `<span class="cat-icon">${cat.icon}</span><span></span>`;
    btn.lastElementChild.textContent = cat.label[lang];
    btn.addEventListener('click', () => selectCategory(key));
    grid.appendChild(btn);
  }
}

function selectCategory(key) {
  state.categoryChoice = key;
  renderCategoryGrid();
}

/* ============================================================
   Round setup / roles
   ============================================================ */

function assignRolesAndElement() {
  state.catKey = state.categoryChoice === 'random'
    ? pick(Object.keys(CATEGORIES))
    : state.categoryChoice;
  const element = pick(CATEGORIES[state.catKey].items);
  state._secret = encodeSecret({
    i: rand(state.names.length),   // imposter index
    e: element,                    // secret element
    h: Math.random() < 0.5,        // imposter gets a hint?
    k: rand(HINTS[state.catKey].length) // pre-picked hint (stable per round)
  });
  state.votes = state.names.map(() => 0);

  // start fetching the real image while players pass the device
  state.roundId = (state.roundId || 0) + 1;
  const roundId = state.roundId;
  state.visual = null;
  state.visualPromise = resolveVisual(element, state.catKey)
    .then((v) => { if (state.roundId === roundId) state.visual = v; return v; });
}

function startRound() {
  const inputs = $$('#nameInputs input');
  state.names = inputs.map((inp, i) => inp.value.trim() || fmt('playerN', { n: i + 1 }));

  assignRolesAndElement();

  $('#passDots').innerHTML = state.names
    .map(() => '<span class="dot"></span>').join('');

  state.currentPlayerIndex = 0;
  showScreen('pass');
  renderPass(true);
}

/* ============================================================
   Pass-device screen
   ============================================================ */

function renderPass(updateDots = true) {
  const i = state.currentPlayerIndex;
  $('#passStep').textContent = fmt('stepOf', { x: i + 1, n: state.names.length });
  $('#passName').textContent = state.names[i];
  if (updateDots) {
    $$('#passDots .dot').forEach((d, idx) => {
      d.classList.toggle('done', idx < i);
      d.classList.toggle('current', idx === i);
    });
  }
}

/* ============================================================
   Card reveal screen
   ============================================================ */

function openCard() {
  const card = $('#flipCard');
  card.classList.remove('flipped');
  wipeCard();
  $('#btnHideCard').classList.add('hidden');

  renderCardText();
  $('#cardStep').textContent = fmt('stepOf', {
    x: state.currentPlayerIndex + 1, n: state.names.length
  });

  showScreen('card');
  // force reflow so the flip animation always plays from face-down
  void card.offsetWidth;
}

/* Clear every trace of the previous card from the DOM so the next
   player (or a curious element inspector) finds nothing readable. */
function wipeCard() {
  ['#cardBadge', '#cardVisual', '#cardLead', '#cardItemName',
    '#cardDetail', '#cardCatChip', '#cardHintText']
    .forEach((sel) => {
      const el = $(sel);
      el.textContent = '';
      el.classList.add('hidden');
    });
}

function renderCardText() {
  const { i: imposterIndex, e: element, h: gotHint, k: hintIndex } = decodeSecret(state._secret);
  const isImposter = state.currentPlayerIndex === imposterIndex;
  const back = $('#cardBack');
  back.classList.toggle('role-imposter', isImposter);
  back.classList.toggle('role-crew', !isImposter);

  const badge = $('#cardBadge');
  badge.textContent = t(isImposter ? 'imposterBadge' : 'crewBadge');
  badge.className = 'badge ' + (isImposter ? 'imposter' : 'crew');

  const chip = $('#cardCatChip');
  const hintEl = $('#cardHintText');
  const detailEl = $('#cardDetail');

  if (!isImposter) {
    const visEl = $('#cardVisual');
    paintVisual(visEl, element, state.visual || { emoji: element.emoji });
    // image still loading? swap it in the moment it arrives
    if (!state.visual && state.visualPromise) {
      const rid = state.roundId;
      state.visualPromise.then((v) => {
        if (rid === state.roundId && v.img && visEl.isConnected) paintVisual(visEl, element, v);
      });
    }
    $('#cardLead').textContent = t('secretIs');
    $('#cardLead').classList.remove('hidden');
    $('#cardItemName').textContent = element[lang];
    $('#cardItemName').classList.remove('hidden');
    detailEl.textContent = element.detail[lang];
    detailEl.classList.remove('hidden');
    chip.textContent = `${CATEGORIES[state.catKey].icon} ${catLabel(state.catKey)}`;
    chip.classList.remove('hidden');
    hintEl.textContent = '';
    hintEl.classList.add('hidden');
  } else {
    $('#cardVisual').textContent = gotHint ? '🕵️' : '🤫';
    $('#cardLead').textContent = t('youAreImposter');
    $('#cardLead').classList.remove('hidden');
    $('#cardItemName').textContent = '';
    $('#cardItemName').classList.add('hidden');
    // never leak the element or its detail to the imposter
    detailEl.textContent = '';
    detailEl.classList.add('hidden');
    chip.textContent = `${CATEGORIES[state.catKey].icon} ${catLabel(state.catKey)}`;
    chip.classList.remove('hidden');
    const hintText = gotHint
      ? `${t('hintLabel')} ${HINTS[state.catKey][hintIndex][lang]}`
      : t('noClue');
    hintEl.textContent = hintText;
    hintEl.classList.remove('hidden');
  }
}

function hideAndNext() {
  const card = $('#flipCard');
  card.classList.remove('flipped');
  wipeCard(); // scrub immediately — don't wait for the screen change
  setTimeout(() => {
    state.currentPlayerIndex++;
    if (state.currentPlayerIndex >= state.names.length) {
      goDiscussion();
    } else {
      showScreen('pass');
      renderPass(true);
    }
  }, 350);
}

/* ============================================================
   Discussion + timer
   ============================================================ */

function goDiscussion() {
  stopTimer(false);
  resetTimer();
  showScreen('discussion');
  updateTimerLabels();
}

function formatTime(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, '0');
  const s = String(sec % 60).padStart(2, '0');
  return `${m}:${s}`;
}

function resetTimer() {
  stopTimer(false);
  const tmr = state.timer;
  tmr.remaining = tmr.duration;
  $('#timerDisplay').textContent = formatTime(tmr.remaining);
  $('#timerDisplay').className = 'timer-display';
  const bar = $('#timerBar');
  bar.style.transition = 'none';
  bar.style.width = '100%';
  void bar.offsetWidth;
  bar.style.transition = '';
  updateTimerLabels();
}

function updateTimerLabels() {
  const tmr = state.timer;
  const btn = $('#btnTimerToggle');
  btn.textContent = tmr.running ? t('pauseTimer')
    : tmr.remaining < tmr.duration && tmr.remaining > 0 ? t('resumeTimer')
    : t('startTimer');
}

function toggleTimer() {
  if (state.timer.running) {
    stopTimer(true);
  } else {
    startTimer();
  }
}

function startTimer() {
  const tmr = state.timer;
  if (tmr.remaining <= 0) resetTimer();
  tmr.running = true;
  $('#timerDisplay').classList.add('running');
  updateTimerLabels();
  tmr.intervalId = setInterval(() => {
    tmr.remaining--;
    $('#timerDisplay').textContent = formatTime(Math.max(0, tmr.remaining));
    $('#timerBar').style.width = `${Math.max(0, (tmr.remaining / tmr.duration) * 100)}%`;
    if (tmr.remaining <= 0) {
      stopTimer(false);
      $('#timerDisplay').className = 'timer-display time-up';
      setTimeout(goVote, 1600);
    }
  }, 1000);
}

function stopTimer(updateLabel) {
  const tmr = state.timer;
  if (tmr.intervalId) clearInterval(tmr.intervalId);
  tmr.intervalId = null;
  tmr.running = false;
  $('#timerDisplay').classList.remove('running');
  if (updateLabel) updateTimerLabels();
}

function setDuration(min) {
  state.timer.duration = min;
  $$('.chip').forEach((c) => c.classList.toggle('selected', +c.dataset.min === min));
  resetTimer();
}

/* ============================================================
   Voting
   ============================================================ */

function goVote() {
  stopTimer(false);
  showScreen('voting');
  renderVotes();
}

function renderVotes() {
  const list = $('#voteList');
  list.innerHTML = '';
  state.names.forEach((name, i) => {
    const row = document.createElement('div');
    row.className = 'vote-row';

    const minus = document.createElement('button');
    minus.className = 'vote-btn vote-minus';
    minus.textContent = '−';
    minus.addEventListener('click', () => {
      state.votes[i] = Math.max(0, state.votes[i] - 1);
      countEl.textContent = state.votes[i];
    });

    const nameEl = document.createElement('span');
    nameEl.className = 'vote-name';
    nameEl.textContent = name;

    const countEl = document.createElement('span');
    countEl.className = 'vote-count';
    countEl.textContent = state.votes[i];

    const plus = document.createElement('button');
    plus.className = 'vote-btn vote-plus';
    plus.textContent = '+';
    plus.addEventListener('click', () => {
      state.votes[i]++;
      countEl.textContent = state.votes[i];
    });

    row.append(nameEl, minus, countEl, plus);
    list.appendChild(row);
  });
}

/* ============================================================
   Result
   ============================================================ */

function renderResult() {
  const { i: imposterIndex, e: element } = decodeSecret(state._secret);
  $('#resultImposter').textContent = state.names[imposterIndex];
  $('#resultCatChip').textContent =
    `${CATEGORIES[state.catKey].icon} ${catLabel(state.catKey)}`;
  const resEl = $('#resultElementEmoji');
  paintVisual(resEl, element, state.visual || { emoji: element.emoji });
  if (!state.visual && state.visualPromise) {
    const rid = state.roundId;
    state.visualPromise.then((v) => {
      if (rid === state.roundId && v.img) paintVisual(resEl, element, v);
    });
  }
  $('#resultElementName').textContent = element[lang];
  $('#resultElementDetail').textContent = element.detail[lang];

  const maxVotes = Math.max(...state.votes);
  $('#resultVotesLine').textContent = maxVotes > 0
    ? fmt('mostVotes', { name: state.names[state.votes.indexOf(maxVotes)], n: maxVotes })
    : t('noVotesCast');

  const recap = $('#recapRow');
  recap.innerHTML = '';
  state.names.forEach((name, i) => {
    const chip = document.createElement('span');
    chip.className = 'recap-chip' + (i === imposterIndex ? ' is-imposter' : '');
    chip.textContent = i === imposterIndex ? `🎭 ${name}` : name;
    recap.appendChild(chip);
  });
}

function playAgainSameCrew() {
  assignRolesAndElement();
  state.currentPlayerIndex = 0;

  resetTimer();
  $('#passDots').innerHTML = state.names.map(() => '<span class="dot"></span>').join('');
  showScreen('pass');
  renderPass(true);
}

/* ============================================================
   Theme (light / dark) — follows device, manual override saved
   ============================================================ */

const THEME_KEY = 'imposter-theme';
const THEME_COLORS = { dark: '#150f33', light: '#f6f2ff' };

function applyTheme(mode) {
  document.documentElement.setAttribute('data-theme', mode);
  $('#themeToggle').textContent = mode === 'light' ? '🌙' : '☀️';
  document.querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', THEME_COLORS[mode]);
}

let theme = localStorage.getItem(THEME_KEY);
if (theme !== 'light' && theme !== 'dark') {
  theme = matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}
applyTheme(theme);

$('#themeToggle').addEventListener('click', () => {
  theme = theme === 'light' ? 'dark' : 'light';
  localStorage.setItem(THEME_KEY, theme);
  applyTheme(theme);
});

/* Keep following the device until the user picks a side manually */
matchMedia('(prefers-color-scheme: light)').addEventListener('change', (ev) => {
  if (!['light', 'dark'].includes(localStorage.getItem(THEME_KEY))) {
    theme = ev.matches ? 'light' : 'dark';
    applyTheme(theme);
  }
});

/* ============================================================
   Events & init
   ============================================================ */

$('#langToggle').addEventListener('click', () => {
  lang = lang === 'en' ? 'ar' : 'en';
  localStorage.setItem('imposter-lang', lang);
  applyLang();
});

$('#btnMinus').addEventListener('click', () => changePlayerCount(-1));
$('#btnPlus').addEventListener('click', () => changePlayerCount(1));
$('#btnStart').addEventListener('click', startRound);

$('#btnShowCard').addEventListener('click', openCard);

$('#flipCard').addEventListener('click', () => {
  const card = $('#flipCard');
  if (!card.classList.contains('flipped')) {
    renderCardText(); // re-render if content was scrubbed (e.g., app was backgrounded)
    card.classList.add('flipped');
    $('#btnHideCard').classList.remove('hidden');
  }
});

$('#btnHideCard').addEventListener('click', hideAndNext);

/* Privacy: if the phone is locked or the app backgrounded mid-reveal,
   cover the card again — the same player can re-tap to continue. */
document.addEventListener('visibilitychange', () => {
  if (document.hidden && currentScreen === 'card') {
    $('#flipCard').classList.remove('flipped');
    wipeCard();
    $('#btnHideCard').classList.add('hidden');
  }
});

/* Block long-press / right-click on the card to avoid accidental
   selection popups and "save image" prompts while passing the device. */
$('#flipCard').addEventListener('contextmenu', (e) => e.preventDefault());

$$('#durChips .chip').forEach((chip) =>
  chip.addEventListener('click', () => setDuration(+chip.dataset.min))
);

$('#btnTimerToggle').addEventListener('click', toggleTimer);
$('#btnGoVote').addEventListener('click', goVote);
$('#btnReveal').addEventListener('click', () => { showScreen('result'); renderResult(); });

$('#btnAgain').addEventListener('click', playAgainSameCrew);
$('#btnNewSetup').addEventListener('click', () => { showScreen('setup'); renderCategoryGrid(); });

/* Offline support: register the service worker when served over
   http(s). Opened directly from disk (file://) the game still works —
   it has zero network dependencies. */
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}

applyLang();
