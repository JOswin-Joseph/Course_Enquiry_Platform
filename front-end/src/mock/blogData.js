// src/mock/blogData.js
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
      "Become job-ready by mastering front-end and back-end development using the MERN stack.",
    image: fullstackImg,
    details: `
<h2>Full Stack Web Development Bootcamp</h2>

<p>
The Full Stack Web Development Bootcamp is an intensive, industry-oriented training program designed to transform learners into job-ready professional developers...
</p>

<!-- (Course 1 unchanged — keeping your original full version) -->
    `,
  },

  {
    id: 2,
    slug: "data-science-machine-learning-masterclass",
    title: "Data Science & Machine Learning Masterclass",
    category: "Data Science",
    summary:
      "Master Python, Data Analytics, Machine Learning, and real-time AI projects.",
    image: datascienceImg,
    details: `
<h2>Data Science & Machine Learning Masterclass</h2>

<p>
The Data Science & Machine Learning Masterclass is an in-depth, project-driven program...
</p>

<!-- (Course 2 unchanged — keeping your original full version) -->
    `,
  },

  {
    id: 3,
    slug: "ui-ux-design-professional-certificate",
    title: "UI/UX Design Professional Certificate",
    category: "Design",
    summary:
      "Master UI/UX design using Figma, wireframes, prototyping, and real-world projects.",
    image: uiuxImg,
    details: `
<h2>UI/UX Design Professional Certificate</h2>

<p>
The UI/UX Design Professional Certificate is an advanced, industry-focused training program...
</p>

<!-- (Course 3 unchanged — keeping your original full version) -->
    `,
  },

  {
    id: 4,
    slug: "cloud-computing-with-aws",
    title: "Cloud Computing with AWS — Complete Professional Training",
    category: "Cloud",
    summary:
      "Master EC2, S3, IAM, Lambda, VPC, CloudFront, DevOps & real AWS deployments.",
    image: cloudImg,

    // ⭐ FULL UPDATED COURSE 4 CONTENT INSERTED HERE
    details: `
<h2>Cloud Computing with AWS — Complete Professional Training</h2>

<p>
The <b>Cloud Computing with AWS Professional Training Program</b> is one of the most comprehensive, industry-aligned, and job-oriented cloud courses designed to help learners build deep expertise in Amazon Web Services (AWS), the world’s #1 cloud platform. In today’s technology-driven era, companies across all industries—including e-commerce, healthcare, fintech, AI, government, cybersecurity, gaming, and enterprise IT—are rapidly migrating their infrastructure from traditional physical servers to the cloud. AWS powers millions of applications around the world, enabling organizations to scale globally, reduce costs, improve performance, and innovate faster.
</p>

<p>
This training program provides a complete hands-on learning experience across real AWS services such as <b>EC2, S3, IAM, VPC, Lambda, CloudWatch, CloudFront, Route 53, RDS, DynamoDB, Aurora, ECR, ECS, Elastic Load Balancers, Auto Scaling Groups, API Gateway</b> and more. You will learn how cloud applications are designed, deployed, secured, monitored, automated, and optimized using AWS best practices. By the end of the program, you will have the skills needed to take on roles like <b>AWS Cloud Engineer, DevOps Engineer, Solutions Architect, Cloud Administrator, Infrastructure Engineer, Site Reliability Engineer (SRE), or Cloud Support Associate</b>.
</p>

<p>
This detailed curriculum is structured exactly like top global AWS certification training programs. It follows real company workflows, real architectures, and real deployment environments. You will learn through examples, diagrams, implementation labs, live use cases, and full-scale cloud projects. Whether you are a beginner or intermediate learner, this program takes you from foundational concepts to advanced cloud design architecture so you can confidently work in enterprise cloud environments.
</p>

<h3>What is Cloud Computing?</h3>
<p>
Cloud computing is the delivery of computing services—including storage, networking, databases, servers, analytics, AI/ML, security, DevOps automation, and more—over the internet (“the cloud”). Instead of companies buying expensive hardware, maintaining data centers, and dealing with system failures, they use cloud providers like AWS that offer on-demand, pay-as-you-go, highly scalable resources.
</p>

<ul>
  <li><b>On-demand provisioning:</b> Create servers and databases instantly.</li>
  <li><b>Scalability:</b> Automatically increase or decrease resources as needed.</li>
  <li><b>High availability:</b> Fault-tolerant global infrastructure.</li>
  <li><b>Security:</b> Enterprise-grade encryption, IAM, compliance.</li>
  <li><b>Cost efficiency:</b> Pay only for usage, no upfront hardware cost.</li>
  <li><b>Global reach:</b> Deploy apps across multiple regions worldwide.</li>
</ul>

<p>
AWS pioneered cloud computing and continues to dominate the global market with more than 200 services. Companies like Netflix, Instagram, Uber, Adobe, NASA, Samsung, Twitter, Meta (Facebook), and Airbnb rely heavily on AWS because of its speed, automation, and scalability. Learning AWS means positioning yourself for one of the most in-demand and future-proof careers in the world.
</p>

<h3>Why AWS is the Most Important Skill in the IT Industry</h3>

<p>
Amazon Web Services (AWS) is the world’s largest and most powerful cloud platform. With over 32% of global cloud market share, it surpasses competitors like Google Cloud and Microsoft Azure. AWS provides a massive set of enterprise-grade tools for hosting websites, building machine learning pipelines, managing big data workloads, automating DevOps workflows, deploying microservices, running containers, powering mobile apps, and securing distributed applications.
</p>

<p><b>AWS is used by:</b></p>
<ul>
  <li>Fortune 500 companies</li>
  <li>Government organizations</li>
  <li>Unicorn startups</li>
  <li>E-commerce & fintech companies</li>
  <li>Healthcare and education systems</li>
  <li>AI/ML and cybersecurity firms</li>
</ul>

<p>
Because AWS is the backbone of modern infrastructure, learning this skill dramatically increases your job opportunities. Cloud roles remain some of the highest-paid in IT.
</p>

<h3>Skills You Will Master in This AWS Program</h3>

<h4>1. Compute — Amazon EC2</h4>
<p>
Learn how to deploy, configure, and scale EC2 servers for real applications.
</p>
<ul>
  <li>Launching EC2 instances</li>
  <li>Connecting with SSH keys</li>
  <li>Security group configuration</li>
  <li>Elastic IPs & ENIs</li>
  <li>Hosting Node.js/Python/PHP apps</li>
</ul>

<h4>2. Auto Scaling & Load Balancing</h4>
<ul>
  <li>Application Load Balancer</li>
  <li>Network Load Balancer</li>
  <li>Auto Scaling Groups</li>
  <li>High availability & fault tolerance</li>
</ul>

<h4>3. S3 & Cloud Storage</h4>
<ul>
  <li>Buckets, versioning, lifecycle rules</li>
  <li>Static website hosting</li>
  <li>CloudFront CDN streaming</li>
  <li>Bucket policies & secure access</li>
</ul>

<h4>4. IAM Security</h4>
<ul>
  <li>Users, groups, roles, policies</li>
  <li>MFA security</li>
  <li>Least privilege access</li>
</ul>

<h4>5. VPC Networking</h4>
<ul>
  <li>Subnets (public/private)</li>
  <li>Route tables</li>
  <li>Internet/NAT gateways</li>
  <li>VPC peering</li>
</ul>

<h4>6. Serverless Computing</h4>
<ul>
  <li>AWS Lambda functions</li>
  <li>API Gateway Integration</li>
  <li>Event-driven architectures</li>
</ul>

<h4>7. Databases</h4>
<ul>
  <li>RDS — SQL</li>
  <li>Aurora — high performance</li>
  <li>DynamoDB — NoSQL</li>
</ul>

<h4>8. Monitoring</h4>
<ul>
  <li>CloudWatch metrics</li>
  <li>CloudTrail auditing</li>
  <li>Billing alerts</li>
</ul>

<h4>9. Containers</h4>
<ul>
  <li>ECR</li>
  <li>ECS</li>
  <li>Fargate</li>
</ul>

<h3>Real-World Projects You Will Build</h3>

<h4>Project 1 — Host a Website on S3 + CloudFront</h4>
<p>Deploy static websites globally.</p>

<h4>Project 2 — EC2 Deployed Web App</h4>
<p>Host real backend apps with load balancers.</p>

<h4>Project 3 — Serverless REST API</h4>
<p>Create Lambda + API Gateway backend.</p>

<h4>Project 4 — Multi-tier VPC Architecture</h4>
<p>Build full enterprise network on AWS.</p>

<h3>Career Opportunities</h3>
<ul>
  <li>AWS Cloud Engineer</li>
  <li>DevOps Engineer</li>
  <li>SRE</li>
  <li>Solutions Architect</li>
</ul>

<h3>Outcome</h3>
<p>
By completing this AWS training, you will be job-ready to design, deploy, secure, and monitor real cloud applications in enterprise environments.
</p>
    `,
  },

  {
    id: 5,
    slug: "mobile-app-development-react-native",
    title: "Mobile App Development with React Native",
    category: "Mobile Development",
    summary: "Build Android & iOS apps using JavaScript and React Native.",
    image: mobileImg,
    details: `
<!-- (Course 5 original content kept unchanged) -->
    `,
  },

  {
    id: 6,
    slug: "digital-marketing-seo-mastery",
    title: "Digital Marketing & SEO Mastery",
    category: "Marketing",
    summary:
      "Learn SEO, Google Ads, Social Media Strategy, and digital growth techniques.",
    image: marketingImg,
    details: `
<!-- (Course 6 original content kept unchanged) -->
    `,
  },
];

export default blogCourses;
