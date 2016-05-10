function get(req, res){

  res.json(
    {
      tv: [
        {
          id: 1,
          title: 'American Dad!',
          published_at: '2016-04-19T10:00:18.637Z',
          screenshot: 'http://geekshizzle.com/wp-content/uploads/2013/12/gleaming-the-cube-4.jpg',
          description: 'American Dad! from Family Guy creator, Seth MacFarlane, is the animated story of Stan Smith, who works for the CIA and is constantly on the alert for terrorist activity',
          category: 'comedy',
          user_name: 'Stan Smith'
        },
        {
          id: 2,
          title: 'The Simpsons',
          published_at: '2016-04-19T10:00:18.637Z',
          screenshot: 'http://2.bp.blogspot.com/-ZKncJ71Za8E/U31UVvhxuFI/AAAAAAAAgQU/vDwmqOBIdbQ/s1600/Prayer-of-the-Rollerboys-Patricia-Arquette-13.JPG',
          description: 'The Simpsons is an American animated sitcom created by Matt Groening for the Fox Broadcasting Company',
          category: 'comedy',
          user_name: 'Homer Simpson'
        },
      ]
    }
  )

}

module.exports = get;
