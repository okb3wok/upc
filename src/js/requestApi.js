export async function requestAPI(url, method='POST', payload) {
  let response = await fetch(url,{
    method: method,
    headers: {},
    body: JSON.stringify(payload)
  });

  if (response.ok) {
    return await response.json();
  }
  else {
    console.log("Ошибка HTTP: " + response.status);
  }

}
