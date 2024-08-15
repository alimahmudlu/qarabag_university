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
		name: "wp",
		value: "sg-icon-wp"
	},
	{
		name: "images",
		value: "sg-icon-images"
	},
	{
		name: "calendar_solid_2",
		value: "sg-icon-calendar_solid_2"
	},
	{
		name: "linkedin",
		value: "sg-icon-linkedin"
	},
	{
		name: "insta_fill_n",
		value: "sg-icon-insta_fill_n"
	},
	{
		name: "fb_fill_n",
		value: "sg-icon-fb_fill_n"
	},
	{
		name: "awards",
		value: "sg-icon-awards"
	},
	{
		name: "zoom-out",
		value: "sg-icon-zoom-out"
	},
	{
		name: "zoom-in",
		value: "sg-icon-zoom-in"
	},
	{
		name: "zap-off",
		value: "sg-icon-zap-off"
	},
	{
		name: "zap",
		value: "sg-icon-zap"
	},
	{
		name: "youtube",
		value: "sg-icon-youtube"
	},
	{
		name: "x-square",
		value: "sg-icon-x-square"
	},
	{
		name: "x-octagon",
		value: "sg-icon-x-octagon"
	},
	{
		name: "x-circle",
		value: "sg-icon-x-circle"
	},
	{
		name: "x, times",
		value: "sg-icon-x, times"
	},
	{
		name: "wind",
		value: "sg-icon-wind"
	},
	{
		name: "wifi-off",
		value: "sg-icon-wifi-off"
	},
	{
		name: "wifi",
		value: "sg-icon-wifi"
	},
	{
		name: "watch",
		value: "sg-icon-watch"
	},
	{
		name: "volume-x",
		value: "sg-icon-volume-x"
	},
	{
		name: "volume-2",
		value: "sg-icon-volume-2"
	},
	{
		name: "volume-1",
		value: "sg-icon-volume-1"
	},
	{
		name: "volume",
		value: "sg-icon-volume"
	},
	{
		name: "voicemail",
		value: "sg-icon-voicemail"
	},
	{
		name: "video-off",
		value: "sg-icon-video-off"
	},
	{
		name: "video",
		value: "sg-icon-video"
	},
	{
		name: "user-x",
		value: "sg-icon-user-x"
	},
	{
		name: "users",
		value: "sg-icon-users"
	},
	{
		name: "user-plus",
		value: "sg-icon-user-plus"
	},
	{
		name: "user-minus",
		value: "sg-icon-user-minus"
	},
	{
		name: "user-check",
		value: "sg-icon-user-check"
	},
	{
		name: "user",
		value: "sg-icon-user"
	},
	{
		name: "upload-cloud",
		value: "sg-icon-upload-cloud"
	},
	{
		name: "upload",
		value: "sg-icon-upload"
	},
	{
		name: "unlock",
		value: "sg-icon-unlock"
	},
	{
		name: "underline",
		value: "sg-icon-underline"
	},
	{
		name: "umbrella",
		value: "sg-icon-umbrella"
	},
	{
		name: "type",
		value: "sg-icon-type"
	},
	{
		name: "twitter",
		value: "sg-icon-twitter"
	},
	{
		name: "twitch",
		value: "sg-icon-twitch"
	},
	{
		name: "tv",
		value: "sg-icon-tv"
	},
	{
		name: "truck",
		value: "sg-icon-truck"
	},
	{
		name: "triangle",
		value: "sg-icon-triangle"
	},
	{
		name: "trending-up",
		value: "sg-icon-trending-up"
	},
	{
		name: "trending-down",
		value: "sg-icon-trending-down"
	},
	{
		name: "trello",
		value: "sg-icon-trello"
	},
	{
		name: "trash-2",
		value: "sg-icon-trash-2"
	},
	{
		name: "trash",
		value: "sg-icon-trash"
	},
	{
		name: "tool",
		value: "sg-icon-tool"
	},
	{
		name: "toggle-right",
		value: "sg-icon-toggle-right"
	},
	{
		name: "toggle-left",
		value: "sg-icon-toggle-left"
	},
	{
		name: "thumbs-up",
		value: "sg-icon-thumbs-up"
	},
	{
		name: "thumbs-down",
		value: "sg-icon-thumbs-down"
	},
	{
		name: "thermometer",
		value: "sg-icon-thermometer"
	},
	{
		name: "terminal",
		value: "sg-icon-terminal"
	},
	{
		name: "target",
		value: "sg-icon-target"
	},
	{
		name: "tag",
		value: "sg-icon-tag"
	},
	{
		name: "tablet",
		value: "sg-icon-tablet"
	},
	{
		name: "sunset",
		value: "sg-icon-sunset"
	},
	{
		name: "sunrise",
		value: "sg-icon-sunrise"
	},
	{
		name: "sun",
		value: "sg-icon-sun"
	},
	{
		name: "stop-circle",
		value: "sg-icon-stop-circle"
	},
	{
		name: "star",
		value: "sg-icon-star"
	},
	{
		name: "square",
		value: "sg-icon-square"
	},
	{
		name: "speaker",
		value: "sg-icon-speaker"
	},
	{
		name: "smile",
		value: "sg-icon-smile"
	},
	{
		name: "smartphone",
		value: "sg-icon-smartphone"
	},
	{
		name: "sliders",
		value: "sg-icon-sliders"
	},
	{
		name: "slash-divider",
		value: "sg-icon-slash-divider"
	},
	{
		name: "slash",
		value: "sg-icon-slash"
	},
	{
		name: "slack",
		value: "sg-icon-slack"
	},
	{
		name: "skip-forward",
		value: "sg-icon-skip-forward"
	},
	{
		name: "skip-back",
		value: "sg-icon-skip-back"
	},
	{
		name: "sidebar",
		value: "sg-icon-sidebar"
	},
	{
		name: "shuffle",
		value: "sg-icon-shuffle"
	},
	{
		name: "shopping-cart",
		value: "sg-icon-shopping-cart"
	},
	{
		name: "shopping-bag",
		value: "sg-icon-shopping-bag"
	},
	{
		name: "shield-off",
		value: "sg-icon-shield-off"
	},
	{
		name: "shield",
		value: "sg-icon-shield"
	},
	{
		name: "share-2",
		value: "sg-icon-share-2"
	},
	{
		name: "share",
		value: "sg-icon-share"
	},
	{
		name: "settings",
		value: "sg-icon-settings"
	},
	{
		name: "server",
		value: "sg-icon-server"
	},
	{
		name: "send",
		value: "sg-icon-send"
	},
	{
		name: "search1",
		value: "sg-icon-search1"
	},
	{
		name: "scissors",
		value: "sg-icon-scissors"
	},
	{
		name: "save",
		value: "sg-icon-save"
	},
	{
		name: "rss",
		value: "sg-icon-rss"
	},
	{
		name: "rotate-cw",
		value: "sg-icon-rotate-cw"
	},
	{
		name: "rotate-ccw",
		value: "sg-icon-rotate-ccw"
	},
	{
		name: "rocket",
		value: "sg-icon-rocket"
	},
	{
		name: "rewind",
		value: "sg-icon-rewind"
	},
	{
		name: "repeat",
		value: "sg-icon-repeat"
	},
	{
		name: "refresh-cw",
		value: "sg-icon-refresh-cw"
	},
	{
		name: "refresh-ccw",
		value: "sg-icon-refresh-ccw"
	},
	{
		name: "radio",
		value: "sg-icon-radio"
	},
	{
		name: "printer",
		value: "sg-icon-printer"
	},
	{
		name: "power",
		value: "sg-icon-power"
	},
	{
		name: "pocket",
		value: "sg-icon-pocket"
	},
	{
		name: "plus-square",
		value: "sg-icon-plus-square"
	},
	{
		name: "plus-circle",
		value: "sg-icon-plus-circle"
	},
	{
		name: "plus",
		value: "sg-icon-plus"
	},
	{
		name: "play-circle",
		value: "sg-icon-play-circle"
	},
	{
		name: "play",
		value: "sg-icon-play"
	},
	{
		name: "pie-chart",
		value: "sg-icon-pie-chart"
	},
	{
		name: "phone-outgoing",
		value: "sg-icon-phone-outgoing"
	},
	{
		name: "phone-off",
		value: "sg-icon-phone-off"
	},
	{
		name: "phone-missed",
		value: "sg-icon-phone-missed"
	},
	{
		name: "phone-incoming",
		value: "sg-icon-phone-incoming"
	},
	{
		name: "phone-forwarded",
		value: "sg-icon-phone-forwarded"
	},
	{
		name: "phone-call",
		value: "sg-icon-phone-call"
	},
	{
		name: "phone1",
		value: "sg-icon-phone1"
	},
	{
		name: "percent",
		value: "sg-icon-percent"
	},
	{
		name: "pen-tool",
		value: "sg-icon-pen-tool"
	},
	{
		name: "pause-circle",
		value: "sg-icon-pause-circle"
	},
	{
		name: "pause",
		value: "sg-icon-pause"
	},
	{
		name: "paperclip",
		value: "sg-icon-paperclip"
	},
	{
		name: "package",
		value: "sg-icon-package"
	},
	{
		name: "octagon",
		value: "sg-icon-octagon"
	},
	{
		name: "navigation-2",
		value: "sg-icon-navigation-2"
	},
	{
		name: "navigation",
		value: "sg-icon-navigation"
	},
	{
		name: "music",
		value: "sg-icon-music"
	},
	{
		name: "move",
		value: "sg-icon-move"
	},
	{
		name: "mouse-pointer",
		value: "sg-icon-mouse-pointer"
	},
	{
		name: "more-vertical",
		value: "sg-icon-more-vertical"
	},
	{
		name: "more-horizontal",
		value: "sg-icon-more-horizontal"
	},
	{
		name: "moon",
		value: "sg-icon-moon"
	},
	{
		name: "monitor",
		value: "sg-icon-monitor"
	},
	{
		name: "minus-square",
		value: "sg-icon-minus-square"
	},
	{
		name: "minus-circle",
		value: "sg-icon-minus-circle"
	},
	{
		name: "minus",
		value: "sg-icon-minus"
	},
	{
		name: "minimize-2",
		value: "sg-icon-minimize-2"
	},
	{
		name: "minimize",
		value: "sg-icon-minimize"
	},
	{
		name: "mic-off",
		value: "sg-icon-mic-off"
	},
	{
		name: "mic",
		value: "sg-icon-mic"
	},
	{
		name: "message-square",
		value: "sg-icon-message-square"
	},
	{
		name: "message-circle",
		value: "sg-icon-message-circle"
	},
	{
		name: "menu-2",
		value: "sg-icon-menu-2"
	},
	{
		name: "menu",
		value: "sg-icon-menu"
	},
	{
		name: "meh",
		value: "sg-icon-meh"
	},
	{
		name: "maximize-2",
		value: "sg-icon-maximize-2"
	},
	{
		name: "maximize",
		value: "sg-icon-maximize"
	},
	{
		name: "map-pin",
		value: "sg-icon-map-pin"
	},
	{
		name: "map",
		value: "sg-icon-map"
	},
	{
		name: "mail1",
		value: "sg-icon-mail1"
	},
	{
		name: "log-out",
		value: "sg-icon-log-out"
	},
	{
		name: "log-in",
		value: "sg-icon-log-in"
	},
	{
		name: "lock",
		value: "sg-icon-lock"
	},
	{
		name: "loader",
		value: "sg-icon-loader"
	},
	{
		name: "list",
		value: "sg-icon-list"
	},
	{
		name: "linkedin1",
		value: "sg-icon-linkedin1"
	},
	{
		name: "link-2",
		value: "sg-icon-link-2"
	},
	{
		name: "link",
		value: "sg-icon-link"
	},
	{
		name: "life-buoy",
		value: "sg-icon-life-buoy"
	},
	{
		name: "layout",
		value: "sg-icon-layout"
	},
	{
		name: "key",
		value: "sg-icon-key"
	},
	{
		name: "italic",
		value: "sg-icon-italic"
	},
	{
		name: "instagram1",
		value: "sg-icon-instagram1"
	},
	{
		name: "info",
		value: "sg-icon-info"
	},
	{
		name: "inbox",
		value: "sg-icon-inbox"
	},
	{
		name: "image",
		value: "sg-icon-image"
	},
	{
		name: "home",
		value: "sg-icon-home"
	},
	{
		name: "hexagon",
		value: "sg-icon-hexagon"
	},
	{
		name: "help-circle",
		value: "sg-icon-help-circle"
	},
	{
		name: "heart",
		value: "sg-icon-heart"
	},
	{
		name: "headphones",
		value: "sg-icon-headphones"
	},
	{
		name: "hash",
		value: "sg-icon-hash"
	},
	{
		name: "hard-drive",
		value: "sg-icon-hard-drive"
	},
	{
		name: "grid",
		value: "sg-icon-grid"
	},
	{
		name: "globe",
		value: "sg-icon-globe"
	},
	{
		name: "git-pull-request",
		value: "sg-icon-git-pull-request"
	},
	{
		name: "git-merge",
		value: "sg-icon-git-merge"
	},
	{
		name: "gitlab",
		value: "sg-icon-gitlab"
	},
	{
		name: "github",
		value: "sg-icon-github"
	},
	{
		name: "git-commit",
		value: "sg-icon-git-commit"
	},
	{
		name: "git-branch",
		value: "sg-icon-git-branch"
	},
	{
		name: "gift",
		value: "sg-icon-gift"
	},
	{
		name: "frown",
		value: "sg-icon-frown"
	},
	{
		name: "framer",
		value: "sg-icon-framer"
	},
	{
		name: "folder-plus",
		value: "sg-icon-folder-plus"
	},
	{
		name: "folder-minus",
		value: "sg-icon-folder-minus"
	},
	{
		name: "folder",
		value: "sg-icon-folder"
	},
	{
		name: "flag",
		value: "sg-icon-flag"
	},
	{
		name: "Filters-lines",
		value: "sg-icon-Filters-lines"
	},
	{
		name: "filter",
		value: "sg-icon-filter"
	},
	{
		name: "film",
		value: "sg-icon-film"
	},
	{
		name: "file-text",
		value: "sg-icon-file-text"
	},
	{
		name: "file-plus",
		value: "sg-icon-file-plus"
	},
	{
		name: "file-minus",
		value: "sg-icon-file-minus"
	},
	{
		name: "file",
		value: "sg-icon-file"
	},
	{
		name: "figma",
		value: "sg-icon-figma"
	},
	{
		name: "feather",
		value: "sg-icon-feather"
	},
	{
		name: "fast-forward",
		value: "sg-icon-fast-forward"
	},
	{
		name: "facebook",
		value: "sg-icon-facebook"
	},
	{
		name: "eye-off",
		value: "sg-icon-eye-off"
	},
	{
		name: "eye",
		value: "sg-icon-eye"
	},
	{
		name: "external-link",
		value: "sg-icon-external-link"
	},
	{
		name: "edit-3",
		value: "sg-icon-edit-3"
	},
	{
		name: "edit-2",
		value: "sg-icon-edit-2"
	},
	{
		name: "edit",
		value: "sg-icon-edit"
	},
	{
		name: "droplet",
		value: "sg-icon-droplet"
	},
	{
		name: "dribbble",
		value: "sg-icon-dribbble"
	},
	{
		name: "download-cloud",
		value: "sg-icon-download-cloud"
	},
	{
		name: "download",
		value: "sg-icon-download"
	},
	{
		name: "dollar-sign",
		value: "sg-icon-dollar-sign"
	},
	{
		name: "divide-square",
		value: "sg-icon-divide-square"
	},
	{
		name: "divide-circle",
		value: "sg-icon-divide-circle"
	},
	{
		name: "divide",
		value: "sg-icon-divide"
	},
	{
		name: "disc",
		value: "sg-icon-disc"
	},
	{
		name: "delete",
		value: "sg-icon-delete"
	},
	{
		name: "database",
		value: "sg-icon-database"
	},
	{
		name: "crosshair",
		value: "sg-icon-crosshair"
	},
	{
		name: "crop",
		value: "sg-icon-crop"
	},
	{
		name: "credit-card",
		value: "sg-icon-credit-card"
	},
	{
		name: "cpu",
		value: "sg-icon-cpu"
	},
	{
		name: "corner-up-right",
		value: "sg-icon-corner-up-right"
	},
	{
		name: "corner-up-left",
		value: "sg-icon-corner-up-left"
	},
	{
		name: "corner-right-up",
		value: "sg-icon-corner-right-up"
	},
	{
		name: "corner-right-down",
		value: "sg-icon-corner-right-down"
	},
	{
		name: "corner-left-up",
		value: "sg-icon-corner-left-up"
	},
	{
		name: "corner-left-down",
		value: "sg-icon-corner-left-down"
	},
	{
		name: "corner-down-right",
		value: "sg-icon-corner-down-right"
	},
	{
		name: "corner-down-left",
		value: "sg-icon-corner-down-left"
	},
	{
		name: "copy",
		value: "sg-icon-copy"
	},
	{
		name: "compass",
		value: "sg-icon-compass"
	},
	{
		name: "command",
		value: "sg-icon-command"
	},
	{
		name: "columns",
		value: "sg-icon-columns"
	},
	{
		name: "coin-stack",
		value: "sg-icon-coin-stack"
	},
	{
		name: "coins",
		value: "sg-icon-coins"
	},
	{
		name: "coffee",
		value: "sg-icon-coffee"
	},
	{
		name: "codesandbox",
		value: "sg-icon-codesandbox"
	},
	{
		name: "codepen",
		value: "sg-icon-codepen"
	},
	{
		name: "code",
		value: "sg-icon-code"
	},
	{
		name: "cloud-snow",
		value: "sg-icon-cloud-snow"
	},
	{
		name: "cloud-rain",
		value: "sg-icon-cloud-rain"
	},
	{
		name: "cloud-off",
		value: "sg-icon-cloud-off"
	},
	{
		name: "cloud-lightning",
		value: "sg-icon-cloud-lightning"
	},
	{
		name: "cloud-drizzle",
		value: "sg-icon-cloud-drizzle"
	},
	{
		name: "cloud",
		value: "sg-icon-cloud"
	},
	{
		name: "clock",
		value: "sg-icon-clock"
	},
	{
		name: "clipboard",
		value: "sg-icon-clipboard"
	},
	{
		name: "circle",
		value: "sg-icon-circle"
	},
	{
		name: "chrome",
		value: "sg-icon-chrome"
	},
	{
		name: "chevron-up",
		value: "sg-icon-chevron-up"
	},
	{
		name: "chevrons-up",
		value: "sg-icon-chevrons-up"
	},
	{
		name: "chevrons-right",
		value: "sg-icon-chevrons-right"
	},
	{
		name: "chevrons-left",
		value: "sg-icon-chevrons-left"
	},
	{
		name: "chevrons-down",
		value: "sg-icon-chevrons-down"
	},
	{
		name: "chevron-right",
		value: "sg-icon-chevron-right"
	},
	{
		name: "chevron-left",
		value: "sg-icon-chevron-left"
	},
	{
		name: "chevron-down",
		value: "sg-icon-chevron-down"
	},
	{
		name: "check-square",
		value: "sg-icon-check-square"
	},
	{
		name: "check-circle",
		value: "sg-icon-check-circle"
	},
	{
		name: "check",
		value: "sg-icon-check"
	},
	{
		name: "cast",
		value: "sg-icon-cast"
	},
	{
		name: "camera-off",
		value: "sg-icon-camera-off"
	},
	{
		name: "camera",
		value: "sg-icon-camera"
	},
	{
		name: "calendar1",
		value: "sg-icon-calendar1"
	},
	{
		name: "building-08",
		value: "sg-icon-building-08"
	},
	{
		name: "briefcase",
		value: "sg-icon-briefcase"
	},
	{
		name: "box",
		value: "sg-icon-box"
	},
	{
		name: "book-open",
		value: "sg-icon-book-open"
	},
	{
		name: "bookmark",
		value: "sg-icon-bookmark"
	},
	{
		name: "book",
		value: "sg-icon-book"
	},
	{
		name: "bold",
		value: "sg-icon-bold"
	},
	{
		name: "bluetooth",
		value: "sg-icon-bluetooth"
	},
	{
		name: "bell-off",
		value: "sg-icon-bell-off"
	},
	{
		name: "bell",
		value: "sg-icon-bell"
	},
	{
		name: "battery-charging",
		value: "sg-icon-battery-charging"
	},
	{
		name: "battery",
		value: "sg-icon-battery"
	},
	{
		name: "bar-chart-2",
		value: "sg-icon-bar-chart-2"
	},
	{
		name: "bar-chart",
		value: "sg-icon-bar-chart"
	},
	{
		name: "award",
		value: "sg-icon-award"
	},
	{
		name: "at-sign",
		value: "sg-icon-at-sign"
	},
	{
		name: "arrow-up-right",
		value: "sg-icon-arrow-up-right"
	},
	{
		name: "arrow-up-left",
		value: "sg-icon-arrow-up-left"
	},
	{
		name: "arrow-up-circle",
		value: "sg-icon-arrow-up-circle"
	},
	{
		name: "arrow-up",
		value: "sg-icon-arrow-up"
	},
	{
		name: "arrow-right-circle",
		value: "sg-icon-arrow-right-circle"
	},
	{
		name: "arrow-right",
		value: "sg-icon-arrow-right"
	},
	{
		name: "arrow-left-circle",
		value: "sg-icon-arrow-left-circle"
	},
	{
		name: "arrow-left",
		value: "sg-icon-arrow-left"
	},
	{
		name: "arrow-down-right",
		value: "sg-icon-arrow-down-right"
	},
	{
		name: "arrow-down-left",
		value: "sg-icon-arrow-down-left"
	},
	{
		name: "arrow-down-circle",
		value: "sg-icon-arrow-down-circle"
	},
	{
		name: "arrow-down",
		value: "sg-icon-arrow-down"
	},
	{
		name: "archive",
		value: "sg-icon-archive"
	},
	{
		name: "aperture",
		value: "sg-icon-aperture"
	},
	{
		name: "anchor",
		value: "sg-icon-anchor"
	},
	{
		name: "align-right",
		value: "sg-icon-align-right"
	},
	{
		name: "align-left",
		value: "sg-icon-align-left"
	},
	{
		name: "align-justify",
		value: "sg-icon-align-justify"
	},
	{
		name: "align-center",
		value: "sg-icon-align-center"
	},
	{
		name: "alert-triangle",
		value: "sg-icon-alert-triangle"
	},
	{
		name: "alert-octagon",
		value: "sg-icon-alert-octagon"
	},
	{
		name: "alert-circle",
		value: "sg-icon-alert-circle"
	},
	{
		name: "airplay",
		value: "sg-icon-airplay"
	},
	{
		name: "activity",
		value: "sg-icon-activity"
	},
	{
		name: "layers",
		value: "sg-icon-layers"
	},
	{
		name: "layers1",
		value: "sg-icon-layers1"
	},
	{
		name: "download1",
		value: "sg-icon-download1"
	},
	{
		name: "plus1",
		value: "sg-icon-plus1"
	},
	{
		name: "minus1",
		value: "sg-icon-minus1"
	},
	{
		name: "facebook_fill",
		value: "sg-icon-facebook_fill"
	},
	{
		name: "instagram_fill",
		value: "sg-icon-instagram_fill"
	},
	{
		name: "person",
		value: "sg-icon-person"
	},
	{
		name: "skype_fill",
		value: "sg-icon-skype_fill"
	},
	{
		name: "university",
		value: "sg-icon-university"
	},
	{
		name: "work",
		value: "sg-icon-work"
	},
	{
		name: "euro",
		value: "sg-icon-euro"
	},
	{
		name: "calendar_2",
		value: "sg-icon-calendar_2"
	},
	{
		name: "url",
		value: "sg-icon-url"
	},
	{
		name: "mail",
		value: "sg-icon-mail"
	},
	{
		name: "location",
		value: "sg-icon-location"
	},
	{
		name: "phone",
		value: "sg-icon-phone"
	},
	{
		name: "search",
		value: "sg-icon-search"
	},
	{
		name: "tg",
		value: "sg-icon-tg"
	},
	{
		name: "tg_circle",
		value: "sg-icon-tg_circle"
	},
	{
		name: "vp",
		value: "sg-icon-vp"
	},
	{
		name: "vp_circle",
		value: "sg-icon-vp_circle"
	},
	{
		name: "arrow_right",
		value: "sg-icon-arrow_right"
	},
	{
		name: "arrow_top",
		value: "sg-icon-arrow_top"
	},
	{
		name: "arrow_left",
		value: "sg-icon-arrow_left"
	},
	{
		name: "arrow_bottom",
		value: "sg-icon-arrow_bottom"
	},
	{
		name: "arrow_chevron_right_top",
		value: "sg-icon-arrow_chevron_right_top"
	},
	{
		name: "arrow_chevron_left",
		value: "sg-icon-arrow_chevron_left"
	},
	{
		name: "arrow_chevron_bottom",
		value: "sg-icon-arrow_chevron_bottom"
	},
	{
		name: "arrow_chevron_right",
		value: "sg-icon-arrow_chevron_right"
	},
	{
		name: "arrow_chevron_top",
		value: "sg-icon-arrow_chevron_top"
	},
	{
		name: "calendar",
		value: "sg-icon-calendar"
	},
	{
		name: "instagram",
		value: "sg-icon-instagram"
	},
	{
		name: "instagram_circle",
		value: "sg-icon-instagram_circle"
	},
	{
		name: "linkedin2",
		value: "sg-icon-linkedin2"
	},
	{
		name: "linkedin_circle",
		value: "sg-icon-linkedin_circle"
	}
]
