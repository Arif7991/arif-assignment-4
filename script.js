const jobs = [
  {
    id: 1,
    company: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$70,000 - $85,000",
    description: "Build scalable cross-platform mobile applications.",
    status: "all"
  },
  {
    id: 2,
    company: "WebFlow Agency",
    position: "Frontend Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$60,000 - $75,000",
    description: "Develop responsive web interfaces using modern tools.",
    status: "all"
  },
  {
    id: 3,
    company: "DataViz Solutions",
    position: "Data Analyst",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$80,000 - $95,000",
    description: "Analyze and visualize business data effectively.",
    status: "all"
  },
  {
    id: 4,
    company: "CloudFirst Inc",
    position: "Backend Developer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$90,000 - $110,000",
    description: "Build and maintain scalable backend systems.",
    status: "all"
  },
  {
    id: 5,
    company: "DesignPro Studio",
    position: "UI/UX Designer",
    location: "Remote",
    type: "Contract",
    salary: "$50,000 - $65,000",
    description: "Design modern and user-friendly interfaces.",
    status: "all"
  },
  {
    id: 6,
    company: "CyberTech",
    position: "Security Engineer",
    location: "New York, NY",
    type: "Full-time",
    salary: "$100,000 - $120,000",
    description: "Ensure system security and prevent cyber threats.",
    status: "all"
  },
  {
    id: 7,
    company: "AI Labs",
    position: "Machine Learning Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110,000 - $130,000",
    description: "Develop intelligent machine learning models.",
    status: "all"
  },
  {
    id: 8,
    company: "Startup Hub",
    position: "Full Stack Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$95,000 - $115,000",
    description: "Work on both frontend and backend technologies.",
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

  sectionCount.innerText = filteredJobs.length + " Jobs";

  if (filteredJobs.length === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }

  filteredJobs.forEach(job => {

    let statusBadge = "";

    if (job.status === "interview") {
      statusBadge = `<span class="badge badge-success mb-2">Interview</span>`;
    } else if (job.status === "rejected") {
      statusBadge = `<span class="badge badge-error mb-2">Rejected</span>`;
    }

    const div = document.createElement("div");
    div.className = "card bg-base-100 shadow p-4";

    div.innerHTML = `
      <div class="flex justify-between">
        <div>
          <h3 class="font-bold text-lg">${job.company}</h3>
          <p class="font-semibold">${job.position}</p>
          <p class="text-sm text-gray-500">${job.location} • ${job.type} • ${job.salary}</p>
          
          ${statusBadge}

          <p class="mt-2">${job.description}</p>
        </div>

        <button onclick="deleteJob(${job.id})" 
        class="btn btn-sm btn-circle btn-error">✕</button>
      </div>

      <div class="mt-4 flex gap-2">
        <button onclick="setStatus(${job.id}, 'interview')" 
        class="btn btn-sm ${job.status === 'interview' ? 'btn-success' : 'btn-outline btn-success'}">
          Interview
        </button>

        <button onclick="setStatus(${job.id}, 'rejected')" 
        class="btn btn-sm ${job.status === 'rejected' ? 'btn-error' : 'btn-outline btn-error'}">
          Rejected
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