0，1，1,2,3,5...
计算第N位的数是多少

递归
var fib = function(N) {
    if(N == 0) return 0
    else if(N == 1) return 1
    else return fib(N-1) + fib(N-2)
};


function iterFib(n) {
    var last = 1;
    var nextLast = 1;
    var result = 1;
    for (var i = 2; i < n; ++i) {
        result = last + nextLast;
        nextLast = last;
        last = result;
    }
    return result;
}



动态规划
var fib = function(N) {
    if(N === 0) return 0
    var val = [];
    for (var i = 0; i <= N; ++i) {
        val[i] = 0;
    } //长度 = 斐波那契数列要算的值
    if (N == 1 || N == 2) {
        return 1; //边界值
    } else {
        val[1] = 1;
        val[2] = 2;
        for (var i = 3; i <= N; ++i) {
            val[i] = val[i - 1] + val[i - 2];
        } // 将每一个数字都算出来，最后即可解决，不用每一个数都想下递归计算
        return val[N - 1];
    }
};
