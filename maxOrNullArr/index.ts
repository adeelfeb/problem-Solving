const maxOrnullOfArray = (getarray: number[]): number | null=>{
    if( getarray.length === 0){
        return null
    }
    
    return Math.max(...getarray)

}
const arryaTocheck = [2,3,4,4,7]
console.log(`the max value of the array is ${maxOrnullOfArray(arryaTocheck)}`)