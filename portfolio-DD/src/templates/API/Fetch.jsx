

// Check input and give correct fetch link
function GetFetchLink(information) {
	if (information === 'user') {
		return fetch("https://api.github.com/users/davidsd29");
	} else {
		return fetch("https://api.github.com/users/davidsd29/repos");
	}
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

export default async function ReplanishData(infoType) {
	const data = await GetData(GetFetchLink(infoType));
    return await data;
}
