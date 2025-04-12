const updateIn = (obj, path, value) => {
    if (path.length === 0) return value;
    const [key, ...rest] = path;
    return {
      ...obj,
      [key]: updateIn(obj[key] || {}, rest, value),
    };
  };
  

  const user = { name: "Alice", address: { city: "Paris", zip: 12345 } };
  const updated = updateIn(user, ['address', 'zip'], 54321);
  
  console.log(updated); 

  