const display_box = document.getElementById('cal_display');
const test = '';
display_box.innerHTML = test;


localStorage.setItem('data' , display_box.innerHTML);
display_box.innerHTML = localStorage.getItem('data');

const num_one = document.getElementById('one');

num_one.addEventListener('click',function(event){
    event.preventDefault();
    const num = "1" ; 
    display_box.innerHTML += num;
});

const num_two = document.getElementById("two");

num_two.addEventListener('click', function(event){
    event.preventDefault();
    const num = "2";
    display_box.innerHTML += num;
});

const num_three = document.getElementById("three");

num_three.addEventListener('click', function(event){
    event.preventDefault();
    const num = "3";
    display_box.innerHTML += num;
});

const num_four = document.getElementById("four");

num_four.addEventListener('click', function(event){
    event.preventDefault();
    const num = "4";
    display_box.innerHTML += num;
});

const num_five = document.getElementById("five");

num_five.addEventListener('click', function(event){
    event.preventDefault();
    const num = "5";
    display_box.innerHTML += num;
});

const num_six = document.getElementById("six");

num_six.addEventListener('click', function(event){
    event.preventDefault();
    const num = "6";
    display_box.innerHTML += num;
});

const num_seven = document.getElementById("seven");

num_seven.addEventListener('click', function(event){
    event.preventDefault();
    const num = "7";
    display_box.innerHTML += num;
});

const num_eight = document.getElementById("eight");

num_eight.addEventListener('click', function(event){
    event.preventDefault();
    const num = "8";
    display_box.innerHTML += num;
});

const num_nine = document.getElementById("nine");

num_nine.addEventListener('click', function(event){
    event.preventDefault();
    const num = "9";
    display_box.innerHTML += num;
});


const num_zero = document.getElementById("zero");

num_zero.addEventListener('click', function(event){
    event.preventDefault();
    const num = "0";
    display_box.innerHTML += num;
});

const num_decimal = document.getElementById("decimal");

num_decimal.addEventListener('click', function(event){
    event.preventDefault();
    const num = ".";
    display_box.innerHTML += num;
});

const num_reset = document.getElementById("reset");

num_reset.addEventListener('click', function(event){
    event.preventDefault();
    const num = "";
    display_box.innerHTML = num;
});


const num_delete = document.getElementById("delete");
num_delete.addEventListener('click', function(event){
    event.preventDefault();
    const content = display_box.innerHTML;
    const new_content = content.slice(0,-1);
    display_box.innerHTML = new_content;
})

const num_add = document.getElementById("add");
num_add.addEventListener('click', function(event){
    event.preventDefault();
    display_box.innerHTML += '+';
})

const num_sub = document.getElementById('subtract');
num_sub.addEventListener('click', function(event){
    event.preventDefault();
    display_box.innerHTML += '-';

})
const num_mul = document.getElementById('multiply');
num_mul.addEventListener('click', function(event){
    event.preventDefault();
    display_box.innerHTML += '*';
})
const num_div = document.getElementById('divide');
num_div.addEventListener('click', function(event){
    event.preventDefault();
    display_box.innerHTML += '/';
})

const num_equal = document.getElementById("equal");
num_equal.addEventListener('click',function(){
    let data = display_box.innerHTML;
    let arr = [];
    let temp_num = "";
    for(let i = 0; i<data.length; i++)
    {
        if(data[i] == '+' || data[i] == '-' || data[i] == '*' || data[i] == '/')
        {
            arr.push(Number(temp_num));
            temp_num = "";
            arr.push(data[i]);
            continue;
        }
        temp_num += data[i];
    }
    arr.push(Number(temp_num));
    for(let i =0; i<arr.length; i++)
    {
        if(arr[i] == '/')
        {
            let sol = arr[i-1] / arr[i+1];
            arr[i-1] = 0;
            arr[i] = '+';
            arr[i+1] = sol;
        }
    }
    console.log(arr);
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] == '*')
        {
            let sol = arr[i-1]*arr[i+1];
            arr[i-1] = 0;
            arr[i] = '+';
            arr[i+1] = sol;
        }
    }
    console.log(arr);
    for(let i =0; i<arr.length; i++)
    {
        if(arr[i] == '-')
        {
            if(arr[i+1] == 0) 
            {
                if(i+2 < arr.length)
                {
                    arr[i+2] = '-';
                }
                continue;
            }
            arr[i+1] *= (-1);
        }
    }
    console.log(arr);
    let ans = 0;

    for(let i =0; i<arr.length; i++)
    {
        if(arr[i] ==  '*' || arr[i] == '/' || arr[i] == '+' || arr[i] == '-')
        {
            continue;
        }
        ans += arr[i];
    }
    
    // console.log(arr);
    // console.log(ans);
    display_box.innerHTML = ans;
    
})



