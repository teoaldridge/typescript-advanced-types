//OPTIONAL CHAINING
//Optional chaining makes it possible for TS to check if something exists
// before proceeding to the next step and checking a type or if something else exists. 

const fetchedUserData = {
    id: 'u1',
    name: 'Phil',
    job: { title: 'CEO', description: 'My own company'}
};


//here we tell TS to check if fetchedUserData exists, 
//and if so to check if it contains a job property (is it valid data or is it invalid, like null),
//and if so to console.log the job title. 
console.log(fetchedUserData?.job?.title);