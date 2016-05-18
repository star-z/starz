function get(req, res){

  res.json(
    {
      movies: [
        {
          id: 1,
          title: 'Gleaming the cube',
          published_at: '2016-04-19T10:00:18.637Z',
          screenshot: 'http://imgur.com/Iz2iXxb.jpg',
          description: 'Brians adopted brother is killed when he discovers that the shop he works in sends weapons to Vietnam instead of medications. To the police it looks like suicide, but Brian knows better so he skates off to investigate the murder himself.',
          category: 'action',
          user_name: 'Christian Slater'
        },
        {
          id: 2,
          title: 'Prayer of the rollerboys',
          published_at: '2016-04-19T10:00:18.637Z',
          screenshot: 'http://imgur.com/yrwFoXT.jpg',
          description: 'Set in an unspecified time in the future, USA has declined and become a country of violence and racial prejudice. Griffin earns his living delivering pizzas while he tries to take care of his little brother. An old friend of his, Gary Lee, is the leader of a gang with big ambitions, the Rollerboys. Gary joins them to help the police keep track of the gang.',
          category: 'action',
          user_name: 'Corey Haim'
        },
      ]
    }
  )

}

module.exports = get;
