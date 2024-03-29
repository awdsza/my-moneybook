const GET = async (path, headers = {}, body) => {
  const url = `${path}`;
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
    throw Error(JSON.stringify(data));
  }
};
const POST = async (path, body, headers = {}) => {
  const url = `${path}`;
  const options = {
    method: 'POST',
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
    throw Error(JSON.stringify(data));
  }
};
const PUT = async (path, body, headers = {}) => {
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(body),
  };
  const res = await fetch(path, options);
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    throw Error(JSON.stringify(data));
  }
};
const DELETE = async (path, body, headers = {}) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(body),
  };
  const res = await fetch(path, options);
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    throw Error(JSON.stringify(data));
  }
};

export { GET, POST, PUT, DELETE };
