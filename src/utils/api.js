const ENDPOINT = "http://localhost:3001/tasks";

export async function fetchTasks() {
    console.log("fetching..");
    try {
        let response = await fetch(ENDPOINT, {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        });
        let data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
    }
}

