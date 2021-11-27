import { camelCaseToDash } from "core"

const convertObjectToCssProperties = (obj, key) => {
    return Object.entries(obj[key])
    .map(([propKey, propValue]) => {
        return(
        `${camelCaseToDash(propKey)}: ${propValue};`
    )})
}

export default convertObjectToCssProperties