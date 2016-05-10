function get(req, res){

  res.json(
    {
      series: [
        {
          id: 1,
          title: 'American Dad!',
          published_at: '2016-04-19T10:00:18.637Z',
          screenshot: 'http://www.ew.com/sites/default/files/styles/tout_image_612x380/public/i/2014/11/18/American-Dad_612x380.jpg?itok=wOjKOMNk',
          description: 'American Dad! from Family Guy creator, Seth MacFarlane, is the animated story of Stan Smith, who works for the CIA and is constantly on the alert for terrorist activity',
          category: 'comedy',
          user_name: 'Stan Smith'
        },
        {
          id: 2,
          title: 'The Simpsons',
          published_at: '2016-04-19T10:00:18.637Z',
          screenshot: 'http://www.wired.com/wp-content/uploads/2015/05/the-simpsons.jpg',
          description: 'The Simpsons is an American animated sitcom created by Matt Groening for the Fox Broadcasting Company',
          category: 'comedy',
          user_name: 'Homer Simpson'
        },
      ]
    }
  )

}

module.exports = get;
