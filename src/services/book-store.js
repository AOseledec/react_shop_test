class BookstoreService {
  getBooks() {
    return [
      {
        id: 1,
        title: 'Vinny Pooh',
        author: 'A.D. Abrams'
      },
      {
        id: 2,
        title: 'Alice in Wonderland',
        author: 'A.B. Abrams'
      }
    ]
  }
}

export const bookstoreService = new BookstoreService();