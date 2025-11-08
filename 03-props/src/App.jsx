import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Engineer",
      tag1: "Full-time",
      tag2: "Junior Level",
      pay: "$55/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      companyName: "Apple",
      datePosted: "10 days ago",
      post: "UI/UX Designer",
      tag1: "Part-time",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      companyName: "Netflix",
      datePosted: "3 weeks ago",
      post: "React Developer",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$80/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      companyName: "Google",
      datePosted: "1 week ago",
      post: "Data Analyst",
      tag1: "Full-time",
      tag2: "Junior Level",
      pay: "$50/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Cloud Engineer",
      tag1: "Full-time",
      tag2: "Mid Level",
      pay: "$65/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/openai.com",
      companyName: "OpenAI",
      datePosted: "3 weeks ago",
      post: "Machine Learning Engineer",
      tag1: "Contract",
      tag2: "Senior Level",
      pay: "$90/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/nvidia.com",
      companyName: "NVIDIA",
      datePosted: "6 days ago",
      post: "AI Research Intern",
      tag1: "Part-time",
      tag2: "Internship",
      pay: "$40/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/adobe.com",
      companyName: "Adobe",
      datePosted: "2 weeks ago",
      post: "Full Stack Developer",
      tag1: "Full-time",
      tag2: "Mid Level",
      pay: "$70/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/ibm.com",
      companyName: "IBM",
      datePosted: "10 weeks ago",
      post: "DevOps Engineer",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$75/hr",
      location: "Mumbai, India",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map(function (elem) {
        return (
          <Card
            company={elem.companyName}
            pay={elem.pay}
            post={elem.post}
            logo={elem.brandLogo}
            location={elem.location}
            tag1={elem.tag1}
            tag2={elem.tag2}
            datepost={elem.datePosted}
          />
        );
      })}
    </div>
  );
};

export default App;
