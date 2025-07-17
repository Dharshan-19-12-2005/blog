// src/app/blogs/page.tsx
'use client';

import BlogCard from '@/components/BlogCard';

export interface BlogPost {
  title: string;
  slug: string;
  carrier: 'Cloud' | 'DevOps' | 'AI/ML' | 'Software Developer' | 'Cybersecurity' | 'Data Engineering';
  shortDescription: string;
  fullDescription: string;
  roadmap: string[];
}

export const blogPosts: BlogPost[] = [
  {
    title: 'Getting Started with AWS Cloud',
    slug: 'aws-cloud-basics',
    carrier: 'Cloud',
    shortDescription: 'A beginner-friendly guide to Amazon Web Services fundamentals.',
    fullDescription: `Amazon Web Services (AWS) is the world’s most comprehensive and broadly adopted cloud platform, offering over 200 fully featured services from data centers globally. Millions of customers—including the fastest-growing startups, largest enterprises, and leading government agencies—are using AWS to lower costs, become more agile, and innovate faster.`,
    roadmap: [
      'Learn AWS Global Infrastructure',
      'Understand EC2, S3, RDS basics',
      'Explore VPC and Networking',
      'Deploy a simple web application',
      'Get AWS Certified Cloud Practitioner'
    ],
  },
  {
    title: 'Azure Fundamentals for Cloud Engineers',
    slug: 'azure-fundamentals',
    carrier: 'Cloud',
    shortDescription: 'Key concepts and services in Microsoft Azure cloud platform.',
    fullDescription: 'Microsoft Azure is a cloud computing service operated by Microsoft for application management via Microsoft-managed data centers. It provides software as a service (SaaS), platform as a service (PaaS), and infrastructure as a service (IaaS) and supports many different programming languages, tools, and frameworks, including both Microsoft-specific and third-party software and systems.',
    roadmap: [
      'Azure account setup and portal navigation',
      'Virtual Machines (VMs) and networking',
      'Storage solutions (Blob, File, Queue)',
      'Azure App Service for web apps',
      'Azure AD and security basics'
    ],
  },
  {
    title: 'Introduction to Docker and Containers',
    slug: 'docker-intro',
    carrier: 'DevOps',
    shortDescription: 'Understanding containerization with Docker for efficient deployment.',
    fullDescription: 'Docker is a platform designed to help developers, sysadmins, and IT ops create, run, and ship applications using containers. Containers are a standardized unit of software that allows developers to package up an application with all of its dependencies and libraries, and and ship it out as one package.',
    roadmap: [
      'Install Docker Desktop',
      'Understand Dockerfile and Images',
      'Run and manage Containers',
      'Docker Compose for multi-container apps',
      'Basic Docker networking'
    ],
  },
  {
    title: 'CI/CD with GitLab CI',
    slug: 'gitlab-ci-pipelines',
    carrier: 'DevOps',
    shortDescription: 'Building automated CI/CD pipelines using GitLab.',
    fullDescription: 'GitLab CI/CD is a powerful tool built into GitLab for software development through continuous methodologies: Continuous Integration, Continuous Delivery, and Continuous Deployment. It automates the steps from code commit to deployment, ensuring faster and more reliable software releases.',
    roadmap: [
      'Understand CI/CD concepts',
      'Set up a .gitlab-ci.yml file',
      'Define stages and jobs',
      'Integrate with testing and deployment',
      'Explore advanced GitLab CI/CD features'
    ],
  },
  {
    title: 'Machine Learning Basics with Python',
    slug: 'ml-python-basics',
    carrier: 'AI/ML',
    shortDescription: 'Fundamental concepts of Machine Learning and practical Python examples.',
    fullDescription: 'Machine Learning (ML) is a subset of Artificial Intelligence (AI) that focuses on building systems that learn from data. It involves algorithms that enable computers to learn from data without being explicitly programmed. Python is a popular language for ML due to its extensive libraries like scikit-learn, TensorFlow, and PyTorch.',
    roadmap: [
      'Python programming fundamentals',
      'NumPy and Pandas for data manipulation',
      'Introduction to scikit-learn',
      'Supervised vs. Unsupervised learning',
      'Build a simple linear regression model'
    ],
  },
  {
    title: 'Deep Learning with TensorFlow',
    slug: 'tensorflow-deep-learning',
    carrier: 'AI/ML',
    shortDescription: 'Dive into neural networks and deep learning using TensorFlow.',
    fullDescription: 'TensorFlow is an open-source machine learning framework developed by Google. It is widely used for building and training deep learning models. TensorFlow provides a comprehensive ecosystem of tools, libraries, and community resources that lets researchers push the state-of-the-art in ML and developers easily build and deploy ML-powered applications.',
    roadmap: [
      'Neural network architecture basics',
      'TensorFlow Keras API',
      'Training a simple neural network',
      'Convolutional Neural Networks (CNNs)',
      'Recurrent Neural Networks (RNNs) introduction'
    ],
  },
  {
    title: 'Frontend Development with React.js',
    slug: 'react-frontend-dev',
    carrier: 'Software Developer',
    shortDescription: 'Building interactive user interfaces with the React library.',
    fullDescription: 'React is a JavaScript library for building user interfaces, primarily single-page applications. It allows developers to create large web applications that can change data without reloading the page. Its main purpose is to be fast, scalable, and simple.',
    roadmap: [
      'JavaScript ES6+ fundamentals',
      'React components and props',
      'State management with useState and useEffect',
      'React Router for navigation',
      'Fetch data from an API'
    ],
  },
  {
    title: 'Backend Development with Node.js and Express',
    slug: 'nodejs-express-backend',
    carrier: 'Software Developer',
    shortDescription: 'Creating robust server-side applications using Node.js and Express.',
    fullDescription: 'Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser. Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.',
    roadmap: [
      'Node.js installation and npm basics',
      'HTTP module in Node.js',
      'Express.js routing and middleware',
      'Connect to a database (e.g., MongoDB)',
      'Build RESTful APIs'
    ],
  },
  {
    title: 'Understanding Kubernetes Orchestration',
    slug: 'kubernetes-orchestration',
    carrier: 'DevOps',
    shortDescription: 'Managing containerized applications at scale with Kubernetes.',
    fullDescription: 'Kubernetes (K8s) is an open-source system for automating deployment, scaling, and management of containerized applications. It groups containers that make up an application into logical units for easy management and discovery.',
    roadmap: [
      'Containerization concepts (Docker pre-requisite)',
      'Kubernetes architecture (Master, Nodes, Pods)',
      'Deployments and Services',
      'Basic kubectl commands',
      'Helm for package management'
    ],
  },
  {
    title: 'Data Science with Python and Pandas',
    slug: 'data-science-pandas',
    carrier: 'AI/ML',
    shortDescription: 'Exploring data analysis and manipulation using Python and Pandas.',
    fullDescription: 'Data science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from noisy, structured and unstructured data, and apply knowledge and actionable insights from data across a broad range of application domains. Pandas is a fast, powerful, flexible and easy to use open source data analysis and manipulation tool, built on top of the Python programming language.',
    roadmap: [
      'Python for Data Science basics',
      'NumPy for numerical operations',
      'Pandas DataFrames and Series',
      'Data cleaning and pre-processing',
      'Basic data visualization with Matplotlib/Seaborn'
    ],
  },
  {
    title: 'Introduction to Network Security',
    slug: 'network-security-basics',
    carrier: 'Cybersecurity',
    shortDescription: 'Fundamental concepts of securing computer networks.',
    fullDescription: 'Network security is a broad term that covers a multitude of technologies, devices, and processes. In its simplest term, it is a set of rules and configurations designed to protect the integrity, confidentiality, and accessibility of computer networks and data using both software and hardware technologies.',
    roadmap: [
      'OSI Model and TCP/IP',
      'Firewalls and IDS/IPS',
      'VPNs and Encryption',
      'Network Vulnerability Scanning',
      'Security Information and Event Management (SIEM)'
    ],
  },
  {
    title: 'Ethical Hacking and Penetration Testing',
    slug: 'ethical-hacking-pentesting',
    carrier: 'Cybersecurity',
    shortDescription: 'Learn the basics of ethical hacking and penetration testing methodologies.',
    fullDescription: 'Ethical hacking, also known as penetration testing, is an authorized attempt to gain unauthorized access to a computer system, application, or data. Carrying out an ethical hack involves duplicating strategies and actions of malicious attackers. This practice helps to identify security vulnerabilities that can be patched before malicious actors exploit them.',
    roadmap: [
      'Understanding common attack vectors (SQLi, XSS)',
      'Reconnaissance and Footprinting',
      'Scanning and Enumeration',
      'Exploitation Techniques',
      'Reporting and Remediation'
    ],
  },
  {
    title: 'Fundamentals of Data Warehousing',
    slug: 'data-warehousing-fundamentals',
    carrier: 'Data Engineering',
    shortDescription: 'Key concepts behind designing and managing data warehouses.',
    fullDescription: 'A data warehouse is a central repository for integrated data from one or more disparate sources. It stores current and historical data in one single place that is used for creating analytical reports for workers throughout the enterprise. The data stored in the warehouse is uploaded from the operational systems.',
    roadmap: [
      'Relational Databases (SQL)',
      'ETL (Extract, Transform, Load) processes',
      'Dimensional Modeling (Star, Snowflake schemas)',
      'Data Lake concepts',
      'Cloud Data Warehouses (Snowflake, BigQuery)'
    ],
  },
  {
    title: 'Introduction to Apache Spark for Data Processing',
    slug: 'apache-spark-intro',
    carrier: 'Data Engineering',
    shortDescription: 'An overview of Apache Spark for large-scale data processing.',
    fullDescription: 'Apache Spark is a unified analytics engine for large-scale data processing. It provides high-level APIs in Java, Scala, Python, and R, and an optimized engine that supports general execution graphs. It also supports a rich set of higher-level tools including Spark SQL for SQL and structured data processing, MLlib for machine learning, GraphX for graph processing, and Spark Streaming for stream processing.',
    roadmap: [
      'Big Data concepts',
      'Spark Core API (RDDs)',
      'Spark SQL (DataFrames)',
      'Spark Streaming basics',
      'Deploying Spark applications'
    ],
  },
];

const BlogsPage = () => {
  const carriers: BlogPost['carrier'][] = [
    'Cloud',
    'DevOps',
    'AI/ML',
    'Software Developer',
    'Cybersecurity',
    'Data Engineering'
  ];

  return (
    <div style={containerStyle}>
      <h1 style={pageTitleStyle}>Explore Career Paths</h1>
      {carriers.map((carrier) => (
        <section key={carrier} style={carrierSectionStyle}>
          <h2 style={carrierTitleStyle}>{carrier}</h2>
          <div style={blogGridStyle}>
            {blogPosts
              .filter((blog) => blog.carrier === carrier)
              .map((blog) => (
                <BlogCard key={blog.slug} blog={blog} />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  maxWidth: '1300px',
  margin: '2.5rem auto',
  padding: '0 1.5rem',
};

const pageTitleStyle: React.CSSProperties = {
  textAlign: 'center',
  fontSize: '3rem',
  color: '#2c3e50',
  marginBottom: '3.5rem',
  fontWeight: '700',
};

const carrierSectionStyle: React.CSSProperties = {
  marginBottom: '4rem',
  paddingBottom: '2.5rem',
  borderBottom: '1px solid #e0e0e0',
};

const carrierTitleStyle: React.CSSProperties = {
  fontSize: '2.2rem',
  color: '#34495e',
  marginBottom: '2rem',
  borderLeft: '6px solid #007bff',
  paddingLeft: '1.2rem',
  fontWeight: '600',
};

const blogGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
  gap: '2rem',
  justifyContent: 'center',
};

export default BlogsPage;