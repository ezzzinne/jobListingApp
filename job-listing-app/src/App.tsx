import { useState } from 'react'
import './index.css'

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
  role: string;
  requirements: string[];
}

const jobs: Job[] = [
  { id: 1, title: "Frontend Developer", company: "Tech Corp", location: "Remote", salary: "₦400,000", description: " We are looking to hire a Frontend Developer to join our team and help build intuitive and dynamic user interfaces. The ideal candidate is passionate about crafting responsive and visually appealing web applications using modern JavaScript frameworks like React or Vue.js.", role: "Develops and maintains the user interface of websites and web applications.", requirements: ["Proficiency in HTML, CSS, JavaScript, TypeScript", "Understanding of responsive design & UI frameworks", "Version control (Git)"] },
  { id: 2, title: "Backend Engineer", company: "Dev Solutions", location: "Enugu", salary: "₦300,000", description: "We are hiring a Backend Engineer to design and maintain scalable server-side applications. Our team needs a problem-solver who can build robust APIs, manage databases efficiently, and ensure seamless backend operations.", role: "Designs, builds, and maintains the server-side logic of web applications.", requirements: ["Strong knowledge of Node.js, Python, Java, or PHP", "Experience with databases (SQL & NoSQL)", "API development (REST, GraphQL)"] },
  { id: 3, title: "UI/UX Designer", company: "Creative Hub", location: "Lagos", salary: "₦350,000", description: "We are looking for a creative UI/UX Designer to bring fresh, user-centered designs to life. In this role, you’ll be responsible for wireframing, prototyping, and refining intuitive digital experiences.", role: "Creates user-friendly and visually appealing interfaces for websites and apps.", requirements: ["Proficiency in Figma, Adobe XD, Sketch", "Understanding of design principles & user psychology", "Experience in wireframing & prototyping"] },
  { id: 4, title: "Data Analyst", company: "Data Corp", location: "Abuja", salary: "₦450,000", description: "We are seeking a Data Analyst to help transform complex datasets into meaningful insights. If you love working with SQL, Python, and data visualization tools like Tableau or Power BI, and enjoy making data-driven decisions, this is the role for you. Join us and turn raw data into strategic success!", role: "Collects, processes, and analyzes data to provide insights for business decisions.", requirements: ["Expertise in Excel, SQL, and Python (Pandas, NumPy)", "Experience with data visualization tools (Tableau, Power BI)", "Knowledge of statistics and predictive analytics"] },
  { id: 5, title: "Software Engineer", company: "Innovate Ltd", location: "Remote", salary: "₦500,000", description: "We are hiring a Software Engineer to develop high-quality applications that power our business solutions. If you have experience with Java, Python, or C++, and enjoy working on both frontend and backend technologies, we want to hear from you. Come be a part of our dynamic development team!", role: "Develops, tests, and maintains software applications.", requirements: ["Strong programming skills in Java, Python, C++, or JavaScript", "Experience with software development lifecycle (SDLC)", "Knowledge of data structures & algorithms"] },
  { id: 6, title: "Mobile Developer", company: "App World", location: "Port Harcourt", salary: "₦320,000", description: "We are looking for a Mobile Developer to build engaging Android and iOS applications. If you have experience in React Native, Flutter, Swift, or Kotlin, and love crafting intuitive mobile experiences, this is the perfect opportunity for you.", role: "Builds mobile applications for Android and iOS platforms.", requirements: ["Experience with Flutter, React Native, Swift (iOS), or Kotlin (Android)", "Knowledge of mobile UI/UX design", "Understanding of APIs and database integration"] },
  { id: 7, title: "DevOps Engineer", company: "Cloud Solutions", location: "Lagos", salary: "₦600,000", description: "We are hiring a DevOps Engineer to optimize our infrastructure and automate deployments. If you’re experienced with Docker, Kubernetes, AWS, and CI/CD pipelines, and enjoy improving system performance, join our engineering team today!", role: "Manages infrastructure automation, deployment, and CI/CD pipelines.", requirements: ["Experience with Docker, Kubernetes, Jenkins, and Terraform", "Cloud platforms (AWS, GCP, Azure)", "Knowledge of Linux & shell scripting"] },
  { id: 8, title: "Cybersecurity Analyst", company: "SecureNet", location: "Abuja", salary: "₦550,000", description: "We are seeking a Cybersecurity Analyst to safeguard our digital assets and prevent cyber threats. If you have expertise in network security, penetration testing, and risk assessment, and love staying ahead of emerging threats, we’d love to have you on board!", role: "Protects an organization's systems and data from cyber threats.", requirements: ["Strong knowledge of network security, firewalls, and encryption", "Familiarity with SIEM tools, penetration testing", "Certifications like CEH, CISSP, or Security+ are a plus"] },
  { id: 9, title: "QA Tester", company: "Tech Solutions", location: "Kano", salary: "₦280,000", description: "We are looking for a QA Tester to ensure our software meets the highest quality standards. If you have experience with manual and automated testing, Selenium, and bug tracking tools, and enjoy breaking things (for the right reasons!), we want to work with you!", role: "Ensures software functions correctly by identifying bugs and performance issues.", requirements: ["Experience in manual & automated testing", "Knowledge of Selenium, JIRA, and test frameworks", "Understanding of software testing life cycle (STLC)"] },
  { id: 10, title: "Database Administrator", company: "DB Systems", location: "Remote", salary: "₦480,000", description: "We are hiring a Database Administrator to manage, secure, and optimize our database systems. If you have experience with MySQL, PostgreSQL, or MongoDB, and enjoy maintaining high-performance data structures, apply now to be part of our tech team!", role: "Manages and maintains company databases to ensure efficiency and security.", requirements: ["Expertise in SQL, PostgreSQL, MySQL, or MongoDB", "Understanding of database backup, recovery, and security", "Experience with cloud databases (AWS RDS, Azure SQL)"] }
];

const JobCard: React.FC<{ job: Job }> = ({ job }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className='job-card'>
      <h2>{job.title}</h2>
      <p className='company'>{job.company} - {job.location}</p>
      <p><strong>Salary: </strong>{job.salary}</p>
      {showDetails && (
        <div className='details'>
          <p><strong>Description: </strong>{job.description}</p>
          <p><strong>Role: </strong>{job.role}</p>
          <p><strong>Requirements: </strong>
            <ul>
              <li>{job.requirements[0]}</li>
              <li>{job.requirements[1]}</li>
              <li>{job.requirements[2]}</li>
            </ul>
          </p>
        </div>
      )}
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
    </div>
  );
};

const JobList: React.FC = () => {
  return (
    <div className='container'>
      <h1 className='title'>Job Listings</h1>
      {jobs.length > 0 ? (
        <div className='job-list'>
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <p className='no-jobs'>No jobs available at the moment</p>
      )}
    </div>
  );
};

export default JobList;