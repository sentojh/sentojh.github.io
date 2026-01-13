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
  },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-have-started-the-master-s-degree-course",
          title: 'I have started the Master’s degree course.',
          description: "",
          section: "News",},{id: "news-i-have-transioned-to-the-integrated-m-s-and-ph-d-course-muscle",
          title: 'I have transioned to the integrated M.S. and Ph.D. course. :muscle:',
          description: "",
          section: "News",},{id: "news-our-paper-on-lie-group-based-user-motion-refinement-control-for-teleoperation-of-a-constrained-robot-arm-has-been-accepted-to-ra-l-2024-smile",
          title: 'Our paper on Lie Group-Based User Motion Refinement Control for Teleoperation of a...',
          description: "",
          section: "News",},{id: "news-our-paper-titled-ensuring-joint-constraints-of-torque-controlled-robot-manipulators-under-bounded-jerk-has-been-accepted-to-iros-2024-sparkles",
          title: 'Our paper titled Ensuring Joint Constraints of Torque-Controlled Robot Manipulators under Bounded Jerk...',
          description: "",
          section: "News",},{id: "news-our-paper-on-deep-learning-based-friction-compensation-in-low-velocity-for-enhanced-direct-teaching-in-collaborative-manipulators-has-been-accepted-to-icra-2025-sparkles",
          title: 'Our paper on Deep Learning-Based Friction Compensation in Low Velocity for Enhanced Direct...',
          description: "",
          section: "News",},{id: "news-our-paper-titiled-a-passive-recursive-newton-euler-algorithm-and-its-application-to-inverse-dynamics-under-passivity-based-controller-has-been-accepted-to-simpar-2025-sparkles",
          title: 'Our paper titiled A Passive Recursive Newton Euler Algorithm and Its Application to...',
          description: "",
          section: "News",},{id: "news-i-have-passed-my-ph-d-research-proposal-rocket",
          title: 'I have passed my Ph.D Research Proposal. :rocket:',
          description: "",
          section: "News",},{id: "news-i-participated-as-a-speaker-in-the-lie-group-robotics-tutorial-at-the-20th-korea-robotics-society-annual-conference-kroc-fire",
          title: 'I participated as a speaker in the Lie Group Robotics Tutorial at the...',
          description: "",
          section: "News",},{id: "news-our-paper-titled-impedance-control-design-framework-using-commutative-map-between-se-3-and-se-3-has-been-accepted-to-t-ro-2025-smile",
          title: 'Our paper titled Impedance Control Design Framework Using Commutative Map Between SE(3) and...',
          description: "",
          section: "News",},{id: "news-our-paper-titled-christoffel-consistent-coriolis-factorization-and-its-effect-on-the-control-of-a-robot-has-been-accepted-to-ra-l-2026-smile",
          title: 'Our paper titled Christoffel-Consistent Coriolis Factorization and Its Effect on the Control of...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
