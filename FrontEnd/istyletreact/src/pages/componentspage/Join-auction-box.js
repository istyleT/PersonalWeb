import React from "react";
import './Join-auction-box.css'
// set start value
const startmessage = {sender: "", inbox: ""};
const JoinAuctionBox = () => {
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
                    return (
                                   <form onSubmit={onSubmitnote} className="main-join-box d-flex flex-column align-items-center rounded-3 bg-dark font-monospace border border-2 border-success" >
                                        <div className="offer-box d-flex flex-column py-1">
                                            <h5 className="fw-bold text-light mb-1 py-1 border-2 border-bottom border-success text-center">Join Auction.</h5>
                                            <label className="fw-bold mb-1 font-monospace" htmlFor="name-sender">Price</label>
                                            <input className="mb-1 rounded-pill text-center" placeholder="Bath" type="text" value={message.sender} name="sender" onChange={onValueChange}/>
                                            <label className="fw-bold mb-1 font-monospace" htmlFor="text-message">Message</label>
                                            <textarea className="mb-1 rounded-3 p-2" placeholder="Some text" cols="20" rows="2" type="text" value={message.inbox} name="inbox" onChange={onValueChange}/>
                                        </div>
                                        <div>
                                            <button type="submit" className="btn btn-success fw-bold rounded-pill px-3">Offer</button>
                                        </div>
                                    </form>
                    );
};
export default JoinAuctionBox;