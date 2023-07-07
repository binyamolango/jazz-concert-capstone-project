const featuredMusicians = [{
  name: "Bereket Abebe's Band",
  image: './images/performers/Bereket-Abebe.png',
  title: 'Jazz-funk fusion band',
  detail: "Bereket Abebe's Band has released a studio album recently called Three-World.",
}, {
  name: 'Henok Temesgen',
  image: './images/performers/Henok-Temesgen.png',
  title: 'Bass player and composer',
  detail: 'Henok Temesgen is well known Ethiopian bass player; He recorded bass for many tracks and also worked on my live stages with major artists.',
}, {
  name: 'Jazbyssinia Band',
  image: './images/performers/Jazbyssinia.png',
  title: 'Ethio-jazz band',
  detail: 'Jazbyssinia Band has recorded studio album and currently they are recording their second album and performing at fendika cultural center on Wednesday night.',
}, {
  name: 'Besufekad Alemu',
  image: './images/performers/Besufekad-Alemu.png',
  title: 'Pianist, composer and choral director',
  detail: 'Besufekad has worked with major gospel artists and did choir arrangement for many groups and choirs. Currently He is a pianist at CMC Seventh-day Adventist Church.',
}, {
  name: 'Oneway',
  image: './images/performers/Oneway.png',
  title: 'Gospel-jazz-contemporary vocal group',
  detail: 'Oneway has released their first album at 2010 and now there are giving service for different churches.',
}, {
  name: 'Amanuel Worku',
  image: './images/performers/Aman-Worku.png',
  title: 'Pianist and Sound Engineer',
  detail: 'Amanuel has been serving CMC Seventh-day Adventist church as a piano player for the past 6 years and currently He is working as a sound-engineer.',
}];

const musicianName = document.querySelectorAll('.musician-name');
const musicianImage = document.querySelectorAll('.musician-img');
const musicianTitle = document.querySelectorAll('.musician-title');
const musicianDetail = document.querySelectorAll('.musician-detail');

for (let i = 0; i < musicianName.length; i += 1) {
  musicianName[i].textContent = featuredMusicians[i].name;
}

for (let i = 0; i < musicianImage.length; i += 1) {
  musicianImage[i].src = featuredMusicians[i].image;
}

for (let i = 0; i < musicianTitle.length; i += 1) {
  musicianTitle[i].textContent = featuredMusicians[i].title;
}

for (let i = 0; i < musicianDetail.length; i += 1) {
  musicianDetail[i].textContent = featuredMusicians[i].detail;
}