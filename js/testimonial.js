/*Reviews Data for manipulation*/ 
const reviews = [
    {
        user_name: 'Itu',
        job: '* Software Developer *',
        text: 'He is a highly skilled programmer with  a keen eye for detail and passion for delivering top-notch solutioms.',
    },
    {
        user_name: 'Fusi',
        job: '* Marketing Management *',
        text:'He writes clean, effecient code and is a valuable as asset to any developement team.',
    },
    {
        user_name: 'Justice',
        job: '* Java Developer *',
        text: 'You are a dedicated developer with a passion  for coding and tech. His enthusiasm is contagious, and his strong work ethics ensures great results. He is a team player who brings energy and ideas to every project, making him a valueable asset to any team.',
    },
    {
        user_name: 'Tjela',
        job: '* Civil Engineering *',
        text: 'Personally, I believe you are quite talented, and i am confident you will be an asset to any organization that hires you.',
    },
    {
        user_name: 'KAT',
        job: '* Software Engineering *',
        text: 'Seetsi\'s website impressed me from the start. The user experience was seamless and the design was polished.'
    } 
    
  
  ]
  
  // Creating variables to get elements from our DOM.
  const myAuthor = document.getElementById('user_name');
  const myJob = document.getElementById('job');
  const myText = document.getElementById('text');
  const prev = document.getElementById('prev-btn');
  const next = document.getElementById('next-btn');
  const random = document.getElementById('randomBtn')
  
  let indexNum = 0;
  let length = reviews.length;
  
  // Code for listening next button event
  next.addEventListener('click', function () {
    indexNum++;
    if (indexNum > length-1) {
        indexNum = 0;
        myAuthor.innerHTML = reviews[indexNum].user_name;
        myJob.innerHTML = reviews[indexNum].job;
        myText.innerHTML = reviews[indexNum].text;
    }
    else {
        myAuthor.innerHTML = reviews[indexNum].user_name;
        myJob.innerHTML = reviews[indexNum].job;
        myText.innerHTML = reviews[indexNum].text;
    }
  })
  
  // Code for listening previous button event
  prev.addEventListener('click', function () {
    indexNum--;
    if (indexNum < 0) {
        indexNum = 5;
        myAuthor.innerHTML = reviews[indexNum].user_name;
        myJob.innerHTML = reviews[indexNum].job;
        myText.innerHTML = reviews[indexNum].text;
    }
    else {
        myAuthor.innerHTML = reviews[indexNum].user_name;
        myJob.innerHTML = reviews[indexNum].job;
        myText.innerHTML = reviews[indexNum].text;
    }
  })
  
  // Code for listening random button event
  random.addEventListener('click', function () {
    let num = Math.floor(5 * (Math.random()));
  
    myAuthor.innerHTML = reviews[num].user_name;
    myJob.innerHTML = reviews[num].job;
    myText.innerHTML = reviews[num].text;
  })
