import React from "react";

interface IEmailTemplateProps {
    firstName: string;
    lastName: string;
    email: string;
}

const EmailTemplate = (props: IEmailTemplateProps) => {
    return (
        <div>
            <h1>{props.firstName}</h1>
            <h1>{props.lastName}</h1>
            <h1>{props.email}</h1>
        </div>
    );
};

export default EmailTemplate;
