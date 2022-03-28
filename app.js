/* array of object
const fruits = [{name: 'pine apple'},{name:mango},{name: papaya}]

const election =['razzak', 'alomgir','jayed', jayed', 'nespun','jayed']
const election2={
    razzak: 1,
    alomgir:1,
    jashim:1,
    jayed:1 
}*/

// daynamic vabe array declare korar system 
let db = {}

const addToDb = (item) => {
    //thre ways to add ap roperty to an object

    // db.name=1 jokon amra object er props name ta jani

    // db['name']=1; jokon exactly jani props er name ta

    // db[item]=1 jokon ata dynamic perameter take akta variable bola jai bariable er name ta same thakbe just 'value' ta change hobe.



    /* localStorage এ রাখার ৩ তা শর্ত অনুযায়ী page reload দেয়ার পর আগের সব   data delete হয়ে গেলে localstorage db এর ভিতরে আগের সেই information গুলাকে read করতে json.parse করে নিতে হবে। */
    const storedTracker = localStorage.getItem('checka-tracker');
    if (storedTracker) {
        db = JSON.parse(storedTracker);
    }

    //শর্তঃ জদি db নামক অবজেক্ট এর ভিতর item নামক মান থাকে তবে আগে যে মান আছে তার সাথে ১ যোগ হবে আর যদি না থাকে db অবজেক্ট এর মান ১ হবে।
    if (item in db) {
        db[item] = db[item] + 1;
    }
    else {
        db[item] = 1;
    }
    localStorage.setItem('checka-tracker', JSON.stringify(db));
}

/* আমরা আমাদের user experince ভালো করার জন্য data গুলো কে localStorage এ save করে রাখতে পারি save করার পর সর্ত হল ৩ ta
১।localStorage('key',value)  দিতে হবে
২।localStorge primitive tag {object},[array] হয় তবে json.strigify করে রাখতে হবে
৩।আবার যদি আনতে হয় json.parse করে আনতে হবে
*/

const removeItem = item => {
    const storedTracker = localStorage.getItem('cheka-tracker');
    if (storedTracker) {
        const storedObject = JSON.parse(storedTracker);
        delete storedObject[item];
        localStorage.setItem('checka-tracker', JSON.stringify(storedObject));
    }
}

/* যখন আমরা localStorarge থেকে কোন item get করতে চাই তখন localStorge.getItem করে থেকে নিয়ে আসব তারপর একটা ভারিয়েবল এ রাখব শর্ত হবে ভেরিয়েবল টা যদি সত্যি হয় তাকে  নতুন আরেকটা ভেরিয়েবল রখে read করব তারপর নতুন ভেরিয়েবল টাকে delete দিব তারপর আপডেট করে localStorage.setItem(ager key) নতুন ভেরিয়েবল কে json.stringify kore rakbo।*/