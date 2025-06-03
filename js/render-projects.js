function createProjectCard(project) {
    // Create technology badges if technologies are specified
    const techBadges = project.technologies ? 
        project.technologies.map(tech => `<span class="badge bg-secondary me-1 mb-2">${tech}</span>`).join('') : '';
    
    // Determine primary action button based on project type
    let primaryButton = '';
    if (project.playLink) {
        primaryButton = `<a href="${project.playLink}" target="_blank" class="btn btn-primary me-2 mb-2">Play Now</a>`;
    } else if (project.betaLink) {
        primaryButton = `<a href="${project.betaLink}" class="btn btn-primary me-2 mb-2">Learn More</a>`;
    }
    
    // GitHub button
    const githubButton = project.githubLink ? 
        `<a href="${project.githubLink}" target="_blank" class="btn btn-outline-primary me-2 mb-2"><i class="fab fa-github"></i> GitHub</a>` : '';
    
    return `
    <div class="col-md-6 mb-4">
        <div class="card bg-dark text-light h-100">
            <img src="${project.image}" class="card-img-top" alt="${project.title}" style="height: 200px; object-fit: cover;">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title text-primary">${project.title}</h5>
                <p class="card-text flex-grow-1">${project.description}</p>
                ${techBadges ? `<div class="mb-3">${techBadges}</div>` : ''}
                <div class="mt-auto">
                    ${primaryButton}
                    ${githubButton}
                </div>
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
