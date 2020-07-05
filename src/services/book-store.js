class BookstoreService {
  data = [
    {
      id: 1,
      title: 'Vinny Pooh',
      author: 'A.D. Abrams',
      price: 32,
      coverImage: 'http://abali.ru/wp-content/uploads/2012/01/staraya_oblozhka_knigi.jpg'
    },
    {
      id: 2,
      title: 'Alice in Wonderland',
      author: 'A.B. Abrams',
      price: 32,
      coverImage: 'http://abali.ru/wp-content/uploads/2012/01/staraya_oblozhka_knigi.jpg'
    }
  ];

  getBooks() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.data)
      }, 500)
    })
  }
}

export const bookstoreService = new BookstoreService();