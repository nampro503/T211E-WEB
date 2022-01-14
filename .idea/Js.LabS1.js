<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script type="text/javascript">


    var r = Math.random();// 1 số ngẫu nhiên từ 0-> 1 (r>0 && r<1)
    r = r*100; // (r>0 && r<100)
    r = parseInt(r); // r>=0 && r<=99
    console.log(r);
    var so=[];
    for(i=1;i<6;){
    a = prompt("Nhap vao lan so " +i+":");
    a = parseInt(a);

    if(so.indexOf(a)==-1){
    i++;
    so.push(a);
}else {
    continue;
}

}
    if(so.indexOf(r)==-1){

    alert("Số trúng giải là "+r+" .Chúc bạn may mắn vào ngày mai");
}else{

    alert("Chúc mừng bạn đã trúng số"+r+" là giải ngày hôm nay");
}
</script>
</body>
</html>