const api: string = process.env.REACT_APP_API_URL as string;

export const uploadImage = async(imageString: string | ArrayBuffer | null, metaData: string): Promise<void> => {
  try {
    await fetch(api, {
      method: 'POST',
      body: JSON.stringify({
        data: imageString,
        metadata: metaData
      }),
      headers: {'Content-type': 'application/json'}
    });
    

  } catch (error) {
    console.log(error);
  }

}

export const uploadEvent = async(imageString: string | ArrayBuffer | null, metaData: string): Promise<void> => {
  try {
    await fetch(`${api}/events`, { 
      method: 'POST',
      body: JSON.stringify({
        data: imageString,
        metadata: metaData
      }),
      headers: {'Content-type': 'application/json'}
    });
    

  } catch (error) {
    console.log(error);
  }

}

export const fetchImages = async() => {
  try {
    const res = await fetch(api);
    return await res.json();

  } catch (error) {
      console.error(error);
  }
}

export const fetchEvents = async() => {
  try {
    const res = await fetch(`${api}/events`);
    return await res.json();

  } catch (error) {
      console.error(error);
  }
}
