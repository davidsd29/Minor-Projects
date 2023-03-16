// Check input and give correct fetch link
function GetFetchLink(information) {
	if (information === 'user') {
		return fetch("https://api.github.com/users/davidsd29");
	} else {
		return fetch("https://api.github.com/users/davidsd29/repos");
	}
}

async function GetRepo(repo, owner) {
    let project;
    const link = {
        repo: document.querySelector("#readMe div:first-of-type a"),
        project: document.querySelector("#readMe div:last-of-type a"),
    }
    console.log(repo.homepage)
    if (repo.homepage !== null) {
        project = "Get ready...";
    } else {
        project = "Unfortunately there is no link to this project";
    }

    try {
        fetch(`https://raw.githubusercontent.com/${owner}/${repo.name}/main/README.md`)
            .then(response => response.text())
            .then(result => {
                document.querySelector('#readMe article').innerHTML = markdownParser(result)
            });

            link.project.setAttribute("href", repo.homepage);
            link.project.textContent = project;

            link.repo.setAttribute("href", repo.html_url);
            link.repo.textContent = "Check out my git!";

    } catch (error) {
        console.log(error);
    }
}


const markdownParser = (text) => {
	const toHTML = text
		.replace(/^### (.*$)/gim, '<h3>$1</h3>') // h3 tag
		.replace(/^## (.*$)/gim, '<h2>$1</h2>') // h2 tag
		.replace(/^# (.*$)/gim, '<h1>$1</h1>') // h1 tag
		.replace(/\*\*(.*)\*\*/gim, '<b>$1</b>') // bold text
		.replace(/\*(.*)\*/gim, '<i>$1</i>') // italic text
        .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>"); // l0ink
	return toHTML.trim(); // using trim method to remove whitespace
}


async function GetData(url) {
    try {
        const response = await url;
        if (!response.ok) {
            throw new Error('Info is not available');
        }

        return await response.json();
    } catch (error) {
        console.log(error);
    }
}


async function ReplanishData(infoType) {
	const data = await GetData(GetFetchLink(infoType));
    return await data;
}


async function GetSelectedGitRepo(infoType, id) {
    const user = await GetData(GetFetchLink("user"));
    const repos = await GetData(GetFetchLink(infoType));

    repos.forEach(repo => {
        if (repo.id == id) GetRepo(repo, user.login);
    });
}



export {
    ReplanishData,
    GetSelectedGitRepo
}
