export async function isResponseOk(response) {
  if (response.status) {
    const responseJson = await response.json();

    console.log(responseJson);
    return responseJson;
  }
}
