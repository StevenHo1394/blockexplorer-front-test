const camelCaseToDash = (input) => {
    console.log('asd')
    return input.replace(/([A-Z])/g, (x)=> "-"+ x.toLowerCase());
} 

export default camelCaseToDash