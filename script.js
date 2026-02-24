const jobs = [
  {
    id: 1,
    company: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    status: "all"
  },
  {
    id: 2,
    company: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
    status: "all"
  },
  {
    id: 3,
    company: "DataViz Solutions",
    position: "Data Analyst",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$80,000 - $95,000",
    description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking",
    status: "all"
  },
  {
    id: 4,
    company: "CloudFirst Inc",
    position: "Backend Developer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$190,000 - $140,000",
    description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
    status: "all"
  },
  {
    id: 5,
    company: "Innovation Labs",
    position: "UI/UX Designer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$150,000 - $110,000",
    description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
    status: "all"
  },
  {
    id: 6,
    company: "MegaCorp Solutions",
    position: "JavaScript Developer",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130,000 - $170,000",
    description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
    status: "all"
  },
  {
    id: 7,
    company: "StartupXYZ",
    position: "Full Stack Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    description: "Develop intelligent machine learning models.",
    status: "all"
  },
  {
    id: 8,
    company: "TechCorp Industries",
    position: "Senior Frontend Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
    status: "all"
  }
];

let currentTab = "all";

const jobContainer = document.getElementById("jobContainer");
const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const sectionCount = document.getElementById("sectionCount");
const emptyState = document.getElementById("emptyState");

function renderJobs() {
  jobContainer.innerHTML = "";

  const filteredJobs = jobs.filter(job =>
    currentTab === "all" ? true : job.status === currentTab
  );

  const totalJobs = jobs.length;

if (currentTab === "all") {
  sectionCount.innerText = totalJobs + " Jobs";
} else {
  sectionCount.innerText = filteredJobs.length + " of " + totalJobs + " Jobs";
}

  if (filteredJobs.length === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }

  filteredJobs.forEach(job => {

    let statusBadge = "";

    if (job.status === "interview") {
      statusBadge = `<span class="badge badge-outline badge-success mb-2 font-semibold">INTERWIEWED</span>`;
    } else if (job.status === "rejected") {
      statusBadge = `<span class="badge badge-outline badge-error mb-2 text-semibold">REJECTED</span>`;
    }

    const div = document.createElement("div");
    div.className = "card card-2 bg-base-100 shadow px-4 py-8";

    div.innerHTML = `
      <div class="flex justify-between">
        <div class="">
          <h3 class="font-bold text-lg mb-lg">${job.company}</h3>
          <p class="text-sm text-gray-500">${job.position}</p>
          <p class="text-sm text-gray-500 my-4">${job.location} • ${job.type} • ${job.salary}</p>
          
          ${statusBadge}

          <p class="mt-2 text-gray-500">${job.description}</p>
        </div>

        <button onclick="deleteJob(${job.id})" 
        class="btn btn-sm btn-circle btn-error"><i class="fa fa-trash text-white" aria-hidden="true"></i></button>
      </div>

      <div class="mt-4 flex gap-2">
        <button onclick="setStatus(${job.id}, 'interview')" 
        class="btn btn-white btn-sm ${job.status === 'interview' ? 'btn-success' : 'btn-outline btn-success'}">
          INTERWIEW
        </button>

        <button onclick="setStatus(${job.id}, 'rejected')" 
        class="btn btn-sm ${job.status === 'rejected' ? 'btn-error' : 'btn-outline btn-error'}">
          REJECTED
        </button>
      </div>
    `;

    jobContainer.appendChild(div);
  });

  updateCounts();
}

function setStatus(id, status) {
  const job = jobs.find(j => j.id === id);
  job.status = status;
  renderJobs();
}

function deleteJob(id) {
  const index = jobs.findIndex(j => j.id === id);
  jobs.splice(index, 1);
  renderJobs();
}

function updateCounts() {
  totalCount.innerText = jobs.length;
  interviewCount.innerText = jobs.filter(j => j.status === "interview").length;
  rejectedCount.innerText = jobs.filter(j => j.status === "rejected").length;
}

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("tab-active"));
    tab.classList.add("tab-active");
    currentTab = tab.dataset.tab;
    renderJobs();
  });
});

renderJobs();