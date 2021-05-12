import { GalleryItem } from "../types";

const api: string = process.env.REACT_APP_API_URL as string;
const emailApi: string = process.env.REACT_APP_EMAIL_API_URL as string;

export const uploadImage = async(imageString: string | ArrayBuffer | null, metaData: string): Promise<GalleryItem | undefined> => {
  try {
   const res = await fetch(api, {
      method: 'POST',
      body: JSON.stringify({
        data: imageString,
        metadata: metaData
      }),
      headers: {'Content-type': 'application/json'}
    });

    const { public_id, metadata } =  await res.json();
    return ({publicId: public_id, metadata})

  } catch (error) {
    console.log(error);
  }

}

export const uploadEvent = async(imageString: string | ArrayBuffer | null, metaData: string): Promise<GalleryItem | undefined> => {
  try {
    const res = await fetch(`${api}/events`, { 
      method: 'POST',
      body: JSON.stringify({
        data: imageString,
        metadata: metaData
      }),
      headers: {'Content-type': 'application/json'}
    });

    const { public_id, metadata } =  await res.json();
    return ({publicId: public_id, metadata})
    

  } catch (error) {
    console.log(error);
  }

}

export const updateImage = async(publicId: string, metadata: string) => {
  try {
    await fetch(`${api}/update`, {
      method: 'POST',
      body: JSON.stringify({
        publicId,
        metadata
      }),
      headers: {'Content-type': 'application/json'}
    });

  } catch (error) {
    console.log(error);
  }
}

export const deleteImage = async(publicId: string): Promise<any> => {
  try {
    const res =  await fetch(api, {
      method: 'DELETE',
      body: JSON.stringify({publicId: publicId}),
      headers: {'Content-type': 'application/json'}
    });

    return await res.json();
     
  } catch (error) {
      console.log(error);
  }
}

export const getImages = async() => {
  try {
    const res = await fetch(api);
    return await res.json();

  } catch (error) {
      console.error(error);
  }
}

export const sendMessage = async(message) => {
  const res = await fetch(emailApi, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(message)
  });

  const json = await res.json();
  if(!res.ok) throw json;

  return json;
}

// export const fetchImage = async(publicId: string) => {
//   try {
//     const res = await fetch(`${api}/image/${publicId}`);
//     return await res.json();

//   } catch (error) {
//       console.error(error);
//   }
// }
