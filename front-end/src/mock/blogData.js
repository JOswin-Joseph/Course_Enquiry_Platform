import fullstackImg from "../assets/images/fullstack.jpg";
import datascienceImg from "../assets/images/datascience.jpg";
import uiuxImg from "../assets/images/uiux.jpg";
import cloudImg from "../assets/images/cloud.jpg";
import mobileImg from "../assets/images/mobile.jpg";
import marketingImg from "../assets/images/marketing.jpg";

const blogCourses = [
  {
    id: 1,
    slug: "full-stack-web-development-bootcamp",
    title: "Full Stack Web Development Bootcamp",
    category: "Web Development",
    summary:
      "Become a full-stack developer in 12 weeks with hands-on projects, mentor guidance, and a portfolio-ready capstone project.",
    image: fullstackImg,
    details: `
<h2>Overview: How a Full Stack Web Development Course Can Shape Your Future</h2>
<p>In today’s fast-evolving digital world, businesses and organizations rely heavily on online platforms to interact with their customers. From e-commerce stores to enterprise web applications, every project requires developers who can build and maintain the entire system end-to-end. A <strong>Full Stack Web Developer</strong> possesses this complete capability — the ability to design robust front ends, implement server-side logic, and manage data storage and deployment.</p>

<p>This Full Stack Web Development Bootcamp is a practical, career-focused program designed to transform learners into industry-ready professionals. The course blends foundational theory with project-based learning so you don’t just learn languages and frameworks — you apply them to build production-grade applications. By the end of the program you will have a polished portfolio of real projects and the practical knowledge to succeed in professional development roles.</p>

<h3>Learning Objectives</h3>
<ul>
  <li>Understand the software development lifecycle and how full stack projects are planned and executed.</li>
  <li>Build responsive user interfaces using modern front-end techniques and libraries.</li>
  <li>Implement secure and efficient server-side APIs and services.</li>
  <li>Design, query, and maintain databases for reliable data storage.</li>
  <li>Deploy applications to cloud platforms and manage basic CI/CD workflows.</li>
</ul>

<h3>What You’ll Learn (Detailed)</h3>
<p><strong>Front-End:</strong> You will master HTML5 for semantic structure, CSS3 for layouts and responsive design, and modern JavaScript (ES6+) for interactivity. The course covers a component-based approach with React — including hooks, state management, routing, and performance optimization — enabling you to build single-page applications with clean, reusable components.</p>

<p><strong>Back-End:</strong> For server-side development you will learn Node.js and Express.js to create RESTful APIs, handle middleware, manage authentication and authorization, and integrate third-party services. You will understand asynchronous programming patterns and how to structure back-end code for maintainability and scalability.</p>

<p><strong>Databases:</strong> You will get hands-on experience with both NoSQL (MongoDB) and SQL (MySQL) databases: schema design, CRUD operations, indexing for performance, and data modeling best practices. You will also learn how to integrate your databases with backend APIs securely.</p>

<p><strong>DevOps & Deployment:</strong> Learn to containerize simple apps, deploy to platforms such as Netlify, Render, or AWS, configure environment variables, and set up basic CI/CD pipelines. The course will also cover logging, monitoring basics, and handling production errors.</p>

<h3>Projects & Capstone</h3>
<p>Project-based learning is central to this bootcamp. You will complete a series of incremental projects: a responsive portfolio site, a dynamic SPA with client-side routing, an API-driven blog platform, and a final capstone — a full-stack application with authentication, data persistence, and cloud deployment. Every project is code-reviewed and demoed live to build confidence and communication skills.</p>

<h3>Career Outcomes</h3>
<p>Graduates are prepared for roles such as Full Stack Developer, Front-End Developer, Back-End Developer, Web Application Engineer, and Software Developer (Web). The practical portfolio and interview-focused preparation included in the course help bridge the gap between learning and employment.</p>

<h3>Benefits of the Program</h3>
<ul>
  <li>Real-world project experience and mentorship.</li>
  <li>Industry-relevant toolset (React, Node.js, Express, MongoDB/MySQL, Git).</li>
  <li>Deployment and portfolio-building guidance to showcase work to employers.</li>
  <li>Flexibility to specialize further in front-end or back-end after completion.</li>
</ul>

<h3>Course Duration & Structure</h3>
<p><strong>Duration:</strong> 12 Weeks (Online & Offline options)</p>
<ul>
  <li><strong>Weeks 1–3:</strong> HTML, CSS, JavaScript fundamentals and responsive design.</li>
  <li><strong>Weeks 4–6:</strong> React.js, component patterns, state management, and front-end tooling.</li>
  <li><strong>Weeks 7–9:</strong> Node.js, Express.js, REST APIs, authentication, and database integration (MongoDB/MySQL).</li>
  <li><strong>Weeks 10–12:</strong> Advanced topics: API integration, cloud deployment, CI/CD basics, and capstone project deployment.</li>
</ul>

<p>By the end of this bootcamp you will be able to conceive, design, implement, and deploy full-stack web applications and present a professional portfolio to potential employers.</p>
`,
  },

  {
    id: 2,
    slug: "data-science-machine-learning-masterclass",
    title: "Data Science & Machine Learning Masterclass",
    category: "Data Science",
    summary:
      "Become a data expert with hands-on experience in Python, data engineering, machine learning, and model deployment.",
    image: datascienceImg,
    details: `
<h2>Overview: Data Science & Machine Learning Masterclass</h2>
<p>Data powers modern business decisions across every industry. The Data Science & Machine Learning Masterclass gives learners the analytical toolbox to turn raw data into actionable insights. This professional program focuses on practical skills: data collection and cleaning, exploratory data analysis, feature engineering, model development, validation, and deployment. Emphasis is placed on reproducible workflows, ethical data usage, and translating technical results into business impact.</p>

<h3>Learning Objectives</h3>
<ul>
  <li>Develop a strong foundation in Python programming for data tasks.</li>
  <li>Perform robust data cleaning and transformation for real-world datasets.</li>
  <li>Design, train, and evaluate machine learning models for regression and classification.</li>
  <li>Apply model interpretability methods and validate models for deployment.</li>
  <li>Communicate insights effectively through visualizations and dashboards.</li>
</ul>

<h3>Core Modules & Tools</h3>
<p><strong>Programming & Libraries:</strong> Gain proficiency in Python, using libraries such as NumPy for numerical computing, Pandas for data manipulation, and Matplotlib/Seaborn for visualization. Learn clean coding practices and how to structure exploratory notebooks for reproducibility.</p>

<p><strong>Exploratory Data Analysis (EDA):</strong> Learn to profile datasets, detect anomalies, treat missing values, and perform feature engineering. You will learn statistical fundamentals to describe distributions and relationships.</p>

<p><strong>Machine Learning:</strong> Implement supervised (linear regression, logistic regression, tree-based models) and unsupervised (clustering, PCA) approaches using Scikit-learn. You will learn cross-validation, hyperparameter tuning, and model selection strategies.</p>

<p><strong>Deep Learning & Advanced Topics:</strong> Introductory modules cover neural networks and deep learning fundamentals using frameworks like TensorFlow or PyTorch for tasks such as image classification or text processing.</p>

<p><strong>Model Deployment:</strong> Learn how to package models into APIs, containerize with Docker, and deploy to cloud services. Understand monitoring and retraining strategies for models in production.</p>

<h3>Hands-on Projects</h3>
<p>Work on real-world case studies such as time-series forecasting, customer segmentation, and predictive maintenance. Projects include building end-to-end pipelines: data ingestion, preprocessing, model training, evaluation, and deployment to a simple web service or dashboard.</p>

<h3>Career Outcomes</h3>
<p>After the course you will be equipped for roles like Data Scientist, Machine Learning Engineer, Data Analyst, and AI Engineer. The program also prepares you for interview rounds by reviewing common problems and best practices in model explanation and evaluation.</p>

<h3>Course Duration & Structure</h3>
<p><strong>Duration:</strong> 10 Weeks (Project-based)</p>
<ul>
  <li><strong>Weeks 1–2:</strong> Python fundamentals and data manipulation with Pandas.</li>
  <li><strong>Weeks 3–4:</strong> EDA, visualization, and feature engineering.</li>
  <li><strong>Weeks 5–7:</strong> Supervised and unsupervised learning, model evaluation, and tuning.</li>
  <li><strong>Weeks 8–10:</strong> Deep learning basics, model deployment, capstone project, and presentation.</li>
</ul>

<p>Graduates will be able to develop production-aware models and communicate insights to stakeholders clearly and effectively.</p>
`,
  },

  {
    id: 3,
    slug: "ui-ux-design-professional-certificate",
    title: "UI/UX Design Professional Certificate",
    category: "Design",
    summary:
      "Master user-centered design with practical experience in research, prototyping, and accessible interface design.",
    image: uiuxImg,
    details: `
<h2>Overview: UI/UX Design Professional Certificate</h2>
<p>Design drives product adoption and user satisfaction. This UI/UX Design Professional Certificate is a focused, hands-on program that teaches the principles and processes of human-centered design. The curriculum emphasizes user research, wireframing, prototyping, usability testing, and the creation of design systems. You will learn tools and methods used by professional product teams to deliver usable, accessible, and visually coherent interfaces.</p>

<h3>Learning Objectives</h3>
<ul>
  <li>Conduct user research and synthesize findings into personas and journey maps.</li>
  <li>Create low- and high-fidelity prototypes to validate interaction flows.</li>
  <li>Apply visual design principles and accessibility best practices.</li>
  <li>Build a design system and produce handoffs for development.</li>
  <li>Run usability tests and iterate designs based on user feedback.</li>
</ul>

<h3>Course Modules & Tools</h3>
<p><strong>Research & Strategy:</strong> Learn qualitative and quantitative research methods, interview techniques, and how to transform research into actionable insights.</p>

<p><strong>Interaction Design & Prototyping:</strong> Use tools like Figma to create wireframes and interactive prototypes. Understand common interaction patterns, responsive behavior, and micro-interactions that improve usability.</p>

<p><strong>Visual Design & Systems:</strong> Explore typography, grid systems, color theory, and component libraries. Build a simple design system to ensure consistency across pages and products.</p>

<p><strong>Accessibility & Usability:</strong> Learn accessibility guidelines (WCAG), how to assess contrast and keyboard navigation, and how to incorporate inclusive design into every stage.</p>

<h3>Projects & Portfolio</h3>
<p>Work on practical exercises and projects that include designing a mobile app interface, a responsive web dashboard, and an end-to-end product concept including research reports, prototypes, and developer-ready assets. Each project includes peer and instructor feedback to refine your work for a professional portfolio.</p>

<h3>Career Outcomes</h3>
<p>Graduates will be ready for roles such as UI/UX Designer, Product Designer, Interaction Designer, and UX Researcher. The emphasis on portfolio and case studies helps candidates present their process and design thinking to hiring managers.</p>

<h3>Course Duration & Structure</h3>
<p><strong>Duration:</strong> 8 Weeks (Portfolio-focused)</p>
<ul>
  <li><strong>Weeks 1–2:</strong> Research methods and user-centered design fundamentals.</li>
  <li><strong>Weeks 3–4:</strong> Wireframing, interaction design, and prototyping.</li>
  <li><strong>Weeks 5–6:</strong> Visual design, design systems, and accessibility.</li>
  <li><strong>Weeks 7–8:</strong> Usability testing, iteration, and portfolio preparation.</li>
</ul>
`,
  },

  {
    id: 4,
    slug: "cloud-computing-with-aws",
    title: "Cloud Computing with AWS",
    category: "Cloud",
    summary:
      "Learn cloud architecture, core AWS services, serverless patterns, and deployment strategies to build scalable systems.",
    image: cloudImg,
    details: `
<h2>Overview: Cloud Computing with AWS</h2>
<p>Cloud computing is the backbone of modern applications. This course offers practical, hands-on training in AWS fundamentals and cloud-native design patterns. It is structured to give you the knowledge to build, secure, and scale applications on the cloud, with a focus on widely used services and operational best practices.</p>

<h3>Learning Objectives</h3>
<ul>
  <li>Understand cloud fundamentals and the shared responsibility model.</li>
  <li>Design and deploy scalable infrastructure using core AWS services.</li>
  <li>Implement serverless architectures and automate routine tasks.</li>
  <li>Apply security best practices and manage identity and access.</li>
  <li>Monitor, troubleshoot, and optimize cloud applications.</li>
</ul>

<h3>Core Modules & Tools</h3>
<p><strong>Fundamentals:</strong> Overview of EC2, S3, IAM, VPC, and pricing models. Learn when to choose different compute and storage options depending on workload requirements.</p>

<p><strong>Networking & Security:</strong> Understand VPC configuration, network ACLs, security groups, and IAM policies to set up secure, multi-tier architectures.</p>

<p><strong>Serverless & Managed Services:</strong> Explore Lambda, API Gateway, managed databases (RDS), and S3 for static hosting. Learn patterns for event-driven architectures and cost-efficient deployments.</p>

<p><strong>Deployment & Monitoring:</strong> Use infrastructure as code (IaC) concepts and tools to automate deployment. Learn basics of CloudWatch for monitoring, logging, and alerting.</p>

<h3>Hands-on Labs</h3>
<p>Hands-on exercises include launching EC2 instances, configuring S3 buckets and permissions, creating and securing RDS instances, deploying a serverless API with Lambda and API Gateway, and setting up basic monitoring and alerts. These labs teach operational tasks you will perform in real roles.</p>

<h3>Career Outcomes</h3>
<p>Graduates are prepared for roles like Cloud Engineer, DevOps Engineer, AWS Solutions Architect, and Site Reliability Engineer. The course gives you a practical foundation to pursue AWS certifications or to contribute effectively in cloud teams.</p>

<h3>Course Duration & Structure</h3>
<p><strong>Duration:</strong> 6 Weeks (Hands-on labs)</p>
<ul>
  <li><strong>Weeks 1–2:</strong> Core AWS services and cloud fundamentals.</li>
  <li><strong>Weeks 3–4:</strong> Networking, security, and managed services.</li>
  <li><strong>Weeks 5–6:</strong> Serverless architectures, deployment automation, monitoring, and capstone lab.</li>
</ul>
`,
  },

  {
    id: 5,
    slug: "mobile-app-development-with-react-native",
    title: "Mobile App Development with React Native",
    category: "Mobile Development",
    summary:
      "Learn cross-platform mobile development with React Native, from UI components to native APIs and app store deployment.",
    image: mobileImg,
    details: `
<h2>Overview: Mobile App Development with React Native</h2>
<p>React Native allows developers to build native mobile applications for both Android and iOS using a single codebase. This course focuses on practical mobile development: building performant UIs, handling navigation and state, integrating with native device APIs, and publishing apps to the stores. The curriculum is suited for web developers transitioning to mobile development as well as newcomers who want to build real-world apps quickly.</p>

<h3>Learning Objectives</h3>
<ul>
  <li>Understand the architecture of React Native and how it differs from web React.</li>
  <li>Build responsive and adaptive UIs that feel native on both iOS and Android.</li>
  <li>Integrate RESTful APIs, local storage, and device capabilities.</li>
  <li>Debug, test, and optimize mobile apps for performance and battery usage.</li>
  <li>Publish and maintain apps on app stores.</li>
</ul>

<h3>Course Components</h3>
<p><strong>Core Concepts:</strong> Learn React Native components, styling, Flexbox-based layout, and platform-specific differences. Master navigation using React Navigation and state management approaches appropriate for mobile.</p>

<p><strong>Data & APIs:</strong> Connect your app to backend services, implement offline caching strategies, and work with asynchronous data flows.</p>

<p><strong>Native Features:</strong> Access device sensors, camera, push notifications, and permissions. Learn how to use community libraries and link native modules where needed.</p>

<h3>Projects & Deployment</h3>
<p>Projects include building a social feed app, a productivity tool with offline support, and a small e-commerce prototype. The final module covers packaging, signing, and submitting apps to the Apple App Store and Google Play Store, as well as monitoring and analytics integration.</p>

<h3>Career Outcomes</h3>
<p>Graduates can pursue roles such as Mobile App Developer, React Native Developer, or Front-End Mobile Engineer. The course equips you with practical skills to ship mobile apps and maintain them in production.</p>

<h3>Course Duration & Structure</h3>
<p><strong>Duration:</strong> 7 Weeks (Project-based)</p>
<ul>
  <li><strong>Weeks 1–2:</strong> Introduction to React Native, layout, and components.</li>
  <li><strong>Weeks 3–4:</strong> Navigation, state management, and API integration.</li>
  <li><strong>Weeks 5–7:</strong> Native features, performance optimization, testing, and deployment.</li>
</ul>
`,
  },

  {
    id: 6,
    slug: "digital-marketing-and-seo-mastery",
    title: "Digital Marketing & SEO Mastery",
    category: "Marketing",
    summary:
      "Master SEO, content strategy, and digital campaigns to drive traffic, leads, and measurable conversions.",
    image: marketingImg,
    details: `
<h2>Overview: Digital Marketing & SEO Mastery</h2>
<p>Digital channels are the primary way businesses reach customers today. This comprehensive course covers the strategic and tactical aspects of digital marketing, with a focus on search engine optimization (SEO), paid advertising, analytics, and conversion optimization. Learn how to plan, execute, and measure campaigns that deliver real business results.</p>

<h3>Learning Objectives</h3>
<ul>
  <li>Understand how search engines work and implement effective SEO strategies.</li>
  <li>Plan and run paid campaigns using Google Ads and social platforms.</li>
  <li>Use analytics to measure performance and drive iterative improvement.</li>
  <li>Create content strategies that attract and engage target audiences.</li>
  <li>Optimize conversion funnels and landing pages for better ROI.</li>
</ul>

<h3>Course Topics & Tools</h3>
<p><strong>SEO:</strong> Keyword research, on-page optimization, technical SEO (site speed, mobile-friendliness), schema markup, and backlink strategies. Learn tools and techniques to audit and improve search visibility.</p>

<p><strong>Content & Social:</strong> Develop content strategies and editorial calendars, optimize content for both users and search engines, and leverage social media for distribution and community building.</p>

<p><strong>Paid Media & Analytics:</strong> Create and optimize PPC campaigns with Google Ads, set up conversion tracking, and use Google Analytics (or comparable analytics tools) to analyze performance and customer journeys.</p>

<p><strong>Conversion Optimization:</strong> A/B testing, landing page optimization, persuasive copywriting, and UX considerations that improve lead generation and sales.</p>

<h3>Hands-on Campaigns</h3>
<p>Run live campaigns in a controlled environment, analyze results, and iterate for performance. Projects include building a complete content funnel, setting up ad campaigns, and producing a performance report with actionable insights.</p>

<h3>Career Outcomes</h3>
<p>Graduates will be prepared for roles such as Digital Marketing Executive, SEO Specialist, Content Strategist, PPC Specialist, and Growth Marketer. The course also supports entrepreneurs and freelancers who want to grow businesses online.</p>

<h3>Course Duration & Structure</h3>
<p><strong>Duration:</strong> 6 Weeks (Live projects)</p>
<ul>
  <li><strong>Weeks 1–2:</strong> SEO fundamentals and content strategy.</li>
  <li><strong>Weeks 3–4:</strong> Paid media, analytics, and tracking.</li>
  <li><strong>Weeks 5–6:</strong> Conversion optimization, live campaigns, and final performance project.</li>
</ul>
`,
  },
];

export default blogCourses;
