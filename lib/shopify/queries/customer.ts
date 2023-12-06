export const GET_CUSTOMER = /* GraphQL */ `
    query GetCustomer($customerAccessToken: String!) {
        customer(customerAccessToken: $customerAccessToken) {
            id
            firstName
            lastName
            acceptsMarketing
            email
            phone
        }
    }
`;
