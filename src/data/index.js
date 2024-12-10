import about1 from "@/assets/images/about1.png";
import about2 from "@/assets/images/about2.png";
import about3 from "@/assets/images/about3.png";
import rektor from "@/assets/images/rektor.png";
import strategy1 from "@/assets/images/strategy1.png";
import strategy2 from "@/assets/images/strategy2.png";
import brandbook1 from "@/assets/images/brandbook1.png";
import brandbook3 from "@/assets/images/brandbook3.png";
import uniItem from "@/assets/images/uniItem.png";
import monumentItemImage from "@/assets/images/monumentItemImage.png";
import newsImage2 from "@/assets/images/news.png";
import eventsSliderBannerItem from "@/assets/images/eventsSliderBannerItem.png";
import {useState} from "react";

export const pages = [
	{
		id: 1001,
		title: 'Haqqımızda',
		slug: '/about',
		key: 'about',
		type: 'content',
		innerPageType: null
	},
	{
		id: 1,
		title: 'Universitet haqqında',
		slug: '/university',
		key: 'university',
		type: 'content',
		innerPageType: null
	},
	{
		id: 2,
		title: 'Rəhbərlik',
		slug: '/administration',
		key: 'administration',
		type: 'content',
		innerPageType: null
	},
	{
		id: 3,
		title: 'Struktur',
		slug: '/structure',
		key: 'structure',
		type: 'content',
		innerPageType: null
	},
	{
		id: 4,
		title: 'Strategiya',
		slug: '/strategy',
		key: 'strategy',
		type: 'content',
		innerPageType: null
	},
	{
		id: 5,
		title: 'Brend təlimatı',
		slug: '/brandbook',
		key: 'brandbook',
		type: 'content',
		innerPageType: null
	},

	{
		id: 6,
		title: 'Akademik fəaliyyət',
		slug: '/academic_activity',
		key: 'academic_activity',
		type: 'content',
		innerPageType: null
	},
	{
		id: 7,
		title: 'Akademik təqvim',
		slug: '/academic_calendar',
		key: 'academic_calendar',
		type: 'content',
		innerPageType: null
	},
	{
		id: 8,
		title: 'Peşəkar inkişaf mərkəzi',
		slug: '/development_center',
		key: 'development_center',
		type: 'content',
		innerPageType: null
	},

	{
		id: 9,
		title: 'Qəbul',
		slug: '/application',
		key: 'application',
		type: 'content',
		innerPageType: null
	},
	{
		id: 10,
		title: 'Bakalavriat',
		slug: '/undergraduate',
		key: 'undergraduate',
		type: 'content',
		innerPageType: null
	},
	{
		id: 11,
		title: 'Magistratura',
		slug: '/judiciary',
		key: 'judiciary',
		type: 'content',
		innerPageType: null
	},
	{
		id: 12,
		title: 'Doktrantura',
		slug: '/doctorate',
		key: 'doctorate',
		type: 'content',
		innerPageType: null
	},

	{
		id: 13,
		title: 'Fakültələr',
		slug: '/faculties',
		key: 'faculties',
		type: 'content',
		innerPageType: null
	},
	{
		id: 14,
		title: 'Humanitar və sosial elmlər fakültəsi',
		slug: '/faculty_of_humanities_and_social_sciences',
		key: 'faculty_of_humanities_and_social_sciences',
		type: 'content',
		innerPageType: null
	},
	{
		id: 15,
		title: 'İncəsənət fakültəsi',
		slug: '/arts',
		key: 'arts',
		type: 'content',
		innerPageType: null
	},
	{
		id: 16,
		title: 'İqtisadiyyat fakültəsi',
		slug: '/economics',
		key: 'economics',
		type: 'content',
		innerPageType: null
	},
	{
		id: 17,
		title: 'Mühəndislik fakültəsi',
		slug: '/engineering',
		key: 'engineering',
		type: 'content',
		innerPageType: null
	},
	{
		id: 18,
		title: 'Pedaqoji fakültə',
		slug: '/pedagogical',
		key: 'pedagogical',
		type: 'content',
		innerPageType: null
	},
	{
		id: 19,
		title: 'Turizm fakültəsi',
		slug: '/tourism',
		key: 'tourism',
		type: 'content',
		innerPageType: null
	},

	{
		id: 20,
		title: 'Kampus',
		slug: '/campus',
		key: 'campus',
		type: 'content',
		innerPageType: null
	},
	{
		id: 21,
		title: 'Kampus haqqında',
		slug: '/about',
		key: 'about',
		type: 'content',
		innerPageType: null
	},
	{
		id: 22,
		title: 'Tələbə mənzili',
		slug: '/student_apartment',
		key: 'student_apartment',
		type: 'content',
		innerPageType: null
	},
	{
		id: 23,
		title: 'Tələbə həyatı',
		slug: '/student_life',
		key: 'student_life',
		type: 'content',
		innerPageType: null
	},
	{
		id: 24,
		title: 'Qarabağ Universiteti',
		slug: '/karabakh_university',
		key: 'karabakh_university',
		type: 'content',
		innerPageType: null
	},
	{
		id: 25,
		title: 'İncəsənət məktəbi',
		slug: '/art_school',
		key: 'art_school',
		type: 'content',
		innerPageType: null
	},

	{
		id: 26,
		title: 'Karyera',
		slug: '/career',
		key: 'career',
		type: 'content',
		innerPageType: null
	},

	{
		id: 27,
		title: 'Xəbərlər',
		slug: '/news',
		key: 'news',
		type: 'list',
		innerPageType: 'eventsInner'
	},

	{
		id: 28,
		title: 'Tədbirlər',
		slug: '/events',
		key: 'events',
		type: 'content',
		innerPageType: null
	},

	{
		id: 29,
		title: 'Qaydalar və sənədlər',
		slug: '/regulations_documents',
		key: 'regulations_documents',
		type: 'content',
		innerPageType: null
	},

	{
		id: 30,
		title: 'Suallar',
		slug: '/questions',
		key: 'questions',
		type: 'content',
		innerPageType: null
	},
]

export const menus = {
	main: [
		{
			id: 1001,
			pageId: 1001,
			children: [
				{
					id: 1,
					pageId: 1,
				},
				{
					id: 2,
					pageId: 2,
				},
				{
					id: 3,
					pageId: 3,
				},
				{
					id: 4,
					pageId: 4,
				},
				{
					id: 5,
					pageId: 5,
				}
			]
		},

		{
			id: 6,
			pageId: 6,
			children: [
				{
					id: 7,
					pageId: 7,
				},
				{
					id: 8,
					pageId: 8,
				}
			]
		},

		{
			id: 9,
			pageId: 9,
			children: [
				{
					id: 10,
					pageId: 10,
				},
				{
					id: 11,
					pageId: 11,
				},
				{
					id: 12,
					pageId: 12,
				}
			]
		},

		{
			id: 13,
			pageId: 13,
			children: [
				{
					id: 14,
					pageId: 14,
				},
				{
					id: 15,
					pageId: 15,
				},
				{
					id: 16,
					pageId: 16,
				},
				{
					id: 17,
					pageId: 17,
				},
				{
					id: 18,
					pageId: 18,
				},
				{
					id: 19,
					pageId: 19,
				},
			]
		},

		{
			id: 20,
			pageId: 20,
			children: [
				{
					id: 21,
					pageId: 21,
				},
				{
					id: 22,
					pageId: 22,
				},
				{
					id: 23,
					pageId: 23,
				},
				{
					id: 24,
					pageId: 24,
				},
				{
					id: 25,
					pageId: 25,
				}
			]
		},

		{
			id: 26,
			pageId: 26,
		},
	],
	minor: [
		{
			id: 27,
			pageId: 27,
		},

		{
			id: 28,
			pageId: 28,
		},

		{
			id: 29,
			pageId: 29,
		},

		{
			id: 30,
			pageId: 30,
		},
	]
}

export const contentBoxes = [
	{
		id: 1,
		pageId: 1,
		order: 1,
		boxType: 'simpleContent',
		content: {
			title: 'Universitet haqqında',
			description: 'Qarabağ Universiteti Azərbaycan Respublikası Prezidenti İlham Əliyevin 2023-cü il 28 noyabr tarixli 4182 nömrəli Sərəncamı ilə Azərbaycan Respublikası Elm və Təhsil Nazirliyinin tabeliyində Xankəndi şəhərində yaradılıb. Xankəndi şəhərində müstəqil ali təhsil müəssisəsinin yaradılmasında məqsəd Qarabağ və Şərqi Zəngəzur iqtisadi rayonlarının ərazisində yaşayan vətəndaşlarımızın ali təhsil alması, ümumtəhsil məktəblərimizin müəllimlərlə təmin edilməsi idi. Bu qərar regionlarda ziyalı potensialının gücləndirilməsinə, əhalinin maarifləndirilməsinə və erməni separatizminin qarşısının alınmasına xidmət edirdi.',
			image: about1,
			type: 'overflow',
			button: '',
			backgroundColor: null,
		}
	},
	{
		id: 2,
		pageId: 1,
		order: 2,
		boxType: 'simpleContent',
		content: {
			title: 'Tarixi',
			description: 'Azərbaycan Respublikası Prezidenti İlham Əliyevin 2022-ci il 16 noyabr tarixli 3587 nömrəli Sərəncamı ilə təsdiq edilmiş “Azərbaycan Respublikasının işğaldan azad edilmiş ərazilərinə Böyük Qayıdışa dair I Dövlət Proqramı”na uyğun olaraq, işğaldan azad olunmuş ərazilərin yenidən qurulması, dayanıqlı inkişafı və həmin ərazilərdə yüksək həyat səviyyəsinin təminatı üçün genişmiqyaslı bərpa-quruculuq işləri həyata keçirilir.',
			image: about2,
			type: 'overflow',
			button: '',
			backgroundColor: '#F6F6F6',
		}
	},
	{
		id: 3,
		pageId: 1,
		order: 3,
		boxType: 'simpleContent',
		content: {
			title: 'Təhsili',
			description: 'Əhalinin dayanıqlı məskunlaşması və ərazilərin iqtisadi fəaliyyətə reinteqrasiyası istiqamətində müəyyənləşdirilmiş hədəflərin reallaşdırılmasında nəzərdə tutulan müasir yanaşmalar, hər bir rayonun ixtisaslaşma sahəsinə müvafiq inkişafı yüksəkixtisaslı kadrların cəlb edilməsini şərtləndirir. Qarabağ Universitetinin yaradılmasında məqsəd məhz bu çağırışlara cavab verən kadrların hazırlığının həyata keçirilməsi və tarixən mövcud olmuş təhsil ənənələrinin yaşadılmasıdır.',
			image: about1,
			type: 'overflow',
			button: '',
			backgroundColor: null,
		}
	},
	{
		id: 4,
		pageId: 1,
		order: 4,
		boxType: 'gallery',
		content: {
			title: 'Qalereya',
			description: null,
			image: null,
			backgroundColor: '#F6F6F6',
			galleries: [
				{
					title: 'Image 1',
					image: about1
				},
				{
					title: 'Image 1',
					image: about1
				},
				{
					title: 'Image 1',
					image: about1
				},
				{
					title: 'Image 1',
					image: about1
				},
				{
					title: 'Image 1',
					image: about1
				},
				{
					title: 'Image 1',
					image: about1
				}
			]
		}
	},
	{
		id: 5,
		pageId: 1,
		order: 5,
		boxType: 'complexContent',
		content: {
			title: null,
			description: null,
			image: null,
			backgroundColor: null,
			list: [
				{
					title: 'Baxış (Vizyon)',
					description: 'Regionda transformativ dəyişikliklərin katalizatoru kimi təhsilin mükəmməlliyi, innovativ tədqiqatlar və icma əsaslı inkişaf standartlarını müəyyən etmək, tarixi irsi müasir nailiyyətlər ilə birləşdirməklə yerli və regional rifaha töhfə vermək.',
					image: about3,
					backgroundColor: '#F6F6F6',
				},
				{
					title: 'Missiya',
					description: 'İntellektual, yenilikçi və lider gənclərin yetişdirilməsində müstəsna təhsil proqramlarını təmin etmək, yerli və regional çağırışlara cavab verən tədqiqatlar aparmaq, regionda mədəni irs və tərəqqinın çırağı kimi xidmət etmək.',
					image: about3,
					backgroundColor: '#F6F6F6',
				}
			]
		}
	},
	{
		id: 6,
		pageId: 1,
		order: 6,
		boxType: 'principleList',
		content: {
			title: 'Əsas prinsiplər',
			description: null,
			image: null,
			backgroundColor: null,
			list: [
				{
					id: 1,
					key: '01',
					title: 'Təhsildə mükəmməllik',
					description: 'Tənqidi düşüncə, yaradıcılıq, peşəkarlıq və etik liderliyi təşviq edən yüksək keyfiyyətli, hərtərəfli təhsil proqramları təqdim etmək.',
				},
				{
					id: 2,
					key: '02',
					title: 'Tədqiqat və İnnovasiya',
					description: 'Tədqiqat yolu ilə biliyin inkişaf etdirilməsi, innovasiyaların təşviqi və fənlər üzrə yeni sərhədlərin araşdırılmasını təşviq etmək.',
				},
				{
					id: 3,
					key: '03',
					title: 'İcmanın iştirakı',
					description: 'Yerli və regional icmalarla əlaqələrin gücləndirilməsi, mədəni irsin təbliği və regionun sosial-iqtisadi inkişafına töhfə vermək.',
				},
				{
					id: 4,
					key: '04',
					title: 'İnklüzivlik və müxtəliflik',
					description: 'Müxtəlifliyə və açıq düşüncəyə dəyər verən inklüziv mühitin təşviqi, tələbələr, müəllimlər və daha geniş ictimaiyyət arasında fikir mübadiləsini müxtəlif proqramlar vasitəsilə dəstəkləmək.\n',
				},
				{
					id: 2,
					key: '02',
					title: 'Davamlılıq və inkişaf',
					description: 'Universitetin uzunmüddətli təsirini, böyüməsini və cəmiyyətə töhfələrini təmin etmək üçün davamlı davamlı təkmilləşdirilməyə sadiq olmaq.',
				}
			]
		}
	},

	{
		id: 7,
		pageId: 2,
		order: 1,
		boxType: 'simpleContent',
		content: {
			title: 'Rektorun adı',
			description:
				`
                    <p>Lorem ipsum dolor sit amet consectetur. Sit fermentum pulvinar egestas suspendisse vulputate ultricies eget. Non augue nascetur leo accumsan dui consequat molestie. Euismod ac suspendisse at elementum sit ut maecenas a ut. Enim arcu netus sit eget purus quis et. Urna ultrices ultricies et tellus senectus arcu interdum sit. Facilisi scelerisque elit nulla congue cursus nunc elit sit. Viverra elementum cras non tortor. Et odio urna auctor vitae porttitor lectus pellentesque. Hac risus pellentesque nullam urna turpis in cursus lorem turpis. Viverra tortor viverra felis in mauris in pulvinar varius vivamus. Vestibulum vitae iaculis libero id id quam adipiscing ut. Ultrices sed imperdiet facilisi ut in natoque risus suspendisse.</p>

                    <p>Ultrices dui ut aliquam habitasse cras eget. Massa quam ullamcorper praesent faucibus aenean lacinia non etiam suspendisse. Aliquet morbi lacus lacus urna. Ut aliquam vel amet tincidunt viverra viverra condimentum. Elit facilisi sit amet consectetur odio pulvinar sit. Nibh iaculis pharetra mi posuere tincidunt tincidunt accumsan accumsan pretium. Eros mauris massa sodales nisl tellus eget nisl. Nisl molestie amet consequat sit habitasse purus blandit. Non habitant a senectus ullamcorper viverra. Ultrices orci gravida pulvinar sit dui nulla velit. Velit habitant commodo accumsan feugiat cras.</p>

                    <p>Lacus mauris molestie sapien cras interdum. Ac leo parturient elementum enim cursus. Egestas rutrum mauris vitae diam a. Ultrices hac varius odio neque ornare a ut. Tristique pellentesque vestibulum quam est pellentesque in at. Vitae diam aliquet magnis elit molestie condimentum vitae ac. Arcu a dignissim enim pulvinar libero vulputate lacus elit. Feugiat morbi eu aliquam feugiat senectus massa rhoncus. Tellus.</p>
                `,
			image: rektor,
			type: 'overflowless',
			button: '',
			backgroundColor: null,
		}
	},
	{
		id: 8,
		pageId: 2,
		order: 2,
		boxType: 'simpleContent',
		content: {
			title: 'Himayəçilər şurası',
			description:
				`
                    <p>Lorem ipsum dolor sit amet consectetur. Netus convallis risus placerat nulla. Donec arcu non massa tempor. Egestas porta duis purus sed eu. Vitae praesent eu elit lobortis in. Duis nisi mauris dolor tincidunt phasellus. In tristique risus dolor quis. Amet tristique eu imperdiet amet sagittis. Facilisis amet ut vel cursus in eu et tincidunt.</p>
                `,
			image: about1,
			type: 'overflowless',
			button: '',
			backgroundColor: null,
		}
	},
	{
		id: 9,
		pageId: 2,
		order: 3,
		boxType: 'simpleContent',
		content: {
			title: 'Elmi şura',
			description:
				`
                    <p>Lorem ipsum dolor sit amet consectetur. Netus convallis risus placerat nulla. Donec arcu non massa tempor. Egestas porta duis purus sed eu. Vitae praesent eu elit lobortis in. Duis nisi mauris dolor tincidunt phasellus. In tristique risus dolor quis. Amet tristique eu imperdiet amet sagittis. Facilisis amet ut vel cursus in eu et tincidunt.</p>
                `,
			image: about1,
			type: 'overflowless',
			button: '',
			backgroundColor: null,
		}
	},

	{
		id: 10,
		pageId: 3,
		order: 1,
		boxType: 'orgchart',
		content: {
			title: 'Struktur',
			description: null,
			image: null,
			backgroundColor: null,
			list: [
				{
					id: 1,
					title: 'Rektor',
					children: [
						{
							id: 2,
							title: 'Himayəçilər şurası'
						},
						{
							id: 3,
							title: 'Elmi şura'
						}
					]
				}
			]
		}
	}, /*STRUKTUR*/

	{
		id: 11,
		pageId: 4,
		order: 1,
		boxType: 'simpleContent',
		content: {
			title: 'Strategiya',
			description: 'Lorem ipsum dolor sit amet consectetur. Elit velit netus eget nullam morbi at sit. Ac pretium ac aenean elementum urna. Vel nec sed elementum mi elementum et ut sapien. Pulvinar at orci diam sit eget mi eu amet pellentesque. Porttitor quam turpis odio ut egestas pretium neque volutpat.',
			image: strategy1,
			type: 'overflow',
			button: 'Yüklə PDF',
			backgroundColor: null,
		}
	},
	{
		id: 12,
		pageId: 4,
		order: 2,
		boxType: 'simpleContent',
		content: {
			title: 'Tələblər',
			description: 'Azərbaycan Respublikası Prezidenti İlham Əliyevin 2022-ci il 16 noyabr tarixli 3587 nömrəli Sərəncamı ilə təsdiq edilmiş “Azərbaycan Respublikasının işğaldan azad edilmiş ərazilərinə Böyük Qayıdışa dair I Dövlət Proqramı”na uyğun olaraq, işğaldan azad olunmuş ərazilərin yenidən qurulması, dayanıqlı inkişafı və həmin ərazilərdə yüksək həyat səviyyəsinin təminatı üçün genişmiqyaslı bərpa-quruculuq işləri həyata keçirilir.',
			image: strategy2,
			type: 'overflow',
			button: '',
			backgroundColor: '#F6F6F6',
		}
	},
	{
		id: 13,
		pageId: 4,
		order: 3,
		boxType: 'simpleContent',
		content: {
			title: 'Müəllimlər və tədqiqat',
			description: 'Lorem ipsum dolor sit amet consectetur. Elit velit netus eget nullam morbi at sit. Ac pretium ac aenean elementum urna. Vel nec sed elementum mi elementum et ut sapien. Pulvinar at orci diam sit eget mi eu amet pellentesque. Porttitor quam turpis odio ut egestas pretium neque volutpat.',
			image: strategy1,
			type: 'overflow',
			button: null,
			backgroundColor: null,
		}
	},
	{
		id: 14,
		pageId: 4,
		order: 4,
		boxType: 'simpleContent',
		content: {
			title: 'Tələblər',
			description: 'Azərbaycan Respublikası Prezidenti İlham Əliyevin 2022-ci il 16 noyabr tarixli 3587 nömrəli Sərəncamı ilə təsdiq edilmiş “Azərbaycan Respublikasının işğaldan azad edilmiş ərazilərinə Böyük Qayıdışa dair I Dövlət Proqramı”na uyğun olaraq, işğaldan azad olunmuş ərazilərin yenidən qurulması, dayanıqlı inkişafı və həmin ərazilərdə yüksək həyat səviyyəsinin təminatı üçün genişmiqyaslı bərpa-quruculuq işləri həyata keçirilir.',
			image: strategy2,
			type: 'overflow',
			button: '',
			backgroundColor: '#F6F6F6',
		}
	},

	{
		id: 15,
		pageId: 5,
		order: 1,
		boxType: 'simpleContent',
		content: {
			title: 'Brend təlimatı',
			description: 'Lorem ipsum dolor sit amet consectetur. Elit velit netus eget nullam morbi at sit. Ac pretium ac aenean elementum urna. Vel nec sed elementum mi elementum et ut sapien. Pulvinar at orci diam sit eget mi eu amet pellentesque. Porttitor quam turpis odio ut egestas pretium neque volutpat.',
			image: strategy1,
			type: 'overflow',
			button: null,
			backgroundColor: null,
		}
	},
	{
		id: 16,
		pageId: 5,
		order: 2,
		boxType: 'simpleContent',
		content: {
			title: 'Loqo',
			description: 'Lorem ipsum dolor sit amet consectetur. Elit velit netus eget nullam morbi at sit. Ac pretium ac aenean elementum urna. Vel nec sed elementum mi elementum et ut sapien. Pulvinar at orci diam sit eget mi eu amet pellentesque. Porttitor quam turpis odio ut egestas pretium neque volutpat.',
			image: brandbook1,
			type: 'overflow',
			button: null,
			backgroundColor: '#F6F6F6',
		}
	},
	{
		id: 17,
		pageId: 5,
		order: 3,
		boxType: 'simpleContent',
		content: {
			title: 'Rənglər',
			description: 'Lorem ipsum dolor sit amet consectetur. Elit velit netus eget nullam morbi at sit. Ac pretium ac aenean elementum urna. Vel nec sed elementum mi elementum et ut sapien. Pulvinar at orci diam sit eget mi eu amet pellentesque. Porttitor quam turpis odio ut egestas pretium neque volutpat.',
			image: strategy1,
			type: 'overflow',
			button: null,
			backgroundColor: null,
		}
	},
	{
		id: 18,
		pageId: 5,
		order: 4,
		boxType: 'simpleContent',
		content: {
			title: 'Rəsmi şriftlər',
			description: 'Lorem ipsum dolor sit amet consectetur. Elit velit netus eget nullam morbi at sit. Ac pretium ac aenean elementum urna. Vel nec sed elementum mi elementum et ut sapien. Pulvinar at orci diam sit eget mi eu amet pellentesque. Porttitor quam turpis odio ut egestas pretium neque volutpat.',
			image: brandbook3,
			type: 'overflow',
			button: null,
			backgroundColor: '#F6F6F6',
		}
	},


	{
		id: 19,
		pageId: 24,
		order: 1,
		boxType: 'simpleContent',
		content: {
			title: 'Qarabağ Universiteti',
			description: 'Office ipsum you must be muted. I bake streamline hanging believe wheel now. Tiger eye support our win-win-win shoulder thought ping feed. Community point lunch bake hanging individual breakout across. Blue manage blue emails most responsible. With tent have hammer window.',
			image: about1,
			type: 'overflow',
			button: null,
			backgroundColor: '#F6F6F6',
		}
	},
	{
		id: 20,
		pageId: 24,
		order: 2,
		boxType: 'simpleContent',
		content: {
			title: 'Tarixi',
			description: 'Lorem ipsum dolor sit amet consectetur. Elit velit netus eget nullam morbi at sit. Ac pretium ac aenean elementum urna. Vel nec sed elementum mi elementum et ut sapien. Pulvinar at orci diam sit eget mi eu amet pellentesque. Porttitor quam turpis odio ut egestas pretium neque volutpat.',
			image: about1,
			type: 'overflow',
			button: null,
			backgroundColor: null,
		}
	},
	{
		id: 21,
		pageId: 24,
		order: 3,
		boxType: 'simpleContent',
		content: {
			title: 'Təhsili',
			description: 'Office ipsum you must be muted. I bake streamline hanging believe wheel now. Tiger eye support our win-win-win shoulder thought ping feed. Community point lunch bake hanging individual breakout across. Blue manage blue emails most responsible. With tent have hammer window.',
			image: about1,
			type: 'overflow',
			button: null,
			backgroundColor: '#F6F6F6',
		}
	},
	{
		id: 22,
		pageId: 24,
		order: 5,
		boxType: 'simpleContent',
		content: {
			title: 'İncəsənət məktəbi',
			description: 'Lorem ipsum dolor sit amet consectetur. Elit velit netus eget nullam morbi at sit. Ac pretium ac aenean elementum urna. Vel nec sed elementum mi elementum et ut sapien. Pulvinar at orci diam sit eget mi eu amet pellentesque. Porttitor quam turpis odio ut egestas pretium neque volutpat.',
			image: about1,
			type: 'overflow',
			button: null,
			backgroundColor: null,
		}
	},
	{
		id: 23,
		pageId: 24,
		order: 6,
		boxType: 'listBoxContent',
		content: {
			title: null,
			description: null,
			image: null,
			backgroundColor: null,
			list: [
				{
					id: 1,
					path: '/',
					title: 'Nəzəri biliklər',
					description: 'Lorem ipsum dolor sit amet consectetur. Eget vitae ullamcorper purus cursus. Scelerisque velit feugiat orci porta odio cursus pulvinar consectetur dui. Nunc quisque feugiat enim in quisque tortor tortor tincidunt habitasse. Vestibulum nisi eu ut nisl sit. Dui auctor felis phasellus eget pellentesque.',
					image: uniItem,
				},
				{
					id: 2,
					path: '/',
					title: 'Nəzəri biliklər 2',
					description: 'Lorem ipsum dolor sit amet consectetur. Eget vitae ullamcorper purus cursus. Scelerisque velit feugiat orci porta odio cursus pulvinar consectetur dui. Nunc quisque feugiat enim in quisque tortor tortor tincidunt habitasse. Vestibulum nisi eu ut nisl sit. Dui auctor felis phasellus eget pellentesque.',
					image: uniItem,
				}
			]
		}
	},
	{
		id: 24,
		pageId: 24,
		order: 4,
		boxType: 'gallerySlider',
		content: {
			title: null,
			description: null,
			image: null,
			backgroundColor: null,
			list: [
				[
					{
						title: null,
						description: null,
						image: monumentItemImage,
					},
					{
						title: null,
						description: null,
						image: monumentItemImage,
					},
					{
						title: null,
						description: null,
						image: monumentItemImage,
					},
					{
						title: null,
						description: null,
						image: monumentItemImage,
					},
					{
						title: null,
						description: null,
						image: monumentItemImage,
					},
					{
						title: null,
						description: null,
						image: monumentItemImage,
					},
					{
						title: null,
						description: null,
						image: monumentItemImage,
					},
					{
						title: null,
						description: null,
						image: monumentItemImage,
					},
					{
						title: null,
						description: null,
						image: monumentItemImage,
					},
					{
						title: null,
						description: null,
						image: monumentItemImage,
					},
					{
						title: null,
						description: null,
						image: monumentItemImage,
					},
					{
						title: null,
						description: null,
						image: monumentItemImage,
					},
					{
						title: null,
						description: null,
						image: monumentItemImage,
					}
				],
				[
					{
						title: null,
						description: null,
						image: monumentItemImage,
					},
					{
						title: null,
						description: null,
						image: monumentItemImage,
					},
					{
						title: null,
						description: null,
						image: monumentItemImage,
					},
					{
						title: null,
						description: null,
						image: monumentItemImage,
					},
					{
						title: null,
						description: null,
						image: monumentItemImage,
					},
					{
						title: null,
						description: null,
						image: monumentItemImage,
					},
					{
						title: null,
						description: null,
						image: monumentItemImage,
					},
					{
						title: null,
						description: null,
						image: monumentItemImage,
					},
					{
						title: null,
						description: null,
						image: monumentItemImage,
					},
					{
						title: null,
						description: null,
						image: monumentItemImage,
					},
					{
						title: null,
						description: null,
						image: monumentItemImage,
					},
					{
						title: null,
						description: null,
						image: monumentItemImage,
					},
					{
						title: null,
						description: null,
						image: monumentItemImage,
					}
				]
			]
		}
	},

	{
		id: 25,
		pageId: 27,
		order: 3,
		boxType: 'newsBannerContent',
		content: {
			title: 'Xəbərlər',
			description: null,
			image: null,
			backgroundColor: null,
			list: [
				{
					id: 1,
					path: '/content/1',
					title: 'Seçim turunun mükafatlandırma tədbirinə ev sahibliyi edib',
					description: null,
					image: newsImage2,
					date: new Date()
				},
				{
					id: 2,
					path: '/content/1',
					title: 'Seçim turunun mükafatlandırma tədbirinə ev sahibliyi edib',
					description: null,
					image: newsImage2,
					date: new Date()
				},
				{
					id: 3,
					path: '/content/1',
					title: 'Seçim turunun mükafatlandırma tədbirinə ev sahibliyi edib',
					description: null,
					image: newsImage2,
					date: new Date()
				},
				{
					id: 4,
					path: '/content/1',
					title: 'Seçim turunun mükafatlandırma tədbirinə ev sahibliyi edib',
					description: null,
					image: newsImage2,
					date: new Date()
				},
				{
					id: 5,
					path: '/content/1',
					title: 'Seçim turunun mükafatlandırma tədbirinə ev sahibliyi edib',
					description: null,
					image: newsImage2,
					date: new Date()
				}
			]
		}
	},
	{
		id: 26,
		pageId: 27,
		order: 2,
		boxType: 'newsContent',
		content: {
			title: 'Daha çox xəbərlər',
			description: null,
			image: null,
			backgroundColor: null,
			filter: true,
			list: [
				{
					id: 1,
					path: '/content/1',
					title: 'Seçim turunun mükafatlandırma tədbirinə ev sahibliyi edib',
					description: null,
					image: newsImage2,
					date: new Date()
				},
				{
					id: 2,
					path: '/content/1',
					title: 'Seçim turunun mükafatlandırma tədbirinə ev sahibliyi edib',
					description: null,
					image: newsImage2,
					date: new Date()
				},
				{
					id: 3,
					path: '/content/1',
					title: 'Seçim turunun mükafatlandırma tədbirinə ev sahibliyi edib',
					description: null,
					image: newsImage2,
					date: new Date()
				},
				{
					id: 4,
					path: '/content/1',
					title: 'Seçim turunun mükafatlandırma tədbirinə ev sahibliyi edib',
					description: null,
					image: newsImage2,
					date: new Date()
				},
				{
					id: 5,
					path: '/content/1',
					title: 'Seçim turunun mükafatlandırma tədbirinə ev sahibliyi edib',
					description: null,
					image: newsImage2,
					date: new Date()
				}
			]
		}
	},


	{
		id: 27,
		pageId: 28,
		order: 1,
		boxType: 'eventsBannerContent',
		content: {
			title: 'Tədbirlər',
			description: null,
			image: null,
			backgroundColor: null,
			list: [
				{
					id: 1,
					path: '/content/1',
					title: 'Seçim turunun mükafatlandırma tədbirinə ev sahibliyi edib',
					description: null,
					image: eventsSliderBannerItem,
					date: new Date(),
					location: 'Bakı şəhəri'
				},
				{
					id: 2,
					path: '/content/2',
					title: 'Seçim turunun mükafatlandırma tədbirinə ev sahibliyi edib',
					description: null,
					image: eventsSliderBannerItem,
					date: new Date(),
					location: 'Bakı şəhəri'
				},
				{
					id: 3,
					path: '/content/3',
					title: 'Seçim turunun mükafatlandırma tədbirinə ev sahibliyi edib',
					description: null,
					image: eventsSliderBannerItem,
					date: new Date(),
					location: 'Bakı şəhəri'
				},
				{
					id: 4,
					path: '/content/4',
					title: 'Seçim turunun mükafatlandırma tədbirinə ev sahibliyi edib',
					description: null,
					image: eventsSliderBannerItem,
					date: new Date(),
					location: 'Bakı şəhəri'
				},
				{
					id: 5,
					path: '/content/5',
					title: 'Seçim turunun mükafatlandırma tədbirinə ev sahibliyi edib',
					description: null,
					image: eventsSliderBannerItem,
					date: new Date(),
					location: 'Bakı şəhəri'
				},
				{
					id: 6,
					path: '/content/6',
					title: 'Seçim turunun mükafatlandırma tədbirinə ev sahibliyi edib',
					description: null,
					image: eventsSliderBannerItem,
					date: new Date(),
					location: 'Bakı şəhəri'
				},
				{
					id: 7,
					path: '/content/7',
					title: 'Seçim turunun mükafatlandırma tədbirinə ev sahibliyi edib',
					description: null,
					image: eventsSliderBannerItem,
					date: new Date(),
					location: 'Bakı şəhəri'
				},
			]
		}
	},
	{
		id: 28,
		pageId: 28,
		order: 1,
		boxType: 'eventsContent',
		content: {
			title: null,
			description: null,
			image: null,
			backgroundColor: null,
			filter: true,
			list: [
				{
					id: 1,
					path: '/content/1',
					title: 'Seçim turunun mükafatlandırma tədbirinə ev sahibliyi edib',
					description: null,
					image: eventsSliderBannerItem,
					date: new Date(),
					location: 'Bakı şəhəri'
				},
				{
					id: 2,
					path: '/content/2',
					title: 'Seçim turunun mükafatlandırma tədbirinə ev sahibliyi edib',
					description: null,
					image: eventsSliderBannerItem,
					date: new Date(),
					location: 'Bakı şəhəri'
				},
				{
					id: 3,
					path: '/content/3',
					title: 'Seçim turunun mükafatlandırma tədbirinə ev sahibliyi edib',
					description: null,
					image: eventsSliderBannerItem,
					date: new Date(),
					location: 'Bakı şəhəri'
				},
				{
					id: 4,
					path: '/content/4',
					title: 'Seçim turunun mükafatlandırma tədbirinə ev sahibliyi edib',
					description: null,
					image: eventsSliderBannerItem,
					date: new Date(),
					location: 'Bakı şəhəri'
				},
				{
					id: 5,
					path: '/content/5',
					title: 'Seçim turunun mükafatlandırma tədbirinə ev sahibliyi edib',
					description: null,
					image: eventsSliderBannerItem,
					date: new Date(),
					location: 'Bakı şəhəri'
				},
				{
					id: 6,
					path: '/content/6',
					title: 'Seçim turunun mükafatlandırma tədbirinə ev sahibliyi edib',
					description: null,
					image: eventsSliderBannerItem,
					date: new Date(),
					location: 'Bakı şəhəri'
				},
				{
					id: 7,
					path: '/content/7',
					title: 'Seçim turunun mükafatlandırma tədbirinə ev sahibliyi edib',
					description: null,
					image: eventsSliderBannerItem,
					date: new Date(),
					location: 'Bakı şəhəri'
				},
			]
		}
	},
]

export const posts = [
	{
		pageId: 27,
		id: 1,
		path: '/content/1',
		title: 'Seçim turunun mükafatlandırma tədbirinə ev sahibliyi edib',
		description: null,
		image: newsImage2,
		date: new Date()
	},
	{
		pageId: 27,
		id: 2,
		path: '/content/2',
		title: 'Seçim turunun mükafatlandırma tədbirinə ev sahibliyi edib',
		description: null,
		image: newsImage2,
		date: new Date()
	},
	{
		pageId: 27,
		id: 3,
		path: '/content/3',
		title: 'Seçim turunun mükafatlandırma tədbirinə ev sahibliyi edib',
		description: null,
		image: newsImage2,
		date: new Date()
	},
	{
		pageId: 27,
		id: 4,
		path: '/content/4',
		title: 'Seçim turunun mükafatlandırma tədbirinə ev sahibliyi edib',
		description: null,
		image: newsImage2,
		date: new Date()
	},
	{
		pageId: 27,
		id: 5,
		path: '/content/5',
		title: 'Seçim turunun mükafatlandırma tədbirinə ev sahibliyi edib',
		description: null,
		image: newsImage2,
		date: new Date()
	}
]

export const iconsData = [
	{
		id: "whatsapp-solid",
		name: "whatsapp-solid",
		value: "whatsapp-solid"
	},
	{
		id: "twitter-solid",
		name: "twitter-solid",
		value: "twitter-solid"
	},
	{
		id: "telegram-solid",
		name: "telegram-solid",
		value: "telegram-solid"
	},
	{
		id: "link1",
		name: "link1",
		value: "link1"
	},
	{
		id: "wp",
		name: "wp",
		value: "wp"
	},
	{
		id: "images",
		name: "images",
		value: "images"
	},
	{
		id: "calendar_solid_2",
		name: "calendar_solid_2",
		value: "calendar_solid_2"
	},
	{
		id: "linkedin",
		name: "linkedin",
		value: "linkedin"
	},
	{
		id: "insta_fill_n",
		name: "insta_fill_n",
		value: "insta_fill_n"
	},
	{
		id: "fb_fill_n",
		name: "fb_fill_n",
		value: "fb_fill_n"
	},
	{
		id: "awards",
		name: "awards",
		value: "awards"
	},
	{
		id: "zoom-out",
		name: "zoom-out",
		value: "zoom-out"
	},
	{
		id: "zoom-in",
		name: "zoom-in",
		value: "zoom-in"
	},
	{
		id: "zap-off",
		name: "zap-off",
		value: "zap-off"
	},
	{
		id: "zap",
		name: "zap",
		value: "zap"
	},
	{
		id: "youtube",
		name: "youtube",
		value: "youtube"
	},
	{
		id: "x-square",
		name: "x-square",
		value: "x-square"
	},
	{
		id: "x-octagon",
		name: "x-octagon",
		value: "x-octagon"
	},
	{
		id: "x-circle",
		name: "x-circle",
		value: "x-circle"
	},
	{
		id: "x, times",
		name: "x, times",
		value: "x, times"
	},
	{
		id: "wind",
		name: "wind",
		value: "wind"
	},
	{
		id: "wifi-off",
		name: "wifi-off",
		value: "wifi-off"
	},
	{
		id: "wifi",
		name: "wifi",
		value: "wifi"
	},
	{
		id: "watch",
		name: "watch",
		value: "watch"
	},
	{
		id: "volume-x",
		name: "volume-x",
		value: "volume-x"
	},
	{
		id: "volume-2",
		name: "volume-2",
		value: "volume-2"
	},
	{
		id: "volume-1",
		name: "volume-1",
		value: "volume-1"
	},
	{
		id: "volume",
		name: "volume",
		value: "volume"
	},
	{
		id: "voicemail",
		name: "voicemail",
		value: "voicemail"
	},
	{
		id: "video-off",
		name: "video-off",
		value: "video-off"
	},
	{
		id: "video",
		name: "video",
		value: "video"
	},
	{
		id: "user-x",
		name: "user-x",
		value: "user-x"
	},
	{
		id: "users",
		name: "users",
		value: "users"
	},
	{
		id: "user-plus",
		name: "user-plus",
		value: "user-plus"
	},
	{
		id: "user-minus",
		name: "user-minus",
		value: "user-minus"
	},
	{
		id: "user-check",
		name: "user-check",
		value: "user-check"
	},
	{
		id: "user",
		name: "user",
		value: "user"
	},
	{
		id: "upload-cloud",
		name: "upload-cloud",
		value: "upload-cloud"
	},
	{
		id: "upload",
		name: "upload",
		value: "upload"
	},
	{
		id: "unlock",
		name: "unlock",
		value: "unlock"
	},
	{
		id: "underline",
		name: "underline",
		value: "underline"
	},
	{
		id: "umbrella",
		name: "umbrella",
		value: "umbrella"
	},
	{
		id: "type",
		name: "type",
		value: "type"
	},
	{
		id: "twitter",
		name: "twitter",
		value: "twitter"
	},
	{
		id: "twitch",
		name: "twitch",
		value: "twitch"
	},
	{
		id: "tv",
		name: "tv",
		value: "tv"
	},
	{
		id: "truck",
		name: "truck",
		value: "truck"
	},
	{
		id: "triangle",
		name: "triangle",
		value: "triangle"
	},
	{
		id: "trending-up",
		name: "trending-up",
		value: "trending-up"
	},
	{
		id: "trending-down",
		name: "trending-down",
		value: "trending-down"
	},
	{
		id: "trello",
		name: "trello",
		value: "trello"
	},
	{
		id: "trash-2",
		name: "trash-2",
		value: "trash-2"
	},
	{
		id: "trash",
		name: "trash",
		value: "trash"
	},
	{
		id: "tool",
		name: "tool",
		value: "tool"
	},
	{
		id: "toggle-right",
		name: "toggle-right",
		value: "toggle-right"
	},
	{
		id: "toggle-left",
		name: "toggle-left",
		value: "toggle-left"
	},
	{
		id: "thumbs-up",
		name: "thumbs-up",
		value: "thumbs-up"
	},
	{
		id: "thumbs-down",
		name: "thumbs-down",
		value: "thumbs-down"
	},
	{
		id: "thermometer",
		name: "thermometer",
		value: "thermometer"
	},
	{
		id: "terminal",
		name: "terminal",
		value: "terminal"
	},
	{
		id: "target",
		name: "target",
		value: "target"
	},
	{
		id: "tag",
		name: "tag",
		value: "tag"
	},
	{
		id: "tablet",
		name: "tablet",
		value: "tablet"
	},
	{
		id: "sunset",
		name: "sunset",
		value: "sunset"
	},
	{
		id: "sunrise",
		name: "sunrise",
		value: "sunrise"
	},
	{
		id: "sun",
		name: "sun",
		value: "sun"
	},
	{
		id: "stop-circle",
		name: "stop-circle",
		value: "stop-circle"
	},
	{
		id: "star",
		name: "star",
		value: "star"
	},
	{
		id: "square",
		name: "square",
		value: "square"
	},
	{
		id: "speaker",
		name: "speaker",
		value: "speaker"
	},
	{
		id: "smile",
		name: "smile",
		value: "smile"
	},
	{
		id: "smartphone",
		name: "smartphone",
		value: "smartphone"
	},
	{
		id: "sliders",
		name: "sliders",
		value: "sliders"
	},
	{
		id: "slash-divider",
		name: "slash-divider",
		value: "slash-divider"
	},
	{
		id: "slash",
		name: "slash",
		value: "slash"
	},
	{
		id: "slack",
		name: "slack",
		value: "slack"
	},
	{
		id: "skip-forward",
		name: "skip-forward",
		value: "skip-forward"
	},
	{
		id: "skip-back",
		name: "skip-back",
		value: "skip-back"
	},
	{
		id: "sidebar",
		name: "sidebar",
		value: "sidebar"
	},
	{
		id: "shuffle",
		name: "shuffle",
		value: "shuffle"
	},
	{
		id: "shopping-cart",
		name: "shopping-cart",
		value: "shopping-cart"
	},
	{
		id: "shopping-bag",
		name: "shopping-bag",
		value: "shopping-bag"
	},
	{
		id: "shield-off",
		name: "shield-off",
		value: "shield-off"
	},
	{
		id: "shield",
		name: "shield",
		value: "shield"
	},
	{
		id: "share-2",
		name: "share-2",
		value: "share-2"
	},
	{
		id: "share",
		name: "share",
		value: "share"
	},
	{
		id: "settings",
		name: "settings",
		value: "settings"
	},
	{
		id: "server",
		name: "server",
		value: "server"
	},
	{
		id: "send",
		name: "send",
		value: "send"
	},
	{
		id: "search1",
		name: "search1",
		value: "search1"
	},
	{
		id: "scissors",
		name: "scissors",
		value: "scissors"
	},
	{
		id: "save",
		name: "save",
		value: "save"
	},
	{
		id: "rss",
		name: "rss",
		value: "rss"
	},
	{
		id: "rotate-cw",
		name: "rotate-cw",
		value: "rotate-cw"
	},
	{
		id: "rotate-ccw",
		name: "rotate-ccw",
		value: "rotate-ccw"
	},
	{
		id: "rocket",
		name: "rocket",
		value: "rocket"
	},
	{
		id: "rewind",
		name: "rewind",
		value: "rewind"
	},
	{
		id: "repeat",
		name: "repeat",
		value: "repeat"
	},
	{
		id: "refresh-cw",
		name: "refresh-cw",
		value: "refresh-cw"
	},
	{
		id: "refresh-ccw",
		name: "refresh-ccw",
		value: "refresh-ccw"
	},
	{
		id: "radio",
		name: "radio",
		value: "radio"
	},
	{
		id: "printer",
		name: "printer",
		value: "printer"
	},
	{
		id: "power",
		name: "power",
		value: "power"
	},
	{
		id: "pocket",
		name: "pocket",
		value: "pocket"
	},
	{
		id: "plus-square",
		name: "plus-square",
		value: "plus-square"
	},
	{
		id: "plus-circle",
		name: "plus-circle",
		value: "plus-circle"
	},
	{
		id: "plus",
		name: "plus",
		value: "plus"
	},
	{
		id: "play-circle",
		name: "play-circle",
		value: "play-circle"
	},
	{
		id: "play",
		name: "play",
		value: "play"
	},
	{
		id: "pie-chart",
		name: "pie-chart",
		value: "pie-chart"
	},
	{
		id: "phone-outgoing",
		name: "phone-outgoing",
		value: "phone-outgoing"
	},
	{
		id: "phone-off",
		name: "phone-off",
		value: "phone-off"
	},
	{
		id: "phone-missed",
		name: "phone-missed",
		value: "phone-missed"
	},
	{
		id: "phone-incoming",
		name: "phone-incoming",
		value: "phone-incoming"
	},
	{
		id: "phone-forwarded",
		name: "phone-forwarded",
		value: "phone-forwarded"
	},
	{
		id: "phone-call",
		name: "phone-call",
		value: "phone-call"
	},
	{
		id: "phone1",
		name: "phone1",
		value: "phone1"
	},
	{
		id: "percent",
		name: "percent",
		value: "percent"
	},
	{
		id: "pen-tool",
		name: "pen-tool",
		value: "pen-tool"
	},
	{
		id: "pause-circle",
		name: "pause-circle",
		value: "pause-circle"
	},
	{
		id: "pause",
		name: "pause",
		value: "pause"
	},
	{
		id: "paperclip",
		name: "paperclip",
		value: "paperclip"
	},
	{
		id: "package",
		name: "package",
		value: "package"
	},
	{
		id: "octagon",
		name: "octagon",
		value: "octagon"
	},
	{
		id: "navigation-2",
		name: "navigation-2",
		value: "navigation-2"
	},
	{
		id: "navigation",
		name: "navigation",
		value: "navigation"
	},
	{
		id: "music",
		name: "music",
		value: "music"
	},
	{
		id: "move",
		name: "move",
		value: "move"
	},
	{
		id: "mouse-pointer",
		name: "mouse-pointer",
		value: "mouse-pointer"
	},
	{
		id: "more-vertical",
		name: "more-vertical",
		value: "more-vertical"
	},
	{
		id: "more-horizontal",
		name: "more-horizontal",
		value: "more-horizontal"
	},
	{
		id: "moon",
		name: "moon",
		value: "moon"
	},
	{
		id: "monitor",
		name: "monitor",
		value: "monitor"
	},
	{
		id: "minus-square",
		name: "minus-square",
		value: "minus-square"
	},
	{
		id: "minus-circle",
		name: "minus-circle",
		value: "minus-circle"
	},
	{
		id: "minus",
		name: "minus",
		value: "minus"
	},
	{
		id: "minimize-2",
		name: "minimize-2",
		value: "minimize-2"
	},
	{
		id: "minimize",
		name: "minimize",
		value: "minimize"
	},
	{
		id: "mic-off",
		name: "mic-off",
		value: "mic-off"
	},
	{
		id: "mic",
		name: "mic",
		value: "mic"
	},
	{
		id: "message-square",
		name: "message-square",
		value: "message-square"
	},
	{
		id: "message-circle",
		name: "message-circle",
		value: "message-circle"
	},
	{
		id: "menu-2",
		name: "menu-2",
		value: "menu-2"
	},
	{
		id: "menu",
		name: "menu",
		value: "menu"
	},
	{
		id: "meh",
		name: "meh",
		value: "meh"
	},
	{
		id: "maximize-2",
		name: "maximize-2",
		value: "maximize-2"
	},
	{
		id: "maximize",
		name: "maximize",
		value: "maximize"
	},
	{
		id: "map-pin",
		name: "map-pin",
		value: "map-pin"
	},
	{
		id: "map",
		name: "map",
		value: "map"
	},
	{
		id: "mail1",
		name: "mail1",
		value: "mail1"
	},
	{
		id: "log-out",
		name: "log-out",
		value: "log-out"
	},
	{
		id: "log-in",
		name: "log-in",
		value: "log-in"
	},
	{
		id: "lock",
		name: "lock",
		value: "lock"
	},
	{
		id: "loader",
		name: "loader",
		value: "loader"
	},
	{
		id: "list",
		name: "list",
		value: "list"
	},
	{
		id: "linkedin1",
		name: "linkedin1",
		value: "linkedin1"
	},
	{
		id: "link-2",
		name: "link-2",
		value: "link-2"
	},
	{
		id: "link",
		name: "link",
		value: "link"
	},
	{
		id: "life-buoy",
		name: "life-buoy",
		value: "life-buoy"
	},
	{
		id: "layout",
		name: "layout",
		value: "layout"
	},
	{
		id: "key",
		name: "key",
		value: "key"
	},
	{
		id: "italic",
		name: "italic",
		value: "italic"
	},
	{
		id: "instagram1",
		name: "instagram1",
		value: "instagram1"
	},
	{
		id: "info",
		name: "info",
		value: "info"
	},
	{
		id: "inbox",
		name: "inbox",
		value: "inbox"
	},
	{
		id: "image",
		name: "image",
		value: "image"
	},
	{
		id: "home",
		name: "home",
		value: "home"
	},
	{
		id: "hexagon",
		name: "hexagon",
		value: "hexagon"
	},
	{
		id: "help-circle",
		name: "help-circle",
		value: "help-circle"
	},
	{
		id: "heart",
		name: "heart",
		value: "heart"
	},
	{
		id: "headphones",
		name: "headphones",
		value: "headphones"
	},
	{
		id: "hash",
		name: "hash",
		value: "hash"
	},
	{
		id: "hard-drive",
		name: "hard-drive",
		value: "hard-drive"
	},
	{
		id: "grid",
		name: "grid",
		value: "grid"
	},
	{
		id: "globe",
		name: "globe",
		value: "globe"
	},
	{
		id: "git-pull-request",
		name: "git-pull-request",
		value: "git-pull-request"
	},
	{
		id: "git-merge",
		name: "git-merge",
		value: "git-merge"
	},
	{
		id: "gitlab",
		name: "gitlab",
		value: "gitlab"
	},
	{
		id: "github",
		name: "github",
		value: "github"
	},
	{
		id: "git-commit",
		name: "git-commit",
		value: "git-commit"
	},
	{
		id: "git-branch",
		name: "git-branch",
		value: "git-branch"
	},
	{
		id: "gift",
		name: "gift",
		value: "gift"
	},
	{
		id: "frown",
		name: "frown",
		value: "frown"
	},
	{
		id: "framer",
		name: "framer",
		value: "framer"
	},
	{
		id: "folder-plus",
		name: "folder-plus",
		value: "folder-plus"
	},
	{
		id: "folder-minus",
		name: "folder-minus",
		value: "folder-minus"
	},
	{
		id: "folder",
		name: "folder",
		value: "folder"
	},
	{
		id: "flag",
		name: "flag",
		value: "flag"
	},
	{
		id: "Filters-lines",
		name: "Filters-lines",
		value: "Filters-lines"
	},
	{
		id: "filter",
		name: "filter",
		value: "filter"
	},
	{
		id: "film",
		name: "film",
		value: "film"
	},
	{
		id: "file-text",
		name: "file-text",
		value: "file-text"
	},
	{
		id: "file-plus",
		name: "file-plus",
		value: "file-plus"
	},
	{
		id: "file-minus",
		name: "file-minus",
		value: "file-minus"
	},
	{
		id: "file",
		name: "file",
		value: "file"
	},
	{
		id: "figma",
		name: "figma",
		value: "figma"
	},
	{
		id: "feather",
		name: "feather",
		value: "feather"
	},
	{
		id: "fast-forward",
		name: "fast-forward",
		value: "fast-forward"
	},
	{
		id: "facebook",
		name: "facebook",
		value: "facebook"
	},
	{
		id: "eye-off",
		name: "eye-off",
		value: "eye-off"
	},
	{
		id: "eye",
		name: "eye",
		value: "eye"
	},
	{
		id: "external-link",
		name: "external-link",
		value: "external-link"
	},
	{
		id: "edit-3",
		name: "edit-3",
		value: "edit-3"
	},
	{
		id: "edit-2",
		name: "edit-2",
		value: "edit-2"
	},
	{
		id: "edit",
		name: "edit",
		value: "edit"
	},
	{
		id: "droplet",
		name: "droplet",
		value: "droplet"
	},
	{
		id: "dribbble",
		name: "dribbble",
		value: "dribbble"
	},
	{
		id: "download-cloud",
		name: "download-cloud",
		value: "download-cloud"
	},
	{
		id: "download",
		name: "download",
		value: "download"
	},
	{
		id: "dollar-sign",
		name: "dollar-sign",
		value: "dollar-sign"
	},
	{
		id: "divide-square",
		name: "divide-square",
		value: "divide-square"
	},
	{
		id: "divide-circle",
		name: "divide-circle",
		value: "divide-circle"
	},
	{
		id: "divide",
		name: "divide",
		value: "divide"
	},
	{
		id: "disc",
		name: "disc",
		value: "disc"
	},
	{
		id: "delete",
		name: "delete",
		value: "delete"
	},
	{
		id: "database",
		name: "database",
		value: "database"
	},
	{
		id: "crosshair",
		name: "crosshair",
		value: "crosshair"
	},
	{
		id: "crop",
		name: "crop",
		value: "crop"
	},
	{
		id: "credit-card",
		name: "credit-card",
		value: "credit-card"
	},
	{
		id: "cpu",
		name: "cpu",
		value: "cpu"
	},
	{
		id: "corner-up-right",
		name: "corner-up-right",
		value: "corner-up-right"
	},
	{
		id: "corner-up-left",
		name: "corner-up-left",
		value: "corner-up-left"
	},
	{
		id: "corner-right-up",
		name: "corner-right-up",
		value: "corner-right-up"
	},
	{
		id: "corner-right-down",
		name: "corner-right-down",
		value: "corner-right-down"
	},
	{
		id: "corner-left-up",
		name: "corner-left-up",
		value: "corner-left-up"
	},
	{
		id: "corner-left-down",
		name: "corner-left-down",
		value: "corner-left-down"
	},
	{
		id: "corner-down-right",
		name: "corner-down-right",
		value: "corner-down-right"
	},
	{
		id: "corner-down-left",
		name: "corner-down-left",
		value: "corner-down-left"
	},
	{
		id: "copy",
		name: "copy",
		value: "copy"
	},
	{
		id: "compass",
		name: "compass",
		value: "compass"
	},
	{
		id: "command",
		name: "command",
		value: "command"
	},
	{
		id: "columns",
		name: "columns",
		value: "columns"
	},
	{
		id: "coin-stack",
		name: "coin-stack",
		value: "coin-stack"
	},
	{
		id: "coins",
		name: "coins",
		value: "coins"
	},
	{
		id: "coffee",
		name: "coffee",
		value: "coffee"
	},
	{
		id: "codesandbox",
		name: "codesandbox",
		value: "codesandbox"
	},
	{
		id: "codepen",
		name: "codepen",
		value: "codepen"
	},
	{
		id: "code",
		name: "code",
		value: "code"
	},
	{
		id: "cloud-snow",
		name: "cloud-snow",
		value: "cloud-snow"
	},
	{
		id: "cloud-rain",
		name: "cloud-rain",
		value: "cloud-rain"
	},
	{
		id: "cloud-off",
		name: "cloud-off",
		value: "cloud-off"
	},
	{
		id: "cloud-lightning",
		name: "cloud-lightning",
		value: "cloud-lightning"
	},
	{
		id: "cloud-drizzle",
		name: "cloud-drizzle",
		value: "cloud-drizzle"
	},
	{
		id: "cloud",
		name: "cloud",
		value: "cloud"
	},
	{
		id: "clock",
		name: "clock",
		value: "clock"
	},
	{
		id: "clipboard",
		name: "clipboard",
		value: "clipboard"
	},
	{
		id: "circle",
		name: "circle",
		value: "circle"
	},
	{
		id: "chrome",
		name: "chrome",
		value: "chrome"
	},
	{
		id: "chevron-up",
		name: "chevron-up",
		value: "chevron-up"
	},
	{
		id: "chevrons-up",
		name: "chevrons-up",
		value: "chevrons-up"
	},
	{
		id: "chevrons-right",
		name: "chevrons-right",
		value: "chevrons-right"
	},
	{
		id: "chevrons-left",
		name: "chevrons-left",
		value: "chevrons-left"
	},
	{
		id: "chevrons-down",
		name: "chevrons-down",
		value: "chevrons-down"
	},
	{
		id: "chevron-right",
		name: "chevron-right",
		value: "chevron-right"
	},
	{
		id: "chevron-left",
		name: "chevron-left",
		value: "chevron-left"
	},
	{
		id: "chevron-down",
		name: "chevron-down",
		value: "chevron-down"
	},
	{
		id: "check-square",
		name: "check-square",
		value: "check-square"
	},
	{
		id: "check-circle",
		name: "check-circle",
		value: "check-circle"
	},
	{
		id: "check",
		name: "check",
		value: "check"
	},
	{
		id: "cast",
		name: "cast",
		value: "cast"
	},
	{
		id: "camera-off",
		name: "camera-off",
		value: "camera-off"
	},
	{
		id: "camera",
		name: "camera",
		value: "camera"
	},
	{
		id: "calendar1",
		name: "calendar1",
		value: "calendar1"
	},
	{
		id: "building-08",
		name: "building-08",
		value: "building-08"
	},
	{
		id: "briefcase",
		name: "briefcase",
		value: "briefcase"
	},
	{
		id: "box",
		name: "box",
		value: "box"
	},
	{
		id: "book-open",
		name: "book-open",
		value: "book-open"
	},
	{
		id: "bookmark",
		name: "bookmark",
		value: "bookmark"
	},
	{
		id: "book",
		name: "book",
		value: "book"
	},
	{
		id: "bold",
		name: "bold",
		value: "bold"
	},
	{
		id: "bluetooth",
		name: "bluetooth",
		value: "bluetooth"
	},
	{
		id: "bell-off",
		name: "bell-off",
		value: "bell-off"
	},
	{
		id: "bell",
		name: "bell",
		value: "bell"
	},
	{
		id: "battery-charging",
		name: "battery-charging",
		value: "battery-charging"
	},
	{
		id: "battery",
		name: "battery",
		value: "battery"
	},
	{
		id: "bar-chart-2",
		name: "bar-chart-2",
		value: "bar-chart-2"
	},
	{
		id: "bar-chart",
		name: "bar-chart",
		value: "bar-chart"
	},
	{
		id: "award",
		name: "award",
		value: "award"
	},
	{
		id: "at-sign",
		name: "at-sign",
		value: "at-sign"
	},
	{
		id: "arrow-up-right",
		name: "arrow-up-right",
		value: "arrow-up-right"
	},
	{
		id: "arrow-up-left",
		name: "arrow-up-left",
		value: "arrow-up-left"
	},
	{
		id: "arrow-up-circle",
		name: "arrow-up-circle",
		value: "arrow-up-circle"
	},
	{
		id: "arrow-up",
		name: "arrow-up",
		value: "arrow-up"
	},
	{
		id: "arrow-right-circle",
		name: "arrow-right-circle",
		value: "arrow-right-circle"
	},
	{
		id: "arrow-right",
		name: "arrow-right",
		value: "arrow-right"
	},
	{
		id: "arrow-left-circle",
		name: "arrow-left-circle",
		value: "arrow-left-circle"
	},
	{
		id: "arrow-left",
		name: "arrow-left",
		value: "arrow-left"
	},
	{
		id: "arrow-down-right",
		name: "arrow-down-right",
		value: "arrow-down-right"
	},
	{
		id: "arrow-down-left",
		name: "arrow-down-left",
		value: "arrow-down-left"
	},
	{
		id: "arrow-down-circle",
		name: "arrow-down-circle",
		value: "arrow-down-circle"
	},
	{
		id: "arrow-down",
		name: "arrow-down",
		value: "arrow-down"
	},
	{
		id: "archive",
		name: "archive",
		value: "archive"
	},
	{
		id: "aperture",
		name: "aperture",
		value: "aperture"
	},
	{
		id: "anchor",
		name: "anchor",
		value: "anchor"
	},
	{
		id: "align-right",
		name: "align-right",
		value: "align-right"
	},
	{
		id: "align-left",
		name: "align-left",
		value: "align-left"
	},
	{
		id: "align-justify",
		name: "align-justify",
		value: "align-justify"
	},
	{
		id: "align-center",
		name: "align-center",
		value: "align-center"
	},
	{
		id: "alert-triangle",
		name: "alert-triangle",
		value: "alert-triangle"
	},
	{
		id: "alert-octagon",
		name: "alert-octagon",
		value: "alert-octagon"
	},
	{
		id: "alert-circle",
		name: "alert-circle",
		value: "alert-circle"
	},
	{
		id: "airplay",
		name: "airplay",
		value: "airplay"
	},
	{
		id: "activity",
		name: "activity",
		value: "activity"
	},
	{
		id: "layers",
		name: "layers",
		value: "layers"
	},
	{
		id: "layers1",
		name: "layers1",
		value: "layers1"
	},
	{
		id: "download1",
		name: "download1",
		value: "download1"
	},
	{
		id: "plus1",
		name: "plus1",
		value: "plus1"
	},
	{
		id: "minus1",
		name: "minus1",
		value: "minus1"
	},
	{
		id: "facebook_fill",
		name: "facebook_fill",
		value: "facebook_fill"
	},
	{
		id: "instagram_fill",
		name: "instagram_fill",
		value: "instagram_fill"
	},
	{
		id: "person",
		name: "person",
		value: "person"
	},
	{
		id: "skype_fill",
		name: "skype_fill",
		value: "skype_fill"
	},
	{
		id: "university",
		name: "university",
		value: "university"
	},
	{
		id: "work",
		name: "work",
		value: "work"
	},
	{
		id: "euro",
		name: "euro",
		value: "euro"
	},
	{
		id: "calendar_2",
		name: "calendar_2",
		value: "calendar_2"
	},
	{
		id: "url",
		name: "url",
		value: "url"
	},
	{
		id: "mail",
		name: "mail",
		value: "mail"
	},
	{
		id: "location",
		name: "location",
		value: "location"
	},
	{
		id: "phone",
		name: "phone",
		value: "phone"
	},
	{
		id: "search",
		name: "search",
		value: "search"
	},
	{
		id: "tg",
		name: "tg",
		value: "tg"
	},
	{
		id: "tg_circle",
		name: "tg_circle",
		value: "tg_circle"
	},
	{
		id: "vp",
		name: "vp",
		value: "vp"
	},
	{
		id: "vp_circle",
		name: "vp_circle",
		value: "vp_circle"
	},
	{
		id: "arrow_right",
		name: "arrow_right",
		value: "arrow_right"
	},
	{
		id: "arrow_top",
		name: "arrow_top",
		value: "arrow_top"
	},
	{
		id: "arrow_left",
		name: "arrow_left",
		value: "arrow_left"
	},
	{
		id: "arrow_bottom",
		name: "arrow_bottom",
		value: "arrow_bottom"
	},
	{
		id: "arrow_chevron_right_top",
		name: "arrow_chevron_right_top",
		value: "arrow_chevron_right_top"
	},
	{
		id: "arrow_chevron_left",
		name: "arrow_chevron_left",
		value: "arrow_chevron_left"
	},
	{
		id: "arrow_chevron_bottom",
		name: "arrow_chevron_bottom",
		value: "arrow_chevron_bottom"
	},
	{
		id: "arrow_chevron_right",
		name: "arrow_chevron_right",
		value: "arrow_chevron_right"
	},
	{
		id: "arrow_chevron_top",
		name: "arrow_chevron_top",
		value: "arrow_chevron_top"
	},
	{
		id: "calendar",
		name: "calendar",
		value: "calendar"
	},
	{
		id: "instagram",
		name: "instagram",
		value: "instagram"
	},
	{
		id: "instagram_circle",
		name: "instagram_circle",
		value: "instagram_circle"
	},
	{
		id: "linkedin2",
		name: "linkedin2",
		value: "linkedin2"
	},
	{
		id: "linkedin_circle",
		name: "linkedin_circle",
		value: "linkedin_circle"
	}
]