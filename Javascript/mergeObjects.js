const arr = [
    {id: 1, h1: 'Daily tests'},
    {id: 2, h1: 'Details'},
    {id: 1, h2: 'Daily classes'},
    {id: 3, h2: 'Results'},
    {id: 2, h3: 'Admissions'},
    {id: 1, h4: 'Students'},
    {id: 2, h5: 'Alumni'},
    {id: 3, h3: 'Appreciations'},
    {id: 1, h5: 'Tiny Tots'},
    {id: 1, h6: 'Extras'},
 ];
 const clubArray = (arr) => {
    return arr.reduce((acc, val, ind) => {
       const index = acc.findIndex(el => el.id === val.id);
       if(index !== -1){
          const key = Object.keys(val)[1];
          acc[index][key] = val[key];
       } else {
          acc.push(val);
       };
       return acc;
    }, []);
 };
 console.log(clubArray(arr));