const ENDPOINT = "http://localhost:3001/";

export async function fetchTasks() {
    console.log("fetching..");
    try {
        let response = await fetch(ENDPOINT + "tasks", {
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

export async function completeTask(id) {
    console.log("posting complete task..");
    try {
        let response = await fetch(ENDPOINT + "complete", {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ id }),
        });
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}

