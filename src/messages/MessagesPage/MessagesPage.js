import React from 'react';
import InputPreview from "../../components/InputPreview";
import {connect} from "react-redux";
import {setMessage} from "../actions";
import {getMessage} from "../../store";

export const MessagesPage = ({message, setMessage}) => (
    <div>
        <InputPreview value={message}
                      onChange={setMessage}/>
        <h1>{message}</h1>
    </div>
)

export default connect(state => (
    {
        message: getMessage(state)
    }),
    {
        setMessage
    })(MessagesPage);
