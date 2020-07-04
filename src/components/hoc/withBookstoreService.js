import React from 'react'
import { BookstoreConsumer } from '../bookstore-service-context';

export const withBookstoreService = () => (Wrapped) => {
// export const withBookstoreService = (mapMethodsToProps) => (Wrapped) => {
  return (props) => {
    return (
      <BookstoreConsumer>
        {
          (bookstoreService) => {
            // const serviceProps = mapMethodsToProps(bookstoreService)
            // return <Wrapped {...props} {...serviceProps} />
            return <Wrapped bookstoreService={bookstoreService} />
          }
        }
      </BookstoreConsumer>
    )
  }
}