const username = "olista94";
const allowedRepos = ["StudySwap", "PasswordGenerator", "UVigoRes", "Form_TMDb", "InsertCoin", "TopPadel", "To-Do-List"];

fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
  .then(res => res.json())
  .then(repos => {
    const container = document.getElementById("project-list");
    
    const filtered = repos.filter(repo => 
      !repo.fork &&
      !repo.private &&
      allowedRepos.includes(repo.name)
    );

    filtered.forEach(repo => {
      const col = document.createElement("div");
      col.className = "col-md-4";
      col.innerHTML = `
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${repo.name}</h5>
            <p class="card-text">${repo.description || "Sin descripción."}</p>
          </div>
          <div class="card-footer text-center">
            <a href="${repo.html_url}" target="_blank" class="btn btn-outline-primary btn-sm">Ver en GitHub</a>
          </div>
        </div>`;
      container.appendChild(col);
    });
  });
