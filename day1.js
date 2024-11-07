//printing numbers from -1 to -5
num=+prompt("enter a number")
for(i=-1;!(i<=-6);i--){
    console.log(i) 
}

// printing numbers from -6 to -1
num=+prompt("enter a number")
for(i=-6;!(i>=0);i++){
    console.log(i) 
}

//sum of even numbers
num=prompt("enter a number")
sum=0
if(num>0){
    for(i=1;i<num.length;i++)
    if(num[i]%2==0){
        sum=sum+Number(num[i])
    }
}
console.log(sum)
//sum of odd numbers
num=prompt("enter a number")
sum=0
if(num>0){
    for(i=0;i<num.length;i++)
    if(!(num[i]%2==0)){
        sum=sum+Number(num[i])
    }
}
console.log(sum)


