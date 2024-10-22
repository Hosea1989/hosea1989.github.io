function createProjectCard(project) {
    return `
    <div class="col-md-6 mb-4">
        <div class="card bg-dark text-light h-100">
            <img src="${project.image}" class="card-img-top" alt="${project.title}">
            <div class="card-body">
                <h5 class="card-title text-primary">${project.title}</h5>
                <p class="card-text">${project.description}</p>
                <a href="${project.playLink}" target="_blank" class="btn btn-primary">Play Now</a>
                ${project.githubLink ? `<a href="${project.githubLink}" target="_blank" class="btn btn-outline-primary">View on GitHub</a>` : ''}
            </div>
        </div>
    </div>
    `;
}

function renderProjects(containerId, projectList, onlyFeatured = false) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const projectsToRender = onlyFeatured ? projectList.filter(p => p.featured) : projectList;
    const projectCards = projectsToRender.map(createProjectCard).join('');
    container.innerHTML = projectCards;
}

// Load projects on index page
if (document.getElementById('featured-projects-container')) {
    renderProjects('featured-projects-container', projects, true);
}

// Load projects on projects page
if (document.getElementById('all-projects-container')) {
    renderProjects('all-projects-container', projects);
}
