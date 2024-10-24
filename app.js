var averageOfLevels = function(root) {
    const valuesByLevel = []
    dfs(root, 0, valuesByLevel)
    
    const result = []
    for(let i=0; i < valuesByLevel.length; i++){
        const arr = valuesByLevel[i]
        let sum = 0
        for(let j=0; j < arr.length; j++){
            sum = sum + arr[j]
        }
        result.push(sum / arr.length)
    }
    return result
};

function dfs(node, level, valuesByLevel){
    if (!node) return

    if(valuesByLevel[level]){
        arr = valuesByLevel[level]
        arr.push(node.val)
    } else {
        //si no hay nada ahi
        valuesByLevel[level] = [node.val]
    }

    dfs(node.left, level + 1,  valuesByLevel)
    dfs(node.right, level + 1,  valuesByLevel)
}