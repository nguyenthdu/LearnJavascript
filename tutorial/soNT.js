ktSoNT =(n)=>{
    if(n==2 || n ==3){
        console.log(`${n} la so nguyen to`)
    }else{
        for(let i = 2; i<n-1; i++){
            if(n%i==0){
                console.log(` ${n} khong phai la so nguyen to`)
                break
            }else{
                console.log(`${n} la so nguyen to`)
                break
            }
        }
    }
}
ktSoNT(17)