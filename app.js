async function getDataFromAPI() {
    const apiResponse = await fetch ("https://jsonplaceholder.typicode.com/todos");
    const json = await apiResponse.json();
    console.log(json);
}

getDataFromAPI();


async function getDataFromGitHub() {
    const GitHubData = await fetch ("https://api.github.com/repos/fzaidi96/spaceYtask");
    const json = await GitHubData.json();
    return json;
}
getDataFromGitHub();

async function displayStargazerCount() {
    const jsonifieddata = await getDataFromGitHub();
    const p = document.createElement("p");
    p.textContent = jsonifieddata.stargazer_count;
    document.body.appendChild(p);
    }

displayStargazerCount();

// something is not working :( get help on this


