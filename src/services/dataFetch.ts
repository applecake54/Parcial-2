export const getCatFact = async () => {
    try{
    const catFact = fetch(`https://catfact.ninja/fact`).then(res => res.json());
    return catFact;
    } catch (error){
        console.log(error)
    }
}

export const getCatImg = async () => {
    try{
    const catimg = fetch("https://cataas.com/#/").then(res => res.json());
    return catimg;
    } catch (error){
        console.log(error)
    }
}