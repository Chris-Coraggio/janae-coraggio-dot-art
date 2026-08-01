// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "dropdown-publications",
              title: "Publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/publications/";
              },
            },{id: "dropdown-school-murals",
              title: "School Murals",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/murals/";
              },
            },{id: "nav-community-based-art-workshops",
          title: "Community-based Art Workshops",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/workshops/";
          },
        },{id: "nav-about",
          title: "About",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/about";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "news-moving-to-a-new-website",
          title: 'Moving to a new website!',
          description: "",
          section: "News",},{id: "news-book-services-and-rates-now-available",
          title: 'Book Services and Rates now available',
          description: "",
          section: "News",},{id: "reviews-falling-amazon-customer-2016-01-02",
          title: 'Falling Amazon Customer 2016 01 02',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/falling-amazon-customer-2016-01-02/";
            },},{id: "reviews-falling-cat-mom-2016-01-12",
          title: 'Falling Cat Mom 2016 01 12',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/falling-cat-mom-2016-01-12/";
            },},{id: "reviews-falling-jamie-2016-01-15",
          title: 'Falling Jamie 2016 01 15',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/falling-jamie-2016-01-15/";
            },},{id: "reviews-falling-buyer1-2016-01-19",
          title: 'Falling Buyer1 2016 01 19',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/falling-buyer1-2016-01-19/";
            },},{id: "reviews-falling-gramma-to-seven-2016-01-21",
          title: 'Falling Gramma To Seven 2016 01 21',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/falling-gramma-to-seven-2016-01-21/";
            },},{id: "reviews-falling-sherie-bergstedt-2016-02-29",
          title: 'Falling Sherie Bergstedt 2016 02 29',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/falling-sherie-bergstedt-2016-02-29/";
            },},{id: "reviews-falling-sd-2016-03-24",
          title: 'Falling Sd 2016 03 24',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/falling-sd-2016-03-24/";
            },},{id: "reviews-lions-bryson-2019-07-20",
          title: 'Lions Bryson 2019 07 20',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/lions-bryson-2019-07-20/";
            },},{id: "reviews-lions-dmiller-2019-07-22",
          title: 'Lions Dmiller 2019 07 22',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/lions-dmiller-2019-07-22/";
            },},{id: "reviews-lions-katie-2019-07-24",
          title: 'Lions Katie 2019 07 24',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/lions-katie-2019-07-24/";
            },},{id: "reviews-happy-field-vicky-lopez-2020-04-30",
          title: 'Happy Field Vicky Lopez 2020 04 30',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/happy-field-vicky-lopez-2020-04-30/";
            },},{id: "reviews-happy-field-k-2020-05-02",
          title: 'Happy Field K 2020 05 02',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/happy-field-k-2020-05-02/";
            },},{id: "reviews-happy-field-earl-2020-05-07",
          title: 'Happy Field Earl 2020 05 07',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/happy-field-earl-2020-05-07/";
            },},{id: "reviews-happy-field-amy-w-2020-06-14",
          title: 'Happy Field Amy W 2020 06 14',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/happy-field-amy-w-2020-06-14/";
            },},{id: "reviews-happy-field-beth-2020-07-01",
          title: 'Happy Field Beth 2020 07 01',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/happy-field-beth-2020-07-01/";
            },},{id: "reviews-zoo-clear-water-2021-06-28",
          title: 'Zoo Clear Water 2021 06 28',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/zoo-clear-water-2021-06-28/";
            },},{id: "reviews-coloring-t-and-e-espinoza-2022-06-14",
          title: 'Coloring T And E Espinoza 2022 06 14',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/coloring-t-and-e-espinoza-2022-06-14/";
            },},{id: "reviews-coloring-evierm-2022-06-15",
          title: 'Coloring Evierm 2022 06 15',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/coloring-evierm-2022-06-15/";
            },},{id: "reviews-coloring-mouttet-menagerie-2022-06-15",
          title: 'Coloring Mouttet Menagerie 2022 06 15',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/coloring-mouttet-menagerie-2022-06-15/";
            },},{id: "reviews-coloring-steph-a-2022-06-15",
          title: 'Coloring Steph A 2022 06 15',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/coloring-steph-a-2022-06-15/";
            },},{id: "reviews-coloring-texmel-2022-06-15",
          title: 'Coloring Texmel 2022 06 15',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/coloring-texmel-2022-06-15/";
            },},{id: "reviews-coloring-vickie-watts-2022-06-19",
          title: 'Coloring Vickie Watts 2022 06 19',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/coloring-vickie-watts-2022-06-19/";
            },},{id: "reviews-coloring-kim-h-in-ga-2022-06-21",
          title: 'Coloring Kim H In Ga 2022 06 21',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/coloring-kim-h-in-ga-2022-06-21/";
            },},{id: "reviews-coloring-g-anderson-2022-06-26",
          title: 'Coloring G Anderson 2022 06 26',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/coloring-g-anderson-2022-06-26/";
            },},{id: "reviews-coloring-travelerswife4life-2022-06-29",
          title: 'Coloring Travelerswife4life 2022 06 29',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/coloring-travelerswife4life-2022-06-29/";
            },},{id: "reviews-coloring-blessedbookish-2022-07-01",
          title: 'Coloring Blessedbookish 2022 07 01',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/coloring-blessedbookish-2022-07-01/";
            },},{id: "reviews-coloring-jena-massey-2022-07-01",
          title: 'Coloring Jena Massey 2022 07 01',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/coloring-jena-massey-2022-07-01/";
            },},{id: "reviews-coloring-teaandbooks-2022-07-01",
          title: 'Coloring Teaandbooks 2022 07 01',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/coloring-teaandbooks-2022-07-01/";
            },},{id: "reviews-coloring-suzie-waltner-2022-07-02",
          title: 'Coloring Suzie Waltner 2022 07 02',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/coloring-suzie-waltner-2022-07-02/";
            },},{id: "reviews-coloring-amazon-customer-2022-07-03",
          title: 'Coloring Amazon Customer 2022 07 03',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/coloring-amazon-customer-2022-07-03/";
            },},{id: "reviews-coloring-rachel-devaughn-2022-07-03",
          title: 'Coloring Rachel Devaughn 2022 07 03',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/coloring-rachel-devaughn-2022-07-03/";
            },},{id: "reviews-coloring-the-artist-librarian-2022-07-05",
          title: 'Coloring The Artist Librarian 2022 07 05',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/coloring-the-artist-librarian-2022-07-05/";
            },},{id: "reviews-coloring-andrew-2022-07-22",
          title: 'Coloring Andrew 2022 07 22',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/coloring-andrew-2022-07-22/";
            },},{id: "reviews-coloring-aryn-the-libraryan-2022-07-23",
          title: 'Coloring Aryn The Libraryan 2022 07 23',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/coloring-aryn-the-libraryan-2022-07-23/";
            },},{id: "reviews-coloring-cj-2022-08-12",
          title: 'Coloring Cj 2022 08 12',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/coloring-cj-2022-08-12/";
            },},{id: "reviews-coloring-amazon-customer-2022-08-23",
          title: 'Coloring Amazon Customer 2022 08 23',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/coloring-amazon-customer-2022-08-23/";
            },},{id: "reviews-coloring-kate-cox-2022-12-28",
          title: 'Coloring Kate Cox 2022 12 28',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/coloring-kate-cox-2022-12-28/";
            },},{id: "reviews-coloring-joy-2023-04-05",
          title: 'Coloring Joy 2023 04 05',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/coloring-joy-2023-04-05/";
            },},{id: "reviews-coloring-dianne-g-2023-10-18",
          title: 'Coloring Dianne G 2023 10 18',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/coloring-dianne-g-2023-10-18/";
            },},{id: "reviews-coloring-aiya-2024-02-04",
          title: 'Coloring Aiya 2024 02 04',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/coloring-aiya-2024-02-04/";
            },},{id: "reviews-coloring-kindle-customer-2026-07-02",
          title: 'Coloring Kindle Customer 2026 07 02',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/coloring-kindle-customer-2026-07-02/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%61%6E%61%65%63%6F%72%61%67%67%69%6F@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/janaearttherapy", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/janaedueck", "_blank");
        },
      },];
