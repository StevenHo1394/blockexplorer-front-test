const dashToCamelCase = (input) => { 
    return input.toLowerCase().replace(/-(.)/g, function(match, group1) {
        return group1.toUpperCase();
    });
};

export default dashToCamelCase