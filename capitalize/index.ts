const capitalize = (array: string[]): string[]=>{
    return array.map((value: string)=>{
        
        return value.charAt(0).toUpperCase() + value.slice(1).toLocaleLowerCase()
    })
    
}


const arryaTocheck = ["here", "there", "Now", "thEn"]
console.log(`${capitalize(arryaTocheck)}`)


export {}