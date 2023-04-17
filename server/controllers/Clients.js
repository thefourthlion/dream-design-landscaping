const Clients = require("../models/Clients");
exports.createClients = async (req, res) => {
  try {
    const htmlEmail = ` 
    <div>
          <h2>Hey Mike,</h2>
          <h2>Your website brought in a new client.</h2>
          <h4>NAME | ${req.body.name}</h4>
          <h4>
            EMAIL (optional) |
            <a href="mailto:${req.body.email}?subject=Thank you for reaching out to Dream Design Landscaping">
              ${req.body.email}
            </a>
          </h4>
          <h4>
            PHONE # |
            <a href="tel:${req.body.phone}">${req.body.phone}</a>
          </h4>
          <h4>ADDRESS | <a href="https://www.google.com/maps/place/${req.body.address}">${req.body.address}</a>.</h4>
          <h4>MESSAGE | ${req.body.description}.</h4>
          <h4>DATE SENT | ${req.body.timestamp}.</h4>
        </div>    
    `;

    await sendEmail(
      process.env.FROM_EMAIL,
      process.env.TO_EMAIL,
      "DDLandscaping 🌲 | NEW CUSTOMER",
      htmlEmail
    );

    let newClients = new Clients({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      address: req.body.address,
      description: req.body.description,
      timestamp: req.body.timestamp,
    });
    await newClients.save();
    res.send(newClients);
  } catch (err) {
    console.log(err);
  }
};
exports.readClients = async (req, res) => {
  const page = req.query.page || 0;
  const limit = req.query.limit || 25;
  try {
    Clients.find({}, (err, result) => {
      if (err) {
        res.json({ app: err });
      }
      res.send(result);
    })
      .sort()
      .skip(page * limit)
      .limit(limit);
  } catch (err) {
    console.log(err);
  }
};
exports.readClientsFromID = async (req, res) => {
  try {
    await Clients.findById({ _id: req.params.id }, {}, (err, result) => {
      if (err) {
        res.json({ app: err });
      }
      res.send(result);
    });
  } catch (err) {
    console.log(err);
  }
};
exports.updateClients = async (req, res) => {
  try {
    await Clients.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        address: req.body.address,
        description: req.body.description,
        timestamp: req.body.timestamp,
      },
      (err, result) => {
        if (err) {
          res.json({ app: err });
        }
        res.send(result);
      }
    );
  } catch (err) {
    console.log(err);
  }
};
exports.deleteClients = async (req, res) => {
  try {
    if ((await Clients.findById(req.params.id)) === null) {
      res.json({ app: "post not found" });
    } else {
      await Clients.findByIdAndRemove(req.params.id).exec();
      res.json({ app: "post deleted" });
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
