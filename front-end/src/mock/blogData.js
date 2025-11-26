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
      "Become a full-stack developer in 12 weeks with hands-on projects and mentor support.",
    image: fullstackImg,
    details: `
<h2>How a Full Stack Web Development Course Can Shape Your Future</h2>
<p>One of the most demanded skills in the market today is <b>Full Stack Web Development</b>, as it enables one to develop both the front-end and back-end of a website or web application. A full-stack developer is involved in designing user-friendly interfaces, managing servers, and handling databases.</p>
<p><b>Takeoff Upskill</b> offers practical training that helps you master all levels of development using real-time projects. You’ll learn <b>HTML, CSS, JavaScript, React, and Node.js</b>, along with database management and project hosting. Whether you are a beginner or an experienced learner, Takeoff Upskill ensures you become a confident full-stack web developer.</p>

<h3>Why Choose Full Stack Web Development Course?</h3>
<p>Full Stack Web Development is ideal for learners who want to know all aspects of building web applications. You don’t just code or design — you do both. This makes you capable of creating complete web solutions independently.</p>
<p>Companies prefer hiring full-stack developers because they can handle multiple roles efficiently and complete projects faster.</p>

<h3>Skills You Learn in Full Stack Web Development</h3>
<ul>
  <li>Front-End Development (HTML, CSS, JavaScript, React)</li>
  <li>Back-End Technologies (Node.js, Express.js)</li>
  <li>Database Management (MongoDB, MySQL)</li>
  <li>Version Control (Git, GitHub)</li>
  <li>API Integration and Deployment</li>
</ul>

<h3>Career Opportunities</h3>
<p>After completing this course, you can work as a:</p>
<ul>
  <li>Full Stack Developer</li>
  <li>Front-End Developer</li>
  <li>Back-End Developer</li>
  <li>Web Application Engineer</li>
</ul>

<h3>Benefits of Learning Full Stack Development</h3>
<ul>
  <li>Build entire web applications from scratch</li>
  <li>Improve problem-solving and coding skills</li>
  <li>Work on both design and functionality</li>
  <li>High-paying job opportunities</li>
</ul>

<h3>Course Duration</h3>
<p><b>12 Weeks (Online or Offline)</b></p>
`,
  },
  {
    id: 2,
    slug: "data-science-machine-learning-masterclass",
    title: "Data Science & Machine Learning Masterclass",
    category: "Data Science",
    summary:
      "Transform your career with in-demand data science and machine learning skills.",
    image: datascienceImg,
    details: `
<h2>Data Science & Machine Learning Masterclass Overview</h2>
<p>Data Science combines <b>programming, statistics, and business intelligence</b> to extract insights from data. This course gives you hands-on experience in data cleaning, visualization, and predictive modeling using Python.</p>

<h3>Why Choose Data Science?</h3>
<p>Every business today relies on data for decision-making. Skilled data scientists are in high demand across industries such as healthcare, finance, and technology.</p>

<h3>Skills You Learn</h3>
<ul>
  <li>Python for Data Science</li>
  <li>Data Cleaning with Pandas</li>
  <li>Data Visualization using Matplotlib and Seaborn</li>
  <li>Machine Learning (Regression, Classification, Clustering)</li>
  <li>Model Evaluation and Optimization</li>
</ul>

<h3>Career Opportunities</h3>
<ul>
  <li>Data Scientist</li>
  <li>Machine Learning Engineer</li>
  <li>Data Analyst</li>
  <li>AI Engineer</li>
</ul>

<h3>Duration</h3>
<p><b>10 Weeks (Project-based training)</b></p>
`,
  },
  {
    id: 3,
    slug: "ui-ux-design-professional-certificate",
    title: "UI/UX Design Professional Certificate",
    category: "Design",
    summary:
      "Design modern, user-friendly applications using Figma and design systems.",
    image: uiuxImg,
    details: `
<h2>UI/UX Design Professional Certificate</h2>
<p>Every digital product today needs great design and usability. This course helps you master both <b>User Interface (UI)</b> and <b>User Experience (UX)</b> design, with a focus on creativity and usability.</p>

<h3>Why Choose UI/UX Design?</h3>
<p>UI/UX design improves the way users interact with websites and apps. With Figma and other tools, you’ll learn how to turn ideas into interactive designs that users love.</p>

<h3>Skills You Learn</h3>
<ul>
  <li>Design Thinking and Research</li>
  <li>Wireframing and Prototyping</li>
  <li>UI Layouts and Visual Design</li>
  <li>Creating Design Systems</li>
</ul>

<h3>Career Roles</h3>
<ul>
  <li>UI/UX Designer</li>
  <li>Product Designer</li>
  <li>Interaction Designer</li>
</ul>

<h3>Duration</h3>
<p><b>8 Weeks (Design-based practical learning)</b></p>
`,
  },
  {
    id: 4,
    slug: "cloud-computing-with-aws",
    title: "Cloud Computing with AWS",
    category: "Cloud",
    summary:
      "Master AWS services and deploy applications on the cloud.",
    image: cloudImg,
    details: `
<h2>Cloud Computing with AWS Course Overview</h2>
<p>Cloud computing is the foundation of modern IT. This course teaches how to build and manage cloud infrastructure using <b>Amazon Web Services (AWS)</b>.</p>

<h3>Skills You Learn</h3>
<ul>
  <li>AWS EC2, S3, and IAM</li>
  <li>Networking and VPC</li>
  <li>Serverless Architecture with Lambda</li>
  <li>Application Deployment on AWS</li>
</ul>

<h3>Career Roles</h3>
<ul>
  <li>Cloud Engineer</li>
  <li>DevOps Engineer</li>
  <li>AWS Solutions Architect</li>
</ul>

<h3>Duration</h3>
<p><b>6 Weeks (Practical hands-on labs)</b></p>
`,
  },
  {
    id: 5,
    slug: "mobile-app-development-with-react-native",
    title: "Mobile App Development with React Native",
    category: "Mobile Development",
    summary:
      "Build cross-platform mobile apps with JavaScript and React Native.",
    image: mobileImg,
    details: `
<h2>Mobile App Development with React Native</h2>
<p>This course enables you to build mobile applications for both Android and iOS using a single codebase. React Native simplifies development using JavaScript and React principles.</p>

<h3>Skills You Learn</h3>
<ul>
  <li>React Native Components</li>
  <li>Navigation and Routing</li>
  <li>REST API Integration</li>
  <li>Debugging and Testing</li>
</ul>

<h3>Career Roles</h3>
<ul>
  <li>Mobile App Developer</li>
  <li>React Native Developer</li>
</ul>

<h3>Duration</h3>
<p><b>7 Weeks (Real-world app building)</b></p>
`,
  },
  {
    id: 6,
    slug: "digital-marketing-and-seo-mastery",
    title: "Digital Marketing & SEO Mastery",
    category: "Marketing",
    summary:
      "Learn SEO and online marketing strategies to grow businesses.",
    image: marketingImg,
    details: `
<h2>Digital Marketing & SEO Mastery</h2>
<p>In this course, you’ll learn how to increase website visibility and brand awareness using modern digital marketing tools and SEO strategies.</p>

<h3>Skills You Learn</h3>
<ul>
  <li>Search Engine Optimization (SEO)</li>
  <li>Google Ads & Analytics</li>
  <li>Social Media Marketing</li>
  <li>Content Strategy</li>
</ul>

<h3>Career Roles</h3>
<ul>
  <li>Digital Marketing Executive</li>
  <li>SEO Specialist</li>
  <li>Content Strategist</li>
</ul>

<h3>Duration</h3>
<p><b>6 Weeks (Live campaign training)</b></p>
`,
  },
];

export default blogCourses;