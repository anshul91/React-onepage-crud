import React, { useState } from 'react'

const Form = (props) => {
    const{name,job} = props.characterData;
    // const handleSubmit = props.handleSubmit;
    const [data,setData] = useState({name:'',job:''});
    console.log(props);
    
    const handleChange = (event) => {
        const {name, value} = event.target
        setData({
          ...data,[name]: value,
        })
    }
    const handleSubmitting = (data) => {
        props.handleSubmit(data);
        setData({name:'',job:''});

    }

    return (
        <div>
            
            <form handleSubmit={()=>handleSubmitting(data)}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={data.name} className="form-control" onChange={handleChange} />
                <label htmlFor="name">Job</label>
                <input type="text" name="job" id="job" value={data.job} onChange={handleChange} className="form-control"/>
                <br/>
                <button type="button" className="btn btn-success" onClick={() => handleSubmitting(data)}>Add New</button>
            </form>  
        </div>
    )
}

export default Form
