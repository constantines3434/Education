describe("power_one", function()
{
        var a = 2;
        var b = 2;
        var c = 2;
        var x = 3;

        var expected_a = a ** x;
        var expected_b = b ** x;
        var expected_c = c ** x;
    it("возводит в x-ю степень без цикла " + x, function() {
     assert(power_one(3, 2, 2, 3),  [8, 8, 8]);
    });
});

describe("power_sec", function()
{
    function makeTest(i)
    { 
        var a = 3 + i;
        var b = 4 + i;
        var c = 5 + i;
        var x = 3;

        var expected_a = a ** x;
        var expected_b = b ** x;
        var expected_c = c ** x;
    it("возводит в x-ю степень с циклом " + x, function() {
     assert(power_sec(a, b, c, x), [expected_a, expected_b, expected_c]);
    });
}

for(var i = 0; i <= 5; i++)
{
    makeTest(i);
}

});