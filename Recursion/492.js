// =========================>  Construct the Rectangle <========================

var constructRectangle = function (area) {
    const findDimensions = (current) => {
        if (Number.isInteger(area / current)) {
            return [area / current, current];
        } else {
            return findDimensions(current - 1);
        }
    };

    return findDimensions(Math.floor(Math.sqrt(area)));
};
const area = 4;
const result = constructRectangle(area)
console.log(result);