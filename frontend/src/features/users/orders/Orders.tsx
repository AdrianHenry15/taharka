import React from "react";
import PageContainer from "../../../components/containers/PageContainer";
import ComingSoon from "../../../components/ComingSoon";
import Button from "../../../components/buttons/Button";
import BackBtn from "../../../components/buttons/BackBtn";

const Orders = () => {
    return (
        <div className="h-full">
            <BackBtn path="/more" />
            <Button text="Make Purchase" onClick={() => {}} />
            <PageContainer className="items-center">
                <span>You haven't made any orders yet.</span>
            </PageContainer>
        </div>
    );
};

export default Orders;
