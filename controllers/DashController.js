const page1 = require('../json/page1.json')
const page2 = require('../json/page2.json')
const page3 = require('../json/page3.json')

class DashController {
  static async dashboard(req, res) {
    const page = req.params.page
    switch (page) {
      case '1':
        res.status(200).json({ page1 })
        break
      case '2':
        res.status(200).json({ page2 })
        break
      case '3':
        res.status(200).json({ page3 })
        break
      default:
        res.status(404).json({ message: 'Page not found!' })
    }
  }
}

module.exports = DashController
