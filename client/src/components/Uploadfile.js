import React,{Fragment,useState} from 'react'
import axios from 'axios';

const Uploadfile = () => {
    const [file,setFile] = useState('')

    const getFile = function(e){
        const fileName = e.target.value
        setFile(fileName.slice(12,fileName.length))
    }
    const onSubmit = async(e)=>{
     e.preventDefault();
     axios.defaults.headers.common.authorization = localStorage.getItem('token');
     const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({ file:file});

    const response = await axios.post('http://localhost:2323/uploadfile/12',body,config)


    }
    return (
        <Fragment>
            <form className="my-5 mx-5 border p-4 border-info" onSubmit={e=>onSubmit(e)}>
                <div className="form-group">
                    <label for="exampleFormControlFile1">Upload Your File</label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1" onChange={e=>getFile(e)}/>
                    <button type="submit" className="btn btn-primary border my-4 border border-primary">Submit</button>
                </div>
            </form>
        </Fragment>
    )
}

export default Uploadfile;
