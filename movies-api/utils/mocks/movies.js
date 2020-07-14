const moviesMock = [
  {
    id: '38841cd3-1f5d-40b2-ae66-cdd6b7033d18',
    title: 'Seventh Heaven (Septième ciel, Le)',
    year: 2012,
    cover: 'http://dummyimage.com/103x133.bmp/ff4444/ffffff',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    duration: 1982,
    contentRating: 'PG-13',
    source: 'https://umich.edu/amet.js',
    tags: [
      'Documentary|Drama',
      'Action|Comedy',
      'Comedy',
      'Animation|Children|Musical',
    ],
  },
  {
    id: '15cbc152-2f36-4bd1-af30-555cd9b7043e',
    title: 'Alibi',
    year: 1997,
    cover: 'http://dummyimage.com/222x115.png/dddddd/000000',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    duration: 1954,
    contentRating: 'PG',
    source: 'http://topsy.com/vel.jsp',
    tags: [
      'Comedy|Crime',
      'Adventure|Animation|Children|Comedy|Crime|Fantasy|Mystery',
      'Drama|Thriller',
      'Children|Comedy|Sci-Fi',
    ],
  },
  {
    id: '9cd56268-b974-4d45-88d8-318dfc94c1dc',
    title: 'Julien Donkey-Boy',
    year: 2004,
    cover: 'http://dummyimage.com/226x166.bmp/ff4444/ffffff',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    duration: 1961,
    contentRating: 'PG',
    source: 'https://army.mil/erat/vestibulum/sed/magna/at/nunc.html',
    tags: [
      'Action|Crime|Mystery|Sci-Fi|Thriller',
      'Drama',
      'Drama|Horror|Thriller',
    ],
  },
  {
    id: 'b1629ac5-e6ee-42ce-b2be-e0dc7a296642',
    title: 'Great Flamarion, The',
    year: 2002,
    cover: 'http://dummyimage.com/226x178.bmp/dddddd/000000',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    duration: 1928,
    contentRating: 'PG-13',
    source: 'https://narod.ru/adipiscing/elit.jpg',
    tags: ['Action|Drama|War', 'Drama', 'Drama|Thriller|War', 'Drama'],
  },
  {
    id: 'badb7a2b-3293-4358-a264-348a672a5fb9',
    title: 'Follow Me Quietly',
    year: 2006,
    cover: 'http://dummyimage.com/247x198.bmp/cc0000/ffffff',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    duration: 2022,
    contentRating: 'PG',
    source: 'https://mapy.cz/nisl/ut/volutpat/sapien.jsp',
    tags: ['Comedy|Drama'],
  },
  {
    id: '52980ce9-94a9-431e-a11f-4272fcc8e0b3',
    title: 'Tortured, The',
    year: 1997,
    cover: 'http://dummyimage.com/231x249.bmp/ff4444/ffffff',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
    duration: 1957,
    contentRating: 'R',
    source: 'https://digg.com/nisi/nam.aspx',
    tags: ['Horror'],
  },
  {
    id: 'd3207682-f68d-4a35-b608-44953fffaf20',
    title: 'Kids, The (Mistons, Les) (Mischief Makers, The)',
    year: 2001,
    cover: 'http://dummyimage.com/218x133.jpg/ff4444/ffffff',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    duration: 2007,
    contentRating: 'PG',
    source:
      'https://nhs.uk/id/mauris/vulputate/elementum/nullam/varius/nulla.png',
    tags: [
      'Action|Crime|Drama',
      'Action|Crime|Drama',
      'Comedy|Musical|Romance',
      'Drama',
      'Action|Drama|Romance',
    ],
  },
  {
    id: '5aac9d3a-f460-428c-b83e-f9079c8738e6',
    title: 'Jesus of Nazareth',
    year: 2007,
    cover: 'http://dummyimage.com/231x122.jpg/5fa2dd/ffffff',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    duration: 2024,
    contentRating: 'PG-13',
    source: 'http://altervista.org/rhoncus/sed/vestibulum/sit.json',
    tags: ['Drama|Romance', 'Action|Crime', 'Drama'],
  },
  {
    id: '08aa4abf-58b6-48b5-a4dc-d4852268d9b5',
    title: 'Aurora',
    year: 2006,
    cover: 'http://dummyimage.com/110x210.png/cc0000/ffffff',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    duration: 2038,
    contentRating: 'G',
    source: 'https://hao123.com/quisque/ut/erat/curabitur/gravida/nisi/at.js',
    tags: [
      'Action|Animation|Children|Crime',
      'Drama|Thriller',
      'Crime|Mystery',
    ],
  },
  {
    id: '4a9a1f1e-f247-4880-8cd8-8ed6e99ce8f4',
    title: 'Man Without a Face, The',
    year: 1993,
    cover: 'http://dummyimage.com/188x141.png/dddddd/000000',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    duration: 1988,
    contentRating: 'G',
    source:
      'https://cam.ac.uk/amet/sapien/dignissim/vestibulum/vestibulum.html',
    tags: ['Drama', 'Action|Comedy|Drama|Thriller'],
  },
];

module.exports = {
  moviesMock
};
