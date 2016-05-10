function get(req, res){

  res.json(
    {
      saved: [
        {
          id: 1
        },
        {
          id: 2
        }
      ]
    }
  )

}

module.exports = get;
