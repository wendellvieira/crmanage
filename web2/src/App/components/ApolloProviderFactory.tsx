import React from 'react'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import {ChildNode} from 'Types'

export const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
})

export default function ApolloProviderFactory({
    children,
}: ChildNode): JSX.Element {
    return <ApolloProvider client={client}>{children}</ApolloProvider>
}
