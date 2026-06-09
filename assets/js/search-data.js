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
            },{id: "dropdown-videos",
              title: "Videos",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/videos/";
              },
            },{id: "dropdown-murals",
              title: "Murals",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/murals/";
              },
            },{id: "nav-workshops",
          title: "Workshops",
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
        },{id: "nav-book-services",
          title: "Book Services",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/book-services/";
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
          section: "News",},{id: "reviews-amazon-customer-falling-leaves-2016",
          title: 'Amazon Customer Falling Leaves 2016',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/amazon-customer-falling-leaves-2016/";
            },},{id: "reviews-to-my-falling-leaves-the-story-of-autumn-2016-01-02-amazon-customer-p1",
          title: 'To My Falling Leaves The Story Of Autumn 2016 01 02 Amazon Customer...',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/to-my-falling-leaves-the-story-of-autumn-2016-01-02-amazon-customer-p1/";
            },},{id: "reviews-to-my-falling-leaves-the-story-of-autumn-2016-01-12-cat-mom-p1",
          title: 'To My Falling Leaves The Story Of Autumn 2016 01 12 Cat Mom...',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/to-my-falling-leaves-the-story-of-autumn-2016-01-12-cat-mom-p1/";
            },},{id: "reviews-to-my-falling-leaves-the-story-of-autumn-2016-01-15-jamie-p1",
          title: 'To My Falling Leaves The Story Of Autumn 2016 01 15 Jamie P1...',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/to-my-falling-leaves-the-story-of-autumn-2016-01-15-jamie-p1/";
            },},{id: "reviews-buyer-at-1-happy-field-2016",
          title: 'Buyer At 1 Happy Field 2016',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/buyer-at-1-happy-field-2016/";
            },},{id: "reviews-to-my-falling-leaves-the-story-of-autumn-2016-01-19-buyer1-p1",
          title: 'To My Falling Leaves The Story Of Autumn 2016 01 19 Buyer1 P1...',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/to-my-falling-leaves-the-story-of-autumn-2016-01-19-buyer1-p1/";
            },},{id: "reviews-gramma-to-seven-happy-field-2016",
          title: 'Gramma To Seven Happy Field 2016',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/gramma-to-seven-happy-field-2016/";
            },},{id: "reviews-to-my-falling-leaves-the-story-of-autumn-2016-01-21-gramma-to-seven-p1",
          title: 'To My Falling Leaves The Story Of Autumn 2016 01 21 Gramma To...',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/to-my-falling-leaves-the-story-of-autumn-2016-01-21-gramma-to-seven-p1/";
            },},{id: "reviews-to-my-falling-leaves-the-story-of-autumn-2016-02-29-sherie-bergstedt-p1",
          title: 'To My Falling Leaves The Story Of Autumn 2016 02 29 Sherie Bergstedt...',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/to-my-falling-leaves-the-story-of-autumn-2016-02-29-sherie-bergstedt-p1/";
            },},{id: "reviews-to-my-falling-leaves-the-story-of-autumn-2016-03-24-sd-p1",
          title: 'To My Falling Leaves The Story Of Autumn 2016 03 24 Sd P1...',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/to-my-falling-leaves-the-story-of-autumn-2016-03-24-sd-p1/";
            },},{id: "reviews-sitting-with-my-lions-being-brave-like-daniel-in-the-lions-den-2019-07-20-bryson-keyes-p1",
          title: 'Sitting With My Lions Being Brave Like Daniel In The Lions Den 2019...',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/sitting-with-my-lions-being-brave-like-daniel-in-the-lions-den-2019-07-20-bryson-keyes-p1/";
            },},{id: "reviews-sitting-with-my-lions-being-brave-like-daniel-in-the-lions-den-2019-07-22-d-miller-p1",
          title: 'Sitting With My Lions Being Brave Like Daniel In The Lions Den 2019...',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/sitting-with-my-lions-being-brave-like-daniel-in-the-lions-den-2019-07-22-d-miller-p1/";
            },},{id: "reviews-sitting-with-my-lions-being-brave-like-daniel-in-the-lions-den-2019-07-24-katie-kelly-p1",
          title: 'Sitting With My Lions Being Brave Like Daniel In The Lions Den 2019...',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/sitting-with-my-lions-being-brave-like-daniel-in-the-lions-den-2019-07-24-katie-kelly-p1/";
            },},{id: "reviews-the-happy-field-2020-04-30-vicky-lopez-p1",
          title: 'The Happy Field 2020 04 30 Vicky Lopez P1',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/the-happy-field-2020-04-30-vicky-lopez-p1/";
            },},{id: "reviews-vicky-lopez-happy-field-2020",
          title: 'Vicky Lopez Happy Field 2020',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/vicky-lopez-happy-field-2020/";
            },},{id: "reviews-k-happy-field-2020",
          title: 'K Happy Field 2020',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/k-happy-field-2020/";
            },},{id: "reviews-the-happy-field-2020-05-02-k-p1",
          title: 'The Happy Field 2020 05 02 K P1',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/the-happy-field-2020-05-02-k-p1/";
            },},{id: "reviews-earl-happy-field-2020",
          title: 'Earl Happy Field 2020',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/earl-happy-field-2020/";
            },},{id: "reviews-the-happy-field-2020-05-07-earl-p1",
          title: 'The Happy Field 2020 05 07 Earl P1',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/the-happy-field-2020-05-07-earl-p1/";
            },},{id: "reviews-the-happy-field-2020-06-14-amy-w-p1",
          title: 'The Happy Field 2020 06 14 Amy W P1',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/the-happy-field-2020-06-14-amy-w-p1/";
            },},{id: "reviews-the-happy-field-2020-07-01-beth-p1",
          title: 'The Happy Field 2020 07 01 Beth P1',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/the-happy-field-2020-07-01-beth-p1/";
            },},{id: "reviews-dear-zoo-i-think-my-sister-belongs-with-you50-out-of-5-stars650-out-of-5-stars-6-customer-reviewspaperback1395-2021-06-28-clear-water-p1",
          title: 'Dear Zoo I Think My Sister Belongs With You50 Out Of 5 Stars650...',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/dear-zoo-i-think-my-sister-belongs-with-you50-out-of-5-stars650-out-of-5-stars-6-customer-reviewspaperback1395-2021-06-28-clear-water-p1/";
            },},{id: "reviews-walking-with-my-elephant-2021-08-25-bill-keyes-p1",
          title: 'Walking With My Elephant 2021 08 25 Bill Keyes P1',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/walking-with-my-elephant-2021-08-25-bill-keyes-p1/";
            },},{id: "reviews-coloring-gods-love-for-me-100-devotions-to-inspire-young-hearts-2022-06-15-steph-a-p1",
          title: 'Coloring Gods Love For Me 100 Devotions To Inspire Young Hearts 2022 06...',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/coloring-gods-love-for-me-100-devotions-to-inspire-young-hearts-2022-06-15-steph-a-p1/";
            },},{id: "reviews-evierm-coloring-gods-love-2022",
          title: 'Evierm Coloring Gods Love 2022',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/evierm-coloring-gods-love-2022/";
            },},{id: "reviews-coloring-gods-love-for-me-100-devotions-to-inspire-young-hearts-2022-06-19-vickie-watts-p1",
          title: 'Coloring Gods Love For Me 100 Devotions To Inspire Young Hearts 2022 06...',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/coloring-gods-love-for-me-100-devotions-to-inspire-young-hearts-2022-06-19-vickie-watts-p1/";
            },},{id: "reviews-jena-massey-coloring-gods-love-2022",
          title: 'Jena Massey Coloring Gods Love 2022',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/jena-massey-coloring-gods-love-2022/";
            },},{id: "reviews-andrew-coloring-gods-love-2022",
          title: 'Andrew Coloring Gods Love 2022',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/andrew-coloring-gods-love-2022/";
            },},{id: "reviews-coloring-gods-love-for-me-100-devotions-to-inspire-young-hearts-2022-07-22-andrew-p1",
          title: 'Coloring Gods Love For Me 100 Devotions To Inspire Young Hearts 2022 07...',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/coloring-gods-love-for-me-100-devotions-to-inspire-young-hearts-2022-07-22-andrew-p1/";
            },},{id: "reviews-coloring-gods-love-for-me-100-devotions-to-inspire-young-hearts-2022-08-12-cj-p1",
          title: 'Coloring Gods Love For Me 100 Devotions To Inspire Young Hearts 2022 08...',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/coloring-gods-love-for-me-100-devotions-to-inspire-young-hearts-2022-08-12-cj-p1/";
            },},{id: "reviews-amazon-customer-coloring-gods-love-2022",
          title: 'Amazon Customer Coloring Gods Love 2022',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/amazon-customer-coloring-gods-love-2022/";
            },},{id: "reviews-coloring-gods-love-for-me-100-devotions-to-inspire-young-hearts-2022-08-23-amazon-customer-p1",
          title: 'Coloring Gods Love For Me 100 Devotions To Inspire Young Hearts 2022 08...',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/coloring-gods-love-for-me-100-devotions-to-inspire-young-hearts-2022-08-23-amazon-customer-p1/";
            },},{id: "reviews-example-review",
          title: 'Example Review',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/example-review/";
            },},{id: "reviews-coloring-gods-love-for-me-100-devotions-to-inspire-young-hearts-2022-12-28-kate-cox-p1",
          title: 'Coloring Gods Love For Me 100 Devotions To Inspire Young Hearts 2022 12...',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/coloring-gods-love-for-me-100-devotions-to-inspire-young-hearts-2022-12-28-kate-cox-p1/";
            },},{id: "reviews-coloring-gods-love-for-me-100-devotions-to-inspire-young-hearts-2023-04-05-joy-p1",
          title: 'Coloring Gods Love For Me 100 Devotions To Inspire Young Hearts 2023 04...',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/coloring-gods-love-for-me-100-devotions-to-inspire-young-hearts-2023-04-05-joy-p1/";
            },},{id: "reviews-coloring-gods-love-for-me-100-devotions-to-inspire-young-hearts-2023-10-18-dianne-g-p1",
          title: 'Coloring Gods Love For Me 100 Devotions To Inspire Young Hearts 2023 10...',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/coloring-gods-love-for-me-100-devotions-to-inspire-young-hearts-2023-10-18-dianne-g-p1/";
            },},{id: "reviews-aiya-coloring-gods-love-2024",
          title: 'Aiya Coloring Gods Love 2024',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/aiya-coloring-gods-love-2024/";
            },},{id: "reviews-whispers-of-the-heart-2025-02-04-kim-baruffi-p1",
          title: 'Whispers Of The Heart 2025 02 04 Kim Baruffi P1',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/whispers-of-the-heart-2025-02-04-kim-baruffi-p1/";
            },},{id: "reviews-amrita-kaur-space-between-us-2025",
          title: 'Amrita Kaur Space Between Us 2025',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/amrita-kaur-space-between-us-2025/";
            },},{id: "reviews-the-space-between-us-2025-09-10-amrita-kaur-p1",
          title: 'The Space Between Us 2025 09 10 Amrita Kaur P1',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/the-space-between-us-2025-09-10-amrita-kaur-p1/";
            },},{id: "reviews-edgar-rojo-space-between-us-2025",
          title: 'Edgar Rojo Space Between Us 2025',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/edgar-rojo-space-between-us-2025/";
            },},{id: "reviews-the-space-between-us-2025-09-16-edgar-rojo-p1",
          title: 'The Space Between Us 2025 09 16 Edgar Rojo P1',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/the-space-between-us-2025-09-16-edgar-rojo-p1/";
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
