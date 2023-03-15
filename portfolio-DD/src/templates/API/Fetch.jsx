// Check input and give correct fetch link
function GetFetchLink(information) {
	if (information === 'user') {
		return fetch("https://api.github.com/users/davidsd29");
	} else {
		return fetch("https://api.github.com/users/davidsd29/repos");
	}
}

async function GetRepo(repo, owner) {
    try {
        fetch(`https://raw.githubusercontent.com/${owner}/${repo}/main/README.md`)
            .then(response => response.text())
            .then(result => {
                document.querySelector('#readMe article').innerHTML = markdownParser(result)
            });
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
        .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>"); // link
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
        if (repo.id == id) GetRepo(repo.name, user.login);
    });
}



export {
    ReplanishData,
    GetSelectedGitRepo
}
