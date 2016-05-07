function get(req, res){

  res.json(
    {
      reviews: [
        {
          id: 1,
          title: 'Gleaming the cube',
          published_at: '2016-04-19T10:00:18.637Z',
          body: 'A very exciting thriller with the best skateboarding chase scenes I have ever seen. Slater is fantastic in this movie, and so cute. I loved it',
          category: 'action',
          user_name: 'Senev J Fenez'
        },
        {
          id: 2,
          title: 'Gleaming the cube',
          published_at: '2016-04-19T10:00:18.637Z',
          body: 'This was an instant cult classic due to the cameo appearances of the most famous skaters in the world. As a film, it really does not stand on its own. Howver its a great 80s nostalgia flick for sure',
          category: 'action',
          user_name: 'Nelev N Fenez'
        },
        {
          id: 3,
          title: 'Gleaming the cube',
          published_at: '2016-04-19T10:00:18.637Z',
          body: 'A Cool blast from the past that encompasses as many sensational skating sequences as it does cinematic suspense',
          category: 'action',
          user_name: 'Naven S Veze'
        },
        {
          id: 4,
          title: 'Prayer of the rollerboys',
          published_at: '2016-04-19T10:00:18.637Z',
          body: 'If you were a kid in the mid 90s and had HBO, you likely saw this at one point or another. Its honestly pretty decent for a skater movie set against the backdrop of a dystopian future that mixes white supremacism with romance. Oh and its actually got a decent cast, headlined by Corey Haim and Patricia Arquette.',
          category: 'action',
          user_name: 'Jenva X Nathan'
        },
        {
          id: 5,
          title: 'Prayer of the rollerboys',
          published_at: '2016-04-19T10:00:18.637Z',
          body: 'Cool roller-skating action of the 21st century with Corey Haim. An 80s movie made in the early 90s?',
          category: 'action',
          user_name: 'Tenel Jant'
        }
      ]
    }
  )

}

module.exports = get;
