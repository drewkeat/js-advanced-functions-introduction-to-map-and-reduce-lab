// Your code here

function mapToNegativize(array) {
    let result = []
    array.forEach(ele => result.push(ele * -1))
    return result
}

function mapToNoChange(array) {
    return array
}

function mapToDouble(array) {
    let result = []
    array.forEach(ele => result.push(ele * 2))
    return result
}

function mapToSquare(array) {
    let result = []
    array.forEach(ele => result.push(ele ** 2))
    return result
}

function reduceToTotal(array, start = 0) {
    array.forEach(ele => start += ele)
    return start
}

function reduceToAllTrue(array) {
    let result = true
    array.forEach(ele => {
        if (!!ele === false) {
            result = false
        }
    })
    return result
}

function reduceToAnyTrue(array) {
    let result = false
    array.forEach(ele => {
        if (!!ele) {
            result = true
        }
    })
    return result
}