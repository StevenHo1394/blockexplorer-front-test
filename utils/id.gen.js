import crypto from 'crypto'

const idGen = () => {
    return crypto.randomBytes(20).toString('hex')
}

export default idGen