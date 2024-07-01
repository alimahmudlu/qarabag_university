import image from "@/assets/images/image.png";
import clubImage from "@/assets/images/clubImage.png";
import monumentItemImage from "@/assets/images/monumentItemImage.png";
import SgSectionAboutUniversityBanner from "@/components/sections/AboutUniversityBanner";
import SgSectionNewsBanner from "@/components/sections/NewsBanner";
import SgSectionEventsBanner from "@/components/sections/EventsBanner";
import SgSectionCampusBanner from "@/components/sections/CampusBanner";
import SgSectionClubsBanner from "@/components/sections/ClubsBanner";
import SgSectionMonumentsFamousBanner from "@/components/sections/MonumentsFamousBanner";
import SgSectionKhankendiMapBanner from "@/components/sections/KhankendiMapBanner";
import {SiteLayout} from "@/components/layouts";
import SgSectionMainHero from "@/components/sections/MainHero";

export default function Index() {
    return (
        <>
            <SgSectionMainHero
                id='mainHero'
                inner={true}
                header='Qarabağ Universiteti haqqında'
                breadcrumb={[
                    {
                        name: 'Ana səhifə',
                        to: '/'
                    },
                    {
                        name: 'Ana səhifə',
                        to: '/'
                    },
                    {
                        name: 'Ana səhifə',
                        to: '/'
                    },
                ]}
            />

            <SgSectionAboutUniversityBanner
                id="aboutUniversityBanner"
                data={{
                    image: image,
                    title: 'Qarabağ Universiteti haqqında',
                    description: 'Qarabağ Universiteti Azərbaycan Respublikası Prezidenti İlham Əliyevin 2023-cü il 28 noyabr tarixli 4182 nömrəli Sərəncamı ilə Azərbaycan Respublikası Elm və Təhsil Nazirliyinin tabeliyində Xankəndi şəhərində yaradılıb. Sərəncamın bu tarixdə imzalanması özündə rəmzi məna ehtiva edir. Belə ki, Sərəncamdan 50 il öncə, 1973-cü il noyabrın 28-də Heydər Əliyevin təşəbbüsü ilə Xankəndi şəhərində Azərbaycan Dövlət Pedaqoji İnstitutunun filialı yaradılıb.',
                    button: {
                        name: 'Daha ətraflı',
                        path: '/asas',
                        icon: 'arrow-up-right',
                        iconRotate: true
                    }
                }}
            />

            <SgSectionNewsBanner
                id="newsBanner"
                header='Xəbərlər'
                data={[]}
            />

            <SgSectionEventsBanner
                id="newsBanner"
                header='Tədbirlər'
                data={[
                    {
                        date: new Date(),
                        title: 'Seçim turunun mükafatlandırma tədbirinə ev sahibliyi edib',
                        city: 'Bakı şəhəri'
                    },
                    {
                        date: new Date(),
                        title: 'Seçim turunun mükafatlandırma tədbirinə ev sahibliyi edib',
                        city: 'Bakı şəhəri'
                    },
                    {
                        date: new Date(),
                        title: 'Seçim turunun mükafatlandırma tədbirinə ev sahibliyi edib',
                        city: 'Bakı şəhəri'
                    }
                ]}
            />

            <SgSectionCampusBanner
                id="campusBanner"
                header="Kampus"
                data={[
                    {
                        header: 'Kampus haqqında',
                        description: 'Office ipsum you must be muted. Right done line sop manager eye. Start explore cross-pollination relaxation is goto only.',
                        path: '/campus/1'
                    },
                    {
                        header: 'Kampus turu',
                        description: 'Office ipsum you must be muted. Right done line sop manager eye. Start explore cross-pollination relaxation is goto only.',
                        path: '/campus/2'
                    },
                    {
                        header: 'Yataqxana',
                        description: 'Office ipsum you must be muted. Right done line sop manager eye. Start explore cross-pollination relaxation is goto only.',
                        path: '/campus/3'
                    },
                    {
                        header: 'Tələbə həyatı',
                        description: 'Office ipsum you must be muted. Right done line sop manager eye. Start explore cross-pollination relaxation is goto only.',
                        path: '/campus/4'
                    }
                ]}
            />

            <SgSectionClubsBanner
                id="clubsBanner"
                header='Klublar'
                data={[
                    {
                        image: clubImage,
                        header: 'Tələbə Həmkarlar İttifaqı Komitəsi və Tələbə Gənclər Təşkilatı 1',
                        path: '/clubs/1'
                    },
                    {
                        image: clubImage,
                        header: 'Tələbə Həmkarlar İttifaqı Komitəsi və Tələbə Gənclər Təşkilatı 2',
                        path: '/clubs/2'
                    },
                    {
                        image: clubImage,
                        header: 'Tələbə Həmkarlar İttifaqı Komitəsi və Tələbə Gənclər Təşkilatı 3',
                        path: '/clubs/3'
                    }
                ]}
            />

            <SgSectionMonumentsFamousBanner
                id="MonumentsFamousBanner"
                header="Abidələr və tanınmış simalar"
                data={[
                    {
                        title: 'Qutlu Musa Türbəsi',
                        description: '',
                        image: monumentItemImage,
                    },
                    {
                        title: 'Cümə məscidi',
                        description: '',
                        image: monumentItemImage,
                    },
                    {
                        title: 'Gəncəsər monastrı',
                        description: '',
                        image: monumentItemImage,
                    },
                    {
                        title: 'Xüdafərin körpüsü',
                        description: '',
                        image: monumentItemImage,
                    },
                    {
                        title: 'Şanbulaq qalası',
                        description: '',
                        image: monumentItemImage,
                    },
                    {
                        title: 'Qutlu Musa Türbəsi 2',
                        description: '',
                        image: monumentItemImage,
                    },
                    {
                        title: 'Cümə məscidi 2',
                        description: '',
                        image: monumentItemImage,
                    },
                    {
                        title: 'Gəncəsər monastrı 2',
                        description: '',
                        image: monumentItemImage,
                    },
                    {
                        title: 'Xüdafərin körpüsü 2',
                        description: '',
                        image: monumentItemImage,
                    },
                    {
                        title: 'Şanbulaq qalası 2',
                        description: '',
                        image: monumentItemImage,
                    }
                ]}
            />

            <SgSectionKhankendiMapBanner
                id="KhankendiMapBanner"
                header="Xankəndi"
                description='Xankəndi Qarqar çayının sahilində, Qarabağ silsiləsinin şərq ətəyində, Bakıdan 385 km aralıda yerləşir. İnzibati cəhətdən Xankəndi şəhər əhatə dairəsinə Xankəndi şəhəri və Kərkicahan qəsəbəsi daxildir. Dağlıq Qarabağ Muxtar Vilayətinin mərkəzi olmuşdur. Sahəsi 8,8 km²-dir. Xankəndi şəhəri şimaldan Kəlbəcər, Tərtər, Ağdərə, Ağdam, cənubdan Şuşa, şərqdən Xocavənd, qərbdən Laçın, mərkəzdən isə Xocalı və Əsgəran rayonları ilə əhatə olunmuşdur.'
            />
        </>
    );
}


Index.getLayout = function getLayout(page) {
    return (
        <>
            <SiteLayout>
                {page}
            </SiteLayout>
        </>
    )
}
