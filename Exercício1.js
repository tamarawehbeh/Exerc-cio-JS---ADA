const hotifrutis = ['banana', 'agrião', 'maçã', 'abacaxi', 'melancia', 'laranja', 'limão','cenoura', 'melancia', 'batata', 'brócolis', 'abóbora', 'tomate', 'alho-poró', 'alface', 'espinafre', 'rúcula', 'couve', 'acelga', 'maçã', 'batata' ];

function contador(hotifrutis){
    let fruta = ["banana", "maçã", "abacaxi", "melancia", "laranja", "limão"];
    let legume = ["cenoura", "batata", "brócolis", "abóbora", "tomate", "alho-poró"];
    let verdura = ["alface", "espinafre", "rúcula", "couve", "agrião", "acelga"];
    let qtdf = 0
    let qtdl = 0
    let qtdv = 0
    
    for(let i = 0; i < fruta.length; i++) {
        if(hotifrutis.includes(fruta[i])){
            qtdf++
        } 
    } 
    for (let i = 0; i < legume.length; i++) {
        if(hotifrutis.includes(legume[i])){
            qtdl++
        }
        
    }
    for (let i = 0; i < verdura.length; i++) {
        if(hotifrutis.includes(verdura[i])){
            qtdv++
        }
        
    } 
    return `Tem ${qtdf} frutas, ${qtdl} legumes e ${qtdv} verduras.`
}

console.log(contador(hotifrutis))