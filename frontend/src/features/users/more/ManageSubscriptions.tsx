import React from "react";
import PageContainer from "../../../components/containers/PageContainer";
import ComingSoon from "../../../components/ComingSoon";
import Button from "../../../components/buttons/Button";
import BackBtn from "../../../components/buttons/BackBtn";

const ManageSubscriptions = () => {
    return (
        <div className="h-full">
            <BackBtn path="/more" />
            <PageContainer className="bg-pink-300">
                <span className="text-4xl font-bold">Taste Weekly Subscription</span>
                <span className="my-2">
                    **Save up to 10%** by scheduling a Taste Weekly Subscription of your regular delivery or pickup order!
                </span>
            </PageContainer>
            <Button containerClass="fixed" text="Subscribe And Save" onClick={() => {}} />
        </div>
    );
};

export default ManageSubscriptions;
