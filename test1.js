document.addEventListener("DOMContentLoaded", ()=>{
    const formC=document.getElementById("addFormContainer");
    formC.innerHTML=
    `<form name="custForm" class="addForm" action='/insert' method='post'>

    <div class="row row-cols-2 ">
        <button type='button' id="addFieldBtn" class="col-2 m-2" onclick="AddFormEntities()"> Add(जोड़े) </button>
        <button type='button' id="removeFieldBtn" class="col-2 m-2" onclick="RemoveFormEntities()"> Remove(हटाएं) </button>
    </div>
    <div class="to_fill_cust_details row"></div>    
    <div>    
        <input class="btn btn-danger m-2 w-10" id="checkboxSubmit" type="submit" value="Submit" />
    </div>
    </form>`;
})

function AddFormEntities()
{
    // event.preventDefault();
    const parent=document.getElementsByClassName('to_fill_cust_details');
    const formcontent=document.createElement('div');
    formcontent.setAttribute('class','row');
    formcontent.innerHTML=`
        <label for="datePicker" class="col-4 m-2 bg-secondary text-light">Item Entry Date(आइटम प्रविष्टि तिथि) </label>
        <input type='date' name='inputDate' class='datePicker col-2' min="2018-01-01" max="3000-01-01" onfocus="this.max=new Date().toISOString().split('T')[0]" required>    
        `;

    parent[0].appendChild(formcontent);
}

function RemoveFormEntities()
{
    // event.preventDefault();
    const parent = document.getElementsByClassName('to_fill_cust_details');
    if(parent[0].childElementCount>0)
    {
        const child=parent[0].lastChild;
        parent[0].removeChild(child);
    }
}
