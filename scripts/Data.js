const getRandomDate = () => {
  let date;
  do {
    const maxDate = Date.now();
    const timestamp = Math.floor(Math.random() * maxDate);
    date = new Date(timestamp);
  } while (date.getFullYear() < 2022);

  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);

  return `${year}.${month}.${day}`;
};

let sweetShirt = [
  {
    id: "1",
    image: "../images/sweatshirt/1.png",
    title: "Свитшот LA",
    date: `${getRandomDate()}`,
  },
  {
    id: "2",
    image: "../images/sweatshirt/2.png",
    title: "Свитшот Classic",
    date: `${getRandomDate()}`,
  },
  {
    id: "3",
    image: "../images/sweatshirt/3.png",
    title: "Свитшот Yellow",
    date: `${getRandomDate()}`,
  },
  {
    id: "4",
    image: "../images/sweatshirt/4.png",
    title: "Свитшот Cloud",
    date: `${getRandomDate()}`,
  },

  {
    id: "5",
    image: "../images/sweatshirt/5.png",
    title: "Свитшот Green",
    date: `${getRandomDate()}`,
  },

  {
    id: "6",
    image: "../images/sweatshirt/6.png",
    title: "Свитшот In Mute",
    date: `${getRandomDate()}`,
  },

  {
    id: "7",
    image: "../images/sweatshirt/7.png",
    title: "Свитшот Forever",
    date: `${getRandomDate()}`,
  },

  {
    id: "8",
    image: "../images/sweatshirt/8.png",
    title: "Свитшот Air",
    date: `${getRandomDate()}`,
  },

  {
    id: "9",
    image: "../images/sweatshirt/9.png",
    title: "Свитшот Explorer",
    date: `${getRandomDate()}`,
  },

  {
    id: "10",
    image: "../images/sweatshirt/10.png",
    title: "Свитшот Freedom Soul",
    date: `${getRandomDate()}`,
  },

  {
    id: "11",
    image: "../images/sweatshirt/11.png",
    title: "Свитшот Retro Style",
    date: `${getRandomDate()}`,
  },
  {
    id: "12",
    image: "../images/sweatshirt/12.png",
    title: "Свитшот City Streets",
    date: `${getRandomDate()}`,
  },
];

const tShirt = [
  {
    id: "1",
    image: "../images/t-shirts/1.png",
    title: "Футболка Blue Edit",
    date: `${getRandomDate()}`,
  },
  {
    id: "2",
    image: "../images/t-shirts/2.png",
    title: "Футболка Black",
    date: `${getRandomDate()}`,
  },
  {
    id: "3",
    image: "../images/t-shirts/3.png",
    title: "Футболка Red",
    date: `${getRandomDate()}`,
  },
  {
    id: "4",
    image: "../images/t-shirts/4.png",
    title: "Футболка Fall",
    date: `${getRandomDate()}`,
  },
  {
    id: "5",
    image: "../images/t-shirts/5.png",
    title: "Футболка Light-green",
    date: `${getRandomDate()}`,
  },

  {
    id: "6",
    image: "../images/t-shirts/6.png",
    title: "Футболка BlackWhite",
    date: `${getRandomDate()}`,
  },

  {
    id: "7",
    image: "../images/t-shirts/7.png",
    title: "Футболка Chempion Energy",
    date: `${getRandomDate()}`,
  },

  {
    id: "8",
    image: "../images/t-shirts/8.png",
    title: "Футболка Creative Cricker",
    date: `${getRandomDate()}`,
  },

  {
    id: "9",
    image: "../images/t-shirts/9.png",
    title: "Футболка BeGood",
    date: `${getRandomDate()}`,
  },

  {
    id: "10",
    image: "../images/t-shirts/10.png",
    title: "Футболка Better Alone",
    date: `${getRandomDate()}`,
  },

  {
    id: "11",
    image: "../images/t-shirts/11.png",
    title: "Футболка Клико",
    date: `${getRandomDate()}`,
  },
];

const trousers = [
  {
    id: "1",
    image: "../images/trousers/1.png",
    title: "Брюки BEST TRICOTAGE",
    date: `${getRandomDate()}`,
  },
  {
    id: "2",
    image: "../images/trousers/2.png",
    title: "Брюки Oodji Lab",
    date: `${getRandomDate()}`,
  },
  {
    id: "3",
    image: "../images/trousers/3.png",
    title: "Брюки Street Spirit",
    date: `${getRandomDate()}`,
  },
  {
    id: "4",
    image: "../images/trousers/4.png",
    title: "Брюки Be Very",
    date: `${getRandomDate()}`,
  },

  {
    id: "5",
    image: "../images/trousers/5.png",
    title: "Брюки Power Engineer",
    date: `${getRandomDate()}`,
  },

  {
    id: "6",
    image: "../images/trousers/6.png",
    title: "Брюки Laid-back",
    date: `${getRandomDate()}`,
  },

  {
    id: "7",
    image: "../images/trousers/7.png",
    title: "Брюки Workout",
    date: `${getRandomDate()}`,
  },

  {
    id: "8",
    image: "../images/trousers/8.png",
    title: "Брюки Dynamic",
    date: `${getRandomDate()}`,
  },

  {
    id: "9",
    image: "../images/trousers/9.png",
    title: "Брюки Strong Black",
    date: `${getRandomDate()}`,
  },

  {
    id: "10",
    image: "../images/trousers/10.png",
    title: "Брюки Pseudo Style",
    date: `${getRandomDate()}`,
  },
];
