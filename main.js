const btn = document.querySelector('.button');
const quoteText = document.querySelector(".quote-text");
const person = document.querySelector(".author");

let quotes = [
  {
    text: '"To live is the rarest thing in the world. Most people exist, that is all"',
    author: "Oscar Wilde",
  },
  {
    text: '"That it will never come again is what makes life so sweet."',
    author: " Emily Dickinson",
  },
  {
    text: '"It is never too late to be what you might have been"',
    author: " George Eliot",
  },
  {
    text: '"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment"',
    author: "Ralph Waldo Emerson",
  },
  {
    text: '"Pain is inevitable. Suffering is optional"',
    author: " Haruki Murakami",
  },
  {
    text: '"All the world\'s a stage, and all the men and women merely players."',
    author: "William Shakespeare",
  },
  {
    text: '"Be kind, for everyone you meet is fighting a hard battle"',
    author: " Plato",
  },
  {
    text: '"Unable are the loved to die for love is immortality"',
    author: " Emily Dickinson",
  },
  {
    text: '"Do not hoard what seems good for a later place in the book, or for another book; give it, give it all, give it now"',
    author: "Annie Dillard",
  },
  {
    text: '"You don\'t start out writing good stuff. You start out writing crap and thinking it\'s good stuff, and then gradually you get better at it. That\'s why I say one of the most valuable traits is persistence"',
    author: "Octavia E. Butler",
  },
  {
    text: '"We have to continually be jumping off cliffs and developing our wings on the way down"',
    author: " Kurt Vonnegut",
  },
  {
    text: '"The strongest principle of growth lies in the human choice"',
    author: "George Eliot",
  },
];

function changeNext() {
  let random = Math.floor(Math.random()* quotes.length);
  quoteText.innerText = quotes[random].text;
  person.innerText = quotes[random].author;
}


btn.addEventListener('click', changeNext);
