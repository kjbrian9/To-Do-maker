
  
function createTask(){
    let name = document.querySelector('.nameInput').value;
    let description = document.querySelector('.descriptionInput').value;
    let date = document.querySelector('.dateInput').value;
        
    if(name==""||name=="null")
    {
        console.log("empty name");
        document.querySelector('.announcement').innerHTML="Enter the name of the task";
        return;
    }

    if(description==""||description=="null")
    {
        console.log("empty description");
        document.querySelector('.announcement').innerHTML = "Enter the description of the task";
        return;
    }
    
    let task = {
        taskName: name,
        taskDescription: description,
        taskDate: date
    }

   
    localStorage.setItem('task' + localStorage.length, JSON.stringify(task));
    console.log(`${name}`);
 


    document.querySelector('.nameInput').value = '';
    document.querySelector('.descriptionInput').value = '';
    document.querySelector('.dateInput').value = '';
    document.querySelector('.announcement').innerHTML = 'Task created';
    document.querySelector('.announcement').getAnimations()[0].play();
}

