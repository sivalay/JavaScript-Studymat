const APIURL = "https://api.github.com/users/"

const main = document.querySelector('.main')
const form = document.querySelector('#form')
const search = document.querySelector('#search')

async function getUser(username){
    const resp = await fetch(APIURL + username)
    const respData = await resp.json()

    createUser(respData)
    getRepos(username)
}

async function getRepos(username){
    const resp = await fetch(APIURL + username + "/repos")
    const respData = await resp.json()

    addReposToCart(respData)
}

function createUser(user){
    const card = document.createElement('div')
    card.classList.add('card')

    const cardHTML = `
    <div class="card">
        <div class="image">
            <img src="${user.avatar_url}" alt="${user.name}">
        </div>
        <div class="bio">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>
            <ul class="inbio">
                <li><strong>Following : </strong>${user.followers}</li>
                <li><strong>Followers : </strong>${user.following}</li>
                <li><strong>Repos : </strong>${user.public_repos}</li>
            </ul>
            <ul class="repos" id="repos"></ul>
        </div>
        
    </div>
    `    
    main.innerHTML = cardHTML
}

function addReposToCart(repos){
    const reposEl = document.querySelector('#repos')

    repos.sort((a, b) => b.stargazers_count - a.stargazers_count)
         .slice(0, 10)
         .forEach(repo => {
        const repoEl = document.createElement('a')

        repoEl.classList.add('repo')
        repoEl.href = repo.html_url
        repoEl.target = "_blank"
        repoEl.innerHTML = repo.name

        reposEl.appendChild(repoEl)
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = search.value

    if (user){
        getUser(user)
        search.value = ''
    }
})

