const APIURL = 'https://api.github.com/users/'

const main =document.getElementById('main')
const form =document.getElementById('form')
const search =document.getElementById('search')
// getuser('bradtraversy')
async function getuser(username){
//    const res = await axios(APIURL + username)
    // .then(res => res.json())
    // .then(res => console.log(res))
    // .catch(err =>console.log(err))
    // console.log(res.data)

    try{
        const {data} = await axios(APIURL +username)
        console.log(data);
        createusercard(data)
        getRespos(username)
    }
    catch(err){
        console.error(err)

        if(err.response.status == 404){
            createerrorcard('no profile with this username')
        }
    }
}

async function getRespos(username) {
    try{
        const {data} = await axios(APIURL +username +'/repos?sort=created')
        console.log(data);
        addReposToCard(data)
    }
    catch(err){
        console.error(err)

        if(err.response.status == 404){
            createerrorcard('problem fetching repos')
        }
    }
}

function createusercard(user){
    const cardHTML = `
    <div class="card">
            <div>
                <img src=${user.avatar_url}" alt="${user.name}" class="avatar">
                 </div>
           <div class="user-info">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>
           
        <ul>
            <li>${user.followers} <strong>followers</strong></li>
            <li>${user.following}<strong>following</strong></li>
            <li>${user.public_repos}<strong>Repos</strong></li>
        </ul>
        
        <div id="repos"> </div>
    </div>
</div>
`
main.innerHTML = cardHTML
    
}

function addReposToCard(repos){
    const reposEL = document.getElementById('repos')


    repos
    .slice(0,10)
    .forEach(repo =>{
        const repoEL = document.createElement('a')
        repoEL.classList.add('repo')
        repoEL.href = repo.html_url
        repoEL.target = '_blank'
        repoEL.innerText = repo.name

        
        reposEL.appendChild(repoEL)
    })
}
function createerrorcard(msg){
    const cardHTML=`
    <div class="card">
    <h1>${msg}</h1>
    </div>
    `
    main.innerHTML = cardHTML
}
form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const user =search.value

    if(user){
        getuser(user)

        search.value =''
    }

})