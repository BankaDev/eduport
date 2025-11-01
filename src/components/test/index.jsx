import {use, useState} from 'react';
const Test = () => {

   const [list, setList] = useState([]);
   const [form, setForm] = useState({
    content:''
   });

   const [edit,setEdit]= useState(false);
   const [editIndex , setEditIndex] = useState(null);

    const onChange = (e) =>{
        const element=e.target;
        const name=element.name;
        const value=element.value;

        setForm({
            ...form,
            [name]: value
        })
    }
    const onAddList =(e)=>{
        e.preventDefault();
        // console.log('form submitted', form);
        setList([
            ...list,
            form.content
        ])
        setForm({
            ...list,
            content:''
        })
    }

    const onSaveList =(e)=>{
        e.preventDefault();
        const newData= form.content;
        const temp =[...list]
        temp[editIndex] = newData
        setList(temp)
        setForm({
            ...form,
            content:''
        })
        setEdit(false)
        setEditIndex(null)
    }

   const onDeleteList = (index) => {
    const temp = [...list]; // create a copy
    temp.splice(index, 1);  // remove the item
    setList(temp);          // set updated array directly
    };

    const onEditList = (item,index) =>{
       setForm({
        ...list,
        content:item 
       })
       setEdit(true)
       setEditIndex(index)
       
    }

    const onEditCancel =()=>{
        setEdit(false)
        setForm({
            ...list,
            content:''
        })
    }



    return (
        <div>
           <div className="min-h-screen bg-gray-200 p-16 flex justify-center">
               <div className="flex flex-col gap-4">
               
                    <h2 className="text-4xl font-semibold mb-2">Dynamic List(Array)</h2>

                    <form className="flex" onSubmit={edit ? onSaveList : onAddList}>
                        <input 
                        value={form.content}
                         name="content"
                         required
                         className="px-4 flex-1 "  
                         onChange={onChange}
                         placeholder="Enter your content"/>
                        {
                            !edit && (
                                <button className="bg-violet-600 py-3 px-6 text-white font-semibold">
                                Add
                                </button>
                            )
                            }

                            {
                            edit && (
                                <div>
                                <button className="bg-green-600 py-3 px-6 text-white font-semibold">
                                    Save
                                </button>
                                <button onClick={onEditCancel} type="button" className="bg-gray-600 py-3 px-6 text-white font-semibold ml-2">
                                    Cancel
                                </button>
                                </div>
                            )
                        }

                    </form>

                    <ul className="flex flex-col gap-4">
                        {list.map((item,index)=>(
                            <li 
                                key={index} 
                                className="bg-white  px-4 py-6 border-b shadow rounded flex justify-between items-center">
                                <span>{item}</span>
                                <div>
                                <button onClick={()=>onEditList(item,index)} className='bg-indigo-50 w-[48px] h-[48px] rounded-full  text-[24px] mr-2'>
                                    <i className="fa fa-edit text-indigo-500"></i>
                                </button>
                                <button onClick={() =>onDeleteList(index)} className='bg-rose-50 w-[48px] h-[48px] rounded-full  text-[24px]'>
                                    <i className="fa fa-trash text-rose-500"></i>
                                </button>
                                </div>
                            </li>
                        ))}

                    </ul>
             
                
               </div>
           </div>
        </div>
    );
};

export default Test;