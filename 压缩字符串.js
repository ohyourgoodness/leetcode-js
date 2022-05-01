function test(){
  let str = "aaabbbccd";
  let token = str.charAt(0);
  let count = 0;
  let result = '';

  for(let i = 1; i< str.length; i++)
  	{
       if( token == str.charAt(i)){
       	count++
       }else{
        result += count.toString();
        result += token;
        token = str.charAt(i);
        count = 0;
       };
  	}
	return result;
}

test();


//"2a2b1c"
