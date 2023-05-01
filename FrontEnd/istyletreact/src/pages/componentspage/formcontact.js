import React from "react";
import './Formcontact.css'
// set start value
const startmessage = {sender: "", inbox: ""};
const FormContact = () => {
    // States
    const [message, setmessage] = React.useState(startmessage);
    const [editmessage, seteditmessage] = React.useState(null);
    const [messageall, setmessageall] = React.useState([]); 
    // Functions
    function onValueChange(event) {
        const {name, value} = event.target;
        setmessage((preMessage) => {
            return {
                ...preMessage,
                [name]: value
            };
        });
    };
    function onSubmitnote(event) {
        event.preventDefault();

        setmessageall((preMessageall)=>{
            const newmessage = {...message};
            newmessage.id = Date.now().toString();
            return [newmessage,...preMessageall];
        });
        setmessage(startmessage);
    };
    function deleteMessage(messageid) {
        setmessageall ((preMessageall) => {
            return preMessageall.filter((message) => {
                return message.id !== messageid;
            });
        }
    )};
    //  UI components
    const messageElement = messageall.map((message) => {
             return (
                <div key={message.id} className="container bg-light">
                    <h5 className="text-danger">Name : {message.sender}</h5>
                    <h5 className="text-danger">Text : {message.inbox}</h5>
                    <p><a className="fw-bold" href="#" onClick={() => {seteditmessage(message.id)}}>Edit</a></p>
                    <p> | </p>
                    <p><a className="fw-bold" href="#" onClick={() => {deleteMessage(message.id)}}>Delet</a></p>
                </div>
             );
    });
    const editmessageElement = messageall.filter((message) => {})


                    return (
                        <div className="container bg-secondary">
                             <form onSubmit={onSubmitnote} className="main-formcontact d-flex flex-column align-items-center bg-dark w-80" >
                                            <div className="input-data d-flex flex-column py-3">
                                                <h5 className="fw-bold text-light">ระบบฝากข้อความ</h5>
                                                <label className="text-light fw-bold" htmlFor="name-sender">Name :</label>
                                                <input type="text" value={message.sender} name="sender" onChange={onValueChange}/>
                                                <label className="text-light fw-bold" htmlFor="text-message">Text :</label>
                                                <input type="text" value={message.inbox} name="inbox" onChange={onValueChange}/>
                                                {/* <label className="text-light fw-bold" for="contact-sender">Tel :</label> */}
                                                {/* <input type="number"/> */}
                                                {/* <label className="text-light fw-bold" for="test">test</label> */}
                                                {/* <input type="range"/> */}
                                                {/* <label className="text-light fw-bold" for="test">test</label> */}
                                                {/* <input type="color"/> */}
                                            </div>
                                            <div>
                                                <button type="submit" className="btn btn-success">Submit</button>
                                                {/* <button className="btn btn-warning">Reset</button> */}
                                                {/* <button className="btn btn-danger">Cancel</button> */}
                                            </div>
                                        </form>
                                            <div className="container bg-warning text-danger">
                                            {messageElement}
                                            </div>
                        </div>
                                       
                    );

}
export default FormContact;