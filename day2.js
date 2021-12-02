Task 2: 

const input =  ["up 6", "down 7", "forward 5", "forward 5", "down 9", "down 5", "up 4", "forward 1", "forward 7", "down 8"]

const formattedData = input.map(e => {
    const [direction, value] = e.split(' ');
    return { direction, value: Number(value) }
})

const result = formattedData.reduce(({length, depth, aim}, {direction, value}) => ({
    length: direction === 'forward' ? length + value : length,
    depth: direction === 'forward' ? depth + value * aim : depth,
    aim: direction === 'forward' ? aim : direction === 'down' ? aim + value : aim - value
}), { length: 0, depth: 0, aim: 0 })

return result.length * result.depth
