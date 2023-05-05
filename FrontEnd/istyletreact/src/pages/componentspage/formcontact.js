import React from "react";
import './Formcontact.css'
const startmessage = {sender: "", inbox: ""};
const FormContact = () => {
    // States
    const [message, setmessage] = React.useState(startmessage);
    const [editmessage, seteditmessage] = React.useState(null);
    const [messageall, setmessageall] = React.useState([]); 
    // Functions Form Input
    function onValueChange(event) {
        const {name, value} = event.target;
        setmessage((preMessage) => {
            return {
                ...preMessage,
                [name]: value
            };
        });
    };
    function onEditValueChange(event) {
        const {name, value} = event.target;
        seteditmessage((preMessage) => {
            return {
                ...preMessage,
                [name]: value
            };
        });
    };

    // Functions Add Edit Delete
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
    function onEditSubmit(event) {
        event.preventDefault();
        setmessageall((preMessageall) => {
            return preMessageall.map((message) => {
                if (message.id === editmessage.id) {
                    return editmessage;
                }
                return message;
            });
        });
        seteditmessage(null);
    };
    //  UI components message
    const messageElement = messageall.map((message) => {
             return ( 
                <div key={message.id} className="main-message-element p-3 rounded-3 d-flex justify-content-center align-items-center mt-2 fixed-bottom">
                   <div className="float-end">
                    <h6 className="text-light d-flex">Poster : <p> {message.sender}</p></h6>
                    <h6 className="text-light d-flex">Message : <p>{message.inbox}</p></h6>
                   </div>
                   <div className="float-end">
                    <button className="d-block btn btn-warning fw-bold m-1" href="#" onClick={() => {seteditmessage(message)}}>Edit Post</button>
                    <button className="d-block btn btn-danger fw-bold m-1" href="#" onClick={() => {deleteMessage(message.id)}}>Delete Post</button>
                   </div>
                </div>
             );
    });
    let editmessageElement = null;
    if (!!editmessage) {
        editmessageElement = (
            <form  className="edit-formcontact d-flex flex-column align-items-center bg-dark w-80" onSubmit={onEditSubmit}>
            <div className="input-data d-flex flex-column py-3">
                <h5 className="fw-bold text-light">เเก้ไขข้อความ</h5>
                <label className="text-light fw-bold" htmlFor="name-sender">Poster</label>
                <input type="text" value={editmessage.sender} name="sender" onChange={onEditValueChange}/>
                <label className="text-light fw-bold" htmlFor="text-message">Message</label>
                <input type="text" value={editmessage.inbox} name="inbox"  onChange={onEditValueChange}/>

            </div>
            <div>
                <button type="submit" className="btn btn-success">Submit</button>
            </div>
        </form>
        );
    }

                    return (
                        <div className="main-auction-display ms-1 bg-transparent">
                            <div className="main-formcontact d-flex flex-column align-items-center rounded-3 bg-dark" >
                                <div className="offer-box d-flex flex-column py-3">
                                    
                                </div>
                                <div>
                                    <button type="submit" className="btn btn-danger fw-bold rounded-pill">Offer</button>
                                </div>
                            </div>
                             <div className="mt-3">
                             {messageElement}
                             </div>
                                            <div className="bg-primary text-light">
                                             {editmessageElement}
                                            </div>
                                            
                        </div>
                                       
                    );

}
export default FormContact;