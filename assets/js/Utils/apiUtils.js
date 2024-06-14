export const myFetchData = async (endpoint) => {
  let response = "";

  try {
    response = await fetch(endpoint, {
      method: 'GET', // or 'POST' if you are sending data
      headers: {
        'Content-Type': 'application/json',
        // You can add other headers here if needed
      },
    });
    console.log(response);
    if (response.ok) {
      const json = await response.json();
      return json;
    }
  } catch (error) {
    console.error(`Error in fetch: ${error}`);
  }
};