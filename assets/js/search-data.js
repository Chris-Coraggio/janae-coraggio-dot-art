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
  },{id: "dropdown-illustrations",
              title: "Illustrations",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/illustrations/";
              },
            },{id: "dropdown-publications",
              title: "Publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/publications/";
              },
            },{id: "dropdown-tutorials",
              title: "Tutorials",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/tutorials/";
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
        },{id: "nav-reviews",
          title: "Reviews",
          description: "Customer reviews from Amazon",
          section: "Navigation",
          handler: () => {
            window.location.href = "/reviews/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "I’d love to connect with you! Please reach out below if you’re interested in my workshops, illustrations, or written work - or if you&#39;d just like a friendly chat. I’m currently accepting commissions.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "news-moving-to-a-new-website",
          title: 'Moving to a new website!',
          description: "",
          section: "News",},{id: "reviews-amazon-customer-falling-leaves-2016",
          title: 'Amazon Customer Falling Leaves 2016',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/amazon-customer-falling-leaves-2016/";
            },},{id: "reviews-buyer-at-1-happy-field-2016",
          title: 'Buyer At 1 Happy Field 2016',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/buyer-at-1-happy-field-2016/";
            },},{id: "reviews-gramma-to-seven-happy-field-2016",
          title: 'Gramma To Seven Happy Field 2016',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/gramma-to-seven-happy-field-2016/";
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
            },},{id: "reviews-earl-happy-field-2020",
          title: 'Earl Happy Field 2020',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/earl-happy-field-2020/";
            },},{id: "reviews-evierm-coloring-gods-love-2022",
          title: 'Evierm Coloring Gods Love 2022',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/evierm-coloring-gods-love-2022/";
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
            },},{id: "reviews-amazon-customer-coloring-gods-love-2022",
          title: 'Amazon Customer Coloring Gods Love 2022',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/amazon-customer-coloring-gods-love-2022/";
            },},{id: "reviews-example-review",
          title: 'Example Review',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/example-review/";
            },},{id: "reviews-aiya-coloring-gods-love-2024",
          title: 'Aiya Coloring Gods Love 2024',
          description: "",
          section: "Reviews",handler: () => {
              window.location.href = "/reviews/aiya-coloring-gods-love-2024/";
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
