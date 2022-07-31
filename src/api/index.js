
const get = (path, body, headers = {})=> {
    const url = `${process.env.API_BASE_URL}/${path}`;
    const options = {
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(body),
    };
    const res = await fetch(url, options);
    const data = await res.json();
    if (res.ok) {
      return data;
    } else {
      throw Error(data);
    }
  };
const post = (path,body, headers={})=>{
    const url = `${process.env.API_BASE_URL}/${path}`;
    const options = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        ...headers,
        },
        body: JSON.stringify(body),
    };
  const res = await fetch(url, options);
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    throw Error(data);
  }
};

export {get,post};
