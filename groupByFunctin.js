const groupBy = (arr, key) =>
    arr.reduce((acc, obj) => {
      const groupKey = obj[key];
      acc[groupKey] = acc[groupKey] || [];
      acc[groupKey].push(obj);
      return acc;
    }, {});
  

  groupBy([
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 30 }
  ], 'age');
  
  // ➞ {
  //   20: [{name: 'Alice',...}, {name: 'Bob',...}],
  //   30: [{name: 'Charlie',...}]
  // }
  